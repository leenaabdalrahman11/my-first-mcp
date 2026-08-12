import { z } from "zod/v4";

/**
 * Tool: update_job_status
 * Updates the status of an existing job application.
 */
export const updateJobStatusInputSchema = z.object({
  jobId: z
   
.number()
.int()
.positive()
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