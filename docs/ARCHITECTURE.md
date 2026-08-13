# Architecture

```text
React workspace -> HTTP API -> domain contracts -> repository ports -> persistence/connector adapters
                                                |-> AI provider adapter -> schema validator -> reviewable result
```

The domain layer is deliberately independent of React and external services. This makes transition rules, ranking, time conflicts, idempotency, and AI acceptance criteria deterministic and testable. The API persists through a SQLite adapter with WAL and transaction boundaries; a managed Postgres adapter can replace it without changing domain contracts.
