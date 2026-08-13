import * as z from "zod/v4";

/**
 * Tool: list_jobs
 * Retrieves all saved job applications.
 */
export const listJobsInputSchema = z.object({
  limit: z
    .number()
    .int()
    .positive()
    .max(50)
    .optional(),
});