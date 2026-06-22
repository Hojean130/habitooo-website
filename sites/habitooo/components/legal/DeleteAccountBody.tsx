import Link from "next/link";
import { getSupportEmail } from "@/lib/support-email";

const mail = getSupportEmail();

export function DeleteAccountBody() {
  return (
    <>
      <p id="overview">
        <em>Delete Your Habitooo Account</em>
      </p>
      <p>
        您可以直接在 Habitooo App 內<strong>永久刪除帳號</strong>。刪除完成後，您將無法再以同一帳號登入或使用本服務。
      </p>
      <p>
        You can permanently delete your Habitooo account directly in the app.
      </p>

      <h2 id="steps">1. 刪除步驟（App 內）</h2>
      <ol>
        <li>開啟 Habitooo App 並登入您的帳號。</li>
        <li>前往「<strong>個人資料</strong>」頁面。</li>
        <li>
          在「<strong>帳號安全</strong>」區塊，點選「<strong>刪除帳號</strong>」。
        </li>
        <li>
          於確認視窗閱讀說明後，點選「<strong>我確定要刪除</strong>」。
        </li>
        <li>
          在輸入框輸入「<strong>DELETE</strong>」，再點選「<strong>刪除帳號</strong>」完成請求。
        </li>
      </ol>

      <blockquote>
        <p>
          我們會<strong>立即登出</strong>您的帳號，並在 <strong>30 天內</strong>永久刪除您的帳號、所有群組記錄與打卡資料。<strong>此動作無法復原。</strong>
        </p>
      </blockquote>

      <p className="text-secondary">Steps (English):</p>
      <ol>
        <li>Open Habitooo.</li>
        <li>Go to Personal Info (個人資料).</li>
        <li>Under Account Security, tap Delete Account.</li>
        <li>Confirm the deletion request and enter DELETE to proceed.</li>
      </ol>

      <h2 id="deleted-data">2. 刪除後會移除的資料</h2>
      <p>帳號刪除後，下列資料將被移除：</p>
      <ul>
        <li>帳號資訊（Account information）</li>
        <li>習慣與習慣紀錄（Habits and habit records）</li>
        <li>群組成員關係與打卡紀錄（Group memberships and check-in history）</li>
        <li>與帳號相關之個人資料（Associated personal data）</li>
      </ul>

      <h2 id="retained-data">3. 可能暫時保留的資料</h2>
      <p>
        基於資安、防詐欺或法令義務之需要，部分資訊可能在必要期間內暫時保留，例如訂閱與付款紀錄、備份循環內之資料，或依法須保存之紀錄。詳見{" "}
        <Link href="/privacy#retention">隱私權政策第 6 條</Link>。
      </p>
      <p>
        Some information may be retained temporarily if required for security, fraud prevention, or legal obligations.
      </p>

      <h2 id="before-delete">4. 刪除前請注意</h2>
      <ul>
        <li>
          <strong>訂閱</strong>：刪除帳號<strong>不會自動取消</strong> App Store / Google Play 訂閱。請先至各平台「訂閱管理」取消 Habitooo Pro，以免持續扣款。詳見{" "}
          <Link href="/terms#subscription">服務條款第 6 條</Link>。
        </li>
        <li>
          <strong>不可逆</strong>：刪除請求送出並登出後，通常無法復原帳號或資料。
        </li>
        <li>
          <strong>本機資料</strong>：刪除後可一併移除裝置上的 App；iOS Widget 本機共享資料將隨 App 移除而清除。
        </li>
      </ul>

      <h2 id="contact">5. 需要協助？</h2>
      <p>
        若您無法於 App 內完成刪除，或對資料刪除範圍有疑問，請來信{" "}
        <a href={`mailto:${mail}`}>{mail}</a>，主旨請註明「Habitooo 隱私請求」。一般使用問題請見{" "}
        <Link href="/support">支援與聯絡</Link>。完整權利說明請見{" "}
        <Link href="/privacy#rights">隱私權政策第 7 條</Link>。
      </p>
    </>
  );
}
