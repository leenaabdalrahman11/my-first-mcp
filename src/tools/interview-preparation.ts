import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { InterviewPreparationSchema } from "../schemas/interview-preparation.js";

export function registerInterviewPreparationTool(server: McpServer) {
  server.registerTool(
    "interview_preparation",
    {
      title: "Interview Preparation",
      description:
        "Add interview preparation materials for a specific job interview, including topics to study, skills to review, and notes. Use this tool when the user wants to prepare for an upcoming interview. Returns the created preparation plan.",
      inputSchema: InterviewPreparationSchema,
    },
    async ({
      interviewId,
      topics,
      skills,
      notes,
    }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                id: "preparation-001",
                interviewId,
                topics,
                skills,
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