"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { speciesDatabase, getSpeciesByCategory } from "@/lib/speciesData";

export default function SpeciesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Species" },
    { id: "spiral", name: "Spiral-Horned" },
    { id: "plains", name: "Plains Runners" },
    { id: "desert", name: "Desert Specialists" },
    { id: "small", name: "Small Game" },
    { id: "dangerous", name: "Dangerous Game" },
  ];

  // Use speciesDatabase instead of hardcoded data
  const filteredSpecies = selectedCategory === "all" 
    ? speciesDatabase 
    : getSpeciesByCategory(selectedCategory);

  const selectedSpeciesData = filteredSpecies.find(s => s.id === selectedSpecies);

  // Map species IDs to image filenames
  const getSpeciesImage = (speciesId: string) => {
    const imageMap: { [key: string]: string } = {
      kudu: "/images/Greater Kudu.png",
      eland: "/images/Cape Eland.png",
      "livingstone-eland": "/images/Livingstone Eland.jpg",
      wildebeest: "/images/Blue Wildebeest.png",
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
  };

  return (
    <div className="min-h-screen page-container">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-transparent z-10"></div>
        <div className="relative z-20 text-center max-w-4xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-12"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light">
            Species Guide
          </h1>
          <p className="text-silver/70 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-light px-4">
            Comprehensive Knowledge Base for International Hunters
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-silver/10 sticky top-20 md:top-24 bg-charcoal/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-4 md:py-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 font-body text-xs uppercase tracking-[0.15em] transition-all duration-300 font-light ${
                  selectedCategory === cat.id
                    ? "text-clay border-b border-clay"
                    : "text-silver/50 hover:text-silver/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Species Grid */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSpecies.map((species, idx) => (
            <Link
              key={species.id}
              href={`/species/${species.id}`}
              className="luxury-card border border-clay/20 overflow-hidden hover:border-clay/40 transition-all duration-500 cursor-pointer group block"
            >
              {/* Species Image - Square */}
              <div className="relative w-full aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden">
                <Image
                  src={getSpeciesImage(species.id)}
                  alt={species.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={idx < 6 ? "eager" : "lazy"}
                  priority={idx < 3}
                />
              </div>
              
              <div className="p-6 md:p-8">
                <div className="w-16 h-px bg-clay/30 mb-4"></div>
                <h3 className="text-2xl md:text-3xl font-heading text-cream mb-2 font-light">
                  {species.name}
                </h3>
              <p className="text-clay/70 font-body text-xs uppercase tracking-[0.1em] mb-4 font-light">
                {species.nickname}
              </p>
              <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mb-4">
                {species.description}
              </p>
                <div className="flex items-center justify-between pt-4 border-t border-clay/10">
                  <span className="text-clay font-heading text-lg font-light">
                    {species.investment}
                  </span>
                  <span className="text-silver/50 group-hover:text-clay font-body text-xs uppercase tracking-[0.1em] font-light transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Detailed Species Modal/Expanded View */}
      {selectedSpeciesData && (
        <div className="fixed inset-0 bg-charcoal/95 backdrop-blur-md z-50 overflow-y-auto">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 max-w-4xl">
            <button
              onClick={() => setSelectedSpecies(null)}
              className="mb-8 text-silver/60 hover:text-cream transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="space-y-8">
              {/* Species Image for Modal - Square */}
              <div className="relative w-full max-w-2xl mx-auto aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
                <Image
                  src={getSpeciesImage(selectedSpeciesData.id)}
                  alt={selectedSpeciesData.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>

              <div>
                <div className="w-24 h-px bg-clay/30 mb-6"></div>
                <h2 className="text-4xl md:text-5xl font-heading text-cream mb-2 font-light">
                  {selectedSpeciesData.name}
                </h2>
                <p className="text-clay font-body text-sm uppercase tracking-[0.15em] mb-6 font-light">
                  {selectedSpeciesData.nickname}
                </p>
                <p className="text-silver/70 font-body text-lg leading-relaxed tracking-[0.02em] font-light">
                  {selectedSpeciesData.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Physical Specifications</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-silver/50 font-body">Weight (Male):</span>
                      <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.biometrics.weight.male}</span>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Weight (Female):</span>
                      <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.biometrics.weight.female}</span>
                    </div>
                    {typeof selectedSpeciesData.biometrics.height === 'object' ? (
                      <>
                        <div>
                          <span className="text-silver/50 font-body">Height (Male):</span>
                          <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.biometrics.height.male}</span>
                        </div>
                        <div>
                          <span className="text-silver/50 font-body">Height (Female):</span>
                          <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.biometrics.height.female}</span>
                        </div>
                      </>
                    ) : (
                      <div>
                        <span className="text-silver/50 font-body">Height:</span>
                        <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.biometrics.height}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Hunting Specifications</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-silver/50 font-body">Recommended Caliber:</span>
                      <p className="text-clay font-body mt-1">{selectedSpeciesData.hunting.caliber}</p>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Shot Placement:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.hunting.shotPlacement}</p>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Trophy:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.hunting.trophy}</p>
                    </div>
                  </div>
                </div>

                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Behavior & Tracking</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-silver/50 font-body">Behavior:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.behavior.social}. {selectedSpeciesData.behavior.defense}</p>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Tracking:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.tracking.strategy}</p>
                    </div>
                  </div>
                </div>

                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Culinary Utilization</h3>
                  <p className="text-silver/80 font-body text-sm leading-relaxed">
                    {selectedSpeciesData.hunting.meat}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-clay/20">
                <Link
                  href="/reserve"
                  className="inline-block px-10 py-4 bg-clay text-charcoal font-body text-xs uppercase tracking-[0.2em] hover:bg-clay/90 transition-all duration-500 font-light"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

