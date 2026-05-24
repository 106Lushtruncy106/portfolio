"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface FancyCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export default function FancyCounter({ value, label, delay = 0 }: FancyCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numStr = value.replace(/[^0-9.]/g, "");
    const suffix = value.replace(/[0-9.]/g, "");
    const target = parseFloat(numStr);
    if (isNaN(target)) {
      setDisplayed(value);
      return;
    }

    const duration = 1800;
    const startTime = Date.now() + delay * 1000;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (Number.isInteger(target)) {
        setDisplayed(Math.floor(current).toString() + suffix);
      } else {
        setDisplayed(current.toFixed(1) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold tracking-tight tabular-nums">
        {displayed}
      </div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </div>
  );
}
