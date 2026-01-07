import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Impact - Vaalpenskraal Game Reserve',
  description: 'Conservation impact, metrics, and transparency. See how your hunting investment directly supports wildlife conservation, habitat restoration, and community development in the Waterberg.',
  alternates: {
    canonical: constructCanonicalUrl('/impact'),
  },
  openGraph: {
    title: 'Impact - Vaalpenskraal Game Reserve',
    description: 'Conservation impact, metrics, and transparency. See how your hunting investment directly supports wildlife conservation and habitat restoration.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    url: constructCanonicalUrl('/impact'),
  },
};

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
