import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  href = "/",
  className
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl px-1 py-1 text-sm font-semibold tracking-[-0.01em] text-primary hover:opacity-90 focus-ring",
        className
      )}
      aria-label="Habitooo"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl border border-border-default bg-surface shadow-card">
        <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_0_3px_rgba(22,163,74,0.10)] animate-live-pulse" />
      </span>
      <span>Habitooo</span>
    </Link>
  );
}
