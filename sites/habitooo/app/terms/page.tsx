import type { Metadata } from "next";
import { TermsOfServiceBody } from "@/components/legal/TermsOfServiceBody";
import { LegalLayout, type LegalTocItem } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "服務條款"
};

const toc: LegalTocItem[] = [
  { id: "vendor", label: "0. 業者識別" },
  { id: "scope", label: "1. 條款效力" },
  { id: "account", label: "2. 年齡與帳號" },
  { id: "conduct", label: "3. 禁止行為" },
  { id: "groups", label: "4. 群組與內容" },
  { id: "ip", label: "5. 智慧財產權" },
  { id: "subscription", label: "6. Habitooo Pro" },
  { id: "service-changes", label: "7. 服務變更" },
  { id: "disclaimer", label: "8. 免責與責限" },
  { id: "privacy-ref", label: "9. 隱私權" },
  { id: "apple-google", label: "10. App Store / Play" },
  { id: "governing", label: "11. 準據法" },
  { id: "general", label: "12. 一般約定" },
  { id: "terms-updates", label: "13. 條款更新" },
  { id: "contact", label: "14. 聯絡我們" },
  { id: "version-history", label: "版本紀錄" }
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Habitooo 服務條款"
      updatedAt="2026/05/12"
      metaLine={<>版本：v1.1 ｜ 生效日：2026/05/12 ｜ 最後更新：2026/05/12</>}
      toc={toc}
    >
      <TermsOfServiceBody />
    </LegalLayout>
  );
}
