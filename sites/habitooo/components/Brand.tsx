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
        <img
          src={BRAND_LOGO_SRC}
          alt=""
          width={3400}
          height={948}
          className="block h-10 w-auto max-w-full shrink-0 transform-gpu object-contain object-left sm:h-12 md:h-16 lg:h-20"
          decoding="sync"
          fetchPriority="high"
        />
      ) : null}
      {!showMark ? (
        <span className="truncate text-base tracking-[-0.02em] sm:text-lg md:text-xl lg:text-2xl">
          Habitooo
        </span>
      ) : null}
    </Link>
  );
}
