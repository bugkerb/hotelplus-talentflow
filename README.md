# HotelPlus TalentFlow

Mini Recruiting Pipeline Tool for the Tech Lead/Senior Developer take-home assignment.

## Current implementation

The demo workspace includes connected UX for Candidate Data Scraper, AI Resume Screener, Applicant Tracker, and Interview Scheduler. The domain layer contains deterministic validation, stage transitions, ranking, AI output validation, XSS/log redaction, and interview overlap rules.

## Run

```bash
npm ci
npm run dev
```

Quality gate:

```bash
npm run verify
```

Business logic is configured for 100% lines, statements, functions, and branches. The current demo provider is deterministic and does not require an API key. A production Claude adapter must remain server-side and use `ANTHROPIC_API_KEY`.

## Architecture decisions

- Feature UX is deliberately one workspace so HR can complete an end-to-end flow.
- Domain rules are isolated in `src/domain/core.ts` and tested independently of React.
- Candidate mutations use immutable updates and version checks; API persistence should enforce the same constraints transactionally.
- External scraping and calendar connectors are adapter boundaries; the demo uses safe simulated payloads rather than unauthenticated scraping.
- AI output must be structured, bounded, evidence-grounded, and fall back to `needs_review` on invalid output.

## Security

See [docs/SECURITY.md](docs/SECURITY.md). Never put provider credentials in the browser. Candidate/resume input is untrusted.

## Delivery documents

Live demo: https://hotelplus.vercel.app

- [Task checklist](TASK-CHECKLIST.md)
- [Product contract](docs/PRODUCT-CONTRACT.md)
- [Security review](docs/SECURITY.md)
- [Testing](docs/TESTING.md)
- [AI harness](docs/AI-HARNESS.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Handover](docs/HANDOVER.md)
- [Demo script](docs/DEMO-SCRIPT.md)
- [AI collaboration](docs/AI-COLLABORATION.md)
