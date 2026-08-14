# Handover

1. Install with `npm ci`.
2. Run the deterministic quality gate with `npm run verify`.
3. Run the UI with `npm run dev`.
4. Keep provider credentials server-side (`ANTHROPIC_API_KEY` or `OPENROUTER_API_KEY`); never expose them to Vite. Select OpenRouter with `AI_PROVIDER=openrouter`.
5. Replace demo scraper/scheduler handlers with authenticated connector adapters. Preserve domain contracts and tests.
6. Add API authentication, database transactions, unique constraints, idempotency storage, and centralized audit logging before production.

## Verification evidence

- `npm run verify`: lint, typecheck, unit tests, 100% business-logic coverage, and build.
- `npm run api:smoke`: API authorization, candidate idempotency replay, and deterministic AI fallback.
- `npm run e2e`: two browser flows covering module navigation and Tracker operations.
