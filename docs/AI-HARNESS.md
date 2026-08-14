# AI Harness

The AI contract is a versioned structured object with three 0-10 scores: Skills fit, Experience fit, and Culture/communication fit. Every score requires short reasoning, with strengths and prescreen questions for the interview team.

Deterministic acceptance criteria:

- Parseable schema; scores are integers from 0 through 10.
- Required arrays and reasoning fields are present.
- Invalid provider output becomes `needs_review` and never reaches the score card.
- Resume prompt-injection text is data, not an instruction.
- PII is excluded from scoring criteria.
- Same fixture and mock provider return the same result.

The production Claude adapter is server-side, parses JSON, schema-validates the response, redacts logs, and preserves the fallback behavior. OpenRouter is supported through the same server boundary with `AI_PROVIDER=openrouter`; its OpenAI-compatible `choices[0].message.content` envelope is parsed and passed through the identical validator/fallback. Versioned fixtures live in `src/ai/harness.fixtures.ts` and include adversarial prompt injection and PII-only inputs.
