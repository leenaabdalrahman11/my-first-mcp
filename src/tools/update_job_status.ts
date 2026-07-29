import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { updateJobStatusInputSchema } from "../schemas/update_job_status.js";

/**
 * Registers the update_job_status tool.
 */
export function registerUpdateJobStatusTool(server: McpServer) {
  server.registerTool(
    "update_job_status",
    {
      title: "Update Job Status",
      description:
        "Update the status of an existing job application using its unique ID. Use this tool when the user wants to change an application's progress, such as Applied, Interview, Offer, or Rejected. Returns the updated job application.",

      inputSchema: updateJobStatusInputSchema,
    },

    async ({
      jobId,
      status,
    }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                ok: true,
                stub: true,
                tool: "update_job_status",
                job: {
                  id: jobId,
                  status,
                },
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