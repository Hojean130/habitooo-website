import Link from "next/link";
import { LiveSpaceMock } from "@/components/sections/LiveSpaceMock";
import { Button, Container } from "@/components/ui";
import { DOWNLOAD_CTA_MODE } from "@/lib/download-cta";

export function HeroSection() {
  const isStore = DOWNLOAD_CTA_MODE === "store";
  const isWaitlist = DOWNLOAD_CTA_MODE === "waitlist";

  return (
    <section className="bg-background">
      <Container>
        <div className="grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-brand-green animate-live-pulse" />
              <span className="text-xs font-semibold tracking-wide text-secondary">LIVE 習慣空間</span>
            </div>

            <p className="mt-4 text-xs font-semibold tracking-[0.12em] text-secondary">
              Social habits, together.
            </p>

            <h1 className="mt-3 text-balance text-5xl font-semibold tracking-[-0.03em] text-primary md:text-6xl">
              有人陪你一起撐。
            </h1>

            <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary md:text-lg">
              Habitooo 是一個社交習慣空間。透過群組打卡、同步進度與即時動量，讓習慣不再只是孤單的自律。
            </p>

            <p className="mt-4 text-pretty text-sm leading-[1.65] text-secondary">
              打開 Habitooo，看見朋友正在讀書、健身、寫作或準備早睡。你不用重新找意志力，只要跟上大家。
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {isStore ? (
                <>
                  <Button as="link" href="#download">
                    立即下載
                  </Button>
                  <Button as="link" href="#features" variant="secondary">
                    了解更多
                  </Button>
                </>
              ) : isWaitlist ? (
                <>
                  <Button as="link" href="#download">
                    加入等待名單
                  </Button>
                  <Button as="link" href="#features" variant="secondary">
                    查看功能
                  </Button>
                </>
              ) : (
                <>
                  <Button as="button" disabled>
                    即將推出
                  </Button>
                  <Button as="link" href="#features" variant="secondary">
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

          <div className="md:justify-self-end">
            <LiveSpaceMock className="w-full max-w-[560px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
