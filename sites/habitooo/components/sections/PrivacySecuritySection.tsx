import Link from "next/link";
import { Container, Section } from "@/components/ui";

const points = [
  "你的習慣與群組資料只用於提供 Habitooo 服務",
  "不出售個人資料給第三方",
  "可管理通知與帳號資料",
  "可依政策申請刪除帳號與資料",
  "詳細資訊請參閱隱私權政策"
] as const;

export function PrivacySecuritySection() {
  return (
    <Section id="privacy-security" tone="surface">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-balance text-center text-3xl font-semibold tracking-[-0.03em] text-primary md:text-4xl">
            隱私與資料安全
          </h2>

          <ul className="mt-10 space-y-3">
            {points.map((t) => (
              <li key={t} className="card bg-white px-4 py-3.5">
                <span className="text-sm leading-relaxed text-secondary">{t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm text-secondary">
            <Link
              href="/privacy"
              className="font-semibold text-primary underline decoration-primary/20 underline-offset-4 hover:decoration-primary/35"
            >
              閱讀完整隱私權政策
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
