"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function OriginsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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

  return (
    <div className="min-h-screen">
      {/* Hero: The Iron Mountain */}
      <section className="cinematic-hero relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-soil/30 via-clay/20 to-charcoal z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        {/* Hero Image Placeholder */}
        <div className="absolute inset-0 z-5 opacity-20">
          <div className="relative w-full h-full bg-gradient-to-br from-clay/30 via-soil/20 to-charcoal">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                  Iron Mountain Panorama
                </p>
              </div>
            </div>
            {/* <Image
              src="/images/origins/iron-mountain-hero.jpg"
              alt="Iron Mountain"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            /> */}
          </div>
        </div>
        <div className="no-ui">
          <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto w-full relative z-30">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light leading-[1.1]">
                Thabazimbi
                <br />
                <span className="text-clay">The Mountain of Iron</span>
              </h1>
            </div>
            <div className="mt-8 md:mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <p className="text-silver/70 font-body text-sm md:text-base uppercase tracking-[0.2em] font-light mb-3">
                Where Deep Time Meets the Living Earth
              </p>
              <p className="text-silver/50 font-body text-[10px] uppercase tracking-[0.15em] font-light">
                HUNT ON THE OLDEST SURFACE ON EARTH • CONSERVATION INVESTMENT • EXCLUSIVE ACCESS
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <div className="w-px h-12 bg-clay/30"></div>
        </div>
      </section>

      {/* Section 1: Deep Time - The Geological Canvas */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el; }}
        className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 scroll-fade">
              <div className="w-24 h-px bg-clay/30"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light leading-tight">
                Two Billion Years
                <br />
                in the Making
              </h2>
              <p className="text-silver/60 font-body text-xs uppercase tracking-[0.15em] font-light">
                Palaeoproterozoic Era
              </p>
            </div>
            <div className="space-y-4 md:space-y-6 scroll-fade">
              <p className="editorial-text">
                The visual drama you experience, the sheer cliffs, the rugged scree slopes, the deep red soil, is the result of geological events occurring over two billion years ago. This is not metaphor. The mountains are literally composed of high-grade hematite, immense geological formations that have dictated the region's history, economy, and distinct visual palette.
              </p>
              <p className="editorial-text">
                The Waterberg Group and the underlying Transvaal Supergroup create aggressive, jagged ridges. The Ysterberg (Iron Mountain), the Witfonteinrand, and the Boshofberg rise abruptly from the plains, their iron content so high (often exceeding 60% Fe) that the rocks themselves are heavy, dense, and metallic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geological Features Visual */}
      <section className="py-12 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Banded Iron Formation",
                desc: "Layered sedimentary rocks with alternating iron-rich and chert bands. Creates striped, textured outcrops that look ancient and sculptural.",
                color: "from-clay/20",
              },
              {
                title: "Hematite Outcrops",
                desc: "Steel-grey to blue-grey metallic rocks, often brecciated. Strong contrast against the red soil and green vegetation.",
                color: "from-soil/20",
              },
              {
                title: "Waterberg Sandstone",
                desc: "Coarse-grained, red-oxidized rock faces. Glows fiery orange/red at sunset, the Golden Hour.",
                color: "from-clay/30",
              },
              {
                title: "Diabase Dykes",
                desc: "Intrusive igneous rock forming distinct ridges. Often supports different vegetation, creating green ribbons on hills.",
                color: "from-discovery-green/20",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="border border-clay/20 p-6 md:p-8 hover:border-clay/40 transition-all duration-500 scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`w-full h-32 md:h-40 bg-gradient-to-br ${feature.color} via-soil/20 to-charcoal mb-6 relative overflow-hidden border border-clay/10`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                  {/* <Image
                    src={`/images/origins/${feature.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  /> */}
                </div>
                <h3 className="text-cream font-heading text-xl mb-3 font-light">{feature.title}</h3>
                <p className="text-silver/70 font-body text-sm leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: The Red Earth */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el; }}
        className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Red Earth Image */}
            <div className="relative aspect-square bg-gradient-to-br from-clay/30 via-soil/40 to-charcoal overflow-hidden border border-clay/20 scroll-fade">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                    The Red Dust
                  </p>
                  <p className="text-clay/30 font-body text-xs mt-2 font-light">
                    Hematite & Ochre
                  </p>
                </div>
              </div>
              {/* <Image
                src="/images/origins/red-earth.jpg"
                alt="Red earth of Thabazimbi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              /> */}
            </div>
            <div className="space-y-6 md:space-y-8 scroll-fade">
              <div className="w-24 h-px bg-clay/30"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light leading-tight">
                Where the Earth
                <br />
                Paints You
              </h2>
              <p className="editorial-text">
                The red dust is more than dirt; it is a branding element. It is pervasive. It coats the termite mounds, turning them into architectural spires that mimic the mountains. It settles on the trunks of the Leadwood trees, creating a two-toned effect.
              </p>
              <p className="editorial-text">
                This is the "Red Earth" of Africa that features in literature and film. It is the dust that elephants bathe in, turning their grey hides to a rusty orange to protect against the sun and parasites. The soil in this region is derived from the weathering of iron-rich parent material, releasing iron oxides (hematite and goethite) into the soil profile, staining it a deep, vibrant ochre.
              </p>
              <p className="text-clay font-body text-sm uppercase tracking-[0.1em] font-light italic">
                "Where the earth paints you with the color of the mountain."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Great Mother Ma - Myth & Legend */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }}
        className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-12 md:mb-16 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light mb-6">
              The Great Mother Ma
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base uppercase tracking-[0.15em] font-light">
              The Legend of the Iron Tears
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-6 scroll-fade">
              <p className="editorial-text">
                Long ago, in the time before memory, the Great Mother Ma looked upon the banded iron formations that rose from the ancient earth. These rocks, formed billions of years ago when oxygen first filled the atmosphere, held the story of life itself.
              </p>
              <p className="editorial-text">
                Moved by the beauty and the burden of this primal landscape, the Great Mother Ma wept. Her tears, pure and life-giving, carved through the iron-rich stone, creating the rivers that now sustain the Waterberg Biosphere.
              </p>
            </div>
            <div className="space-y-6 scroll-fade">
              <p className="editorial-text">
                The red earth you see, the hematite and ochre that color our mountains, is her legacy. It is the blood of the earth, the iron that gives this place its name: Thabazimbi, the Mountain of Iron.
              </p>
              <p className="editorial-text">
                This is not just geology. This is the story of a landscape that has witnessed the birth of oxygen, the rise of life, and the resilience of nature. It is a place where deep time meets the living earth.
              </p>
            </div>
          </div>

          {/* Myth Visual */}
          <div className="mt-16 relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20 scroll-fade">
            <Image
              src="/images/Mother Ma.jpg"
              alt="The Great Mother Ma legend"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Section 4: The Botanical Theater */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el; }}
        className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal z-0"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light mb-6">
              The Botanical Theater
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base uppercase tracking-[0.15em] font-light">
              Characters in the Landscape
            </p>
          </div>

          {/* Sweet vs Sour Veld */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <div className="border border-clay/20 p-8 md:p-10 scroll-fade">
              <h3 className="text-cream font-heading text-2xl md:text-3xl mb-4 font-light">Sour Bushveld</h3>
              <p className="text-silver/70 font-body text-sm mb-4 font-light">
                Found on higher slopes and sandy, leached soils. Grasses grow tall in summer, providing excellent cover. In winter, they withdraw nutrients, becoming fibrous and unpalatable.
              </p>
              <div className="relative w-full h-48 bg-gradient-to-br from-discovery-green/20 via-soil/20 to-charcoal border border-clay/10 overflow-hidden">
                <Image
                  src="/images/Sour Bushveld.png"
                  alt="Sour bushveld"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="border border-clay/20 p-8 md:p-10 scroll-fade">
              <h3 className="text-cream font-heading text-2xl md:text-3xl mb-4 font-light">Sweet Bushveld</h3>
              <p className="text-silver/70 font-body text-sm mb-4 font-light">
                Found in nutrient-rich clay soils of valleys. Grasses retain nutritional value even when dry, standing hay. Game concentrations are higher here during hunting season.
              </p>
              <div className="relative w-full h-48 bg-gradient-to-br from-ochre/20 via-clay/20 to-charcoal border border-clay/10 overflow-hidden">
                <Image
                  src="/images/Sweet Bushveld.png"
                  alt="Sweet bushveld"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Iconic Trees */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Leadwood",
                scientific: "Combretum imberbe",
                desc: "The spiritual elder. Pale, greyish-white trunk with 'snakeskin' bark. Wood so dense it sinks in water. Some specimens over a thousand years old.",
                image: "/images/Leadwood.png",
              },
              {
                name: "Marula",
                scientific: "Sclerocarya birrea",
                desc: "The 'Mother Tree.' Keystone species. Drops golf-ball-sized yellow fruits in late summer, attracting elephants, baboons, and antelope.",
                image: "/images/Marula.png",
              },
              {
                name: "Mopane",
                scientific: "Colophospermum mopane",
                desc: "Butterfly-shaped leaves. In winter, turns kaleidoscope of autumn colors, gold, rust, orange. The sound of wind through dry Mopane leaves defines the winter hunt.",
                image: "/images/Mopane.png",
              },
              {
                name: "Acacia",
                scientific: "Vachellia spp.",
                desc: "The 'Fortresses of the Bush.' Flat-topped silhouette. Vicious thorns protect from over-browsing. Primary shade providers, creating 'pools of shadow' for lions.",
                image: "/images/Acacia.png",
              },
            ].map((tree, idx) => (
              <div
                key={idx}
                className="border border-clay/20 p-6 hover:border-clay/40 transition-all duration-500 scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative w-full aspect-square bg-gradient-to-br from-clay/20 via-soil/20 to-charcoal mb-4 border border-clay/10 overflow-hidden">
                  <Image
                    src={tree.image}
                    alt={tree.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-cream font-heading text-lg mb-1 font-light">{tree.name}</h3>
                <p className="text-clay/70 font-body text-xs italic mb-3 font-light">{tree.scientific}</p>
                <p className="text-silver/70 font-body text-xs leading-relaxed font-light">{tree.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: The Human Stratigraphy - Timeline */}
      <section 
        ref={(el) => { sectionRefs.current[4] = el; }}
        className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-12 md:mb-16 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light mb-6">
              The Human Stratigraphy
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base uppercase tracking-[0.15em] font-light">
              From Iron Age to Green Renaissance
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* Iron Age */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-fade">
              <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                    Iron Age Settlement
                  </p>
                </div>
                {/* <Image
                  src="/images/origins/iron-age.jpg"
                  alt="Iron Age"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                /> */}
              </div>
              <div>
                <div className="text-clay font-body text-xs uppercase tracking-[0.2em] mb-4 font-light">450 AD</div>
                <h3 className="text-cream font-heading text-2xl md:text-3xl mb-4 font-light">The Iron Age Legacy</h3>
                <p className="editorial-text">
                  Long before the town existed, the mountains were known to indigenous Bantu-speaking peoples. Archaeological evidence indicates Iron Age settlements dating back to 450 AD. These early inhabitants recognized the value of the "heavy rocks," building clay furnaces to smelt iron ore, creating hoes for agriculture and spear tips for hunting.
                </p>
              </div>
            </div>

            {/* Industrial Boom */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-fade">
              <div className="order-2 md:order-1">
                <div className="text-clay font-body text-xs uppercase tracking-[0.2em] mb-4 font-light">1919 - 2016</div>
                <h3 className="text-cream font-heading text-2xl md:text-3xl mb-4 font-light">The Industrial Boom</h3>
                <p className="editorial-text">
                  In 1919, prospector J.H. Williams discovered the massive hematite reef. By the 1930s, ISCOR established full-scale mining operations. The railway arrived in 1934, carving a path through the bush. For nearly a century, Thabazimbi was a company town, the mine was the heart, lungs, and wallet of the community. The mountain was systematically disassembled to build the infrastructure of South Africa.
                </p>
              </div>
              <div className="relative aspect-square bg-gradient-to-br from-clay/20 via-soil/30 to-charcoal overflow-hidden border border-clay/20 order-1 md:order-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                    Mining Era
                  </p>
                </div>
                {/* <Image
                  src="/images/origins/mining-era.jpg"
                  alt="Mining era"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                /> */}
              </div>
            </div>

            {/* Green Renaissance */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-fade">
              <div className="relative aspect-square bg-gradient-to-br from-discovery-green/20 via-clay/20 to-charcoal overflow-hidden border border-clay/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                    Rewilding
                  </p>
                </div>
                {/* <Image
                  src="/images/origins/rewilding.jpg"
                  alt="Green Renaissance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                /> */}
              </div>
              <div>
                <div className="text-clay font-body text-xs uppercase tracking-[0.2em] mb-4 font-light">2016 - Present</div>
                <h3 className="text-cream font-heading text-2xl md:text-3xl mb-4 font-light">The Green Renaissance</h3>
                <p className="editorial-text">
                  The closure of the Kumba Iron Ore mine in 2016 could have been the death knell. Instead, it sparked a renaissance. The region pivoted. Agricultural focus shifted from cattle to game farming. The expansion of Marakele National Park and the declaration of the Waterberg Biosphere Reserve by UNESCO signaled a new era. Nature is reclaiming the narrative. The scars of mining are being healed by the encroachment of the bush. The red dust that once signaled industry now signals adventure.
                </p>
                <p className="text-clay font-body text-sm uppercase tracking-[0.1em] mt-6 font-light italic">
                  "This is the story of resilience, of a landscape that survives and thrives."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: The Sensory Experience */}
      <section 
        ref={(el) => { sectionRefs.current[5] = el; }}
        className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/98 to-charcoal z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16 scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light mb-6">
              The Sensory Experience
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base uppercase tracking-[0.15em] font-light">
              A Day in the Bushveld
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "The Olfactory Landscape",
                items: [
                  "Petrichor: The smell of rain hitting dry, hot earth, metallic, crisp, electric",
                  "Wild Sage: Pungent, camphorous, herbal, the smell of the safari vehicle",
                  "The Dust: Dry, baked, mineral, the smell of the African sun",
                ],
                image: "smells",
              },
              {
                title: "The Heat and Light",
                items: [
                  "Morning Haze: Cold, golden haze hanging in valleys, backlighting acacias",
                  "Midday Glare: Harsh, vertical sun. Shadows disappear. Landscape bleached and tough",
                  "Violet Dusk: Deep, bruised violet sky, characteristic of the African bushveld",
                ],
                image: "light",
              },
              {
                title: "The Soundscape",
                items: [
                  "Grey Go-away-bird: Nasal G'waaaay, the bushveld's alarm system",
                  "Night Sounds: Churring of Nightjars, haunting whoop of Spotted Hyena",
                  "The Absence: No industrial noise amplifies natural sounds, immersive audio safari",
                ],
                image: "sounds",
              },
            ].map((sense, idx) => (
              <div
                key={idx}
                className="border border-clay/20 p-6 md:p-8 hover:border-clay/40 transition-all duration-500 scroll-fade"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-clay/20 via-soil/20 to-charcoal mb-6 border border-clay/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-clay/40 font-body text-xs uppercase tracking-[0.1em] font-light">
                      {sense.title}
                    </p>
                  </div>
                  {/* <Image
                    src={`/images/origins/${sense.image}.jpg`}
                    alt={sense.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  /> */}
                </div>
                <h3 className="text-cream font-heading text-xl mb-4 font-light">{sense.title}</h3>
                <ul className="space-y-3">
                  {sense.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-silver/70 font-body text-sm leading-relaxed font-light flex items-start">
                      <span className="text-clay mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: The Celestial Connection */}
      <section 
        ref={(el) => { sectionRefs.current[6] = el; }}
        className="py-16 md:py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 scroll-fade">
              <div className="w-24 h-px bg-clay/30"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light leading-tight">
                The Celestial
                <br />
                Safari
              </h2>
              <p className="text-silver/60 font-body text-xs uppercase tracking-[0.15em] font-light">
                Deep Space, Deep Time
              </p>
            </div>
            <div className="space-y-4 md:space-y-6 scroll-fade">
              <p className="editorial-text">
                Located far from the light pollution of Gauteng's mega-cities, the Waterberg offers some of the darkest skies in South Africa. For clients from Europe or the USA, the southern sky is a revelation.
              </p>
              <p className="editorial-text">
                In winter, the galactic core is visible directly overhead. The Milky Way appears as a textured, three-dimensional cloud of diamond dust stretching from horizon to horizon, bright enough to cast a shadow. The Magellanic Clouds, two dwarf galaxies orbiting the Milky Way, float in the void. The Southern Cross (Crux) serves as the navigational anchor.
              </p>
              <p className="text-clay font-body text-sm uppercase tracking-[0.1em] mt-6 font-light italic">
                "Lying under the open sky, listening to the distant roar of a lion while looking back into deep time."
              </p>
            </div>
          </div>

          {/* Stargazing Image */}
          <div className="mt-16 relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-midnight/40 via-charcoal to-charcoal overflow-hidden border border-clay/20 scroll-fade">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 border-2 border-clay/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-clay/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-clay/40 font-body text-sm uppercase tracking-[0.1em] font-light">
                  The Southern Sky
                </p>
                <p className="text-clay/30 font-body text-xs mt-2 font-light">
                  Milky Way, Magellanic Clouds, Southern Cross
                </p>
              </div>
            </div>
            {/* <Image
              src="/images/origins/stargazing.jpg"
              alt="Stargazing in the Waterberg"
              fill
              className="object-cover"
              sizes="100vw"
            /> */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-clay/10">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal z-0"></div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="border border-clay/20 p-12 md:p-16 lg:p-20 bg-charcoal/50 backdrop-blur-sm scroll-fade">
            <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-12"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light mb-6 md:mb-8">
              Stand on the Mountain of Iron
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Witness the resilience of the natural world. Experience a place that feels ancient, unbreakable, and fiercely alive.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Link
                href="/reserve"
                className="px-10 md:px-12 py-4 md:py-5 bg-clay text-charcoal font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/90 transition-all duration-500 font-light"
              >
                Begin Your Journey
              </Link>
              <Link
                href="/species"
                className="px-10 md:px-12 py-4 md:py-5 border border-clay/50 text-clay font-body text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light"
              >
                Explore the Guardians
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
