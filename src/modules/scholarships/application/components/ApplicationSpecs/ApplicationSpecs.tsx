import { ReactNode } from "react";
import ssheet from "./ApplicationSpecs.module.scss";
import { FlatCard } from "../FlatCard";
import { LabeledDescription } from "../LabeledDescription";
import { Separator } from "../Separator";
import { MultiDescriptionCard } from "../MultiDescriptionCard";

type Props = {
  children?: ReactNode | ReactNode[];
  value: {
    total: number;
    tuitionCovered: number;
    remaining: number;
  };
  stipend?: {
    yearly?: number;
    monthly?: number;
  };
  study: {
    hours: number;
    commitment: string;
  };
  work?: {
    hours?: number;
    commitment?: string;
  };
  internship: {
    hours?: number;
    commitment?: string;
  };
};

const toAmmout = (v: number) => `€${v}`;

export const ApplicationSpecs = ({
  children,
  value,
  study,
  work,
  internship,
  stipend,
}: Props) => {
  return (
    <div className={ssheet.container}>
      <FlatCard className={ssheet.col1}>
        <LabeledDescription
          label="Scholarship value"
          description={toAmmout(value.total)}
          descriptionClassName={ssheet.bDesc}
        />
      </FlatCard>
      <Separator
        className={ssheet.scholarshipAmmountsSeparator}
        style={{ marginTop: "18px" }}
      />
      <div className={ssheet.scholarshipAmmounts}>
        <LabeledDescription
          label="Tuition covered"
          description={toAmmout(value.tuitionCovered)}
          descriptionClassName={ssheet.scholarshipAmmountsbDesc}
        />
        <LabeledDescription
          label="Remaining"
          description={toAmmout(value.remaining)}
          descriptionClassName={ssheet.scholarshipAmmountsbDesc}
        />
        <LabeledDescription
          className={ssheet.stipend}
          label="Living stipend"
          description={`${toAmmout(stipend?.yearly || 0)} (${toAmmout(
            stipend?.monthly || 0
          )}/month)`}
          descriptionClassName={ssheet.scholarshipAmmountsbDesc}
        />
      </div>
      <FlatCard>
        <LabeledDescription
          label="Study commitment"
          description={`${study.hours} hours / day`}
          descriptionClassName={ssheet.mDesc}
        />
        <Separator style={{ width: "28px", marginTop: "18px" }} />
        <p className={ssheet.explanationText}>{study.commitment}</p>
      </FlatCard>
      {work?.hours ? (
        <FlatCard>
          <LabeledDescription
            label="Work commitment"
            description={`${work.hours} hours / day`}
            descriptionClassName={ssheet.mDesc}
          />
          <Separator style={{ width: "28px", marginTop: "18px" }} />
          <p className={ssheet.explanationText}>{work.commitment}</p>
        </FlatCard>
      ) : (
        <FlatCard>
          <LabeledDescription
            label="Internship commitment"
            description={`${internship.hours} hours / day`}
            descriptionClassName={ssheet.mDesc}
          />
          <Separator style={{ width: "28px", marginTop: "18px" }} />
          <p className={ssheet.explanationText}>{internship.commitment}</p>
        </FlatCard>
      )}
      <Separator
        className={ssheet.graduationSeparator}
        style={{ marginTop: "18px" }}
      >
        <p className={ssheet.graduationText}>graduation</p>
      </Separator>
      <FlatCard className={ssheet.graduationCard}>
        <LabeledDescription
          label="A Full-Time Contract"
          description="1 Year Full-Time"
          descriptionClassName={ssheet.mDesc}
        />
        <Separator style={{ width: "28px", marginTop: "18px" }} />
        <p className={ssheet.explanationText}>
          You’ll be guaranteed a 1 year contract upon graduation.
        </p>
      </FlatCard>
      {children}
    </div>
  );
};
