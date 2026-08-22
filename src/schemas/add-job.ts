import { z } from "zod/v4";
/**
 * Tool: add_job
 * Adds a new job application.
 */
export const addJobInputSchema = z.object({
companyName: z
.string()
.trim()
.min(1)
.max(100)
  .regex(/[a-zA-Z]/, "Company name must contain letters.")
  .describe("Name of the company."),

  jobTitle: z
    .string()
    .trim()
    .min(1)
    .max(100)
    .regex(/[a-zA-Z]/, "Job title must contain letters.")
    .describe("Job title."),

applicationDate: z
  .string()
  .min(10)
  .max(10)
  .regex(
    /^\d{4}-(0[1-9]|1[0-2])-\d{2}$/,
    "Date must be in YYYY-MM-DD format with a valid month."
  )
  .describe("Application date in YYYY-MM-DD format."),
  
  status: z
    .enum([
      "Applied"  ,
      "Interview",
      "Offer"    ,
      "Rejected" ,
    ])
    .describe("Current application status."),
});
