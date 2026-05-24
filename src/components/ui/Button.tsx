import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden group",
          {
            "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 active:scale-95":
              variant === "primary",
            "bg-surface-light border border-border text-white hover:bg-surface-lighter hover:border-primary/50":
              variant === "secondary",
            "text-text-muted hover:text-white hover:bg-white/5": variant === "ghost",
            "border border-border text-white hover:border-primary hover:bg-primary/10":
              variant === "outline",
          },
          {
            "px-3 py-1.5 text-xs": size === "sm",
            "px-5 py-2.5 text-sm": size === "md",
            "px-8 py-3.5 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
