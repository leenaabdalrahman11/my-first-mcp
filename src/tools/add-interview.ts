import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { AddInterviewSchema } from "../schemas/add-interview.js";

export function registerAddInterviewTool(server: McpServer) {
  server.registerTool(
    "add_interview",
    {
      title: "Add Interview",
      description:
        "Add an interview record for an existing job application. Use this tool when the user wants to save interview details such as date, type, and notes. Returns the created interview.",
      inputSchema: AddInterviewSchema,
    },
    async ({
      applicationId,
      date,
      type,
      notes,
    }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                id: "interview-001",
                applicationId,
                date,
                type,
                notes,
              },
              null,
              2
            ),
          },
        ],
      };
    }
  );
}