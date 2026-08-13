# Architecture

```text
React workspace -> feature actions -> domain contracts -> repository ports -> persistence/connector adapters
                                                |-> AI provider adapter -> schema validator -> reviewable result
```

The domain layer is deliberately independent of React and external services. This makes transition rules, ranking, time conflicts, idempotency, and AI acceptance criteria deterministic and testable.
