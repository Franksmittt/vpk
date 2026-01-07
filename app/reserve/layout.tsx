import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Reserve - Vaalpenskraal Game Reserve',
  description: 'Book your conservation investment journey. Calculate your investment, select species, and reserve your luxury safari hunting experience in the Waterberg Biosphere.',
  alternates: {
    canonical: constructCanonicalUrl('/reserve'),
  },
  openGraph: {
    title: 'Reserve - Vaalpenskraal Game Reserve',
    description: 'Book your conservation investment journey. Calculate your investment and reserve your luxury safari hunting experience.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    url: constructCanonicalUrl('/reserve'),
  },
};

export default function ReserveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
