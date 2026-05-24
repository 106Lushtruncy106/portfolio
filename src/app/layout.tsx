import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "帮你搞网站 | 独立站搭建",
    template: "%s | 帮你搞网站",
  },
  description:
    "专业独立站搭建服务，不套模板、个性定制。企业展示站、外贸SOHO站、品牌官网。",
  openGraph: {
    title: "帮你搞网站 | 独立站搭建",
    description:
      "专业独立站搭建服务，不套模板、个性定制。",
    type: "website",
    locale: "zh_CN",
    siteName: "帮你搞网站",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
