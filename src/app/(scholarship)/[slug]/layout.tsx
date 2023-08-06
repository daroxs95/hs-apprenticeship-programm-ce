import { ReactNode } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/modules/scholarships/application/components/Navbar";
import { ScholarshipService } from "@/modules/scholarships/infrastructure/service";
import { Scholarship } from "@/modules/scholarships/domain/types";

export const metadata: Metadata = {
  title: "Scholarships Programme",
  description: "Scholarships Programme list",
};

async function getData(slug: string) {
  let scholarship: Scholarship | undefined;
  try {
    scholarship = await ScholarshipService.get(slug);
  } catch (error) {
    scholarship = undefined;
  }

  return { scholarship };
}

export default async function DetailLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { slug: string };
}) {
  const { scholarship } = await getData(params.slug);

  return (
    <>
      <Navbar
        title="Harbour.space"
        subtitle={scholarship?.scholarship?.program?.name}
        applyButton
      />
      {children}
    </>
  );
}
