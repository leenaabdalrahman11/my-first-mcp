import * as z from "zod/v4";

/**
 * Tool: search_jobs
 * Searches job applications by company name, job title, or status.
 */
export const searchJobsInputSchema = z.object({
  query: z
    .string()
    .min(1)
    .max(200)
    .optional()
    .describe(
      "Search text to match company name or job title."
    ),

  status: z
    .enum([
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
    ])
    .optional()
    .describe(
      "Filter applications by their current status."
    ),

  limit: z
    .number()
    .int()
    .positive()
    .max(50)
    .optional()
    .describe(
      "Maximum number of search results to return."
    ),
});