import Link from "next/link";
import { BRAND_LOGO_SRC } from "@/lib/image-assets";
import { cn } from "@/lib/utils";

export function Brand({
  href = "/",
  className,
  showMark = true
}: {
  href?: string;
  className?: string;
  /** false = 僅文字 wordmark（極簡表頭用） */
  showMark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-xl px-0.5 py-1 text-sm font-semibold tracking-[-0.01em] text-primary hover:opacity-90 focus-ring sm:gap-2 sm:px-1",
        className
      )}
      aria-label="Habitooo"
    >
      {showMark ? (
        <span className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border-default bg-surface shadow-card sm:h-8 sm:w-8 sm:rounded-xl">
          {/* 路徑見 lib/image-assets.ts（BRAND_LOGO_SRC），預設為占位圖 */}
          <img
            src={BRAND_LOGO_SRC}
            alt=""
            width={32}
            height={32}
            className="h-7 w-7 object-contain p-0.5 sm:h-8 sm:w-8 sm:p-1"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="truncate text-sm font-semibold tracking-[-0.02em] sm:text-base">Habitooo</span>
    </Link>
  );
}
