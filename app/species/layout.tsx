import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Species - Vaalpenskraal Game Reserve',
  description: 'Browse available hunting species and conservation investments. Comprehensive guides to Greater Kudu, Cape Eland, Blue Wildebeest, and other premium game species in South Africa.',
  alternates: {
    canonical: constructCanonicalUrl('/species'),
  },
  openGraph: {
    title: 'Species - Vaalpenskraal Game Reserve',
    description: 'Browse available hunting species and conservation investments. Comprehensive guides to premium game species in South Africa.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    url: constructCanonicalUrl('/species'),
  },
};

export default function SpeciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
