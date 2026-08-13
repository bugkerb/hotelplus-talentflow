import { validateScreening, type Screening } from '../domain/core';

export type AiProvider = { screen(resume: string, jobDescription: string): Promise<Screening> };

export function createClaudeProvider(fetcher: typeof fetch = fetch): AiProvider {
  return { async screen(resume, jobDescription) {
    const response = await fetcher('/api/ai/screen', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ resume, jobDescription }) });
    if (!response.ok) throw Error('ai_provider_unavailable');
    return validateScreening(await response.json());
  } };
}
