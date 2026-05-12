import { Bell, Heart, Radio, Users, Zap } from "lucide-react";
import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "群組打卡",
    body: "和朋友一起建立習慣，不再自己默默記錄。",
    Icon: Users
  },
  {
    title: "Live Space",
    body: "看見誰正在進行，直接跟上大家。",
    Icon: Radio
  },
  {
    title: "同步動量",
    body: "用群組進度、倒數與完成狀態，把今天推進下去。",
    Icon: Zap
  },
  {
    title: "一鍵提醒",
    body: "輕量提醒還沒完成的人，不用尷尬開口。",
    Icon: Bell
  },
  {
    title: "輕壓力，不羞辱",
    body: "有人在看、有一點壓力，但不讓人覺得失敗。",
    Icon: Heart
  }
] as const;

export function FeatureSection() {
  return (
    <Section id="features" tone="surface">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl md:text-4xl">
            核心功能
          </h2>
          <p className="mt-3 text-pretty text-sm leading-[1.65] text-secondary sm:mt-4 sm:text-base">
            把習慣變成有人陪你一起完成的節奏。
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-14 lg:grid-cols-3">
          {items.map(({ title, body, Icon }) => (
            <li key={title} className="card bg-white p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border-default bg-surface"
                  )}
                  aria-hidden
                >
                  <Icon className="h-4 w-4 text-secondary" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">{body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
