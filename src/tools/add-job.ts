import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { addJobInputSchema } from "../schemas/add-job.js";
import { createJob } from "../lib/jobs.js";

export function registerAddJobTool(server: McpServer) {
  server.registerTool(
    "add_job",
    {
      title: "Add Job",
      description:
        "Add a new job application with company name, job title, application date, and status.",
      inputSchema: addJobInputSchema,
    },
    async ({
      companyName,
      jobTitle,
      applicationDate,
      status,
    }) => {
      try {
        const job = await createJob({
          companyName,
          jobTitle,
          applicationDate,
          status,
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  item: job,
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

        console.error("[add_job]", message);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  error: "Failed to add job application.",
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