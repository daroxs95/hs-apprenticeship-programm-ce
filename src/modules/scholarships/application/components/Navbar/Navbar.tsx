import { ReactNode, CSSProperties } from "react";
import ssheet from "./Navbar.module.scss";
import { Burger } from "../Burger";

type Props = {
  title?: string;
  subtitle?: string;
  applyButton?: boolean;
};
export const Navbar = ({ title, subtitle, applyButton }: Props) => {
  return (
    <nav className={ssheet.navbar}>
      <div className={ssheet.navbarContent}>
        <h2 className={ssheet.titleContainer}>
          <span className={ssheet.title}>{title}</span>
          <span className={ssheet.subtitle}>/{subtitle}</span>
        </h2>
        <div className={ssheet.right}>
          {applyButton && (
            <button style={{ cursor: "pointer" }} className={ssheet.applyBtn}>
              <p style={{ position: "relative", zIndex: 10 }}>Apply now</p>
            </button>
          )}
          <Burger style={{ cursor: "pointer" }} />
        </div>
      </div>
    </nav>
  );
};
