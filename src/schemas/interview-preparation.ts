import { z } from "zod";

export const InterviewPreparationSchema = {
  interviewId: z
    .string()
    .min(1, "Interview ID is required"),

  topics: z
    .array(z.string())
    .min(1, "At least one topic is required"),

  skills: z
    .array(z.string())
    .min(1, "At least one skill is required"),

  notes: z
    .string()
    .min(1, "Preparation notes are required"),
};