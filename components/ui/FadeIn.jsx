"use client";

import AnimateOnScroll from "./AnimateOnScroll";

export default function FadeIn({ children, delay = "" }) {
  return (
    <AnimateOnScroll className={`animate-fade-up ${delay}`}>
      {children}
    </AnimateOnScroll>
  );
}
