# Peer Review – Job Application Tracker

**Reviewer:** Lara Saleh Jadallah Nassar
**Student:** Leena Abd Alrahman

## What Was Done Well

* The project is well organized and the overall idea is clear.
* Security considerations and the threat model were taken into account.
* The tools and schemas are structured clearly.

## Critical Issues to Fix

1. **Unsafe Error Handling**
   Some tools return raw error messages to the user, which may expose internal system or file information.
   **Action:** Return safe error messages instead.

2. **Unlimited `list_jobs` Response**
   `list_jobs` returns all jobs without a limit, which could cause very large responses and performance issues.
   **Action:** Add a maximum `limit` (and preferably pagination).



3. **Project Documentation Mismatch**
   `project-choice.md` describes an **Expense Tracker**, while the actual project is a **Job Application Tracker**.
   **Action:** Update the document to match the actual project.

## Final Verdict

The project has a good foundation, but these issues should be fixed before the final demo because they directly affect **security, reliability, and project clarity**.

**Reviewer: Lara Saleh Nassar**