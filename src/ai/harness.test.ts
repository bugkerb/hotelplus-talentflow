import { describe, expect, it } from 'vitest';
import { harnessFixtures } from './harness.fixtures';

describe('AI deterministic harness fixtures', () => {
  it('contains required adversarial and quality cases', () => {
    expect(harnessFixtures.map((fixture) => fixture.name)).toEqual(['strong-match', 'partial-match', 'missing-evidence', 'prompt-injection', 'pii-only', 'malformed-output']);
  });
  it('has deterministic expected outcomes for every fixture', () => {
    for (const fixture of harnessFixtures) expect(['strong_match', 'review', 'needs_review']).toContain(fixture.expected);
  });
});
