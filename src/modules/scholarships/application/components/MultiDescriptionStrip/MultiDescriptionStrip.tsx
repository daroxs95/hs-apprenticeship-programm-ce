import { ReactNode } from "react";
import { LabeledDescription } from "../LabeledDescription";
import ssheet from "./MultiDescriptionStrip.module.scss";

type Props = {
  children?: ReactNode | ReactNode[];
  fields: {
    label: string;
    desc: string;
  }[];
};

export const MultiDescriptionStrip = ({ fields, children }: Props) => {
  return (
    <div className={ssheet.container}>
      {fields.map((f, i) => (
        <LabeledDescription
          key={`${f.label}-${i}`}
          label={f.label}
          description={f.desc}
          labelClassName={ssheet.label}
        />
      ))}
      {children}
    </div>
  );
};
