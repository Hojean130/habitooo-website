import type { Metadata } from "next";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InsightSection } from "@/components/sections/InsightSection";
import { LiveSpaceSection } from "@/components/sections/LiveSpaceSection";
import { PresenceSection } from "@/components/sections/PresenceSection";
import { PrivacySecuritySection } from "@/components/sections/PrivacySecuritySection";
import { RhythmSection } from "@/components/sections/RhythmSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  keywords: [...site.keywords],
  openGraph: {
    title: site.title,
    description: site.description
  },
  twitter: {
    title: site.title,
    description: site.description
  }
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <InsightSection />
      <AudienceSection />
      <RhythmSection />
      <LiveSpaceSection />
      <PresenceSection />
      <DownloadSection />
      <PrivacySecuritySection />
    </main>
  );
}
