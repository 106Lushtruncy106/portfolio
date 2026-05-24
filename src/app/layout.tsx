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
    default: "Portfolio | Independent Web Developer",
    template: "%s | Portfolio",
  },
  description:
    "Custom website development services. No templates, unique designs tailored to your brand.",
  keywords: [
    "web development",
    "custom website",
    "portfolio",
    "independent developer",
    "Next.js developer",
    "freelance",
    "web design",
  ],
  openGraph: {
    title: "Portfolio | Independent Web Developer",
    description:
      "Custom website development services. No templates, unique designs tailored to your brand.",
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Independent Web Developer",
    description:
      "Custom website development services. No templates, unique designs tailored to your brand.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased noise-bg">
        <JsonLd />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
