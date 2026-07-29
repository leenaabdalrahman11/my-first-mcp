import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { listJobsInputSchema } from "../schemas/list_jobs.js";

export function registerListJobsTool(server: McpServer) {
  server.registerTool(
    "list_jobs",
    {
      title: "List Jobs",
      description:
        "Retrieve all saved job applications with their current status. Use this tool when the user wants to view their job application history.",
      inputSchema: listJobsInputSchema,
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                jobs: [],
                message: "List jobs tool stub",
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