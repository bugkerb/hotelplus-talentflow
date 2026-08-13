import { spawn } from 'node:child_process';
const port = 19000 + Math.floor(Math.random() * 500); const processRef = spawn(process.execPath, ['server/index.mjs'], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'inherit'] });
const base = `http://127.0.0.1:${port}`; const wait = new Promise((resolve) => processRef.stdout.on('data', resolve)); await wait;
const assert = (condition, message) => { if (!condition) throw Error(message); };
const headers = { 'content-type': 'application/json', 'x-user-role': 'recruiter' }; const create = await fetch(`${base}/api/candidates`, { method: 'POST', headers: { ...headers, 'idempotency-key': 'smoke-candidate-1' }, body: JSON.stringify({ name: 'Smoke Candidate', email: 'smoke@example.com' }) }); const candidate = await create.json(); assert(create.status === 201 && candidate.id, 'candidate create failed');
const replay = await fetch(`${base}/api/candidates`, { method: 'POST', headers: { ...headers, 'idempotency-key': 'smoke-candidate-1' }, body: JSON.stringify({ name: 'Smoke Candidate', email: 'smoke@example.com' }) }); assert(replay.status === 201 && (await replay.json()).id === candidate.id, 'idempotency replay failed');
const denied = await fetch(`${base}/api/candidates`, { method: 'POST', headers: { ...headers, 'x-user-role': 'viewer', 'idempotency-key': 'smoke-denied' }, body: JSON.stringify({ name: 'Denied', email: 'denied@example.com' }) }); assert(denied.status === 403, 'authorization boundary failed');
const ai = await fetch(`${base}/api/ai/screen`, { method: 'POST', headers, body: JSON.stringify({ resume: 'resume', jobDescription: 'jd' }) }); assert(ai.status === 200 && (await ai.json()).status === 'needs_review', 'AI fallback failed');
processRef.kill(); console.log('API smoke PASS');
