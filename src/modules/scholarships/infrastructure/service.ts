import { endpoints } from "@/config";
import { Scholarship, ScholarshipSummary } from "../domain/types";

async function listScholarships(init?: RequestInit) {
  const res = await fetch(endpoints.api.apprenticeship, init);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary if used to fetch data on server components
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<ScholarshipSummary[]>;
}

async function getScholarshipBySlug(slug: string, init?: RequestInit) {
  const res = await fetch(`${endpoints.api.apprenticeship}/${slug}`, init);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary if used to fetch data on server components
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Scholarship>;
}

export const ScholarshipService = {
  list: listScholarships,
  get: getScholarshipBySlug,
};
