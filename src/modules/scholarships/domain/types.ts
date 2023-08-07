import { z } from "zod";
import {
  scholarshipSchema,
  scholarshipSummarySchema,
  faqSchema,
  testimonialSchema,
} from "./schemas";

export type ScholarshipSummary = z.infer<typeof scholarshipSummarySchema>;

export type Scholarship = z.infer<typeof scholarshipSchema>;

export type FAQ = z.infer<typeof faqSchema>;

export type Testimonial = z.infer<typeof testimonialSchema>;
