import Link from "next/link";
import Image from "next/image";
import { getSpeciesById, speciesDatabase } from "@/lib/speciesData";

// Map species IDs to image filenames
export const metadata = {
    title: 'Page Title',
    description: 'Page description',
    openGraph: {
    title: 'Page Title',
    description: 'Page description',
    type: 'website',
  },
    alternates: {
    canonical: '/',
  },
  }

function getSpeciesImagePath(speciesId: string): string {
  const imageMap: { [key: string]: string } = {
    kudu: "/images/Greater Kudu.png",
    eland: "/images/Cape Eland.png",
    wildebeest: "/images/Blue Wildebeest.png",
    gemsbok: "/images/Gemsbok.png",
    springbok: "/images/springbok.png",
    impala: "/images/Impala.png",
    blesbok: "/images/Blesbok.png",
    hartebeest: "/images/Red Hartebeest.png",
    bushbuck: "/images/Bushbuck.png",
    warthog: "/images/Warthog.png",
  };
  return imageMap[speciesId] || "/images/Greater Kudu.png";
}

export default async function SpeciesDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const species = getSpeciesById(id);

  if (!species) {
    return (
      <div className="min-h-screen page-container flex items-center justify-center">
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                      Habitat Image
                    </p>
                  </div>
                </div>
                {/* <Image
                  src={`/images/${species.id}-habitat.jpg`}
                  alt={`${species.name} habitat`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                /> */}
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                      Tracking Image
                    </p>
                  </div>
                </div>
                {/* <Image
                  src={`/images/${species.id}-tracking.jpg`}
                  alt={`${species.name} tracking`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                /> */}
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

          {/* Morphology Image Placeholder */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20 mb-12">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                  Morphology & Anatomy Image
                </p>
                <p className="text-clay/30 font-body text-xs mt-2 font-light">
                  Skeletal structure, cranial morphology, dentition
                </p>
              </div>
            </div>
            {/* <Image
              src={`/images/${species.id}-morphology.jpg`}
              alt={`${species.name} morphology`}
              fill
              className="object-cover"
              sizes="100vw"
            /> */}
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

          {/* Behavior Image Placeholder */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                  Behavior & Ecology Image
                </p>
                <p className="text-clay/30 font-body text-xs mt-2 font-light">
                  Social interactions, feeding patterns, habitat use
                </p>
              </div>
            </div>
            {/* <Image
              src={`/images/${species.id}-behavior.jpg`}
              alt={`${species.name} behavior`}
              fill
              className="object-cover"
              sizes="100vw"
            /> */}
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

          {/* Tracking Image Placeholders */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                    Track Close-up
                  </p>
                </div>
              </div>
              {/* <Image
                src={`/images/${species.id}-track.jpg`}
                alt={`${species.name} track`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              /> */}
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                    Spoor Sign
                  </p>
                </div>
              </div>
              {/* <Image
                src={`/images/${species.id}-spoor.jpg`}
                alt={`${species.name} spoor sign`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              /> */}
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

          {/* Hunting Image Placeholder */}
          <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                  Ethical Harvest Image
                </p>
                <p className="text-clay/30 font-body text-xs mt-2 font-light">
                  Fair chase, respectful harvest
                </p>
              </div>
            </div>
            {/* <Image
              src={`/images/${species.id}-hunting.jpg`}
              alt={`${species.name} hunting`}
              fill
              className="object-cover"
              sizes="100vw"
            /> */}
          </div>
        </div>
      </section>

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

