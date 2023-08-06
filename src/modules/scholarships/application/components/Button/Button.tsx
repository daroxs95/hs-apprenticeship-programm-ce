import { AllHTMLAttributes } from "react";
import ssheet from "./Button.module.scss";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
} & AllHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button className={`${ssheet.container} ${className}`} {...rest}>
      {children}
    </button>
  );
};
