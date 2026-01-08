import Link from "next/link";
import Image from "next/image";
import { getSpeciesById, speciesDatabase } from "@/lib/speciesData";
import type { Metadata } from "next";
import { constructCanonicalUrl, getAbsoluteImageUrl } from "@/lib/seo";

// Helper to get species image path (duplicated from below for metadata)
function getSpeciesImagePathForMetadata(speciesId: string): string {
  const imageMap: { [key: string]: string } = {
    kudu: "/images/Greater Kudu.jpg",
    eland: "/images/Cape Eland.jpg",
    "livingstone-eland": "/images/Livingstone Eland.jpg",
    wildebeest: "/images/Blue Wildebeest1.jpg",
    "golden-wildebeest": "/images/Golden Wildebeest.jpg",
    "king-wildebeest": "/images/King Wildebeest.jpg",
    gemsbok: "/images/Gemsbok.png",
    springbok: "/images/springbok.png",
    impala: "/images/Impala.png",
    "dapple-impala": "/images/Dapple Impala.jpg",
    "white-flanked-impala": "/images/White-flanked Impala.jpg",
    blesbok: "/images/Blesbok.png",
    hartebeest: "/images/Red Hartebeest.png",
    bushbuck: "/images/Bushbuck.png",
    warthog: "/images/Warthog.png",
    buffalo: "/images/Cape Buffalo.png",
    lechwe: "/images/Lechwe.jpg",
  };
  return imageMap[speciesId] || "/images/Greater Kudu.png";
}

