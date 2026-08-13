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
- [ ] First readable Git commit exists.

Evidence: `package.json`, `vite.config.ts`, `src/domain/core.test.ts`, `npm run verify` PASS. Git initialization is currently blocked by workspace permission on `.git`.

## Task 2 - Domain and persistence boundary

Status: `DONE`

- [x] Candidate, JD, source, screening, interview, idempotency, and audit types exist.
- [x] Domain rules isolate persistence concerns through typed contracts.
- [x] Validation, transitions, ranking, scheduling, and idempotency are deterministic and 100% covered.

Evidence: `src/domain/core.ts`, `src/domain/core.test.ts`; `npm run verify` PASS (8 tests, 100% all coverage metrics).

## Task 3 - Security foundation

Status: `TODO`

- [ ] OWASP review documents controls and residual risks.
- [ ] Input/file validation, authorization, XSS protection, headers, CORS, redaction, and safe errors are tested.
- [ ] No secrets are tracked or exposed to browser.

## Task 4 - Idempotency and race conditions

Status: `TODO`

- [ ] Mutations enforce idempotency keys and request fingerprints.
- [ ] Duplicate requests replay; changed payloads conflict.
- [ ] Concurrent versioned updates yield one winner and one conflict.
- [ ] Interview conflicts reject deterministically.

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

Status: `TODO`

- [ ] One HR flow completes through all four modules.
- [ ] Loading, empty, error, conflict, success states exist.
- [ ] GitHub Actions runs all gates and deploys/smoke-tests main.

## Task 10 - Handover and release audit

Status: `TODO`

- [ ] README, architecture, security, testing, AI harness, deployment, handover, and AI collaboration docs complete.
- [ ] Three-minute demo script and reviewed ChatGPT/GPT Work conversation export ready.
- [ ] Clean checkout and requirement-by-requirement audit pass.
