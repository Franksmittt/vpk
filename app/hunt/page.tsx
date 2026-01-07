"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { speciesDatabase } from "@/lib/speciesData";

export default function HuntPage() {
  const [activeTab, setActiveTab] = useState("philosophy");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const scrollFadeElements = document.querySelectorAll(".scroll-fade");
    scrollFadeElements.forEach((el) => observer.observe(el));

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      scrollFadeElements.forEach((el) => observer.unobserve(el));
    };
  }, [isMounted]);

  // Function to get hunt card image for species
  const getHuntCardImage = (speciesId: string): string => {
    const imageMap: { [key: string]: string } = {
      wildebeest: "/images/wildebeest-hunt-card.jpg",
      impala: "/images/impala-hunt-card.jpg",
      blesbok: "/images/blesbok-hunt-card.jpg",
      hartebeest: "/images/hartebeest-hunt-card.jpg",
      kudu: "/images/kudu-hunt-card.jpg",
      eland: "/images/eland-hunt-card.jpg",
      bushbuck: "/images/bushbuck-hunt-card.jpg",
      buffalo: "/images/buffalo-hunt-card.jpg",
    };
    return imageMap[speciesId] || "";
  };

  // Filter species by category
  const plainsGame = speciesDatabase.filter((s) => s.category === "plains");
  const spiralHorn = speciesDatabase.filter((s) => s.category === "spiral");
  const dangerousGame = speciesDatabase.filter((s) => s.category === "dangerous");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-soil/20 via-clay/10 to-charcoal z-0"></div>
        <div className="relative z-20 text-center max-w-5xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-6 md:mb-8 scroll-fade"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light leading-tight scroll-fade">
            The Hunt
            <br />
            <span className="text-clay">Fair Chase. Technical Authority.</span>
          </h1>
          <p className="text-silver/70 font-body text-sm md:text-base uppercase tracking-[0.2em] font-light px-4 max-w-2xl mx-auto scroll-fade mb-4">
            Vehicles are for transport. Boots are for hunting.
          </p>
          <p className="text-silver/50 font-body text-[10px] uppercase tracking-[0.15em] font-light px-4 max-w-2xl mx-auto scroll-fade">
            A SANCTUARY OF SILENCE • TECHNICAL PRECISION • CONSERVATION INVESTMENT
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 md:top-24 bg-charcoal/95 backdrop-blur-md z-40 border-b border-clay/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-4 md:py-6">
            {[
              { id: "philosophy", label: "Philosophy" },
              { id: "plains", label: "Plains Game" },
              { id: "spiral", label: "Spiral Horn" },
              { id: "dangerous", label: "Dangerous Game" },
              { id: "ballistics", label: "Ballistics" },
              { id: "gear", label: "Gear" },
              { id: "tracking", label: "Tracking" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 font-body text-xs uppercase tracking-[0.15em] transition-all duration-300 font-light ${
                  activeTab === tab.id
                    ? "text-clay border-b-2 border-clay"
                    : "text-silver/50 hover:text-silver/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-12 md:py-16 lg:py-20">
        {/* Philosophy Section */}
        {activeTab === "philosophy" && (
          <section 
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8 md:mb-10 scroll-fade">
                <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  The Hunt
                  <br />
                  <span className="text-clay">Ethos & Ethics</span>
                </h2>
                <p className="text-silver/50 font-body text-xs md:text-sm mt-4 max-w-3xl font-light italic">
                  Reservations are by application and subject to availability. We curate each guest experience to ensure the highest standards of conservation and ethical practice. This is a sanctuary of silence and technical precision.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10 h-full">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Fair Chase
                    </h3>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                      The hunt begins when your boots hit the red dust. Vehicles are for transport; boots are for hunting. This is not a drive-and-shoot operation. Every stalk is earned through patience, skill, and respect for the animal.
                    </p>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed">
                      The Iron Stone terrain of Thabazimbi demands technical skill. The unforgiving landscape rewards those who move with intention, read the wind, and understand the behavior of their quarry.
                    </p>
                  </div>
                </div>
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10 h-full">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Conservation Investment
                    </h3>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                      We do not sell hunts. We invite investment in biodiversity. Every contribution goes directly to measurable conservation outcomes: habitat management, anti-poaching patrols, community meat distribution, and species-specific initiatives.
                    </p>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed">
                      The removal of post-reproductive animals, the management of herd dynamics, and the sustainable harvest of surplus populations are all part of a larger conservation strategy that ensures the long-term health of the ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="scroll-fade">
                <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
                  <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                    The Walk and Stalk Method
                  </h3>
                  <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-6">
                    Our hunting methodology emphasizes the "Walk and Stalk" approach. The tracker is the hero of this story. The art of spoorsny (cutting the track) is a dialogue with the earth. The tracker reads the displacement of sand, the age of dung, and the "confusion tracks" of the herd. You are not just following; you are learning to read the landscape.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-cream font-heading text-base mb-3 font-light">The Process</h4>
                      <ul className="space-y-2 text-silver/60 font-body text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Early morning departure (5:00 AM) during the Blue Hour</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Vehicle transport to the hunting area</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Track identification and age assessment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Silent stalk on foot with wind awareness</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-cream font-heading text-base mb-3 font-light">The Terrain</h4>
                      <ul className="space-y-2 text-silver/60 font-body text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Iron Stone ridges (demanding, technical)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Thick bushveld (close-range encounters)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Open valleys (long-range opportunities)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Waterholes (ambush and observation)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Plains Game */}
        {activeTab === "plains" && (
          <section 
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="mb-8 md:mb-10 scroll-fade">
              <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  Plains Game
                  <br />
                  <span className="text-clay">Conservation Investments</span>
              </h2>
                <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
                  The open grasslands and valleys of the Waterberg support high densities of plains game. These species represent sustainable harvest opportunities that contribute directly to habitat management and herd health.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plainsGame.map((species, idx) => (
                  <Link
                    key={species.id}
                    href={`/species/${species.id}`}
                    className="flex flex-col scroll-fade group"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="border border-clay/20 flex flex-col h-full hover:border-clay/40 transition-all duration-500">
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                        {getHuntCardImage(species.id) ? (
                          <Image
                            src={getHuntCardImage(species.id)}
                            alt={species.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                                {species.name}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-8 md:p-10 flex-1 flex flex-col">
                        <div className="w-16 h-px bg-clay/30 mb-4"></div>
                        <h3 className="text-xl md:text-2xl font-heading text-cream mb-2 font-light">
                          {species.nickname}
                        </h3>
                        <p className="text-clay/70 font-body text-xs uppercase tracking-[0.15em] mb-4 font-light">
                          {species.scientificName}
                        </p>
                        <div className="text-clay font-heading text-2xl md:text-3xl mb-4 font-light">
                          {species.investment}
                        </div>
                        <p className="text-silver/60 font-body text-sm leading-relaxed mb-4 flex-1">
                          {species.conservationNarrative || species.description.substring(0, 120) + "..."}
                        </p>
                        <div className="flex items-center gap-2 text-clay text-sm font-body uppercase tracking-[0.1em] font-light mt-auto group-hover:gap-3 transition-all">
                          <span>View Details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Spiral Horn */}
        {activeTab === "spiral" && (
          <section 
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="mb-8 md:mb-10 scroll-fade">
                <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  Spiral Horn
                  <br />
                  <span className="text-clay">The Grey Ghosts</span>
                </h2>
                <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
                  The thick bushveld and rocky hills of Thabazimbi are the domain of the spiral-horned antelope. These elusive species demand patience, skill, and an understanding of their cryptic behavior.
                </p>
              </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {spiralHorn.map((species, idx) => (
                  <Link
                    key={species.id}
                    href={`/species/${species.id}`}
                    className="flex flex-col scroll-fade group"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="border border-clay/20 flex flex-col h-full hover:border-clay/40 transition-all duration-500">
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                        {getHuntCardImage(species.id) ? (
                          <Image
                            src={getHuntCardImage(species.id)}
                            alt={species.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                                {species.name}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-8 md:p-10 flex-1 flex flex-col">
                        <div className="w-16 h-px bg-clay/30 mb-4"></div>
                        <h3 className="text-xl md:text-2xl font-heading text-cream mb-2 font-light">
                          {species.nickname}
                    </h3>
                        <p className="text-clay/70 font-body text-xs uppercase tracking-[0.15em] mb-4 font-light">
                          {species.scientificName}
                        </p>
                        <div className="text-clay font-heading text-2xl md:text-3xl mb-4 font-light">
                          {species.investment}
                        </div>
                        <p className="text-silver/60 font-body text-sm leading-relaxed mb-4 flex-1">
                          {species.conservationNarrative || species.description.substring(0, 120) + "..."}
                        </p>
                        <div className="flex items-center gap-2 text-clay text-sm font-body uppercase tracking-[0.1em] font-light mt-auto group-hover:gap-3 transition-all">
                          <span>View Details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dangerous Game */}
        {activeTab === "dangerous" && (
          <section 
            ref={(el) => { sectionRefs.current[3] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="mb-8 md:mb-10 scroll-fade">
                <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  Dangerous Game
                  <br />
                  <span className="text-clay">The Stronghold Initiative</span>
                </h2>
                <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
                  The management of dangerous game requires specialized expertise and carries significant responsibility. These species represent the apex of African hunting and demand the highest level of respect, preparation, and ethical conduct.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {dangerousGame.map((species, idx) => (
                  <Link
                    key={species.id}
                    href={`/species/${species.id}`}
                    className="flex flex-col scroll-fade group"
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="border border-clay/20 flex flex-col h-full hover:border-clay/40 transition-all duration-500">
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-soil/30 via-clay/20 to-charcoal overflow-hidden border-b border-clay/20">
                        {getHuntCardImage(species.id) ? (
                          <Image
                            src={getHuntCardImage(species.id)}
                            alt={species.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                                {species.name}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-8 md:p-10 flex-1 flex flex-col">
                        <div className="w-16 h-px bg-clay/30 mb-4"></div>
                        <h3 className="text-xl md:text-2xl font-heading text-cream mb-2 font-light">
                          {species.nickname}
                        </h3>
                        <p className="text-clay/70 font-body text-xs uppercase tracking-[0.15em] mb-4 font-light">
                          {species.scientificName}
                        </p>
                        <div className="text-clay font-heading text-2xl md:text-3xl mb-4 font-light">
                          {species.investment}
                        </div>
                        <p className="text-silver/60 font-body text-sm leading-relaxed mb-4 flex-1">
                          {species.conservationNarrative || species.description.substring(0, 120) + "..."}
                        </p>
                        <div className="flex items-center gap-2 text-clay text-sm font-body uppercase tracking-[0.1em] font-light mt-auto group-hover:gap-3 transition-all">
                          <span>View Details</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ballistics Section */}
        {activeTab === "ballistics" && (
          <section 
            ref={(el) => { sectionRefs.current[4] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8 md:mb-10 scroll-fade">
              <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  Ballistics
                <br />
                  <span className="text-clay">Technical Authority</span>
              </h2>
                <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
                  The Iron Mountain terrain presents unique ballistic challenges. Understanding density altitude, wind conditions, and bullet performance is essential for ethical, effective shot placement.
                </p>
            </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Current Conditions
                    </h3>
                    <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                        <div className="text-silver/50 font-body text-xs uppercase tracking-[0.1em] mb-2 font-light">
                          Wind
                  </div>
                        <div className="text-3xl font-heading text-cream font-light">
                    --
                  </div>
                </div>
                <div>
                        <div className="text-silver/50 font-body text-xs uppercase tracking-[0.1em] mb-2 font-light">
                          Temp
                  </div>
                        <div className="text-3xl font-heading text-cream font-light">
                    --°C
                  </div>
                </div>
                <div>
                        <div className="text-silver/50 font-body text-xs uppercase tracking-[0.1em] mb-2 font-light">
                    Pressure
                  </div>
                        <div className="text-3xl font-heading text-cream font-light">
                    -- hPa
                  </div>
                </div>
              </div>
                    <div className="border-t border-clay/20 pt-6">
                      <div className="text-silver/50 font-body text-xs uppercase tracking-[0.1em] mb-2 font-light">
                  Density Altitude
                </div>
                      <div className="text-3xl font-heading text-clay font-light mb-2">
                  Calculating...
                </div>
                <p className="text-silver/40 font-body text-xs tracking-[0.05em] font-light italic">
                  DA = f(Pressure, Temp, Humidity)
                </p>
                    </div>
                  </div>
                </div>
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Recommended Calibers
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-cream font-heading text-base mb-2 font-light">Plains Game</h4>
                        <p className="text-silver/60 font-body text-sm leading-relaxed">
                          <strong className="text-clay">.30-06 Springfield</strong> with 180-grain bonded bullets (Swift A-Frame, Barnes TSX) is the gold standard. Premium bonded bullets are essential to punch through potential twigs without fragmenting prematurely.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-cream font-heading text-base mb-2 font-light">Spiral Horn</h4>
                        <p className="text-silver/60 font-body text-sm leading-relaxed">
                          <strong className="text-clay">.300 Winchester Magnum</strong> or <strong className="text-clay">.375 H&H</strong> for larger species like Eland. The .375 H&H offers versatility for both plains game and dangerous game.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-cream font-heading text-base mb-2 font-light">Dangerous Game</h4>
                        <p className="text-silver/60 font-body text-sm leading-relaxed">
                          <strong className="text-clay">.375 H&H</strong> minimum, with <strong className="text-clay">.416 Rigby</strong> or <strong className="text-clay">.458 Lott</strong> recommended for Cape Buffalo. Solid bullets are mandatory.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scroll-fade">
                <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
                  <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                    Shot Placement
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-cream font-heading text-base mb-3 font-light">Vital Zone</h4>
                      <p className="text-silver/60 font-body text-sm leading-relaxed mb-4">
                        The heart-lung area is the primary target. For broadside shots, aim for the lower third of the body, just behind the front shoulder. This ensures penetration through the ribcage to the vitals.
                      </p>
                      <ul className="space-y-2 text-silver/60 font-body text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span><strong className="text-cream">Broadside:</strong> Lower third, behind shoulder</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span><strong className="text-cream">Quartering Away:</strong> Follow the line of the front leg</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span><strong className="text-cream">Quartering To:</strong> Avoid. Wait for better angle</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-cream font-heading text-base mb-3 font-light">The Iron Stone Factor</h4>
                      <p className="text-silver/60 font-body text-sm leading-relaxed mb-4">
                        The rocky terrain of Thabazimbi can create ricochet hazards. Always ensure a clear backstop. The iron-rich soil can also affect bullet performance at extreme ranges. Keep shots within 300 yards for optimal terminal performance.
                      </p>
                      <ul className="space-y-2 text-silver/60 font-body text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Always verify backstop before shooting</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Account for wind in open valleys</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Practice at elevation before arrival</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gear Section */}
        {activeTab === "gear" && (
          <section 
            ref={(el) => { sectionRefs.current[5] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8 md:mb-10 scroll-fade">
              <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  Essential Gear
                  <br />
                  <span className="text-clay">Prepared for the Iron Mountain</span>
              </h2>
            </div>

              <div className="space-y-6 md:space-y-8">
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10 hover:border-clay/40 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Footwear
                  </h3>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                      The Iron Stone is unforgiving. Hard soles act like cymbals on the rock, ruining the stalk. <strong className="text-cream">Soft-soled boots are mandatory.</strong> Courteney Boots are the gold standard. Their soft, flexible soles allow silent movement over the iron formations.
                    </p>
                    <ul className="space-y-2 text-silver/60 font-body text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Recommended:</strong> Courteney Boots (soft sole, ankle support)</span>
                      </li>
                    <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Avoid:</strong> Hard-soled hiking boots, steel-toed boots</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span>Break in boots before arrival. Blisters end hunts</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10 hover:border-clay/40 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Camouflage & Clothing
                    </h3>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                      The bushveld demands earth tones. Sitka Subalpine or similar patterns blend perfectly with the Vachellia (Acacia) woodlands and iron-rich soil. Avoid dark blues. They attract Tsetse flies, though rare in Thabazimbi.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-cream font-heading text-base mb-3 font-light">Recommended</h4>
                        <ul className="space-y-2 text-silver/60 font-body text-sm">
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Sitka Subalpine or Earth Tone patterns</span>
                    </li>
                    <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Layered system (base, mid, outer)</span>
                    </li>
                    <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Wind-resistant outer layer</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-cream font-heading text-base mb-3 font-light">Climate Considerations</h4>
                        <ul className="space-y-2 text-silver/60 font-body text-sm">
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Winter: 5°C to 25°C (thermal layers essential)</span>
                    </li>
                    <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Summer: 15°C to 35°C (lightweight, breathable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Sun protection: Wide-brim hat, UV-blocking shirt</span>
                    </li>
                  </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10 hover:border-clay/40 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Optics & Equipment
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-cream font-heading text-base mb-3 font-light">Binoculars</h4>
                        <p className="text-silver/60 font-body text-sm leading-relaxed mb-3">
                          Quality optics are non-negotiable. Swarovski, Leica, or Zeiss in 8x42 or 10x42 configuration. The thick bushveld demands excellent light transmission for dawn and dusk glassing.
                        </p>
                        <ul className="space-y-2 text-silver/60 font-body text-sm">
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>8x42 for general use (wider field of view)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>10x42 for long-range identification</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-cream font-heading text-base mb-3 font-light">Rifle & Accessories</h4>
                        <ul className="space-y-2 text-silver/60 font-body text-sm">
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Quality scope with low-light capability</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Bipod or shooting sticks (essential for stability)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Rifle case with proper padding for transport</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>Cleaning kit (dust is pervasive)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tracking Section */}
        {activeTab === "tracking" && (
          <section 
            ref={(el) => { sectionRefs.current[6] = el; }}
            className="px-4 sm:px-6 md:px-12"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8 md:mb-10 scroll-fade">
              <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream mb-4 md:mb-6 font-light">
                  The Art of Tracking
                  <br />
                  <span className="text-clay">Reading the Landscape</span>
              </h2>
                <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl">
                  Tracking is a dialogue with the earth. The tracker reads the displacement of sand, the age of dung, and the "confusion tracks" of the herd. You are not just following; you are learning to read the landscape.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Spoorsny
                    </h3>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                      "Cutting the track" is the first step. The tracker identifies the target species' spoor, assesses its age, and determines the direction of travel. Fresh tracks show clear edges; older tracks are weathered and blurred.
                    </p>
                    <ul className="space-y-2 text-silver/60 font-body text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Fresh:</strong> Clear edges, no debris, recent disturbance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Aging:</strong> Wind-blown edges, partial filling, debris accumulation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Old:</strong> Rounded edges, significant filling, weathered appearance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="scroll-fade">
                  <div className="border border-clay/20 p-8 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                      Reading Sign
                    </h3>
                    <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                      Beyond tracks, the tracker reads a complex language of signs: dung age, feeding patterns, bedding sites, and behavioral indicators. Each species leaves a unique signature.
                    </p>
                    <ul className="space-y-2 text-silver/60 font-body text-sm">
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Dung:</strong> Moisture content indicates age</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Browse:</strong> Height and species indicate target animal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-clay mt-1">•</span>
                        <span><strong className="text-cream">Gait:</strong> Walking, trotting, or running reveals urgency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="scroll-fade">
                <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
                  <h3 className="text-2xl md:text-3xl font-heading text-cream mb-4 font-light">
                    Species-Specific Tracking
                </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-cream font-heading text-base mb-3 font-light">Greater Kudu</h4>
                      <p className="text-silver/60 font-body text-sm leading-relaxed mb-3">
                        The Grey Ghost demands patience. Tracking involves spotting the glint of horns in dappled light. The Look Back behavior, where the bull stops to check his pursuer, is the critical moment for the shot.
                      </p>
                      <ul className="space-y-2 text-silver/60 font-body text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Prefers thick bushveld and rocky hills</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Often beds down in dense cover during heat of day</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-cream font-heading text-base mb-3 font-light">Blue Wildebeest</h4>
                      <p className="text-silver/60 font-body text-sm leading-relaxed mb-3">
                        The "Poor Man's Buffalo." Tracking involves deciphering the chaotic tracks of the herd. They are tough; shot placement must be low on the shoulder to hit the heart.
                      </p>
                      <ul className="space-y-2 text-silver/60 font-body text-sm">
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Prefers open grasslands and valleys</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-clay mt-1">•</span>
                          <span>Herd behavior creates "confusion tracks"</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 border-t border-clay/10">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="border border-clay/20 p-12 md:p-16 bg-charcoal/50 backdrop-blur-sm scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-10"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-cream mb-6 md:mb-8 font-light">
              Ready to Begin
              <br />
              <span className="text-clay">Your Hunt?</span>
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the technical challenge, ethical harvest, and conservation impact of hunting on the Iron Mountain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/reserve"
                className="px-10 md:px-12 py-4 md:py-5 bg-clay text-charcoal font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/90 transition-all duration-500 font-light group"
              >
                <span className="flex items-center gap-3">
                  Request Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/species"
                className="px-10 md:px-12 py-4 md:py-5 border border-clay/50 text-clay font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light"
              >
                View All Species
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