// Generate dynamic metadata for each species
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const species = getSpeciesById(id);

  if (!species) {
    return {
      title: 'Species Not Found | Vaalpenskraal Game Reserve',
      description: 'The requested species page could not be found.',
      alternates: {
        canonical: constructCanonicalUrl('/species'),
      },
    };
  }

  const title = `${species.name} (${species.nickname}) | Vaalpenskraal Game Reserve`;
  const description = `${species.description} Investment: ${species.investment}. ${species.hunting.caliber} recommended. ${species.hunting.difficulty}.`;
  const imagePath = getSpeciesImagePathForMetadata(id);
  const absoluteImageUrl = getAbsoluteImageUrl(imagePath);

  return {
    title,
    description,
    keywords: [
      species.name.toLowerCase(),
      species.scientificName,
      'safari hunting',
      'South Africa hunting',
      'game reserve',
      'Waterberg',
      species.category,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: constructCanonicalUrl(`/species/${id}`),
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: `${species.name} - ${species.nickname}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteImageUrl],
    },
    alternates: {
      canonical: constructCanonicalUrl(`/species/${id}`),
    },
  };
}

function getSpeciesImagePath(speciesId: string): string {
  const imageMap: { [key: string]: string } = {
    kudu: "/images/Greater Kudu.jpg",
    eland: "/images/Cape Eland.jpg",
    "livingstone-eland": "/images/Livingstone Eland.jpg",
    wildebeest: "/images/Blue Wildebeest1.jpg",
    "golden-wildebeest": "/images/Golden Wildebeest.jpg",
    "king-wildebeest": "/images/King Wildebeest.jpg",
    gemsbok: "/images/Gemsbok.png",
    springbok: "/images/springbok.png",
    impala: "/images/Impala.png",
    "dapple-impala": "/images/Dapple Impala.jpg",
    "white-flanked-impala": "/images/White-flanked Impala.jpg",
    blesbok: "/images/Blesbok.png",
    hartebeest: "/images/Red Hartebeest.png",
    bushbuck: "/images/Bushbuck.png",
    warthog: "/images/Warthog.png",
    buffalo: "/images/Cape Buffalo.png",
    lechwe: "/images/Lechwe.jpg",
  };
  return imageMap[speciesId] || "/images/Greater Kudu.png";
}

// Helper function to get detail image with fallback to primary species image
function getSpeciesDetailImage(speciesId: string, imageType: 'habitat' | 'tracking' | 'morphology' | 'behavior' | 'hunting' | 'track' | 'spoor'): string {
  const detailImageMap: { [key: string]: { [key: string]: string } } = {
    eland: {
      habitat: "/images/eland-habitat.jpg",
      tracking: "/images/eland-tracking.jpg",
      morphology: "/images/eland-morphology.jpg",
      behavior: "/images/eland-behavior.jpg",
      hunting: "/images/eland-hunting.jpg",
      track: "/images/eland-track2.jpg",
      spoor: "/images/eland-spoor.jpg",
    },
    kudu: {
      habitat: "/images/kudu-habitat.jpg",
      tracking: "/images/kudu-tracking.jpg",
      morphology: "/images/kudu-morphology.jpg",
      behavior: "/images/kudu-behavior.jpg",
      hunting: "/images/kudu-hunting.jpg",
      track: "/images/kudu-track.jpg",
      spoor: "/images/kudu-spoor.jpg",
    },
    wildebeest: {
      habitat: "/images/wildebeest-habitat.jpg",
      tracking: "/images/wildebeest-tracking.jpg",
      morphology: "/images/wildebeest-morphology.jpg",
      behavior: "/images/wildebeest-behavior.jpg",
      hunting: "/images/wildebeest-hunting.jpg",
      track: "/images/wildebeest-track.jpg",
      spoor: "/images/wildebeest-spoor.jpg",
    },
    gemsbok: {
      habitat: "/images/gemsbok-habitat.jpg",
      tracking: "/images/gemsbok-tracking.jpg",
      morphology: "/images/gemsbok-morphology.jpg",
      behavior: "/images/gemsbok-behavior.jpg",
      hunting: "/images/gemsbok-hunting.jpg",
      track: "/images/gemsbok-track.jpg",
      spoor: "/images/gemsbok-spoor.jpg",
    },
    springbok: {
      habitat: "/images/springbok-habitat.jpg",
      tracking: "/images/springbok-tracking.jpg",
      morphology: "/images/springbok-morphology.jpg",
      behavior: "/images/springbok-behavior.jpg",
      hunting: "/images/springbok-hunting.jpg",
      track: "/images/springbok-track.jpg",
      spoor: "/images/springbok-spoor.jpg",
    },
    buffalo: {
      habitat: "/images/buffalo-habitat.jpg",
      tracking: "/images/buffalo-tracking.jpg",
      morphology: "/images/buffalo-morphology.jpg",
      behavior: "/images/buffalo-behavior.jpg",
      hunting: "/images/buffalo-hunting.jpg",
      track: "/images/buffalo-track.jpg",
      spoor: "/images/buffalo-spoor.jpg",
    },
    "livingstone-eland": {
      habitat: "/images/livingstone-eland-habitat.jpg",
    },
    lechwe: {
      habitat: "/images/lechwe-habitat.jpg",
    },
    "golden-wildebeest": {
      habitat: "/images/golden-wildebeest-habitat.jpg",
    },
    "dapple-impala": {
      habitat: "/images/dapple-impala-habitat.jpg",
    },
    "white-flanked-impala": {
      habitat: "/images/white-flanked-impala-habitat.jpg",
    },
  };
  
  // If detail image exists, return it; otherwise fallback to primary species image
  return detailImageMap[speciesId]?.[imageType] || getSpeciesImagePath(speciesId);
}

export default async function SpeciesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const species = getSpeciesById(id);

  if (!species) {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Page Title',
      description: 'Page description',
    };
    return (
      <div className="min-h-screen page-container flex items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
        <div className="text-center">
          <h1 className="text-4xl font-heading text-cream mb-4">Species Not Found</h1>
          <Link href="/species" className="text-clay hover:text-clay/80">
            Return to Species Guide
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-transparent z-10"></div>
        <div className="relative z-20 text-center max-w-5xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-12"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-4 md:mb-6 font-light">
            {species.name}
          </h1>
          <p className="text-clay font-body text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-light">
            {species.nickname}
          </p>
          <p className="text-silver/70 font-body text-sm md:text-base italic">
            {species.scientificName}
          </p>
        </div>
      </section>

      {/* Main Image Gallery */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Primary Image */}
            <div className="md:col-span-2 relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
              <Image
                src={getSpeciesImagePath(species.id)}
                alt={species.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
            </div>
            {/* Secondary Images */}
            <div className="space-y-6">
              <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
                <Image
                  src={getSpeciesDetailImage(species.id, 'habitat')}
                  alt={`${species.name} habitat`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
                <Image
                  src={getSpeciesDetailImage(species.id, 'tracking')}
                  alt={`${species.name} tracking`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="w-24 h-px bg-clay/30 mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-heading text-cream mb-6 font-light">
                Overview
              </h2>
              <p className="text-silver/80 font-body text-lg leading-relaxed tracking-[0.02em] font-light">
                {species.description}
              </p>
              {species.conservationNarrative && (
                <div className="mt-8 p-6 border border-clay/20 bg-charcoal/30">
                  <h3 className="text-clay font-heading text-xl mb-3 font-light">Conservation Impact</h3>
                  <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                    {species.conservationNarrative}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <div className="border border-clay/20 p-6">
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Investment</h3>
                <p className="text-clay font-heading text-3xl mb-4 font-light">{species.investment}</p>
                <p className="text-silver/60 font-body text-sm font-light">
                  Conservation levy included. Direct contribution to habitat management and species preservation.
                </p>
              </div>
              <div className="border border-clay/20 p-6">
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Category</h3>
                <p className="text-clay font-body text-sm uppercase tracking-[0.1em] mb-2 font-light">
                  {species.category === "spiral" && "Spiral-Horned"}
                  {species.category === "plains" && "Plains Runners"}
                  {species.category === "desert" && "Desert Specialists"}
                  {species.category === "small" && "Small Game"}
                </p>
                <p className="text-silver/60 font-body text-sm font-light">
                  {species.biology.feedingGuild.charAt(0).toUpperCase() + species.biology.feedingGuild.slice(1)} • {species.biology.digestiveType === "ruminant" ? "Ruminant" : "Hindgut Fermenter"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biological Specifications */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-6xl">
          <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-12 font-light">
            Biological Specifications
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="border border-clay/20 p-6 md:p-8">
              <h3 className="text-cream font-heading text-xl mb-6 font-light">Physical Dimensions</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-silver/50 font-body">Weight (Male):</span>
                  <span className="text-silver/80 font-body ml-2">{species.biometrics.weight.male}</span>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Weight (Female):</span>
                  <span className="text-silver/80 font-body ml-2">{species.biometrics.weight.female}</span>
                </div>
                {typeof species.biometrics.height === 'object' ? (
                  <>
                    <div>
                      <span className="text-silver/50 font-body">Height (Male):</span>
                      <span className="text-silver/80 font-body ml-2">{species.biometrics.height.male}</span>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Height (Female):</span>
                      <span className="text-silver/80 font-body ml-2">{species.biometrics.height.female}</span>
                    </div>
                  </>
                ) : (
                  <div>
                    <span className="text-silver/50 font-body">Height:</span>
                    <span className="text-silver/80 font-body ml-2">{species.biometrics.height}</span>
                  </div>
                )}
                {species.biometrics.hornLength && (
                  <div>
                    <span className="text-silver/50 font-body">Horn Length:</span>
                    <span className="text-silver/80 font-body ml-2">{species.biometrics.hornLength}</span>
                  </div>
                )}
                {species.biometrics.topSpeed && (
                  <div>
                    <span className="text-silver/50 font-body">Top Speed:</span>
                    <span className="text-silver/80 font-body ml-2">{species.biometrics.topSpeed}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border border-clay/20 p-6 md:p-8">
              <h3 className="text-cream font-heading text-xl mb-6 font-light">Ecological Profile</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-silver/50 font-body">Digestive Type:</span>
                  <span className="text-clay font-body ml-2 capitalize">{species.biology.digestiveType === "ruminant" ? "Ruminant" : "Hindgut Fermenter"}</span>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Feeding Guild:</span>
                  <span className="text-clay font-body ml-2 capitalize">{species.biology.feedingGuild}</span>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Primary Forage:</span>
                  <span className="text-silver/80 font-body ml-2">{species.biology.primaryForage}</span>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Muzzle Shape:</span>
                  <span className="text-silver/80 font-body ml-2">{species.biology.muzzleShape}</span>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Water Dependence:</span>
                  <span className="text-silver/80 font-body ml-2">{species.biology.waterDependence}</span>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Habitat:</span>
                  <span className="text-silver/80 font-body ml-2">{species.biology.habitat}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Morphology Image */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20 mb-12">
            <Image
              src={getSpeciesDetailImage(species.id, 'morphology')}
              alt={`${species.name} morphology`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Detailed Morphology Sections */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Cranial Morphology</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.morphology.cranial}
                </p>
              </div>
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Dentition</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.morphology.dentition}
                </p>
                {species.morphology.dentalFormula && (
                  <p className="text-clay font-body text-sm mt-3 font-light">
                    Dental Formula: {species.morphology.dentalFormula}
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Skeletal Structure</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.morphology.skeletal}
                </p>
              </div>
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Hoof Morphology</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-silver/50 font-body">Dimensions:</span>
                    <span className="text-silver/80 font-body ml-2">{species.morphology.hoof.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-silver/50 font-body">Shape:</span>
                    <span className="text-silver/80 font-body ml-2">{species.morphology.hoof.shape}</span>
                  </div>
                  <div>
                    <span className="text-silver/50 font-body">Distinctive:</span>
                    <span className="text-silver/80 font-body ml-2">{species.morphology.hoof.distinctive}</span>
                  </div>
                  <div>
                    <span className="text-silver/50 font-body">Substrate:</span>
                    <span className="text-silver/80 font-body ml-2">{species.morphology.hoof.substrate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Adaptations */}
          {species.morphology.specialAdaptations.length > 0 && (
            <div className="mt-12 border border-clay/20 p-6 md:p-8">
              <h3 className="text-cream font-heading text-xl mb-6 font-light">Special Adaptations</h3>
              <ul className="space-y-3">
                {species.morphology.specialAdaptations.map((adaptation, idx) => (
                  <li key={idx} className="text-silver/80 font-body text-sm leading-relaxed font-light flex items-start">
                    <span className="text-clay mr-3">•</span>
                    <span>{adaptation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Behavior & Ecology */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-6xl">
          <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-12 font-light">
            Behavior & Ecology
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Social Structure</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.behavior.social}
                </p>
              </div>
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Feeding Behavior</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.behavior.feeding}
                </p>
              </div>
              {species.behavior.reproduction && (
                <div>
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Reproduction</h3>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    {species.behavior.reproduction}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Defense Strategy</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.behavior.defense}
                </p>
              </div>
              {species.behavior.uniqueBehaviors.length > 0 && (
                <div>
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Unique Behaviors</h3>
                  <ul className="space-y-2">
                    {species.behavior.uniqueBehaviors.map((behavior, idx) => (
                      <li key={idx} className="text-silver/80 font-body text-sm leading-relaxed font-light flex items-start">
                        <span className="text-clay mr-3">•</span>
                        <span>{behavior}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Behavior Image */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
            <Image
              src={getSpeciesDetailImage(species.id, 'behavior')}
              alt={`${species.name} behavior`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Tracking & Spoorsny */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
        <div className="container mx-auto max-w-6xl">
          <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
            Spoorsny: The Art of Tracking
          </h2>
          <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
            Master the ancient skill of reading the earth. Our professional trackers share the secrets of following these magnificent animals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Track Morphology</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-4">
                  {species.tracking.trackMorphology}
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-silver/50 font-body">Dimensions:</span>
                    <span className="text-clay font-body ml-2">{species.tracking.trackDimensions}</span>
                  </div>
                  <div>
                    <span className="text-silver/50 font-body">Gait Signature:</span>
                    <span className="text-silver/80 font-body ml-2">{species.tracking.gaitSignature}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Behavioral Spoor</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.tracking.behavioralSpoor}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">Tracking Strategy</h3>
                <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                  {species.tracking.strategy}
                </p>
              </div>
              {species.tracking.dangerLevel && (
                <div className="border border-clay/40 p-6 bg-charcoal/50">
                  <h3 className="text-clay font-heading text-lg mb-3 font-light">⚠️ Danger Level</h3>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    {species.tracking.dangerLevel}
                  </p>
                </div>
              )}
              {species.tracking.keySigns.length > 0 && (
                <div>
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Key Signs to Look For</h3>
                  <ul className="space-y-2">
                    {species.tracking.keySigns.map((sign, idx) => (
                      <li key={idx} className="text-silver/80 font-body text-sm leading-relaxed font-light flex items-start">
                        <span className="text-clay mr-3">•</span>
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Tracking Images */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
              <Image
                src={getSpeciesDetailImage(species.id, 'track')}
                alt={`${species.name} track`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
              <Image
                src={getSpeciesDetailImage(species.id, 'spoor')}
                alt={`${species.name} spoor sign`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hunting Information */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-6xl">
          <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-12 font-light">
            Hunting Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="border border-clay/20 p-6 md:p-8">
              <h3 className="text-cream font-heading text-xl mb-6 font-light">Ballistics</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-silver/50 font-body">Recommended Caliber:</span>
                  <p className="text-clay font-body mt-2">{species.hunting.caliber}</p>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Shot Placement:</span>
                  <p className="text-silver/80 font-body mt-2">{species.hunting.shotPlacement}</p>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Difficulty Level:</span>
                  <p className="text-clay font-body mt-2">{species.hunting.difficulty}</p>
                </div>
              </div>
            </div>
            <div className="border border-clay/20 p-6 md:p-8">
              <h3 className="text-cream font-heading text-xl mb-6 font-light">Trophy & Utilization</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-silver/50 font-body">Trophy:</span>
                  <p className="text-silver/80 font-body mt-2">{species.hunting.trophy}</p>
                </div>
                <div>
                  <span className="text-silver/50 font-body">Meat Quality:</span>
                  <p className="text-silver/80 font-body mt-2">{species.hunting.meat}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hunting Image */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
            <Image
              src={getSpeciesDetailImage(species.id, 'hunting')}
              alt={`${species.name} hunting`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Ballistics & Technical Guide - Wildebeest Specific */}
      {species.id === "wildebeest" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The Blue Wildebeest is famously known as the <span className="text-clay font-medium">"Poor Man's Buffalo"</span> because of its extreme toughness and ability to absorb lead. Technical precision is essential for an ethical harvest.
            </p>

            {/* Recommended Calibers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading text-cream mb-6 font-light">
                Recommended Rifles & Calibers
              </h3>
              <div className="border border-clay/20 p-6 md:p-8 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Category</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Recommended Calibers</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Why?</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">The Minimum</span>
                        </td>
                        <td className="py-4 pr-6">.270 Win</td>
                        <td className="py-4">Only recommended with premium bullets and perfect shot placement.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">The All-Rounders</span>
                        </td>
                        <td className="py-4 pr-6">.308 Win, .30-06 Springfield</td>
                        <td className="py-4">The most common rifles in SA. Reliable and effective for bushveld distances.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">The "Ideal" Choice</span>
                        </td>
                        <td className="py-4 pr-6">.300 Win Mag, 7mm Rem Mag</td>
                        <td className="py-4">Extra power and a flatter trajectory for longer shots on open plains.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">The Heavy Hitters</span>
                        </td>
                        <td className="py-4 pr-6">.338 Win Mag, 9.3x62mm, .375 H&H</td>
                        <td className="py-4">Often used to ensure the animal drops quickly; you can never have "too much gun" for a Wildebeest.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bullets and Grain Weights */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bullets & Grain Weights
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  A Wildebeest has a very thick hide and heavy bone structure. Light bullets often break apart on impact, so <span className="text-clay">weight</span> and <span className="text-clay">construction</span> are more important than speed.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Recommended Grain (Weight)</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.308 / .30-06:</strong> 165gr to <strong className="text-clay">180gr</strong> (180gr is the gold standard)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.300 Win Mag:</strong> 180gr to <strong className="text-clay">200gr</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">7mm Rem Mag:</strong> 160gr to <strong className="text-clay">175gr</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.375 H&H:</strong> 270gr to <strong className="text-clay">300gr</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bullet Type (The "Recipe")
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  You want <span className="text-clay font-medium">Premium Controlled-Expansion</span> bullets. Avoid "soft" target bullets that fragment.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic (Solid Copper)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      e.g., Barnes TTSX, Peregrine (local SA favorite). They don't break apart.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bonded Core</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      e.g., Swift A-Frame, Nosler Partition, Norma Oryx. The lead core is fused to the jacket so it stays together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Tip */}
            <div className="border border-clay/30 p-6 md:p-8 mb-12 bg-charcoal/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 border-2 border-clay/40 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-heading text-cream mb-4 font-light">
                    Expert Tip: Shot Placement
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    This is a "must-have" for your website because many hunters miss Wildebeest by aiming too high.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "Hump" Trap</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Wildebeest have a large shoulder hump and a thick mane. Hunters often aim for the "middle" of the body and end up hitting the hump (non-vital), resulting in a wounded animal that can run for kilometers.
                      </p>
                    </div>
                    
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Sweet Spot</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim <strong className="text-cream">one-third of the way up</strong> the body, directly in line with the back of the front leg.
                      </p>
                    </div>
                    
                    <div className="mt-6 p-4 bg-clay/10 border border-clay/30">
                      <p className="text-clay font-body text-base italic font-light text-center">
                        "Aim for the heart, not the hump."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Did You Know Section */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Did You Know?
                </h3>
                <ul className="space-y-4 text-silver/80 font-body text-sm leading-relaxed font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Blue Wildebeest</strong> is significantly larger and tougher than the Black Wildebeest.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Adrenaline:</strong> Once a Wildebeest's adrenaline is up, they become incredibly hard to bring down. A clean first shot is vital.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Ethical Hunting:</strong> In South Africa, the .30-06 is widely considered the most "versatile" rifle for a first-time plains game hunter.</span>
                  </li>
                </ul>
              </div>

              {/* Image Placeholder for Ballistics Diagram */}
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Shot Placement Diagram
                </h3>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
                  <Image
                    src="/images/wildebeest-shot-placement.jpg"
                    alt="Wildebeest shot placement diagram"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Ballistics Technical Image */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
              <Image
                src="/images/wildebeest-ballistics.jpg"
                alt="Wildebeest ballistics and technical guide"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-cream mb-6 font-light">
            Ready to Experience {species.name}?
          </h2>
          <p className="text-silver/70 font-body text-base md:text-lg mb-10 leading-relaxed">
            Our professional guides combine deep biological knowledge with master-level tracking skills to ensure an ethical, respectful hunt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              href="/reserve"
              className="px-10 md:px-12 py-4 md:py-5 bg-clay text-charcoal font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/90 transition-all duration-500 font-light"
            >
              Request Quote
            </Link>
            <Link
              href="/species"
              className="px-10 md:px-12 py-4 md:py-5 border border-clay/50 text-clay font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light"
            >
              Explore Other Species
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for all species
export async function generateStaticParams() {
  return speciesDatabase.map((species) => ({
    id: species.id,
  }));
}

export const dynamicParams = false;

