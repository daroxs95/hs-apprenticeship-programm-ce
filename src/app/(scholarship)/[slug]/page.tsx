import { ScholarshipService } from "@/modules/scholarships/infrastructure/service";
import { Scholarship } from "@/modules/scholarships/domain/types";

import { notFound } from "next/navigation";

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

export default async function ScholarshipPage({
  params,
}: {
  params: { slug: string };
}) {
  const { scholarship } = await getData(params.slug);
  if (!scholarship) notFound();

  return (
    <main className="main-container keep-navbar-space">
      <h1 className="primary-color">{scholarship.scholarship.name}</h1>
    </main>
  );
}
