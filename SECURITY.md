# Security Policy

## Supported Versions

This repository supports the current main development branch.

## Reporting a Security Issue

If you find a security issue, please report it to:

Email: info@nextflows.ai

Do not disclose sensitive information publicly.

## Security Improvements

This week we added:

- Input validation using Zod schemas.
- Status allowlists for job application states.
- Maximum input lengths for text fields.
- Output limits for list operations.
- Safe error messages without exposing internal details.
- Fixed file access paths for local JSON storage.
- Secret protection using .gitignore and .env.example.

## Out of Scope

- Authentication
- Production infrastructure security
- External network security