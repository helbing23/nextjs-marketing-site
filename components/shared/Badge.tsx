import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "accent" | "success" | "warning" | "error" | "subtle";
}

export function Badge({ children, className, variant = "accent" }: BadgeProps) {
  const variants = {
    accent:
      "bg-[var(--color-accent-muted)] text-[var(--color-accent)] border border-[var(--color-accent)]/20",
    success:
      "bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20",
    warning:
      "bg-[var(--color-warning)]/10 text-[var(--color-warning)] border border-[var(--color-warning)]/20",
    error:
      "bg-[var(--color-error)]/10 text-[var(--color-error)] border border-[var(--color-error)]/20",
    subtle:
      "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
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
