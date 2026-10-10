import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "AFII Capital Partners | Structured Finance & Infrastructure Investments",
  description: "AFII Capital Partners specialises in structured project and trade finance solutions across infrastructure, industrial, financial services and agribusiness, with cross-border advisory experience.",
  alternates: { canonical: "/" },
  openGraph: { title: "AFII Capital Partners | Structured Finance & Infrastructure Investments", description: "Structured project and trade finance solutions across infrastructure, industrial, financial services and agribusiness.", url: "https://afiicapital.com/", siteName: "AFII Capital Partners", type: "website", images: [{ url: "/images/hero-transit.jpg", width: 1600, height: 900, alt: "Infrastructure and transport" }] },
  twitter: { card: "summary_large_image", title: "AFII Capital Partners", description: "Structured Finance & Infrastructure Investments", images: ["/images/hero-transit.jpg"] },
};

export default function Home() { return <HomePage />; }
