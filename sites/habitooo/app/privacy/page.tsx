import type { Metadata } from "next";
import { PrivacyPolicyBody } from "@/components/legal/PrivacyPolicyBody";
import { LegalLayout, type LegalTocItem } from "@/components/legal/LegalLayout";
import { LEGAL_DOC_DATE, LEGAL_DOC_VERSION } from "@/lib/legal-doc-meta";

export const metadata: Metadata = {
  title: "隱私權政策"
};

const toc: LegalTocItem[] = [
  { id: "identity", label: "0. 識別資訊" },
  { id: "scope", label: "1. 適用範圍" },
  { id: "data-collection", label: "2. 蒐集資料" },
  { id: "purposes", label: "3. 使用目的" },
  { id: "disclosure", label: "4. 分享與委外" },
  { id: "transfer", label: "5. 跨境傳輸" },
  { id: "retention", label: "6. 保存期間" },
  { id: "rights", label: "7. 您的權利" },
  { id: "security", label: "8. 資料安全" },
  { id: "notifications", label: "9. 推播通知" },
  { id: "automated-decisions", label: "10. 自動化決策" },
  { id: "cookies", label: "11. Cookie" },
  { id: "policy-updates", label: "12. 政策更新" },
  { id: "governing-law", label: "13. 準據法" },
  { id: "contact", label: "14. 聯絡我們" },
  { id: "appendix-apple", label: "附錄 A（App Store）" },
  { id: "appendix-google", label: "附錄 B（Play）" },
  { id: "version-history", label: "版本紀錄" }
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      badge="PRIVACY POLICY"
      title="Habitooo 隱私權政策"
      subtitle="我們重視你的資料透明度與控制權。"
      version={LEGAL_DOC_VERSION}
      effectiveAt={LEGAL_DOC_DATE}
      updatedAt={LEGAL_DOC_DATE}
      toc={toc}
    >
      <PrivacyPolicyBody />
    </LegalLayout>
  );
}
