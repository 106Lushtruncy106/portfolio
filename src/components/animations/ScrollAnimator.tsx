"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "slideUp" | "fadeIn";
}

const variants = {
  slideUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export default function ScrollAnimator({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "slideUp",
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const v = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial={v.hidden}
      animate={isInView ? v.visible : v.hidden}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
