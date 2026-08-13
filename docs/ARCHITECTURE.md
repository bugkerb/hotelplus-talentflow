# Architecture

```text
React workspace -> HTTP API -> domain contracts -> repository ports -> persistence/connector adapters
                                                |-> AI provider adapter -> schema validator -> reviewable result
```

The domain layer is deliberately independent of React and external services. This makes transition rules, ranking, time conflicts, idempotency, and AI acceptance criteria deterministic and testable. `server/index.mjs` is the current boundary reference; replace its in-memory store with a transactional database adapter before production.
