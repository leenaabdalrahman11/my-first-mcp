import { z } from "zod";

export const jobSchema = z.object({
  id: z.number(),
  companyName: z.string(),
  jobTitle: z.string(),
  applicationDate: z.string(),
  status: z.enum([
    "Applied"  ,
    "Interview",
    "Offer"    ,
    "Rejected" ,
  ]),
});

export const jobsFileSchema = z.object({
  nextId: z.number(),
  jobs: z.array(jobSchema),
});