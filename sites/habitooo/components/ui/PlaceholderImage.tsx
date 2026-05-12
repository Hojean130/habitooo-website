import {
  BRAND_LOGO_SRC,
  PLACEHOLDER_BADGE_APP_STORE,
  PLACEHOLDER_BADGE_GOOGLE_PLAY,
  PLACEHOLDER_PHONE,
  PLACEHOLDER_WIDE
} from "@/lib/image-assets";
import { cn } from "@/lib/utils";

type PlaceholderVariant = "logo" | "phone" | "wide" | "badge-app" | "badge-google";

const src: Record<PlaceholderVariant, string> = {
  logo: BRAND_LOGO_SRC,
  phone: PLACEHOLDER_PHONE,
  wide: PLACEHOLDER_WIDE,
  "badge-app": PLACEHOLDER_BADGE_APP_STORE,
  "badge-google": PLACEHOLDER_BADGE_GOOGLE_PLAY
};

const altText: Record<PlaceholderVariant, string> = {
  logo: "Logo 占位",
  phone: "App 截圖占位",
  wide: "橫幅圖占位",
  "badge-app": "App Store 圖示占位",
  "badge-google": "Google Play 圖示占位"
};

export function PlaceholderImage({
  variant,
  className,
  imgClassName
}: {
  variant: PlaceholderVariant;
  className?: string;
  /** 加在 img 上，例如 w-full h-auto */
  imgClassName?: string;
}) {
  return (
    <figure className={cn("m-0", className)}>
      <img
        src={src[variant]}
        alt={altText[variant]}
        className={cn("block h-auto w-full select-none", imgClassName)}
        width={variant === "phone" ? 220 : variant === "wide" ? 960 : variant === "badge-google" ? 180 : variant === "badge-app" ? 160 : 64}
        height={variant === "phone" ? 440 : variant === "wide" ? 320 : variant === "badge-app" || variant === "badge-google" ? 48 : 64}
        decoding="async"
      />
    </figure>
  );
}
