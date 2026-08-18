import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CONTACT_EMAIL,
  HERO_HEADLINE,
  HERO_SUBHEAD,
  PRODUCT_BYLINE,
  SITE_URL,
} from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PRODUCT_BYLINE} — MCP readiness CLI`,
    template: `%s — ${PRODUCT_BYLINE}`,
  },
  description: `${HERO_HEADLINE} ${HERO_SUBHEAD}`,
  applicationName: "MCP Doctor",
  authors: [{ name: "Coefficient", url: SITE_URL }],
  keywords: [
    "MCP",
    "Model Context Protocol",
    "agent readiness",
    "CLI",
    "open source",
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: PRODUCT_BYLINE,
    title: PRODUCT_BYLINE,
    description: HERO_HEADLINE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: PRODUCT_BYLINE,
    description: HERO_HEADLINE,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MCP Doctor",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux, Windows",
  license: "https://opensource.org/licenses/MIT",
  url: SITE_URL,
  description: HERO_SUBHEAD,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Coefficient",
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-paper font-body text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
