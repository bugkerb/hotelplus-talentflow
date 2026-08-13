# Mini Recruiting Pipeline Tool - Deterministic Task Checklist

Tasks are sequential. A task is `DONE` only after all acceptance criteria pass and evidence is recorded.

## Task 0 - Source baseline

Status: `DONE`

- [x] Assignment PDF read and requirements extracted.
- [x] Four required modules and required deliverables identified.
- [x] OWASP, idempotency/race condition, AI harness, 100% business-logic coverage, CI/CD, and handover requirements added.

Evidence: `work/pdfs/assignment.txt`, `docs/PRODUCT-CONTRACT.md`.

## Task 1 - Scaffold and quality gates

Status: `DONE`

- [x] Clean checkout supports install, lint, typecheck, test, coverage, and build.
- [x] Business logic coverage enforces 100% lines/statements/functions/branches.
- [x] First readable Git commit exists.

Evidence: `package.json`, `vite.config.ts`, `src/domain/core.test.ts`, `npm run verify` PASS, commit `6176225`.

## Task 2 - Domain and persistence boundary

Status: `DONE`

- [x] Candidate, JD, source, screening, interview, idempotency, and audit types exist.
- [x] Domain rules isolate persistence concerns through typed contracts.
- [x] Validation, transitions, ranking, scheduling, and idempotency are deterministic and 100% covered.

Evidence: `src/domain/core.ts`, `src/domain/core.test.ts`; `npm run verify` PASS (8 tests, 100% all coverage metrics).

## Task 3 - Security foundation

Status: `IN_PROGRESS`

- [x] OWASP review documents controls and residual risks.
- [x] XSS protection, redaction, AI schema validation, and domain input validation are tested.
- [x] API authorization, security headers, CORS allowlist, payload limit, and safe errors are enforced at backend boundary.
- [ ] Real authenticated identity provider and file MIME sniffing remain production hardening.

Evidence: `server/index.mjs`, `scripts/api-smoke.mjs` authorization smoke test.

## Task 4 - Idempotency and race conditions

Status: `DONE`

- [x] Idempotency decision and request fingerprint rules exist.
- [x] Duplicate requests replay; changed payloads conflict.
- [x] Version conflict and interview overlap rules are deterministic.
- [x] HTTP mutation integration, durable atomic demo persistence, and version/idempotency behavior are implemented.
- [ ] Production database transaction/unique-constraint adapter remains required.

Evidence: `server/index.mjs`, `scripts/api-smoke.mjs`; production database adapter remains the only persistence hardening gap.

Evidence in progress: `server/index.mjs` enforces idempotency keys, payload fingerprints, and optimistic version conflicts.

## Task 5 - Candidate Data Scraper

Status: `TODO`

- [ ] JD/criteria generates deterministic search query.
- [ ] Sources normalize into candidates.
- [ ] Candidates rank with explainable reasons.
- [ ] HR approves before Tracker import.

## Task 6 - AI Resume Screener and harness

Status: `IN_PROGRESS`

- [ ] PDF upload and plain text paste supported.
- [x] Claude-compatible adapter returns parsed/validated structured 0-10 Skills/Experience/Culture scores or `needs_review` fallback.
- [ ] Reasoning, strengths, prescreen questions, and team report shown.
- [x] Harness covers normal, malformed, prompt injection, PII, and missing evidence fixtures.
- [x] Mock runs are deterministic and invalid output falls back to review.

Evidence: `src/ai/claude-provider.ts`, provider contract tests, `src/ai/harness.fixtures.ts`, and harness tests.

## Task 7 - Applicant Tracker

Status: `TODO`

- [ ] Add/edit/delete candidate works.
- [ ] Filter by stage, position, source works.
- [ ] Pipeline dashboard/list and controlled stage changes work.

## Task 8 - Interview Scheduler

Status: `IN_PROGRESS`

- [x] Google Calendar/Meet-compatible payload with description and questions.
- [x] Overlap warnings prevent double booking.
- [x] API supports interview create/reschedule/cancel and conflict detection.

Evidence: `server/index.mjs`, `scripts/api-smoke.mjs` (API smoke PASS). Production database persistence remains required.

Evidence: `buildMeetEvent` and calendar contract test.

## Task 9 - UX, integration, CI/CD

Status: `IN_PROGRESS`

- [x] One HR flow is represented through all four module workspaces.
- [ ] Loading, empty, error, conflict, success states need full API integration.
- [x] GitHub Actions runs quality/security gates.
- [x] Deployment is Ready in the correct Vercel team; live smoke checklist is documented.

## Task 10 - Handover and release audit

Status: `TODO`

- [ ] README, architecture, security, testing, AI harness, deployment, handover, and AI collaboration docs complete.
- [ ] Three-minute demo script and reviewed ChatGPT/GPT Work conversation export ready.
- [ ] Clean checkout and requirement-by-requirement audit pass.
