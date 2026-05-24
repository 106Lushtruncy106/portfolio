import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
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
    default: "帮你搞网站 | 独立站搭建 - 不套模板，个性定制",
    template: "%s | 帮你搞网站",
  },
  description:
    "专业独立站搭建服务，不套模板、个性定制。企业展示站、外贸SOHO站、品牌官网，从0到1手写代码，让你的网站与众不同。",
  keywords: [
    "独立站搭建",
    "外贸网站建设",
    "企业官网定制",
    "不套模板",
    "网站开发",
    "SOHO建站",
    "WordPress开发",
    "前端开发",
  ],
  openGraph: {
    title: "帮你搞网站 | 独立站搭建 - 不套模板，个性定制",
    description:
      "专业独立站搭建服务，不套模板、个性定制。企业展示站、外贸SOHO站、品牌官网，从0到1手写代码。",
    type: "website",
    locale: "zh_CN",
    siteName: "帮你搞网站",
  },
  twitter: {
    card: "summary_large_image",
    title: "帮你搞网站 | 独立站搭建",
    description:
      "专业独立站搭建服务，不套模板、个性定制。企业展示站、外贸SOHO站、品牌官网。",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased noise-bg">
        <JsonLd />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
