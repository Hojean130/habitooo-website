import Link from "next/link";
import { LegalTableWrap } from "@/components/legal/LegalTableWrap";
import { TERMS_EFFECTIVE_AT, TERMS_VERSION } from "@/lib/legal-doc-meta";
import { getSupportEmail } from "@/lib/support-email";

const mail = getSupportEmail();

export function TermsOfServiceBody() {
  return (
    <>
      <p>
        <em>Habitooo Terms of Service / End User License Agreement (EULA)</em>
      </p>

      <blockquote>
        <p>
          本文件以<strong>繁體中文</strong>版本為主；若中英文版本有疑義，以繁體中文版本為準。
        </p>
        <p>
          If there is any discrepancy between the Chinese and English versions, the Traditional Chinese
          version shall prevail.
        </p>
      </blockquote>

      <blockquote>
        <p>
          重要提示：本條款第 8 條（免責聲明與責任限制）、第 11 條（準據法與爭議解決）含對您權利義務有重大影響之條款，請務必詳閱。
        </p>
      </blockquote>

      <hr />

      <h2 id="vendor">0. 業者識別資訊</h2>
      <ul>
        <li>
          <strong>應用程式名稱</strong>：Habitooo
        </li>
        <li>
          <strong>服務提供者 / 開發者</strong>：HJC Studio（以下簡稱「我們」或「開發者」）
        </li>
        <li>
          <strong>客服信箱</strong>：<a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <strong>回應時間</strong>：48 小時內回應
        </li>
      </ul>
      <p>我們作為服務提供者及資料控制者，負責本服務之開發、維運及處理用戶個人資料。</p>

      <hr />

      <h2 id="scope">1. 條款之效力與適用範圍</h2>
      <ol>
        <li>
          本服務條款（以下簡稱「本條款」）由您（以下簡稱「您」或「用戶」）與開發者所簽訂，適用於您下載、安裝、註冊或使用
          Habitooo 行動應用程式及其相關服務（以下統稱「本服務」）之全部行為。
        </li>
        <li>
          <strong>您一旦下載、安裝或使用本服務，即視為您已閱讀、瞭解並同意本條款之全部內容</strong>，包括將不時更新之版本。
        </li>
        <li>
          本條款與〈
          <Link href="/privacy">Habitooo 隱私權政策</Link>〉構成您與開發者間之完整協議。如您不同意本條款任一條文，請立即停止使用並刪除本服務。
        </li>
      </ol>

      <h3>名詞定義</h3>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>名詞</th>
              <th>定義</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>用戶</strong>
              </td>
              <td>以 Google 帳號或 Apple ID 登入本服務之自然人</td>
            </tr>
            <tr>
              <td>
                <strong>群組</strong>
              </td>
              <td>由用戶建立或加入之共同追蹤空間，含成員、習慣清單與打卡紀錄</td>
            </tr>
            <tr>
              <td>
                <strong>習慣（Habit）</strong>
              </td>
              <td>用戶建立或共同追蹤之週期性事項</td>
            </tr>
            <tr>
              <td>
                <strong>打卡（Check-in）</strong>
              </td>
              <td>用戶對習慣進行完成標記之行為及其紀錄</td>
            </tr>
            <tr>
              <td>
                <strong>Streak</strong>
              </td>
              <td>
                連續完成紀錄；其判定以後端 <code>judge_at</code> 與 <code>streak_decisions</code> 為準
              </td>
            </tr>
            <tr>
              <td>
                <strong>Habitooo Pro</strong>
              </td>
              <td>訂閱付費方案及其專屬功能（詳見第 6 條）</td>
            </tr>
            <tr>
              <td>
                <strong>Freeze / Retro / Late Rescue / Last Push</strong>
              </td>
              <td>Habitooo Pro 提供之 streak 保護與提醒擴充功能</td>
            </tr>
            <tr>
              <td>
                <strong>內容</strong>
              </td>
              <td>您於本服務中輸入、上傳或產生之文字、圖片（含頭像）、設定與行為紀錄</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>

      <hr />

      <h2 id="account">2. 年齡要求與帳號</h2>
      <ol>
        <li>
          <strong>年齡要求</strong>：您必須<strong>年滿 13 歲</strong>方可使用本服務；若您介於 13 至 18 歲（或您所在地法定成年年齡），應於法定代理人/監護人同意下使用。
        </li>
        <li>
          <strong>登入方式</strong>：本服務目前支援以下登入方式：
          <ul>
            <li>Google 帳號（Google OAuth 2.0 + PKCE）</li>
            <li>Apple ID（Sign in with Apple，含 Apple Private Relay 轉址 email）</li>
          </ul>
        </li>
        <li>
          <strong>帳號責任</strong>：您應自行妥善保管第三方帳號之登入資訊與裝置安全；以您的帳號所進行的所有行為，均由您負完全責任。您<strong>不得</strong>出借、轉讓、買賣帳號，或與他人共用帳號。
        </li>
        <li>
          <strong>資訊正確</strong>：您於本服務中提供之資料（如顯示名稱）應為真實、正確且最新；如有變更，請即時更新。
        </li>
        <li>
          <strong>帳號刪除</strong>：您可隨時於 App 內或來信 <a href={`mailto:${mail}`}>{mail}</a>{" "}
          請求刪除帳號；刪除後相關處理依〈隱私權政策〉第 6 條辦理。
        </li>
        <li>
          <strong>未成年人之處置</strong>：若我們合理懷疑您未滿 13 歲，得不經通知暫停或終止您之帳號。
        </li>
      </ol>

      <hr />

      <h2 id="conduct">3. 用戶義務與禁止行為</h2>
      <p>您同意遵守相關法令與本條款，並<strong>不得</strong>為下列行為：</p>
      <ol>
        <li>上傳、散布、傳送任何虛假、誤導、侵權、含仇恨、暴力、色情、騷擾、歧視或其他違法內容；</li>
        <li>嘗試破解、修改、干擾、逆向工程、反編譯本服務或其安全機制；</li>
        <li>未經授權使用自動化工具、爬蟲、機器人、模擬器大量存取或操控本服務；</li>
        <li>蓄意刷量、偽造打卡紀錄、規避配額限制、利用漏洞取得本應付費之功能；</li>
        <li>利用本服務從事詐欺、洗錢、傳銷、未經授權之商業活動；</li>
        <li>蓄意造成他人困擾、發送垃圾訊息、或影響其他用戶之正常使用；</li>
        <li>冒用他人身分、虛偽陳述與他人之關係；</li>
        <li>違反 Apple App Store / Google Play 之開發者條款或使用者條款。</li>
      </ol>
      <p>
        違反者，開發者得不經通知<strong>暫停或終止</strong>您使用本服務之權利，並得保留依法追究民事、刑事或行政責任之權利。
      </p>

      <hr />

      <h2 id="groups">4. 群組、內容之規則與第三方權益</h2>
      <ol>
        <li>
          <strong>可見性</strong>：您建立或加入群組後，您於該群組內之顯示名稱、頭像、打卡紀錄及 streak
          表現等資料，將依本服務功能設計提供其他群組成員查看；公開群組之名稱、描述、分類、標籤、成員人數另將出現於探索頁面。
        </li>
        <li>
          <strong>管理者權限</strong>：群組之建立者或被授予管理權限之成員，得新增/移除成員、修改群組資訊、調整習慣設定等；具體權限以本服務當時之功能為準。
        </li>
        <li>
          <strong>適當性自負</strong>：您應自行確認您於群組內輸入或上傳內容之合法性與適當性，並尊重他人隱私與權益。
        </li>
        <li>
          <strong>檢舉與處置</strong>：若您發現他人違反本條款，得來信 <a href={`mailto:${mail}`}>{mail}</a>{" "}
          檢舉。我們有權但無義務對違反者採取移除內容、暫停帳號或其他必要措施。
        </li>
        <li>
          <strong>內容備份</strong>：請您自行妥善備份重要資料；本服務非雲端備份服務，我們不擔保所有資料皆得永久保存。
        </li>
      </ol>

      <hr />

      <h2 id="ip">5. 智慧財產權</h2>
      <ol>
        <li>
          <strong>服務本身</strong>：本服務之系統架構、介面設計、原始碼、設計樣式、商標、標誌、文案、icon
          與相關內容（不含用戶內容）為開發者所有或經合法授權，受著作權法、商標法等智慧財產權法令保護。
        </li>
        <li>
          <strong>使用授權</strong>：在本條款有效期間內，開發者授予您一項<strong>非獨占、不可轉讓、可撤回、限於個人非商業用途</strong>之使用權，於支援之裝置上使用本服務。
        </li>
        <li>
          <strong>用戶內容</strong>：您保留您自行輸入或上傳內容（顯示名稱、群組描述、頭像、習慣名稱、打卡備註等）之權利；惟為提供與改善本服務之必要範圍，您
          <strong>
            授權開發者一項非獨占、全球性、免權利金、可轉授權（限於本服務之技術委外服務商）之權利
          </strong>
          ，得對該內容進行儲存、複製、傳輸、顯示、改作（例如為適配 Widget 而格式化）。本授權於您刪除帳號或刪除內容後即終止，但已合法產生之衍生使用（例如備份循環、法定保存）不在此限。
        </li>
        <li>
          <strong>回饋</strong>：您主動提供之建議、回饋意見，視為授予開發者免費、永久、可使用於改善服務之權利。
        </li>
      </ol>

      <hr />

      <h2 id="subscription">6. 付費服務（Habitooo Pro）— 自動續訂訂閱</h2>

      <h3>6.1 訂閱內容與價格</h3>
      <p>本服務提供以下訂閱方案（統稱「Habitooo Pro」）：</p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>平台</th>
              <th>商品 ID</th>
              <th>期間</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iOS（Apple App Store）</td>
              <td>
                <code>com.hjcstudio.habitooo.pro.monthly</code>
              </td>
              <td>每月（每 1 個月）</td>
              <td>
                <strong>以 App 內結帳頁面顯示之當地貨幣價格為準</strong>
              </td>
            </tr>
            <tr>
              <td>Android（Google Play）</td>
              <td>將於上架時公布</td>
              <td>每月</td>
              <td>以 App 內結帳頁面顯示之當地貨幣價格為準</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <p>
        <strong>Habitooo Pro 包含</strong>（具體功能以本服務當時版本為準）：
      </p>
      <ul>
        <li>
          <strong>Freeze</strong>：於 cutoff 前後特定預警/主轉化窗內凍結 streak，避免中斷。Freeze 僅影響 streak 結果，<strong>不會</strong>將群組打卡狀態改為已完成。
        </li>
        <li>
          <strong>Retro</strong>：補登已過 cutoff 之打卡，僅寫入個人完成紀錄與成就；<strong>不會</strong>回溯改變 streak。
        </li>
        <li>
          <strong>Late Rescue</strong>：隔天首次開啟 App 後特定時間窗內救援前一日 streak（每月限額）。
        </li>
        <li>
          <strong>Last Push（最後一推）</strong>：cutoff 前 30 分鐘內向群組成員發送額外提醒（與一般免費 throttle 並列計算）。
        </li>
        <li>各項功能均有<strong>每月配額</strong>；超出配額將顯示對應 Paywall。</li>
      </ul>

      <h3>6.2 自動續訂條款（依 Apple / Google 揭露要求）</h3>
      <p>請於訂閱前確認下列事項：</p>
      <ol>
        <li>
          <strong>付款收取</strong>：付款於您確認購買時由 Apple App Store 或 Google Play 自您之 Apple ID / Google 帳號收取。
        </li>
        <li>
          <strong>自動續訂</strong>：訂閱期間結束前 <strong>24 小時</strong>內，若您未取消，將自動續訂下一週期；<strong>續訂費用</strong>於每期結束前
          24 小時內自您之帳戶扣款。
        </li>
        <li>
          <strong>價格</strong>：續訂價格以扣款當下 App Store / Google Play 顯示之當地貨幣價格為準；如有調價，我們會依平台規範通知您並徵求同意。
        </li>
        <li>
          <strong>取消方式</strong>：您可於<strong>期間結束至少 24 小時前</strong>透過下列方式取消：
          <ul>
            <li>
              <strong>iOS</strong>：開啟「設定」→ 點擊您的 Apple ID 名稱 → 點擊「訂閱」→ 找到 Habitooo → 取消訂閱。
            </li>
            <li>
              <strong>Android</strong>：開啟 Google Play → 點擊個人圖示 → 「付款和訂閱」→「訂閱」→ 找到 Habitooo → 取消訂閱。
            </li>
          </ul>
        </li>
        <li>
          <strong>試用期</strong>：若提供免費試用，未於試用期結束前<strong>至少 24 小時</strong>取消，將自動轉為付費訂閱並收取首期費用；同一
          Apple ID / Google 帳號之試用通常<strong>僅可使用一次</strong>。
        </li>
        <li>
          <strong>退款</strong>：訂閱之退款由 Apple App Store / Google Play 依其官方政策處理；開發者<strong>無權直接處理或保證</strong>訂閱退款。退款連結：
          <ul>
            <li>
              Apple：
              <a href="https://support.apple.com/zh-tw/HT204084" rel="noopener noreferrer" target="_blank">
                https://support.apple.com/zh-tw/HT204084
              </a>{" "}
              （reportaproblem.apple.com）
            </li>
            <li>
              Google：
              <a
                href="https://support.google.com/googleplay/answer/2479637"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://support.google.com/googleplay/answer/2479637
              </a>
            </li>
          </ul>
        </li>
        <li>
          <strong>管理訂閱</strong>：您可隨時於 App 內「個人檔案」→「訂閱」查看您目前的方案與到期日。
        </li>
      </ol>

      <h3>6.3 訂閱權益之提供</h3>
      <ol>
        <li>訂閱成功後，相關權益（entitlements）將於後端驗證收據後啟用；同步可能有短暫延遲（通常數秒至數分鐘）。</li>
        <li>
          若您於不同平台分別購買，<strong>權益不會自動跨平台轉移</strong>；請於同一平台使用同一帳號登入以取得權益。
        </li>
        <li>若您退款、取消或續訂失敗，相關權益將於到期日後失效；已使用之配額不予退還。</li>
      </ol>

      <h3>6.4 IAP 法定限制</h3>
      <p>
        依 Apple App Store / Google Play 開發者條款，本服務內所有與帳號連動之數位內容、增加功能、解鎖、配額等付費，<strong>必須</strong>透過
        In-App Purchase（IAP）進行；任何於 App 外進行之付款（如導向外部網站付款），均非經授權之交易，本服務亦不會主動於 App 內導引您至外部付款頁。
      </p>

      <h3>6.5 連續紀錄（Streak）規則之特別約定</h3>
      <ul>
        <li>
          Streak 之最終真相以<strong>後端 <code>streak_decisions</code></strong>為準；本機（包含 Widget）顯示之 streak
          可能因網路或同步因素短暫不同步。
        </li>
        <li>
          <strong>Freeze 僅保護個人 streak</strong>，不代表群組已完成；其他成員看到的群組完成度仍會反映您尚未打卡。
        </li>
        <li>
          <strong>Retro 不增加 streak</strong>，僅補個人紀錄與成就。
        </li>
        <li>
          <strong>Late Rescue 與當日 Freeze 互斥</strong>（同一 streak 不得重複使用）。
        </li>
        <li>
          各項配額之計算錨點為您的訂閱 <code>billing_anchor</code>，每月重置。
        </li>
      </ul>

      <hr />

      <h2 id="service-changes">7. 服務變更、暫停與終止</h2>
      <ol>
        <li>
          <strong>服務變更</strong>：開發者得因產品迭代、技術升級、安全考量、商業策略或法令變更，<strong>新增、修改、限制或停止</strong>本服務之全部或部分功能；重大變更將以合理方式通知。
        </li>
        <li>
          <strong>服務暫停</strong>：遇下列情形，開發者得暫停部分或全部服務：
          <ul>
            <li>定期或臨時維護、升級；</li>
            <li>第三方服務（如 Apple/Google/雲端供應商）中斷；</li>
            <li>系統異常、資安事件、駭客攻擊；</li>
            <li>天災、戰爭、罷工、政府命令等不可抗力事件。</li>
          </ul>
        </li>
        <li>
          <strong>終止使用</strong>：如您違反本條款、Apple App Store / Google Play 條款或其他法令，開發者得不經通知終止您的使用權；終止後您仍應就終止前之行為負責。
        </li>
        <li>
          <strong>終止後續</strong>：本條款終止後，第 3、5、8、9、10、11 條規定仍繼續有效。
        </li>
      </ol>

      <hr />

      <h2 id="disclaimer">8. 免責聲明與責任限制</h2>
      <ol>
        <li>
          <strong>「現狀」提供</strong>：本服務以「<strong>現狀</strong>（AS IS）」與「<strong>現有功能</strong>（AS
          AVAILABLE）」提供；開發者不擔保：
          <ul>
            <li>本服務永不中斷、無延遲、無錯誤；</li>
            <li>本服務符合您之特定目的；</li>
            <li>本服務之 streak/freeze/retro 計算永遠絕對精確；</li>
            <li>您透過本服務取得之健康或行為改善成效。</li>
          </ul>
        </li>
        <li>
          <strong>健康警語</strong>：本服務<strong>非醫療裝置、非心理治療工具</strong>；不應作為診斷或治療任何疾病之依據。如有健康相關疑慮，請諮詢合格醫療專業人員。
        </li>
        <li>
          <strong>責任限制</strong>：在法律允許之最大範圍內，對於下列損害，<strong>開發者概不負責</strong>：
          <ul>
            <li>您資料遺失、毀損、無法存取；</li>
            <li>您預期利益、商譽、機會成本之損失；</li>
            <li>任何間接、附帶、特殊、懲罰性或衍生性損害；</li>
            <li>因第三方服務（Apple、Google、Expo、雲端供應商）中斷或故障所致之損害。</li>
          </ul>
        </li>
        <li>
          <strong>賠償上限</strong>：如法律強制要求開發者承擔損害賠償責任，開發者對您之<strong>累計賠償總額</strong>，以您於<strong>請求權發生前 12 個月</strong>內實際向開發者支付之服務費用為上限；如您未付費使用本服務，則以<strong>新台幣 500 元</strong>為上限（但消費者保護法或其他法律強制規定者，不在此限）。
        </li>
        <li>
          <strong>法定權利</strong>：本條不限制或排除任何依法不得限制或排除之法定權利。
        </li>
      </ol>

      <hr />

      <h2 id="privacy-ref">9. 隱私權與個人資料</h2>
      <p>
        開發者尊重您的個人資料保護，依本服務之〈
        <Link href="/privacy">Habitooo 隱私權政策</Link>〉（與本條款同位階）處理您的個人資料蒐集、處理、利用、揭露及國際傳輸；〈隱私權政策〉為本條款之一部分，請一併詳閱。
      </p>

      <hr />

      <h2 id="apple-google">10. Apple App Store / Google Play 之特別條款</h2>
      <p>
        本服務透過 Apple App Store 與 Google Play 發行，您同時受該等平台之開發者使用者條款拘束。下列特別約定僅針對 Apple App Store
        用戶（依 Apple Licensed Application End User License Agreement 要求）：
      </p>
      <ol>
        <li>
          <strong>協議方</strong>：本條款為您與<strong>開發者</strong>間之協議，<strong>並非與 Apple Inc. 間之協議</strong>；Apple
          Inc. 不對本服務及其內容負責。
        </li>
        <li>
          <strong>使用授權範圍</strong>：本服務於 Apple 平台之使用授權限於您於 App Store 服務條款下取得授權使用之 Apple
          品牌產品；該授權為非可轉讓。
        </li>
        <li>
          <strong>維護與支援</strong>：開發者<strong>單獨</strong>負責本服務之維護與支援；Apple <strong>無義務</strong>提供任何維護與支援。
        </li>
        <li>
          <strong>保固</strong>：若本服務未符合任何可適用之保固，您可通知 Apple，Apple 將退還購買價金（若有）；於法律允許之最大範圍內，Apple{" "}
          <strong>不負其他任何保固責任</strong>。
        </li>
        <li>
          <strong>產品請求</strong>：開發者單獨負責處理您或任何第三方對本服務之請求（包括但不限於：產品責任、不符合任何法律或法規之主張、消費者保護或類似法律下之請求）。
        </li>
        <li>
          <strong>智慧財產</strong>：若任何第三方主張本服務或您持有並使用本服務侵害該第三方之智慧財產權，由<strong>開發者單獨負責</strong>該主張之調查、辯護、和解與解除。
        </li>
        <li>
          <strong>法律遵循</strong>：您聲明（i）您不在受美國政府禁運之國家或被指定為「支持恐怖主義」之國家；（ii）您未列名於美國政府任何禁止或限制名單。
        </li>
        <li>
          <strong>Apple 為第三方受益人</strong>：您與開發者均承認，<strong>Apple 及其子公司為本條款之第三方受益人</strong>，於您接受本條款後，Apple
          有權（亦視為已接受該權利）以第三方受益人身分，對您強制執行本條款。
        </li>
      </ol>

      <hr />

      <h2 id="governing">11. 準據法與爭議解決</h2>
      <ol>
        <li>
          <strong>準據法</strong>：本條款之解釋、適用與爭議，以<strong>中華民國法律</strong>為準據法（排除衝突法則）。
        </li>
        <li>
          <strong>協商</strong>：如有爭議，您與開發者同意先以誠信原則進行協商。
        </li>
        <li>
          <strong>管轄法院</strong>：協商不成者，雙方合意以<strong>台灣台北地方法院為第一審管轄法院</strong>；如您是消費者保護法所稱之消費者，前述合意管轄不排除您依消費者保護法或民事訴訟法第
          47 條另為主張之權利。
        </li>
        <li>
          <strong>歐盟用戶</strong>：如您居住於歐盟，您可循歐盟線上爭議解決平台（ODR）解決爭議：
          <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">
            https://ec.europa.eu/consumers/odr
          </a>
        </li>
      </ol>

      <hr />

      <h2 id="general">12. 一般約定</h2>
      <ol>
        <li>
          <strong>可分性</strong>：本條款任一條款若被認定無效或不可執行，其餘條款仍繼續有效。
        </li>
        <li>
          <strong>轉讓</strong>：開發者得將本條款下之權利義務全部或部分轉讓予關係企業或繼受人；您未經開發者書面同意，不得轉讓本條款下之權利義務。
        </li>
        <li>
          <strong>完整協議</strong>：本條款（連同〈隱私權政策〉）為您與開發者間關於本服務之完整協議，取代所有先前之口頭或書面協議。
        </li>
        <li>
          <strong>棄權</strong>：開發者未行使本條款下之任何權利，不構成對該等權利之拋棄。
        </li>
        <li>
          <strong>語言</strong>：本條款以繁體中文撰寫；若另有英文或其他語言版本，僅供參考，<strong>以繁體中文版本為準</strong>。
        </li>
      </ol>

      <hr />

      <h2 id="terms-updates">13. 條款之更新</h2>
      <ol>
        <li>開發者得視需求修改本條款。</li>
        <li>
          <strong>重大變更</strong>（涉及您權利義務、付費條款、責任限制等）將於生效<strong>至少 30 日前</strong>以下列方式之一通知：
          <ul>
            <li>App 內公告</li>
            <li>啟動畫面提示</li>
            <li>您於 App 內登錄之 email 通知</li>
          </ul>
        </li>
        <li>非重大變更（如錯字修正、聯絡資訊更新）以更新本頁為準。</li>
        <li>
          通知後您繼續使用本服務即視為同意；若您不同意，請停止使用並依〈隱私權政策〉第 7 條請求刪除帳號。
        </li>
      </ol>

      <hr />

      <h2 id="contact">14. 聯絡我們</h2>
      <p>如有任何問題、建議或權益爭議，請聯絡：</p>
      <ul>
        <li>
          <strong>客服信箱</strong>：<a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <strong>回應時間</strong>：48 小時內回應
        </li>
        <li>
          <strong>訂閱問題</strong>：請同時嘗試 Apple / Google 之客戶支援管道
        </li>
      </ul>

      <hr />

      <h2 id="version-history">版本紀錄</h2>
      <p>
        <strong>{TERMS_VERSION}</strong>
        {" · "}
        {TERMS_EFFECTIVE_AT}
        {" · "}
        初版
      </p>
    </>
  );
}
