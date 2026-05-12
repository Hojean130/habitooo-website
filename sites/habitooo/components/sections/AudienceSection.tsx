import { Container, Section } from "@/components/ui";

const bullets = [
  "想養成習慣，但一個人很容易中斷",
  "需要朋友一起督促讀書、健身、早睡或冥想",
  "喜歡小群組一起完成每日任務",
  "想用輕壓力讓自己更容易開始",
  "不想再用冷冰冰的待辦清單管理生活",
  "想建立一個互相陪伴的自律小圈圈"
] as const;

export function AudienceSection() {
  return (
    <Section id="audience">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-[-0.03em] text-primary sm:text-3xl md:text-4xl">
            適合這樣的你
          </h2>
        </div>

        <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:mt-10 md:mt-12">
          {bullets.map((t) => (
            <li key={t} className="card-surface px-3 py-3 sm:px-4 sm:py-3.5">
              <span className="text-sm leading-relaxed text-secondary">{t}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
