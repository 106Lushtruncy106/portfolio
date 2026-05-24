import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-lg bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
