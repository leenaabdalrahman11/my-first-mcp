import { z } from "zod";

/**
 * Tool: add_job
 * Adds a new job application.
 */
export const AddJobSchema = z.object({
  companyName: z
    .string()
    .min(1)
    .regex(/[a-zA-Z]/, "Company name must contain letters.")
    .describe("Name of the company."),

  jobTitle: z
    .string()
    .min(1)
    .regex(/[a-zA-Z]/, "Job title must contain letters.")
    .describe("Job title."),

  applicationDate: z
    .string()
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