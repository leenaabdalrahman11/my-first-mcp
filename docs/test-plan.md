# Manual Test Plan – Job Application Tracker MCP

| id | tool | setup | input | expected | result | evidence |
|---|---|---|---|---|---|---|
| TC-01 | add_job | jobs.json reset to empty state | Valid job object from examples/add-job.json | Job is created successfully and saved with new id | PASS |![alt text](image.png) |
| TC-02 | add_job | Server running normally | Empty companyName or missing required field | Request rejected by Zod validation | | |
| TC-03 | list_jobs | jobs.json contains saved jobs | { "limit": 10 } | Returns saved jobs with correct format | | |
| TC-04 | list_jobs | jobs.json contains many records | { "limit": 100000 } | Request rejected because limit exceeds maximum allowed value | | |
| TC-05 | list_jobs | jobs.json is empty | {} | Returns empty jobs list without error | | |
| TC-06 | update_job_status | Job with id 1 exists | { "id":1, "status":"Interview" } | Status updated successfully | | |
| TC-07 | update_job_status | Job with id 1 exists | { "id":1, "status":"InvalidStatus" } | Request rejected because status is not in allowlist | | |
| TC-08 | File operation timeout | Simulated slow filesystem | Trigger delayed file read/write | Server returns timeout error instead of hanging | | |