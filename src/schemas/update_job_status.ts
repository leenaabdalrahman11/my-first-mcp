import { z } from "zod/v4";

/**
 * Tool: update_job_status
 * Updates the status of an existing job application.
 */
export const updateJobStatusInputSchema = z.object({
  jobId: z
    .string()
    .trim()
    .min(1, "Job ID is required.")
    .max(100, "Job ID must not exceed 100 characters.")
    .describe("Unique ID of the job application."),

  status: z
    .enum([
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
    ])
    .describe("New status of the job application."),
});