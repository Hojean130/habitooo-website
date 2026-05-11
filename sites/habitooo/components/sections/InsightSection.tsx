import { Container, Section } from "@/components/ui";

const bullets = [
  "不是缺工具，是缺一起開始的人。",
  "不是缺提醒，是缺一點現場感。",
  "不是你不夠自律，是一個人太安靜了。"
] as const;

/** 舊版「共感」敘事濃縮：接在功能後，補情緒錨點。 */
export function InsightSection() {
  return (
    <Section>
      <Container size="text">
        <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
          大部分人不是不知道該做什麼。
        </h2>
        <p className="mt-3 text-balance text-xl font-semibold text-primary/85 md:text-2xl">
          是一個人很難撐下去。
        </p>
        <p className="mt-6 text-pretty text-base leading-[1.65] text-secondary">
          健身、讀書、早睡、冥想、寫作，你都知道有用。問題不是沒有清單，也不是沒有提醒。問題是，當只有你一個人面對今天，很容易就晚一點、明天再說、算了。
        </p>

        <ul className="mt-10 grid gap-3">
          {bullets.map((t) => (
            <li key={t} className="card-surface px-4 py-3">
              <span className="text-sm text-secondary">{t}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
