import { AllHTMLAttributes } from "react";
import Link from "next/link";
import { FlatCard } from "../FlatCard";
import { LabeledDescription } from "../LabeledDescription";
import { Stack } from "../Stack";
import { endpoints } from "@/config";
import ssheet from "./ScholarshipCard.module.scss";

type Props = {
  slug: string;
  title: string;
  location: string;
  applicationEndDate: Date;
} & AllHTMLAttributes<HTMLAnchorElement>;

export const ScholarshipCard = ({
  slug,
  title,
  location,
  applicationEndDate,
  href,
  className,
  style,
  ...rest
}: Props) => {
  return (
    <Link
      href={href || endpoints.resolvers.getScholarshipDetail(slug)}
      style={{ maxWidth: "350px", width: "100%", height: "100%", ...style }}
      className={`${ssheet.container} ${className || ""}`}
      {...rest}
    >
      <FlatCard
        style={{
          padding: "16px 26px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3 className="primary-color">{title}</h3>
        <Stack orientation="horizontal">
          <LabeledDescription label="Location" description={location} />
          <LabeledDescription
            label="Application end date"
            description={applicationEndDate.toLocaleDateString()}
          />
        </Stack>
      </FlatCard>
    </Link>
  );
};
