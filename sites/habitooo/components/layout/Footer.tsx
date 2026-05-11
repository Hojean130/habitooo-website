import Link from "next/link";
import { Container } from "@/components/ui";
import { site } from "@/lib/site";
import { getSupportEmail } from "@/lib/support-email";

const link = "text-sm text-secondary hover:text-primary focus-ring rounded-lg";

export function Footer() {
  const email = getSupportEmail();
  const mailto =
    email !== "TODO_SUPPORT_EMAIL" ? `mailto:${email}` : undefined;

  return (
    <footer className="border-t border-border-default bg-background">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="text-sm font-semibold text-primary">{site.name}</div>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-secondary">
              有人陪你一起撐的社交習慣空間。
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-secondary">
              快速連結
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className={link} href="#features">
                  功能介紹
                </Link>
              </li>
              <li>
                <Link className={link} href="#audience">
                  適合對象
                </Link>
              </li>
              <li>
                <Link className={link} href="/support">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-secondary">
              法律資訊
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className={link} href="/privacy">
                  隱私權政策
                </Link>
              </li>
              <li>
                <Link className={link} href="/terms">
                  服務條款
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-secondary">
              聯絡我們
            </div>
            {mailto ? (
              <a className={`${link} mt-3 inline-block`} href={mailto}>
                {email}
              </a>
            ) : (
              <p className="mt-3 text-sm text-secondary">{email}</p>
            )}
          </div>
        </div>

        <div className="border-t border-border-default py-6">
          <p className="text-xs text-secondary">
            © 2026 {site.copyrightHolder}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
