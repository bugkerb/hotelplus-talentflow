# Architecture

```text
React workspace -> HTTP API -> domain contracts -> repository ports -> persistence/connector adapters
                                                |-> AI provider adapter -> schema validator -> reviewable result
```

The domain layer is deliberately independent of React and external services. This makes transition rules, ranking, time conflicts, idempotency, and AI acceptance criteria deterministic and testable. `server/index.mjs` persists demo data with atomic JSON replacement. A production deployment must replace this adapter with a transactional database and unique constraints.
