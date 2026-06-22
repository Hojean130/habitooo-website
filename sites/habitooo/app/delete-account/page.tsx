import type { Metadata } from "next";
import { DeleteAccountBody } from "@/components/legal/DeleteAccountBody";
import { LegalLayout, type LegalTocItem } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "刪除帳號",
  description:
    "在 Habitooo App 內永久刪除帳號：個人資料 → 帳號安全 → 刪除帳號。了解刪除步驟、資料範圍與處理時程。"
};

const toc: LegalTocItem[] = [
  { id: "overview", label: "說明" },
  { id: "steps", label: "1. App 內步驟" },
  { id: "deleted-data", label: "2. 會移除的資料" },
  { id: "retained-data", label: "3. 可能保留" },
  { id: "before-delete", label: "4. 刪除前注意" },
  { id: "contact", label: "5. 需要協助" }
];

export default function DeleteAccountPage() {
  return (
    <LegalLayout
      badge="ACCOUNT DELETION"
      title="刪除 Habitooo 帳號"
      subtitle="您可以直接在 App 內永久刪除帳號與相關個人資料。"
      version="—"
      effectiveAt="2026/05/12"
      updatedAt="2026/05/12"
      toc={toc}
      metaLine={<>最後更新 2026/05/12</>}
    >
      <DeleteAccountBody />
    </LegalLayout>
  );
}
