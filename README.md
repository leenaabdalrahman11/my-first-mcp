# My First MCP

A simple MCP server built with TypeScript using the official Model Context Protocol SDK.

## What it does

CareerPilot MCP is a job application tracker server.

It helps users manage their job applications by providing tools to:

- Add a new job application.
- View saved job applications.
- Update the status of a job application.

The project stores data locally in a JSON file.

## Requirements

Before running the project, make sure you have:

- Node.js installed (version 20 or higher recommended)
- npm installed
- MCP Inspector for testing tools

## Installation

Clone the repository:

bash
git clone https://github.com/leenaabdalrahman11/my-first-mcp.git


Go to the project folder:

bash
cd my-first-mcp


Install dependencies:

bash
npm install


## Run

Start the MCP server:

bash
npm run dev


## MCP Inspector

To test the MCP server tools, run:

bash
npx @modelcontextprotocol/inspector


Open MCP Inspector and connect it to the running server.

You can use the Inspector to test the available tools and check their responses.

## Available Tools

| Tool                | Description |
| `add_job`           | Add a new job application with company name, job title, application date, and status |
| `list_jobs`         | Display all saved job applications |
| `update_job_status` | Update the status of an existing job application |

## Example Prompts

Add a new job application:

text
Add a job application for Microsoft as Software Engineer with status Applied.


View saved applications:

text
Show me all my job applications.


Update job status:

text
Update my Google application status to Interview.


## Troubleshooting

### 1. Server does not start

Make sure Node.js and npm are installed correctly:

bash
node -v
npm -v


Then install dependencies again:

bash
npm install


### 2. No job applications are displayed

Make sure the data file exists:

text
data/jobs.json


Check that the file contains valid JSON data.

### 3. Validation errors

Make sure all required fields are provided:

- companyName
- jobTitle
- applicationDate
- status

Allowed statuses:

text
Applied
Interview
Offer
Rejected

You can find example MCP conversations here:

[Example Conversations](examples/conversations.md)

## License

This project is licensed under the MIT License.

## Repository

GitHub Repository:

https://github.com/leenaabdalrahman11/my-first-mcp
