import Link from "next/link";
import { Button, Container, Section } from "@/components/ui";
import { LiveSpaceMock } from "@/components/sections/LiveSpaceMock";

const CTA_STATE: "coming_soon" | "waitlist" | "store" = "coming_soon";

function HeroCTA() {
  if (CTA_STATE === "store") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Button as="link" href="#" disabled>
          下載 App
        </Button>
        <div className="text-xs text-secondary">App Store / Google Play 連結準備中</div>
      </div>
    );
  }
  if (CTA_STATE === "waitlist") {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Button as="link" href="#download">
          加入等待名單
        </Button>
        <Link
          href="/support"
          className="text-sm font-semibold text-secondary underline decoration-primary/20 underline-offset-4 hover:text-primary"
        >
          查看支援
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button as="button" disabled>
        即將推出
      </Button>
      <div className="text-xs text-secondary">App Store / Google Play 連結準備中</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-background">
        <Container>
          <div className="grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-surface px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-brand-green animate-live-pulse" />
                <span className="text-xs font-semibold tracking-wide text-secondary">
                  LIVE 習慣空間
                </span>
              </div>

              <h1 className="mt-5 text-balance text-5xl font-semibold tracking-[-0.03em] text-primary md:text-6xl">
                有人陪你一起撐。
              </h1>

              <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary md:text-lg">
                Habitooo 透過群組打卡、同步進度與即時動量，
                讓習慣不再只是孤單的自律。
              </p>

              <p className="mt-4 text-pretty text-sm leading-[1.65] text-secondary">
                打開 Habitooo，看見朋友正在讀書、健身、寫作或準備早睡。你不用重新找意志力，
                只要跟上大家。
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <HeroCTA />
                <Button as="link" href="#live-space" variant="secondary">
                  了解 Live Space
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-secondary">
                <Link
                  href="/privacy"
                  className="underline decoration-primary/20 underline-offset-4 hover:decoration-primary/35 hover:text-primary"
                >
                  Privacy
                </Link>
                <span className="text-secondary/40">·</span>
                <Link
                  href="/terms"
                  className="underline decoration-primary/20 underline-offset-4 hover:decoration-primary/35 hover:text-primary"
                >
                  Terms
                </Link>
                <span className="text-secondary/40">·</span>
                <Link
                  href="/support"
                  className="underline decoration-primary/20 underline-offset-4 hover:decoration-primary/35 hover:text-primary"
                >
                  Support
                </Link>
              </div>
            </div>

            <div className="md:justify-self-end">
              <LiveSpaceMock className="w-full max-w-[560px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* LIVE SPACE */}
      <Section id="live-space" tone="surface">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                Live Space，不是 checklist。
              </h2>
              <p className="mt-4 text-pretty text-base leading-[1.65] text-secondary">
                這是一個「大家正在一起推進」的空間。
              </p>
              <p className="mt-5 text-pretty text-sm leading-[1.65] text-secondary">
                你看到的不只是今天有沒有完成，而是誰正在開始、誰還在倒數、誰剛剛打卡、群組今天一起走到哪裡。
                那種「裡面有人」的感覺，會把你拉回今天。
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  ["3 人正在進行", "你不是對著空白清單。你是在一個有人的房間。"],
                  ["下一段 25:00", "一起進入一段專注時間，不用先熱身很久。"],
                  ["群組完成 72%", "像共同進度，不像 KPI。"],
                  ["你要跟上嗎？", "輕輕拉你一把，不是逼你交代。"]
                ].map(([k, v]) => (
                  <div key={k} className="card bg-white p-4">
                    <div className="text-sm font-semibold text-primary">{k}</div>
                    <div className="mt-1 text-sm text-secondary">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:justify-self-end">
              <LiveSpaceMock title="Reading Room Live" className="w-full max-w-[560px]" />
            </div>
          </div>
        </Container>
      </Section>

      {/* PROBLEM */}
      <Section>
        <Container size="text">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            大部分人不是不知道該做什麼。
          </h2>
          <p className="mt-3 text-balance text-xl font-semibold text-primary/85 md:text-2xl">
            是一個人很難撐下去。
          </p>
          <p className="mt-6 text-pretty text-base leading-[1.65] text-secondary">
            健身、讀書、早睡、冥想、寫作，你都知道有用。問題不是沒有清單，也不是沒有提醒。
            問題是，當只有你一個人面對今天，很容易就晚一點、明天再說、算了。
          </p>

          <ul className="mt-10 grid gap-3">
            {[
              "不是缺工具，是缺一起開始的人。",
              "不是缺提醒，是缺一點現場感。",
              "不是你不夠自律，是一個人太安靜了。"
            ].map((t) => (
              <li key={t} className="card-surface px-4 py-3">
                <span className="text-sm text-secondary">{t}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* SOLUTION */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                Habitooo 把習慣變成同步空間。
              </h2>
              <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary">
                你加入一個習慣群組，看到誰正在進行、誰剛剛完成、今天還剩多少進度。當大家都在往前，
                你比較容易跟上，而不是一個人重新啟動。
              </p>
            </div>

            <div className="grid gap-3">
              {[
                ["live accountability", "你知道有人也在做。"],
                ["body doubling", "看見別人在場，你比較容易開始。"],
                ["synchronized progress", "進度是共同節奏，不是 KPI。"],
                ["social momentum", "完成動態會帶動你跟上。"]
              ].map(([k, v]) => (
                <div key={k} className="card bg-white p-4">
                  <div className="text-sm font-semibold text-primary">{k}</div>
                  <div className="mt-1 text-sm text-secondary">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* BODY DOUBLING */}
      <Section id="body-doubling">
        <Container size="text">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            看到別人正在做，自己也比較容易開始。
          </h2>
          <p className="mt-6 text-pretty text-base leading-[1.65] text-secondary">
            有些時候，你需要的不是更強的提醒，而是一個正在努力的人。當你看見朋友已經開始讀書、運動或寫作，
            大腦會少一點抗拒，多一點「那我也來」。
          </p>
          <p className="mt-5 text-pretty text-sm leading-[1.65] text-secondary">
            這就是 Habitooo 的 body doubling：不用聊天、不用互相監督到很累，只是知道有人也在場，
            今天就比較不容易掉下去。
          </p>
        </Container>
      </Section>

      {/* SOCIAL PRESSURE */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="max-w-xl">
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
                有一點壓力，但不羞辱你。
              </h2>
              <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary">
                Habitooo 的壓力很輕。有人在看，有人在等，有人正在往前，所以你比較不想掉隊。
                但沒有人會把你失敗公開處刑，也不會把習慣變成另一種焦慮。
              </p>
            </div>
            <div className="grid gap-3">
              {[
                "有人陪，不是有人審判。",
                "有人在看，但不是公開羞辱。",
                "不想掉隊，但可以重新跟上。",
                "一起完成，不是互相比較。"
              ].map((t) => (
                <div key={t} className="card bg-white p-4">
                  <div className="text-sm font-semibold text-primary">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* DOWNLOAD / WAITLIST placeholder */}
      <Section id="download">
        <Container size="text">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
              下載 / 等待名單
            </h2>
            <p className="mt-4 text-pretty text-base leading-[1.65] text-secondary">
              目前先暫用「即將推出」。App Store / Google Play 連結準備中。
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as="button" disabled>
                即將推出
              </Button>
              <Button as="link" href="/support" variant="secondary">
                查看支援
              </Button>
            </div>

            <div className="mt-10 card-surface p-5 text-left">
              <div className="text-sm font-semibold text-primary">預留：Waitlist form</div>
              <ul className="mt-3 space-y-2 text-sm text-secondary">
                <li>email / iOS|Android|both</li>
                <li>習慣意圖（例如：早睡 / 讀書 / 健身）</li>
                <li>送出代表同意依隱私權政策處理 email</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section tone="surface">
        <Container>
          <div className="card-surface mx-auto max-w-[980px] p-8 md:p-12">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
              今天不用再一個人撐。
            </h2>
            <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary">
              找一個你想開始的習慣，進入一個有人正在努力的空間。你不用很有意志力，只要先跟上這一段。
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button as="button" disabled>
                即將推出
              </Button>
              <Button as="link" href="#live-space" variant="secondary">
                看核心概念
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

