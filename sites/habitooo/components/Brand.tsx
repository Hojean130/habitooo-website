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
        "inline-flex min-w-0 max-w-full items-center gap-2 rounded-xl px-0.5 py-1 text-sm font-semibold tracking-[-0.01em] text-primary hover:opacity-90 focus-ring sm:gap-2.5 sm:px-1",
        className
      )}
      aria-label="Habitooo"
    >
      {showMark ? (
        <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border-default bg-surface shadow-card sm:h-11 sm:w-11">
          {/* 路徑見 lib/image-assets.ts（BRAND_LOGO_SRC），預設為占位圖 */}
          <img
            src={BRAND_LOGO_SRC}
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 object-contain p-1.5 sm:h-11 sm:w-11 sm:p-2"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="truncate text-base font-semibold tracking-[-0.02em] sm:text-[1.0625rem]">
        Habitooo
      </span>
    </Link>
  );
}
