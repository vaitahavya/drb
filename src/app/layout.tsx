import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DRB Infrastructure Pvt. Ltd. | Roads, EPC & Infrastructure",
    template: "%s | DRB Infrastructure",
  },
  description:
    "Leading Indian infrastructure & road construction company. Planning, execution & maintenance. High-altitude roads, highways, irrigation, EPC. No job too colossal. No job too minute.",
  keywords: [
    "DRB Infrastructure",
    "road construction India",
    "EPC",
    "highways",
    "NHAI",
    "NHIDCL",
    "BRO",
    "infrastructure",
  ],
  openGraph: {
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DRB Infrastructure Pvt. Ltd.",
    description: "Indian infrastructure & road construction company. Planning, execution & maintenance. High-altitude roads, highways, irrigation, EPC.",
    url: "https://drbinfrastructure.com",
    foundingDate: "2008",
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
