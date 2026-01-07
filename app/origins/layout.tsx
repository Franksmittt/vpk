import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Origins - Vaalpenskraal Game Reserve',
  description: 'The geological story of Thabazimbi and the Iron Mountain. Discover the ancient history, unique geology, and rewilding journey of the Waterberg Biosphere.',
  alternates: {
    canonical: constructCanonicalUrl('/origins'),
  },
  openGraph: {
    title: 'Origins - Vaalpenskraal Game Reserve',
    description: 'The geological story of Thabazimbi and the Iron Mountain. Discover the ancient history and rewilding journey of the Waterberg.',
    type: 'website',
    siteName: 'Vaalpenskraal Game Reserve',
    url: constructCanonicalUrl('/origins'),
  },
};

export default function OriginsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
