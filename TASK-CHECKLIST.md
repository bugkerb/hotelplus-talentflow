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
- [ ] File upload, API authorization, headers, and CORS enforcement are still required at backend boundary.

## Task 4 - Idempotency and race conditions

Status: `DONE`

- [x] Idempotency decision and request fingerprint rules exist.
- [x] Duplicate requests replay; changed payloads conflict.
- [x] Version conflict and interview overlap rules are deterministic.
- [ ] HTTP/database transaction integration still required.

## Task 5 - Candidate Data Scraper

Status: `TODO`

- [ ] JD/criteria generates deterministic search query.
- [ ] Sources normalize into candidates.
- [ ] Candidates rank with explainable reasons.
- [ ] HR approves before Tracker import.

## Task 6 - AI Resume Screener and harness

Status: `TODO`

- [ ] PDF upload and plain text paste supported.
- [ ] Claude-compatible adapter returns structured 0-10 Skills/Experience/Culture scores.
- [ ] Reasoning, strengths, prescreen questions, and team report shown.
- [ ] Harness covers normal, malformed, prompt injection, PII, and missing evidence fixtures.
- [ ] Mock runs are deterministic and invalid output falls back to review.

## Task 7 - Applicant Tracker

Status: `TODO`

- [ ] Add/edit/delete candidate works.
- [ ] Filter by stage, position, source works.
- [ ] Pipeline dashboard/list and controlled stage changes work.

## Task 8 - Interview Scheduler

Status: `TODO`

- [ ] Google Calendar/Meet-compatible payload with description and questions.
- [ ] Overlap warnings prevent double booking.
- [ ] Reschedule/cancel updates Tracker.

## Task 9 - UX, integration, CI/CD

Status: `IN_PROGRESS`

- [x] One HR flow is represented through all four module workspaces.
- [ ] Loading, empty, error, conflict, success states need full API integration.
- [x] GitHub Actions runs quality/security gates.
- [ ] External deployment and live smoke test require approved platform access.

## Task 10 - Handover and release audit

Status: `TODO`

- [ ] README, architecture, security, testing, AI harness, deployment, handover, and AI collaboration docs complete.
- [ ] Three-minute demo script and reviewed ChatGPT/GPT Work conversation export ready.
- [ ] Clean checkout and requirement-by-requirement audit pass.
