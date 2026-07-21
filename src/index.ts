import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({ name: "my-first-mcp", version: "0.1.0" });

server.registerTool(
  "greet",
  {
    title: "Greet",
    description: "Say hello to someone by name",
    inputSchema: z.object({
      name: z.string().describe("The person's name to greet"),
    }),
  },
  async ({ name }) => {
    return {
      content: [{ type: "text", text: `Hello, ${name}!` }],
    };
  },
);

const transport = new StdioServerTransport();
await server.connect(transport);