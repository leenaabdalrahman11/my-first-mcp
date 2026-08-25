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
    async (input = {}) => {
      try {
        // Validate input manually
        const parsed = listJobsInputSchema.safeParse(input);

        if (!parsed.success) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    ok: false,
                    error: parsed.error.issues[0]?.message,
                  },
                  null,
                  2
                ),
              },
            ],
          };
        }

        const { limit = 50 } = parsed.data;
        if (limit > 50) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    ok: false,
                    error: "limit exceeds maximum allowed value (50)",
                  },
                  null,
                  2
                ),
              },
            ],
          };
        }

        const data = await loadJobs();

        // Empty jobs.json case
        if (data.jobs.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  {
                    ok: true,
                    items: [],
                    total: 0,
                    returned: 0,
                    truncated: false,
                  },
                  null,
                  2
                ),
              },
            ],
          };
        }

        // Return jobs with limit
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  items: data.jobs.slice(0, limit),
                  total: data.jobs.length,
                  returned: Math.min(data.jobs.length, limit),
                  truncated: data.jobs.length > limit,
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
                  error: message,
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