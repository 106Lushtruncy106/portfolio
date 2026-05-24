"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const followerX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const followerY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleHoverStart = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "60px";
        cursorRef.current.style.height = "60px";
        cursorRef.current.style.backgroundColor = "rgba(99, 102, 241, 0.15)";
        cursorRef.current.style.borderColor = "#6366f1";
      }
    };

    const handleHoverEnd = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "20px";
        cursorRef.current.style.height = "20px";
        cursorRef.current.style.backgroundColor = "rgba(168, 85, 247, 0.1)";
        cursorRef.current.style.borderColor = "rgba(168, 85, 247, 0.3)";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [data-cursor-hover]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          backgroundColor: "rgba(168, 85, 247, 0.1)",
          border: "1px solid rgba(168, 85, 247, 0.3)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
          boxShadow: "0 0 20px rgba(99, 102, 241, 0.15)",
        }}
      />
      <motion.div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99]"
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid rgba(99, 102, 241, 0.1)",
          backgroundColor: "rgba(99, 102, 241, 0.02)",
        }}
      />
    </>
  );
}
