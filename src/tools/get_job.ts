import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getJobInputSchema } from "../schemas/get_job.js";

/**
 * Registers the get_job tool.
 */
export function registerGetJobTool(server: McpServer) {
  server.registerTool(
    "get_job",
    {
      title: "Get Job",
      description:
        "Retrieve details of a specific job application using its unique ID. Use this tool when the user asks about one specific application. Returns the requested job application.",

      inputSchema: getJobInputSchema,
    },

    async ({ jobId }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                ok: true,
                stub: true,
                tool: "get_job",
                job: {
                  id: jobId,
                  companyName: "Example Company",
                  jobTitle: "Software Developer",
                  applicationDate: "2026-07-29",
                  status: "Applied",
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