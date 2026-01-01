"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function SlideIn({ children, direction = "left", delay = "" }) {
  const animation =
    direction === "right"
      ? "animate-slide-right"
      : "animate-slide-left";

  return (
    <AnimateOnScroll className={`${animation} ${delay}`}>
      {children}
    </AnimateOnScroll>
  );
}
