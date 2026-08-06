import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { listJobsInputSchema } from "../schemas/list_jobs.js";
import { loadJobs } from "../lib/jobs.js";

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
      try {
        const data = await loadJobs();

        if (data.jobs.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    ok: true,
                    items: [],
                    message: "No job applications found.",
                  },
                  null,
                  2
                ),
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  items: data.jobs,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Unknown error occurred";

        console.error("[list_jobs]", message);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  error: "Failed to load job applications.",
                  reason: message,
                },
                null,
                2
              ),
            },
          ],
        };
      }
    }
  );
}