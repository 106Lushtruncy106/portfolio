import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
        {
          "bg-white/5 text-text-muted border border-white/10": variant === "default",
          "bg-primary/10 text-primary-light border border-primary/20": variant === "primary",
          "bg-accent/10 text-accent-light border border-accent/20": variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
