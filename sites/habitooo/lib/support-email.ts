import { site } from "@/lib/site";

/** 聯絡信箱：優先環境變數，否則 site.supportEmail，皆無則占位。 */
export function getSupportEmail(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();
  if (fromEnv) return fromEnv;
  if (site.supportEmail?.trim()) return site.supportEmail;
  return "TODO_SUPPORT_EMAIL";
}
