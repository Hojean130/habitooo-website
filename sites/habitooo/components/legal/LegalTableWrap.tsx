import type { ReactNode } from "react";

export function LegalTableWrap({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-4 overflow-x-auto text-sm text-primary/90 [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border-default [&_th]:bg-surface [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_td]:border [&_td]:border-border-default [&_td]:px-3 [&_td]:py-2 [&_td]:align-top"
    >
      {children}
    </div>
  );
}
