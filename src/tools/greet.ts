import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import * as z from "zod/v4";

export function registerGreetTool(server: McpServer): void {
  server.registerTool(
    "greet",
    {
      description: "Greet Leena Abd Alrahman",
      inputSchema: z.object({}),
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: "Hello, Leena Abd Alrahman!",
          },
        ],
      };
    },
  );
}