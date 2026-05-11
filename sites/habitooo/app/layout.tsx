import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/lib/site";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s｜${site.name}`
  },
  description: site.description,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Habitooo" }]
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.svg"]
  },
  keywords: [...site.keywords]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.locale} className="h-full">
      <body className={`${fontSans.variable} min-h-full antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

