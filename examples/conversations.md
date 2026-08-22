# Example Conversations

These examples show how a user can interact with the Job Application Tracker MCP server through a model.

---

## Conversation A: Add a Job Application

### User Prompt

Add a job application for Microsoft as a Software Engineer. The application date is 2026-08-18 and the status is Applied.

### Expected Tool Calls

1. add_job

Arguments:

{
  "companyName": "Microsoft",
  "jobTitle": "Software Engineer",
  "applicationDate": "2026-08-18",
  "status": "Applied"
}

### Good Final Answer

Your Microsoft Software Engineer application has been added successfully.

---

## Conversation B: Search Job Applications

### User Prompt

Find my job applications for Microsoft.

### Expected Tool Calls

1. search_jobs

Arguments:

{
  "query": "Microsoft",
  "limit": 10
}

### Good Final Answer

I found your Microsoft job application and displayed the matching results.

---

## Conversation C: Update Job Status

### User Prompt

Update my Microsoft job application status to Interview.

### Expected Tool Calls

1. update_job_status

Arguments:

{
  "jobId": 1,
  "status": "Interview"
}

### Good Final Answer

Your Microsoft job application status has been updated to Interview.