import { describe, expect, it } from 'vitest';
import { parseOpenRouterResponse } from './openrouter-provider';

const valid = { candidateId: 'c1', jdId: 'j1', skills: 8, experience: 7, culture: 6, reasoning: { skills: 'evidence', experience: 'evidence', culture: 'evidence' }, strengths: ['TypeScript'], questions: ['Tell us about a tradeoff'] };

describe('OpenRouter response contract', () => {
  it('parses the OpenAI-compatible chat completion envelope', () => {
    expect(parseOpenRouterResponse({ choices: [{ message: { content: JSON.stringify(valid) } }] })).toMatchObject({ status: 'ready', skills: 8 });
  });
  it('rejects missing, malformed, and schema-invalid content deterministically', () => {
    expect(() => parseOpenRouterResponse({})).toThrow('ai_invalid_output');
    expect(() => parseOpenRouterResponse({ choices: [{ message: { content: 'not json' } }] })).toThrow('ai_invalid_output');
    expect(() => parseOpenRouterResponse({ choices: [{ message: { content: JSON.stringify({ ...valid, skills: 11 }) } }] })).toThrow('ai_invalid_output');
  });
});
