# Product Contract

HotelPlus TalentFlow is an HR workspace for the Tech Lead/Senior Developer role. It connects candidate discovery, explainable resume screening, applicant pipeline management, and interview scheduling.

## Invariants

- A candidate is never imported without HR approval.
- Normalized email/profile URL deduplicate candidates.
- AI scores are bounded, structured, evidence-backed, and reviewable.
- PII is not a scoring criterion; resume text is untrusted.
- Mutations are idempotent and stale writes cannot silently overwrite newer state.
- Interview slots cannot overlap for the same interviewer.
- Material mutations create redacted audit events.

| Rubric | Evidence |
|---|---|
| Feature completeness 30% | Four connected modules, integration tests, demo flow |
| Code quality/architecture 30% | Feature boundaries, typed contracts, repository ports, CI, concurrency tests |
| UX/UI 25% | HR-first workspace, states, responsive layout, accessibility checks |
| AI integration 15% | Claude adapter, schema parser, harness fixtures, deterministic report |
