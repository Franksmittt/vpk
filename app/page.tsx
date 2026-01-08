"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { speciesDatabase } from "@/lib/speciesData";

export default function Home() {
  const { t } = useLanguage();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSpecies, setActiveSpecies] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Vaalpenskraal Game Reserve',
    description: 'Luxury safari hunting experience in the Waterberg Biosphere. Fair chase hunting, conservation investment, and world-class accommodations in South Africa.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Thabazimbi',
      addressRegion: 'Limpopo',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-24.5833',
      longitude: '27.4167',
    },
    offers: {
      '@type': 'Offer',
      category: 'Hunting Safari',
      description: 'Luxury safari hunting experience with conservation investment opportunities',
    },
  };
  
  // Booking widget state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [selectedDateType, setSelectedDateType] = useState<"checkin" | "checkout" | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

    // Observe all sections
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe all scroll-fade elements
    const scrollFadeElements = document.querySelectorAll(".scroll-fade");
    scrollFadeElements.forEach((el) => observer.observe(el));

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      scrollFadeElements.forEach((el) => observer.unobserve(el));
    };
  }, [isMounted]);

  // Auto-rotate species
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpecies((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const bookingWidget = document.querySelector('[data-booking-widget]');
      
      if (bookingWidget && !bookingWidget.contains(target)) {
        setShowDatePicker(false);
        setShowGuestPicker(false);
        setSelectedDateType(null);
      }
    };

    if (showDatePicker || showGuestPicker) {
      // Use a small timeout to avoid closing immediately when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 10);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showDatePicker, showGuestPicker]);

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      {/* Hero Section - Swiss Resort Style */}
      <section className="relative h-screen w-full flex items-center justify-center pt-24" style={{ zIndex: 1, overflow: 'visible' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/unnamed (24).jpg"
            alt="Vaalpenskraal Game Reserve"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Black overlay at 30% opacity */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Content - Centered */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto -mt-20 md:-mt-32">
          {/* Top Tagline */}
          <div className="opacity-0 animate-fade-in mb-4" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <p 
              className="font-montserrat text-[13px] font-semibold uppercase tracking-[3px] text-champagne mb-4 block"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              LUXURY GAME RESERVE
            </p>
          </div>
          
          {/* Main Headline */}
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <h1 
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-normal leading-[1.1] text-white m-0"
              style={{ 
                textShadow: '0 4px 16px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)'
              }}
            >
              Witness Untamed Majesty
              </h1>
            </div>
          
          {/* Sub-Heading */}
          <div className="opacity-0 animate-fade-in mt-5" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <p 
              className="font-montserrat text-[15px] font-medium uppercase tracking-[2px] text-[#F0F0F0] block"
              style={{
                textShadow: '0 2px 8px rgba(0,0,0,0.5)'
              }}
            >
              YOUR EXCLUSIVE AFRICAN SAFARI
            </p>
            <p 
              className="font-montserrat text-[11px] font-light uppercase tracking-[1.5px] text-white/60 mt-3 block"
              style={{
                textShadow: '0 1px 4px rgba(0,0,0,0.5)'
              }}
            >
              A SANCTUARY OF SILENCE • CONSERVATION INVESTMENT • TECHNICAL PRECISION
            </p>
          </div>
        </div>

        {/* Floating Booking Widget */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[70%] max-w-[900px] z-[999]" data-booking-widget>
          <div
            className="h-12 md:h-14 flex items-center justify-between px-4 md:px-8 relative"
            style={{
              background: "rgba(35, 31, 32, 0.6)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50px",
            }}
          >
            {/* Check In */}
            <div className="relative flex-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (showDatePicker && selectedDateType === "checkin") {
                    setShowDatePicker(false);
                    setSelectedDateType(null);
                  } else {
                    setSelectedDateType("checkin");
                    setShowDatePicker(true);
                    setShowGuestPicker(false);
                  }
                }}
                className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity w-full"
              >
                <span className="text-white font-montserrat text-[11px] md:text-xs font-normal whitespace-nowrap">
                  {checkIn || "Check In"}
                </span>
                <svg
                  className="w-3 h-3 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-4.5 0H6.75m-3.75 0h.008v.008H3v-.008zm0 0h.008v.008H3v-.008z"
                  />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-white/20 hidden sm:block"></div>

            {/* Check Out */}
            <div className="relative flex-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (showDatePicker && selectedDateType === "checkout") {
                    setShowDatePicker(false);
                    setSelectedDateType(null);
                  } else {
                    setSelectedDateType("checkout");
                    setShowDatePicker(true);
                    setShowGuestPicker(false);
                  }
                }}
                className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity w-full"
              >
                <span className="text-white font-montserrat text-[11px] md:text-xs font-normal whitespace-nowrap">
                  {checkOut || "Check Out"}
                </span>
                <svg
                  className="w-3 h-3 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-4.5 0H6.75m-3.75 0h.008v.008H3v-.008zm0 0h.008v.008H3v-.008z"
                  />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-white/20 hidden sm:block"></div>

            {/* Guests */}
            <div className="relative flex-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (showGuestPicker) {
                    setShowGuestPicker(false);
                  } else {
                    setShowGuestPicker(true);
                    setShowDatePicker(false);
                    setSelectedDateType(null);
                  }
                }}
                className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity w-full"
              >
                <span className="text-white font-montserrat text-[11px] md:text-xs font-normal">
                  {guests} {guests === 1 ? "Guest" : "Guests"}
                </span>
                <svg
                  className="w-3 h-3 text-white flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {showGuestPicker && (
                <div
                  className="absolute bottom-full mb-2 right-0 min-w-[120px] z-[1000]"
                  style={{
                    background: "rgba(35, 31, 32, 0.95)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "8px",
                    padding: "8px",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <button
                      key={num}
                      onClick={(e) => {
                        e.stopPropagation();
                        setGuests(num);
                        setShowGuestPicker(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm font-montserrat hover:bg-white/10 transition-colors rounded ${
                        guests === num ? "text-sunset-gold" : "text-white/80"
                      }`}
                    >
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Go Button */}
            <Link
              href={`/reserve${checkIn && checkOut ? `?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}` : `?guests=${guests}`}`}
              className="rounded-full bg-sunset-gold text-espresso font-montserrat font-bold text-[11px] md:text-xs hover:scale-110 transition-transform flex items-center justify-center flex-shrink-0"
              style={{ width: "40px", height: "40px" }}
            >
              Go
            </Link>
          </div>

          {/* Date Picker Dropdown */}
          {showDatePicker && (
            <div
              className="absolute top-full mt-2 left-0 right-0 z-[1000]"
              style={{
                background: "rgba(35, 31, 32, 0.95)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 font-montserrat text-xs uppercase tracking-wide mb-2">
                    Check In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => {
                      e.stopPropagation();
                      setCheckIn(e.target.value);
                      if (checkOut && e.target.value > checkOut) {
                        setCheckOut("");
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white font-montserrat text-sm focus:outline-none focus:border-sunset-gold"
                  />
                </div>
                <div>
                  <label className="block text-white/60 font-montserrat text-xs uppercase tracking-wide mb-2">
                    Check Out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => {
                      e.stopPropagation();
                      setCheckOut(e.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    min={checkIn || new Date().toISOString().split("T")[0]}
                    className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white font-montserrat text-sm focus:outline-none focus:border-sunset-gold"
                  />
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDatePicker(false);
                  setSelectedDateType(null);
                }}
                className="mt-4 w-full px-4 py-2 bg-sunset-gold/20 text-sunset-gold font-montserrat text-xs uppercase tracking-wide rounded hover:bg-sunset-gold/30 transition-colors"
              >
                Done
              </button>
            </div>
          )}

          {/* Seasonal Availability Notice */}
          <div
            className="mt-3 text-center px-4 py-2 rounded-lg"
            style={{
              background: "rgba(35, 31, 32, 0.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(201, 132, 85, 0.3)",
            }}
          >
            <p className="text-white/90 font-montserrat text-[10px] md:text-xs leading-relaxed">
              <span className="text-sunset-gold font-semibold">Hunting Season:</span> May - August.{" "}
              <span className="text-white/70">Luxury safari experiences available year-round.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Features Bar */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
          <div 
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 py-8 md:py-10 px-6 md:px-12"
            style={{
              background: "rgba(35, 31, 32, 0.5)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
            }}
          >
            {/* Trust Item 1 */}
            <div className="flex flex-col items-center text-center group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center mb-3 group-hover:border-white/40 transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
          </div>
              <p className="text-white font-montserrat text-xs md:text-sm uppercase tracking-[0.1em] font-light">
                {t('malariaFree')}
              </p>
              <p className="text-white/60 font-montserrat text-[10px] md:text-xs mt-1 font-light">
                {t('safeForFamilies')}
              </p>
        </div>

            {/* Divider */}
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>

            {/* Trust Item 2 */}
            <div className="flex flex-col items-center text-center group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center mb-3 group-hover:border-white/40 transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white font-montserrat text-xs md:text-sm uppercase tracking-[0.1em] font-light">
                {t('conservation')}
              </p>
              <p className="text-white/60 font-montserrat text-[10px] md:text-xs mt-1 font-light">
                {t('ethicalHarvest')}
              </p>
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>

            {/* Trust Item 3 */}
            <div className="flex flex-col items-center text-center group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center mb-3 group-hover:border-white/40 transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-white font-montserrat text-xs md:text-sm uppercase tracking-[0.1em] font-light">
                {t('luxury')}
              </p>
              <p className="text-white/60 font-montserrat text-[10px] md:text-xs mt-1 font-light">
                {t('worldClassService')}
              </p>
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-white/10 hidden md:block"></div>

            {/* Trust Item 4 */}
            <div className="flex flex-col items-center text-center group cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center mb-3 group-hover:border-white/40 transition-all">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-champagne" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white font-montserrat text-xs md:text-sm uppercase tracking-[0.1em] font-light">
                {t('certified')}
              </p>
              <p className="text-white/60 font-montserrat text-[10px] md:text-xs mt-1 font-light">
                {t('professionalGuides')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Component 2.5: The Journey Preview */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 0.95) 0%, rgba(35, 31, 32, 1) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 scroll-fade">
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-4">
              {t('theJourney')}
              <br />
              <span className="text-champagne">{t('fromArrivalToLegacy')}</span>
            </h2>
            <p className="text-white/70 font-montserrat text-sm md:text-base mt-6 max-w-3xl font-light">
              Every interaction, from the moment you land at O.R. Tambo to the final processing of your harvest, is choreographed with military precision. This is not merely a hunt. This is a transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                stage: "01",
                title: "The Prelude",
                subtitle: "VIP Meet & Greet",
                desc: "We handle the bureaucracy so you can focus on the hunt. Dedicated permit officer, pre-printed SAPS 520 forms, seamless arrival.",
                link: "/journey"
              },
              {
                stage: "04",
                title: "The Culinary",
                subtitle: "Field to Fork",
                desc: "Venison tasting menu with wine pairings. Boma dinners under the stars. The ethical bridge between harvest and gastronomy.",
                link: "/journey"
              },
              {
                stage: "07",
                title: "The Legacy",
                subtitle: "Carrying the Iron Home",
                desc: "The red dust stays with you. Your conservation investment continues to work long after you've returned home.",
                link: "/journey"
              }
            ].map((journey, idx) => (
              <Link
                key={idx}
                href={journey.link}
                className="flex flex-col scroll-fade group"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div 
                  className="flex flex-col h-full hover:border-white/30 transition-all duration-500"
                  style={{
                    background: "rgba(35, 31, 32, 0.4)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                  }}
                >
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <div className="text-white/50 font-montserrat text-[10px] uppercase tracking-[0.3em] mb-4 font-light">
                      Stage {journey.stage}
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading text-white mb-2 font-normal">
                      {journey.title}
                    </h3>
                    <p className="text-champagne/80 font-montserrat text-xs uppercase tracking-[0.15em] mb-4 font-light">
                      {journey.subtitle}
                    </p>
                    <p className="text-white/70 font-montserrat text-sm leading-relaxed mb-6 font-light">
                      {journey.desc}
                    </p>
                    <div className="flex items-center gap-2 text-white text-sm font-montserrat uppercase tracking-[0.1em] font-light mt-auto group-hover:gap-3 transition-all">
                      <span>{t('learnMore')}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center scroll-fade">
            <Link
              href="/journey"
              className="inline-block px-10 py-4 border border-white/30 text-white font-montserrat text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-light"
            >
              {t('experienceTheFullJourney')}
            </Link>
          </div>
        </div>
      </section>

      {/* Component 3: Interactive Species Showcase */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-8 md:mb-10 text-center scroll-fade">
            <div className="w-24 h-px bg-white/20 mx-auto mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-4">
              The Guardians
              <br />
              <span className="text-champagne">of the Iron Mountain</span>
            </h2>
            <p className="text-white/70 font-montserrat text-sm md:text-base mt-6 max-w-2xl mx-auto font-light">
              Each species represents a conservation investment, a story of ethical harvest and sustainable management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              speciesDatabase.find(s => s.id === "buffalo"),
              speciesDatabase.find(s => s.id === "kudu"),
              speciesDatabase.find(s => s.id === "gemsbok"),
              speciesDatabase.find(s => s.id === "eland"),
            ].filter((species): species is NonNullable<typeof species> => species !== undefined).map((species, idx) => {
              const getImagePath = (id: string) => {
                const imageMap: { [key: string]: string } = {
                  buffalo: "/images/Cape Buffalo HP.jpg",
                  kudu: "/images/Greater Kudu HP.jpg",
                  gemsbok: "/images/Gemsbok HP.jpg",
                  eland: "/images/Cape Eland HP.jpg",
                };
                return imageMap[id] || "/images/Greater Kudu HP.jpg";
              };
              return (
              <Link
                key={species.id}
                href={`/species/${species.id}`}
                onClick={() => setActiveSpecies(idx)}
                className={`luxury-card group relative h-[350px] md:h-[450px] overflow-hidden transition-all duration-500 cursor-pointer block ${
                  activeSpecies === idx
                    ? "scale-105 z-20"
                    : "hover:scale-[1.02] z-10"
                }`}
                style={{
                  background: activeSpecies === idx 
                    ? "rgba(35, 31, 32, 0.6)" 
                    : "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: activeSpecies === idx 
                    ? "1px solid rgba(255, 255, 255, 0.3)" 
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={getImagePath(species.id)}
                    alt={species.name}
                    fill
                    className="object-cover transition-all duration-500"
                    style={{
                      transform: activeSpecies === idx ? "scale(1.15)" : "scale(1)",
                      opacity: 1
                    }}
                  />
                  {/* Very subtle gradient only at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 transition-opacity duration-500"></div>
                </div>
                
                {/* Text container with semi-transparent background */}
                <div className="absolute bottom-0 left-0 right-0 z-20">
                  <div 
                    className="p-6 md:p-8"
                    style={{
                      background: "linear-gradient(to top, rgba(35, 31, 32, 0.85) 0%, rgba(35, 31, 32, 0.7) 50%, rgba(35, 31, 32, 0) 100%)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    <div className={`h-px bg-white/30 mb-4 transition-all duration-500 ${
                    activeSpecies === idx ? "w-24" : "w-16 group-hover:w-20"
                  }`}></div>
                    <h3 
                      className="text-2xl md:text-3xl font-heading text-white mb-2 font-normal"
                      style={{
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)"
                      }}
                    >
                    {species.name}
                  </h3>
                    <p 
                      className="text-champagne/90 font-montserrat text-xs uppercase tracking-[0.15em] mb-4 font-light"
                      style={{
                        textShadow: "0 1px 4px rgba(0, 0, 0, 0.5)"
                      }}
                    >
                    {species.nickname}
                  </p>
                    <div 
                      className="text-champagne font-heading text-xl md:text-2xl font-normal"
                      style={{
                        textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)"
                      }}
                    >
                    {species.investment}
                  </div>
                </div>
                </div>
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-champagne transition-all duration-300 z-30 ${
                  activeSpecies === idx ? "opacity-100 scale-150" : "opacity-0 scale-100"
                }`}></div>
              </Link>
            )})}
          </div>
          <div className="mt-12 text-center scroll-fade">
            <Link
              href="/species"
              className="inline-block px-10 py-4 border border-white/30 text-white font-montserrat text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-light"
            >
              Explore All Species
            </Link>
          </div>
        </div>
      </section>

      {/* Component 4: Who We Are - Company Story */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 0.95) 0%, rgba(35, 31, 32, 1) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col scroll-fade">
              <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
                We Are
                <br />
                <span className="text-champagne">The Cradle of Iron</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 mb-6 font-montserrat font-light">
                Thabazimbi, historically marginalized as a purely industrial mining hub, possesses a latent geological and mythological capital that offers a unique competitive advantage. By synthesizing the scientific reality of the Transvaal Supergroup with the profound cosmology of indigenous creation myths, we claim a positioning distinct from the generic "bushveld" experience.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 font-montserrat font-light">
                We are not merely a hunting lodge. We are a legacy conservation institution where the earth itself tells a story of deep time, resilience, and elemental power.
              </p>
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
                  Our Philosophy
                </h3>
                <ul className="space-y-4 text-white/70 font-montserrat text-sm md:text-base font-light">
                  <li className="flex items-start gap-3">
                    <span><strong className="text-white font-normal">Conservation Investment:</strong> We pivot from selling a hunt to inviting investment in biodiversity. Every contribution goes directly to measurable conservation outcomes. This is not a transaction. It is a legacy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong className="text-white font-normal">Radical Transparency:</strong> Real impact. Measurable results. Every conservation levy is tracked and displayed on our impact dashboard.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong className="text-white font-normal">Seamless Excellence:</strong> A "luxury" experience is defined by the absence of friction. From O.R. Tambo to the final trophy processing, every detail is choreographed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span><strong className="text-white font-normal">The Observer's Journey:</strong> We create an "invitation structure" that appeals equally to the non-hunting partner. If the partner is engaged, the booking becomes a recurring annual pilgrimage.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component 5: Dual Pathways */}
      <section 
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16 scroll-fade">
            <div className="w-12 h-px bg-white/20 mb-6"></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-white font-light">
              Choose Your Journey
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* The Pursuit */}
            <Link
              href="/hunt"
              className="group relative block overflow-hidden scroll-fade"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/The Pursuit.jpg"
                  alt="The Pursuit - Fair Chase, Ballistic Science, Ethical Harvest"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div className="w-10 h-px bg-champagne/60 mb-3"></div>
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-2 font-light">
                    The Pursuit
                  </h3>
                  <p className="text-white/90 font-montserrat text-xs md:text-sm mb-2 font-light">
                    Fair Chase. Ballistic Science. Ethical Harvest.
                  </p>
                  <p className="text-champagne font-montserrat text-[10px] md:text-xs mb-3 font-light">
                    Available: May - August
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white font-montserrat text-[10px] md:text-xs uppercase tracking-[0.1em] font-light transition-colors">
                    <span>Explore</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* The Connection */}
            <Link
              href="/sanctuary"
              className="group relative block overflow-hidden scroll-fade"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/the connection.jpg"
                  alt="The Connection - Veterinary Safaris, Wellness, Immersion"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div className="w-10 h-px bg-champagne/60 mb-3"></div>
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-2 font-light">
                    The Connection
                  </h3>
                  <p className="text-white/90 font-montserrat text-xs md:text-sm mb-3 font-light">
                    Veterinary Safaris. Wellness. Immersion.
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white font-montserrat text-[10px] md:text-xs uppercase tracking-[0.1em] font-light transition-colors">
                    <span>Explore</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Component 6: Conservation Impact */}
      <section 
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 0.95) 0%, rgba(35, 31, 32, 1) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="mb-12 md:mb-16 scroll-fade">
            <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-4">
              Real Impact.
              <br />
              <span className="text-champagne">Measurable Results.</span>
            </h2>
            <p className="text-white/70 font-montserrat text-sm md:text-base mt-6 max-w-2xl font-light">
              Every conservation levy goes directly to these metrics. This is radical transparency.
            </p>
          </div>

          {/* New Layout: Large Feature Card with Side Metrics */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Main Feature Card - Takes 2 columns */}
            <div 
              className="md:col-span-2 scroll-fade"
              style={{
                background: "rgba(35, 31, 32, 0.4)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "3rem 2.5rem",
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
                <div className="flex-1">
                  <div className="w-16 h-px bg-champagne/50 mb-6"></div>
                  <h3 className="text-2xl md:text-3xl font-heading text-white mb-4 font-normal">
                    Conservation in Action
                  </h3>
                  <p className="text-white/80 font-montserrat text-sm md:text-base leading-relaxed mb-4 font-light">
                    Our conservation efforts are measured, tracked, and transparent. Every contribution creates tangible impact in the Waterberg Biosphere.
                  </p>
                  <p className="text-white/60 font-montserrat text-xs md:text-sm leading-relaxed mb-6 font-light italic">
                    Reservations are by application and subject to availability. We curate each guest experience to ensure the highest standards of conservation and ethical practice.
                  </p>
                  <Link
                    href="/impact"
                    className="inline-block px-8 py-3 border border-white/30 text-white font-montserrat text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-light"
                  >
                    View Full Dashboard
                  </Link>
                </div>
                <div className="flex flex-col gap-6 min-w-[200px]">
                  <div>
                    <div className="text-4xl md:text-5xl font-heading text-champagne mb-2 font-normal">
                      12
                </div>
                    <div className="text-white/70 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                      Snares Removed
              </div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-heading text-champagne mb-2 font-normal">
                      320
                    </div>
                    <div className="text-white/70 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                      Meat Donated (kg)
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-heading text-champagne mb-2 font-normal">
                      1,450
                    </div>
                    <div className="text-white/70 font-montserrat text-xs uppercase tracking-[0.1em] font-light">
                      Km Patrolled
                    </div>
                  </div>
                </div>
              </div>
          </div>

            {/* Side Card - Additional Context */}
            <div 
              className="scroll-fade"
              style={{
                background: "rgba(35, 31, 32, 0.4)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "3rem 2.5rem",
              }}
            >
              <div className="w-16 h-px bg-champagne/50 mb-6"></div>
              <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                Radical Transparency
              </h3>
              <p className="text-white/70 font-montserrat text-sm leading-relaxed mb-6 font-light">
                Every conservation levy is tracked and displayed in real-time. See exactly where your investment goes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-champagne"></div>
                  <span className="text-white/80 font-montserrat text-xs font-light">Direct Impact Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-champagne"></div>
                  <span className="text-white/80 font-montserrat text-xs font-light">Real-Time Metrics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-champagne"></div>
                  <span className="text-white/80 font-montserrat text-xs font-light">Measurable Outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component 7: The Culinary Narrative */}
      <section 
        ref={(el) => { sectionRefs.current[6] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full overflow-hidden"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/dining2.jpg"
                    alt="Field to Fork - Venison tasting menu, Boma dinners, elevated South African cuisine"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-4 font-normal">
                    Field to Fork
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed mb-4 font-light">
                    Food is a primary driver of luxury travel. Our culinary program navigates the delicate balance between the hunter's feast and refined gastronomy. The Field to Fork philosophy is the ethical bridge, demonstrating that the animal harvested is respected and utilized.
                  </p>
                  <ul className="space-y-2 text-white/70 font-montserrat text-sm font-light">
                    <li className="flex items-start gap-3">
                      <span>Venison tasting menu with wine pairings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>Boma dinners under the stars</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span>Traditional South African dishes elevated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col scroll-fade h-full">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "2.5rem 2.5rem",
                }}
              >
                <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
                The Culinary
                <br />
                  <span className="text-champagne">Narrative</span>
              </h2>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 mb-6 font-montserrat font-light">
                Kudu: The Venison of Kings. Eland: The Beef of the Bush. Gemsbok: Often cited as the tastiest venison. Each species offers a unique culinary experience, paired with South Africa's finest wines.
              </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 mb-6 font-montserrat font-light">
                The Boma (open-air enclosure) is the heart of the safari evening. It is a sensory theater where the primal meets the refined. Central fire with Leadwood logs, lanterns, starlight, and the sounds of the night.
              </p>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 mb-8 font-montserrat font-light">
                  Our culinary philosophy honors the ethical harvest. Every dish tells a story of conservation, respect, and the seamless transformation from field to fork, where the primal hunt becomes refined gastronomy.
              </p>
              <Link
                href="/journey"
                  className="inline-block mt-auto px-8 md:px-10 py-3 md:py-4 border border-white/30 text-white font-montserrat text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-light group"
              >
                <span className="flex items-center gap-2">
                  Experience the Culinary Journey
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component 8: Immersive Experience Gallery */}
      <section 
        ref={(el) => { sectionRefs.current[7] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 0.95) 0%, rgba(35, 31, 32, 1) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10 text-center scroll-fade">
            <div className="w-24 h-px bg-white/20 mx-auto mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-4">
              The Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Luxury Accommodations",
                desc: "Elegant suites with panoramic bushveld views. Private terraces, refined interiors, and world-class amenities.",
                link: "/sanctuary",
                image: "/images/luxury accom.jpg",
              },
              {
                title: "Spa & Wellness",
                desc: "Luxury bathrooms with deep soaking tubs, outdoor showers, and premium amenities. A sanctuary of relaxation.",
                link: "/sanctuary",
                image: "/images/outdoor bath.jpg",
              },
              {
                title: "Star Gazing",
                desc: "Experience the Southern Hemisphere's night sky. No light pollution.",
                link: "/sanctuary",
                image: "/images/star gazing.jpg",
              },
              {
                title: "The Main Lodge",
                desc: "Sophisticated common areas with fireplaces, library, and elegant lounges. The heart of Vaalpenskraal.",
                link: "/sanctuary",
                image: "/images/main lodge2.jpg",
              },
              {
                title: "Private Decks",
                desc: "Expansive outdoor terraces and viewing decks. A sanctuary of silence for morning contemplation or evening reflection.",
                link: "/sanctuary",
                image: "/images/decks.jpg",
              },
              {
                title: "Dining Spaces",
                desc: "Multiple elegant dining areas, both indoor and outdoor. Intimate culinary experiences and refined Boma gatherings.",
                link: "/sanctuary",
                image: "/images/dining spaces.jpg",
              },
            ].map((experience, idx) => (
              <Link
                key={idx}
                href={experience.link}
                className="luxury-card group flex flex-col overflow-hidden transition-all duration-700 scroll-fade"
                style={{ 
                  transitionDelay: `${idx * 150}ms`,
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                }}
              >
                {/* Image Section */}
                <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                  {experience.image ? (
                    <>
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-sunset-gold/20 via-espresso to-espresso"></div>
                  )}
                </div>
                
                {/* Text Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="w-16 h-px bg-white/30 mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <h3 className="text-xl md:text-2xl font-heading text-white mb-3 font-normal">
                    {experience.title}
                  </h3>
                  <p className="text-white/70 font-montserrat text-sm leading-relaxed tracking-[0.02em] font-light">
                    {experience.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Component 9: Final CTA - Booking Section */}
      <section 
        ref={(el) => { sectionRefs.current[8] = el; }}
        className="pt-8 md:pt-12 lg:pt-16 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, rgba(35, 31, 32, 1) 0%, rgba(35, 31, 32, 0.95) 100%)",
        }}
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left: Text Content */}
            <div className="flex flex-col scroll-fade">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "2.5rem 2.5rem",
                }}
              >
                <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-white font-normal mb-6">
                  Begin Your
                  <br />
                  <span className="text-champagne">Journey</span>
            </h2>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/80 mb-6 font-montserrat font-light">
              Experience the transformation. Step out of the modern world and onto the iron bones of the ancient earth, participating in a cycle of conservation that is as ethical as it is primal. Vaalpenskraal is a sanctuary of silence and deep contemplation, where the sounds of the bush remain dominant.
            </p>
                
                {/* Exclusivity & Minimum Stay Notice */}
                <div
                  className="mb-6 p-4 rounded-lg"
                  style={{
                    background: "rgba(35, 31, 32, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <p className="text-white/80 font-montserrat text-xs leading-relaxed font-light">
                    <span className="text-white font-semibold">Reservations are by application and subject to availability.</span>{" "}
                    <span className="text-white/60">We recommend a minimum 3-4 night stay for the full experience. Exclusive use of the lodge available.</span>
                  </p>
                </div>

                {/* Seasonal Availability Notice */}
                <div
                  className="mb-8 p-4 rounded-lg"
                  style={{
                    background: "rgba(201, 132, 85, 0.1)",
                    border: "1px solid rgba(201, 132, 85, 0.3)",
                  }}
                >
                  <p className="text-white/90 font-montserrat text-sm leading-relaxed font-light">
                    <span className="text-sunset-gold font-semibold">Hunting Season:</span> May - August.{" "}
                    <span className="text-white/70">Our luxury safari experiences, including game drives, wildlife viewing, culinary experiences, and accommodation, are available year-round.</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8">
              <Link
                href="/reserve"
                    className="px-8 md:px-10 py-3 md:py-4 bg-signal-orange text-canvas-cream font-montserrat text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-signal-orange/90 transition-all duration-500 font-semibold group text-center"
              >
                    <span className="flex items-center justify-center gap-2">
                  Request Quote
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/sanctuary"
                    className="px-8 md:px-10 py-3 md:py-4 border border-white/30 text-white font-montserrat text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-light group text-center"
              >
                    <span className="flex items-center justify-center gap-2">
                {t('viewAccommodation')}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
              </Link>
            </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-white/50 font-montserrat text-xs uppercase tracking-[0.2em] font-light">
                    Vaalpenskraal Game Farm
                    <br />
                    Thabazimbi, Limpopo
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="flex flex-col scroll-fade h-full">
              <div 
                className="flex flex-col h-full"
                style={{
                  background: "rgba(35, 31, 32, 0.4)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "2.5rem 2.5rem",
                }}
              >
                <div className="w-24 h-px bg-white/20 mb-6 md:mb-8"></div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 border border-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 md:w-20 md:h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-white/40 font-montserrat text-xs uppercase tracking-[0.2em] font-light">
                      The Iron Mountain
                      <br />
                      Awaits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
