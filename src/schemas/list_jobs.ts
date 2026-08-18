import * as z from "zod/v4";

export const listJobsInputSchema = z.object({
  limit: z
    .number()
    .int()
    .positive()
    .optional(),
});