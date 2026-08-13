# Security Review

The application treats resume, JD, candidate, source, and AI provider content as untrusted.

| OWASP area | Control | Residual risk |
|---|---|---|
| Access control | API mutations require recruiter/admin role plus constant-time comparison of `Authorization: Bearer` token when `TALENTFLOW_AUTH_TOKEN` is configured | Token issuance/rotation should be delegated to the deployment identity provider |
| Injection/XSS | Typed domain validation, escaped rendering contract, and resume content-signature validation | Production database adapter must parameterize queries |
| Secrets | No client provider key; env-only convention | Deployment secret manager required |
| Misconfiguration | CI audit, lockfile, strict input limits | Platform headers/CORS require deployment config |
| Vulnerable components | `npm audit --audit-level=high` in CI | Ongoing updates required |
| Logging | Redaction before audit/operational logs | Central monitoring is deployment-specific |
| SSRF | Scraper demo is connector simulation | Production sources need allowlists/egress policy |
| Integrity | GitHub CI and deterministic harness | Add signing/SBOM for production |

Security-sensitive business logic is included in the 100% coverage scope.
