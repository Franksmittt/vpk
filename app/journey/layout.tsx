import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'The Journey - Vaalpenskraal Game Reserve',
  description: 'Your complete journey from arrival to departure. Experience luxury accommodations, world-class cuisine, and immersive conservation activities in the Waterberg Biosphere.',
  alternates: {
    canonical: constructCanonicalUrl('/journey'),
  },
  openGraph: {
    title: 'The Journey - Vaalpenskraal Game Reserve',
    description: 'Your complete journey from arrival to departure. Experience luxury accommodations, world-class cuisine, and immersive conservation activities.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    url: constructCanonicalUrl('/journey'),
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
