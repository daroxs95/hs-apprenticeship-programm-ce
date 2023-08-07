"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import ssheet from "./StickyBar.module.scss";

type Props = {
  children?: ReactNode | ReactNode[];
};

export const StickyBar = ({ children }: Props) => {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, options);
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [boxRef]);

  return (
    <div className={ssheet.container} ref={boxRef}>
      <div className={`${ssheet.bar} ${isVisible ? ssheet.hidden : ""}`}>
        {children}
      </div>
    </div>
  );
};
