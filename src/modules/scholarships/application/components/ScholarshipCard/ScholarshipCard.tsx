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
};

export const ScholarshipCard = ({
  slug,
  title,
  location,
  applicationEndDate,
}: Props) => {
  return (
    <Link
      href={endpoints.resolvers.getScholarshipDetail(slug)}
      style={{ maxWidth: "350px", width: "100%", height: "100%" }}
      className={ssheet.container}
    >
      <FlatCard style={{ padding: "16px 26px" }}>
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
