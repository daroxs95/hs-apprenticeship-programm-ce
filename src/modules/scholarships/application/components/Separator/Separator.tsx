import { AllHTMLAttributes } from "react";
import ssheet from "./Separator.module.scss";

type Props = AllHTMLAttributes<HTMLDivElement>;

export const Separator = ({ className, ...rest }: Props) => {
  return <div className={`${ssheet.separator} ${className || ""}`} {...rest} />;
};
