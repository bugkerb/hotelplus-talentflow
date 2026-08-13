# Testing Strategy

`npm run verify` runs lint, strict typecheck, Vitest, 100% business-logic coverage, and production build. Domain tests cover normalization, authorization-safe boundaries, stage transitions, time conflicts, ranking, AI schema validation, redaction, and HTML escaping.

The CI workflow also runs npm audit. The AI provider contract has deterministic success and provider-failure tests. The API boundary is intentionally kept behind the repository port; integration tests against a production database adapter remain a release task.
