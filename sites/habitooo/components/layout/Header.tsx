"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "@/components/Brand";
import { Button, Container } from "@/components/ui";
import { DOWNLOAD_CTA_MODE } from "@/lib/download-cta";
import { cn } from "@/lib/utils";

const navClass =
  "text-sm text-secondary hover:text-primary focus-ring rounded-lg px-1 py-1";

function HeaderPrimaryCta({ className }: { className?: string }) {
  if (DOWNLOAD_CTA_MODE === "store") {
    return (
      <Button as="link" href="#download" className={cn("h-10 px-4 text-sm", className)} size="md">
        立即下載
      </Button>
    );
  }
  if (DOWNLOAD_CTA_MODE === "waitlist") {
    return (
      <Button as="link" href="#download" className={cn("h-10 px-4 text-sm", className)} size="md">
        加入等待名單
      </Button>
    );
  }
  return (
    <Button as="button" disabled className={cn("h-10 px-4 text-sm", className)} size="md">
      即將推出
    </Button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Brand showMark={false} />

          <nav className="hidden items-center gap-6 md:flex" aria-label="主要導覽">
            <Link className={navClass} href="#features">
              功能介紹
            </Link>
            <Link className={navClass} href="#audience">
              適合對象
            </Link>
            <Link className={navClass} href="/privacy">
              隱私權政策
            </Link>
            <Link className={navClass} href="/terms">
              服務條款
            </Link>
            <HeaderPrimaryCta />
          </nav>

          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-default bg-white text-primary md:hidden"
            aria-expanded={open}
            aria-controls="site-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "關閉選單" : "開啟選單"}</span>
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>

        {open ? (
          <div
            id="site-mobile-nav"
            className="border-t border-border-default pb-4 md:hidden"
          >
            <div className="flex flex-col gap-1 pt-3">
              <Link
                className="rounded-lg px-2 py-2.5 text-sm text-secondary hover:bg-surface hover:text-primary"
                href="#features"
                onClick={() => setOpen(false)}
              >
                功能介紹
              </Link>
              <Link
                className="rounded-lg px-2 py-2.5 text-sm text-secondary hover:bg-surface hover:text-primary"
                href="#audience"
                onClick={() => setOpen(false)}
              >
                適合對象
              </Link>
              <Link
                className="rounded-lg px-2 py-2.5 text-sm text-secondary hover:bg-surface hover:text-primary"
                href="/privacy"
                onClick={() => setOpen(false)}
              >
                隱私權政策
              </Link>
              <Link
                className="rounded-lg px-2 py-2.5 text-sm text-secondary hover:bg-surface hover:text-primary"
                href="/terms"
                onClick={() => setOpen(false)}
              >
                服務條款
              </Link>
              <div className="px-2 pt-2" onClick={() => setOpen(false)}>
                <HeaderPrimaryCta className="w-full justify-center" />
              </div>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
