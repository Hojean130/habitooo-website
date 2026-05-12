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
  logo: "Habitooo",
  phone: "App 截圖占位",
  wide: "橫幅圖占位",
  "badge-app": "App Store 圖示占位",
  "badge-google": "Google Play 圖示占位"
};

/** 對應實際資產比例，供瀏覽器預留版面 */
const intrinsic: Record<PlaceholderVariant, { width: number; height: number }> = {
  logo: { width: 200, height: 120 },
  phone: { width: 220, height: 440 },
  wide: { width: 960, height: 320 },
  "badge-app": { width: 160, height: 48 },
  "badge-google": { width: 180, height: 48 }
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
        width={intrinsic[variant].width}
        height={intrinsic[variant].height}
        decoding="async"
      />
    </figure>
  );
}
