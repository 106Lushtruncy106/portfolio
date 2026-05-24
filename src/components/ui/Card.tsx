import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hover3d?: boolean;
}

export default function Card({ children, className, glow = false, hover3d = false }: CardProps) {
  const Component = hover3d ? motion.div : "div";

  return (
    <Component
      className={cn(
        "relative rounded-xl border border-white/5 bg-surface overflow-hidden",
        glow && "glow-effect",
        hover3d && "group cursor-pointer",
        className
      )}
      {...(hover3d
        ? {
            whileHover: { scale: 1.02 },
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }
        : {})}
    >
      {children}
    </Component>
  );
}
