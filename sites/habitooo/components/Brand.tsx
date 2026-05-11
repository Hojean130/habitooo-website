import Link from "next/link";
import { cn } from "@/lib/utils";

export function Brand({
  href = "/",
  className,
  showMark = true
}: {
  href?: string;
  className?: string;
  /** false = 僅文字 wordmark（Header 用） */
  showMark?: boolean;
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
      {showMark ? (
        <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border-default bg-surface shadow-card">
          {/* 正式 logo：替換 public/images/brand/logo.svg（或改檔名並同步此路徑） */}
          <img
            src="/images/brand/logo.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain p-1"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="text-base font-semibold tracking-[-0.02em]">Habitooo</span>
    </Link>
  );
}
