import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { searchJobsInputSchema } from "../schemas/search_jobs.js";

export function registerSearchJobsTool(server: McpServer) {
  server.registerTool(
    "search_jobs",
    {
      title: "Search Jobs",
      description:
        "Search job applications by company name, job title, or status. Use this tool when the user wants to find specific job applications.",
      inputSchema: searchJobsInputSchema,
    },
    async ({
      query,
      status,
      limit,
    }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                query,
                status,
                limit,
                results: [],
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