import { AllHTMLAttributes } from "react";
import { FlatCard } from "../FlatCard";
import { LabeledDescription } from "../LabeledDescription";
import { Stack } from "../Stack";
import ssheet from "./TestimonialCard.module.scss";
import Image from "next/image";

type Props = {
  card: {
    imageUrl: string;
    name: string;
    education: string;
    position: string;
    message: string;
    socialLogoUrl?: string;
  };
} & AllHTMLAttributes<HTMLDivElement>;

export const TestimonialCard = ({
  card: { imageUrl, name, education, position, message, socialLogoUrl },
  className,
  ...rest
}: Props) => {
  return (
    <FlatCard className={`${ssheet.container} ${className || ""}`} {...rest}>
      <Stack orientation="horizontal" className={ssheet.header}>
        <Image
          className={ssheet.image}
          src={imageUrl}
          alt=""
          width={78}
          height={78}
        />
        <LabeledDescription
          labelClassName={ssheet.name}
          label={name}
          description={position}
        />
        {socialLogoUrl && (
          <Image
            className={ssheet.socialLogoUrl}
            src={socialLogoUrl}
            alt=""
            width={78}
            height={78}
          />
        )}
      </Stack>
      <div className={ssheet.content}>
        <div className={ssheet.message}>{message}</div>
        <div className={ssheet.education}>{education}</div>
      </div>
    </FlatCard>
  );
};
