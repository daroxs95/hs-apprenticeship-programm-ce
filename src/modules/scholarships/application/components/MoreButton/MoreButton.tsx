import { AllHTMLAttributes } from "react";
import ssheet from "./MoreButton.module.scss";

type Props = {
  type?: "button" | "submit" | "reset" | undefined;
  isOpen?: boolean;
} & AllHTMLAttributes<HTMLButtonElement>;

export const MoreButton = ({ className, isOpen, ...rest }: Props) => {
  return (
    <button
      className={`${ssheet.moreButton} ${isOpen ? ssheet.open : ""} ${
        className || ""
      }`}
      {...rest}
    >
      <div className={`${ssheet.moreButtonIcon} ${isOpen ? ssheet.open : ""}`}>
        {isOpen ? "-" : "+"}
      </div>

      <svg className={ssheet.circular} viewBox="25 25 50 50">
        <circle
          className={ssheet.path}
          cx="50"
          cy="50"
          r="23"
          fill="none"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    </button>
  );
};
