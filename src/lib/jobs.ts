import * as path from "path";
import { readFile, writeFile } from "fs/promises";
import { jobsFileSchema } from "../schemas/jobSchema.js";

const dataDir = path.resolve("data");
const filePath = path.resolve(dataDir, "jobs.json");

function validateFilePath() {
  if (!filePath.startsWith(dataDir)) {
    throw new Error("Invalid file path");
  }
}

export async function loadJobs() {
  validateFilePath();

  const fileContent = await readFile(filePath, "utf-8");

  if (!fileContent.trim()) {
    return {
      nextId: 1,
      jobs: [],
    };
  }

  const jsonData = JSON.parse(fileContent);

  return jobsFileSchema.parse(jsonData);
}


export async function saveJobs(data: unknown) {
  validateFilePath();

  await writeFile(
    filePath,
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}
export async function createJob(job: {
  companyName: string;
  jobTitle: string;
  applicationDate: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
}) {
  const data = await loadJobs();

  const newJob = {
    id: data.nextId,
    ...job,
  };

  data.jobs.push(newJob);
  data.nextId++;

  await saveJobs(data);

  return newJob;
}
export async function updateJobStatus(
  id: number,
  status: "Applied" | "Interview" | "Offer" | "Rejected"
) {
  const data = await loadJobs();

  const job = data.jobs.find(
    (item) => item.id === id
  );

  if (!job) {
    throw new Error("Job not found");
  }

  job.status = status;

  await saveJobs(data);

  return job;
}