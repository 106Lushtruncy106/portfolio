"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimationVariant = "clipUp" | "perspective" | "blurIn" | "slideLeft" | "slideRight" | "stagger";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  delay?: number;
  duration?: number;
}

const variants: Record<AnimationVariant, { initial: any; animate: any }> = {
  clipUp: {
    initial: { clipPath: "inset(100% 0 0 0)" },
    animate: { clipPath: "inset(0% 0 0 0)" },
  },
  perspective: {
    initial: { opacity: 0, rotateX: 25, y: 60, transformPerspective: 800 },
    animate: { opacity: 1, rotateX: 0, y: 0, transformPerspective: 800 },
  },
  blurIn: {
    initial: { opacity: 0, filter: "blur(12px)", y: 20 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
  },
  stagger: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
};

export default function Reveal({
  children,
  className = "",
  animation = "blurIn",
  delay = 0,
  duration = 0.7,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const v = variants[animation];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      animate={isInView ? v.animate : v.initial}
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

export function StaggerReveal({
  children,
  className = "",
  animation = "clipUp",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const v = variants[animation];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
  animation = "clipUp",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationVariant;
}) {
  const v = variants[animation];

  return (
    <motion.div
      className={className}
      variants={{
        hidden: v.initial,
        visible: v.animate,
      }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
