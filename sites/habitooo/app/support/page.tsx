import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, type LegalTocItem } from "@/components/legal/LegalLayout";
import { getSupportEmail } from "@/lib/support-email";

export const metadata: Metadata = {
  title: "支援與聯絡"
};

export default function SupportPage() {
  const supportEmail = getSupportEmail();
  const mailto =
    supportEmail !== "TODO_SUPPORT_EMAIL" ? `mailto:${supportEmail}` : undefined;
  const toc: LegalTocItem[] = [
    { id: "contact", label: "聯絡方式" },
    { id: "faq", label: "FAQ" },
    { id: "delete", label: "刪除帳號 / 資料請求" }
  ];

  return (
    <LegalLayout
      badge="SUPPORT"
      title="支援與聯絡"
      subtitle="需要協助或回報問題？我們會盡快回覆你。"
      version="—"
      effectiveAt="2026/05/11"
      updatedAt="2026/05/11"
      toc={toc}
      metaLine={<>最後更新 2026/05/11</>}
    >
      <p id="contact">
        需要協助或回報問題，請寄信到{" "}
        {mailto ? (
          <a href={mailto}>{supportEmail}</a>
        ) : (
          <span>{supportEmail}</span>
        )}
        。
      </p>

      <h2 id="faq">常見問題（FAQ）</h2>

      <h3>如何建立群組？</h3>
      <p>
        在 App 內建立群組後，你可以邀請朋友加入同一個習慣空間。若你找不到入口，請把你的平台（iOS/Android）與截圖寄到
        support 信箱，我們會協助。
      </p>

      <h3>如何加入群組？</h3>
      <p>通常透過邀請連結或群組代碼加入。若加入失敗，請附上錯誤畫面與你的 App 版本。</p>

      <h3>如何打卡？</h3>
      <p>進入群組後，在你的習慣卡片上完成今天的打卡。打卡會以動態形式出現在 Live Space，讓大家知道你跟上了。</p>

      <h3>如何使用計時習慣（Live Timer）？</h3>
      <p>
        你可以開始一段 10、25 或 50 分鐘的 session。看到朋友也在倒數時，你更容易直接開始，不用先「等準備好」。
      </p>

      <h3>如何管理訂閱？</h3>
      <p>
        若你有訂閱方案，請到 App Store / Google Play 的訂閱管理頁面查看、變更或取消。若你需要協助確認訂閱狀態，
        請來信並附上購買收據或訂閱頁截圖（請自行遮蔽敏感資訊）。
      </p>

      <h2 id="delete">刪除帳號 / 資料請求</h2>
      <p>
        請於 App 內「個人資料」→「帳號安全」→「刪除帳號」完成刪除。步驟與資料範圍請見{" "}
        <Link href="/delete-account">刪除帳號說明頁</Link>。若無法於 App 內操作，請來信{" "}
        {mailto ? (
          <a href={mailto}>{supportEmail}</a>
        ) : (
          <span>{supportEmail}</span>
        )}
        （主旨請註明「Habitooo 隱私請求」）。
      </p>
    </LegalLayout>
  );
}

