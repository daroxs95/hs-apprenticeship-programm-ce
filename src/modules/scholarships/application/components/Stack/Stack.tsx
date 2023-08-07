import { ReactNode, CSSProperties } from "react";
import ssheet from "./Stack.module.scss";

type Props = {
  children?: ReactNode | ReactNode[];
  orientation?: "vertical" | "horizontal";
  wrap?: boolean;
  grid?: boolean;
  style?: CSSProperties;
};
export const Stack = ({
  children,
  orientation = "vertical",
  style,
  wrap,
  grid,
}: Props) => {
  return (
    <div
      className={grid ? ssheet.grid : ssheet.stack}
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
