import { expect, test } from '@playwright/test';

test('HR can navigate the four-module workflow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Applicant pipeline' })).toBeVisible();
  await page.getByRole('button', { name: 'Scraper' }).click();
  await expect(page.locator('h1', { hasText: 'Scraper' })).toBeVisible();
  await page.getByRole('button', { name: 'Generate search query' }).click();
  await expect(page.getByRole('status')).toContainText('Search query generated');
  await page.getByRole('button', { name: 'AI Screener' }).click();
  await page.getByLabel('Resume text').fill('TypeScript React Node.js 8 years');
  await page.getByRole('button', { name: 'Run Claude-compatible screening' }).click();
  await expect(page.getByRole('status')).toContainText(/Screening complete|Deterministic AI demo/);
  await expect(page.getByText(/overall match/)).toBeVisible();
  await page.getByRole('button', { name: 'Scheduler' }).click();
  await page.getByRole('button', { name: 'Create Google Meet payload' }).click();
  await expect(page.getByRole('status')).toContainText('Google Meet-compatible');
});

test('Tracker supports adding, searching, moving, and removing a candidate', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Candidate name').fill('E2E Candidate');
  await page.getByRole('button', { name: '+ Add' }).click();
  await expect(page.getByText('E2E Candidate')).toBeVisible();
  await page.getByPlaceholder('Search name, email, position, source').fill('E2E Candidate');
  const card = page.locator('article').filter({ hasText: 'E2E Candidate' });
  await card.getByRole('combobox').selectOption('screening');
  await expect(page.getByRole('status')).toContainText('moved to screening');
  page.once('dialog', async (dialog) => dialog.accept('Edited Candidate'));
  await card.getByRole('button', { name: 'Edit' }).click();
  await page.getByPlaceholder('Search name, email, position, source').fill('');
  await expect(page.getByText('Edited Candidate')).toBeVisible();
  await page.locator('article').filter({ hasText: 'Edited Candidate' }).getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByText('Edited Candidate')).toHaveCount(0);
});
