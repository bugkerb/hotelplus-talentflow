# Deployment

## CI

`.github/workflows/ci.yml` runs on pushes and pull requests: `npm ci`, lint, strict typecheck, Vitest with 100% business-logic coverage, production build, and high-severity npm audit.

## Production target

Deploy the Vite `dist/` output to Vercel, Cloudflare Pages, or another free static host. No AI key belongs in the browser. A server-side Claude adapter should be deployed separately with `ANTHROPIC_API_KEY` configured as a secret. OpenRouter can be selected with `AI_PROVIDER=openrouter` and `OPENROUTER_API_KEY`; optionally set `OPENROUTER_MODEL`, `OPENROUTER_HTTP_REFERER`, and `OPENROUTER_APP_TITLE`. Never expose these values to Vite/browser code.

Current deployment: https://hotelplus.vercel.app
Vercel team: `bugkerbs-projects`; project: `hotelplus`.

For an API deployment, configure `TALENTFLOW_AUTH_TOKEN` in the platform secret manager. The API then requires a bearer token and recruiter/admin role; the role header alone is retained only for the local demo when no token is configured.

## Smoke test

After deployment verify the root page loads, all five navigation entries render, Tracker search filters candidates, stage change updates the lane, and each module shows its primary action.
