import { z } from "zod";

export const scholarshipSummarySchema = z.object({
  id: z.number(),
  scope: z.string(),
  slug: z.string(),
  is_published: z.boolean(),
  scholarship_name: z.string(),
  preview_link: z.string(),
  location_id: z.string(),
  application_end_date: z.string(),
});

const descriptionSchema = z.object({
  type: z.string(),
  data: z.string(),
});

const optDataDescriptionSchema = z.object({
  type: z.string(),
  data: z.optional(z.string()),
});

const descriptionsSchema = z.object({
  type: z.string(),
  data: z.array(z.string()),
});

const locationSchema = z.object({
  id: z.number(),
  name: z.string(),
  longitude: z.number(),
  latitude: z.number(),
  description: z.string(),
  country_id: z.number(),
  acronym: z.string(),
});

const titledDataSchema = z.object({
  title: z.string(),
  data: z.string(),
});

const faqSchema = z.object({
  type: z.string(),
  question: z.string(),
  answer: z.array(optDataDescriptionSchema),
});

const applicationProcessSchema = z.object({
  title: z.string(),
  description: z.array(descriptionSchema),
});

const rawFileSchema = z.object({
  preview: z.string(),
});

const pivotSchema = z.object({
  company_id: z.number(),
  file_id: z.number(),
});

const countrySchema = z.object({
  id: z.number(),
  scope: z.string(),
  country_name: z.string(),
  display_name: z.string(),
  country_code: z.string(),
  country_flag: z.string(),
  country_phone_code: z.string(),
});

const metaSchema = z.object({
  id: z.number(),
  scope: z.string(),
  title: z.string(),
  description: z.string(),
  abstract: z.string(),
  keywords: z.string(),
});

const ogMetaSchema = z.object({
  id: z.number(),
  scope: z.string(),
  page_url: z.string(),
  title: z.string(),
  desc: z.string(),
  image_url: z.string(),
});

const faqsSchema = z.object({
  items: z.optional(z.array(faqSchema)),
  categories: z.optional(z.array(z.string())),
});

const photoSchema = z.object({
  rawFile: rawFileSchema,
  src: z.string(),
  title: z.string(),
});

const photo2Schema = z.object({
  id: z.number(),
  name: z.string(),
  path: z.string(),
  url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  size: z.any(),
  pivot: pivotSchema,
});

const directorSchema = z.object({
  id: z.number(),
  scope: z.string(),
  name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  slug: z.string(),
  category: z.string(),
  small_picture: photoSchema,
  current_position: z.string(),
  country: countrySchema,
});

const instructorSchema = z.object({
  id: z.number(),
  scope: z.string(),
  name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  slug: z.string(),
  category: z.string(),
  small_picture: photoSchema,
  current_position: z.string(),
  country: countrySchema,
});

const programSchema = z.object({
  id: z.number(),
  scope: z.string(),
  name: z.string(),
  about: z.string(),
  description: z.array(descriptionSchema),
  link: z.string(),
  available: z.boolean(),
  application_process: z.array(applicationProcessSchema),
  photos: z.array(photoSchema),
  program_logo: photoSchema,
  json_logo: z.string(),
});

const companySchema = z.object({
  id: z.number(),
  scope: z.string(),
  name: z.string(),
  type: z.string(),
  color: z.string(),
  website: z.string(),
  rank: z.number(),
  description: z.array(descriptionSchema),
  photos: z.array(photo2Schema),
  color_logo: photoSchema,
  logo_light: photoSchema,
  logo_dark: photoSchema,
});

const scholarshipDataSchema = z.object({
  scope: z.string(),
  id: z.number(),
  name: z.string(),
  description: z.array(descriptionSchema),
  location: locationSchema,
  scholarship_start_date: z.string(),
  application_end_date: z.string(),
  duration: z.number(),
  position: z.string(),
  about: z.array(descriptionSchema),
  tuition: z.number(),
  total_value: z.number(),
  stipend_per_month: z.number(),
  stipend_per_year: z.number(),
  remaining: z.number(),
  study_commitment: z.number(),
  internship_commitment: z.number(),
  study_commitment_text: z.string(),
  internship_commitment_text: z.string(),
  work_commitment: z.number(),
  work_commitment_duration: z.string(),
  work_commitment_type: z.string(),
  credits: z.number(),
  courses: z.number(),
  degree: z.string(),
  what_you_will_learn: z.array(titledDataSchema),
  internship_description: z.array(descriptionSchema),
  internship_expectation: descriptionsSchema,
  internship_potential_roles: descriptionsSchema,
  program_director_ids: z.array(z.number()),
  program_instructor_ids: z.array(z.number()),
  who_should_apply_text: z.array(descriptionSchema),
  university_requirements: descriptionsSchema,
  internship_requirements: descriptionsSchema,
  encourage_text: z.array(descriptionSchema),
  faqs: faqsSchema,
  program: programSchema,
  company: companySchema,
  directors: z.array(directorSchema),
  instructors: z.array(instructorSchema),
  mentors: z.array(z.any()),
});

export const scholarshipSchema = z.object({
  id: z.number(),
  scope: z.string(),
  slug: z.string(),
  is_published: z.boolean(),
  scholarship: scholarshipDataSchema,
  meta: metaSchema,
  og_meta: ogMetaSchema,
  testimonials: z.array(z.any()),
});
