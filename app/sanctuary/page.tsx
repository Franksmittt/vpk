import Link from "next/link";
import type { Metadata } from "next";
import { constructCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: 'Sanctuary & Accommodations | Vaalpenskraal Game Reserve',
  description: 'Experience luxury lodge accommodations in the Waterberg. Game viewing, wildlife, and premium bushveld hospitality at Vaalpenskraal.',
  openGraph: {
    title: 'Sanctuary & Accommodations | Vaalpenskraal Game Reserve',
    description: 'Experience luxury lodge accommodations in the Waterberg. Game viewing, wildlife, and premium bushveld hospitality at Vaalpenskraal.',
    type: 'website',
    url: constructCanonicalUrl('/sanctuary'),
  },
  alternates: {
    canonical: constructCanonicalUrl('/sanctuary'),
  },
}

export default function SanctuaryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Sanctuary & Accommodations | Vaalpenskraal Game Reserve',
    description: 'Experience luxury lodge accommodations in the Waterberg. Game viewing, wildlife, and premium bushveld hospitality at Vaalpenskraal.',
    url: constructCanonicalUrl('/sanctuary'),
    mainEntity: {
      '@type': 'LodgingBusiness',
      name: 'Vaalpenskraal Game Reserve',
      description: 'Luxury lodge accommodations in the Waterberg Biosphere with conservation-led activities.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Thabazimbi',
        addressRegion: 'Limpopo',
        addressCountry: 'ZA',
      },
    },
  };
  return (
    <div className="min-h-screen page-container">
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
    />
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-transparent z-10"></div>
        <div className="relative z-20 text-center max-w-5xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-12"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light leading-tight">
            More Than
            <br />
            A Hunt
          </h1>
          <p className="text-silver/70 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-light px-4">
            Overcome the "Spouse Veto" via Active Participation
          </p>
          <p className="text-silver/50 font-body text-[10px] uppercase tracking-[0.15em] font-light px-4 mt-3">
            A SANCTUARY OF SILENCE • CONSERVATION INVESTMENT • EXCLUSIVE EXPERIENCE
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 lg:py-32 space-y-12 md:space-y-16">
        {/* Section 1: The Reserve Experience */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 md:space-y-8">
              <div className="w-24 h-px bg-clay/30"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light leading-tight">
                The Reserve
                <br />
                Experience
              </h2>
              <div className="space-y-6 pt-8">
                <p className="editorial-text">
                  Vaalpenskraal is more than a place to stay. It’s your base in the Waterberg. Spend your days in the bush and your evenings around the fire. Game viewing, starry skies, and the peace of the bushveld are all part of the experience.
                </p>
                <Link
                  href="/reserve"
                  className="inline-block mt-8 px-10 py-4 border border-clay/50 text-clay font-body text-xs uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            <div className="h-[500px] border border-clay/20 bg-gradient-to-br from-clay/10 via-soil/10 to-charcoal/50 flex items-center justify-center" aria-label="Image: Reserve and bushveld experience">
              <div className="text-center">
                <div className="w-16 h-16 border border-clay/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-clay/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Activities */}
        <section>
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Activities for
              <br />
              Non-Hunters
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marakele National Park",
                desc: "Visit the vulture colony, one of the largest in Southern Africa. Witness the circle of life from a different perspective.",
              },
              {
                title: "In-Room Spa",
                desc: "Rejuvenate with treatments inspired by the Waterberg's natural elements. Relax while your partner hunts.",
              },
              {
                title: "Star Gazing",
                desc: "Experience the Southern Hemisphere's night sky. No light pollution, just the cosmos above the Iron Mountain.",
              },
            ].map((activity, idx) => (
              <div
                key={idx}
                className="luxury-card border border-clay/20 overflow-hidden hover:border-clay/40 transition-all duration-500"
              >
                <div className="h-[200px] md:h-[220px] bg-gradient-to-br from-clay/10 via-soil/10 to-charcoal/50 border-b border-clay/10 flex items-center justify-center" aria-label={`Image: ${activity.title}`}>
                  <div className="w-12 h-12 border border-clay/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-clay/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-16 h-px bg-clay/30 mb-6"></div>
                  <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                    {activity.title}
                  </h3>
                  <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                    {activity.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Accommodation */}
        <section>
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Accommodation
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mt-6 leading-relaxed tracking-[0.02em] font-light max-w-3xl">
              Experience the authentic "Bosveld" spirit in comfort. Our lodge offers four chalets in Thabazimbi, identical in design, each a relaxing retreat after a day in the bush.
            </p>
          </div>
          
          {/* The Four Chalets */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { name: "Chalet 1", photographed: true, capacity: 5, features: "En-suite bathroom" },
              { name: "Chalet 2", photographed: true, capacity: 5, features: "En-suite bathroom" },
              { name: "Chalet 3", photographed: false, capacity: 5, features: "En-suite bathroom" },
              { name: "Chalet 4", photographed: false, capacity: 5, features: "En-suite bathroom" },
            ].map((chalet, idx) => (
              <div
                key={idx}
                className="luxury-card border border-clay/20 p-6 md:p-8 hover:border-clay/40 transition-all duration-500"
              >
                <div className="w-16 h-px bg-clay/30 mb-4"></div>
                <h3 className="text-2xl md:text-3xl font-heading text-cream mb-2 font-light">
                  {chalet.name}
                </h3>
                {chalet.photographed && (
                  <p className="text-clay/70 font-body text-sm mb-4 tracking-[0.1em] font-light uppercase">
                    Photographed
                  </p>
                )}
                <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mb-2">
                  Capacity: Sleeps <span className="text-clay">{chalet.capacity}</span>
                </p>
                <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                  Features: {chalet.features}
                </p>
                <div className="h-[200px] md:h-[250px] mt-6 bg-gradient-to-br from-clay/10 via-soil/10 to-charcoal/50 border border-clay/10 flex items-center justify-center" aria-label={`Image: ${chalet.name}`}>
                  <div className="w-12 h-12 border border-clay/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-clay/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chalet Features (all identical) */}
          <div className="border border-clay/20 p-8 md:p-12 bg-charcoal/30 mb-16">
            <h3 className="text-2xl md:text-3xl font-heading text-cream mb-8 font-light">
              Chalet Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">Capacity</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  Each chalet sleeps <span className="text-clay">5 people</span>
                </p>
              </div>
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">En-suite</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  Private en-suite bathroom in every chalet
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Communal & Entertainment Areas */}
        <section>
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Communal &amp; Entertainment
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mt-6 leading-relaxed tracking-[0.02em] font-light max-w-3xl">
              Beyond your chalet, Vaalpenskraal offers shared spaces to relax and socialise.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pool Area", desc: "Swimming pool with a Lapa situated right next to it." },
              { title: "Indoor Bar & Social Area", desc: "Bar and social area with an adjacent kitchen." },
              { title: "Boma", desc: "Outdoor fire pit area outside the bar under the trees." },
            ].map((facility, idx) => (
              <div
                key={idx}
                className="luxury-card border border-clay/20 overflow-hidden hover:border-clay/40 transition-all duration-500"
              >
                <div className="h-[200px] md:h-[220px] bg-gradient-to-br from-clay/10 via-soil/10 to-charcoal/50 border-b border-clay/10 flex items-center justify-center" aria-label={`Image: ${facility.title}`}>
                  <div className="w-12 h-12 border border-clay/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-clay/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-16 h-px bg-clay/30 mb-6"></div>
                  <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                    {facility.title}
                  </h3>
                  <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                    {facility.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Hunter & Game Facilities */}
        <section>
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Hunter & Game
              <br />
              Facilities
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mt-6 leading-relaxed tracking-[0.02em] font-light max-w-3xl">
              We offer full hunting facilities for the serious hunter, ensuring your harvest is handled professionally on-site.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Processing", subtitle: "Fully equipped", highlight: "Slaughter Room", note: "(Slagkamer)", desc: null },
              { title: "Storage", subtitle: "On-site", highlight: "Cold Room", note: "(Koelkamer)", desc: null },
              { title: "Game Variety", subtitle: null, highlight: null, note: null, desc: "The farm hosts a variety of game, with successful hunts recorded for species including Gemsbok and other plains game." },
            ].map((facility, idx) => (
              <div
                key={idx}
                className="luxury-card border border-clay/20 overflow-hidden hover:border-clay/40 transition-all duration-500"
              >
                <div className="h-[200px] md:h-[220px] bg-gradient-to-br from-clay/10 via-soil/10 to-charcoal/50 border-b border-clay/10 flex items-center justify-center" aria-label={`Image: ${facility.title}`}>
                  <div className="w-12 h-12 border border-clay/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-clay/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-8">
                  <div className="w-16 h-px bg-clay/30 mb-6"></div>
                  <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                    {facility.title}
                  </h3>
                  {facility.subtitle && (
                    <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mb-2">
                      {facility.subtitle}
                    </p>
                  )}
                  {facility.highlight && (
                    <>
                      <p className="text-clay font-body text-lg font-light">
                        {facility.highlight}
                      </p>
                      {facility.note && (
                        <p className="text-silver/50 font-body text-xs mt-2 tracking-[0.05em] font-light italic">
                          {facility.note}
                        </p>
                      )}
                    </>
                  )}
                  {facility.desc && (
                    <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mt-2">
                      {facility.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
