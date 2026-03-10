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

const SITE_URL = "https://www.drbipl.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    "drbipl",
  ],
  authors: [{ name: "DRB Infrastructure Pvt. Ltd." }],
  creator: "DRB Infrastructure Pvt. Ltd.",
  publisher: "DRB Infrastructure Pvt. Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "DRB Infrastructure",
    title: "DRB Infrastructure Pvt. Ltd. | Roads, EPC & Infrastructure",
    description:
      "Leading Indian infrastructure & road construction company. High-altitude roads, highways, irrigation, EPC. No job too colossal. No job too minute.",
    images: [
      {
        url: "/images/logo-white.png",
        width: 1200,
        height: 630,
        alt: "DRB Infrastructure - Roads, EPC & Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRB Infrastructure Pvt. Ltd. | Roads, EPC & Infrastructure",
    description:
      "Leading Indian infrastructure & road construction company. High-altitude roads, highways, irrigation, EPC.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/images/logo-white.png",
    apple: "/images/logo-white.png",
  },
  verification: {
    // Add your Google Search Console verification code when you have it:
    // google: "your-google-verification-code",
  },
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
    url: SITE_URL,
    foundingDate: "2008",
    logo: `${SITE_URL}/images/logo-white.png`,
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
