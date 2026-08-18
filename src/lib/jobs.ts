import * as path from "path";
import { readFile, writeFile } from "fs/promises";
import { jobsFileSchema } from "../schemas/jobSchema.js";

const dataDir = path.resolve(process.cwd(), "data");

const filePath = path.resolve(dataDir, "jobs.json");
const OPERATION_TIMEOUT_MS = 5000;

function withTimeout<T>(
  promise: Promise<T>,
  timeoutMs = OPERATION_TIMEOUT_MS
): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error("Operation timed out")), timeoutMs)
    ),
  ]);
}
function validateFilePath() {
if (!filePath.startsWith(dataDir + path.sep)) {    throw new Error("Invalid file path");
  }
}

export async function loadJobs() {
  validateFilePath();

const fileContent = await withTimeout(
  readFile(filePath, "utf-8")
);

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

await withTimeout(
  writeFile(
    filePath,
    JSON.stringify(data, null, 2),
    "utf-8"
  )
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