import { Container, Section } from "@/components/ui";

const items: [string, string][] = [
  ["有人在場", "你知道有人也在做。"],
  ["陪伴開始", "看見別人在場，比較容易動起來。"],
  ["同步節奏", "進度是共同的節奏，不是 KPI。"],
  ["連鎖動能", "完成動態會帶著你跟上。"]
];

/** 舊版「解法」敘事：把抽象產品承諾說清楚，全中文。 */
export function RhythmSection() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
          <div className="max-w-xl min-w-0">
            <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl md:text-4xl">
              Habitooo 把習慣變成同步空間。
            </h2>
            <p className="mt-4 text-pretty text-sm leading-[1.65] text-secondary sm:mt-5 sm:text-base">
              你加入一個習慣群組，看到誰正在進行、誰剛剛完成、今天還剩多少進度。當大家都在往前，你比較容易跟上，而不是一個人重新啟動。
            </p>
          </div>

          <div className="grid min-w-0 gap-3 md:max-w-none">
            {items.map(([k, v]) => (
              <div key={k} className="card bg-white p-4">
                <div className="text-sm font-semibold text-primary">{k}</div>
                <div className="mt-1 text-sm text-secondary">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
