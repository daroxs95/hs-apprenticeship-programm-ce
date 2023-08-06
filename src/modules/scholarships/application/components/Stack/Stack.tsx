import { ReactNode, CSSProperties } from "react";
import ssheet from "./Stack.module.scss";

type Props = {
  children?: ReactNode | ReactNode[];
  orientation?: "vertical" | "horizontal";
  wrap?: boolean;
  style?: CSSProperties;
};
export const Stack = ({
  children,
  orientation = "vertical",
  style,
  wrap,
}: Props) => {
  return (
    <div
      className={ssheet["stack"]}
      style={{
        flexDirection: orientation == "horizontal" ? "row" : "column",
        flexWrap: wrap ? "wrap" : "initial",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
