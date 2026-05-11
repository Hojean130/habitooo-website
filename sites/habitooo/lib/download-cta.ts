/**
 * 下載區與 Header CTA 狀態。上架後改為 "store" 並填入商店 URL（可用環境變數覆寫）。
 */
export type DownloadCtaMode = "coming_soon" | "waitlist" | "store";

export const DOWNLOAD_CTA_MODE: DownloadCtaMode = "coming_soon";

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL?.trim() || "";

export const GOOGLE_PLAY_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL?.trim() || "";

export function storeLinksReady(): boolean {
  return Boolean(APP_STORE_URL && GOOGLE_PLAY_URL);
}
