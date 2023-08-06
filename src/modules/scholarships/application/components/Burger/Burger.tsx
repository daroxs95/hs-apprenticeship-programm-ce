import { ReactNode, CSSProperties, AllHTMLAttributes } from "react";
import ssheet from "./Burger.module.scss";

type Props = AllHTMLAttributes<HTMLDivElement>;

export const Burger = ({ children, className, ...rest }: Props) => {
  return (
    <div className={`${ssheet.container} ${className}`} {...rest}>
      {children}
      <span className={ssheet.layer} />
      <span className={ssheet.layer} />
      <span className={ssheet.layer} />
    </div>
  );
};
