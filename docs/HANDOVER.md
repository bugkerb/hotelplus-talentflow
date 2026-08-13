# Handover

1. Install with `npm ci`.
2. Run the deterministic quality gate with `npm run verify`.
3. Run the UI with `npm run dev`.
4. Keep Claude credentials server-side as `ANTHROPIC_API_KEY`; never expose them to Vite.
5. Replace demo scraper/scheduler handlers with authenticated connector adapters. Preserve domain contracts and tests.
6. Add API authentication, database transactions, unique constraints, idempotency storage, and centralized audit logging before production.
