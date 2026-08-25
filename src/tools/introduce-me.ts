import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import * as z from "zod/v4";

export function registerIntroduceMeTool(server: McpServer): void {
  server.registerTool(
    "introduce_me",
    {
      description: "Introduce Leena Abd Alrahman and her role",
      inputSchema: z.object({
        role: z
          .string()
          .min(1)
          .describe("Leena's role, such as Software Developer"),
      }),
    },
    async ({ role }) => {
      return {
        content: [
          {
            type: "text",
            text: `My name is Leena Abd Alrahman, and I am a ${role}.`,
          },
        ],
      };
    },
  );
}