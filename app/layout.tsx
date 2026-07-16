import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["500", "600", "700"],
  display: "swap",
});

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
  title: "MCP Doctor — Score MCP agent readiness",
  description:
    "The easiest way to score MCP agent readiness. Open-source CLI — inspect, benchmark, and eval before production.",
  openGraph: {
    title: "MCP Doctor",
    description:
      "Prove agents can actually use your MCP. Static scorecard, task evals, friction score.",
    url: "https://coefficient.work",
    siteName: "MCP Doctor",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-white font-body text-black antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
