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
        "inline-flex min-w-0 max-w-full items-center gap-3 rounded-xl px-0.5 py-1 text-sm font-semibold tracking-[-0.01em] text-primary hover:opacity-90 focus-ring sm:gap-4 sm:px-1 md:gap-5 lg:text-[0.9375rem]",
        className
      )}
      aria-label="Habitooo"
    >
      {showMark ? (
        <span className="relative inline-flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border-default bg-surface shadow-card sm:h-28 sm:w-28 sm:rounded-3xl md:h-36 md:w-36 lg:h-[12.5rem] lg:w-[12.5rem] lg:rounded-[1.75rem]">
          {/* 路徑見 lib/image-assets.ts（BRAND_LOGO_SRC） */}
          <img
            src={BRAND_LOGO_SRC}
            alt=""
            width={200}
            height={200}
            className="size-full max-h-full object-contain p-1 sm:p-1.5 md:p-2 lg:p-3"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="truncate text-base tracking-[-0.02em] sm:text-lg md:text-xl lg:text-2xl">
        Habitooo
      </span>
    </Link>
  );
}
