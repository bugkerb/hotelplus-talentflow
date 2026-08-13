# Assignment Evidence Matrix

| Requirement | Evidence | Verification |
|---|---|---|
| Candidate Data Scraper | Scraper workspace, deterministic `buildQuery`/`rankCandidate`, approval copy | Domain tests + UI smoke |
| AI Resume Screener | Structured screen contract, deterministic validator, fallback contract | `src/domain/core.test.ts`, AI harness criteria |
| Applicant Tracker | Search/filter, pipeline lanes, controlled stage dropdown | UI smoke + transition tests |
| Interview Scheduler | Scheduler workspace, Meet-compatible payload direction, overlap rule | `assertSlot` tests |
| Security | OWASP review, escaping, redaction, strict validation | `docs/SECURITY.md`, domain tests |
| Idempotency/race | Fingerprint decision and version invariant | `idempotencyDecision`, transition tests |
| Quality | 100% business-logic coverage and build gate | `npm run verify` |
| CI/CD | GitHub Actions quality workflow | `.github/workflows/ci.yml` |

## Known release blockers

The live URL and external GitHub publication require explicit visibility/egress authorization. The local repository and history are ready for that action.
