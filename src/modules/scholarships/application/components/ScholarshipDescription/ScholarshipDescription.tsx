import { Button } from "../Button";
import ssheet from "./ScholarshipDescription.module.scss";

type Props = {
  label?: string;
  description: string;
  position?: string;
  applyBtn?: boolean;
};

export const ScholarshipDescription = ({
  label,
  description,
  position,
  applyBtn,
}: Props) => {
  return (
    <div className={ssheet.container}>
      {label && <p className={ssheet.label}>{label}</p>}
      <p className={ssheet.desc}>{description}</p>
      {position && (
        <p className={ssheet.pos}>
          <span className={ssheet.posLabel}>Position: </span>
          {position}
        </p>
      )}
      {applyBtn && <Button>Apply Now</Button>}
    </div>
  );
};
