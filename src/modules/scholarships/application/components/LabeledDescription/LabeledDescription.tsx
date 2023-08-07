import ssheet from "./LabeledDescription.module.scss";

type Props = {
  label: string;
  description: string;
  className?: string;
  descriptionClassName?: string;
  labelClassName?: string;
};

export const LabeledDescription = ({
  label,
  description,
  labelClassName,
  descriptionClassName,
  className,
}: Props) => {
  return (
    <div className={`${ssheet.container} ${className || ""}`}>
      <p className={`${ssheet.label} ${labelClassName || ""}`}>{label}</p>
      <p className={`${ssheet.desc} ${descriptionClassName || ""}`}>
        {description}
      </p>
    </div>
  );
};
