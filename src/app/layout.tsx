import { ReactNode } from "react";
import "./globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../fonts/apercu/apercu_regular_pro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/apercu/apercu_regular_italic_pro.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/apercu/apercu_bold_pro.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/apercu/apercu_bold_italic_pro.otf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scholarships Programme",
  description: "Scholarships Programme template",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
