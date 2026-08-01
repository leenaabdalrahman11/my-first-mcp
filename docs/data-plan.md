
## P0 Tools Data Plan

| Tool    | Source     | Fixture Path   | Auth | Failure Modes                            | Example Response 
|---------|------------|----------------|------|------------------------------------------|------------------------------------
| add_job | Local JSON | data/jobs.json | None | Invalid input, missing fields, file error| {"id":3,"companyName":"Google","jobTitle":"Backend Developer","status":"Applied"} |
| list_jobs |Local JSON| data/jobs.json | None | Empty file, missing file, invalid JSON   | [{"id":1,"companyName":"Microsoft","status":"Interview"}] |
|update_job|Local JSON | data/jobs.json | None | Invalid ID, invalid status, file error   | {"id":2,"status":"Offer"} |

## Data Structure

Each job contains:

```json
{
  "id": 1,
  "companyName": "Microsoft",
  "jobTitle": "Software Engineer",
  "applicationDate": "2026-07-20",
  "status": "Interview"
}