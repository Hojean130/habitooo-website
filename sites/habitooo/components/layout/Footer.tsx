import Link from "next/link";
import { Container, PlaceholderImage } from "@/components/ui";
import { site } from "@/lib/site";
import { getSupportEmail } from "@/lib/support-email";

const link = "text-sm text-secondary transition-colors hover:text-primary focus-ring rounded-md";

export function Footer() {
  const email = getSupportEmail();
  const mailto =
    email !== "TODO_SUPPORT_EMAIL" ? `mailto:${email}` : undefined;

  return (
    <footer className="border-t border-border-default bg-background">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 py-12 sm:grid-cols-2 sm:gap-x-8 sm:py-14 md:py-16 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-12 lg:py-16">
          {/* 品牌區（對應 Foodooo 首欄 Logo + 標語） */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <PlaceholderImage
                variant="logo"
                className="w-10 shrink-0"
                imgClassName="h-10 w-10 rounded-xl border border-border-default bg-white object-contain p-1.5 shadow-card"
              />
              <p className="max-w-sm text-sm leading-relaxed text-secondary">
                有人陪你一起撐的社交習慣空間。
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-primary">App</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm leading-relaxed text-secondary">
                Habitooo（社交習慣／群組打卡）
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-primary">快速連結</h3>
            <ul className="mt-4 space-y-2.5">
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

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-primary">法律資訊</h3>
            <ul className="mt-4 space-y-2.5">
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

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-primary">聯絡我們</h3>
            <div className="mt-4">
              {mailto ? (
                <a
                  className="break-all text-sm font-medium text-primary transition-colors hover:text-brand-green focus-ring rounded-md"
                  href={mailto}
                >
                  {email}
                </a>
              ) : (
                <p className="text-sm font-medium text-primary">{email}</p>
              )}
              <p className="mt-2 text-xs leading-relaxed text-secondary">
                48 小時內回應
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border-default py-6">
          <p className="text-center text-xs text-secondary sm:text-left">
            © 2026 {site.copyrightHolder}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
