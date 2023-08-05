import { endpoints } from "@/config";
import { Scholarship, ScholarshipSummary } from "../domain/types";

async function listScholarships() {
  return fetch(endpoints.api.apprenticeship).then(
    (res) => res.json() as Promise<ScholarshipSummary[]>
  );
}

function getScholarshipBySlug(slug: string) {
  return fetch(`${endpoints.api.apprenticeship}/${slug}`).then(
    (res) => res.json() as Promise<Scholarship>
  );
}

export const Apprenticeship = {
  list: listScholarships,
  get: getScholarshipBySlug,
};
