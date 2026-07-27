# Job Tracker Design

## Pitch

Job Tracker is an MCP project that helps job seekers organize and track their job applications in one place.  
Many applicants lose track of application progress, interview details, and company information.  
This MCP server provides tools to add, view, update, search, and manage job applications through simple tool calls.  
The project stores data locally and works fully offline for the Demo Day.

---

## User & Demo Story

A user is applying for multiple jobs and wants to keep track of their progress.  
The user asks: "Add my application for a Backend Developer position at Google."

The MCP will call `add_job()` to create a new job application.

Later, the user asks: "Show me all my job applications."

The MCP will call `list_jobs()` and return all saved applications.

The user then says: "Update my Google application status to Interview."

The MCP will call `update_job_status()` and return the updated application.

The user can also search for specific applications, view details, delete old applications, and manage interview information.

---

## Tool Inventory

| tool_name | description (1 line) | inputs | output (shape) | priority |
|-----------|----------------------|--------|----------------|----------|
| add_job | Add a new job application with company name, job title, application date, and status. | company_name, job_title, application_date, status | Created job application object | P0 |
| list_jobs | Retrieve all saved job applications. | None | List of job application objects | P0 |
| update_job_status | Update the status of an existing job application. | job_id, new_status | Updated job application object | P0 |
| get_job | Retrieve details of a specific job application using its unique ID. | job_id | Single job application object | P1 |
| delete_job | Delete an existing job application by its ID. | job_id | Deletion confirmation message | P1 |
| search_jobs | Search job applications by company name, job title, or status. | keyword or filter | Matching job application list | P1 |
| add_interview | Add an interview record for an existing job application including date, type, and notes. | job_id, interview_date, interview_type, notes | Created interview record | P1 |
| interview_preparation | Add interview preparation materials for a specific job interview, including topics, skills, and notes. | job_id, topics, skills, notes | Interview preparation plan | P1 |

---

## Out of Scope

- User authentication (login, signup, and multiple user accounts).
- Resume/CV builder or resume editing features.
- Mobile or web user interface; the project will be accessed through MCP tools only.

---

## Success Criteria

- [ ] User can add a new job application and retrieve it successfully.
- [ ] User can view all saved job applications using the list tool.
- [ ] User can update a job application status and receive the updated result.

---

## Risks

### Risk 1:
Managing consistent data storage in the local JSON file.

**Mitigation:**
Use data validation and a fixed JSON structure before saving records.

### Risk 2:
Handling unique IDs for different job applications.

**Mitigation:**
Generate unique IDs automatically when creating new applications.
