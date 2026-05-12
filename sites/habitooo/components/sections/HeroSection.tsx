import Link from "next/link";
import { LiveSpaceMock } from "@/components/sections/LiveSpaceMock";
import { Button, Container, PlaceholderImage } from "@/components/ui";
import { DOWNLOAD_CTA_MODE } from "@/lib/download-cta";

export function HeroSection() {
  const isStore = DOWNLOAD_CTA_MODE === "store";
  const isWaitlist = DOWNLOAD_CTA_MODE === "waitlist";

  return (
    <section className="bg-background">
      <Container>
        <div className="grid gap-8 py-12 sm:gap-10 sm:py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-20 lg:gap-14 lg:py-24">
          <div className="min-w-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-brand-green animate-live-pulse" />
              <span className="text-xs font-semibold tracking-wide text-secondary">LIVE 習慣空間</span>
            </div>

            <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-secondary">
              Social habits, together.
            </p>

            <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-primary min-[400px]:text-4xl sm:text-5xl md:text-6xl md:leading-[1.1]">
              有人陪你一起撐。
            </h1>

            <p className="mt-5 text-pretty text-[0.9375rem] leading-[1.65] text-secondary sm:text-base md:text-lg">
              Habitooo 是一個社交習慣空間。透過群組打卡、同步進度與即時動量，讓習慣不再只是孤單的自律。
            </p>

            <p className="mt-4 text-pretty text-sm leading-[1.65] text-secondary">
              打開 Habitooo，看見朋友正在讀書、健身、寫作或準備早睡。你不用重新找意志力，只要跟上大家。
            </p>

            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-stretch sm:items-center">
              {isStore ? (
                <>
                  <Button as="link" href="#download" className="w-full min-[420px]:w-auto min-[420px]:min-w-[8.5rem]">
                    立即下載
                  </Button>
                  <Button as="link" href="#features" variant="secondary" className="w-full min-[420px]:w-auto min-[420px]:min-w-[8.5rem]">
                    了解更多
                  </Button>
                </>
              ) : isWaitlist ? (
                <>
                  <Button as="link" href="#download" className="w-full min-[420px]:w-auto min-[420px]:min-w-[8.5rem]">
                    加入等待名單
                  </Button>
                  <Button as="link" href="#features" variant="secondary" className="w-full min-[420px]:w-auto min-[420px]:min-w-[8.5rem]">
                    查看功能
                  </Button>
                </>
              ) : (
                <>
                  <Button as="button" disabled className="w-full min-[420px]:w-auto min-[420px]:min-w-[8.5rem]">
                    即將推出
                  </Button>
                  <Button as="link" href="#features" variant="secondary" className="w-full min-[420px]:w-auto min-[420px]:min-w-[8.5rem]">
                    查看功能
                  </Button>
                </>
              )}
            </div>

            <p className="mt-8 text-xs text-secondary">
              <Link
                href="/privacy"
                className="underline decoration-primary/20 underline-offset-4 hover:text-primary"
              >
                隱私權政策
              </Link>
              <span className="text-secondary/40"> · </span>
              <Link
                href="/terms"
                className="underline decoration-primary/20 underline-offset-4 hover:text-primary"
              >
                服務條款
              </Link>
              <span className="text-secondary/40"> · </span>
              <Link
                href="/support"
                className="underline decoration-primary/20 underline-offset-4 hover:text-primary"
              >
                支援
              </Link>
            </p>
          </div>

          <div className="mx-auto flex min-w-0 w-full max-w-[560px] flex-col gap-6 sm:gap-8 md:mx-0 md:max-w-none md:justify-self-end lg:max-w-[560px]">
            <div>
              <p className="mb-2 text-center text-xs text-secondary sm:text-left">App 介面（占位）</p>
              <PlaceholderImage
                variant="phone"
                className="mx-auto max-w-[min(100%,220px)] sm:max-w-[220px] md:mx-0"
              />
            </div>
            <LiveSpaceMock className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
