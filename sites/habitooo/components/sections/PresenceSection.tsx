import { Container, Section } from "@/components/ui";

const pressure = [
  "有人陪，不是有人審判。",
  "有人在看，但不是公開羞辱。",
  "不想掉隊，但可以重新跟上。",
  "一起完成，不是互相比較。"
] as const;

/** 舊版「陪伴感 + 輕壓力」兩段敘事合一，避免頁面碎成太多 section。 */
export function PresenceSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-12">
          <div className="max-w-xl md:col-span-1">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
              看到別人正在做，自己也比較容易開始。
            </h2>
            <p className="mt-6 text-pretty text-base leading-[1.65] text-secondary">
              有些時候，你需要的不是更強的提醒，而是一個正在努力的人。當你看見朋友已經開始讀書、運動或寫作，大腦會少一點抗拒，多一點「那我也來」。
            </p>
            <p className="mt-5 text-pretty text-sm leading-[1.65] text-secondary">
              不用聊天、不用互相監督到很累，只要知道有人也在場，今天就比較不容易掉下去。
            </p>
          </div>

          <div className="max-w-xl md:col-span-1">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
              有一點壓力，但不羞辱你。
            </h2>
            <p className="mt-6 text-pretty text-base leading-[1.65] text-secondary">
              Habitooo 的壓力很輕。有人在看，有人在等，有人正在往前，所以你比較不想掉隊。但沒有人會把你失敗公開處刑，也不會把習慣變成另一種焦慮。
            </p>
            <ul className="mt-8 grid gap-3">
              {pressure.map((t) => (
                <li key={t} className="card bg-white p-4">
                  <span className="text-sm font-semibold text-primary">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
