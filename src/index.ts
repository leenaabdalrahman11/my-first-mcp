import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerUpdateJobStatusTool } from "./tools/update_job_status.js";
import { registerAddJobTool } from "./tools/add-job.js";
import { registerListJobsTool } from "./tools/list_jobs.js";
import { registerSearchJobsTool } from "./tools/search_jobs.js";
import { registerGetJobTool } from "./tools/get_job.js";
const server = new McpServer({
  name: "my-first-mcp",
  version: "0.1.0",
});

registerAddJobTool(server);
registerListJobsTool(server);
registerSearchJobsTool(server);
registerUpdateJobStatusTool(server);
registerGetJobTool(server);
const transport = new StdioServerTransport();

await server.connect(transport);