# Habitooo Website (`habitooo.app`)

## 開發

在 repo 根目錄：

```bash
cd sites/habitooo
npm install
npm run dev
```

## Pages

- `/` Landing
- `/privacy`
- `/terms`
- `/support`
- `/sitemap.xml`（由 `app/sitemap.ts` 生成）
- `/robots.txt`（由 `app/robots.ts` 生成）

## CTA 狀態

首頁 CTA 目前先固定為 `即將推出`，在 `app/page.tsx` 的 `CTA_STATE` 調整：

- `store`: App 已上架（之後補 App Store / Google Play 連結）
- `waitlist`: 有 waitlist（之後補 form provider / backend）
- `coming_soon`: 即將推出（目前）

