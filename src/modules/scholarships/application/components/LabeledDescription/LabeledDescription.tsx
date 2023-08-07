import ssheet from "./LabeledDescription.module.scss";

type Props = {
  label: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
};

export const LabeledDescription = ({
  label,
  description,
  descriptionClassName,
  className,
}: Props) => {
  return (
    <div className={`${ssheet.container} ${className || ""}`}>
      <p className={ssheet.label}>{label}</p>
      <p className={`${ssheet.desc} ${descriptionClassName || ""}`}>
        {description}
      </p>
    </div>
  );
};
