import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "success" | "warning" | "error" | "subtle";
}

export function Badge({ children, className, variant = "accent" }: BadgeProps) {
  const variants = {
    accent:
      "bg-accent-muted text-accent border border-accent/20",
    success:
      "bg-success/10 text-success border border-success/20",
    warning:
      "bg-warning/10 text-warning border border-warning/20",
    error:
      "bg-error/10 text-error border border-error/20",
    subtle:
      "bg-bg-tertiary text-text-secondary border border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
