import { z } from "zod";

export const InterviewPreparationSchema = {
  interviewId: z
    .string()
    .min(1, "Interview ID is required")
    .max(100, "Interview ID must be at most 100 characters")
    .describe("The ID of the interview this preparation plan belongs to"),

  topics: z
    .array(
      z
        .string()
        .min(1, "Each topic must not be empty")
        .max(100, "Each topic must be at most 100 characters")
    )
    .min(1, "At least one topic is required")
    .max(20, "At most 20 topics are allowed")
    .describe("Topics the user should study before the interview"),

  skills: z
    .array(
      z
        .string()
        .min(1, "Each skill must not be empty")
        .max(100, "Each skill must be at most 100 characters")
    )
    .min(1, "At least one skill is required")
    .max(20, "At most 20 skills are allowed")
    .describe("Skills the user should review before the interview"),

  notes: z
    .string()
    .min(1, "Preparation notes are required")
    .max(1000, "Preparation notes must be at most 1000 characters")
    .describe("Additional notes or preparation instructions"),
};