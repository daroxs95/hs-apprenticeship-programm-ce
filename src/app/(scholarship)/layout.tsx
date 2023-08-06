import { ReactNode } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/modules/scholarships/application/components/Navbar";

export const metadata: Metadata = {
  title: "Scholarships Programme",
  description: "Scholarships Programme list",
};

export default function ListLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar title="Harbour.space" subtitle="Scholarships Programme" />
      {children}
    </>
  );
}
