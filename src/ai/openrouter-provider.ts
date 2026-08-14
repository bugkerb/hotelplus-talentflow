import { validateScreening, type Screening } from '../domain/core';

export type OpenRouterChatResponse = { choices?: Array<{ message?: { content?: string } }> };

export function parseOpenRouterResponse(response: OpenRouterChatResponse): Screening {
  const content = response.choices?.[0]?.message?.content;
  if (typeof content !== 'string') throw Error('ai_invalid_output');
  let parsed: unknown;
  try { parsed = JSON.parse(content); } catch { throw Error('ai_invalid_output'); }
  return validateScreening(parsed);
}
