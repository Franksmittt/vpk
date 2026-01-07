"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function JourneyPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active stage based on scroll position
      const sections = sectionRefs.current;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveStage(index);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const journeyStages = [
    { number: "01", title: "The Prelude", subtitle: "O.R. Tambo & The Gun Run" },
    { number: "02", title: "The Transit", subtitle: "Road or Rotor" },
    { number: "03", title: "The Welcome", subtitle: "From Logistics to Sanctuary" },
    { number: "04", title: "The Culinary", subtitle: "Field to Fork" },
    { number: "05", title: "The Hunt", subtitle: "Walk & Stalk" },
    { number: "06", title: "The Service", subtitle: "Magic Behind the Curtain" },
    { number: "07", title: "The Departure", subtitle: "Carrying the Iron Home" },
  ];

  return (
    <div className="min-h-screen pt-1">
      {/* Hero Section */}
      <section className="cinematic-hero relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gradient-to-br from-soil/40 via-clay/30 to-charcoal">
            {/* Placeholder for hero image - Waterberg landscape, helicopter landing, or red dust road */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="text-center">
                <div className="w-16 h-16 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-clay/30 font-body text-xs uppercase tracking-[0.2em] font-light">
                  Hero: Waterberg Landscape
                </p>
              </div>
            </div>
            {/* Uncomment when image is ready:
            <Image
              src="/images/journey/hero-waterberg-landscape.jpg"
              alt="Waterberg Biosphere landscape"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            */}
          </div>
        </div>
        <div 
          className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-soil/30 via-clay/20 to-charcoal z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div className="no-ui">
          <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto w-full">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-white mb-6 md:mb-8 font-light leading-[1.1]">
                The Journey
                <br />
                <span className="text-champagne">From Arrival to Legacy</span>
              </h1>
            </div>
            <div className="mt-8 md:mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <p className="text-white/70 font-montserrat text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-4">
                Every interaction, from the moment you land at O.R. Tambo to the final processing of your harvest, is choreographed with military precision. This is not merely a hunt. This is a transformation.
              </p>
              <p className="text-white/50 font-montserrat text-xs uppercase tracking-[0.15em] max-w-2xl mx-auto leading-relaxed font-light">
                A SANCTUARY OF SILENCE • CONSERVATION INVESTMENT • EXCLUSIVE EXPERIENCE
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-px h-12 bg-clay/30"></div>
        </div>
      </section>

      {/* Top Progress Indicator - Minimal & Non-Intrusive */}
      <div className="fixed top-0 left-0 right-0 z-30 h-1 bg-charcoal/50 backdrop-blur-sm">
        <div 
          className="h-full bg-clay transition-all duration-500 ease-out"
          style={{ width: `${((activeStage + 1) / journeyStages.length) * 100}%` }}
        ></div>
      </div>

      {/* Floating Stage Indicator - Bottom Right */}
      <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
        <div className="group relative">
          {/* Minimal Indicator Button */}
          <button
            onClick={() => {
              const nextStage = (activeStage + 1) % journeyStages.length;
              sectionRefs.current[nextStage]?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="w-16 h-16 border border-clay/30 bg-charcoal/80 backdrop-blur-md hover:border-clay hover:bg-charcoal/90 transition-all duration-500 flex flex-col items-center justify-center group"
          >
            <div className="text-clay font-body text-[10px] uppercase tracking-[0.2em] font-light mb-1">
              {journeyStages[activeStage].number}
            </div>
            <div className="w-8 h-px bg-clay/50 group-hover:bg-clay transition-colors"></div>
            <div className="text-cream/60 font-body text-[8px] uppercase tracking-[0.15em] font-light mt-1">
              {activeStage + 1}/{journeyStages.length}
            </div>
          </button>

          {/* Expanded Navigation on Hover */}
          <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-500 delay-300">
            <div className="bg-charcoal/95 backdrop-blur-md border border-clay/20 p-6 min-w-[200px]">
              <div className="text-clay/50 font-body text-[10px] uppercase tracking-[0.2em] mb-4 font-light">
                Navigation
              </div>
              <div className="space-y-2">
                {journeyStages.map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sectionRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`w-full text-left flex items-center gap-3 transition-all duration-300 ${
                      activeStage === idx 
                        ? "text-cream" 
                        : "text-silver/60 hover:text-cream/80"
                    }`}
                  >
                    <div className={`w-8 h-px transition-all duration-300 ${
                      activeStage === idx ? "bg-clay" : "bg-clay/30 group-hover:bg-clay/50"
                    }`}></div>
                    <div className="flex-1">
                      <div className="font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        {stage.number}
                      </div>
                      <div className="font-body text-xs uppercase tracking-[0.1em] font-light">
                        {stage.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Bottom Navigation Bar - Positioned above existing mobile bar */}
      <div className="fixed bottom-20 left-0 right-0 lg:hidden z-40 bg-charcoal/95 backdrop-blur-md border border-clay/20 rounded-t-lg mx-4 mb-2">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => {
              const prevStage = activeStage > 0 ? activeStage - 1 : journeyStages.length - 1;
              sectionRefs.current[prevStage]?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-clay font-body text-xs uppercase tracking-[0.15em] font-light"
          >
            ← Prev
          </button>
          <div className="text-center">
            <div className="text-clay font-body text-[10px] uppercase tracking-[0.2em] font-light">
              {journeyStages[activeStage].number}
            </div>
            <div className="text-cream font-body text-xs uppercase tracking-[0.1em] font-light">
              {journeyStages[activeStage].title}
            </div>
          </div>
          <button
            onClick={() => {
              const nextStage = (activeStage + 1) % journeyStages.length;
              sectionRefs.current[nextStage]?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="text-clay font-body text-xs uppercase tracking-[0.15em] font-light"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Stage 1: The Prelude - O.R. Tambo & The Gun Run */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((0 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                01 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 01
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Prelude
              <br />
              <span className="text-champagne">O.R. Tambo & The Gun Run</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col scroll-fade">
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light mb-6">
                For the international hunting client, the safari does not begin in the bush; it begins with the paperwork. The anxiety surrounding the legal importation of firearms into South Africa is the single highest barrier to conversion and the primary source of travel stress.
              </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light">
                A "luxury" experience is defined by the absence of friction. Therefore, the arrival phase must be choreographed with military precision, transforming a potential bureaucratic nightmare into a VIP procession.
              </p>
            </div>
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Stage 1 Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        O.R. Tambo Arrival
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage1-airport-arrival.jpg"
                    alt="O.R. Tambo International Airport arrival"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-4 font-normal">
                    VIP Meet & Greet
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-6 font-light">
                    The arrival hall at O.R. Tambo International Airport is colloquially known as "The Gun Run," a high-stress environment where minor administrative errors on the SAPS 520 form can lead to firearm confiscation, delays, or detention.
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Dedicated permit officer meets you at the aircraft gate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Bypass standard immigration queues via diplomatic channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Direct escort to SAPS permit office</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Pre-printed SAPS 520 form ready for signature</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 scroll-fade">
            <div 
              className="p-8 md:p-10"
              style={{
                background: "rgba(35, 31, 32, 0.4)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
              }}
            >
              <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                Digital Concierge
              </h3>
              <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed font-light">
                Our secure portal allows you to upload passport copies, proof of ownership (US Customs Form 4457), and flight itineraries long before your flight lands. The system auto-populates the SAPS 520 form, reducing a potential three-hour ordeal to a streamlined 20-minute formality. You'll receive visual confirmation that your most valuable assets are secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 2: The Transit - Road vs. Rotor */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((1 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                02 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 02
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Transit
              <br />
              <span className="text-champagne">Road or Rotor</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Road Transfer */}
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Road Transfer Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Road Transfer
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage2-road-transfer.jpg"
                    alt="Luxury SUV on road to Thabazimbi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-4 font-normal">
                    The Road Transfer
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-6 font-light">
                    The drive from Johannesburg to Thabazimbi (approximately 2.5 to 3 hours) is a transition from the urban highveld to the bushveld. This period is utilized for "sensory acclimation."
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Luxury SUV (Toyota Land Cruiser Prado, Mercedes V-Class)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Wi-Fi, refreshments, and field guide tablet</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Cold towels, artisanal snacks (biltong, dried mango)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Curated playlist of South African music</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Host driver points out vegetation transitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Helicopter Transfer */}
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Helicopter Transfer Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Aerial Arrival
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage2-helicopter-arrival.jpg"
                    alt="Helicopter over Waterberg landscape"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-4 font-normal">
                    The Aerial Arrival
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-6 font-light">
                    For the UHNW client, the helicopter transfer transforms the commute into a cinematic event. Departing from O.R. Tambo or Lanseria, the flight path reveals the dramatic topography of the Waterberg.
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>45 to 50 minutes flight time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Geological reveal of the Iron Mountains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Pilot highlights Kransberg and Ysterberg (Iron Mountain)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Private helipad with immediate wildlife view</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Direct insertion into the wilderness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 3: The Welcome - From Logistics to Sanctuary */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((2 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                03 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 03
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Welcome
              <br />
              <span className="text-champagne">From Logistics to Sanctuary</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-6 md:mb-8">
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Welcome Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Lodge Welcome
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage3-lodge-welcome.jpg"
                    alt="Lodge arrival and welcome ceremony"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light mb-0">
                    The arrival at the lodge represents the crossing of a threshold. The guest moves from the "outside world" of travel stress into the "sanctuary" of the lodge. This transition must be marked by specific sensory rituals that signal safety, luxury, and care.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col scroll-fade">
              <div 
                className="p-8 md:p-10 h-full flex flex-col"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                  The Arrival Ceremony
                </h3>
                <ul className="space-y-4 text-white/70 font-montserrat text-sm md:text-base font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-champagne mt-1">•</span>
                    <span><strong className="text-white">Scented Towel:</strong> Infused with lemongrass or indigenous Buchu to immediately engage the olfactory sense and trigger relaxation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-champagne mt-1">•</span>
                    <span><strong className="text-white">Welcome Drink:</strong> Signature Dawa (vodka, lime, and local honey) or house-made iced tea with Rooibos and wild herbs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-champagne mt-1">•</span>
                    <span><strong className="text-white">Seamless Check-in:</strong> All formalities completed while seated. No standing at a counter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: "Luggage",
                desc: "Bags are already in the room, unpacked if requested"
              },
              {
                title: "Orientation",
                desc: "Brief tour of room features, bush telegraph, and safety protocols"
              },
              {
                title: "Personalization",
                desc: "Handwritten note from owners, small gift, and survival kit"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 md:p-10 scroll-fade flex flex-col" 
                style={{ 
                  transitionDelay: `${idx * 150}ms`,
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <h4 className="text-xl font-heading text-white mb-3 font-normal">{item.title}</h4>
                <p className="text-white/60 font-montserrat text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage 4: The Culinary - Field to Fork */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((3 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                04 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 04
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Culinary
              <br />
              <span className="text-champagne">Field to Fork</span>
            </h2>
          </div>

          <div className="scroll-fade mb-6 md:mb-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light max-w-3xl">
              Food is a primary driver of luxury travel. For a hunting lodge, the culinary program must navigate the delicate balance between the hunter's feast and refined gastronomy. The Field to Fork philosophy is the ethical bridge, demonstrating that the animal harvested is respected and utilized.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Culinary Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/dining spaces.jpg"
                    alt="Venison tasting menu presentation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-6 font-normal">
                    Venison Tasting Menu
                  </h3>
                  <div className="space-y-6">
                    {[
                      { name: "Kudu", desc: "The Venison of Kings. Seared loin (rare) or carpaccio with balsamic glaze. Paired with Cabernet Sauvignon." },
                      { name: "Eland", desc: "The Beef of the Bush. Steak with pepper crust, paired with Shiraz." },
                      { name: "Gemsbok", desc: "Often cited as the tastiest venison. Fillets paired with Pinotage." },
                      { name: "Springbok", desc: "The national animal. Carpaccio or loin roast with berry reduction." },
                      { name: "Warthog", desc: "A delicacy. Smoked ribs or Cabanossi sausages as pre-dinner snacks." }
                    ].map((item, idx) => (
                      <div key={idx} className="pb-6 border-b border-clay/10 last:border-0">
                        <h4 className="text-white font-heading text-lg mb-2 font-normal">{item.name}</h4>
                        <p className="text-white/60 font-montserrat text-sm leading-relaxed font-light">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Boma Dinner Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/dining2.jpg"
                    alt="Boma dinner under the stars"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                    The Boma Dinner
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-4 font-light">
                    The Boma (open-air enclosure) is the heart of the safari evening. It is a sensory theater where the primal meets the refined.
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Central fire with Leadwood logs (burns hot and long)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Lanterns, starlight, and sounds of the night</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Traditional dishes: Potjiekos, Boerewors, Malva Pudding</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Professional Hunter recounts the day's events</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="p-8 md:p-10"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-4 font-light">
                  The Celestial Safari
                </h3>
                <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-4">
                  Thabazimbi offers some of the darkest skies in South Africa. The "Celestial Safari" connects the "Deep Earth" geology with "Deep Space."
                </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>The Southern Cross (Crux). Navigational anchor</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>The Milky Way. Galactic core directly overhead in winter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Orion, the Hunter, inverted in the Southern Hemisphere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>High-quality telescope and trained guides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 5: The Hunt - Walk & Stalk */}
      <section 
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((4 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                05 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 05
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Hunt
              <br />
              <span className="text-champagne">Walk & Stalk</span>
            </h2>
          </div>

          <div className="scroll-fade mb-6 md:mb-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light max-w-3xl">
              The hunt itself is the core product. However, it must be marketed and executed not as a blood sport, but as a technical, ethical, and immersive engagement with nature. The narrative focus should be on the "process" rather than the "outcome."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col gap-8 scroll-fade">
              <div className="border border-clay/20 flex flex-col">
                {/* Hunt Morning Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Blue Hour
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage5-morning-ritual.jpg"
                    alt="Pre-dawn blue hour in the bushveld"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                    The Morning Ritual
                  </h3>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Gentle knock at 5:00 AM with coffee and Ouma Rusks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>The Blue Hour. Cold, crisp air and dawn chorus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Layered clothing for thermal shock (5°C to 25°C range)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="p-8 md:p-10"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-4 font-light">
                  The Vehicle & Amenities
                </h3>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Heavy wool blankets and hot water bottles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Upgraded suspension for corrugated roads</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Secure storage for rifles and optics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Cooler box with refreshments and snacks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>High-quality binoculars (Swarovski/Leica)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-clay mt-1">•</span>
                    <span>Satellite communication (Garmin inReach)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8 scroll-fade">
              <div className="border border-clay/20 flex flex-col">
                {/* Walk & Stalk Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Tracking
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage5-walk-stalk.jpg"
                    alt="Walk and stalk in the bushveld"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                    The Walk & Stalk Ethos
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-4 font-light">
                    Vehicles are for transport. Boots are for hunting. The hunt begins when the boots hit the red dust.
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Fair Chase emphasis. Ethical and athletic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Soft-soled boots (Courteney) for silent movement</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>The tracker reads displacement of sand, age of dung, confusion tracks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Learning to read the landscape</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div 
                className="p-8 md:p-10"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <h3 className="text-xl md:text-2xl font-heading text-cream mb-4 font-light">
                  Tracking the Quarry
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Greater Kudu", desc: "The Grey Ghost. Tracking involves spotting the glint of horns. The 'Look Back' behavior is the critical moment." },
                    { name: "Blue Wildebeest", desc: "The Poor Man's Buffalo. Deciphering chaotic tracks of the herd. Shot placement must be low on the shoulder." },
                    { name: "Impala", desc: "The ubiquitous challenge. Tracks create 'highways.' The 'roaring' of the rut adds an auditory layer." }
                  ].map((item, idx) => (
                    <div key={idx} className="pb-4 border-b border-white/10 last:border-0">
                      <h4 className="text-white font-heading text-base mb-1 font-normal">{item.name}</h4>
                      <p className="text-white/60 font-montserrat text-xs leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 6: The Service - Magic Behind the Curtain */}
      <section 
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((5 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                06 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 06
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Service
              <br />
              <span className="text-champagne">Magic Behind the Curtain</span>
            </h2>
          </div>

          <div className="scroll-fade mb-6 md:mb-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light max-w-3xl">
              Once the shot is taken, the guest's responsibility ends, and the service machinery takes over. This phase is critical for the "luxury" perception. The guest should never have to deal with the visceral or logistical mess; they should only experience the result.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {[
                {
                  title: "Field Dressing & Recovery",
                  image: "stage6-field-dressing.jpg",
                  imageAlt: "Respectful field dressing in natural environment",
                  items: [
                    "Animal treated with dignity",
                    "Clean photos. No blood, tongue tucked in",
                    "Natural environment background",
                    "Recovery team handles loading",
                    "Celebratory stop for refreshment"
                  ]
                },
                {
                  title: "Meat Processing",
                  image: "stage6-meat-processing.jpg",
                  imageAlt: "Clean butchery and biltong making",
                  items: [
                    "Clean, clinical skinning shed",
                    "Skins salted immediately for taxidermy",
                    "Interactive biltong making workshop",
                    "Community distribution of excess meat",
                    "Field to Fork narrative"
                  ]
                },
                {
                  title: "Trophy Logistics",
                  image: "stage6-trophy-logistics.jpg",
                  imageAlt: "Trophy processing and packaging",
                  items: [
                    "Veterinary sterilization (Dip & Pack)",
                    "Department of Agriculture approved facilities",
                    "Lodge manages all paperwork",
                    "Trophy Portal for tracking status",
                    "Concierge service end-to-end"
                  ]
                }
              ].map((section, idx) => (
                <div key={idx} className="flex flex-col scroll-fade" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                    {/* Service Stage Images */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                            {section.title}
                          </p>
                        </div>
                      </div>
                      {/* Uncomment when image is ready:
                      <Image
                        src={`/images/journey/${section.image}`}
                        alt={section.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      */}
                    </div>
                    <div className="p-8 md:p-10 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                        {section.title}
                      </h3>
                      <ul className="space-y-2 text-white/60 font-montserrat text-sm font-light">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <span className="text-clay mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          <div className="scroll-fade mt-6 md:mt-8">
            <div className="border border-clay/20 p-8 md:p-10 bg-charcoal/50">
              <h3 className="text-xl md:text-2xl font-heading text-cream mb-4 font-light">
                The Observer Experience
              </h3>
              <p className="text-silver/70 font-body text-sm md:text-base leading-relaxed mb-6">
                While the hunter is in the field, the non-hunting partner must be lavished with attention. This is not merely an add-on; it is a retention strategy.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">Activities</h4>
                  <ul className="space-y-2 text-silver/60 font-body text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Spa treatments (mobile or in-room)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Marakele National Park (Cape Vultures)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Veterinary darting procedures</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-cream font-heading text-base mb-3 font-light">The Sanctuary</h4>
                  <ul className="space-y-2 text-silver/60 font-body text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>High-speed Wi-Fi</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Library and pool</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Exceptional food service</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stage 7: The Departure - Carrying the Iron Home */}
      <section 
        ref={(el) => { sectionRefs.current[6] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            {/* Journey Timeline Indicator */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/20 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-champagne transition-all duration-1000"
                  style={{ width: `${((6 + 1) / journeyStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] font-light whitespace-nowrap">
                07 / 07
              </div>
            </div>
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <div className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] mb-4 font-light">
              Stage 07
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
              The Departure
              <br />
              <span className="text-champagne">Carrying the Iron Home</span>
            </h2>
          </div>

          <div className="scroll-fade mb-6 md:mb-8">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light max-w-3xl">
              The journey does not end when you leave. The red dust of Thabazimbi stays with you, in your boots, in your memories, and in the legacy of conservation you've contributed to. The trophy, when it arrives, is not merely a mount. It is a connection to the Iron Mountain, a reminder of the deep time you walked upon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Departure Legacy Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Conservation Legacy
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage7-legacy.jpg"
                    alt="Conservation impact and legacy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                    The Legacy
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-4 font-light">
                    Your conservation investment continues to work long after you've returned home. The meat donated to local communities, the snares removed, the kilometers patrolled. These are the real trophies.
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Ongoing impact dashboard updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Community development projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Conservation metrics tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Departure Return Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border-b border-clay/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                        Sunset Departure
                      </p>
                    </div>
                  </div>
                  {/* Uncomment when image is ready:
                  <Image
                    src="/images/journey/stage7-departure.jpg"
                    alt="Sunset over Waterberg landscape"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  */}
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                    The Return
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-4 font-light">
                    Many guests return annually, making this a recurring pilgrimage. The relationship built during your stay extends beyond the hunt. It becomes a connection to place, to conservation, and to the Iron Mountain itself.
                  </p>
                    <ul className="space-y-3 text-white/60 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Priority booking for returning guests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Annual conservation updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-champagne mt-1">•</span>
                      <span>Invitation to exclusive events</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
          }}
        ></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div 
            className="p-12 md:p-16 lg:p-20 text-center scroll-fade"
            style={{
              background: "rgba(35, 31, 32, 0.4)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
            }}
          >
            <div className="w-24 h-px bg-white/20 mx-auto mb-8 md:mb-12"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6 md:mb-8">
              Begin Your Journey
            </h2>
            <p className="text-white/80 font-montserrat text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Experience the transformation. Step out of the modern world and onto the iron bones of the ancient earth, participating in a cycle of conservation that is as ethical as it is primal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/reserve"
                className="px-10 md:px-12 py-4 md:py-5 bg-signal-orange text-canvas-cream font-montserrat text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-signal-orange/90 transition-all duration-500 font-semibold group"
              >
                <span className="flex items-center gap-3">
                  Request Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/trust"
                className="px-10 md:px-12 py-4 md:py-5 border border-white/30 text-white font-montserrat text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-light"
              >
                View Logistics
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

