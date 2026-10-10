import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://afiicapital.com"),
  applicationName: "AFII Capital Partners",
  title: { default: "AFII Capital Partners | Structured Finance & Infrastructure Investments", template: "%s | AFII Capital Partners" },
  description: "Structured project and trade finance, infrastructure investment advisory and cross-border financing perspectives from AFII Capital Partners.",
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/images/afii-logo.png" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "AFII Capital Partners", description: "Structured Finance & Infrastructure Investments", siteName: "AFII Capital Partners", type: "website", locale: "en_GB" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111e31" };
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
