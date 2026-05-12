import { LegalTableWrap } from "@/components/legal/LegalTableWrap";
import { LEGAL_DOC_DATE, LEGAL_DOC_VERSION } from "@/lib/legal-doc-meta";
import { getSupportEmail } from "@/lib/support-email";

const mail = getSupportEmail();

export function PrivacyPolicyBody() {
  return (
    <>
      <p>
        <em>Habitooo Privacy Policy</em>
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

      <hr />

      <h2 id="identity">0. 識別資訊（Data Controller / 業者身分）</h2>
      <ul>
        <li>
          <strong>應用程式名稱</strong>：Habitooo
        </li>
        <li>
          <strong>資料控制者 / 開發者</strong>：HJC Studio（以下簡稱「我們」或「開發者」）
        </li>
        <li>
          <strong>客服信箱</strong>：
          <a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <strong>隱私事務聯絡人</strong>：
          <a href={`mailto:${mail}`}>{mail}</a>（信件主旨請註明「Habitooo 隱私請求」）
        </li>
        <li>
          <strong>回應時間</strong>：原則上 48 小時內回應；資料當事人權利請求最遲於收件後 30 日內處理完畢（依台灣個資法及
          GDPR 第 12 條規定）。
        </li>
      </ul>

      <h2 id="scope">1. 適用範圍</h2>
      <p>
        本隱私權政策（以下簡稱「本政策」）說明您下載、安裝、註冊或使用 Habitooo（以下簡稱「本服務」）時，我們如何蒐集、處理、利用、保存與揭露您的個人資料。
      </p>
      <p>本政策適用於：</p>
      <ul>
        <li>iOS App（透過 Apple App Store 下載）</li>
        <li>Android App（透過 Google Play 下載）</li>
        <li>與本 App 連動之 iOS Widget（小工具）與背景通知服務</li>
      </ul>
      <p>
        本政策<strong>不適用於</strong>：
      </p>
      <ul>
        <li>第三方服務（例如 Google、Apple、Apple App Store、Google Play）的隱私處理行為；該等行為由其自身隱私政策規範。</li>
        <li>您透過本服務分享連結後，連往的外部網站或服務。</li>
      </ul>

      <h2 id="data-collection">2. 我們蒐集哪些資料</h2>
      <p>
        依台灣《個人資料保護法》第 8 條告知義務、Apple App Privacy 揭露、Google Play Data Safety 揭露、GDPR Art. 13 及
        CCPA §1798.100，明列如下：
      </p>

      <h3>2.1 帳號與身分驗證資料（必要）</h3>
      <p>
        當您使用 <strong>Google 帳號</strong> 或 <strong>Apple ID</strong> 登入時，我們會自第三方接收並儲存：
      </p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>資料類別</th>
              <th>內容</th>
              <th>來源</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>第三方識別碼</td>
              <td>由 Google／Apple 提供、用於辨識您帳號之代碼（由該平台管理）</td>
              <td>Google / Apple</td>
            </tr>
            <tr>
              <td>電子郵件</td>
              <td>真實 email 或 Apple Private Relay 轉址 email</td>
              <td>Google / Apple</td>
            </tr>
            <tr>
              <td>顯示名稱</td>
              <td>第三方提供之名稱（Apple 可能僅首次授權時提供）</td>
              <td>Google / Apple</td>
            </tr>
            <tr>
              <td>頭像 URL</td>
              <td>第三方提供之頭像連結（若有）</td>
              <td>Google</td>
            </tr>
            <tr>
              <td>App 內部使用者 ID</td>
              <td>由本服務為您產生之內部帳號編號（僅用於對應您的資料與客服查核）</td>
              <td>由我們產生</td>
            </tr>
            <tr>
              <td>App 存取 Token</td>
              <td>登入憑證（維持登入狀態並呼叫本服務；可能包含可更新之憑證）</td>
              <td>由我們產生</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <blockquote>
        <p>
          註：若您使用 <strong>Apple 私密電子郵件轉址（Hide My Email / Private Relay）</strong>，我們僅持有 Apple
          提供的轉址 email；任何透過該轉址寄出的信件，均會由 Apple 中繼後送達您的真實信箱。
        </p>
      </blockquote>

      <h3>2.2 服務使用資料（提供功能所必要）</h3>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>資料類別</th>
              <th>內容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>群組資料</td>
              <td>群組名稱、描述、分類、標籤、強度、是否公開、邀請碼、群組頭像（若上傳）</td>
            </tr>
            <tr>
              <td>成員關係</td>
              <td>您加入哪些群組、您在群組內的顯示名稱、加入/離開時間</td>
            </tr>
            <tr>
              <td>習慣資料</td>
              <td>習慣名稱、重複頻率（例如每日）、提醒時間、每日截止／判定時段、所屬群組</td>
            </tr>
            <tr>
              <td>打卡紀錄</td>
              <td>打卡日期與時間、完成狀態、所屬群組與習慣</td>
            </tr>
            <tr>
              <td>連續完成紀錄</td>
              <td>
                連續完成天數、與每日判定有關之時間資訊；「連續凍結」「補登」「晚打卡救回」「最後一推」等付費或配額相關功能之使用紀錄，以及當期可用額度
              </td>
            </tr>
            <tr>
              <td>推播識別</td>
              <td>
                由 Apple／Google 推播服務產生、用以寄送通知至您手機之裝置識別碼（僅在您同意接收通知時取得）
              </td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>

      <h3>2.3 訂閱與付款相關資料（僅在您訂閱付費功能時）</h3>
      <p>本服務提供以下付費內容（統稱「Habitooo Pro」）：</p>
      <ul>
        <li>iOS：Habitooo Pro 月費方案（App Store 自動續訂；實際名稱以商店顯示為準）</li>
        <li>Android：於 Google Play 上架後，以商店內顯示之方案名稱為準</li>
      </ul>
      <p>
        我們<strong>不會直接接觸您的信用卡或銀行帳號資料</strong>。所有付款均由 Apple App Store 或 Google Play
        處理。我們<strong>僅</strong>接收與儲存：
      </p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>資料類別</th>
              <th>內容</th>
              <th>來源</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>訂閱憑證</td>
              <td>
                Apple／Google 依商店機制提供之購買憑證或交易識別資訊（僅供驗證訂閱是否有效，不包含完整卡號或銀行帳號）
              </td>
              <td>Apple / Google</td>
            </tr>
            <tr>
              <td>訂閱狀態</td>
              <td>
                免費或付費方案類型、訂閱有效／到期或計費週期相關時間、續訂／取消／退款等狀態（主要由商店端通知）
              </td>
              <td>Apple／Google 應用程式商店與帳務系統</td>
            </tr>
            <tr>
              <td>用量配額</td>
              <td>
                各付費功能於當期計費或曆法週期內之已使用次數（例如「連續凍結」「補登」「最後一推」「晚打卡救回」），用以在
                App 內顯示剩餘額度
              </td>
              <td>由您操作產生</td>
            </tr>
            <tr>
              <td>付費功能事件</td>
              <td>與上述付費功能相關之操作紀錄（僅限提供該等功能、額度計算與爭議處理所必要之範圍）</td>
              <td>由您操作產生</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>

      <h3>2.4 您主動提供之資料（選填）</h3>
      <ul>
        <li>顯示名稱（可修改，且會同步至群組內顯示名稱）</li>
        <li>群組描述、群組頭像（若您建立群組或具備管理權限）</li>
        <li>您在習慣名稱、群組名稱、描述、標籤等欄位輸入之文字</li>
      </ul>
      <blockquote>
        <p>
          重要：<strong>請勿在 App 內輸入身份證字號、信用卡號、健康診斷紀錄、政治傾向、宗教信仰等敏感資料。</strong>{" "}
          本服務不需要、也不會主動要求該等資料；若您仍輸入，造成之風險由您自負。
        </p>
      </blockquote>

      <h3>2.5 裝置與技術資料（為了維運與防止濫用）</h3>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>資料類別</th>
              <th>內容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>裝置資訊</td>
              <td>裝置平台（iOS 或 Android）、系統中的裝置名稱（若有）、作業系統版本、App 版本、執行環境版本</td>
            </tr>
            <tr>
              <td>網路資料</td>
              <td>IP 位址（用於登入安全、防爬蟲、地區性除錯，原則不長期保存）</td>
            </tr>
            <tr>
              <td>錯誤與診斷</td>
              <td>當機紀錄、錯誤代碼（不含您輸入之習慣文字、群組聊天等內容）</td>
            </tr>
            <tr>
              <td>Widget 共享資料</td>
              <td>
                為讓 iOS 主畫面小工具顯示今日習慣，會於<strong>同一支手機</strong>上的 App 與小工具之間寫入最少必要之習慣摘要（例如名稱、是否完成、連續紀錄相關顯示所需資訊）；資料僅存於裝置本機之系統允許共享區域，<strong>未另外上傳至我們的伺服器作為小工具專用之雲端副本</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>

      <h3>2.6 App 內權限（iOS / Android）</h3>
      <p>我們僅在您於系統提示中<strong>主動授權</strong>後，才會啟用以下權限：</p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>權限</th>
              <th>目的</th>
              <th>是否必要</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>推播通知（Notifications）</td>
              <td>提醒打卡、每日截止前倒數、「最後一推」、社群動態</td>
              <td>選填，可隨時於系統設定關閉</td>
            </tr>
            <tr>
              <td>照片/相簿（Photos / Media Library）</td>
              <td>上傳群組頭像</td>
              <td>選填；若不授權，僅無法上傳頭像</td>
            </tr>
            <tr>
              <td>觸覺反饋（Haptics）</td>
              <td>完成打卡時的微震動回饋</td>
              <td>系統能力，無個資</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <p>
        我們<strong>不會</strong>蒐集以下資料：精準位置、聯絡人、健康/醫療資料（Apple HealthKit / Health Connect
        高敏感類別）、麥克風、相機即時影像、生物辨識。
      </p>

      <h3>2.7 兒童資料</h3>
      <p>
        本服務<strong>不提供給未滿 13 歲之兒童使用</strong>（依 COPPA 與 Apple App Store / Google Play
        政策）。我們不會在知情情況下蒐集 13 歲以下兒童之個人資料；若我們事後得知已蒐集，將於合理期間內刪除。若您是家長/監護人並發現您的孩子在未經您同意下使用本服務，請來信{" "}
        <a href={`mailto:${mail}`}>{mail}</a>，我們將儘速刪除相關資料。
      </p>

      <h2 id="purposes">3. 我們如何使用您的資料（蒐集目的）</h2>
      <p>我們僅於下列特定目的範圍內利用您的個人資料：</p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>蒐集目的（個資法施行細則代碼參考）</th>
              <th>對應功能</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>帳戶管理與身分驗證（特定目的 040）</td>
              <td>登入、登出、連線／登入狀態管理、防盜用</td>
            </tr>
            <tr>
              <td>行銷以外之消費者∕顧客管理及服務（特定目的 069）</td>
              <td>提供習慣追蹤、群組、打卡、提醒、Widget</td>
            </tr>
            <tr>
              <td>收費、付款及帳務（特定目的 091）</td>
              <td>訂閱、續訂、退款、配額計算</td>
            </tr>
            <tr>
              <td>資（通）訊與資料庫管理（特定目的 135 / 136）</td>
              <td>系統運作、備份、同步</td>
            </tr>
            <tr>
              <td>資（通）訊安全與管理（特定目的 137）</td>
              <td>防止盜用、防爬蟲、滲透防護</td>
            </tr>
            <tr>
              <td>統計與研究分析（特定目的 157）</td>
              <td>匿名化後之服務改善（不對個人剖繪）</td>
            </tr>
            <tr>
              <td>其他依法令所必要</td>
              <td>配合法定機關之合法要求</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <p>我們<strong>不會</strong>將您的資料用於：</p>
      <ul>
        <li>出售或出租給第三方廣告商</li>
        <li>行為廣告（behavioral advertising）或跨 App 追蹤</li>
        <li>訓練第三方泛用 AI 模型</li>
      </ul>

      <h2 id="disclosure">4. 我們如何分享、揭露或委外處理</h2>

      <h3>4.1 對其他用戶的揭露（社群功能本質）</h3>
      <p>當您加入群組後，<strong>群組成員可看到</strong>：</p>
      <ul>
        <li>
          您在該群組的<strong>顯示名稱</strong>與<strong>頭像</strong>（若有）
        </li>
        <li>您針對群組內習慣的<strong>打卡狀態、打卡時點</strong></li>
        <li>您是否屬於「最後尚未完成的成員」（社群壓力 UI 之核心訊息）</li>
        <li>
          您的群組內<strong>連續完成</strong>表現（依 App 畫面設計顯示）
        </li>
      </ul>
      <p>
        當您將群組設為<strong>公開</strong>時，下列資訊將出現在「探索」頁面，所有用戶（包括未加入之成員）可見：
      </p>
      <ul>
        <li>群組名稱、描述、分類、標籤、群組頭像</li>
        <li>成員人數、建立日期</li>
        <li>
          <strong>不包含</strong>：成員個人姓名、email、打卡細節
        </li>
      </ul>

      <h3>4.2 第三方服務商（資料處理者 / sub-processor）</h3>
      <p>我們為提供本服務，需委託下列第三方處理資料；其依其本身條款處理您的資料：</p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>服務商</th>
              <th>處理項目</th>
              <th>所在地</th>
              <th>連結</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apple Inc.</td>
              <td>Apple ID 登入、應用程式內購、推播通知、測試版發送（TestFlight）</td>
              <td>美國 / 全球</td>
              <td>
                <a href="https://www.apple.com/legal/privacy/" rel="noopener noreferrer" target="_blank">
                  https://www.apple.com/legal/privacy/
                </a>
              </td>
            </tr>
            <tr>
              <td>Google LLC</td>
              <td>Google 帳號登入、推播服務、Google Play 應用程式內購與帳務</td>
              <td>美國 / 全球</td>
              <td>
                <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
                  https://policies.google.com/privacy
                </a>
              </td>
            </tr>
            <tr>
              <td>Expo, Inc.</td>
              <td>EAS Updates（OTA）、構建工具</td>
              <td>美國</td>
              <td>
                <a href="https://expo.dev/privacy" rel="noopener noreferrer" target="_blank">
                  https://expo.dev/privacy
                </a>
              </td>
            </tr>
            <tr>
              <td>雲端基礎設施供應商</td>
              <td>應用程式伺服器、資料庫、物件儲存（檔案/頭像）</td>
              <td>可能位於美國、新加坡、東京等地區</td>
              <td>依各服務商之政策</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <blockquote>
        <p>本清單為目前主要委外對象；新增或變動時，將在本政策中更新。</p>
      </blockquote>

      <h3>4.3 法定揭露</h3>
      <p>如遇下列情況，我們得依法揭露必要資訊：</p>
      <ul>
        <li>依台灣《個人資料保護法》、《電信法》、《刑事訴訟法》等法定義務</li>
        <li>司法機關、檢察官、警察機關依法定程序之合法調閱</li>
        <li>為保護本服務或其他用戶、員工之生命、身體、財產之緊急情形</li>
      </ul>

      <h3>4.4 企業變動</h3>
      <p>
        如本服務發生合併、收購或資產轉讓等情形，您的資料可能作為業務資產之一部分轉讓。我們會在重大變動前以合理方式通知您，並要求繼受人遵守與本政策實質相當之保護水準。
      </p>

      <h3>4.5 我們不出售您的個人資料</h3>
      <p>
        我們<strong>不會出售（sell）或為跨情境行為廣告（share/cross-context behavioral advertising）目的揭露</strong>
        您的個人資料，意義同 California Consumer Privacy Act（CCPA / CPRA）。
      </p>

      <h2 id="transfer">5. 跨境傳輸</h2>
      <p>
        由於我們使用之雲端基礎設施供應商位於台灣境外（例如美國、新加坡、東京），您的資料可能被存放或處理於該等國家或地區。
      </p>
      <p>我們會採取下列措施確保資料受到適當保護：</p>
      <ul>
        <li>與雲端供應商簽訂符合 GDPR 標準契約條款（Standard Contractual Clauses, SCCs）或同等保障之資料處理附約（DPA）</li>
        <li>對傳輸中（in transit）資料使用 TLS 1.2 以上加密</li>
        <li>對靜態（at rest）敏感資料使用業界標準加密</li>
      </ul>

      <h2 id="retention">6. 資料保存期間</h2>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>資料類別</th>
              <th>保存期間</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>帳號身分驗證資料</td>
              <td>自您建立帳號起，至您刪除帳號後 30 日內完成刪除或匿名化</td>
            </tr>
            <tr>
              <td>群組、習慣、打卡紀錄</td>
              <td>
                自您建立起，至您刪除帳號後 30 日內完成刪除或匿名化（您退出群組但帳號未刪除者，您個人打卡紀錄仍保留以供您查詢）
              </td>
            </tr>
            <tr>
              <td>訂閱與付款相關紀錄（例如商店提供之訂閱憑證、發票、退款紀錄）</td>
              <td>依稅務與會計法令至少保存 5 年（中華民國商業會計法第 38 條）</td>
            </tr>
            <tr>
              <td>推播識別</td>
              <td>自您關閉推播或刪除 App 起 30 日內失效並清除</td>
            </tr>
            <tr>
              <td>當機與診斷紀錄</td>
              <td>不超過 90 日</td>
            </tr>
            <tr>
              <td>法定爭議處理需要之資料</td>
              <td>至爭議終結為止</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>

      <h2 id="rights">7. 您的權利（資料當事人權利）</h2>
      <p>依台灣《個人資料保護法》第 3 條、GDPR Art. 15–22、CCPA §1798.100–135，您就您的個人資料享有：</p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>權利</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>查詢／請求閱覽</td>
              <td>您可請求知悉我們持有您的何種資料</td>
            </tr>
            <tr>
              <td>請求製給複製本</td>
              <td>您可請求以可攜式、機器可讀之格式取得您的資料</td>
            </tr>
            <tr>
              <td>補充或更正</td>
              <td>您可隨時於 App 內修改顯示名稱與頭像；其他資料可來信請求</td>
            </tr>
            <tr>
              <td>請求停止蒐集、處理、利用</td>
              <td>您可請求我們停止特定處理</td>
            </tr>
            <tr>
              <td>請求刪除</td>
              <td>您可於 App 內或來信請求刪除帳號；我們將於 30 日內刪除/匿名化（法定例外除外）</td>
            </tr>
            <tr>
              <td>拒絕之權利</td>
              <td>您得拒絕提供個人資料，惟此將導致部分或全部功能無法使用</td>
            </tr>
            <tr>
              <td>撤回同意</td>
              <td>如處理是基於您的同意，您可隨時撤回；撤回不影響撤回前之合法處理</td>
            </tr>
            <tr>
              <td>申訴</td>
              <td>
                您可向台灣國家發展委員會個人資料保護專責機關或您所在地之資料保護機關（如歐盟之 DPA）申訴
              </td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <p>
        <strong>行使方式</strong>：請來信 <a href={`mailto:${mail}`}>{mail}</a>，主旨註明「Habitooo
        隱私請求」，並提供：
      </p>
      <ol>
        <li>可識別您帳號之資訊（例如登入所使用之電子郵件；若 App 內有顯示帳號代碼，請一併附上）</li>
        <li>您的請求類型</li>
        <li>必要時，我們可能要求您配合身分驗證程序，以避免假冒請求</li>
      </ol>

      <h2 id="security">8. 資料安全</h2>
      <p>我們採取下列合理之技術與管理措施保護您的資料：</p>
      <ul>
        <li>
          <strong>傳輸加密</strong>：HTTPS / TLS 1.2 以上
        </li>
        <li>
          <strong>靜態加密</strong>：敏感欄位於資料庫端加密
        </li>
        <li>
          <strong>存取控管</strong>：以最小權限原則限制內部存取，並保留稽核記錄
        </li>
        <li>
          <strong>驗證安全</strong>：採 Google／Apple 官方建議之安全登入流程
        </li>
        <li>
          <strong>登入憑證</strong>：以加密方式儲存於您手機的安全儲存區；過期或登出時清除
        </li>
        <li>
          <strong>滲透與漏洞</strong>：定期更新依賴套件、追蹤已揭露漏洞
        </li>
        <li>
          <strong>小工具資料</strong>：iOS 小工具僅透過系統機制與同一支手機上的 App 共享本機資料
        </li>
      </ul>
      <p>
        惟任何網路傳輸或儲存無法保證 100% 安全。
        <strong>
          若發生重大個資外洩事件，我們將依台灣《個人資料保護法》第 12 條與 GDPR Art. 33–34
          於知悉後盡速以 App 內通知、email、或公告方式通知您與主管機關。
        </strong>
      </p>

      <h2 id="notifications">9. 推播通知</h2>
      <p>當您同意接收推播後，我們會在下列情境發送通知：</p>
      <ul>
        <li>習慣每日截止前之倒數提醒（含「最後一推」付費功能）</li>
        <li>群組社群動態（例如：其他成員已完成、您是最後一位）</li>
        <li>訂閱與付款相關通知（續訂提示、退款結果）</li>
        <li>重要服務或政策變更通知</li>
      </ul>
      <p>您可隨時於 iOS / Android 系統設定中關閉推播通知；關閉後仍可使用 App 之核心功能。</p>

      <h2 id="automated-decisions">10. 自動化決策與個人剖繪</h2>
      <p>
        我們<strong>不對您進行</strong>會產生法律效果或重大影響之自動化決策（GDPR Art. 22）。連續完成天數、「連續凍結」「補登」「晚打卡救回」等規則僅屬 App
        內遊戲化／激勵功能之計算，不會用於信用、保險、就業等實質決策。
      </p>

      <h2 id="cookies">11. Cookie / 類似技術</h2>
      <p>
        本服務為原生行動 App，<strong>不使用瀏覽器 cookie</strong>。我們僅於裝置上使用：
      </p>
      <ul>
        <li>手機本機安全儲存：登入憑證與必要之本機快取</li>
        <li>iOS：App 與主畫面小工具間之本機資料共享（僅限同一裝置）</li>
        <li>推播服務識別：例如 Apple／Google 推播所需之裝置識別（僅在您同意通知時取得）</li>
      </ul>
      <p>
        我們<strong>不使用</strong>：第三方廣告 SDK、用於跨 App 廣告追蹤之裝置識別（我們不會為此目的向系統請求該類識別）、像素追蹤、Web 廣告
        cookie。
      </p>

      <h2 id="policy-updates">12. 本政策的更新</h2>
      <p>我們可能不時更新本政策。更新時我們將：</p>
      <ol>
        <li>修改本文件頂部之「版本」與「最後更新」日期；</li>
        <li>
          <strong>重大變更</strong>（例如新增資料類別、新增第三方接收者、目的變更）將於生效<strong>至少 30 日前</strong>
          以 App 內通知、email 或啟動畫面方式通知您；
        </li>
        <li>非重大變更（例如錯字修正、聯絡資訊更新）以更新本頁為準。</li>
      </ol>
      <p>
        繼續使用本服務即視為您接受更新後之政策；若您不同意更新後之政策，請停止使用並依第 7 條請求刪除帳號。
      </p>

      <h2 id="governing-law">13. 準據法</h2>
      <p>
        本政策之解釋與適用，以<strong>中華民國法律</strong>為準據法；同時於對歐洲經濟區（EEA）、英國、加州等地之用戶，我們亦遵循當地之
        GDPR / UK GDPR / CCPA 等法律規定。
      </p>

      <h2 id="contact">14. 聯絡我們</h2>
      <p>如有任何隱私相關問題或欲行使您的權利，請聯絡：</p>
      <ul>
        <li>
          <strong>客服信箱</strong>：
          <a href={`mailto:${mail}`}>{mail}</a>
        </li>
        <li>
          <strong>回應時間</strong>：48 小時內初步回應；30 日內處理完畢
        </li>
        <li>
          <strong>信件主旨</strong>：請註明「Habitooo 隱私請求」以便我們優先處理
        </li>
      </ul>

      <h2 id="appendix-apple">附錄 A：App Store 隱私標籤對照（Apple App Privacy）</h2>
      <p>依 Apple App Store Connect 隱私揭露分類，本服務對應如下：</p>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>類別（Apple 分類）</th>
              <th>是否蒐集</th>
              <th>是否連結至您</th>
              <th>是否用於追蹤</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contact Info → Email</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality, Account</td>
            </tr>
            <tr>
              <td>Contact Info → Name</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>User Content → Photos（群組頭像）</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>User Content → Other（習慣、打卡備註）</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Identifiers → User ID</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality, Analytics</td>
            </tr>
            <tr>
              <td>Identifiers → Device ID（推播用裝置識別）</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Purchases → Purchase History</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Usage Data → Product Interaction</td>
              <td>是</td>
              <td>是</td>
              <td>否</td>
              <td>App Functionality, Analytics</td>
            </tr>
            <tr>
              <td>Diagnostics → Crash / Performance</td>
              <td>是</td>
              <td>否（匿名化）</td>
              <td>否</td>
              <td>App Functionality</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                <strong>否</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Health &amp; Fitness</td>
              <td>
                <strong>否</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Financial Info</td>
              <td>
                <strong>否</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Contacts</td>
              <td>
                <strong>否</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Sensitive Info</td>
              <td>
                <strong>否</strong>
              </td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>
      <blockquote>
        <p>
          「追蹤（Tracking）」定義依 Apple App Tracking Transparency 規範；本服務<strong>未進行追蹤</strong>，故不會跳出
          ATT 對話框。
        </p>
      </blockquote>

      <h2 id="appendix-google">附錄 B：Google Play Data Safety 對照</h2>
      <LegalTableWrap>
        <table>
          <thead>
            <tr>
              <th>類別</th>
              <th>Collected</th>
              <th>Shared</th>
              <th>加密傳輸</th>
              <th>用戶可請求刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal info → Email / Name / User ID</td>
              <td>是</td>
              <td>否</td>
              <td>是</td>
              <td>是</td>
            </tr>
            <tr>
              <td>Photos and videos（群組頭像）</td>
              <td>是</td>
              <td>否</td>
              <td>是</td>
              <td>是</td>
            </tr>
            <tr>
              <td>Files and docs</td>
              <td>否</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>App activity（App interactions、In-app search history）</td>
              <td>是</td>
              <td>否</td>
              <td>是</td>
              <td>是</td>
            </tr>
            <tr>
              <td>App info and performance（Crash logs、Diagnostics）</td>
              <td>是</td>
              <td>否</td>
              <td>是</td>
              <td>是</td>
            </tr>
            <tr>
              <td>Device or other IDs（推播用裝置識別）</td>
              <td>是</td>
              <td>否</td>
              <td>是</td>
              <td>是</td>
            </tr>
            <tr>
              <td>Health and fitness</td>
              <td>否</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>否</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Financial info</td>
              <td>否</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </LegalTableWrap>

      <hr />

      <h2 id="version-history">版本紀錄</h2>
      <p>
        <strong>{LEGAL_DOC_VERSION}</strong>
        {" · "}
        {LEGAL_DOC_DATE}
        {" · "}
        初版
      </p>
    </>
  );
}
