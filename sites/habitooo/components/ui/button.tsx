import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-white hover:brightness-[0.98] active:brightness-[0.96] border border-brand-green/10",
  secondary:
    "bg-transparent text-primary border border-border-default hover:bg-surface active:bg-surface/80"
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-sm"
};

export function Button({
  as = "button",
  href,
  variant = "primary",
  size = "lg",
  disabled,
  className,
  children
}: {
  as?: "button" | "link";
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold tracking-[-0.01em] transition will-change-transform focus-ring";
  const motion = disabled ? "" : "hover:-translate-y-[1px]";
  const cls = cn(base, sizes[size], variants[variant], motion, disabled && "opacity-50", className);

  if (as === "link") {
    if (!href) throw new Error("Button as link requires href");
    return (
      <Link
        href={href}
        className={cls}
        aria-disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" disabled={disabled} className={cls}>
      {children}
    </button>
  );
}

