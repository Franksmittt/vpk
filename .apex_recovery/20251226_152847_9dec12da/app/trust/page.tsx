import Link from "next/link";

export default function TrustPage() {
  return (
    <div className="min-h-screen page-container">
      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-transparent z-10"></div>
        <div className="relative z-20 text-center max-w-4xl w-full">
          <div className="w-24 h-px bg-clay/30 mx-auto mb-8 md:mb-12"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-cream mb-6 md:mb-8 font-light">
            Logistics
          </h1>
          <p className="text-silver/70 font-body text-xs md:text-sm uppercase tracking-[0.2em] font-light px-4">
            Radical Trust. Door-to-Door Concierge.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 lg:py-32 space-y-12 md:space-y-16">
        {/* Section 1: The "Gun Run" Solved */}
        <section className="max-w-5xl">
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              The "Gun Run"
              <br />
              Solved
            </h2>
          </div>
          <div className="border border-clay/20 p-12 mb-8">
            <p className="editorial-text mb-12">
              We've eliminated the friction. Upload your US 4457 Form, and our
              system will pre-fill your SAPS 520 PDF. Download your "Ready to
              Print" pack and arrive prepared.
            </p>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Upload US 4457 Form",
                  desc: "Simple file upload interface",
                },
                {
                  step: "2",
                  title: "System Pre-fills SAPS 520",
                  desc: "Automated form generation",
                },
                {
                  step: "3",
                  title: "Download Ready-to-Print Pack",
                  desc: "Everything you need in one PDF",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-6">
                  <div className="w-16 h-16 border border-clay/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-clay font-heading text-xl font-light">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-cream font-heading text-xl mb-2 font-light">
                      {item.title}
                    </h3>
                    <p className="text-silver/50 font-body text-sm tracking-[0.02em] font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 px-10 py-4 border border-clay/50 text-clay font-body text-xs uppercase tracking-[0.2em] hover:bg-clay/10 hover:border-clay transition-all duration-500 font-light">
              Generate SAPS 520 Form
            </button>
          </div>
          <div className="flex items-center space-x-6 text-silver/40 font-body text-xs tracking-[0.1em] font-light">
            <span>Partner Services:</span>
            <span className="px-6 py-2 border border-clay/20">Air 2000</span>
            <span className="px-6 py-2 border border-clay/20">Gracy Travel</span>
          </div>
        </section>

        {/* Section 2: Safety & Evac */}
        <section className="max-w-5xl">
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Safety &
              <br />
              Evacuation
            </h2>
          </div>
          <div className="border border-clay/20 p-12">
            <p className="editorial-text mb-8">
              Paramilitary medical evacuation included. You are safe from the
              moment you land. Global Rescue integration ensures world-class
              emergency response capabilities.
            </p>
            <div className="border border-clay/10 p-8 bg-charcoal/50 mb-4">
              <p className="text-silver/40 font-body text-sm mb-6 tracking-[0.05em] font-light">
                [Global Rescue "Get a Quote" embedded iframe would be here]
              </p>
              <div className="h-64 bg-clay/5 border border-clay/10 flex items-center justify-center">
                <p className="text-silver/30 font-body text-xs tracking-[0.1em] font-light">
                  Global Rescue Widget Placeholder
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Iron Silence - Policies */}
        <section className="max-w-5xl">
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              The Iron
              <br />
              <span className="text-clay">Silence</span>
            </h2>
            <p className="text-silver/60 font-body text-sm md:text-base mt-6 max-w-3xl font-light">
              Vaalpenskraal is a sanctuary of silence and deep contemplation. To preserve the immersive soundscape, we maintain strict protocols that ensure all guests can experience the natural symphony of the Waterberg Biosphere.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                The Sanctuary of Silence
              </h3>
              <p className="text-silver/60 font-body leading-relaxed tracking-[0.02em] font-light mb-4">
                Vaalpenskraal is a place of deep listening. We ask that the sounds of the bush remain dominant. Amplified music is restricted to personal headphones or exclusive-use interior spaces.
              </p>
              <p className="text-silver/50 font-body text-xs leading-relaxed tracking-[0.02em] font-light italic">
                This policy ensures all guests can experience the natural soundscape—the call of birds, the rustle of wind through acacia, the distant rumble of thunder.
              </p>
            </div>
            <div className="border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                The Ritual of the Hunt
              </h3>
              <p className="text-silver/60 font-body leading-relaxed tracking-[0.02em] font-light mb-4">
                We honor the ethical pursuit. We curate a sophisticated cellar for the post-hunt 'Après-Safari' ritual. To ensure safety and the integrity of the hunt, alcohol consumption is reserved for evening celebrations.
              </p>
              <p className="text-silver/50 font-body text-xs leading-relaxed tracking-[0.02em] font-light italic">
                Daytime consumption suspends all hunting activities. This policy protects both the guest and the integrity of the ethical harvest.
              </p>
            </div>
          </div>
          <div className="border border-clay/20 p-8 bg-charcoal/50">
            <h3 className="text-2xl font-heading text-cream mb-4 font-light">
              The Right of Admission
            </h3>
            <p className="text-silver/70 font-body leading-relaxed tracking-[0.02em] font-light">
              To protect this atmosphere and ensure all guests can experience the tranquility of the Iron Mountain, the Lodge reserves the right to ask any guest compromising this code to leave. We curate each guest experience to ensure the highest standards of conservation and ethical practice.
            </p>
          </div>
        </section>

        {/* Section 4: Gear Guide */}
        <section className="max-w-5xl">
          <div className="mb-12 md:mb-16">
            <div className="w-24 h-px bg-clay/30 mb-6 md:mb-8"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-cream font-light">
              Gear Guide
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Boots
              </h3>
              <p className="text-silver/60 font-body leading-relaxed tracking-[0.02em] font-light">
                Soft soles only (Courteney Boots). The Iron Stone is loud. Your
                footsteps must be silent to respect the ancient ground beneath
                you.
              </p>
            </div>
            <div className="border border-clay/20 p-8 hover:border-clay/40 transition-all duration-500">
              <h3 className="text-2xl font-heading text-cream mb-4 font-light">
                Camouflage
              </h3>
              <p className="text-silver/60 font-body leading-relaxed tracking-[0.02em] font-light">
                Sitka Subalpine or Earth Tones. No dark blues (Tsetse flies -
                though rare here). Blend with the Waterberg's natural palette.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
