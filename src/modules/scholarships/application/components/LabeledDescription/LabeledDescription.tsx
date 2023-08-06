import ssheet from "./LabeledDescription.module.scss";

type Props = {
  label: string;
  description: string;
};

export const LabeledDescription = ({ label, description }: Props) => {
  return (
    <div className={ssheet.container}>
      <p className={ssheet.label}>{label}</p>
      <p className={ssheet.desc}>{description}</p>
    </div>
  );
};
