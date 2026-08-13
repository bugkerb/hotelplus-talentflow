import { createServer } from 'node:http';
import { createHash, randomUUID } from 'node:crypto';

const port = Number(process.env.PORT || 8787);
const candidates = new Map();
const idempotency = new Map();
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';

function json(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', 'x-frame-options': 'DENY', 'content-security-policy': "default-src 'none'; frame-ancestors 'none'", 'access-control-allow-origin': allowedOrigin, 'access-control-allow-headers': 'content-type, idempotency-key, if-match', 'access-control-allow-methods': 'GET,POST,OPTIONS' });
  res.end(JSON.stringify(body));
}

async function body(req) { let text = ''; for await (const chunk of req) { text += chunk; if (text.length > 1_000_000) throw Error('payload_too_large'); } return text ? JSON.parse(text) : {}; }
function fingerprint(value) { return createHash('sha256').update(JSON.stringify(value)).digest('hex'); }
function mutation(req, payload, handler) {
  const key = req.headers['idempotency-key'];
  if (!key || typeof key !== 'string' || key.length > 128) throw Object.assign(Error('idempotency_key_required'), { status: 400 });
  const fp = fingerprint(payload); const prior = idempotency.get(key);
  if (prior && prior.fp !== fp) throw Object.assign(Error('idempotency_conflict'), { status: 409 });
  if (prior) return prior.result;
  const result = handler(); idempotency.set(key, { fp, result }); return result;
}

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') return json(res, 204, {});
  try {
    if (req.url === '/health' && req.method === 'GET') return json(res, 200, { ok: true });
    if (req.url === '/api/candidates' && req.method === 'GET') return json(res, 200, { data: [...candidates.values()] });
    if (req.url === '/api/candidates' && req.method === 'POST') {
      const payload = await body(req); const result = mutation(req, payload, () => { const id = randomUUID(); const candidate = { id, ...payload, stage: 'applied', version: 1 }; candidates.set(id, candidate); return candidate; }); return json(res, 201, result);
    }
    const match = req.url?.match(/^\/api\/candidates\/([^/]+)\/stage$/);
    if (match && req.method === 'POST') {
      const payload = await body(req); const current = candidates.get(match[1]); if (!current) return json(res, 404, { error: 'candidate_not_found' });
      const result = mutation(req, payload, () => { if (payload.expectedVersion !== current.version) throw Object.assign(Error('version_conflict'), { status: 409 }); const next = { ...current, stage: payload.stage, version: current.version + 1 }; candidates.set(current.id, next); return next; }); return json(res, 200, result);
    }
    return json(res, 404, { error: 'not_found' });
  } catch (error) { return json(res, error.status || 400, { error: error.message === 'Unexpected end of JSON input' ? 'invalid_json' : error.message }); }
});

server.listen(port, () => console.log(`TalentFlow API listening on ${port}`));
