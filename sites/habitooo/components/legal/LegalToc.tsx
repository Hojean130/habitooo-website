"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { LegalTocItem } from "@/components/legal/LegalLayout";

function getHeading(id: string): HTMLElement | null {
  if (!id) return null;
  const el = document.getElementById(id);
  return el instanceof HTMLElement ? el : null;
}

export function LegalToc({
  items,
  className,
  variant = "sidebar",
  onNavigate
}: {
  items: LegalTocItem[];
  className?: string;
  variant?: "sidebar" | "card";
  onNavigate?: () => void;
}) {
  const ids = useMemo(() => items.map((it) => it.id).filter(Boolean), [items]);
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    const headings = ids.map(getHeading).filter(Boolean) as HTMLElement[];
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target)
          .filter((t): t is HTMLElement => t instanceof HTMLElement)
          .sort((a, b) => a.offsetTop - b.offsetTop);

        if (!visible.length) return;
        const next = visible[0]?.id;
        if (next && next !== activeRef.current) setActive(next);
      },
      {
        root: null,
        // 96px header + some breathing room, favor next section a bit earlier.
        rootMargin: "-120px 0px -70% 0px",
        threshold: [0, 1]
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [ids]);

  const baseLink =
    "block rounded-md px-2 py-1.5 text-[13px] leading-snug text-secondary hover:text-primary focus-ring";
  const activeLink =
    "text-primary bg-surface/70 border border-border-default/80 shadow-none";

  return (
    <nav
      className={cn("min-w-0", className)}
      aria-label={variant === "sidebar" ? "Table of contents" : "本頁目錄"}
    >
      <div className={cn("text-[11px] font-semibold tracking-[0.14em] text-secondary", variant === "card" && "sr-only")}>
        ON THIS PAGE
      </div>
      <ul className={cn("mt-3", variant === "card" ? "grid grid-cols-2 gap-x-2 gap-y-1.5 sm:grid-cols-3" : "space-y-1")}>
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <li key={it.id} className="min-w-0">
              <a
                href={`#${it.id}`}
                className={cn(baseLink, isActive && activeLink)}
                aria-current={isActive ? "location" : undefined}
                onClick={() => onNavigate?.()}
              >
                <span className="line-clamp-2">{it.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function LegalTocMobile({
  items,
  className,
  defaultOpen = false
}: {
  items: LegalTocItem[];
  className?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = "legal-toc-mobile";

  return (
    <div className={cn("card-surface", className)}>
      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-primary"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
      >
        <span>本頁目錄</span>
        <span className="text-xs font-medium text-secondary">{open ? "收合" : "展開"}</span>
      </button>
      <div id={contentId} hidden={!open} className="px-2 pb-3">
        <div className="px-2 pb-1 text-xs text-secondary">點選段落快速跳轉</div>
        <LegalToc items={items} variant="card" onNavigate={() => setOpen(false)} />
      </div>
    </div>
  );
}

