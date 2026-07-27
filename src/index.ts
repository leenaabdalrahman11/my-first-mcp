import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { registerAddJobTool } from "./tools/add-job.js";

const server = new McpServer({
  name: "my-first-mcp",
  version: "0.1.0",
});

registerAddJobTool(server);

const transport = new StdioServerTransport();

await server.connect(transport);