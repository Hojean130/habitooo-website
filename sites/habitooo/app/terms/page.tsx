import { LegalLayout, type LegalTocItem } from "@/components/legal/LegalLayout";

export default function TermsPage() {
  const toc: LegalTocItem[] = [
    { id: "scope", label: "適用範圍" },
    { id: "responsibility", label: "使用者責任" },
    { id: "group", label: "群組互動規範" },
    { id: "disclaimer", label: "非專業建議" },
    { id: "subscription", label: "訂閱與取消（若適用）" },
    { id: "changes", label: "服務調整與終止" },
    { id: "termination", label: "帳號終止" },
    { id: "ip", label: "智慧財產權" },
    { id: "liability", label: "責任限制" },
    { id: "contact", label: "聯絡方式" }
  ];

  return (
    <LegalLayout title="Terms of Service" updatedAt="2026-05-11" toc={toc}>
      <p id="scope">
        這些條款規範你使用 Habitooo 服務（以下稱「本服務」）的方式。使用本服務代表你同意遵守本條款。
      </p>

      <h2 id="responsibility">使用者責任</h2>
      <ul>
        <li>你需對你建立的習慣、打卡與任何內容負責。</li>
        <li>請確保你提供的資料真實且不侵害他人權利。</li>
      </ul>

      <h2 id="group">群組互動規範</h2>
      <ul>
        <li>尊重他人，不得騷擾、羞辱、威脅或歧視。</li>
        <li>不得濫用提醒、通知、邀請或群組功能。</li>
        <li>不得嘗試干擾服務運作、爬取資料或進行未授權存取。</li>
      </ul>

      <h2 id="disclaimer">非醫療/心理/法律/財務建議</h2>
      <p>
        本服務提供的是習慣與群組陪伴的工具，不構成任何醫療、心理、法律或財務建議。若你需要專業協助，
        請諮詢合格專業人士。
      </p>

      <h2 id="subscription">訂閱與取消（若適用）</h2>
      <p>
        若本服務提供訂閱方案，付款與續訂通常由 App Store / Google Play 管理。你可以在各平台的訂閱管理頁面取消續訂。
        已付款期間通常不提供按比例退款，除非法律另有規定或平台政策允許。
      </p>

      <h2 id="changes">服務調整、暫停或終止</h2>
      <p>
        我們可能因維護、升級或其他原因調整、暫停或終止全部或部分服務。對於合理的維護中斷，我們會盡量提前告知（如可行）。
      </p>

      <h2 id="termination">帳號終止</h2>
      <p>若你嚴重違反本條款或從事濫用行為，我們可能暫停或終止你的帳號與存取權限。</p>

      <h2 id="ip">智慧財產權</h2>
      <p>
        本服務的軟體、介面與品牌識別等內容屬 Habitooo 或其授權方所有。未經允許不得複製、修改、散布或反向工程。
      </p>

      <h2 id="liability">責任限制</h2>
      <p>
        在法律允許的最大範圍內，我們不對任何間接、附帶或衍生損害負責。你理解並同意使用本服務的風險由你自行承擔。
      </p>

      <h2 id="contact">聯絡方式</h2>
      <p>
        若你對本條款有疑問，請來信 <a href="mailto:support@habitooo.app">support@habitooo.app</a>。
      </p>
    </LegalLayout>
  );
}

