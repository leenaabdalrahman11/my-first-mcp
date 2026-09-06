# Peer Review — Job Application Tracker

## Review Information

- **Reviewer:** Lara Saleh Jadallah Nassar
- **Team members:** Leena and Aseel
- **Project:** Job Application Tracker MCP Server
- **Review scope:** Week 4 P0 tools, schemas, implementation, documentation, security, and reliability
- **Tools reviewed:** `add_job`, `list_jobs`, and `update_job_status`

## What Worked Well

- The project is well organized, and its overall purpose is clear.
- Security considerations and the threat model were taken into account.
- The tool definitions and schemas are structured clearly.
- The P0 tools include solid input validation and handle invalid input without crashing the server.

### `add_job`

- `companyName` and `jobTitle` are required strings with a maximum length of 100 characters.
- Their validation requires at least one letter, rejecting empty or purely non-letter input.
- `applicationDate` is strictly validated using the `YYYY-MM-DD` format.
- `status` is restricted to `Applied`, `Interview`, `Offer`, or `Rejected`.
- Errors are caught and returned in a structured `{ ok: false }` response instead of crashing the server.

### `list_jobs`

- The tool correctly requires no input parameters.
- It returns a clear “No job applications found” message when the file is empty.
- Errors are caught instead of propagating a server crash.

### `update_job_status`

- `jobId` is validated as a required string between 1 and 100 characters.
- Non-numeric IDs are rejected with a clear “Invalid jobId provided” message.
- `status` uses the same restricted enum as `add_job`.
- A missing ID returns a clean “Job not found” message rather than a stack trace.

## Issues Found and Recommended Fixes

### 1. Unsafe Error Handling

**Issue:** Some tools return the raw `error.message` to the caller. If `data/jobs.json` is missing, locked, or unreadable, the resulting Node.js filesystem error could expose the server’s absolute file path. This conflicts with Risk #5, “Unsafe Errors,” in `threat-model.md`.

**Affected tools:** `add_job` and `update_job_status`; the same pattern should be checked in the other tools.

**Recommended fix:** Log the complete internal error on the server only. Return a small set of generic, pre-written error messages to the caller without exposing paths, stack traces, or implementation details.
- Owner: Leena Abd Alrahman
- Due date: End of Week 4
- Status: Completed
### 2. Unlimited `list_jobs` Response

**Issue:** `list_jobs` returns every item in `jobs.json` with no response-size limit.
A large file could create oversized responses and performance problems.

**Recommended fix:** Add optional `limit` and `offset` parameters, enforce a safe
maximum value for `limit`, and return pagination metadata where appropriate.

- Owner: Leena Abd Alrahman
- Due date: End of Week 4
- Status: Completed

### 3. Project Documentation Mismatch

**Issue:** `project-choice.md` describes an Job Application Tracker, while the implemented
project is a Job Application Tracker.

**Recommended fix:** Update `project-choice.md` so the project name, purpose, scope,
and examples match the Job Application Tracker.

- Owner: Leena Abd Alrahman
- Due date: End of Week 4
- Status: Completed

### 4. Registered but Non-Functional Tools

**Issue:** Several additional tools are registered but currently behave like
placeholders:

- `get_job` returns the same hardcoded data regardless of `jobId`.
- `search_jobs` always returns an empty list regardless of the query.
- `add_interview` and `interview_preparation` do not persist data and return the
  same fixed ID.
- `delete_job` is mentioned in `design.md`, but its files are empty and the tool
  is not registered.

**Recommended fix:** Implement and test these tools before the final demo. If they
are outside the agreed scope, remove them from the registered tool list and
document that decision.

- Owner: Leena Abd Alrahman
- Due date: End of Week 4
- Status: Completed

## Priority Before the Final Demo

1. Replace raw internal errors with safe caller-facing messages.
2. Add a capped limit and pagination to `list_jobs`.
3. Implement or explicitly remove the placeholder tools.
4. Correct `project-choice.md` to describe the actual project.

## Final Verdict

The project has a good foundation. Its P0 tools have strong input validation and handle bad input without crashing. The issues above should be addressed before the final demo because they directly affect security, reliability, and project clarity. The highest demo risk is the presence of registered tools that are not yet functional.

## Evidence That the Feedback Was Shared

The reviewer shared this feedback with Leena and Aseel by email. A screenshot showing the sender, recipients, date, subject, and part of the feedback should be submitted as the sharing evidence for Section 4.6.

---

**Reviewer:** Lara Saleh Jadallah Nassar
