import { z } from "zod";

export const AddInterviewSchema = {
  applicationId: z
    .string()
    .min(1, "Application ID is required")
    .max(100, "Application ID must be at most 100 characters")
    .describe("The ID of the existing job application"),

  date: z
    .string()
    .min(1, "Interview date is required")
    .max(50, "Interview date must be at most 50 characters")
    .describe("The date of the interview"),

  type: z
    .string()
    .min(1, "Interview type is required")
    .max(50, "Interview type must be at most 50 characters")
    .describe("The type of the interview, such as technical or HR"),

  notes: z
    .string()
    .min(1, "Interview notes are required")
    .max(1000, "Interview notes must be at most 1000 characters")
    .describe("Notes or details about the interview"),
};