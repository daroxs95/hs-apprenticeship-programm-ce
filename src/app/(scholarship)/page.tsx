import { ScholarshipService } from "@/modules/scholarships/infrastructure/service";
import { ScholarshipSummary } from "@/modules/scholarships/domain/types";
import { Stack } from "@/modules/scholarships/application/components/Stack";
import { ScholarshipCard } from "@/modules/scholarships/application/components/ScholarshipCard/ScholarshipCard";

async function getData() {
  let scholarships: ScholarshipSummary[] = [];
  try {
    scholarships = await ScholarshipService.list();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }

  return { scholarships };
}

export default async function Home() {
  const { scholarships } = await getData();

  return (
    <main className="main-container keep-navbar-space default-padding">
      <h1
        className="primary-color"
        style={{ margin: "var(--app-s-space) var(--app-s-space)" }}
      >
        Scholarships Programme
      </h1>
      <Stack grid>
        {scholarships.map((s) => (
          <ScholarshipCard
            style={{ height: "100%" }}
            slug={s.slug}
            key={s.id}
            applicationEndDate={new Date(s.application_end_date)}
            location={s.location_id}
            title={s.scholarship_name}
          />
        ))}
      </Stack>
    </main>
  );
}
