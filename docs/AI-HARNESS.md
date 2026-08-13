# AI Harness

The AI contract is a versioned structured object with three 0-10 scores: Skills fit, Experience fit, and Culture/communication fit. Every score requires short reasoning, with strengths and prescreen questions for the interview team.

Deterministic acceptance criteria:

- Parseable schema; scores are integers from 0 through 10.
- Required arrays and reasoning fields are present.
- Invalid provider output becomes `needs_review` and never reaches the score card.
- Resume prompt-injection text is data, not an instruction.
- PII is excluded from scoring criteria.
- Same fixture and mock provider return the same result.

The production Claude adapter must be server-side, schema-validate the response, redact logs, and preserve the fallback behavior.
