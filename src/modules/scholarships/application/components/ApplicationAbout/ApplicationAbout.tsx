import { ReactNode } from "react";
import ssheet from "./ApplicationAbout.module.scss";
import { Title } from "../Title";
import { ScholarshipDescription } from "../ScholarshipDescription";
import Image from "next/image";
import { FlatCard } from "../FlatCard";

type Props = {
  children?: ReactNode | ReactNode[];
  imageUrl?: string;
  about: string;
  title: string;
};

export const ApplicationAbout = ({
  children,
  about,
  title,
  imageUrl,
}: Props) => {
  return (
    <div className={ssheet.container}>
      <div className={ssheet.coloredBg} />
      <div className={ssheet.mobile}>
        {imageUrl && (
          <div className={ssheet.imageContainer}>
            <Image
              src={imageUrl}
              width={400}
              height={400}
              alt=""
              className={ssheet.image}
            />
          </div>
        )}
        <FlatCard
          style={{
            paddingTop: "calc(140px + var(--app-s-space))",
            marginTop: "calc(-140px - var(--app-s-space))",
          }}
        >
          <Title title={title} />
          <ScholarshipDescription description={about} />
        </FlatCard>
      </div>

      <div className={ssheet.tablet}>
        <div className={ssheet.col1}>
          {imageUrl && (
            <div className={ssheet.imageContainer}>
              <Image
                src={imageUrl}
                width={400}
                height={400}
                alt=""
                className={ssheet.image}
              />
            </div>
          )}
        </div>
        <div className={ssheet.col2}>
          <Title title={title} />
          <ScholarshipDescription description={about} />
        </div>
      </div>

      {children}
    </div>
  );
};
