import { LiveSpaceMock } from "@/components/sections/LiveSpaceMock";
import { Container, Section } from "@/components/ui";

const liveSignals: [string, string][] = [
  ["3 人正在進行", "你不是對著空白清單。你是在一個有人的房間。"],
  ["下一段 25:00", "一起進入一段專注時間，不用先熱身很久。"],
  ["群組完成 72%", "像共同進度，不像 KPI。"],
  ["你要跟上嗎？", "輕輕拉你一把，不是逼你交代。"]
];

export function LiveSpaceSection() {
  return (
    <Section id="live-space" tone="surface">
      <Container>
        <p className="text-xs font-semibold tracking-wide text-secondary">Live Space</p>
        <div className="mt-2 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
              Live Space，不是 checklist。
            </h2>
            <p className="mt-3 text-lg font-semibold text-primary/90 md:text-xl">不是只有你一個人在撐。</p>
            <p className="mt-5 text-pretty text-base leading-[1.65] text-secondary">
              這是一個「大家正在一起推進」的空間。大部分人不是不知道該做什麼，而是一個人很難每天開始。Habitooo 讓你看見朋友的即時進度，透過同步感與陪伴感，把習慣變成一起前進的事情。
            </p>
            <p className="mt-4 text-xs text-secondary">
              即時在線列、進行中事件、進度條與計時狀態，讓「現在」變得具體可感。
            </p>
          </div>

          <div className="md:justify-self-end">
            <LiveSpaceMock title="專注小群 Live" className="w-full max-w-[560px]" />
          </div>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {liveSignals.map(([k, v]) => (
            <li key={k} className="card bg-white p-4">
              <div className="text-sm font-semibold text-primary">{k}</div>
              <div className="mt-1 text-sm text-secondary">{v}</div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
