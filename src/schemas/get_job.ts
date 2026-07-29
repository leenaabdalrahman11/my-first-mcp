import { z } from "zod/v4";

/**
 * Tool: get_job
 * Retrieves one job application using its unique ID.
 */
export const getJobInputSchema = z.object({
  jobId: z
    .string()
    .trim()
    .min(1, "Job ID is required.")
    .max(100, "Job ID must not exceed 100 characters.")
    .describe("Unique ID of the job application."),
});