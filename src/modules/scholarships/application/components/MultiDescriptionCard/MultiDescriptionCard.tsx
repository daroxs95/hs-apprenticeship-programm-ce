import { FlatCard } from "../FlatCard";
import { LabeledDescription } from "../LabeledDescription";
import ssheet from "./MultiDescriptionCard.module.scss";

type Props = {
  fields: {
    label: string;
    desc: string;
  }[];
};

export const MultiDescriptionCard = ({ fields }: Props) => {
  return (
    <FlatCard className={ssheet.container}>
      {fields.map((f, i) => (
        <LabeledDescription
          key={`${f.label}-${i}`}
          label={f.label}
          description={f.desc}
        />
      ))}
    </FlatCard>
  );
};
