import {
  APP_STORE_URL,
  DOWNLOAD_CTA_MODE,
  GOOGLE_PLAY_URL,
  storeLinksReady
} from "@/lib/download-cta";
import { Button, Container, Section } from "@/components/ui";

export function DownloadSection() {
  const store = DOWNLOAD_CTA_MODE === "store" && storeLinksReady();
  const waitlist = DOWNLOAD_CTA_MODE === "waitlist";

  return (
    <Section id="download">
      <Container size="text">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            今天不用再一個人撐。
          </h2>
          <p className="mt-4 text-pretty text-base leading-[1.65] text-secondary">
            加入 Habitooo，和朋友一起把今天完成。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {store ? (
              <>
                <Button as="link" href={APP_STORE_URL}>
                  App Store
                </Button>
                <Button as="link" href={GOOGLE_PLAY_URL} variant="secondary">
                  Google Play
                </Button>
              </>
            ) : waitlist ? (
              <>
                <Button as="link" href="/support">
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
                <Button as="link" href="/support" variant="secondary">
                  加入等待名單
                </Button>
              </>
            )}
          </div>

          {DOWNLOAD_CTA_MODE === "store" && !storeLinksReady() ? (
            <p className="mt-6 text-pretty text-center text-xs text-secondary">
              已選商店模式：請設定{" "}
              <code className="rounded border border-border-default bg-surface px-1 py-0.5 font-mono text-[11px]">
                NEXT_PUBLIC_APP_STORE_URL
              </code>{" "}
              與{" "}
              <code className="rounded border border-border-default bg-surface px-1 py-0.5 font-mono text-[11px]">
                NEXT_PUBLIC_GOOGLE_PLAY_URL
              </code>
              。
            </p>
          ) : null}

          <div className="card-surface mx-auto mt-14 max-w-[980px] p-8 text-left md:p-12">
            <h3 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-primary md:text-3xl">
              不用很有意志力，只要先跟上。
            </h3>
            <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary">
              找一個你想開始的習慣，進入一個有人正在努力的空間。你不用很有意志力，只要先跟上這一段。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {store ? (
                <>
                  <Button as="link" href={APP_STORE_URL}>
                    立即下載
                  </Button>
                  <Button as="link" href="#live-space" variant="secondary">
                    看 Live Space
                  </Button>
                </>
              ) : waitlist ? (
                <>
                  <Button as="link" href="/support">
                    加入等待名單
                  </Button>
                  <Button as="link" href="#live-space" variant="secondary">
                    看 Live Space
                  </Button>
                </>
              ) : (
                <>
                  <Button as="button" disabled>
                    即將推出
                  </Button>
                  <Button as="link" href="#live-space" variant="secondary">
                    看 Live Space
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
