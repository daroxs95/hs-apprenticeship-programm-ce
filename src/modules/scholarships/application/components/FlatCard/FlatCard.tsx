import { AllHTMLAttributes } from "react";
import ssheet from "./FlatCard.module.scss";

type Props = AllHTMLAttributes<HTMLDivElement>;

export const FlatCard = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`${ssheet["flat-card"]} ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};
