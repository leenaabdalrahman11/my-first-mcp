import { z } from "zod";

export const AddInterviewSchema = {
  applicationId: z
    .string()
    .min(1, "Application ID is required"),

  date: z
    .string()
    .min(1, "Interview date is required"),

  type: z
    .string()
    .min(1, "Interview type is required"),

  notes: z
    .string()
    .min(1, "Interview notes are required"),
};