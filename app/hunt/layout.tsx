import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'The Hunt - Vaalpenskraal Game Reserve',
  description: 'Fair chase hunting and conservation investment opportunities. Experience ethical hunting with ballistic precision and world-class trophy quality in the Waterberg Biosphere.',
  alternates: {
    canonical: constructCanonicalUrl('/hunt'),
  },
  openGraph: {
    title: 'The Hunt - Vaalpenskraal Game Reserve',
    description: 'Fair chase hunting and conservation investment opportunities. Experience ethical hunting with ballistic precision and world-class trophy quality.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    url: constructCanonicalUrl('/hunt'),
  },
};

export default function HuntLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
