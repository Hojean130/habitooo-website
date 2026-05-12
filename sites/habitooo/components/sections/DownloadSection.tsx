import {
  APP_STORE_URL,
  DOWNLOAD_CTA_MODE,
  GOOGLE_PLAY_URL,
  storeLinksReady
} from "@/lib/download-cta";
import { Button, Container, PlaceholderImage, Section } from "@/components/ui";

export function DownloadSection() {
  const store = DOWNLOAD_CTA_MODE === "store" && storeLinksReady();
  const waitlist = DOWNLOAD_CTA_MODE === "waitlist";

  return (
    <Section id="download">
      <Container size="text">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl md:text-4xl">
            今天不用再一個人撐。
          </h2>
          <p className="mt-3 text-pretty text-sm leading-[1.65] text-secondary sm:mt-4 sm:text-base">
            加入 Habitooo，和朋友一起把今天完成。
          </p>

          <div className="mt-6 flex flex-col items-center gap-2 sm:mt-8">
            <p className="text-center text-xs text-secondary">商店 Badge（占位，上架後替換）</p>
            <div className="flex w-full max-w-md flex-col items-stretch gap-3 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:justify-center sm:max-w-none">
              <PlaceholderImage variant="badge-app" className="mx-auto w-full max-w-[160px] sm:mx-0" />
              <PlaceholderImage variant="badge-google" className="mx-auto w-full max-w-[180px] sm:mx-0" />
            </div>
          </div>

          <div className="mt-6 flex w-full min-w-0 flex-col items-stretch justify-center gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
            {store ? (
              <>
                <Button as="link" href={APP_STORE_URL} className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                  App Store
                </Button>
                <Button as="link" href={GOOGLE_PLAY_URL} variant="secondary" className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                  Google Play
                </Button>
              </>
            ) : waitlist ? (
              <>
                <Button as="link" href="/support" className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                  加入等待名單
                </Button>
                <Button as="link" href="#features" variant="secondary" className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                  查看功能
                </Button>
              </>
            ) : (
              <>
                <Button as="button" disabled className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                  即將推出
                </Button>
                <Button as="link" href="/support" variant="secondary" className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                  加入等待名單
                </Button>
              </>
            )}
          </div>

          {DOWNLOAD_CTA_MODE === "store" && !storeLinksReady() ? (
            <p className="mt-6 text-pretty text-center text-xs leading-relaxed text-secondary sm:text-left">
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

          <div className="card-surface mx-auto mt-10 max-w-[980px] p-5 text-left sm:mt-12 sm:p-8 md:mt-14 md:p-12">
            <h3 className="text-balance text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl md:text-3xl">
              不用很有意志力，只要先跟上。
            </h3>
            <p className="mt-4 text-pretty text-sm leading-[1.65] text-secondary sm:mt-5 sm:text-base">
              找一個你想開始的習慣，進入一個有人正在努力的空間。你不用很有意志力，只要先跟上這一段。
            </p>
            <div className="mt-6 flex w-full min-w-0 flex-col gap-3 min-[400px]:flex-row min-[400px]:flex-wrap sm:mt-8">
              {store ? (
                <>
                  <Button as="link" href={APP_STORE_URL} className="w-full min-[400px]:w-auto min-[400px]:flex-1 min-[400px]:min-w-[9rem] sm:flex-initial">
                    立即下載
                  </Button>
                  <Button as="link" href="#live-space" variant="secondary" className="w-full min-[400px]:w-auto min-[400px]:flex-1 min-[400px]:min-w-[9rem] sm:flex-initial">
                    看 Live Space
                  </Button>
                </>
              ) : waitlist ? (
                <>
                  <Button as="link" href="/support" className="w-full min-[400px]:w-auto min-[400px]:flex-1 min-[400px]:min-w-[9rem] sm:flex-initial">
                    加入等待名單
                  </Button>
                  <Button as="link" href="#live-space" variant="secondary" className="w-full min-[400px]:w-auto min-[400px]:flex-1 min-[400px]:min-w-[9rem] sm:flex-initial">
                    看 Live Space
                  </Button>
                </>
              ) : (
                <>
                  <Button as="button" disabled className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
                    即將推出
                  </Button>
                  <Button as="link" href="#live-space" variant="secondary" className="w-full min-[400px]:w-auto min-[400px]:min-w-[9rem]">
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
