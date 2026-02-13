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
    impala: {
      habitat: "/images/impala-habitat.jpg",
      tracking: "/images/impala-tracking.jpg",
      morphology: "/images/impala-morphology.jpg",
      behavior: "/images/impala-behavior.jpg",
      hunting: "/images/impala-hunting.jpg",
      track: "/images/impala-track.jpg",
      spoor: "/images/impala-spoor.jpg",
    },
    blesbok: {
      habitat: "/images/blesbok-habitat.jpg",
      tracking: "/images/blesbok-tracking.jpg",
      morphology: "/images/blesbok-morphology.jpg",
      behavior: "/images/blesbok-behavior.jpg",
      hunting: "/images/blesbok-hunting.jpg",
      track: "/images/blesbok-track.jpg",
      spoor: "/images/blesbok-spoor.jpg",
    },
    hartebeest: {
      habitat: "/images/hartebeest-habitat.jpg",
      tracking: "/images/hartebeest-tracking.jpg",
      morphology: "/images/hartebeest-morphology.jpg",
      behavior: "/images/hartebeest-behavior.jpg",
      hunting: "/images/hartebeest-hunting.jpg",
      track: "/images/hartebeest-track.jpg",
      spoor: "/images/hartebeest-spoor.jpg",
    },
    bushbuck: {
      habitat: "/images/bushbuck-habitat.jpg",
      tracking: "/images/bushbuck-tracking.jpg",
      morphology: "/images/bushbuck-morphology.jpg",
      behavior: "/images/bushbuck-behavior.jpg",
      hunting: "/images/bushbuck-hunting.jpg",
      track: "/images/bushbuck-track.jpg",
      spoor: "/images/bushbuck-spoor.jpg",
    },
    warthog: {
      habitat: "/images/warthog-habitat.jpg",
      tracking: "/images/warthog-tracking.jpg",
      morphology: "/images/warthog-morphology.jpg",
      behavior: "/images/warthog-behavior.jpg",
      hunting: "/images/warthog-hunting.jpg",
      track: "/images/warthog-track.jpg",
      spoor: "/images/warthog-spoor.jpg",
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
      tracking: "/images/lechwe-tracking.jpg",
      morphology: "/images/lechwe-morphology.jpg",
      behavior: "/images/lechwe-behavior.jpg",
      hunting: "/images/lechwe-hunting.jpg",
      track: "/images/lechwe-track.jpg",
      spoor: "/images/lechwe-spoor.jpg",
    },
    "golden-wildebeest": {
      habitat: "/images/golden-wildebeest-habitat.jpg",
      tracking: "/images/golden-wildebeest-tracking.jpg",
      morphology: "/images/golden-wildebeest-morphology.jpg",
      behavior: "/images/golden-wildebeest-behavior.jpg",
      hunting: "/images/golden-wildebeest-hunting.jpg",
      track: "/images/golden-wildebeest-track.jpg",
      spoor: "/images/golden-wildebeest-spoor.jpg",
    },
    "king-wildebeest": {
      habitat: "/images/king-wildebeest-habitat.jpg",
      tracking: "/images/king-wildebeest-tracking.jpg",
      morphology: "/images/king-wildebeest-morphology.jpg",
      behavior: "/images/king-wildebeest-behavior.jpg",
      hunting: "/images/king-wildebeest-hunting.jpg",
      track: "/images/king-wildebeest-track.jpg",
      spoor: "/images/king-wildebeest-spoor.jpg",
    },
    "dapple-impala": {
      habitat: "/images/dapple-impala-habitat.jpg",
      tracking: "/images/dapple-impala-tracking.jpg",
      morphology: "/images/dapple-impala-morphology.jpg",
      behavior: "/images/dapple-impala-behavior.jpg",
      hunting: "/images/dapple-impala-hunting.jpg",
      track: "/images/dapple-impala-track.jpg",
      spoor: "/images/dapple-impala-spoor.jpg",
    },
    "white-flanked-impala": {
      habitat: "/images/white-flanked-impala-habitat.jpg",
      tracking: "/images/white-flanked-impala-tracking.jpg",
      morphology: "/images/white-flanked-impala-morphology.jpg",
      behavior: "/images/white-flanked-impala-behavior.jpg",
      hunting: "/images/white-flanked-impala-hunting.jpg",
      track: "/images/white-flanked-impala-track.jpg",
      spoor: "/images/white-flanked-impala-spoor.jpg",
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

      {/* Ballistics & Technical Guide - Livingstone Eland Specific */}
      {species.id === "livingstone-eland" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The Livingstone Eland, known as the <span className="text-clay font-medium">"Blue Bull"</span>, is Africa's largest antelope. With bulls weighing 700-1,000 kg, selecting the appropriate firearm and ammunition is critical for an ethical, one-shot harvest.
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
                          <span className="text-clay font-medium">Minimum</span>
                        </td>
                        <td className="py-4 pr-6">.270 Win, 6.5mm Creedmoor</td>
                        <td className="py-4">Only for smaller cows with perfect shot placement. Not recommended for large bulls.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Standard</span>
                        </td>
                        <td className="py-4 pr-6">.30-06 Springfield, .308 Win, 7mm Rem Mag</td>
                        <td className="py-4">Suitable for all elands with heavy, bonded bullets. Reliable and effective for bushveld distances.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Optimal</span>
                        </td>
                        <td className="py-4 pr-6">.300 Win Mag, .338 Win Mag</td>
                        <td className="py-4">Preferred for large bulls (700-1000 kg) to ensure exit wounds and clear blood trails. Extra power for deep penetration.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Dangerous Game</span>
                        </td>
                        <td className="py-4 pr-6">.375 H&H Magnum, .416 Rigby</td>
                        <td className="py-4">Excellent for thick brush where shots may be taken at shorter ranges. Ensures maximum penetration through heavy bone structure.</td>
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
                  Eland have heavy bone structures and thick muscles that can cause standard soft-point bullets to fragment prematurely. <span className="text-clay">Weight</span> and <span className="text-clay">construction</span> are critical.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Recommended Grain (Weight)</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.308 / .30-06:</strong> <strong className="text-clay">180gr to 220gr</strong> (heavy bonded bullets essential)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.300 Win Mag:</strong> <strong className="text-clay">180gr to 200gr</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.338 Win Mag:</strong> <strong className="text-clay">225gr to 250gr</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.375 H&H:</strong> <strong className="text-clay">270gr to 300gr</strong></span>
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
                  You want <span className="text-clay font-medium">Premium Bonded or Monolithic</span> bullets. The choice of bullet is arguably more important than the caliber itself.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bonded Bullets (Recommended)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Hornady CX, Swift A-Frame, Nosler Partition. Designed for controlled expansion and high weight retention. Ensure bullet reaches vital organs even if encountering rib or shoulder bone.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic (Solid Copper)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Barnes TTSX, Peregrine. Non-lead option that stays together and punches through. Leaves smaller wound cavity in meat while ensuring deep penetration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    The vital organs of an eland are located slightly further forward than those of North American big game, situated primarily between the shoulders.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Broadside Shot (Preferred)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Provides the largest target area for heart and lungs. Preferred for both novice and experienced hunters.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• <strong className="text-cream">Vertical Line:</strong> Align crosshairs with back of front leg</li>
                        <li>• <strong className="text-cream">Horizontal Line:</strong> Aim one-third (1/3) of the way up from bottom of chest cavity</li>
                        <li>• <strong className="text-cream">Result:</strong> Strikes top of heart and center of lungs, often breaking opposite shoulder</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Challenging Angles</h4>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• <strong className="text-cream">Quartering-Away:</strong> Aim for opposite shoulder. Bullet enters behind ribs, passes through heart-lung area</li>
                        <li>• <strong className="text-cream">Quartering-Toward:</strong> Aim slightly forward of shoulder to reach vitals. Higher risk, not recommended for archery</li>
                        <li>• <strong className="text-cream">Frontal:</strong> Center of chest at base of neck. Requires high-velocity rifle and deep penetration bullet</li>
                        <li>• <strong className="text-clay">Avoid:</strong> Brain/neck shots due to thick neck muscles and small brain size</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Safari Club International (SCI)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 77-79 points
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Sum of the length of both horns and their circumferences at the base.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Rowland Ward (RW)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 35 inches
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Length of the longest horn measured along the spiral.
                    </p>
                  </div>
                  <div className="border-t border-clay/20 pt-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">World Record:</strong> 44 2/8 inches (Rowland Ward)
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-2">
                      <strong className="text-cream">Good Trophy:</strong> 30-34 inches
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging for Maturity
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Look for these indicators of a mature, dominant bull:
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Horn Mass:</strong> Thick, heavily-ridged horns. Tips may be worn down ("broomed") from years of use, but mass at base indicates old, mature animal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Mop:</strong> Dark, prominent mop of hair on forehead - key indicator of social dominance and maturity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Face Mask:</strong> Dark face mask indicates dominant bull</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The "Blue" Coat:</strong> Greyish-blue tint is the most reliable indicator of an old "Blue Bull" - caused by hair thinning allowing dark skin to show through</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Essential Field Gear */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Essential Field Gear
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Optics</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    High-quality 8x42 or 10x42 binoculars essential for spotting game and judging trophy quality from distance. Laser rangefinder vital - animal's large size often leads hunters to underestimate distance.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Shooting Sticks</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Essential for stability during standing shots in the bush. Critical for precision on such a large target.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Clothing</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Breathable, moisture-wicking fabrics in earth tones (khaki or olive). Fabrics must be silent - avoid rustling synthetic materials that can alert the exceptionally alert eland.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Footwear</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Well-broken-in hunting boots with good ankle support. Flat-soled shoes often preferred for final stalk as they make less noise. Eland are exceptionally alert - single twig crack can cause immediate departure.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Tactics */}
            <div className="border border-clay/30 p-6 md:p-8 bg-charcoal/50 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Hunting Tactics: Walk & Stalk
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                The most common and respected method. Eland are "great wanderers" - a hunt typically requires minimum 3-5 days.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Patience & Persistence</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Hunt often requires 3-5 days minimum. Must be prepared to walk several miles daily to catch up with moving herd. Tracking is challenge of endurance rather than visual acuity.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Stealth</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Elands are exceptionally alert. Crack of single twig or shift in wind can cause herd to depart at trot they can maintain indefinitely. Easier to stalk solitary "Blue Bull" than approach nursery herd with dozens of pairs of eyes.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Bow Hunting</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Possible but requires extreme patience and precision. Given thick hide and massive muscle mass, must wait for perfect broadside shot at close range (under 30 yards) and utilize heavy arrows with high kinetic energy.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Location</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Typically begins with location of fresh tracks at waterhole or across road, followed by persistent pursuit on foot. Assess fatigue by analyzing track depth and drag marks.
                  </p>
                </div>
              </div>
            </div>

            {/* Meat Processing & Culinary */}
            <div className="border border-clay/20 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Gastronomy: Meat Processing & Quality
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Eland meat is widely considered the finest of all African venison, frequently compared to high-quality beef but with lower fat content and more complex flavor profile.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Nutritional Composition</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">Fat:</span>
                        <span className="text-clay font-body font-medium">1.9g/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">Protein:</span>
                        <span className="text-clay font-body font-medium">23g/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">Calories:</span>
                        <span className="text-clay font-body font-medium">125 kcal/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">PUFA:</span>
                        <span className="text-clay font-body font-medium">25.1g/100g fat</span>
                      </div>
                    </div>
                    <p className="text-silver/70 font-body text-xs mt-4 leading-relaxed font-light">
                      Higher proportion of polyunsaturated fatty acids (PUFAs) including omega-3 and omega-6 than beef. Low fat content means careful preparation required to prevent drying.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Carcass Yield</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-4">
                    Massive yield of high-quality meat: <strong className="text-clay">250-400kg dressed meat</strong> from a mature bull. Butchery similar to bovine.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    In semi-intensive management, males reach slaughter weight of ~414 kg at three years, though wild bulls continue gaining mass throughout first decade.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Meat Cuts & Culinary Uses</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border border-clay/10 p-4 bg-charcoal/30">
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Fillet & Loin</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Most tender cuts, located along back. Ideal for steaks, stir-fry, or pavés. Cook quickly at high heat, serve medium-rare to maintain tenderness.
                    </p>
                  </div>
                  <div className="border border-clay/10 p-4 bg-charcoal/30">
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Silverside & Topside</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Large, lean cuts from hindquarters. Frequently used for making biltong or slow-cooked to break down connective tissue.
                    </p>
                  </div>
                  <div className="border border-clay/10 p-4 bg-charcoal/30">
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Shin & Neck</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Tougher cuts with higher collagen content. Perfect for slow-cooking in stews or potjies, where collagen melts into rich sauce.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Traditional South African Preparations</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Biltong</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Slices marinated in vinegar (malt or red wine) and spiced with salt, crushed coriander seeds, and black pepper before air-drying. Eland biltong prized for rich, gamey flavor and satisfying texture.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Droëwors</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Dried sausage based on boerewors recipe. Essential to avoid pork fat (can go rancid during drying) - use high-quality beef fat instead. Trimmings used for lean mince or droëwors. For juicy burgers/sausages, add extra beef fat (typically 20% fat ratio).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Lechwe Specific */}
      {species.id === "lechwe" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Hunting the Southern Lechwe is widely considered one of the most unique and challenging experiences in African hunting tradition. It requires a departure from typical bushveld stalk, moving into the <span className="text-clay font-medium">"shimmering"</span> world of floodplains where visibility is high but cover is scarce.
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
                          <span className="text-clay font-medium">Minimum</span>
                        </td>
                        <td className="py-4 pr-6">.270 Winchester</td>
                        <td className="py-4">Provides flat trajectory needed for long-range shots (150-300 yards) with manageable recoil. Generally cited as minimum for ethical lechwe hunt.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Versatile</span>
                        </td>
                        <td className="py-4 pr-6">.308 Winchester</td>
                        <td className="py-4">Excellent, versatile choice performing well with 150-180 grain bullets. Better wind resistance than .270.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Most Popular</span>
                        </td>
                        <td className="py-4 pr-6">.30-06 Springfield</td>
                        <td className="py-4">Perhaps the most popular choice for African plains game. Wide selection of heavy, high-BC bullets that handle open-country conditions and wind.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Ideal</span>
                        </td>
                        <td className="py-4 pr-6">7mm Rem Mag / .300 Win Mag</td>
                        <td className="py-4">Ideal for lechwe specialist. High velocity ensures flat trajectory vital when range estimation might be slightly off due to featureless marsh terrain. Excellent wind resistance.</td>
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
                  In wetland environment, bullet may need to pass through thick grass or even water droplets before reaching target. <span className="text-clay">Premium, controlled-expansion bullets</span> essential for deep penetration and clean kill.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Recommended Grain (Weight)</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.270 Win:</strong> <strong className="text-clay">130gr to 150gr</strong> (200 yard range)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.308 Win:</strong> <strong className="text-clay">150gr to 165gr</strong> (220 yard range)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.30-06:</strong> <strong className="text-clay">165gr to 180gr</strong> (250 yard range)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">7mm Rem Mag:</strong> <strong className="text-clay">150gr to 175gr</strong> (300 yard range)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">.300 Win Mag:</strong> <strong className="text-clay">180gr to 200gr</strong> (350 yard range)</span>
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
                  Bullet selection is as critical as caliber. Must ensure deep penetration through potentially wet grass or water droplets.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic Bullets (Recommended)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Barnes TTSX, Peregrine. Favored for ability to retain weight and penetrate through heavy bone and muscle without fragmenting. Essential when bullet may pass through vegetation or water.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bonded-Core Bullets</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Swift A-Frame, Nosler AccuBond. Provide reliable expansion while maintaining structural integrity needed to reach vitals of large ram through wetland environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    The lechwe's unique posture (rear end higher than shoulders) can lead to errors in shot placement if the hunter is used to more level antelopes.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Heart-Lung Shot (Broadside - Preferred)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Target area is lower third of body, directly behind front shoulder. Because lechwe has deep chest, this provides generous vital zone.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• Aiming slightly lower than for impala often necessary</li>
                        <li>• Account for downward slope of spine from hindquarters to neck</li>
                        <li>• Provides rapid collapse of respiratory system</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Quartering-Away Shot (Highly Effective)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Hunter should aim for bullet to enter behind ribs and travel forward into opposite shoulder, passing through liver and lungs.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• Avoids heavy shoulder bone on entry</li>
                        <li>• Ensures rapid collapse of respiratory system</li>
                        <li>• Excellent angle for lechwe</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Avoidance Zones</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        <strong className="text-clay">Head and neck shots strongly discouraged</strong> - small target size, risk of damaging trophy cape. Wounded lechwe escaping into deep reed bed or swamp almost impossible to track and recover. First shot's accuracy paramount for ethical reasons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Safari Club International (SCI)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 58 points (Rifle), 52 points (Bow)
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Method 7: Length of each horn along front curve from base to tip + circumference of each horn at base. 60-day drying period required for top 20 entry.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Rowland Ward</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 26 inches (Red Lechwe)
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Length of longest horn. 30-day drying period required before official measurement by certified measurer.
                    </p>
                  </div>
                  <div className="border-t border-clay/20 pt-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-cream">Trophy Class:</strong> 26+ inches (gold medal)
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-2">
                      <strong className="text-cream">Exceptional:</strong> 30+ inches
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging Trophy Rams
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Identifying a trophy lechwe ram requires patience and high-quality optics. Look for these indicators:
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Length & Mass:</strong> Mature ram has horns thick at base with heavy, prominent rings extending at least halfway up length</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Horn Shape:</strong> Wide, elegant 'S' curve. Symmetrical horns preferred, though older rams may show wear or 'brooming' at tips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Body Indicators:</strong> Deep, muscular chest and thick neck indicate mature ram</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Subspecies Markings:</strong> In Black and Kafue subspecies, darkening of coat and shoulder patches is primary indicator of age and trophy status</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Specialized Gear */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Specialized Gear for the Wetland Hunter
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                Hunting in the "wet" requires gear that would be out of place on standard savanna safari. Water and mud are primary environmental stressors.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Footwear & Waders</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Traditional leather boots inadequate - saturate quickly, provide poor traction in deep mud. High-quality knee-high rubber boots or chest waders if crossing deeper channels. Breathable waders preferred to prevent overheating during long stalks in African sun.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Camouflage Patterns</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Standard woodland camouflage too dark for floodplains. Patterns designed for waterfowl hunting (Realtree MAX-5, Mossy Oak Shadow Grass) mimicking dry reeds, tall grass, or mud significantly more effective in lechwe habitat.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Shooting Supports</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Shots often taken from standing or kneeling position in shallow water where prone bipod useless. Tall shooting sticks mandatory. Triple-legged sticks provide most stability for long-range precision shots required (150-300 yards).
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Optics</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    High-quality binoculars essential for spotting game and judging trophy quality from distance. Laser rangefinder vital - featureless marsh terrain makes distance estimation difficult. Heat shimmer or mirage during midday can make accurate range-finding extremely difficult.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Tactics */}
            <div className="border border-clay/30 p-6 md:p-8 mb-12 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Tactical Stalking in Open Terrain
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                Lechwes inhabit wide-open spaces and are extremely vigilant. Their eyesight is excellent - can spot human silhouette from miles away on flat horizon.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Stealth & Approach</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Successful hunter must use "dead ground" (slight depressions) or lines of reeds to mask approach. Stalking often involves long, circuitous loops to keep wind favorable. Frequently requires crawling through shallow water or mud to stay below line of sight of herd.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Timing</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Early morning and late afternoon best times - animals active, low sun can be used to blind herd during approach. During midday heat, "heat shimmer" or mirage off water and wet grass makes accurate range-finding and aiming extremely difficult, leading to high risk of wounding.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Wind Management</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Wind is constant factor on floodplains. Must constantly monitor wind direction. Pungent, musky scent of lechwe coat can be detected on wind, but also means they can detect you. Long circuitous loops necessary to keep wind favorable.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Recovery Challenge</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Wounded lechwe escaping into deep reed bed or swamp almost impossible to track and recover. First shot's accuracy paramount for ethical reasons. Animal's body often caked in mud, which can act as form of natural armor.
                  </p>
                </div>
              </div>
            </div>

            {/* Meat Processing & Culinary */}
            <div className="border border-clay/20 p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison Quality & Culinary Characteristics
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Lechwe meat is widely regarded as one of the most delicious and healthy of all African game species. Because diet consists of lush aquatic plants rather than dry, fibrous savanna grass, meat is naturally "sweeter" and less "gamey" than species like wildebeest or kudu.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Nutritional Profile</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">Fat:</span>
                        <span className="text-clay font-body font-medium">3.2g/100g</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">Protein:</span>
                        <span className="text-clay font-body font-medium">30%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-silver/60 font-body">Minerals:</span>
                        <span className="text-clay font-body font-medium">Rich in iron & zinc</span>
                      </div>
                    </div>
                    <p className="text-silver/70 font-body text-xs mt-4 leading-relaxed font-light">
                      Exceptionally lean compared to domestic beef (10g+ fat/100g). Fine-grained, tender texture compared to high-quality veal or prime beef when prepared correctly.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Loin & Fillet:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Most tender cuts, ideal for quick-searing, grilling, or serving as carpaccio.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Haunch (Leg):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Broken down into topside, silverside, knuckle. Perfect for roasting whole or cutting into succulent steaks.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shoulder:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Preferred for slow-braised dishes like potjiekos or ground into premium biltong meat.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shanks:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Highly prized for stews due to rich collagen content which thickens sauces naturally during slow cooking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Traditional African Preparations</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Biltong</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Favorite for biltong (dried, spiced meat). Leanness ensures dried product does not become rancid. Natural flavor holds up well to traditional spices like coriander, black pepper, and cloves.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Droëwors</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Dried sausage based on boerewors recipe. Leanness prevents rancidity during drying process. Natural "sweet" flavor complements traditional spice blends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* Ballistics & Technical Guide - King Wildebeest Specific */}
      {species.id === "king-wildebeest" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The King Wildebeest is famously known as the <span className="text-clay font-medium">"Poor Man's Buffalo"</span> because of its extreme toughness and ability to absorb lead. This rare color variant commands premium trophy fees ($3,000-$10,000) and requires technical precision for an ethical harvest.
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
                          <span className="text-clay font-medium">Minimum</span>
                        </td>
                        <td className="py-4 pr-6">.270 Winchester</td>
                        <td className="py-4">Considered marginal for large King Wildebeest bull unless using heavy premium bullets and perfect placement. Most PHs regard as minimum only.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Gold Standard</span>
                        </td>
                        <td className="py-4 pr-6">.300 Magnums (.300 Win Mag, .300 WSM, .300 H&H)</td>
                        <td className="py-4">Gold standard for plains game. High velocity, flat trajectory, sufficient kinetic energy (3000+ ft-lbs at muzzle) to impart hydrostatic shock.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Excellent Choice</span>
                        </td>
                        <td className="py-4 pr-6">.338 Winchester Magnum</td>
                        <td className="py-4">Heavier bullet (210-250 grains) carries immense momentum, ensuring bone-breaking capability if shot hits shoulder boss.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Highly Recommended</span>
                        </td>
                        <td className="py-4 pr-6">.375 H&H Magnum</td>
                        <td className="py-4">While typically dangerous game caliber, highly recommended for wildebeest in bushveld conditions. Slower heavy bullet (300 grains) penetrates flawlessly without excessive meat damage. Noticeable knockdown effect.</td>
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
                  Bullet Construction (Critical)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  The bullet is <span className="text-clay">more important than the caliber</span>. King Wildebeest have very thick hide and heavy bone structure. Light bullets often break apart on impact.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Premium Bonded/Monolithic (Mandatory)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Barnes TSX/TTSX, Swift A-Frame, Nosler Partition, Trophy Bonded Bear Claw. These bullets retain 90-100% of their weight, ensuring deep penetration through shoulder blade and into vitals.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Avoid</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Cup-and-core bullets designed for thin-skinned deer (standard soft points). These are liable to fragment on thick skin or shoulder bone, resulting in large surface wound but failure to reach heart/lungs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bowhunting Setup
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Bowhunting King Wildebeest is popular but demanding. Setup must prioritize momentum and structural integrity.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Requirements</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Draw Weight:</strong> Minimum 65 lbs, preferred 70-80 lbs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Arrow Weight:</strong> Minimum 450 grains, ideally 550-650 grains</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Kinetic Energy:</strong> Minimum 60 ft/lbs, target 80 ft/lbs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Broadheads:</strong> Fixed-blade, cut-on-contact (German Kinetic, Iron Will, Muzzy). Two-blade single-bevel excellent for breaching bone.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    <strong className="text-clay">The "Hump" Illusion:</strong> Most common mistake is shooting too high. King Wildebeest has pronounced shoulder hump and standing mane making back look higher than spine actually is. Thoracic spine dips significantly between shoulders. Shot placed "high shoulder" often passes through dorsal spines above spinal cord - "spinal shock" drops animal instantly but recovers seconds later and runs off, likely never to be found.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Vital Triangle (Broadside - Preferred)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Trace the back of the front leg up into the body. Heart sits very low, right in the "V" formed by brisket and leg. Lungs sit above heart.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• Aim point: Vertical line of leg, one-third of way up body</li>
                        <li>• Do NOT aim halfway up - that is too high</li>
                        <li>• Provides rapid collapse of respiratory system</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Aim for the off-side shoulder (the leg on the far side). Bullet enters behind ribs, travels through liver and lungs, lodges in far shoulder anchoring animal.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal Shot (AVOID)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Long sloping face - when looking at you, nose often covers chest "sticking point." Bullet can easily deflect off snout or sternum. Target area to reach heart is narrow, protected by heavy bone.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Reaction to Shot</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        <strong className="text-clay">Death Run:</strong> Heart-shot wildebeest executes frantic high-speed dash (50-100 yards) before collapsing.
                      </p>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        <strong className="text-clay">Circling Back:</strong> Wounded wildebeest circles back downwind of own track to ambush or watch pursuers - survival adaptation making follow-up dangerous.
                      </p>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        <strong className="text-clay">Aggression:</strong> If wounded and cornered, will charge. Approach all downed animals from rear, poke eye with long reed/barrel to ensure corneal reflex absent before touching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Safari Club International (SCI)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 70 inches (Rifle), 54 inches (Bow)
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Method 5: Length of horn along outside curve from boss to tip + circumference of boss at widest point. Rewards heavy, long horns, not just wide ones.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Rowland Ward</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 28.5 inches
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Method 13a: Strictly measures spread. Wide bull scores high regardless of boss mass.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging Trophy Bulls
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Evaluating quality before pulling trigger is critical skill. King variant's color contrast helps highlight horn tips.
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Ear Metric:</strong> When looking at you with ears out - Mature = outer curve reaches ear tips (24-25 inches). Trophy = horns extend 1-2 inches past ear tips (27-28+ inches)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Boss:</strong> Mature bull must have hard, solidified bosses. Young bulls: soft, possibly hairy, wide gap. Old "dagga boy": rough, textured bosses nearly touching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Drop:</strong> Deep curls (parentheses shape) add to score. Horn that drops low before curving up scores better than flat, wide horn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">King Variant Premium:</strong> Commands $3,000-$10,000 (vs $900-$1,200 for Blue Wildebeest) depending on market and trophy size</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison Characteristics & Culinary Science
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                King Wildebeest meat is staple of South African game industry, but requires specific handling due to physiology.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Profile & Handling</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Characteristics:</strong> Lean with very low intramuscular fat (marbling). Darker than beef, rich in iron, coarser texture than impala/springbok. Flavor: "robust" and "gamey" - intense end of spectrum alongside blesbok (vs milder kudu/eland).
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">pH and Stress Critical:</strong> If chased long before shooting, adrenaline breaks down glycogen preventing lactic acid formation post-mortem, resulting in "Dark, Firm, Dry" (DFD) meat with high pH (&gt;6.0) - spoils faster, tougher. Quick clean kill essential for meat quality.
                    </p>
                  </div>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    <strong className="text-cream">Carcass Yield:</strong> 55-58% of live weight
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Fillet (Tenderloin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Most prized cut. Serve rare to medium-rare (overcooking makes liver-like and tough). Excellent for Carpaccio or Tartare, paired with fats (parmesan, olive oil, avocado).
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Sirloin/Rump:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Good for steaks if aged properly (wet-aged 14-21 days). Ideally grilled quickly over high heat.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Neck/Shank/Shoulder:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        High collagen - perfect for slow cooking. Potjiekos (4-6 hours breaks collagen to gelatin). Recipes include red wine, bacon (add fat), apricots (cut richness).
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Biltong:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Silverside and topside legendary for Biltong (cured, dried meat). Low fat ensures even drying without rancidity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Taxidermy */}
            <div className="border border-clay/30 p-6 md:p-8 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Taxidermy: Preserving the "King"
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                Value of King Wildebeest trophy lies in its color. Taxidermy preparation starts in field.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Caping</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Circular cut around body mid-rib (well behind shoulder). Dorsal cut along spine from circular cut up to back of head. Y-cut from base of each horn to center dorsal line. Skin around eyes and preorbital glands is paper-thin - must be skinned with scalpel and extreme patience.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Color Preservation</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Taxidermist must be informed this is King Wildebeest. Standard paints for Blue Wildebeest may obscure subtle pink pigmentation around eyes and nose - diagnostic feature that must be artistically recreated. White mane must be kept free of blood and dirt to prevent staining.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Mount Styles</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Pedestal Mount or Full Mount highly recommended. Standard shoulder mount facing forward often hides white saddle on flanks. Turned pedestal or full mount showcases contrast between dark body, white mane, and white flank - the very traits client paid for.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Genetic Origin</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    King trait is recessive. King x King = 100% King calves. King x Blue = 100% "Split" calves (Blue phenotype, King genotype carriers). Split x Split = 25% King, 50% Split, 25% Blue. Proper management ensures sustainable supply without inbreeding depression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Golden Wildebeest Specific */}
      {species.id === "golden-wildebeest" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The Golden Wildebeest is famously known as the <span className="text-clay font-medium">"Poor Man's Buffalo"</span> because of its extreme toughness and ability to absorb lead. This rare color variant commands premium trophy fees ($3,000-$4,500) and requires technical precision for an ethical harvest.
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
                          <span className="text-clay font-medium">Minimum</span>
                        </td>
                        <td className="py-4 pr-6">.30-06 Springfield</td>
                        <td className="py-4">Absolute minimum floor with heavy (180gr+) bullets. Calibers like .270 or .243 generally discouraged due to risk of wounding.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Ideal Choices</span>
                        </td>
                        <td className="py-4 pr-6">.300 Win Mag, .300 PRC, .338 Win Mag</td>
                        <td className="py-4">Ideal choices offering necessary kinetic energy and sectional density to punch through bone and reach vitals. Excellent penetration for long-range shots.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Best All-Around</span>
                        </td>
                        <td className="py-4 pr-6">.375 H&H Magnum</td>
                        <td className="py-4">Arguably best all-around cartridge for wildebeest. Leaves substantial blood trail - critical factor given animal's tendency to circle back when wounded. Maximum trauma and blood trail.</td>
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
                  Bullet Construction (Critical)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Bullet choice is <span className="text-clay">paramount</span>. Traditional "cup and core" bullets (soft points) often fragment upon impact with wildebeest's thick humerus or scapula, failing to penetrate chest cavity.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Premium Bonded (Essential)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Nosler Partition, Swift A-Frame, Federal Trophy Bonded. Retain weight while expanding, ensuring deep penetration through shoulder blade and into vitals.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic Copper (Highly Recommended)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Barnes TSX or Hornady CX. Highly recommended for ability to smash through bone without breaking apart, ensuring pass-through and good blood trail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Essential Gear for the Bushveld
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Client packing for Golden Wildebeest hunt requires specific gear tailored to environment.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Optics</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      High-quality binoculars non-negotiable (10x42 standard). Ability to judge boss width from 200 yards saves unnecessary stalks. Laser rangefinder crucial due to deceiving distances in open savannah.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Clothing</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Colors: Dark khaki, olive green, or dedicated camo patterns suitable for dry bushveld (King's Camo, Sitka Subalpine). Avoid light khaki or white. Boots: Quiet, soft-soled leather boots (Courtney style) preferred for stalking, well broken-in. Gaiters: Short canvas gaiters prevent grass seeds and thorns.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Technical</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Shooting sticks (tripod style) standard issue for PHs. Clients should practice shooting off them beforehand.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    <strong className="text-clay">The "Hump" Illusion:</strong> Wildebeest have pronounced dorsal hump and high withers. Hunters accustomed to deer often aim too high, putting bullet into non-vital dorsal spines (the "void") - paralyzes animal momentarily ("spinal shock") but recovers and runs off, often never to be found. <strong className="text-clay">Rule: Aim low.</strong>
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Golden Triangle (Broadside - Preferred)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Ideal shot is on vertical line of foreleg, one-third of way up body. This hits top of heart and lungs.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Aim for off-side shoulder. Drives bullet through liver and lungs, lodging against far shoulder blade.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal Shot (Only with Heavy Calibers)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Only recommended with heavy calibers. Aim for "soft spot" at base of neck where it joins chest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Safari Club International (SCI)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> ~70 inches
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Method 5: Measures boss width, horn length around curve, and circumferences. Rewards heavy, long horns, not just wide ones.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Rowland Ward</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> ~28.5 inches
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Strictly measures spread. Wide bull scores high regardless of boss mass.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging Trophy Bulls
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Judging Golden Wildebeest bull requires analyzing three key factors: Spread, Boss, and Shape.
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Spread:</strong> Width between widest outside points of horn curves. Trophy class bull has spread extending well past tips of ears when ears in relaxed, outward position. Spread of 27-29 inches considered excellent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Boss:</strong> Most reliable indicator of age. Mature bull: bosses hard, rough, deeply textured, gap between two bosses on forehead narrow (less than inch ideal). Young bull: bosses may appear smooth or have wide gap filled with hair (reddish in immature, black in mature)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Drop:</strong> Good horns drop well below ear line before curling back up. Deep "hook" adds to visual appeal and score</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Golden Variant Premium:</strong> Commands $3,000-$4,500 (vs $1,100-$1,650 for Blue Wildebeest) - 2.5x-3.0x relative value factor</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison Characteristics & Culinary Science
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Value of Golden Wildebeest extends beyond horns. Meat, while challenging to cook, is delicacy when prepared correctly.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Profile</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Characteristics:</strong> Lean with very low intramuscular fat (marbling). Dark red, rich in iron, coarser grain than finer antelopes like Springbok.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor:</strong> Robust, distinct game flavor - often described as "sweet and wild" but not musky, provided animal skinned promptly and not stressed.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Texture:</strong> Due to active lifestyle, muscle fibers dense. If overcooked, becomes dry and tough (resembling liver or shoe leather).
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Loin (Backstrap):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Prime cut, cylindrical and tender. Best seared quickly over high heat to medium-rare.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Hump:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Unique cut specific to Connochaetes and Bos species. Mix of muscle and connective tissue (nuchal ligament attachment), tough but extremely flavorful. Must be braised or slow-roasted (4-6 hours at 140°C) to break down connective tissue.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Tail:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Long and thick, rich in gelatin and collagen. Excellent for soup (bushveld classic).
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shanks/Shin:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        High in sinew, ideal for slow cooking. Perfect for Potjiekos (cast-iron three-legged pot stew).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Carpaccio</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Fillet excellent due to deep color and low fat. Serve thinly sliced with parmesan, capers, and olive oil.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Traditional Hump Roast</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Marinate with red wine, garlic, and herbs. Roast in sealed pot (Dutch oven) with moisture for 4-6 hours at low heat (140°C). Results in texture similar to pulled brisket.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Wildebeest Tail Soup</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Bushveld classic. Tail sectioned at joints, browned, then simmered for hours with onions, carrots, and red wine until meat falls off bone. Collagen creates naturally thick, rich broth.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Potjiekos</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Shanks and neck meat cubed and used in traditional cast-iron three-legged pot stew, cooked over open fire. Slow heat renders tough fibers tender.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Genetic Management */}
            <div className="border border-clay/30 p-6 md:p-8 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Genetic Management & Economic Value
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                Understanding genetic inheritance mode is critical for herd management. Golden coloration is autosomal recessive trait.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Breeding Outcomes</h4>
                  <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-clay mt-1">•</span>
                      <span><strong className="text-cream">Golden x Golden:</strong> Produces 100% Golden offspring (most efficient but highest initial capital)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-clay mt-1">•</span>
                      <span><strong className="text-cream">Golden x Blue:</strong> Produces 100% "Splits" (Blue phenotype, Golden genotype carriers)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-clay mt-1">•</span>
                      <span><strong className="text-cream">Split x Split:</strong> Produces 25% Golden, 50% Split, 25% Blue (cost-effective entry strategy but slower)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Economic Implications</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Trophy fee ranges $3,000-$4,500 USD (vs $1,100-$1,650 for Blue Wildebeest) - 2.5x-3.0x relative value factor.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    Price differential allows game reserves to generate significantly higher revenue per grazing unit, as Golden Wildebeest occupies exact same ecological niche and consumes same resources as lower-value Blue Wildebeest.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Historical Origins</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Limpopo River basin, Tuli Block region, Botswana. Historical records from 1920s confirm natural occurrence (referred to as "Vos Wildebeest" or "Red Wildebeest"). Modern propagation: First recorded Golden Wildebeest bull captured by Alec Rough on Swinburne farm, Limpopo Valley (early 1990s). DNA analysis (Dr. Antoinette Kotze) confirmed 100% Connochaetes taurinus - recessive gene analogous to blue eyes in humans.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Conservation Value</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Stands as testament to success of South African wildlife model, where private ownership and value-based conservation have resurrected rare genetic variant into thriving population. Offers diversified revenue stream attracting trophy hunters and eco-tourists drawn to striking herds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - White-Flanked Impala Specific */}
      {species.id === "white-flanked-impala" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The White-Flanked Impala offers a <span className="text-clay font-medium">multi-dimensional challenge</span>: the wariness of a herd animal, the agility of a master escaper, and the aesthetic appeal of a rare color variant. This high-value asset ($2,000-$3,000) requires specialized knowledge in habitat management, tracking, and harvest strategy.
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
                          <span className="text-clay font-medium">Minimum</span>
                        </td>
                        <td className="py-4 pr-6">.243 Winchester</td>
                        <td className="py-4">Capable with precise shot placement. Offers flat trajectory and low recoil excellent for youth hunters. However, lacks knock-down power for poor shots on shoulder bone. Heavy-for-caliber bullets (100gr) essential.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Sweet Spot</span>
                        </td>
                        <td className="py-4 pr-6">.270 Winchester / 7x57 Mauser</td>
                        <td className="py-4">Perfect balance of velocity and energy. 130gr or 140gr bullet in .270 devastatingly effective out to 300 yards. 7x57 offers deep penetration with mild recoil - classic bushveld round.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Workhorses</span>
                        </td>
                        <td className="py-4 pr-6">.308 Win & .30-06 Springfield</td>
                        <td className="py-4">Most popular choices on South African safaris. 150gr to 165gr provides ample energy to punch through shoulder ensuring exit wound critical for blood trailing. .30 calibers forgiving of slight errors in shot placement.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bullets and Gear */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bullet Selection (Critical)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Impala are tough. A soft, frangible bullet (like ballistic tip designed for varmints) may splash on shoulder blade without penetrating vitals.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Premium Bonded/Monolithic (Recommended)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Barnes TTSX, Nosler Partition, Swift A-Frame, Federal Premium Trophy Bonded. These bullets retain 90%+ of their weight, breaking bone and driving through vitals to create exit wound.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Overkill Calibers</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      .300 Win Mag & .375 H&H: Effective but can cause excessive meat damage on medium-sized antelope. If using magnum, solid or strongly bonded bullet (like Barnes TSX) recommended to prevent explosive expansion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Archery Equipment
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Bowhunting White-Flanked Impala is high-adrenaline pursuit requiring specialized setup.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Requirements</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Draw Weight:</strong> Minimum 50-60 lbs standard</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Arrow Weight:</strong> Heavier arrows (400-450 grains) preferred for momentum and penetration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Broadheads:</strong> Both fixed-blade (Muzzy, G5 Montec) and high-quality mechanicals (Rage Hypodermic) effective. Mechanicals offer better flight accuracy crucial for small vital zone</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The "String Jump" Phenomenon</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Impala are notoriously fast - can react to sound of bowstring release before arrow arrives. They instinctively drop bodies to load legs for leap. Strategy: Aim at lower third of heart/lung area. If animal drops, arrow hits center of lungs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    <strong className="text-clay">Anatomy is the guide to ethical hunting.</strong> The impala's heart sits very low in the chest, tucked between the forelegs.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Broadside (Side-on - Preferred)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Ideal shot. Trace a line up the back of the front leg. Aim one-third of the way up the body. This destroys the top of the heart and the lungs.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• Animal will likely run short "death dash" (50-100m) before collapsing</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Bullet must enter behind ribcage on near side and angle towards off-side shoulder. Raking shot is lethal but requires bullet with deep penetration.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Small target. Aim for "sticking spot" where neck meets chest. Not recommended for bowhunters due to brisket bone density.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">High Shoulder</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Breaking shoulders (scapula) and spine drops animal instantly ("anchored"). Useful if animal near fence line or thick bush, but destroys valuable shoulder meat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Safari Club International (SCI)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 52 (Rifle), 46 (Bow)
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Gold Medal:</strong> 58 2/8 inches
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Rowland Ward</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 23 5/8 inches
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Focuses purely on horn length.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging Trophy Rams
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Judging White-Flanked Impala is identical to judging common impala in terms of horn geometry.
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Ear Gauge:</strong> Impala's ear roughly 6 inches long. If horns 2.5-3 times length of ear = 18-21 inch range. If horns tower 4 times above ear = 24-inch+ trophy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Spread vs. Length:</strong> Don't be fooled by width - wide ram often has shorter horns than ram with narrower, tall "V" shape. Score comes from length of horn along curve</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Mass:</strong> Look for bases thick and heavy, with ridges carrying well up horn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Shooter Ram:</strong> Representative trophy typically starts 21-22 inches. Trophy class: 23-24+ inches. Monster/Magnum: 30-inch mark is "holy grail" though rare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">White-Flanked Premium:</strong> Commands $2,000-$3,000 (vs $250-$600 for Common Impala) - 4-8x relative value factor. Aesthetic of White-flanked morph - symmetry of horns combined with pristine condition of white coat - often dictates trophy's value more than simple tape measurement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Hunting Strategies
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Spot and Stalk (Preferred for Rifle)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    White-Flanked Impala easier to spot than common variety due to white flash of flank, but rarely alone. Challenge is not spotting trophy but closing distance without alerting dozens of other eyes and ears in herd.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    Once a female snorts, stalk usually over. Shots typically taken from shooting sticks at 100-200 meters. Must move slowly into wind.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Ambush (Blind Hunting - Ideal for Bow)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Blinds positioned over waterholes or mineral licks. White-Flanked Impala nervous drinkers - approach, back off, stare, fake-charge before committing.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    Hunter must wait until animal settled and drinking before drawing bow. This method allows careful assessment to confirm genuine White-Flanked morph and judge horn size accurately.
                  </p>
                </div>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison Characteristics & Culinary Science
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Prized as much for meat as for horns - arguably most popular game meat in South Africa due to texture and flavor profile.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Profile</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor:</strong> Subtle, herbal game flavor - lacks intense "musk" of waterbuck or dryness of wildebeest. Often compared to high-quality lean beef but with more complexity.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Texture:</strong> Scientific studies confirm tender, typically measuring below 43 Newtons (classifies as "tender" in meat science).
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Fat Content:</strong> Incredibly lean, intramuscular fat often below 2% - healthy but prone to drying out if overcooked.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Silverside (Bottom Round):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Outer thigh, long-grained, best for Biltong.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Topside (Top Round):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Inner thigh, more tender, good for roasts or biltong.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Fillets (Tenderloin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Inside ribcage, most tender cut, pan-sear quickly.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Backstraps (Loin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Along spine, perfect for steaks on braai (BBQ).
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shanks/Neck:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        High in connective tissue, essential for Potjiekos (traditional cast-iron stew) where slow cooking gelatinizes collagen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Traditional Biltong</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Silverside sliced with grain into strips. Cured in coarse salt, toasted coriander seeds, black pepper, brown vinegar for hours, then air-dried. Impala biltong renowned for dark color and rich flavor.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Impala Carpaccio</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Loin excellent served raw as carpaccio due to lean, fine-grained texture. Dressed with olive oil, parmesan, and rocket.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">The Braai (BBQ)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Steaks marinated in olive oil and lemon juice (to break down fibers), grilled over intense heat for very short time. Served medium-rare is non-negotiable - well-done impala is tough and liver-like.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Potjiekos</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Shanks and neck meat cubed and used in traditional cast-iron three-legged pot stew, cooked over open fire. Slow heat renders tough fibers tender.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Dapple Impala Specific */}
      {species.id === "dapple-impala" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Hunting the Dapple Impala is a <span className="text-clay font-medium">high-stakes endeavor</span>. The significant financial investment ($11,500) necessitates a hunting strategy that prioritizes identification and shot placement over risk-taking. Known as "Africa's goat" for its toughness, it requires precise shot placement with adequate penetration.
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
                          <span className="text-clay font-medium">Not Recommended</span>
                        </td>
                        <td className="py-4 pr-6">.223 Rem, .22-250</td>
                        <td className="py-4">While lethal with brain shots, risk of wounding on $11,500 animal too high. Illegal for medium game in some provinces.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Excellent</span>
                        </td>
                        <td className="py-4 pr-6">.243 Win, 6.5 Creedmoor</td>
                        <td className="py-4">Low recoil allows for precision. With premium bullets, perfect for impala, minimizing skin damage.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Versatile</span>
                        </td>
                        <td className="py-4 pr-6">.270 Win, 7mm Rem Mag</td>
                        <td className="py-4">Flat shooting and hard-hitting. Ideal for open savannah shots.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Gold Standard</span>
                        </td>
                        <td className="py-4 pr-6">.308 Win, .30-06 Sprg</td>
                        <td className="py-4">Perfect. The "do-it-all" African calibers. Heavy enough to anchor the animal, versatile bullet selection.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bullets and Gear */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bullet Selection (Critical for Skin Preservation)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  For a Dapple Impala, <span className="text-clay">the skin is the trophy</span>. Bullet selection is paramount.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic Solid Copper (Recommended)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Barnes TSX, Hornady GMX. These bullets retain weight and penetrate deeply without fragmenting. Fragmentation (cup-and-core bullets) can shred the opposite shoulder, ruining the cape and creating difficult taxidermy repair job.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bonded Bullets</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Nosler AccuBond, Swift A-Frame. Provide reliable expansion while maintaining structural integrity needed to preserve skin quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Magnum Calibers</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      .300 Win Mag, .338: Overkill - can cause massive exit wounds ruining Dapple skin. Only use with solid copper bullets to minimize expansion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Essential Optical Gear
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  High-stakes hunt requires precision identification and range estimation.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Binoculars</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      10x42 is industry standard. High-quality glass (Swarovski, Leica, Zeiss) helps in distinguishing Dapple pattern in deep shade. Essential to confirm coat pattern and horn size before setting up shooting sticks.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Rangefinder</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Essential. Impala are smaller than they appear, leading to range estimation errors. Critical for precise shot placement on high-value asset.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    <strong className="text-clay">The margin for error on a Dapple Impala is zero.</strong> A wounded animal that escapes into the night is a financial disaster.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "High Heart" Shot (Recommended)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Trace the back line of the front leg up into the body. Aim approximately one-third to one-half way up the body.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• Strikes top of heart and cluster of major vessels (aorta/vena cava) plus lungs</li>
                        <li>• Animal may run 20-50 yards but expires quickly due to massive drop in blood pressure</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Shoulder "Anchor" Shot</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Directly on center of shoulder blade (scapula). Breaks skeletal structure, drops animal instantly.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• Pro: Prevents animal running into thorns where skin could be scratched</li>
                        <li>• Con: Destroys some shoulder meat, but preserves trophy skin if monolithic bullet used</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Shots to Avoid</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        <strong className="text-clay">Neck Shots:</strong> Risky - spinal column narrow, slight miss wounds esophagus or trachea leading to long gruesome track.
                      </p>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        <strong className="text-clay">Head Shots:</strong> Never recommended for trophy animals - destroys skull (needed for European mounts) and risks shattering jaw.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Standards
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Safari Club International (SCI)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      <strong className="text-clay">Minimum:</strong> 52 inches (Total Score)
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Horn Dimensions</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Good Trophy:</strong> Starts at 23-24 inches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Exceptional:</strong> 26+ inches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Batiki Lineage:</strong> Produces rams with horn lengths exceeding 25 inches</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging Trophy Rams
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Before trigger is pulled, hunter must confirm quality of trophy. Field judging involves both horn geometry and coat assessment.
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Horn Shape:</strong> Look for deep curve - horns going wide, then back, then up are desirable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The "Parallel Tip" Rule:</strong> When viewing from front/back, if tips point straight up (parallel), ram likely mature. If point toward each other, may still be growing. If flare out significantly, likely very old or very big ram</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Ridges:</strong> Heavy, distinct ridges at base indicate age</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Dapple Coat "Loudness":</strong> Does animal have strong contrast? "Loud" dapples generally more prized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Pattern Coverage:</strong> Does pattern extend down legs and up neck?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Symmetry:</strong> While asymmetry natural, balanced pattern often preferred for full mounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Dapple Premium:</strong> Commands ~$11,500 (vs $250-$600 for Common Impala) - 20-45x relative value factor. Aesthetic of Dapple morph - symmetry of horns combined with pristine condition of dapple coat - often dictates trophy's value more than simple tape measurement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Hunting Strategies
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Walk and Stalk (Traditional)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Traditional and most sporting method. Hunters move slowly into wind, scanning shadows.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    <strong className="text-cream">Challenge:</strong> Dappled coat breaks up outline effectively in mottled shade of Acacia thickets. The "Thousand Eyes" - impala herds vigilant, hunter must spot herd before they spot him.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    <strong className="text-cream">Critical:</strong> Distinguishing Dapple ram from common rams in moving herd difficult - binoculars (10x42) essential to confirm coat pattern and horn size before setting up shooting sticks.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Ambush (Blind) - Recommended</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Often recommended method for clients to ensure 100% positive identification.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    Setting up blind near waterhole or salt lick during dry season allows hunter and PH to observe animals at leisure, scrutinize Dapple pattern, judge horns without urgency of fleeting glimpse in bush.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    Ensures high-value asset not mistaken for common impala or younger Dapple ram.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Rut Hunting (May)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Hunting during roar utilizes ram's vocalizations to locate him.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    Move towards sound of roaring - territorial rams often stand ground to display dominance rather than flee immediately.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    <strong className="text-clay">Risk:</strong> Rams in rut constantly moving and fighting, shot opportunities can be chaotic.
                  </p>
                </div>
              </div>
            </div>

            {/* Post-Hunt Care & Taxidermy */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Post-Hunt Care & Taxidermy
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Once animal is down, preservation of asset begins. Dapple skins are rare; any hair slip renders them worthless.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Skinning & Handling</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Do Not Drag:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Dragging Dapple Impala destroys hair. Animal must be carried or loaded.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Incision Lines:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Standard: Cut up back of neck for shoulder mount. Dorsal Cut: For full skins (rugs or full mounts), cut along spine preferred to hide stitching in darker hair, leaving intricate flank pattern seamless.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Salting:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Immediate, thorough salting required to lock hair follicles. Dapple skins prone to "slippage" (hair falling out) if carcass not cooled rapidly after hunt.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Taxidermy Styles</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Pedestal Mount:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Ideally suited for Dapple Impala. Allows viewer to walk around mount and see dapples on shoulders and back.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Full Body:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Ultimate display. Captures "action" of animal and displays full flank pattern.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Flat Skin:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Tanned skin with hair on. Tactile trophy showcasing "map" of genetics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison Characteristics & Culinary Science
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                While Dapple Impala is trophy animal, meat is byproduct of immense quality - lean, organic, free of antibiotics.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Profile</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor:</strong> Mild and subtle - lacks aggressive "gamey" taste of rutting Blesbok or toughness of Wildebeest.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Texture:</strong> Fine-grained and tender.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Fat Content:</strong> Extremely low (&lt;2%) - cooking requires added fat (bacon, olive oil) or moisture to prevent drying out.
                    </p>
                  </div>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    <strong className="text-cream">Meat Yield:</strong> ~30 kg (Ram)
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Loin (Backstrap):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        "Filet Mignon" of antelope. Best served rare to medium-rare.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Buttocks (Silverside/Topside):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Engine room of animal. Ideal for Biltong - long muscle fibers make perfect slicing.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Neck and Shanks:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        High connective tissue. Must be slow-cooked - essential for Potjiekos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Impala Carpaccio</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Thinly sliced semi-frozen loin, drizzled with balsamic glaze, arugula, parmesan shavings. Highlights tenderness of meat.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Traditional Potjiekos</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Slow-cooked stew over open fire. Impala neck cuts, onions, garlic, red wine, potatoes, carrots, dried apricots. Brown meat, sauté onions, return meat, add liquids, simmer 3-4 hours until meat falls off bone.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Dapple Biltong</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Cured with vinegar, toasted coriander, black pepper, rock salt. Lack of fat makes impala biltong resistant to rancidity allowing long storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Genetic Management */}
            <div className="border border-clay/30 p-6 md:p-8 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Genetic Management & Economic Value
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                Dapple Impala represents multi-tiered asset requiring specialized genetic management.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Asset Tiers</h4>
                  <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-clay mt-1">•</span>
                      <span><strong className="text-cream">Visual Dapples:</strong> Primary high-value asset, sold for hunting or as stud breeders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-clay mt-1">•</span>
                      <span><strong className="text-cream">Splits (Carriers):</strong> Ewes carrying gene essential for scaling population. Herd of split ewes running with Dapple ram ensures significant percentage of offspring (theoretically 50% in Dapple x Split mating) will be visual Dapples</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-clay mt-1">•</span>
                      <span><strong className="text-cream">Genetic Diversity:</strong> Maintaining vigor requires periodic introduction of large-horned common impala (carrying no color genes) to create new lines of splits, ensuring trophy quality (horn size) does not diminish over generations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Economic Analysis</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    <strong className="text-cream">Trophy Income:</strong> ~$11,500 per hunt (vs $250-$600 for Common Impala) - 20-45x relative value factor.
                  </p>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    <strong className="text-cream">Breeding Cost:</strong> High initial capital for stud rams (up to $20,000+ for top genetics like Batiki lines).
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    <strong className="text-cream">Operational Cost:</strong> Similar to common impala but requires higher security to prevent poaching and predation.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    <strong className="text-cream">Market:</strong> "Exclusive" - clients typically repeat hunters looking for "Diamond" of collection.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Batiki Lineage</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Commercial history tied to specific breeding operations in Limpopo province. Breeding rams such as "Nhahla" and "Asante Sana" from Batiki bloodline became cornerstones of industry. Selected for intensity of coat pattern ("loud" dapples) and horn volume. Early color variants often suffered "genetic drag" where inbreeding for color compromised horn size - Batiki lineage celebrated for correcting this, producing Dapple rams competing with common impala in trophy mass.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">Marketing the Hunt</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    To sell Dapple Impala hunt, operator must sell the story. Emphasize rarity (one of rarest naturally occurring color morphs). Package hunt as specialized stalk for "ghost" of bushveld. Highlight that funds from color variant hunting support maintenance of vast habitat tracts benefiting non-game species.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Cape Buffalo Specific */}
      {species.id === "buffalo" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The pursuit of dangerous game dictates a specific class of weaponry. The margin for error with a Cape buffalo is <span className="text-clay font-medium">non-existent</span>; therefore, the equipment must be powerful, reliable, and mastered by the user. Known as "Black Death" or "The Widowmaker" for good reason.
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
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Expert Commentary</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.375 H&H Magnum</span>
                        </td>
                        <td className="py-4 pr-6">300 gr</td>
                        <td className="py-4">The "Gold Standard" - minimum legal caliber. Moderate recoil, deep penetration, versatile. Adequate with precise shot placement, but offers less margin for error than the .400s.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.416 Rigby / Rem Mag</span>
                        </td>
                        <td className="py-4 pr-6">400 gr</td>
                        <td className="py-4">Widely considered the "perfect" buffalo caliber. High sectional density, heavy impact energy. Offers significant step up in stopping power from the .375.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.458 Lott</span>
                        </td>
                        <td className="py-4 pr-6">500 gr</td>
                        <td className="py-4">Superior to the .458 Win Mag. A true stopper that delivers a knockout blow. Massive energy transfer, 2150+ fps.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.470 Nitro Express</span>
                        </td>
                        <td className="py-4 pr-6">500 gr</td>
                        <td className="py-4">Classic double rifle load. Designed for close-range stopping power (50 yards). Reliable and historically significant.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.505 Gibbs</span>
                        </td>
                        <td className="py-4 pr-6">525-600 gr</td>
                        <td className="py-4">"Destructive Device" territory. Immense recoil but devastating terminal performance. Used by historical figures like Hemingway.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bullet Selection */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Projectile Selection: The "Soft vs. Solid" Debate
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  The choice of bullet is <span className="text-clay">as critical as the choice of caliber</span>.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The First Shot (Softs)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Consensus among experts: Use premium, controlled-expansion Soft Point for first shot. Brands like Swift A-Frame, Barnes TSX, or Woodleigh Weldcore preferred.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-cream">Rationale:</strong> First shot usually taken at broadside, unaware animal. Goal is to dump massive energy into heart/lungs, causing hydrostatic shock and destroying vital tissue to kill quickly.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Follow-Up (Solids)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Subsequent shots should be Solids (non-expanding, monolithic bullets).
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-cream">Rationale:</strong> Once wounded, buffalo may turn away (presenting hip shot) or charge head-on. Soft point may fail to penetrate heavy pelvic bone or concrete-like boss of skull. Solid bullet designed to punch through these barriers to reach vitals.
                    </p>
                  </div>
                  <div className="border-t border-clay/20 pt-4">
                    <p className="text-clay font-body text-sm font-medium">
                      <strong>Common Strategy:</strong> Chamber a Soft, load the magazine with Solids.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Optics & Essential Gear
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Buffalo are often hunted in thick jess or mopane scrub where engagement distances are short (20-60 yards).
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Scopes</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Low-power variable scopes (1-4x, 1-6x, or 1.5-5x) ideal. Wide field of view essential to see animal's surroundings and other herd members. High magnification (e.g., 9x) dangerous as it obscures target picture in close quarters.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Iron Sights</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Essential for backup or extremely close work. Quick-detach scope mounts recommended so hunter can switch to irons if scope damaged or action becomes melee.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Clothing & Footwear</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Neutral earth tones (dark khaki, olive, brown). Camouflage effective but legally restricted in some nations. Quiet stalking paramount - leather boots with soft rubber soles (Courteney Boots, often made from buffalo or hippo hide) are industry standard. Gaiters essential for grass seeds, ticks, and thorns.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Medical Prep</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      High-caliber hunting carries risks. Team must carry trauma kits (tourniquets, hemostatic gauze) and have evacuation insurance (e.g., Global Rescue).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement & Anatomy (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    The anatomy of a buffalo is robust, with heavy bone shielding the vitals. Understanding the <span className="text-clay">"boiler room"</span> is the key to a clean kill.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Vital Triangle (Heart/Lung - Broadside)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        On broadside animal, trace the rear line of the front leg up one-third of the body depth. This puts bullet directly into top of heart and major plumbing (aorta/vena cava).
                      </p>
                      <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                        <strong className="text-clay">Common Error:</strong> Shooting too high. Hunters accustomed to deer shoot for midpoint of shoulder. On buffalo, this hits high lung or "hump," which may not be immediately fatal, leading to dangerous follow-up.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Angles</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        <strong className="text-cream">Quartering To:</strong> High-risk shot - bullet must smash through heavy shoulder joint (humerus) to reach vitals. Aim for "point" of shoulder. Solid bullet often safer here.
                      </p>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        <strong className="text-cream">Quartering Away:</strong> Classic angle - aim behind shoulder, visualizing off-side shoulder as exit point. Drives bullet through liver and into lungs/heart.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Spine and Neck</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Neck shots generally discouraged for clients. Spinal column is small target (3-4 inches wide) buried in massive neck muscle. Near-miss paralyzes animal temporarily or wounds superficially, initiating charge scenario. Reserved for culling or expert marksmen.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Charge and the Brain Shot</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        If buffalo charges, only reliable stopping shot is to brain.
                      </p>
                      <ul className="text-silver/70 font-body text-sm space-y-1 font-light">
                        <li>• <strong className="text-cream">Nose Up:</strong> If nose raised (testing wind or looking), brain exposed - aim between eyes</li>
                        <li>• <strong className="text-cream">Nose Down:</strong> In final phase of charge, buffalo tucks chin to gore - presents armored boss to shooter. Must aim through boss or just below to hit brain stem. Requires solid bullet and nerves of steel</li>
                      </ul>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "Death Bellow"</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        When buffalo hit fatally, often runs short distance, collapses, emits loud groaning moan - caused by relaxation of diaphragm and expulsion of air. While usually sign of death, hunter must approach with extreme caution (from rear), weapon ready, perform "eye test" (touching eye with long stick) to confirm insensibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Evaluation & Field Judging
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Before trigger is pulled, hunter must confirm quality of trophy. Field judging is skill of estimating bull's trophy quality and age before shooting - critical for genetic conservation.
                </p>
                <ul className="space-y-3 text-silver/80 font-body text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Spread:</strong> "Good" buffalo historically has horn spread of 40 inches or more. Rough guide: buffalo's ears spread about 34-36 inches - if horns extend hand-width past ears on each side, bull likely approaching 40-inch mark</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">The Boss Hardness (Most Important):</strong> "Soft Boss" bull will have visual gap of hair or light-colored tissue between horns - hunters should avoid shooting soft-boss bulls regardless of spread width to allow them to breed. "Hard Boss" bull will have solid, dark, rock-like bridge connecting horns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Tip Orientation:</strong> Young bulls have sharp tips pointing upwards. Old bulls (Dagga Boys) often have tips worn blunt or broomed down, sometimes parallel to ground - while reduces "score" in inches, increases character and age value of trophy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span><strong className="text-cream">Trophy Benchmark:</strong> 38-40 inches spread. "Hard Boss" is priority over width</span>
                  </li>
                </ul>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Boss Development & Aging
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Immature (Soft Boss)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      Up to 5-6 years of age. Horns may have reached full width (spread), but boss still "green."
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Often hair between horn bases, tissue soft and vascular. Harvesting bulls at this stage detrimental to herd as they often just entering reproductive prime.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Mature (Hard Boss)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-2">
                      By 8-10 years, keratin has hardened into solid mass often resembling grey rock.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Hair gap disappears, horns meet. Hardness required for bull to withstand rigors of dominance fights.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The "Scrumcap"</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      In very old bulls, boss can become extremely rugged and textured, often referred to as scrumcap, signaling bull that has survived many battles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Protocols */}
            <div className="border border-clay/30 p-6 md:p-8 mb-12 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Safety Protocols & Risk Management
              </h3>
              <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                The statistic that buffalo kill more hunters than lions or elephants is not hyperbole. Most accidents occur during follow-up of wounded animals.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">The Grudge</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Historical accounts and modern incidents confirm that buffalo will circle back on their tracks to ambush pursuers. They are vindictive and intelligent.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">The Adrenaline Shield</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Wounded buffalo's adrenaline allows it to absorb shots that would kill other animals instantly. It may cease to feel pain, driven solely by urge to destroy threat.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">The 30-Minute Rule</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    If buffalo is hit and runs, wait at least 30 minutes. This allows animal to stiffen, bleed out, and potentially expire. Pushing too soon keeps adrenaline high.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-3 font-light">The Tree Strategy</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Buffalo cannot climb. In charge where stopping shots fail, only refuge is tree. Trackers often identify climbable trees as they move.
                  </p>
                </div>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                For game farm, buffalo is source of high-quality protein. Utilizing meat respects animal and adds significant value to client's experience.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Profile & Nutrition</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Characteristics:</strong> Biologically similar to beef but superior in several nutritional metrics. Leaner than domestic beef, lower cholesterol, higher protein content, rich in Omega-3 fatty acids (particularly if grass-fed).
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor:</strong> Rich, slightly sweet, intense - lacks gaminess of some antelope. Darker in color due to high iron content.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Texture:</strong> Meat from old Dagga Boys can be tough - benefits significantly from wet aging (vacuum sealing) for 14-21 days allowing enzymes to break down connective tissue.
                    </p>
                  </div>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    <strong className="text-cream">Meat Yield:</strong> Approx. 40-50% of live weight
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">The Hump:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Delicacy often overlooked. Marbled and ideal for slow roasting.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Backstraps (Loin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Prime steak cut. Best cooked hot and fast to medium-rare.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Brisket:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Excellent for smoking or corning.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Ribs:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Massive. Require slow cooking to tenderize but offer immense flavor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Traditional & Modern Recipes</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Buffalo Tail Soup (The Bush Classic)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Buffalo tail gelatinous and rich, superior to domestic oxtail. Skin and disjoint tail, brown meat in cast-iron pot. Requires long slow braising (4-6 hours) or pressure cooking (90 minutes) with red wine, onions, carrots, garlic until meat falls off bone. Resulting broth thick and velvety.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Buffalo Tongue with Mustard Sauce</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Traditional delicacy. Must be boiled or pressure-cooked with aromatics (bay leaves, peppercorns) until tender. Peel rough outer skin off while tongue still warm. Slice thinly and serve with sweet mustard or caper sauce (vinegar, capers, mustard, cream).
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Liver and Onions (Campfire Breakfast)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Buffalo liver nutrient-dense. Soak sliced liver in milk 1-2 hours to draw out bitterness and blood. Pan-fry quickly in butter with caramelized onions. Do not overcook, or becomes chalky.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Biltong (Cured Dried Meat)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Ultimate South African snack. Buffalo makes exceptional biltong due to lean nature. Cut silverside into strips. Marinate in vinegar/spice mix (coarse salt, toasted coriander seeds, black pepper, brown sugar, vinegar) 4-12 hours. Hang in cool well-ventilated area (drying box with fan) 3-7 days. Unlike jerky, not smoked or cooked with heat - air-cured.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Greater Kudu Specific */}
      {species.id === "kudu" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              For the client and the professional hunter (PH), the pursuit of a Kudu bull is often the highlight of a safari. It is a hunt that rewards <span className="text-clay font-medium">patience, optics, and stealth</span> rather than raw distance.
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
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Calibers</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Usage Context</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Minimum Acceptable</span>
                        </td>
                        <td className="py-4 pr-6">.270 Win, 7mm-08</td>
                        <td className="py-4">Suitable for open terrain with precise shot placement. Requires premium bullets to ensure penetration on shoulder hits.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">The Gold Standard</span>
                        </td>
                        <td className="py-4 pr-6">.30-06 Sprg, .308 Win</td>
                        <td className="py-4">The most versatile choice. Moderate recoil, excellent ammo availability. A 180gr bullet is ideal.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Magnum Performance</span>
                        </td>
                        <td className="py-4 pr-6">.300 Win Mag, 7mm Rem Mag</td>
                        <td className="py-4">Preferred for cross-valley shots (250m+). The flat trajectory simplifies hold-over, and the extra energy anchors bulls quickly.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">Bushveld Stoppers</span>
                        </td>
                        <td className="py-4 pr-6">9.3x62 Mauser, .375 H&H</td>
                        <td className="py-4">Excellent for close-range hunting in thick cover. The heavy, slow bullets plow through minor twig deflections and leave massive blood trails.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bullet Selection */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bullet Construction Analysis
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  The debate between bonded and monolithic bullets is pertinent to Kudu hunting.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bonded Core (Recommended)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Nosler Accubond, Swift Scirocco. These bullets have the lead core chemically bonded to the copper jacket.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Offer balance of rapid expansion (shock) and weight retention (penetration). Excellent for Kudu as they transfer massive energy into lungs while still breaking bone.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Partition Style (Legendary)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Nosler Partition, Swift A-Frame. A dual-core design.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      The front expands violently, while the rear partition remains solid to drive through the animal. This is a legendary design for African plains game and highly recommended.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic Copper</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Barnes TSX. Made of solid copper, these bullets retain nearly 100% of their weight.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Famous for penetrating completely through the animal (pass-throughs), leaving two bleed holes. Note: Because they are lighter and harder, they require high velocity to expand. Hunters using monolithics should often drop down a bullet weight (e.g., use 150gr or 165gr in .30-06 instead of 180gr) to keep speed up.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Optics & Essential Gear
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Given the Kudu's habit of hiding in shadows, light transmission is key.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Binoculars</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      A 10x42 configuration is standard. Brands like Swarovski, Leica, or Zeiss are favored because their superior glass allows the hunter to see "into" the shadow of a bush where a cheaper lens would only show darkness. Essential for the "spot and stalk" technique - meticulously scanning opposite slopes and thickets for parts of the animal (glint of sun on curve of horn, twitch of large ear, horizontal line of back).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Scope</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      A variable scope (e.g., 3-9x40 or 2.5-10x50) is ideal. The low magnification (3x) is essential for close encounters in the bush where field of view is critical, while the higher power is needed for judging trophies at distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Hunting Strategy</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The "Spot and Stalk" Technique: Position on high ridge or koppie at first light. Using high-quality optics, meticulously scan opposite slopes and thickets. Once suitable bull located, stalk planned - involves closing distance (often from 1000 yards down to 100 yards) while paying strict attention to wind. Kudu have mediocre sight but possessing hearing and smell that are legendary. Swirling wind in valley is Kudu hunter's worst enemy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement & Anatomy (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    Ethical hunting mandates a <span className="text-clay">quick, clean kill</span>. The heart and lungs of a Kudu sit lower and further forward in the chest cavity than many hunters accustomed to North American deer realize.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Vital Triangle (Broadside)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        The heart is located directly between the forelegs, low in the brisket. The aim point is directly up the back of the foreleg, about one-third of the way up the body.
                      </p>
                      <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                        This places the bullet through the top of the heart and the center of the lungs. Aiming "behind the shoulder" (as with deer) can sometimes result in a liver shot or a gut shot if the angle is slightly off.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        This is a deadly angle. The hunter should aim behind the shoulder, visualizing the bullet exiting through the off-side shoulder. This drives the projectile through the liver, diaphragm, and lungs, often lodging in the far shoulder bone to anchor the animal.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal Shot</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Generally discouraged for clients. The target area, a teacup-sized opening into the chest cavity above the brisket, is small. A slight deviation hits the heavy shoulder bone or the neck meat, resulting in a wounded animal that can run for miles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Evaluation & Field Judging
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  One of the most challenging aspects of Kudu hunting is judging the size of the horns on the live animal. The spiral shape creates an optical illusion that can deceive even experienced eyes.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Metrics</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Standard Bull:</strong> 48-52 inches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Trophy Class:</strong> 54 inches and above</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">The Holy Grail:</strong> 60 inches - benchmark of lifetime achievement, achieved by fewer than 5% of wild bulls</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">World Record:</strong> 72 inches (historically rare)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Judging Criteria</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">The Helix Depth:</strong> Most critical factor - depth of curl. Horn that spirals widely and deeply (like wrapping around wine barrel) consumes more length than tight, corkscrew spiral (like wrapping around broomstick). Deep curl often deceptive, looking shorter than actually is</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">The Tips:</strong> If tips point straight up or inwards towards each other, bull likely not fully grown. In mature bull, tips should point outward and backward - indicates full 2.5 to 3 turns have been completed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Ivory Tips:</strong> Old bulls often wear down tips through years of rubbing on vegetation, exposing white bone core. These "ivory tips" highly prized as sign of age and character, even if wear reduces total measurement by inch or two</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Visual Benchmarks & Aging
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Visual Benchmarks</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">The Ear Rule:</strong> Kudu's ear roughly 20-22 cm (8 inches) long. If horn extends well past tip of ear before starting first turn, suggests good length</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">The Chevron:</strong> If bottom of V-shape formed by horns is wide, horns often look impressive but may lose length. Narrower V often correlates with deeper curls</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Aging on the Hoof</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      An ethical hunter targets age, not just inches.
                    </p>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Facial Features:</strong> Young bull has sleek, fawn-colored face. Old bull develops darker, almost black bridge to nose (the "mask"), white chevron may become less distinct or jagged</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Neck and Body:</strong> Mature bull has neck that looks swollen and muscular, appearing almost too heavy for body. Dewlap (throat beard) becomes long and shaggy. Back may sag slightly (swayback), hip bones become prominent</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Rut Swelling:</strong> Bulls swell during rut - neck of mature bull swells significantly (testosterone-driven adaptation)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Hunting Strategies
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Spot and Stalk (Traditional)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Most traditional and sporting method of hunting Kudu.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    <strong className="text-cream">Vantage Points:</strong> Position on high ridge or koppie at first light.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    <strong className="text-cream">Glassing:</strong> Using high-quality optics, meticulously scan opposite slopes and thickets. Kudu rarely seen standing in open - instead look for parts of animal: glint of sun on curve of horn, twitch of large ear, horizontal line of back amidst vertical trees.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    <strong className="text-cream">The Stalk:</strong> Once suitable bull located, stalk planned. Involves closing distance (often from 1000 yards down to 100 yards) while paying strict attention to wind. Kudu have mediocre sight but possessing hearing and smell that are legendary. Swirling wind in valley is Kudu hunter's worst enemy.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Ambush Hunting</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    In the dry season, ambush hunting from a blind over a waterhole or mineral lick can be effective.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    This method allows for careful assessment of trophy quality as the animals are generally unaware of the hunter's presence.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    Particularly useful for bowhunters who require close proximity (under 40 yards).
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Tracking</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Tracking a solitary bull through the Kalahari sand or the thick bushveld is an art form.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    Requires interpreting spoor to determine not just the direction of travel, but the animal's pace and intent.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    When tracks show transition from gallop to trot, freeze and scan - bull is likely stationary and watching.
                  </p>
                </div>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Kudu venison is widely regarded as some of the finest in Africa. It is a staple of the South African diet and a gourmet delicacy in lodges.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Venison Characteristics</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor Profile:</strong> Dark red, lean, possesses distinct game flavor richer than beef but lacks "musky" intensity of Impala or toughness of Wildebeest. Often described as having slightly sweet, earthy undertone.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Nutritional Value:</strong> Extremely low in cholesterol and saturated fat while being high in protein and iron, making healthy alternative to domestic red meat.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Texture:</strong> Fine-grained but, like all game meat, lacks intramuscular fat (marbling) - means zero tolerance for overcooking.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Techniques</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">The Kudu Steak (Braai):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Loin or Backstrap. Rub with olive oil and simple spice rub. Grill over very high heat for short time. Must be served Rare to Medium-Rare - if cooked Well-Done, becomes dry, tough, and livery. Serve with red wine and juniper berry reduction or simple garlic butter.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Kudu Schnitzel:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Leg steaks (Silverside/Topside) butterflied and pounded thin, then breaded and fried. Favorite family meal in South Africa.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Kudu Potjiekos (Stew):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Neck, Shin, and Shoulder slow-cooked in cast-iron three-legged pot over coals for 3-5 hours. Popular variant includes red wine, onions, garlic, and dried apricots - sweetness of fruit complements gamey meat perfectly.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Biltong:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Kudu arguably most popular game meat for biltong. Long, lean muscle groups of leg cut into strips, cured in vinegar and salt, spiced with toasted coriander, air-dried. Kudu biltong typically dark, almost black in center, with rich, nutty flavor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Gemsbok Specific */}
      {species.id === "gemsbok" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The Gemsbok is widely regarded as <span className="text-clay font-medium">"pound-for-pound" one of the toughest African ungulates</span>. Their heavy bones, thick skin, and immense stamina mean that marginal shots often result in lost animals.
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
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Suitability</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.270 Win / 7mm Rem Mag</span>
                        </td>
                        <td className="py-4 pr-6">Minimum</td>
                        <td className="py-4">Requires precise shot placement and premium bullets. Not recommended for inexperienced shooters on this species.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.300 Win Mag / .300 WSM</span>
                        </td>
                        <td className="py-4 pr-6">Ideal</td>
                        <td className="py-4">Excellent balance of flat trajectory for Kalahari shots and kinetic energy to punch through the shoulder.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.338 Win Mag</span>
                        </td>
                        <td className="py-4 pr-6">Excellent</td>
                        <td className="py-4">Superb knockdown power; allows for quartering shots.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.375 H&H Magnum</span>
                        </td>
                        <td className="py-4 pr-6">Classic</td>
                        <td className="py-4">Devastatingly effective. While heavier than necessary for plains game, it anchors gemsbok reliably. Preferred for bushveld hunting.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bullet Selection */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bullet Construction (CRITICAL)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  This is <span className="text-clay">more critical than caliber</span>. The hunter must use bullets that retain weight and penetrate deep. The dermal shield (6-10mm thick skin on neck and shoulders) acts as a barrier to bullet penetration.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Monolithic (Copper) - Superior</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Barnes TSX/TTSX, Hornady GMX/CX.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Superior for gemsbok as they punch through the shoulder bone without fragmenting. These bullets retain nearly 100% of their weight, ensuring deep penetration through the dermal shield.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bonded Core</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Nosler AccuBond, Swift A-Frame, Federal Trophy Bonded Tip.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      Offer a good compromise of expansion and weight retention. The lead core is chemically bonded to the copper jacket, ensuring structural integrity.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Avoid</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Cup-and-core "soft points" designed for deer (e.g., standard Core-Lokt or Ballistic Silvertips). These risk splashing on the shoulder blade or dermal shield, failing to reach the vitals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Optics & Essential Gear
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  The vast open spaces of the Kalahari necessitate high-quality optics.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Binoculars</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      10x42 is the standard. Brands like Swarovski, Leica, and Zeiss are preferred for their clarity, which is essential for distinguishing the horn bases of bulls vs. cows at 800 yards.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Riflescopes</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Variable magnification is key. A 3-9x40 is adequate, but a 4-14x50 or 3-15x50 allows for better target acquisition at range. Scopes with ballistic turrets (e.g., Leupold CDS, Swarovski BT) are highly advantageous for shots extending past 250 yards.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Camouflage & Clothing</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The Kalahari is not green - it is a landscape of pale golds, tans, greys, and reddish sands. Avoid dark woodland patterns. Opt for open patterns with light macro-elements (KUIU Valo, Sitka Subalpine, Kings Camo Desert Shadow) or traditional olive/khaki solid earth tones.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Boots & Gaiters</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The ground is littered with thorns, sharp rocks, and "dubbeltjies" (devil thorns). Soft rubber sole is quieter for stalking but offers less protection. Vibram sole provides protection but can be noisy on rocks. Gaiters essential to prevent sand and thorns from entering the boot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement Expert Guide */}
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
                    Expert Guide: Shot Placement & Anatomy (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    Poor shot placement is the <span className="text-clay">leading cause of lost trophies</span>. Gemsbok anatomy differs from North American deer.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "Hump" Deception</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Gemsbok have a dorsal hump of muscle and spinal processes. Hunters often aim "one-third down from the back," inadvertently aiming too high because the backline is higher than it appears.
                      </p>
                      <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                        This results in a shot through the "void" (above the lungs, below the spine) - a non-fatal wound.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Correct Point of Aim (Broadside)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mb-2">
                        Trace the back line of the front leg up into the body. Aim into the bottom one-third of the body.
                      </p>
                      <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                        The heart sits very low in the chest, nestled between the forelegs. A low shoulder shot anchors the animal.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim for the off-side shoulder. The bullet must traverse the paunch - use a heavy caliber to ensure penetration into the lung field.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Danger: Wounded Gemsbok</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        <strong className="text-clay">Never approach wounded from front - horns are lethal.</strong> Wounded gemsbok extremely dangerous - "dead" animal has been known to reflexively slash at tracker. One of few antelope that will actively defend itself against apex predators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Standards */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Evaluation & Field Judging
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  One of the most difficult skills in African hunting due to the fact that <span className="text-clay">females possess longer horns than males</span>.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Scoring Systems</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Safari Club International (SCI):</strong> Measures length of both horns and circumference of bases. Because length is primary driver of score, females often score higher and dominate record books. Gold Medal Standard: ~40 inches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Rowland Ward:</strong> Focuses on game animals as representatives of species, has minimum score that often requires significant mass. Historically favored heavier horns of bull, but high-scoring cows also qualify. Minimum: 40 inches</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The "Hip Bone" Rule</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      When the animal is standing with its head in a natural, relaxed position (not alert/high), visualize the horns laying back. If the tips reach the hip bone (croup), the horns are likely around 36-38 inches. If they extend past the hip bone, the animal is likely a 40-inch trophy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Estimation Checklist
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  To distinguish a trophy bull from a trophy cow:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Bull Checklist</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Thick Bases:</strong> Do bases appear to touch? Is there little to no skin/hair visible between them?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Straightness:</strong> Are horns relatively straight with little curvature?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Short Taper:</strong> Do horns carry thickness up 2/3 of length before tapering?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Body Size:</strong> Is neck thick and muscular? Is penis sheath visible?</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Cow Checklist</h4>
                    <ul className="space-y-2 text-silver/80 font-body text-sm font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Thin Bases:</strong> Is there visible gap of hair between horn bases?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Curvature:</strong> Do horns sweep backward (saber-like) or splay outwards?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Length:</strong> Do horns appear exceptionally long, often extending well past rump?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Body Size:</strong> Is neck slender? Is udder visible?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Hunting Strategies
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Spot and Stalk (Classic)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    The classic method. Hunters drive or walk to high vantage points (dunes or "koppies") to glass for herds.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                    Once located, a stalk is planned using the wind and available cover (termite mounds, isolated trees).
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    <strong className="text-cream">Critical:</strong> Gemsbok have phenomenal eyesight - movement must be slow.
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Ambush (Waterhole)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    In dry seasons, hunting from a blind over a waterhole or mineral lick is effective.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    This allows for close-range evaluation of trophies, critical for distinguishing sex (bulls vs. cows).
                  </p>
                </div>
                <div>
                  <h4 className="text-clay font-heading text-base mb-4 font-light">Walk and Stalk</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    Tracking fresh spoor on foot.
                  </p>
                  <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                    The most physically demanding method, requiring endurance to follow a herd for kilometers in soft sand.
                  </p>
                </div>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Gemsbok meat is widely considered some of the finest in Africa, rivaling the Eland.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Venison Characteristics</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Texture:</strong> Fine-grained and tender, provided the animal was not stressed before death.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor:</strong> Mild, slightly sweet, with no "gamey" or metallic aftertaste. Very lean, with low intramuscular fat.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Carcass Yield:</strong> Dressed carcass typically yields 55-58% of live weight, high conversion ratio beneficial for meat hunters.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Cuts & Cooking</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Fillets (Backstrap):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Prime cut. Best seared quickly over high heat (braai) to rare or medium-rare. Overcooking makes tough.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Rump/Sirloin:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Excellent for steaks or "schnitzels."
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Neck:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Contains connective tissue and collagen. Ideal for "Potjiekos" (traditional South African slow-cooked stew). Collagen breaks down into gelatin, enriching gravy.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shins:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Used for Osso Bucco or stews.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Biltong:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Silverside and topside roasts cured, spiced (coriander, vinegar, salt, pepper), air-dried to make biltong, high-value snack.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Hide & Horns</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Horns</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Polished horns are often used to make handles for knives or canes.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Hide</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      The skin is thick and durable. It is tanned for floor rugs (hair-on) or used to make heavy leather goods. The striking facial markings make the skull a popular "European mount" (bleached skull and horns).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Impala Specific */}
      {species.id === "impala" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              The Impala is not a heavy animal, but it possesses the <span className="text-clay font-medium">legendary tenacity of African game</span>. A poor shot will result in an adrenaline-fueled flight that can last for kilometers. Therefore, bullet construction and shot placement are paramount.
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
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.243 Win</span>
                        </td>
                        <td className="py-4 pr-6">100 gr</td>
                        <td className="py-4">Absolute minimum. Suitable for culling or head shots by expert marksmen. Premium controlled-expansion bullets (Barnes TTSX, Nosler Partition) mandatory. Leaves little margin for error.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">6.5 Creedmoor</span>
                        </td>
                        <td className="py-4 pr-6">140 gr</td>
                        <td className="py-4">Excellent sectional density and low recoil. Very popular modern choice. Bonded soft point recommended.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.270 Win</span>
                        </td>
                        <td className="py-4 pr-6">130-150 gr</td>
                        <td className="py-4">The "sweet spot" for impala. High velocity, flat shooting. Ideal for open savannah. Delivers sufficient hydrostatic shock to drop impala instantly with heart/lung shot.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">7x57 Mauser</span>
                        </td>
                        <td className="py-4 pr-6">140-175 gr</td>
                        <td className="py-4">The classic "bushveld" caliber. Moderate velocity causes less meat damage. Cup & Core or Bonded.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.308 Win</span>
                        </td>
                        <td className="py-4 pr-6">150-165 gr</td>
                        <td className="py-4">The professional's choice. Perfect balance of power and shootability. Any premium hunting bullet.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.30-06 Sprg</span>
                        </td>
                        <td className="py-4 pr-6">165-180 gr</td>
                        <td className="py-4">Heavy hitting. Best if impala is part of mixed bag hunt. Bonded/Partition recommended.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Bowhunting Setup */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Bowhunting Setup & The String Jump
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Bowhunting impala requires a specialized approach to mitigate the <span className="text-clay">string jump phenomenon</span>.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Kinetic Energy (KE)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      While a pass-through is relatively easy on an impala's ribcage, the shoulder blade (scapula) is dense.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      A setup generating 40-50 ft-lbs of KE is the minimum, with 60+ ft-lbs being ideal to ensure bone-breaching capability.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Arrow Weight</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Heavier arrows (400-450 grains) absorb more energy from the bow and make the shot quieter, which is more important than raw speed. A quiet bow is the best defense against string jumping.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Shot Distance</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Ethical shots should be capped at 30 yards (27 meters). Beyond this, the time-of-flight is sufficient for the animal to react and move completely out of the aim point.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Aim Point Adjustment (CRITICAL)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      Experienced PHs advise clients to aim for the "low heart" or even the shadow line on the brisket.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      If the animal drops at the shot, the arrow will impact the center lungs. If it doesn't drop, the arrow strikes the heart. Aiming for the center of the shoulder often results in a high hit over the spine due to the drop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Shot Placement & Anatomy
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Anatomy is the guide to ethical hunting.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Broadside (Golden Standard)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Trace the line of the front leg up into the body. The heart sits very low, nestled between the forelegs. Aiming one-third of the way up the body, directly above the leg, will destroy the top of the heart and the lungs.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Frontal (Throat Patch Shot)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Where the white throat meets the brown chest, there is a soft spot that leads directly into the major arteries and tops of the lungs. Effective but the target area is small.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The "Hump" Myth</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Impala have tall neural spines above the scapula, forming a slight hump. A shot placed too high in this area (above the spine but below the skin) will stun the animal temporarily (spinal shock) but often results in a non-fatal wound and a lost animal.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-2">
                      <strong className="text-clay">"Aim low" is the mantra.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Judging */}
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
                    Field Judging Trophies
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    For the client seeking a trophy ram, estimating horn size in the field is a critical skill. Impala horns are deceptive - their lyre shape and 3D curvature make length estimation difficult from a single angle.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "Ears" Benchmark</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        The most reliable field gauge is the ear length, which is consistently around 15-16 cm (6 inches) on a mature ram. If the vertical height of the horns (when viewed from the front) appears to be 2.5 to 3 times the length of the ear, the ram is likely in the trophy class (20 inches+).
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The Shape Trap</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Wide horns are visually impressive and often preferred by clients for their aesthetic, but they frequently score lower than tall, narrow horns because the "spread" eats up the length. Conversely, a ram with horns that go straight up and don't curve out wide may measure surprisingly long.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Tip Orientation</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Trophy quality is often determined by the final few inches. Look for tips that point straight up or slightly outwards. Tips that hook aggressively inward and toward each other often indicate the horn has finished growing and is curving back on itself, potentially sacrificing length.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Bases and Ridges</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Mature rams have heavy bases that appear to nearly touch on the forehead. The ridges should be well-defined and carry well up the horn. Smooth bases indicate youth, while worn, smooth tips indicate old age.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Scoring Minimums</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        <strong className="text-cream">SCI (Safari Club International):</strong> Minimum score is 52 inches. This is a composite score of the length of both horns plus the circumference of the bases.
                      </p>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light mt-2">
                        <strong className="text-cream">Rowland Ward:</strong> Minimum length is 23 5/8 inches (measured along the curve of the longest horn). A 24-inch impala is considered the "Holy Grail" benchmark for most hunters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Impala venison is widely regarded as some of the finest eating meat in Africa, bridging the gap between the gamey intensity of kudu and the blandness of beef.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Meat Profile</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Fat Content:</strong> Exceptionally lean, with intramuscular fat often below 2%. The fat that does exist is often yellow (depending on diet) and can be waxy, so it is usually trimmed.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Texture:</strong> The muscle fibers are fine-grained, resulting in a tender texture, provided the animal was not stressed at harvest.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Flavor:</strong> The taste is described as herbaceous and sweet, lacking the strong "livery" or metallic taste associated with some other game species. Highly palatable to those unfamiliar with venison.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Carcass Yield</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Dressing Percentage:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        The ratio of carcass weight to live weight is high, typically between 56% and 59%. This is significantly higher than domestic cattle (often ~50-52%).
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Calculation:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        A 50kg ewe will yield a carcass of approximately 28-29kg.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Bone-out Yield:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        From that carcass, approximately 75% is usable meat, with the rest being bone and trim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Aging and Processing</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Rigor Mortis</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Like all meat, impala must pass through rigor mortis. Cooking meat while it is in rigor results in "shoe leather" toughness.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Aging (Maturation)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      The carcass should hang in a cold room (0°C - 4°C) for a minimum of 5 to 7 days. During this time, endogenous enzymes (calpains and cathepsins) break down the structural proteins (actin and myosin) and connective tissue, significantly improving tenderness.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Skin-On vs. Skin-Off</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      It is standard practice to age the carcass with the skin on. This prevents the outer layer of the meat from drying out (case hardening) and protects the meat from bacterial contamination during the hanging process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Biltong (Cured Dried Meat)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Impala is a premier biltong meat. The best cuts are the Silverside (Bottom Round) and Topside (Top Round) from the hindquarters. These large muscles allow for long, clean strips to be cut with the grain. Recipe: Traditional vinegar, toasted coriander, black pepper, and coarse salt. No nitrates are typically used in traditional farm-style biltong.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Rugstring</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      The backstraps (loins) are often too precious to turn into standard biltong. However, they are sometimes used to make "Rugstring" - a very thin, quickly dried biltong that is tender and delicacy. More often, the loins are reserved for steaks or carpaccio.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Potjiekos (Stew)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      The shanks and neck, which are rich in connective tissue (collagen), are ideal for slow cooking. The collagen breaks down into gelatin, creating a rich, thick sauce characteristic of the South African potjie.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Steaks</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      The fillet (tenderloin) and backstrap (sirloin) should be cooked quickly over high heat to medium-rare. Overcooking lean impala meat renders it dry and tough. Versatile and tender. Absorbs marinades well - ideal for schnitzels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Springbok Specific */}
      {species.id === "springbok" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Hunting Springbok is often a hunter's introduction to the <span className="text-clay font-medium">"long range" game of African safaris</span>. The terrain, vast flat pans or undulating Karoo scrub, offers zero cover and calls for distinct tactical approaches.
            </p>

            {/* Recommended Calibers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading text-cream mb-6 font-light">
                Recommended Rifles & Calibers
              </h3>
              <div className="border border-clay/20 p-6 md:p-8 mb-8">
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  The Springbok is a small target (vital zone ~15-20cm) often engaged at distances exceeding 250 meters. The ideal caliber must be <span className="text-clay">flat-shooting and inherently accurate</span>.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.243 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">80-100 gr</td>
                        <td className="py-4">The "Classic" Springbok caliber. Flat trajectory, low recoil. Ideal for shots up to 300m. Lethal but requires precise placement.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">6.5 Creedmoor / .260 Rem</span>
                        </td>
                        <td className="py-4 pr-6">120-140 gr</td>
                        <td className="py-4">Superior to the .243 in windy conditions (common in the Karoo). High BC, wind resistant. Excellent penetration.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.270 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">130 gr</td>
                        <td className="py-4">A favorite for long-range plains game. High velocity, flat arc. Strikes with hydrostatic shock.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">7mm Rem Mag</span>
                        </td>
                        <td className="py-4 pr-6">150-160 gr</td>
                        <td className="py-4">Long-range dominance. Allows for shots at 350m+. Can cause excessive meat damage if shot placement hits the shoulder bone.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.308 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">150 gr</td>
                        <td className="py-4">Reliable killer, but requires accurate range estimation and hold-over calculation past 250m. Rainbow trajectory at range.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.300 Win Mag</span>
                        </td>
                        <td className="py-4 pr-6">180 gr</td>
                        <td className="py-4">Generally overkill for Springbok unless hunting larger game simultaneously. Use bonded bullets to minimize carcass destruction.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-charcoal/30 border border-clay/10">
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Optics</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Fixed power scopes (e.g., 4x) are insufficient for modern Springbok hunting. A variable scope in the 3-9x40 range is the minimum standard, with 4-12x50 or 4-16x50 being preferred. The ability to increase magnification helps in verifying the horn tips (hook vs. straight) before pulling the trigger.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Walk-and-Stalk (Gold Standard)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  This method is the gold standard for fair chase hunting.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Spotting (Glassing)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The hunt begins from a vantage point (kopje) or a slow-moving vehicle. High-quality binoculars (10x42) are essential to distinguish rams from ewes at 500+ meters.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Approach</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Once a target is identified, the hunter must utilize the topography. Dry riverbeds (dongas), termite mounds, and even small drainage lines are used to close the distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Crawl</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The final 200 yards often involves crawling on hands and knees. The hunter must keep a low profile, as the Springbok's vision is exceptional.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Sentinel Management (CRITICAL)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The hunter must never focus solely on the target ram. Peripheral vision must be used to monitor the "sentinel ewes" on the flanks of the herd. If a sentinel stops feeding and stares, the hunter must freeze immediately. Movement is detected instantly; a stationary object, even if out of place, may be ignored.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Ambush (Voorsit)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Used primarily during culling operations or for bow hunters.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Waterhole Blinds</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      In the dry season, blinds placed near water are effective. However, scent control is paramount as the wind often swirls in the basins where waterholes are located.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Migration Routes</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Knowledgeable PHs (Professional Hunters) will identify corridors between feeding and bedding areas and set up ambush points in the early morning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement */}
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
                    Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    The Springbok has a <span className="text-clay">small vital area (~15-20cm)</span> that requires precision.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Broadside (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Trace the line of the foreleg up to the midpoint of the body. A shot placed "on the shoulder" breaks the skeletal structure and hits the heart/lungs. A shot "behind the shoulder" (crease) saves meat but may result in a 50-meter death run.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal (Throat Patch Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        The target is the "throat patch" where the neck joins the chest. This is a small target; a miss to the left or right hits the shoulder blade or brisket, often leading to a non-fatal wound. Only recommended for expert marksmen.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim for the off-side shoulder. The bullet will traverse the paunch (gut) and enter the chest cavity. This is lethal but risks contaminating the meat with stomach contents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Judging */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging: Ram vs. Ewe
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Judging Springbok on the hoof is notoriously difficult due to the presence of horns on both sexes. Before assessing horn size, the hunter must confirm gender.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Body Mass</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Rams are "blockier" with thick, muscular necks. Ewes appear slender, "dainty," and have thin necks.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Horn Bases (Most Reliable)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Ram horns are thick at the base, often appearing to nearly touch. Ewe horns are thin (pencil-like) and have a wider gap between them.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Horn Shape</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Ram horns curve backward and then hook inward aggressively. Ewe horns are often straighter, more parallel, and lack the heavy ridging (annuli) of the male.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Size Estimation
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  A trophy Springbok is generally considered to be anything over 12 inches, with 15+ inches being exceptional.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Ear Rule</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The average Springbok ear is 6-7 inches long. If the horn looks to be double the length of the ear, the animal is in the 12-14 inch range. If the horns tower significantly above the double-ear height and have a deep curl, it is a high-quality trophy.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Hook</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      A mature ram's horns must hook inward at the tips. If the tips point straight up or out, the animal may be young or have poor genetics.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Mass</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Look for ridges that extend well up the horn shaft. Smooth bases indicate a young animal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Record Book Minimums */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Record Book Minimums
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-clay/20">
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Organization</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Category</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Minimum Score</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Measurement Method</th>
                    </tr>
                  </thead>
                  <tbody className="text-silver/80 font-body text-sm">
                    <tr className="border-b border-clay/10">
                      <td className="py-4 pr-6">Rowland Ward</td>
                      <td className="py-4 pr-6">All Springbok</td>
                      <td className="py-4 pr-6">14"</td>
                      <td className="py-4">Length of longest horn along the curve</td>
                    </tr>
                    <tr className="border-b border-clay/10">
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">Common Springbok</td>
                      <td className="py-4 pr-6">30"</td>
                      <td className="py-4">Method 1 (Sum of length + circumference of both horns)</td>
                    </tr>
                    <tr className="border-b border-clay/10">
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">Kalahari Springbok</td>
                      <td className="py-4 pr-6">35"</td>
                      <td className="py-4">Method 1</td>
                    </tr>
                    <tr className="border-b border-clay/10">
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">Black Springbok</td>
                      <td className="py-4 pr-6">28"</td>
                      <td className="py-4">Method 1</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">Copper Springbok</td>
                      <td className="py-4 pr-6">30"</td>
                      <td className="py-4">Method 1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-4">
                <strong className="text-cream">Note:</strong> The disparity in SCI scores (e.g., 35" vs 14") is because SCI adds the length of both horns plus the circumference of the bases, whereas Rowland Ward measures only the length of the single longest horn.
              </p>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Springbok venison is widely regarded as some of the finest eating meat in Africa. It is a staple of the South African heritage cuisine and a high-value export product.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Meat Characteristics</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor Profile:</strong> The flavor is heavily influenced by the diet. Springbok feeding on aromatic Karoo bushes (such as Pentzia incana) develop meat naturally infused with herbal, spicy notes. This "Karoo lamb" quality is highly prized. Less gamey than meat of larger antelope.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Texture:</strong> Fine-grained and tender.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Fat Content:</strong> Ultra-lean meat with less than 2% intramuscular fat. The fat that does exist is external, white, and hard. Because of lack of marbling, meat intolerant of overcooking. Must be served rare or medium-rare; cooking to "well done" renders tough, dry, and liver-like.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Nutritional Value:</strong> Functional superfood. High protein density (approx. 21.5g per 100g serving). Haem-iron content significantly higher than domestic beef. Favorable ratio of polyunsaturated fatty acids, low in cholesterol. 80% less cholesterol than beef.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Backstrap (Loin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Tenderest cut; zero connective tissue. Carpaccio: Semi-frozen, sliced paper-thin, dressed with olive oil and parmesan. Medallions: Seared quickly in butter, served rare.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shank:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        High collagen content; tough connective tissue. Potjiekos: Slow-braised in cast-iron pot with red wine and vegetables. Collagen breaks down into gelatin, creating rich sauce.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Leg (Haunch):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Large, lean muscle blocks. Biltong: Classic cut for curing and drying. Roasts: Larded with bacon to add moisture, roasted to medium-rare.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shoulder:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Complex muscle structure; tougher than leg. Sausage (Wors): Ground and mixed with pork fat (spek) to make droëwors or boerewors. Stewing meat.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Neck:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Interspersed with bone and connective tissue. Stew/Potjie: Bones add marrow and depth to soups and stews.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Blesbok Specific */}
      {species.id === "blesbok" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Hunting the Blesbok is often the entry point for novice hunters in Africa, yet it remains a staple challenge for experienced sportsmen due to the animal's <span className="text-clay font-medium">keen senses and open habitat</span>. The Blesbok is deceptively tough. Many describe it as tenacious or hard to put down.
            </p>

            {/* Recommended Calibers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading text-cream mb-6 font-light">
                Recommended Rifles & Calibers
              </h3>
              <div className="border border-clay/20 p-6 md:p-8 mb-8">
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  A poor shot will result in an animal that can run for kilometers, often requiring a grueling follow-up. Because Blesbok are often shot at intermediate ranges where velocity is still high, <span className="text-clay">bullet integrity is crucial</span>.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.243 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">90-100 gr</td>
                        <td className="py-4">Minimum - adequate for culling or youth hunters, but requires surgical shot placement. Avoid on quartering shots or large rams.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">6.5mm (Creedmoor / Swede)</span>
                        </td>
                        <td className="py-4 pr-6">130-140 gr</td>
                        <td className="py-4">Excellent - high sectional density ensures deep penetration. Low recoil allows for accurate shot placement. Currently a favorite among PHs.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">7mm (7x57, 7mm-08, 7mm Rem Mag)</span>
                        </td>
                        <td className="py-4 pr-6">140-160 gr</td>
                        <td className="py-4">Ideal - the 7x57 Mauser is legendary in Africa. Offers perfect balance of trajectory, penetration, and knockdown power.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.30 Cal (.308 Win, .30-06)</span>
                        </td>
                        <td className="py-4 pr-6">150-180 gr</td>
                        <td className="py-4">Versatile - the standard. A .308 with 165gr bullet is arguably the perfect Blesbok medicine, handling bone impacts and quartering angles with ease.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.300 Magnums</span>
                        </td>
                        <td className="py-4 pr-6">180 gr+</td>
                        <td className="py-4">Overkill? Effective for long-range shots across open plains, but risks excessive meat damage if standard soft-point bullets are used.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-charcoal/30 border border-clay/10">
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Bullet Construction (CRITICAL)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Premium, controlled-expansion bullets (e.g., Barnes TSX, Swift A-Frame, Nosler Partition) are recommended over standard cup-and-core bullets. A frangible bullet may splash on the Blesbok's humerus or shoulder blade, failing to penetrate the vitals.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Spot and Stalk (The Classic Method)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  The terrain dictates the tactic. Since Blesbok inhabit open plains, the hunt is visually driven.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Spotting (Glassing)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The hunter and Professional Hunter (PH) will glass from a high vantage point or a slowly moving vehicle to locate a herd. Once a target ram is identified, the stalk begins on foot.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Approach</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Blesbok have excellent vision. Stalking requires using every termite mound, grass tuft, and depression in the ground for cover. The "golden rule" is to never walk directly at the herd. A direct approach signals predation. Instead, hunters should "tack" like a sailboat, moving at angles that make it appear as though they are passing by the herd.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Wind (CRITICAL)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The wind must be right. Blesbok have a keen sense of smell. Stalking downwind is futile.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Distance</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Successful stalks usually result in shots taken from 150 to 250 meters. Getting closer than 150 meters to a Blesbok herd on an open plain is a test of true fieldcraft.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Ambush (Voorsit)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  For bowhunters or older clients unable to walk long distances.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Waterhole Blinds</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Blinds placed at waterholes or mineral licks are highly effective. This is best done during the dry season when water dependency peaks. Blesbok must drink surface water regularly, typically once a day, making waterholes a focal point for daily movement.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Migration Routes</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Knowledgeable PHs will identify corridors between feeding and bedding areas and set up ambush points along fence lines or game paths that herds use to transition between areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement */}
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
                    Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    African antelope anatomy places the heart and lungs <span className="text-clay">slightly lower and further forward</span> than in North American deer.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Broadside (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Trace the back line of the front leg upwards. Place the crosshairs one-third of the way up the body. This destroys the top of the heart and the lungs. If the animal is on high alert, aiming "high shoulder" (halfway up, directly on the shoulder bone) will anchor the animal by breaking the skeletal structure, though this sacrifices some shoulder meat.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim for the off-side shoulder (the front leg on the far side). The bullet must enter behind the ribs and traverse the chest cavity.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Only recommended for experienced marksmen. Aim for the "soft spot" at the base of the neck, where it joins the chest.
                      </p>
                      <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-2">
                        <strong className="text-clay">Warning:</strong> Ensure the animal is not dipping its head to nod (bot fly irritation) when firing. A Blesbok that is nodding is a difficult target. The head movement can obscure the vital triangle or cause the animal to jerk at the moment of the trigger pull.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Judging */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Field Judging: Ram vs. Ewe (CRITICAL)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  For the trophy hunter, the primary challenge is not just hitting the Blesbok, but ensuring the target is a mature ram of trophy quality. <span className="text-clay">Mistakes are common because ewes also carry horns</span>. Shooting a female by mistake is a cardinal sin in trophy hunting.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Horn Bases (Most Reliable)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Ram:</strong> Thick and heavy. Bases are close together, often light yellow/white on the front surface.
                    </p>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mt-2">
                      <strong className="text-clay">Ewe:</strong> Thin and spindly. Bases are narrower, appearing like pencils rather than cigars.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Horn Color</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Ram:</strong> Ridges (rings) are often noticeably lighter (yellow/white) against the dark grooves.
                    </p>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mt-2">
                      <strong className="text-clay">Ewe:</strong> Generally darker, lacking the bold contrast of the male's ridges.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Body Mass</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Ram:</strong> Thick, muscular neck. Heavier built shoulders.
                    </p>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mt-2">
                      <strong className="text-clay">Ewe:</strong> Slender neck, lighter frame.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Penis Sheath</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Ram:</strong> Visible button/sheath on the underbelly (requires good optics).
                    </p>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mt-2">
                      <strong className="text-clay">Ewe:</strong> No sheath. Teats may be visible.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Behavior</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Ram:</strong> Solitary or tending females. Aggressive posturing.
                    </p>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mt-2">
                      <strong className="text-clay">Ewe:</strong> Associated closely with lambs or other females in the herd.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Size Estimation
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  A "good" Blesbok trophy is defined by the length of the horns and the circumference of the bases.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Length</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      A mature ram will have horns measuring 15 inches (38 cm) or more. The world record exceeds 20 inches, but 16-17 inches is considered excellent.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Shape</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Look for a wide spread and a distinct "recurved" shape where the tips hook back inward.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Bases</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The bases should be thick. If the white bases look like they are almost touching, it is likely a mature ram.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Record Book Minimums */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Record Book Minimums
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-clay/20">
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Organization</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Category</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Minimum Score</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Measurement Method</th>
                    </tr>
                  </thead>
                  <tbody className="text-silver/80 font-body text-sm">
                    <tr className="border-b border-clay/10">
                      <td className="py-4 pr-6">Rowland Ward</td>
                      <td className="py-4 pr-6">All Blesbok</td>
                      <td className="py-4 pr-6">16 ½ inches</td>
                      <td className="py-4">Length of longest horn along the front curve</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">All Blesbok</td>
                      <td className="py-4 pr-6">40 points</td>
                      <td className="py-4">Total score (length of both horns + circumference of bases). Gold Medal: ~43 points</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-4">
                <strong className="text-cream">Note on Measurement:</strong> To measure, use a flexible steel tape. Start at the base on the forehead, follow the center of the front curve over the ridges, and continue to the tip. Do not press the tape into the grooves; bridge the ridges.
              </p>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Blesbok venison is highly regarded and commercially significant. It is a staple of the South African heritage cuisine.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Meat Characteristics</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor Profile:</strong> Deep red, fine-grained, and extremely lean. Has a distinctive gamey flavor, often herby or aromatic from the essential oils in Karoo bushes and the sweet grasses they consume.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Fat:</strong> The fat is yellow. Unlike beef fat, game fat has a high melting point and can coat the palate unpleasantly. It is also prone to going rancid quickly. Standard practice to trim all visible yellow fat from the carcass during processing.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Meat Yield:</strong> ~55% of live weight (high carcass yield).
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Primary Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Fillet (Tenderloin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Situated inside the ribcage along the spine. Most tender cut. Best eaten fresh, pan-seared quickly to rare/medium-rare.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Backstrap (Loin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Long muscle along the outside of the spine. Excellent for steaks or whole roasts. <strong className="text-clay">Chef's Tip:</strong> Do not overcook. Blesbok loin has zero intramuscular fat; cooking past medium turns it into liver-textured leather.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Hindquarters (Leg):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Silverside, Topside, Thick Flank. Ideal for roasting (if larded with bacon to add moisture) or, most commonly, for making Biltong.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shanks and Neck:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        High in collagen and connective tissue. Tough but flavorful, making them the prize ingredients for Potjiekos (stews) where slow cooking breaks down collagen into gelatin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Heritage: Traditional Recipes</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">The Potjiekos (Little Pot Food)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Slow-cooked stew prepared outdoors in a cast-iron, three-legged pot over coals. It is a social event as much as a meal. Method: Heat oil and lard in pot. Brown Blesbok neck/shank pieces (bone-in adds flavor). Sauté onions, garlic, and bacon. Add red wine, beef stock, and herbs (thyme, coriander, rosemary/kapokbos). Simmer gently for 2-3 hours. Layer vegetables on top. <strong className="text-clay">Crucial Rule:</strong> Do not stir the pot once the veggies are added. Let them steam on top of the meat sauce. Serve with rice or "pap" (maize porridge).
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Traditional Biltong</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      Biltong is not jerky; it is cured and air-dried, retaining a softer texture. Preparation: Use silverside or topside. Cut into strips roughly 2-3cm thick, slicing with the grain. The Cure: Mix coarse salt, brown sugar, black pepper, and toasted coriander seeds (crushed, not ground to dust). Coriander is the signature flavor of Biltong. Process: Sprinkle meat with brown vinegar (to deter flies and mold) and coat thoroughly in spice mix. Let marinate for 4-12 hours. Drying: Hang in cool, well-ventilated area (Biltong cabinet with fan ideal) for 3-5 days. Meat ready when firm on outside but still maroon and slightly moist in center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Red Hartebeest Specific */}
      {species.id === "hartebeest" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Hunting the Red Hartebeest is a classic African plains game experience. It challenges the hunter's ability to spot game, execute a stalk across open terrain, and deliver a precision shot at extended ranges. The Red Hartebeest has a reputation for being <span className="text-clay font-medium">tough</span>. The nickname Tough Ox is well-earned.
            </p>

            {/* Recommended Calibers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading text-cream mb-6 font-light">
                Recommended Rifles & Calibers
              </h3>
              <div className="border border-clay/20 p-6 md:p-8 mb-8">
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  They possess a tenacious will to live and can cover immense distances even when mortally wounded if the shot placement is marginal. <span className="text-clay">Expect shots between 180 and 300 meters</span>. The open terrain necessitates a flat-shooting caliber.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.270 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">140-150 gr</td>
                        <td className="py-4">Functional minimum, but only with heavy, premium bullets. Requires surgical shot placement.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">7mm Remington Magnum</span>
                        </td>
                        <td className="py-4 pr-6">140-160 gr</td>
                        <td className="py-4">Gold standard for Hartebeest. Offers necessary kinetic energy (2700+ Joules) at 300 meters to ensure bullet expansion and shock.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.300 Winchester Magnum</span>
                        </td>
                        <td className="py-4 pr-6">180-200 gr</td>
                        <td className="py-4">Gold standard for Hartebeest. Excellent for long-range shots across open plains with flat trajectory.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.30-06 Springfield</span>
                        </td>
                        <td className="py-4 pr-6">180 gr</td>
                        <td className="py-4">Highly effective out to 250 meters. Proven performer on tough African game.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.308 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">165-180 gr</td>
                        <td className="py-4">Capable, but requires intimate knowledge of bullet drop at ranges past 200 meters.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-charcoal/30 border border-clay/10">
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Bullet Construction (CRITICAL)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    <strong className="text-clay">Monolithic (Copper):</strong> Bullets like Barnes TSX/TTSX or Hornady CX are strongly recommended. They provide deep penetration, punching through the heavy shoulder bones and exiting the animal, leaving a blood trail that is essential in the red sands of the Kalahari.
                  </p>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    <strong className="text-clay">Bonded:</strong> Nosler AccuBond or Swift A-Frame bullets are excellent alternatives, offering high weight retention (80-90%) and controlled expansion. <strong className="text-clay">Standard cup-and-core soft points should be avoided</strong> on shoulder shots as they may fragment on the bone.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Spot-and-Stalk (The Classic Method)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  This is the ethical and traditional method for hunting Red Hartebeest.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Spotting (Glassing)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Hunters utilize high ground or the vehicle to spot herds from a distance. Once a target bull is identified, the stalk begins on foot.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Approach</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The lack of cover in Hartebeest habitat makes this challenging. Hunters must utilize termite mounds, sparse bushes, and undulations in the ground to close the distance.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Wind (CRITICAL)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Wind direction is critical; the Hartebeest's sense of smell is acute. Stalking downwind is futile.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Ambush & Walk-and-Stalk
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Alternative methods for different terrain and conditions.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Ambush</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      In the dry season, waiting at active waterholes or salt licks can be effective. However, due to the species' water independence, this is less reliable than hunting Kudu or Impala. Ambush blinds near established game paths or middens can also yield results.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Walk-and-Stalk</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      In the sandy terrain of the Kalahari, tracking fresh spoor after a rain is a rewarding pursuit. This method often results in close encounters in the scrub, requiring quick reaction times.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shot Placement */}
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
                    Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    Anatomical knowledge is crucial due to the Hartebeest's <span className="text-clay">unique shape</span>.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "Hump" Illusion (WARNING)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        The high withers can deceive a hunter into aiming too high. The spine drops sharply behind the shoulder. A high shoulder shot often hits the non-vital dorsal processes (the "hump"), temporarily stunning the animal (spinal shock) but allowing it to recover and run off.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Broadside (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim directly up the back line of the front leg, approximately one-third of the way up the body. This places the bullet squarely in the heart/lung complex.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim for the opposite shoulder. The bullet should enter behind the ribs and travel forward into the vitals.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        A shot to the center of the chest, where the neck meets the brisket, is effective but risky if the animal is slightly turned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Judging */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Judgment: Bull vs. Cow (CRITICAL)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Determining the sex of a Red Hartebeest is <span className="text-clay">notoriously difficult</span> because both sexes have horns of similar length. Many inexperienced hunters have harvested what they thought was a bull, only to find they shot a large cow.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Bases (Definitive Check)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Bull:</strong> Mature bull has thick, heavy horn bases. In a trophy-class animal, the bases will be swollen and nearly touching on the pedicel.
                    </p>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mt-2">
                      <strong className="text-clay">Cow:</strong> If you can see a clear gap of skin or hair between the horn bases, it is likely a cow or a young bull.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The "Figure 7"</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      When viewed from the side, the horn shape should resemble a number "7" or a backward question mark. In trophy bulls, the tips of the horns point straight back or slightly upwards. If the tips hook downwards, the trophy score will be lower.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Body Mass</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      <strong className="text-clay">Bull:</strong> Bulls have a visibly thicker neck and a more muscular shoulder region. Their coat often darkens to a deep purple-brown on the shoulders with age.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Record Book Minimums
                </h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Organization</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Minimum Score</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Measurement Method</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">Safari Club International (SCI)</td>
                        <td className="py-4 pr-6">62 inches</td>
                        <td className="py-4">Sum of lengths of both horns + circumference of bases</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">Rowland Ward</td>
                        <td className="py-4 pr-6">23 inches</td>
                        <td className="py-4">Length of the longest horn along the curve</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                  <strong className="text-cream">Horn Configuration:</strong> Both sexes carry horns, rising from a single, elevated bony pedicel. The growth pattern is complex and bracket-shaped: horns grow upwards and slightly forwards, then curve outwards, and finally hook sharply backwards, forming a shape often likened to a "cowboy stance" or the handlebars of a motorcycle.
                </p>
              </div>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                While often hunted for the trophy, the Red Hartebeest yields some of the finest venison in Africa, prized for its texture and flavor profile which rivals that of Kudu and Eland.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Meat Characteristics</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Nutritional Profile:</strong> Characterized by exceedingly low intramuscular fat content (approx. 2.4%) and high protein density (20.5%).
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Texture:</strong> The meat has a fine grain. Scientific studies on shear force (tenderness) indicate that meat from females is generally more tender (3.59 kg shear force) than that of males (4.23 kg). The Infraspinatus (shoulder) muscle in females is the most tender cut, making it a hidden gem for the butcher.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-cream">Flavor:</strong> Described as having a distinct but not overpowering game flavor, often compared to high-quality beef but with a richer, iron-heavy profile due to the animal's activity levels.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Biltong (Traditional Dried Meat):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Hartebeest is widely considered a superior biltong meat because its leanness prevents the rancidity that can occur with fattier meats during the drying process. Preferred cuts: Silverside (outer thigh) and Topside (inner thigh). Cut into 1-inch thick strips, marinate 4-12 hours, hang for 3-6 days until meat has lost approximately 50% of weight.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">The Potjie (Slow Cooked Stew):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Because the meat is tough (especially in bulls), slow cooking is excellent. Cuts: Shin, Neck, and Chuck (high in collagen). Cube and brown in cast-iron pot, add onions, garlic, bacon, red wine, and beef stock. Simmer slowly for 3-4 hours. The collagen breaks down into gelatin, creating a rich, thick gravy.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Steaks (Backstrap/Loin):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        The backstrap (loin) is the most prized cut for grilling. Must be trimmed of all silverskin. Cook rapidly over extremely high heat to medium-rare (internal temp 52°C / 125°F). Overcooking will render it dry and liver-like. Serve with berry reduction or garlic butter. Wrapping medallions in bacon before grilling is a popular technique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Bushbuck Specific */}
      {species.id === "bushbuck" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Hunting bushbuck is often described as a game of patience and observation, akin to hunting whitetail deer in the US or Roe deer in Europe, but with a <span className="text-clay font-medium">dangerous twist</span>. The bushbuck has a legendary reputation for aggression and earns the Afrikaans moniker Bosbok. It is widely regarded as the most dangerous of the medium-sized antelopes.
            </p>

            {/* Recommended Calibers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading text-cream mb-6 font-light">
                Recommended Rifles & Calibers
              </h3>
              <div className="border border-clay/20 p-6 md:p-8 mb-8">
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Hunting bushbuck usually occurs at <span className="text-clay">close range (under 100 meters)</span> but in very heavy cover. This dictates specific equipment choices.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.243 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">100 gr (Premium)</td>
                        <td className="py-4">Adequate for open shots but marginal for raking shots in thick bush. Requires premium bullets (e.g., Nosler Partition).</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">7x57 Mauser</span>
                        </td>
                        <td className="py-4 pr-6">140-175 gr</td>
                        <td className="py-4">Ideal. Offers manageable recoil and sufficient energy to anchor a ram. Classic bushveld caliber.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.308 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">150-180 gr</td>
                        <td className="py-4">Ideal. Versatile and proven performer in heavy cover. Excellent for close-range work.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.30-06 Springfield</span>
                        </td>
                        <td className="py-4 pr-6">165-180 gr</td>
                        <td className="py-4">Ideal. Offers manageable recoil and sufficient energy. Proven on tough African game.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.375 H&H / 9.3x62 Mauser</span>
                        </td>
                        <td className="py-4 pr-6">270-300 gr</td>
                        <td className="py-4">Surprisingly effective for dedicated bush hunting. Heavy bullets at moderate velocities create large wound channels without excessive meat damage.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-charcoal/30 border border-clay/10">
                  <h4 className="text-cream font-heading text-base mb-3 font-light">The "Brush Busting" Debate</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    A common hunting lore suggests that heavy, round-nosed bullets can "bust" through brush without deflecting. <strong className="text-clay">Ballistic experiments debunk this:</strong> all bullets deflect when hitting twigs. However, heavy, slow-moving bullets with high sectional density are less likely to fragment or destabilize completely compared to light, high-velocity spitzer bullets.
                  </p>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    <strong className="text-clay">Recommendation:</strong> Avoid light, fragile bullets (e.g., Ballistic Tips in .243) which may explode on a twig or the shoulder blade. Opt for <strong className="text-clay">heavy-for-caliber, bonded, or monolithic bullets</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Spot and Stalk (The Classic Method)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  This is the classic method for hunting bushbuck.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Spotting (Glassing)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Hunters glass riverine valleys and forest edges at first light and last light from a vantage point. Once a ram is spotted, the stalk begins.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Challenge</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      This is challenging because the riverine vegetation is often dry and noisy ("wait-a-bit" thorns), and the bushbuck's hearing is acute. The animal's cryptic behavior and ability to freeze motionless make it extremely difficult to locate and approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Ambush & Driven Hunts
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Alternative methods for different terrain and conditions.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Ambush (Blind Hunting)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Sitting in a blind or treestand over a waterhole or a cultivated food plot (lucerne) is highly effective. This method allows for careful evaluation of the trophy, which is critical given the difficulty of judging horn length in the shadows.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Driven Hunts</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      In dense coastal bush (Eastern Cape), beaters may be used to push animals toward standing guns. This is fast-paced and requires shotgun shooting or quick rifle work, but it offers less opportunity for selective trophy judgment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optics and Gear */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Optics & Camouflage
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Scopes (CRITICAL)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Bushbuck are hunted in the "gray light" of dawn and dusk. <strong className="text-clay">Light transmission is the critical factor</strong>. A scope with a 50mm or 56mm objective lens and high-quality glass (e.g., Zeiss, Swarovski, Meopta Meostar) allows the hunter to see the crosshairs against a dark animal in a dark bush when the naked eye cannot. <strong className="text-clay">Illuminated reticles are highly recommended</strong>.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Camouflage</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    The hunting environment is high-contrast (shadow and light). Patterns that mimic "sticks and leaves" often blob out into a dark silhouette at a distance. Modern "macro-pattern" camouflages like KUIU Valo or Prym1, which use complex organic shapes to break up the human outline, are superior in this terrain.
                  </p>
                </div>
              </div>
            </div>

            {/* Shot Placement */}
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
                    Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    <span className="text-clay">Anatomy is key. A wounded bushbuck is a liability.</span> When wounded or cornered, a bushbuck does not panic; it counter-attacks. It is known to backtrack on its own spoor, waiting in ambush for the pursuer.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Broadside (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim one-third up the body, directly on the vertical line of the foreleg. This hits the top of the heart and the lungs.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim for the off-side shoulder. The bullet should enter behind the ribs and travel forward into the vitals.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal (Favorite Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        A favorite shot for bushbuck peering out of cover. Aim for the "throat patch" where the neck meets the chest.
                      </p>
                    </div>
                    <div className="border-l-2 border-red-500/40 pl-4 bg-red-500/10 p-3 rounded">
                      <h4 className="text-red-400 font-heading text-base mb-2 font-light">WARNING: Gut-Shot = Safety Hazard</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Precision is key. A gut-shot bushbuck will charge. The attack is swift: a low lunge aimed at the groin or legs, using the sharp, dagger-like horns with devastating effect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Judging */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Judging: The "Ear Rule"
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Field judging a bushbuck is <span className="text-clay">notoriously difficult</span>. The horns are dark, the bush is dark, and the animal is rarely still.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Benchmark</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      A mature bushbuck ram's ear is approximately <strong className="text-clay">6 to 7 inches long</strong>.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The 14-Inch Goal</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      If the horns project straight up and appear to be <strong className="text-clay">twice the length of the ear</strong>, the ram is likely in the 13-14 inch class, a solid trophy.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The 16-Inch Monster</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      If the horns extend significantly more than double the ear length, and have a deep outward spiral, you are looking at a potential <strong className="text-clay">16-inch record class animal</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Other Trophy Indicators
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Mass</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Look for bases that are thick and nearly touching on the forehead. Heavy bases indicate age.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Shape</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Young rams have horns that grow straight back or slightly out (V-shape). Old rams have horns that spiral out and then tip back in or forward (bell shape).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Coat Color</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      In Southern Africa, a <strong className="text-clay">jet-black coat is the surest sign of a fully mature ram</strong>. A red ram with long horns is likely a younger animal with great genetic potential. Leaving him for another year might produce a record.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Record Book Minimums */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Record Book Minimums
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-clay/20">
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Organization</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Category</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Minimum Score</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-silver/80 font-body text-sm">
                    <tr className="border-b border-clay/10">
                      <td className="py-4 pr-6">Rowland Ward</td>
                      <td className="py-4 pr-6">All Bushbuck</td>
                      <td className="py-4 pr-6">15 inches</td>
                      <td className="py-4">Length of longest horn along the curve</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">Bronze</td>
                      <td className="py-4 pr-6">31 inches</td>
                      <td className="py-4">Combined score (length of both horns + circumference of bases). Horn length of 14 inches is the "Holy Grail" for bushbuck hunters.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-4">
                <strong className="text-cream">Note:</strong> Older rams often wear down (broom) their horn tips through fighting and rubbing against abrasive bark, leading to shorter but incredibly massive horns that are highly esteemed by connoisseurs.
              </p>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Bushbuck venison is often cited by South African hunters as <span className="text-clay">the finest of all antelope meat</span>. It is fine-grained, darker than Impala, and lacks the stringy texture of Kudu. Because they are browsers, the meat is aromatic and flavorful.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">South African Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Backstrap / Loin (Rugstring):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        The prime cut along the spine. Extremely tender. Best seared whole (medium-rare), Carpaccio, or Butterfly Steaks.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Leg / Round (Boud):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Large muscle mass of the hind leg. Lean. Best for whole roast (Wildsboud), Biltong, or Schnitzels.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Fillet (Haas):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Tenderloin inside the ribcage. Pan-fried quickly in butter. Do not overcook.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shank (Skelkel):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Lower leg meat. High in collagen. Slow cooking: Potjiekos (Stew) or braised for 4+ hours.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Neck (Nek):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Vertebrae-rich with intercostal meat. Slow cooking: Pulled venison, Potjies, or Mince.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Shoulder (Blad):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Tougher than the leg. Mince (Burgers), Dry Wors (Sausage), or Stew.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Traditional Recipes</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-clay font-heading text-sm mb-2 font-light">Bushbuck Biltong (The Hunter's Snack)</h5>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                        Bushbuck makes exceptional biltong because the meat is lean. Cut: Use Boud (Silverside or Topside). Cut into 2cm thick strips with the grain. Cure: Vinegar, coarse salt, brown sugar, toasted coriander seeds (roughly crushed), and black pepper. Method: Layer meat and spice mix for 12 hours. Hang in a cool, dry place with airflow for 3-5 days. The result is a black, snap-dry biltong with intense flavor.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-clay font-heading text-sm mb-2 font-light">"Rugstring" Carpaccio</h5>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                        Cut: Semi-frozen backstrap (easier to slice). Method: Slice paper-thin. Arrange on a plate. Drizzle with high-quality olive oil, lemon juice, cracked black pepper, and shavings of Parmesan cheese. Top with capers and arugula. The raw meat's natural sweetness shines here.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-clay font-heading text-sm mb-2 font-light">Venison Burger</h5>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                        Mix: 70% Bushbuck mince (Shoulder/Neck) + 30% Pork fat (or Brisket fat). Venison is too lean to make a good burger on its own; the fat is essential for juiciness. Seasoning: Salt, pepper, garlic powder, and a dash of Worcestershire sauce. Cooking: Grill over high heat to sear the outside while keeping the inside pink.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ballistics & Technical Guide - Warthog Specific */}
      {species.id === "warthog" && (
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10 bg-charcoal/30">
          <div className="container mx-auto max-w-6xl">
            <div className="w-24 h-px bg-clay/30 mb-8 md:mb-12"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-cream mb-4 font-light">
              Ballistics & Technical Guide
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mb-12 max-w-2xl">
              Warthog hunting is accessible and exciting, often conducted as a "walk-and-stalk" or from a blind over water. The warthog is <span className="text-clay font-medium">deceptively tough</span>. Pound for pound, it is often called the toughest animal in Africa.
            </p>

            {/* Recommended Calibers */}
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-heading text-cream mb-6 font-light">
                Recommended Rifles & Calibers
              </h3>
              <div className="border border-clay/20 p-6 md:p-8 mb-8">
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  While warthogs are not "large" game (comparable to a feral pig), their <span className="text-clay">bone density and tenacity require adequate firepower</span>.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clay/20">
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Caliber</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Bullet Weight</th>
                        <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-silver/80 font-body text-sm">
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.223 / .22-250</span>
                        </td>
                        <td className="py-4 pr-6">55-70 gr</td>
                        <td className="py-4">Generally discouraged for body shots due to insufficient penetration on shoulder bones. Viable only for specialized head-shooting culling operations.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.308 Winchester</span>
                        </td>
                        <td className="py-4 pr-6">150-165 gr</td>
                        <td className="py-4">Universal choice. Offers perfect balance of recoil and energy (2,600+ ft-lbs). Loaded with 165gr bullets, can punch through both shoulders of a large boar at 150 yards.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.30-06 Springfield</span>
                        </td>
                        <td className="py-4 pr-6">165-180 gr</td>
                        <td className="py-4">Universal choice. Offers perfect balance of recoil and energy. Proven performer on tough African game.</td>
                      </tr>
                      <tr className="border-b border-clay/10">
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">9.3x62 Mauser</span>
                        </td>
                        <td className="py-4 pr-6">286 gr</td>
                        <td className="py-4">For hunting in thick scrub. Heavy bullets deflect less on twigs and deliver massive knockdown power, anchoring the animal instantly. That is crucial when hunting near burrows.</td>
                      </tr>
                      <tr>
                        <td className="py-4 pr-6">
                          <span className="text-clay font-medium">.375 H&H Magnum</span>
                        </td>
                        <td className="py-4 pr-6">270-300 gr</td>
                        <td className="py-4">For hunting in thick scrub. While "overkill" in energy, heavy bullets deflect less on twigs and deliver massive knockdown power, anchoring the animal instantly.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-charcoal/30 border border-clay/10">
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Bullet Construction (CRITICAL)</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    <strong className="text-clay">Monolithic Copper (e.g., Barnes TTSX, Hornady GMX):</strong> Excellent choice. They retain 99% of their weight and penetrate deep, breaking bone without fragmenting. They require high velocity to expand, so lighter grain weights (e.g., 150gr in .308) are preferred to keep speed up.
                  </p>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                    <strong className="text-clay">Bonded Lead-Core (e.g., Nosler AccuBond, Swift A-Frame):</strong> The gold standard for mixed-bag safaris. The chemical bonding prevents core-jacket separation on impact with heavy bone.
                  </p>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    <strong className="text-clay">Avoid:</strong> Rapidly expanding "cup and core" bullets designed for thin-skinned deer (e.g., standard soft points) are risky on trophy boars as they may "splash" on the shoulder shield.
                  </p>
                </div>
              </div>
            </div>

            {/* Hunting Strategies */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Walk-and-Stalk (The Classic Method)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  This is the classic method for hunting warthog.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Spotting</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Hunters utilize open savanna and grasslands where visibility is good. Once a warthog is spotted, the stalk begins.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The Challenge</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The challenge is approaching without alerting the animal, as warthogs have excellent vision and hearing. The animal's diurnal activity pattern (active in the cool of morning and late afternoon) dictates optimal hunting times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Ambush (Blind Hunting)
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Highly effective, especially during the dry season.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Waterhole Blinds</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Sitting in a blind over a waterhole is highly effective, especially during the dry season when warthogs must drink regularly. This method allows for careful evaluation of the trophy using the "Snout Rule."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optics and Gear */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Optics & Accessories
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Scopes</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Variable power scopes in the 3-9x40mm or 2.5-10x range are ideal. The lower magnification (2.5x or 3x) is essential for close-range shots in bush, while the higher end allows for precision on open pans. Brands like Swarovski, Zeiss, and Leupold are favored for their durability and light transmission.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Shooting Sticks</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    Essential. The vegetation often precludes prone shooting, and warthogs are too small to see over grass from a sitting position. Standing shots off tripod sticks ("quad sticks") are the norm.
                  </p>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Binoculars</h4>
                  <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                    A quality 10x42 pair is vital for differentiating boars from sows in mixed groups, especially when evaluating trophy quality using the "Snout Rule."
                  </p>
                </div>
              </div>
            </div>

            {/* Shot Placement */}
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
                    Shot Placement (CRITICAL)
                  </h3>
                  <p className="text-silver/80 font-body text-sm md:text-base leading-relaxed mb-4 font-light">
                    Warthogs are deceptively tough. The phrase <span className="text-clay">"pound for pound, the toughest animal in Africa"</span> is frequently applied to them.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">The "Void" Myth (WARNING)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        There is a space above the spinal column (formed by the long neural spines) where a bullet can pass without hitting vital nerves or organs. A high shot here will stun the animal (a "spine shock") dropping it instantly, only for it to jump up and run off seconds later.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Broadside (Ideal Shot)</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        The ideal aim point is strictly on the vertical line of the foreleg, one-third of the way up the body. This breaks the shoulder and hits the heart/lung cluster. <strong className="text-clay">Aiming "behind the shoulder" (the classic deer shot) is often too far back on a warthog</strong>, resulting in a liver or paunch shot.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Quartering Away</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Aim for the opposite front leg. The bullet must traverse the stomach to reach the vitals, so deep penetration is required.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Frontal</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        A risky shot. The target is the "soft spot" at the base of the neck, between the shoulder points. However, the warthog's head often blocks this, and a slight movement can result in a deflected bullet off the skull or a jaw injury.
                      </p>
                    </div>
                    <div className="border-l-2 border-clay/40 pl-4">
                      <h4 className="text-clay font-heading text-base mb-2 font-light">Brain Shot</h4>
                      <p className="text-silver/70 font-body text-sm leading-relaxed font-light">
                        Feasible due to the large head, but the brain itself is small (walnut-sized) and located high and towards the rear of the skull. The target is the ear hole (side profile) or exactly between the eyes (frontal).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trophy Judging */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Trophy Judging: The "Snout Rule"
                </h3>
                <p className="text-silver/70 font-body text-sm mb-6 leading-relaxed font-light">
                  Estimating the size of a warthog's tusks in the field is <span className="text-clay">challenging due to the constant movement of the animal</span>.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">The "Snout Rule" (Gold Standard)</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      The distance from the lip line to the tip of the snout is used as a reference. If the exposed portion of the upper tusk equals roughly <strong className="text-clay">half the length of the snout</strong>, it is a good boar (likely 7-9 inches).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Gold-Medal Trophy</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      If the tusk length appears to approach the full length of the snout or curl significantly upwards exceeding the snout's profile, it is a <strong className="text-clay">gold-medal trophy (13+ inches)</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-clay/20 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                  Other Trophy Indicators
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Tusk Thickness</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Length is not everything. Hunters should look for thick bases. A tusk that remains thick well away from the lip is preferable to a long, thin "needle" tusk.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Wart Size</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Massive, bulbous warts that obscure the view of the tusks from the front are a reliable indicator of an old, mature boar.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-cream font-heading text-base mb-3 font-light">Body Size</h4>
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light">
                      Boars appear "front-heavy" with massive neck development, while sows maintain a more balanced, rectangular profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Record Book Minimums */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Record Book Minimums
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-clay/20">
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Organization</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 pr-6 font-light">Category</th>
                      <th className="text-cream font-heading text-sm md:text-base pb-4 font-light">Minimum Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-silver/80 font-body text-sm">
                    <tr>
                      <td className="py-4 pr-6">SCI</td>
                      <td className="py-4 pr-6">Gold</td>
                      <td className="py-4">29 inches (tusk length + circumference)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-silver/70 font-body text-xs leading-relaxed font-light mt-4">
                <strong className="text-cream">Note:</strong> In very old boars, continuous grinding may wear the upper tusks down to thick, blunt stumps ("buttons"). While these lack the length for high trophy scores, they represent a mature animal that has lived a full life, often appealing to hunters seeking "character" over inches.
              </p>
            </div>

            {/* Venison Quality */}
            <div className="border border-clay/20 p-6 md:p-8 mb-12">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-6 font-light">
                Venison: Culinary Profile & Utilization
              </h3>
              <p className="text-silver/70 font-body text-sm mb-8 leading-relaxed font-light">
                Warthog meat is a high-value byproduct of the hunt, prized for its unique nutritional and culinary properties. It is <span className="text-clay">distinctly different from domestic pork</span>.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Meat Characteristics</h4>
                  <div className="border border-clay/10 p-4 bg-charcoal/30 mb-4">
                    <p className="text-silver/80 font-body text-sm leading-relaxed font-light mb-3">
                      <strong className="text-cream">Fat Content:</strong> Exceptionally lean. Studies show a total lipid content of less than 2.2% in the Longissimus lumborum muscle (backstrap). It lacks the marbling of domestic pork. This leanness makes it a healthy, high-protein alternative but poses challenges for cooking, as it dries out rapidly.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Color:</strong> The meat is darker red than domestic pork, closer to beef or venison in appearance.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light mb-3">
                      <strong className="text-cream">Flavor:</strong> Nutty and sweet, without the "gamey" taint often associated with antelope, provided the animal was not stressed before death.
                    </p>
                    <p className="text-silver/70 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">Nutritional Composition (per 100g):</strong> Protein: 22.1 g (higher than pork ≈ 18-20g). Total Lipid (Fat): 1.7-2.2 g (significantly lower than pork ≈ 10-15g). Moisture: ~74% (similar to pork). <strong className="text-clay">Cooking Implication:</strong> Needs added fat.
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-4 font-light">Carcass Breakdown and Cuts</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-clay">Shoulders (Chuck):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Tough, collagen-rich. Best for cubing into stews (potjiekos) or grinding for sausage (wors).
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Loin (Backstrap):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        The prime cut. Can be grilled whole or cut into butterfly steaks ("chops"). Must be cooked rare to medium-rare to retain moisture.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Hind Legs (Silverside/Topside):</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Large muscle groups. Ideal for roasting (if larded with bacon) or curing into biltong.
                      </p>
                    </div>
                    <div>
                      <strong className="text-clay">Ribs:</strong>
                      <p className="text-silver/80 font-body text-xs leading-relaxed font-light mt-1">
                        Leaner than pork ribs but excellent when marinated and slow-cooked.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-clay/20 pt-6">
                <h4 className="text-cream font-heading text-base mb-4 font-light">Culinary Applications</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Biltong (Most Popular Use)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      The meat is cut into strips (with the grain for traditional chew, against for tender), cured in vinegar and coarse salt with coriander and black pepper, and air-dried. The low fat content prevents rancidity, making warthog biltong a premium product.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Potjiekos (Traditional Stew)</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      <strong className="text-clay">The Secret:</strong> Because the meat is dry, fat must be added. Recipes typically start by frying onions and bacon/pork belly (spek) in the iron pot. The warthog cubes are browned, then simmered for hours with red wine, stock, and aromatics like cloves and bay leaves. Modern recipes incorporate ingredients like dates, apricots, or Dukkah (an Egyptian nut/spice blend) to complement the sweet meat.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-clay font-heading text-sm mb-2 font-light">Larding for Roasts</h5>
                    <p className="text-silver/80 font-body text-xs leading-relaxed font-light">
                      For roasts, it is standard practice to use a larding needle to thread strips of bacon fat through the muscle to baste it internally during cooking.
                    </p>
                  </div>
                </div>
              </div>
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

