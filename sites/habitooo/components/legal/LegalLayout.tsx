import Link from "next/link";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export type LegalTocItem = {
  id: string;
  label: string;
};

function Toc({ items, className }: { items: LegalTocItem[]; className?: string }) {
  return (
    <nav className={cn("text-sm", className)} aria-label="Table of contents">
      <div className="text-xs font-semibold tracking-[0.12em] text-secondary">ON THIS PAGE</div>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it.id}>
            <a
              className="text-secondary underline decoration-primary/15 underline-offset-4 hover:text-primary hover:decoration-primary/25 focus-ring"
              href={`#${it.id}`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function LegalLayout({
  title,
  updatedAt,
  toc,
  children
}: {
  title: string;
  updatedAt: string;
  toc: LegalTocItem[];
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background">
      <Container size="legal">
        <div className="grid gap-10 py-12 md:grid-cols-[240px_1fr] md:py-16">
          <aside className="md:sticky md:top-28 md:self-start">
            <div className="md:hidden">
              <details className="card-surface p-4">
                <summary className="cursor-pointer select-none text-sm font-semibold text-primary">
                  目錄
                </summary>
                <Toc items={toc} className="mt-4" />
              </details>
            </div>
            <div className="hidden md:block">
              <Toc items={toc} />
            </div>
          </aside>

          <article className="min-w-0">
            <div className="mb-10">
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.03em] text-primary">
                {title}
              </h1>
              <div className="mt-3 text-sm text-secondary">最後更新：{updatedAt}</div>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-secondary">
                <Link
                  className="underline decoration-primary/20 underline-offset-4 hover:text-primary"
                  href="/"
                >
                  回首頁
                </Link>
                <span className="text-secondary/40">·</span>
                <a
                  className="underline decoration-primary/20 underline-offset-4 hover:text-primary"
                  href="mailto:support@habitooo.app"
                >
                  support@habitooo.app
                </a>
              </div>
            </div>

            <div className="legal">{children}</div>
          </article>
        </div>
      </Container>
    </main>
  );
}

