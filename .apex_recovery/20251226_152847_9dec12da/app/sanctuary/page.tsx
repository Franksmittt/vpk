import Link from "next/link";

export default function SanctuaryPage() {
  return (
    <div className="min-h-screen page-container">
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
        {/* Section 1: The Vita-Dart Experience */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6 md:space-y-8">
              <div className="w-24 h-px bg-clay/30"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light leading-tight">
                The Vita-Dart
                <br />
                Experience
              </h2>
              <div className="space-y-6 pt-8">
                <p className="editorial-text">
                  Don't just observe. Act. Join our veterinary team for a rhino
                  micro-chipping operation. Feel the texture of ancient skin
                  beneath your hands, witness the precision of conservation
                  science, and become part of the story that protects these
                  magnificent creatures.
                </p>
                <Link
                  href="/reserve"
                  className="inline-block mt-8 px-10 py-4 border border-clay/50 text-clay font-body text-xs uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light"
                >
                  Request Quote
                </Link>
              </div>
            </div>
            <div className="h-[500px] border border-clay/20 flex items-center justify-center bg-clay/5">
              <p className="text-silver/30 font-body text-sm tracking-[0.1em] font-light">
                [Placeholder: Close-up of hands touching rhino skin]
              </p>
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
                className="luxury-card border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500"
              >
                <div className="w-16 h-px bg-clay/30 mb-6"></div>
                <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                  {activity.title}
                </h3>
                <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                  {activity.desc}
                </p>
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
              Experience the authentic "Bosveld" spirit in comfort. Our lodge offers luxury self-catering accommodation situated in Thabazimbi. We have four exclusive units, known as "Kraals," each designed to provide a relaxing retreat after a day in the bush.
            </p>
          </div>
          
          {/* The Four Kraals */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Swartwitpens Kraal",
                subtitle: "Sable",
                desc: "Experience authentic bushveld luxury in this spacious self-catering unit.",
              },
              {
                name: "Gemsbok Kraal",
                subtitle: "Oryx",
                desc: "A comfortable retreat named after the majestic gemsbok that roam our plains.",
              },
              {
                name: "Kudu Kraal",
                subtitle: "",
                desc: "Relax in this well-appointed unit, inspired by the graceful kudu antelope.",
              },
              {
                name: "Eland Kraal",
                subtitle: "",
                desc: "The largest of our units, named for the magnificent eland, Africa's largest antelope.",
              },
            ].map((kraal, idx) => (
              <div
                key={idx}
                className="luxury-card border border-clay/20 p-6 md:p-8 hover:border-clay/40 transition-all duration-500"
              >
                <div className="w-16 h-px bg-clay/30 mb-4"></div>
                <h3 className="text-2xl md:text-3xl font-heading text-cream mb-2 font-light">
                  {kraal.name}
                </h3>
                {kraal.subtitle && (
                  <p className="text-clay/70 font-body text-sm mb-4 tracking-[0.1em] font-light uppercase">
                    {kraal.subtitle}
                  </p>
                )}
                <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mb-6">
                  {kraal.desc}
                </p>
                <div className="h-[200px] md:h-[250px] bg-clay/5 border border-clay/10 flex items-center justify-center">
                  <p className="text-silver/30 font-body text-xs tracking-[0.1em] font-light">
                    [Unit Photo]
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Unit Features */}
          <div className="border border-clay/20 p-8 md:p-12 bg-charcoal/30 mb-16">
            <h3 className="text-2xl md:text-3xl font-heading text-cream mb-8 font-light">
              Unit Features
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">Capacity</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  Each unit comfortably sleeps <span className="text-clay">4 people</span>
                </p>
              </div>
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">Self-Catering</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  Fully equipped kitchens for preparing your own meals
                </p>
              </div>
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">Living Space</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  Private lounge area for quiet contemplation and reflection
                </p>
              </div>
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">Modern Comforts</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  <span className="text-clay">Air Conditioning</span>, <span className="text-clay">Wi-Fi</span>, and <span className="text-clay">DSTV</span>
                </p>
              </div>
              <div>
                <div className="w-12 h-px bg-clay/30 mb-4"></div>
                <h4 className="text-cream font-heading text-lg mb-2 font-light">Outdoor Living</h4>
                <p className="text-silver/60 font-body text-sm tracking-[0.02em] font-light">
                  Private <span className="text-clay">outside Braai (BBQ)</span> and <span className="text-clay">Boma</span> area
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Lodge Facilities */}
        <section>
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Lodge Facilities
            </h2>
            <p className="text-silver/70 font-body text-base md:text-lg mt-6 leading-relaxed tracking-[0.02em] font-light max-w-3xl">
              Beyond your private unit, Vaalpenskraal Game Farm offers shared facilities designed to enhance your stay and ensure convenience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="luxury-card border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <div className="w-16 h-px bg-clay/30 mb-6"></div>
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Swimming Pool
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                Cool off during the warm Thabazimbi days in our sparkling swimming pool.
              </p>
            </div>
            <div className="luxury-card border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <div className="w-16 h-px bg-clay/30 mb-6"></div>
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Immaculate Standards
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                We pride ourselves on facilities that are consistently neat and clean.
              </p>
            </div>
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
            <div className="luxury-card border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <div className="w-16 h-px bg-clay/30 mb-6"></div>
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Processing
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mb-2">
                Fully equipped
              </p>
              <p className="text-clay font-body text-lg font-light">
                Slaughter Room
              </p>
              <p className="text-silver/50 font-body text-xs mt-2 tracking-[0.05em] font-light italic">
                (Slagkamer)
              </p>
            </div>
            <div className="luxury-card border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <div className="w-16 h-px bg-clay/30 mb-6"></div>
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Storage
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light mb-2">
                On-site
              </p>
              <p className="text-clay font-body text-lg font-light">
                Cold Room
              </p>
              <p className="text-silver/50 font-body text-xs mt-2 tracking-[0.05em] font-light italic">
                (Koelkamer)
              </p>
            </div>
            <div className="luxury-card border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <div className="w-16 h-px bg-clay/30 mb-6"></div>
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Game Variety
              </h3>
              <p className="text-silver/60 font-body text-sm leading-relaxed tracking-[0.02em] font-light">
                The farm hosts a variety of game, with successful hunts recorded for species including Gemsbok and other plains game.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
