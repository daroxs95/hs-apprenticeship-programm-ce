import { ReactNode, CSSProperties } from "react";
import ssheet from "./Stack.module.scss";

type Props = {
  children?: ReactNode | ReactNode[];
  orientation?: "vertical" | "horizontal";
  wrap?: boolean;
  grid?: boolean;
  className?: string;
  style?: CSSProperties;
};
export const Stack = ({
  children,
  orientation = "vertical",
  style,
  wrap,
  grid,
  className,
}: Props) => {
  return (
    <div
      className={`${grid ? ssheet.grid : ssheet.stack} ${className || ""}`}
      style={
        grid
          ? style
          : {
              flexDirection: orientation == "horizontal" ? "row" : "column",
              flexWrap: wrap ? "wrap" : "initial",
              ...style,
            }
      }
    >
      {children}
    </div>
  );
};
