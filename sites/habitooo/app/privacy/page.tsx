import type { Metadata } from "next";
import { LegalLayout, type LegalTocItem } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "隱私權政策"
};

export default function PrivacyPage() {
  const toc: LegalTocItem[] = [
    { id: "scope", label: "適用範圍" },
    { id: "data", label: "我們蒐集的資料" },
    { id: "use", label: "資料如何被使用" },
    { id: "visibility", label: "群組可見性" },
    { id: "third-party", label: "第三方服務" },
    { id: "retention", label: "保留與刪除" },
    { id: "rights", label: "你的權利" },
    { id: "contact", label: "聯絡我們" }
  ];

  return (
    <LegalLayout title="Privacy Policy" updatedAt="2026-05-11" toc={toc}>
      <p id="scope">
        本隱私權政策說明 Habitooo（以下稱「本服務」）如何蒐集、使用與保存資料。使用本服務代表你同意本政策。
      </p>

      <h2 id="data">我們可能蒐集的資料</h2>
      <ul>
        <li>帳號登入資訊：例如以 Apple / Google 登入（若適用）的識別資訊。</li>
        <li>使用者個人檔案：暱稱、頭像、時區等你在服務內提供的資料。</li>
        <li>群組與成員資料：你加入/建立的群組、成員清單與基本互動資料。</li>
        <li>習慣與打卡紀錄：習慣設定、打卡時間、完成狀態。</li>
        <li>計時與完成狀態：Live Timer session、倒數、進行中/已完成等即時狀態。</li>
        <li>推播通知資料：推播 token、通知偏好（若你啟用推播）。</li>
        <li>裝置與分析資料：裝置型號、作業系統版本、App 版本、粗略使用事件（不包含敏感內容）。</li>
        <li>訂閱/付款狀態：若你購買訂閱，我們可能收到付款狀態與訂閱有效期等資料（不直接保存完整卡號）。</li>
      </ul>

      <h2 id="use">資料如何被使用</h2>
      <ul>
        <li>提供核心功能：群組打卡、同步進度、即時狀態、Live Timer。</li>
        <li>維護服務安全：防止濫用、垃圾邀請、騷擾行為。</li>
        <li>改善產品體驗：統計使用情況、除錯、效能優化。</li>
        <li>通知：包含你選擇接收的提醒與推播。</li>
      </ul>

      <h2 id="visibility">群組可見性</h2>
      <p>
        在群組中，其他成員可能看見你的暱稱/頭像、習慣進行狀態（例如進行中、倒數、已完成）與打卡動態。
        這些可見性是 Habitooo「有人在場」體驗的一部分。
      </p>

      <h2 id="third-party">第三方服務</h2>
      <p>本服務可能使用第三方供應商以提供功能與基礎設施，例如：</p>
      <ul>
        <li>登入：Apple、Google（若適用）</li>
        <li>分析：Analytics 服務（若適用）</li>
        <li>雲端與資料庫：Cloud hosting / storage（若適用）</li>
        <li>推播：Apple Push Notification / Firebase Cloud Messaging（若適用）</li>
        <li>付款：App Store / Google Play 訂閱系統（若適用）</li>
      </ul>

      <h2 id="retention">資料保留與刪除</h2>
      <p>
        我們會在提供服務所需期間保留資料，或依法律要求保留。你可以要求刪除帳號或資料請求；完成後，
        資料會在合理期間內被刪除或匿名化（如適用）。
      </p>

      <h2 id="rights">你的權利</h2>
      <ul>
        <li>請求存取、更正或刪除你的個人資料。</li>
        <li>撤回部分權限（例如推播）或停止使用本服務。</li>
      </ul>

      <h2 id="contact">聯絡我們</h2>
      <p>
        若你對隱私權政策有疑問，請來信 <a href="mailto:support@habitooo.app">support@habitooo.app</a>。
      </p>
    </LegalLayout>
  );
}

