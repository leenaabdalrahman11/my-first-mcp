MCP Threat Model - Week 4

Assets

- ./data/jobs.json
- Job data and API responses
- Server filesystem
- Environment variables/secrets

Trust Boundaries

- Model → Tools: inputs are untrusted and need validation.
- Tools → Filesystem: protect jobs.json access.
- Tools → Network: no external requests currently.

Top 5 Risks

1. Invalid Input
Affected:
- add_job
- update_job_status

Risk:
Wrong or oversized input.

Mitigation:
- Validate fields and data types.
- Limit input size.

2. Path Traversal

Risk:
Accessing files outside the project.

Mitigation:
- Use fixed file paths.
- Do not accept user paths.

3. Runaway Responses

Affected:
- list_jobs

Risk:
Large responses can overload the model.

Mitigation:
- Add limits and pagination.

4. Secret Leakage

Risk:
Secrets exposed in logs or Git.

Mitigation:
- Use environment variables.
- Ignore .env files.
- Avoid logging secrets.

5. Unsafe Errors

Risk:
Errors reveal internal details.

Mitigation:
- Return safe error messages.

Mitigations This Week

- Add input validation.
- Add status allowlist.
- Limit responses.
- Improve error handling.
- Add SECURITY.md.

Out of Scope

- Advanced network security.
- Authentication.
- Production infrastructure security.