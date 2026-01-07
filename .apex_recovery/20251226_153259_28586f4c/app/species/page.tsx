"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SpeciesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Species" },
    { id: "spiral", name: "Spiral-Horned" },
    { id: "plains", name: "Plains Runners" },
    { id: "desert", name: "Desert Specialists" },
    { id: "small", name: "Small Game" },
  ];

  const speciesData = [
    {
      id: "kudu",
      name: "Greater Kudu",
      nickname: "The Grey Ghost of Africa",
      category: "spiral",
      investment: "$3,500",
      weight: { male: "220-270 kg", female: "120-160 kg" },
      height: { male: "140-155 cm", female: "120-135 cm" },
      caliber: ".30-06 Springfield (180-grain), .300 Win Mag, 7mm Rem Mag",
      shotPlacement: "Lower third of shoulder, tracing front leg up",
      meat: "Finest game meat in South Africa. Lean, subtle herbal undertone. Requires added fat during cooking.",
      behavior: "Master of camouflage. Solitary bulls or small bachelor herds. Rut: May-June.",
      tracking: "Elongated, narrow hooves (8-9 cm). Look for high browse at 1.5-2m height.",
      trophy: "Record: 73 7/8\". Deep spirals. Bulls swell during rut.",
      description: "Revered as the most sought-after plains game trophy. Their ability to vanish into dappled light despite immense size is legendary.",
    },
    {
      id: "eland",
      name: "Cape Eland",
      nickname: "The Heavyweight",
      category: "spiral",
      investment: "$4,200",
      weight: { male: "700-900+ kg", female: "300-450 kg" },
      height: { male: "170-180 cm", female: "150-160 cm" },
      caliber: ".375 H&H Magnum (ideal), .300 Win Mag, .338 Win Mag",
      shotPlacement: "Halfway up shoulder body, tighter to crease. Heart sits very low.",
      meat: "Unique among antelope - significant intramuscular fat. Tastes like high-quality beef. Tallow valuable for soap/candles.",
      behavior: "Massive dewlap for thermoregulation. Loud 'clicking' sound from knees when walking.",
      tracking: "Circular, massive tracks (12-15 cm). Bovine-like dung in cohesive piles.",
      trophy: "Massive bases, tight spiral. Both sexes carry horns.",
      description: "The heavyweight of the antelope world. Resembling an ox more than an antelope, possessing majesty and spiritual significance.",
    },
    {
      id: "wildebeest",
      name: "Blue Wildebeest",
      nickname: "The Poor Man's Buffalo",
      category: "plains",
      investment: "$2,200",
      weight: { male: "230-270 kg", female: "180-220 kg" },
      height: { male: "145-150 cm", female: "135-140 cm" },
      caliber: ".300 Win Mag, .338 Win Mag, 9.3x62mm (premium bonded bullets mandatory)",
      shotPlacement: "Extremely low. Follow back of front leg up, bottom third of body. Heart sits very low.",
      meat: "Coarse-grained, robust and gamey. Premier meat for Droewors (dried sausage). Requires slow cooking.",
      behavior: "Notorious for absorbing lethal shots and running hundreds of meters. Often circle back to watch backtrail.",
      tracking: "Large, broad tracks. Rounded front, tapered. Wallowing common.",
      trophy: "Thick boss, wide spread outside ears. 18-20 year lifespan.",
      description: "Often called the 'Clown of the Veld' but conversely 'The Poor Man's Buffalo' for incredible toughness and tenacity.",
    },
    {
      id: "gemsbok",
      name: "Gemsbok / Oryx",
      nickname: "The Desert Warrior",
      category: "desert",
      investment: "$2,800",
      weight: { male: "220-250 kg", female: "180-210 kg" },
      height: { male: "120-125 cm", female: "115-120 cm" },
      caliber: ".300 Win Mag, .338 Win Mag (deep penetration required)",
      shotPlacement: "Vitals slightly further forward. Punch through shoulder.",
      meat: "Widely considered best-tasting venison in Africa. Succulent, slightly sweet, fine texture. Prime steaks medium-rare.",
      behavior: "Can survive without surface water. Will stand ground against lions. Horns are lethal weapons - never approach wounded from front.",
      tracking: "Desert-adapted. Look for tracks in sandy terrain.",
      trophy: "Females often longer horns, males thicker bases. Black-and-white facial mask.",
      description: "The warrior of the desert. Strikingly beautiful with long straight horns. Flagship species for arid zones.",
    },
    {
      id: "springbok",
      name: "Springbok",
      nickname: "National Animal of South Africa",
      category: "desert",
      investment: "$800",
      weight: { male: "35-45 kg", female: "25-35 kg" },
      height: { male: "75 cm", female: "70-75 cm" },
      caliber: ".22-250, .243 Win, 6.5 Creedmoor (accuracy over power)",
      shotPlacement: "Tight behind shoulder. Vital area is small (grapefruit size).",
      meat: "Highly prized. Loin served as Carpaccio (raw, thinly sliced). 80% less cholesterol than beef.",
      behavior: "Pronking behavior - jumping high with stiff legs. 'Springbok Slam' - four color phases: Common, Black, White, Copper.",
      tracking: "Small tracks. Look for pronking marks in sand.",
      trophy: "Lyre-shaped, thick base. SCI Gold: 30\"",
      description: "The national animal. Hunting Springbok in the Karoo is a cultural institution akin to driven grouse shooting in Scotland.",
    },
    {
      id: "impala",
      name: "Impala",
      nickname: "Bread and Butter of Safari",
      category: "plains",
      investment: "$800",
      weight: { male: "50-70 kg", female: "40-50 kg" },
      height: { male: "85-95 cm", female: "75-85 cm" },
      caliber: ".243 Win, .270 Win, 7x57 Mauser (excessive power causes meat wastage)",
      shotPlacement: "Standard heart/lung shot. Small vital area.",
      meat: "Versatile and tender. Standard for Potjiekos (stew). Absorbs marinades well - ideal for schnitzels.",
      behavior: "Distinctive 'McDonald's M' on buttocks. During rut (May), rams become extremely vocal with loud roars.",
      tracking: "Small, heart-shaped tracks. No dewclaws.",
      trophy: "Lyre-shaped, heavy ridges. SCI Gold: 52\"",
      description: "The 'bread and butter' of the safari industry - ubiquitous, beautiful, perfect introduction for first-time African hunters.",
    },
    {
      id: "blesbok",
      name: "Blesbok",
      nickname: "Symbol of the Highveld",
      category: "plains",
      investment: "$1,200",
      weight: { male: "70-85 kg", female: "60-70 kg" },
      height: { male: "95 cm", female: "90-95 cm" },
      caliber: ".243 Win, 6.5 Creedmoor, .270 Win, 7mm Rem Mag (flat-shooting essential)",
      shotPlacement: "Standard heart/lung. Lead necessary on running shots.",
      meat: "Good, honest venison. Excellent for sosaties (marinated kebabs) on braai.",
      behavior: "Diurnal grazers. Stand in open sun with heads lowered, nodding. Color variants: White, Copper, Yellow.",
      tracking: "Medium-sized tracks. Grazing patterns visible.",
      trophy: "White rings, thick base. SCI Gold: 40\"",
      description: "Endemic to South Africa. Once nearly hunted to extinction, now one of the most commercially successful species on game farms.",
    },
    {
      id: "hartebeest",
      name: "Red Hartebeest",
      nickname: "The Harley Davidson",
      category: "plains",
      investment: "$1,500",
      weight: { male: "150 kg", female: "120 kg" },
      height: { male: "130 cm", female: "125 cm" },
      caliber: ".30-06, .300 Win Mag (tougher than they look)",
      shotPlacement: "Aim low on shoulder. High withers can deceive into shooting too high.",
      meat: "Good quality venison. Lean and flavorful.",
      behavior: "One of fastest antelope (60-70 km/h). Use termite mounds as lookout posts. Often run, stop, and look back.",
      tracking: "Distinctive tracks. Look for termite mound activity.",
      trophy: "Heavy Z-shape horns. 18-20 year lifespan.",
      description: "The 'Harley Davidson' of the antelope world - high shoulders, sloping back, elongated face.",
    },
    {
      id: "bushbuck",
      name: "Bushbuck",
      nickname: "The Pugnacious Antelope",
      category: "spiral",
      investment: "$1,800",
      weight: { male: "40-80 kg", female: "25-60 kg" },
      height: { male: "70-100 cm", female: "65-85 cm" },
      caliber: ".308 Win, 7mm-08 (heavy, slow bullet best). 12-gauge slug effective in thickets.",
      shotPlacement: "Shoulder crease. Precision key. Gut-shot is safety hazard.",
      meat: "Tender and tasty. Excellent for stews and curries.",
      behavior: "Known as 'poor man's buffalo' - will actively charge if wounded. Strictly riverine and forest-dwelling.",
      tracking: "Small tracks in riverine areas. Look for hunched posture signs.",
      trophy: "Straight with spiral keel (12-18\"). Dark brown to almost black males.",
      description: "The smallest spiral horn but punches above weight. Known as 'Imbabala' - strictly riverine and forest-dwelling.",
    },
    {
      id: "warthog",
      name: "Warthog",
      nickname: "Vlakvark",
      category: "small",
      investment: "$600",
      weight: { male: "60-100 kg", female: "50-80 kg" },
      height: "65-85 cm",
      caliber: ".308 Win, .30-06 (shot placement critical)",
      shotPlacement: "Very low - heart sits almost between front legs. Enter burrows backward.",
      meat: "Superb - like pork but leaner and nuttier. Smoked ribs and cabanossi sausages are lodge favorites.",
      behavior: "Live in burrows, enter backward (defensive posture). Highly sought for tusks.",
      tracking: "Distinctive pig tracks. Look for burrow entrances.",
      trophy: "Tusk length + circumference. SCI Gold: 29\"",
      description: "While often a 'target of opportunity,' highly sought after for tusks and exceptional meat quality.",
    },
  ];

  const filteredSpecies = selectedCategory === "all" 
    ? speciesData 
    : speciesData.filter(s => s.category === selectedCategory);

  const selectedSpeciesData = speciesData.find(s => s.id === selectedSpecies);

  // Map species IDs to image filenames
  const getSpeciesImage = (speciesId: string) => {
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
          {filteredSpecies.map((species) => (
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
                      <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.weight.male}</span>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Weight (Female):</span>
                      <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.weight.female}</span>
                    </div>
                    {typeof selectedSpeciesData.height === 'object' ? (
                      <>
                        <div>
                          <span className="text-silver/50 font-body">Height (Male):</span>
                          <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.height.male}</span>
                        </div>
                        <div>
                          <span className="text-silver/50 font-body">Height (Female):</span>
                          <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.height.female}</span>
                        </div>
                      </>
                    ) : (
                      <div>
                        <span className="text-silver/50 font-body">Height:</span>
                        <span className="text-silver/80 font-body ml-2">{selectedSpeciesData.height}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Hunting Specifications</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-silver/50 font-body">Recommended Caliber:</span>
                      <p className="text-clay font-body mt-1">{selectedSpeciesData.caliber}</p>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Shot Placement:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.shotPlacement}</p>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Trophy:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.trophy}</p>
                    </div>
                  </div>
                </div>

                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Behavior & Tracking</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-silver/50 font-body">Behavior:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.behavior}</p>
                    </div>
                    <div>
                      <span className="text-silver/50 font-body">Tracking:</span>
                      <p className="text-silver/80 font-body mt-1">{selectedSpeciesData.tracking}</p>
                    </div>
                  </div>
                </div>

                <div className="border border-clay/20 p-6">
                  <h3 className="text-cream font-heading text-xl mb-4 font-light">Culinary Utilization</h3>
                  <p className="text-silver/80 font-body text-sm leading-relaxed">
                    {selectedSpeciesData.meat}
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

