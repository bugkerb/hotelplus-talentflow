import { defineConfig, devices } from '@playwright/test';

const externalBaseUrl = process.env.BASE_URL;
export default defineConfig({ testDir: './e2e', timeout: 30_000, use: { ...devices['Desktop Chrome'], baseURL: externalBaseUrl || 'http://127.0.0.1:4173' }, ...(externalBaseUrl ? {} : { webServer: { command: 'npm run preview -- --host 127.0.0.1', port: 4173, reuseExistingServer: true } }) });
