import { z } from "zod/v4";
/**
 * Tool: add_job
 * Adds a new job application.
 */
export const addJobInputSchema = z.object({
companyName: z
  .string()
  .min(1)
  .max(100)
  .regex(/[a-zA-Z]/, "Company name must contain letters.")
  .describe("Name of the company."),

  jobTitle: z
    .string()
    .min(1)
    .max(100)
    .regex(/[a-zA-Z]/, "Job title must contain letters.")
    .describe("Job title."),

applicationDate: z
  .string()
  .min(10)
  .max(10)
  .regex(
    /^\d{4}-\d{2}-\d{2}$/,
    "Date must be in YYYY-MM-DD format."
  )
  .describe("Application date in YYYY-MM-DD format."),

  status: z
    .enum([
      "Applied",
      "Interview",
      "Offer",
      "Rejected",
    ])
    .describe("Current application status."),
});
