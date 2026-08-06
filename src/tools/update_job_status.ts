import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { updateJobStatusInputSchema } from "../schemas/update_job_status.js";
import { updateJobStatus } from "../lib/jobs.js";


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
      try {

        const numericJobId = Number(jobId);

        if (Number.isNaN(numericJobId)) {
          throw new Error("Invalid jobId provided");
        }

        const updatedJob = await updateJobStatus(
          numericJobId,
          status
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: true,
                  item: updatedJob,
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


        console.error(
          "[update_job_status]",
          message
        );


        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  ok: false,
                  error: "Failed to update job status.",
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