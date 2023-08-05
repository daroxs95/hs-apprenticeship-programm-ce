import request from "supertest";
import { scholarshipSummarySchema, scholarshipSchema } from "../domain/schemas";
import { endpoints } from "@/config";
import { z } from "zod";

const scholarshipSummaryResponseSchema = z.array(scholarshipSummarySchema);
const scholarshipResponseSchema = scholarshipSchema;

describe("API", () => {
  const base = request(endpoints.api.apprenticeship);
  let slugTotest = "";

  it("should list scholarships matching current structure/type", async () => {
    const response = await base.get("/");
    // expect the status code to be 200
    expect(response.status).toBe(200);
    // expect the content type to be json
    expect(response.type).toBe("application/json");
    // expect the body to match the response schema
    if (response.body.length) slugTotest = response.body[0].slug || "";
    expect(() => scholarshipSummaryResponseSchema.parse(response.body)).not.toThrow();
  });

  it("should fetch scholarship details matching current structure/type", async () => {
    // expect to being able to get one slug at least to test endpoint
    expect(slugTotest).not.toBe("");
    const response = await base.get(`/${slugTotest}`);
    // expect the status code to be 200
    expect(response.status).toBe(200);
    // expect the content type to be json
    expect(response.type).toBe("application/json");
    // expect the body to match the response schema
    expect(() => scholarshipResponseSchema.parse(response.body)).not.toThrow();
  });
});
