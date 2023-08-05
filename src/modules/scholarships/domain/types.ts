import { z } from "zod";
import { scholarshipSchema, scholarshipSummarySchema } from "./schemas";

export type ScholarshipSummary = z.infer<typeof scholarshipSummarySchema>;

export type Scholarship = z.infer<typeof scholarshipSchema>;
