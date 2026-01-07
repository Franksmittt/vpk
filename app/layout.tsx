import type { Metadata } from "next";
import LanguageProvider from "@/lib/i18n/LanguageProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBaseUrl, constructCanonicalUrl } from "@/lib/seo";
import "./globals.css";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vaalpenskraal Game Reserve | Luxury Safari Hunting in South Africa',
    template: '%s | Vaalpenskraal Game Reserve',
  },
  description: 'Luxury safari hunting experience in the Waterberg Biosphere. Fair chase hunting, conservation investment, and world-class accommodations in South Africa.',
  keywords: ['safari hunting', 'South Africa hunting', 'game reserve', 'Waterberg', 'luxury safari', 'conservation hunting', 'fair chase', 'Thabazimbi'],
  alternates: {
    canonical: constructCanonicalUrl('/'),
  },
  openGraph: {
    title: 'Vaalpenskraal Game Reserve | Luxury Safari Hunting in South Africa',
    description: 'Luxury safari hunting experience in the Waterberg Biosphere. Fair chase hunting, conservation investment, and world-class accommodations.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    locale: 'en_US',
    url: constructCanonicalUrl('/'),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaalpenskraal Game Reserve',
    description: 'Luxury safari hunting experience in the Waterberg Biosphere',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
