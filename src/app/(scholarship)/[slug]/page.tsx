import { ScholarshipService } from "@/modules/scholarships/infrastructure/service";
import { Scholarship } from "@/modules/scholarships/domain/types";

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ApplicationSummary } from "@/modules/scholarships/application/components/ApplicationSummary";
import { ApplicationAbout } from "@/modules/scholarships/application/components/ApplicationAbout";
import { ApplicationSpecs } from "@/modules/scholarships/application/components/ApplicationSpecs";
import { FAQs } from "@/modules/scholarships/application/components/FAQs";

export async function generateStaticParams() {
  const posts = await ScholarshipService.list();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getData(slug: string) {
  let scholarship: Scholarship | undefined;
  try {
    scholarship = await ScholarshipService.get(slug);
  } catch (error) {
    scholarship = undefined;
  }

  return { scholarship };
}

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scholarship } = await getData(params.slug);

  return {
    title: scholarship?.meta.title,
    openGraph: {
      images: scholarship?.og_meta.image_url
        ? [scholarship?.og_meta.image_url]
        : [],
      title: scholarship?.og_meta.title,
      description: scholarship?.og_meta.desc,
    },
  };
}

export default async function ScholarshipPage({ params }: Props) {
  const { scholarship } = await getData(params.slug);
  if (!scholarship) notFound();

  return (
    <main className="main-container keep-navbar-space">
      <section>
        <ApplicationSummary
          poweredBy={{
            name: scholarship.scholarship.company.name,
            imageUrl: scholarship.scholarship.company.color_logo.src,
          }}
          title={{
            title: scholarship.scholarship.name,
            imageUrl: scholarship.scholarship.program.program_logo.src,
          }}
          application={{
            closeDate: (() => {
              const d = new Date(scholarship.scholarship.application_end_date);
              d.setFullYear(2024);
              return d;
            })(),
            description: scholarship.scholarship.description?.[0].data,
            position: scholarship.scholarship.position,
            duration: scholarship.scholarship.duration || 0,
            startDate: scholarship?.scholarship?.scholarship_start_date
              ? new Date(scholarship.scholarship.scholarship_start_date)
              : undefined,
            endDate: scholarship?.scholarship?.scholarship_start_date
              ? (() => {
                  const d = new Date(
                    scholarship.scholarship.scholarship_start_date
                  );
                  d.setTime(
                    d.getTime() + scholarship.scholarship.duration * 2629746000
                  );
                  return d;
                })()
              : undefined,
            location: scholarship.scholarship.location.name,
          }}
        />
      </section>
      <section>
        <ApplicationAbout
          about={scholarship.scholarship.about?.[0].data}
          title="About the apprenticeship"
          imageUrl={scholarship.scholarship.program.photos?.[0].src}
        />
      </section>
      <section>
        <ApplicationSpecs
          study={{
            hours: scholarship.scholarship.study_commitment,
            commitment: scholarship.scholarship.study_commitment_text,
          }}
          work={{
            hours: scholarship.scholarship.work_commitment,
            commitment:
              "Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.",
          }}
          internship={{
            hours: scholarship.scholarship.internship_commitment,
            commitment: scholarship.scholarship.internship_commitment_text,
          }}
          value={{
            total: scholarship.scholarship.total_value,
            tuitionCovered: scholarship.scholarship.tuition,
            remaining: scholarship.scholarship.remaining,
          }}
          stipend={{
            monthly: scholarship.scholarship.stipend_per_month,
            yearly: scholarship.scholarship.stipend_per_year,
          }}
        />
      </section>
      <section>
        <FAQs
          faqs={scholarship.scholarship.faqs.items || []}
          categories={scholarship.scholarship.faqs.categories || []}
        />
      </section>
    </main>
  );
}
