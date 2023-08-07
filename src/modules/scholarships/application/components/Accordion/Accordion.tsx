"use client";
import { ReactNode, useEffect, useState } from "react";
import ssheet from "./Accordion.module.scss";
import { MoreButton } from "../MoreButton";

type Props = {
  children: ReactNode | ReactNode[];
  head: ReactNode | ReactNode[];
  open?: boolean;
};

export const Accordion = ({ head, children, open }: Props) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div>
      <div className={ssheet.accHeader}>
        {head}
        <MoreButton
          className={ssheet.moreBtn}
          onClick={() => setIsOpen((prev) => !prev)}
          isOpen={isOpen}
        />
      </div>
      <div className={`${ssheet.accBody} ${isOpen ? "" : ssheet.hidden}`}>
        {children}
      </div>
    </div>
  );
};
