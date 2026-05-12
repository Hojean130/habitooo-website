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
        // 與 Header 導覽連結（navClass text-sm）+ lg 階梯對齊；mark 用 em 跟字級縮放
        "inline-flex min-w-0 max-w-full items-center gap-[0.45em] rounded-xl px-0.5 py-1 text-sm font-semibold tracking-[-0.01em] text-primary hover:opacity-90 focus-ring lg:text-[0.9375rem] sm:px-1",
        className
      )}
      aria-label="Habitooo"
    >
      {showMark ? (
        <span className="relative inline-flex h-[2.35em] w-[2.35em] max-h-10 max-w-10 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-border-default bg-surface shadow-card">
          {/* 路徑見 lib/image-assets.ts（BRAND_LOGO_SRC），預設為占位圖 */}
          <img
            src={BRAND_LOGO_SRC}
            alt=""
            width={40}
            height={40}
            className="size-full max-h-full object-contain p-[0.12em]"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="truncate tracking-[-0.02em]">
        Habitooo
      </span>
    </Link>
  );
}
