import { ReactNode } from "react";
import ssheet from "./ApplicationSummary.module.scss";
import { PoweredBy } from "../PoweredBy";
import { Title } from "../Title";
import { TimeCountdown } from "../TimeCountdown";
import { ScholarshipDescription } from "../ScholarshipDescription";
import { MultiDescriptionCard } from "../MultiDescriptionCard";

type Props = {
  children?: ReactNode | ReactNode[];
  poweredBy: {
    imageUrl?: string;
    name: string;
  };
  title: {
    imageUrl?: string;
    title: string;
  };
  application: {
    closeDate: Date;
    description: string;
    position?: string;
    location?: string;
    duration?: number;
    startDate?: Date;
    endDate?: Date;
  };
};

export const ApplicationSummary = ({
  children,
  poweredBy,
  title,
  application,
}: Props) => {
  return (
    <div className={ssheet.container}>
      <div className={ssheet.mobile}>
        <Title {...title} />
        <PoweredBy {...poweredBy} />
        <TimeCountdown
          card
          label="Application closses in"
          date={application.closeDate}
        />
        <MultiDescriptionCard
          fields={[
            { label: "Location", desc: application.location || "" },
            {
              label: "Duration",
              desc: application.duration
                ? `${Number((application.duration / 12).toFixed(2))} Year/s`
                : "",
            },
            {
              label: "Start date",
              desc: application.startDate
                ? application.startDate.toDateString()
                : "",
            },
            {
              label: "End date",
              desc: application.endDate
                ? application.endDate.toDateString()
                : "",
            },
          ]}
        />
        <ScholarshipDescription
          label="A fully funded work-study program to launch your tech career"
          description={application.description}
          position={application.position}
          applyBtn
        />
      </div>

      <div className={ssheet.tablet}>
        <div className={ssheet.col1}>
          <Title {...title} />
          <ScholarshipDescription
            label="A fully funded work-study program to launch your tech career"
            description={application.description}
            position={application.position}
            applyBtn
          />
        </div>
        <div className={ssheet.col2}>
          <PoweredBy {...poweredBy} />
          <TimeCountdown
            card
            label="Application closses in"
            date={application.closeDate}
          />
          <MultiDescriptionCard
            fields={[
              { label: "Location", desc: application.location || "" },
              {
                label: "Duration",
                desc: application.duration
                  ? `${Number((application.duration / 12).toFixed(2))} Year/s`
                  : "",
              },
              {
                label: "Start date",
                desc: application.startDate
                  ? application.startDate.toDateString()
                  : "",
              },
              {
                label: "End date",
                desc: application.endDate
                  ? application.endDate.toDateString()
                  : "",
              },
            ]}
          />
        </div>
        <div className={ssheet.bgDetail} />
      </div>

      {children}
    </div>
  );
};
