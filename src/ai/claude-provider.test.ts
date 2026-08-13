import { describe, expect, it, vi } from 'vitest';
import { createClaudeProvider } from './claude-provider';

const valid = { candidateId: 'c1', jdId: 'j1', skills: 8, experience: 7, culture: 6, reasoning: { skills: 'evidence', experience: 'evidence', culture: 'evidence' }, strengths: ['TypeScript'], questions: ['Tell us about a tradeoff'] };
describe('Claude provider contract', () => {
  it('validates structured provider output', async () => { const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify(valid), { status: 200 })); await expect(createClaudeProvider(fetcher).screen('resume', 'jd')).resolves.toMatchObject({ status: 'ready' }); expect(fetcher).toHaveBeenCalledOnce(); });
  it('does not expose provider errors as successful output', async () => { const fetcher = vi.fn().mockResolvedValue(new Response('', { status: 503 })); await expect(createClaudeProvider(fetcher).screen('resume', 'jd')).rejects.toThrow('ai_provider_unavailable'); });
});
