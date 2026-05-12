import Link from "next/link";
import { Container } from "@/components/ui";
import { getSupportEmail } from "@/lib/support-email";
import { LegalToc, LegalTocMobile } from "@/components/legal/LegalToc";

export type LegalTocItem = {
  id: string;
  label: string;
};

export function LegalLayout({
  badge,
  title,
  subtitle,
  version,
  effectiveAt,
  updatedAt,
  toc,
  children,
  metaLine
}: {
  badge: string;
  title: string;
  subtitle: string;
  version: string;
  effectiveAt: string;
  updatedAt: string;
  toc: LegalTocItem[];
  children: React.ReactNode;
  /** 若提供，取代「最後更新：…」單行（例如隱私頁含版本／生效日） */
  metaLine?: React.ReactNode;
}) {
  const supportEmail = getSupportEmail();

  return (
    <main className="bg-background" id="top">
      <a
        href="#legal-content"
        className="focus-ring sr-only absolute left-4 top-4 z-[60] rounded-lg border border-border-default bg-white px-3 py-2 text-sm text-primary focus:not-sr-only"
      >
        跳到主要內容
      </a>
      <Container size="legal">
        <div className="grid gap-8 pb-14 pt-6 sm:gap-10 sm:pb-16 sm:pt-8 md:gap-12 md:pb-20 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:gap-12">
          {/* Desktop left TOC */}
          <aside className="hidden min-w-0 lg:block lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border-default bg-white px-3 py-4">
              <LegalToc items={toc} />
            </div>
          </aside>

          {/* Main content */}
          <article className="min-w-0" id="legal-content" aria-label={title}>
            <div className="mx-auto w-full max-w-[820px]">
              <header className="mb-8 sm:mb-10">
                <div className="inline-flex items-center rounded-full border border-border-default bg-surface px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-secondary">
                  {badge}
                </div>
                <h1 className="mt-3 text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.03em] text-primary sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-3 text-pretty text-sm leading-[1.7] text-secondary sm:text-base">
                  {subtitle}
                </p>

                <div className="mt-4 text-sm text-secondary">
                  {metaLine ?? (
                    <>
                      版本 {version} · 生效日 {effectiveAt} · 最後更新 {updatedAt}
                    </>
                  )}
                </div>

                {/* Tablet meta / actions (under title) */}
                <div className="mt-5 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 text-xs text-secondary lg:hidden">
                  <a
                    className="min-w-0 max-w-full break-all text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:decoration-brand-green/40 focus-ring"
                    href={`mailto:${supportEmail}`}
                  >
                    {supportEmail}
                  </a>
                  <span className="text-secondary/40">·</span>
                  <Link
                    className="underline decoration-primary/15 underline-offset-4 hover:text-primary focus-ring"
                    href="/support"
                  >
                    聯絡我們
                  </Link>
                  <span className="text-secondary/40">·</span>
                  <a
                    className="underline decoration-primary/15 underline-offset-4 hover:text-primary focus-ring"
                    href="#top"
                  >
                    回到頁首
                  </a>
                </div>
              </header>

              {/* Tablet TOC card (768–1023) */}
              <div className="hidden md:block lg:hidden">
                <div className="card-surface mb-8 p-4">
                  <div className="text-xs font-semibold tracking-[0.12em] text-secondary">本頁目錄</div>
                  <div className="mt-3">
                    <LegalToc items={toc} variant="card" />
                  </div>
                </div>
              </div>

              {/* Mobile TOC dropdown (<768) */}
              <div className="md:hidden">
                <LegalTocMobile items={toc} />
              </div>

              <div className="legal">{children}</div>
            </div>
          </article>

          {/* Desktop right meta */}
          <aside className="hidden min-w-0 lg:block lg:sticky lg:top-24 lg:self-start">
            <div className="min-w-0 max-w-full rounded-2xl border border-border-default bg-white px-4 py-4">
              <div className="text-[11px] font-semibold tracking-[0.14em] text-secondary">PAGE INFO</div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <dt className="shrink-0 text-secondary">Version</dt>
                  <dd className="min-w-0 flex-1 text-right font-medium text-primary">{version}</dd>
                </div>
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <dt className="shrink-0 text-secondary">Last updated</dt>
                  <dd className="min-w-0 flex-1 text-right font-medium text-primary">{updatedAt}</dd>
                </div>
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <dt className="shrink-0 text-secondary">Contact</dt>
                  <dd className="min-w-0 flex-1 text-right">
                    <a
                      className="block w-full max-w-full break-all text-brand-green underline decoration-brand-green/25 underline-offset-4 hover:decoration-brand-green/40 focus-ring"
                      href={`mailto:${supportEmail}`}
                    >
                      {supportEmail}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-6 space-y-2 text-sm">
                <a
                  className="focus-ring block rounded-xl border border-border-default bg-surface px-3 py-2 text-center text-primary hover:bg-surface/70"
                  href="#top"
                >
                  Back to top
                </a>
                <Link
                  className="focus-ring block rounded-xl border border-border-default bg-white px-3 py-2 text-center text-secondary hover:text-primary"
                  href="/support"
                >
                  Contact page
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}

