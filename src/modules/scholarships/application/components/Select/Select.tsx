import { AllHTMLAttributes } from "react";
import ssheet from "./Select.module.scss";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  // options?: string[];
} & AllHTMLAttributes<HTMLSelectElement>;

export const Select = ({ children, ...rest }: Props) => {
  return (
    <div className={ssheet.container}>
      <select {...rest}>{children}</select>
    </div>
  );
};
