# Testing Strategy

`npm run verify` runs lint, strict typecheck, Vitest, 100% business-logic coverage, and production build. Domain tests cover normalization, authorization-safe boundaries, stage transitions, time conflicts, ranking, AI schema validation, redaction, and HTML escaping.

The CI workflow also runs npm audit. Integration/E2E tests should be added against the production API adapter before connecting real third-party credentials.
