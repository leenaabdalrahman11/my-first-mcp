import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { addJobInputSchema } from "../schemas/add-job.js";
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
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                companyName,
                jobTitle,
                applicationDate,
                status,
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