// Comprehensive species data including biological and tracking information

export interface SpeciesData {
  id: string;
  name: string;
  scientificName: string;
  nickname: string;
  category: "spiral" | "plains" | "desert" | "small";
  investment: string;
  
  // Physical Specifications
  biometrics: {
    weight: { male: string; female: string };
    height: { male: string; female: string } | string;
    hornLength?: string;
    hornSpan?: string;
    topSpeed?: string;
  };
  
  // Biological Information
  biology: {
    digestiveType: "ruminant" | "hindgut";
    feedingGuild: "browser" | "grazer" | "mixed" | "grazer/rooter";
    primaryForage: string;
    muzzleShape: string;
    dentalFormula?: string;
    waterDependence: string;
    habitat: string;
  };
  
  // Morphology & Anatomy
  morphology: {
    cranial: string;
    dentition: string;
    skeletal: string;
    dentalFormula?: string;
    hoof: {
      dimensions: string;
      shape: string;
      distinctive: string;
      substrate: string;
    };
    specialAdaptations: string[];
  };
  
  // Behavior & Ecology
  behavior: {
    social: string;
    feeding: string;
    defense: string;
    reproduction?: string;
    uniqueBehaviors: string[];
  };
  
  // Tracking Information
  tracking: {
    trackMorphology: string;
    trackDimensions: string;
    gaitSignature: string;
    behavioralSpoor: string;
    strategy: string;
    dangerLevel?: string;
    keySigns: string[];
  };
  
  // Hunting Information
  hunting: {
    caliber: string;
    shotPlacement: string;
    trophy: string;
    meat: string;
    difficulty: string;
  };
  
  // Description
  description: string;
  conservationNarrative?: string;
}

export const speciesDatabase: SpeciesData[] = [
  {
    id: "kudu",
    name: "Greater Kudu",
    scientificName: "Tragelaphus strepsiceros",
    nickname: "The Grey Ghost of Africa",
    category: "spiral",
    investment: "$3,500",
    biometrics: {
      weight: { male: "190-315 kg (420-694 lb)", female: "120-210 kg (265-460 lb)" },
      height: { male: "140-160 cm (55-63 in)", female: "120-135 cm (47-53 in)" },
      hornLength: "Avg 120 cm (along curve)",
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "browser",
      primaryForage: "Leaves, shoots, pods",
      muzzleShape: "Narrow/Pointed",
      dentalFormula: "I 0/3, C 0/1, P 3/3, M 3/3 = 32",
      waterDependence: "Water-dependent. Requires regular intake of free water.",
      habitat: "Woodland, thickets, rocky hills",
    },
    morphology: {
      cranial: "Narrow muzzle allows insertion deep into defensive thorns of Acacia. Muscular, mobile lips with long, prehensile tongue for stripping foliage without ingesting thorns.",
      dentition: "Brachydont (low-crowned) molars with sharp enamel ridges designed to shear fibrous leaves. Adapted for crushing and grinding leaves rather than abrasive grass.",
      dentalFormula: "I 0/3, C 0/1, P 3/3, M 3/3 = 32",
      skeletal: "Engineered for verticality. Broad ilium provides massive attachment for gluteal muscles. Elongated tibia and metatarsals create long lever arm for powerful jumps. Can clear 2.5m fence from standing start.",
      hoof: {
        dimensions: "6-9 cm length",
        shape: "Elongated oval",
        distinctive: "Tiptoe gait - dewclaws rarely register. Narrow foot design reduces surface area for hard, rocky substrates.",
        substrate: "Rocky/Thicket - less effective in deep sand",
      },
      specialAdaptations: [
        "Spiral horns allow interlocking during dominance bouts without fatal goring",
        "Rocking horse gait - lays horns flat against back to streamline profile",
        "Large liver for detoxifying secondary plant metabolites (tannins, alkaloids)",
      ],
    },
    behavior: {
      social: "Solitary bulls or small bachelor herds. Cows form small groups with offspring.",
      feeding: "Highly selective browsers. Feed on leaves, fresh sprouts, seed pods, and fruits. Target high-protein sources defended by chemical deterrents.",
      defense: "Master of camouflage. Ability to vanish into dappled light despite immense size. After being startled, will run short distance then stop to look back.",
      reproduction: "Rut: May-June. Males compete for dominance without holding strict territories.",
      uniqueBehaviors: [
        "The 'Look Back' - After being bumped, runs then stops to look back at pursuer",
        "Browse lines at 1.5-2.5m height indicate recent feeding",
        "Horn polish on trees from rubbing",
      ],
    },
    tracking: {
      trackMorphology: "Elongated, narrow, distinctly oval. Bull tracks broader and blunter; cow tracks narrower and sharper.",
      trackDimensions: "6-9 cm length",
      gaitSignature: "Tiptoe gait - heel doesn't always register fully. Smaller contact patch reduces noise, essential for cryptic species.",
      behavioralSpoor: "Fresh breaks on branches at 1.5-2.5m height. Freshness of sap indicates animal is mere minutes ahead. Look for horizontal line of back or glint of sun on spiral horns.",
      strategy: "Less about following footprints, more about 'spotting and stalking' based on predicted movement. When tracks show transition from gallop to trot, freeze and scan - bull is likely stationary and watching.",
      keySigns: [
        "Browse lines at 1.5-2.5m height",
        "Horn polish on trees",
        "Fresh branch breaks with sap",
        "Dappled light camouflage - look for horizontal back line",
      ],
    },
    hunting: {
      caliber: ".30-06 Springfield (180-grain), .300 Win Mag, 7mm Rem Mag",
      shotPlacement: "Lower third of shoulder, tracing front leg up",
      trophy: "Record: 73 7/8\". Deep spirals. Bulls swell during rut.",
      meat: "Finest game meat in South Africa. Lean, subtle herbal undertone. Requires added fat during cooking.",
      difficulty: "High - Master of camouflage, requires expert tracking and patience",
    },
    description: "Revered as the most sought-after plains game trophy. Their ability to vanish into dappled light despite immense size is legendary. The definitive test for a spoorsnyer.",
    conservationNarrative: "Supports habitat management and population control to maintain optimal herd dynamics in woodland ecosystems.",
  },
  {
    id: "eland",
    name: "Cape Eland",
    scientificName: "Taurotragus oryx",
    nickname: "The Heavyweight",
    category: "spiral",
    investment: "$4,200",
    biometrics: {
      weight: { male: "500-942 kg (1,100-2,077 lb)", female: "340-600 kg (750-1,320 lb)" },
      height: { male: "150-183 cm (59-72 in)", female: "125-153 cm (49-60 in)" },
      topSpeed: "40 km/h (trot/gallop mix)",
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "mixed",
      primaryForage: "Leaves, fruits, grass (browse heavy)",
      muzzleShape: "Intermediate - wider than Kudu, narrower than Wildebeest",
      waterDependence: "Surprisingly independent of surface water. Heterothermy allows body temperature fluctuation to reduce water loss.",
      habitat: "Diverse - from open plains to woodland",
    },
    morphology: {
      cranial: "Intermediate muzzle width allows processing grass when lush but primarily focuses on browse. Unique behavior: uses horns as tools to break branches by hooking and twisting.",
      dentition: "Large molar surface area to grind coarse material. Large rumen capacity allows intake of large quantities of lower quality fibrous material (Jarman-Bell Principle).",
      skeletal: "Robust skeleton designed to support immense weight. Elongated neural spines of thoracic vertebrae support massive neck muscles, creating pronounced shoulder hump.",
      hoof: {
        dimensions: "12-14 cm length",
        shape: "Round, ox-like",
        distinctive: "Massive tracks with heavy ridge of soil pushed up in center. Cleaner and more elongated than Buffalo tracks.",
        substrate: "Diverse - large surface area prevents sinking",
      },
      specialAdaptations: [
        "Massive dewlap for thermoregulation - increases surface area for heat dissipation",
        "Loud clicking sound from knees when walking (audible from hundreds of meters)",
        "Heterothermy - body temperature fluctuates to conserve water",
      ],
    },
    behavior: {
      social: "Form herds. Bulls use horns as tools to break branches, bringing foliage to reachable level.",
      feeding: "Mixed feeder but predominantly browser. Can process grass when lush but primarily focuses on browse. Uses horns to break branches.",
      defense: "Sheer size is primary defense. Can act as bulk feeder processing lower quality forage through volume.",
      uniqueBehaviors: [
        "The 'Clicking' Mechanism - loud sound from splaying hooves or carpal bones",
        "Horn tool use - hooks branches and twists to snap wood",
        "Endurance hunting target - high fat content makes them prone to overheating",
      ],
    },
    tracking: {
      trackMorphology: "Huge, round, ox-like. Often confused with domestic cattle or Cape Buffalo but cleaner and more elongated.",
      trackDimensions: "12-14 cm length",
      gaitSignature: "Heavy indentation with central ridge. Tired Eland drag feet, leaving lines connecting footprints.",
      behavioralSpoor: "Auditory component - clicking sound can be heard from hundreds of meters. Froth or saliva on vegetation at head height indicates heat stress.",
      strategy: "Assess fatigue by analyzing track. Tired Eland drags feet. Froth on vegetation indicates animal is reachable. Primary target for San persistence hunts.",
      keySigns: [
        "Clicking sound from knees",
        "Massive, round tracks with central ridge",
        "Froth on vegetation (heat stress indicator)",
        "Drag marks connecting tracks (fatigue)",
      ],
    },
    hunting: {
      caliber: ".375 H&H Magnum (ideal), .300 Win Mag, .338 Win Mag",
      shotPlacement: "Halfway up shoulder body, tighter to crease. Heart sits very low.",
      trophy: "Massive bases, tight spiral. Both sexes carry horns.",
      meat: "Unique among antelope - significant intramuscular fat. Tastes like high-quality beef. Tallow valuable for soap/candles.",
      difficulty: "Medium - Large size makes them easier to spot, but requires heavy caliber",
    },
    description: "The heavyweight of the antelope world. Resembling an ox more than an antelope, possessing majesty and spiritual significance. A biological paradox: bulk of an ox with agility of a gazelle.",
    conservationNarrative: "Funds habitat preservation for Africa's largest antelope, ensuring genetic diversity and ecosystem balance.",
  },
  {
    id: "wildebeest",
    name: "Blue Wildebeest",
    scientificName: "Connochaetes taurinus",
    nickname: "The Poor Man's Buffalo",
    category: "plains",
    investment: "$2,200",
    biometrics: {
      weight: { male: "230-275 kg (500-600 lb)", female: "160-200 kg (350-440 lb)" },
      height: { male: "140-152 cm (55-60 in)", female: "130-140 cm" },
      hornSpan: "83 cm max, massive boss",
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "grazer",
      primaryForage: "Short grasses",
      muzzleShape: "Broad/Flat - one of the broadest of any ruminant",
      waterDependence: "Water-dependent, requires regular access",
      habitat: "Open savannas, plains",
    },
    morphology: {
      cranial: "Broadest muzzle of any ruminant. Wide, flat mouth acts like lawnmower, cropping large swathes of short grass per bite. Maximizes intake rate for bulk grazer.",
      dentition: "Extremely hypsodont (high-crowned) teeth. High crowns provide reservoir of tooth material that erupts continuously to compensate for rapid wear from abrasive grass.",
      skeletal: "Optimized for energy conservation during continuous movement. Massive nuchal ligament acts as passive suspension system. Slender limbs with muscle mass in upper body reduce kinetic energy required to swing leg forward.",
      hoof: {
        dimensions: "8-10 cm",
        shape: "Broad, boxy - 'soccer ball' pattern",
        distinctive: "Front hooves noticeably wider than hind. Curvature creates parenthesis shape ( ). Interdigital glands on forefeet secrete scented substance.",
        substrate: "Plains/Mud - adapted for soft ground",
      },
      specialAdaptations: [
        "Nuchal ligament - passive suspension for heavy head",
        "Interdigital glands - leave olfactory trail for herd cohesion",
        "Synchronized calving - 80-90% born within 2-3 week window (predator swamping)",
      ],
    },
    behavior: {
      social: "Gregarious, form large herds. Migratory in some ecosystems (up to 1,500 km annually).",
      feeding: "Bulk grazer relying on quantity over quality. Crops large swathes of short grass with every bite.",
      defense: "Notorious for absorbing lethal shots and running hundreds of meters. Often circle back to watch backtrail.",
      reproduction: "Synchronized calving ensures predator swamping. Calves precocial - stand and run within minutes.",
      uniqueBehaviors: [
        "Circular evasion - runs in curve or circle to rejoin herd or get behind threat",
        "Interdigital scent trail - allows herds to follow over vast distances",
        "Confusion tracks - large herds churn ground into dust, obliterating individual sign",
      ],
    },
    tracking: {
      trackMorphology: "Large, broad, boxy. Front hooves wider than hind. 'Soccer ball' or parenthesis pattern ( ) in soft mud.",
      trackDimensions: "8-10 cm",
      gaitSignature: "Broad tracks reflect heavy weight on forequarters. Interdigital gland secretions leave waxy, scented trail.",
      behavioralSpoor: "Circular tracking paths. Confusion tracks from large herds make tracking specific individual difficult. Look for circular evasion pattern.",
      strategy: "When tracking wounded animal, anticipate circular arc. If tracks veer consistently right, cut across chord to intercept, saving time and energy.",
      keySigns: [
        "Circular evasion patterns",
        "Interdigital scent trail (waxy substance)",
        "Confusion tracks from herds",
        "Churned ground from stampeding",
      ],
    },
    hunting: {
      caliber: ".300 Win Mag, .338 Win Mag, 9.3x62mm (premium bonded bullets mandatory)",
      shotPlacement: "Extremely low. Follow back of front leg up, bottom third of body. Heart sits very low.",
      trophy: "Thick boss, wide spread outside ears. 18-20 year lifespan.",
      meat: "Coarse-grained, robust and gamey. Premier meat for Droewors (dried sausage). Requires slow cooking.",
      difficulty: "High - Incredible toughness and tenacity. Can absorb lethal shots and run hundreds of meters",
    },
    description: "Often called the 'Clown of the Veld' but conversely 'The Poor Man's Buffalo' for incredible toughness and tenacity. The workhorse of the African plains, engineered for endurance efficiency.",
    conservationNarrative: "Supports sustainable harvest of post-reproductive individuals, maintaining herd health and genetic diversity.",
  },
  {
    id: "gemsbok",
    name: "Gemsbok / Oryx",
    scientificName: "Oryx gazella",
    nickname: "The Desert Warrior",
    category: "desert",
    investment: "$2,800",
    biometrics: {
      weight: { male: "180-240 kg (400-530 lb)", female: "180-225 kg (400-496 lb)" },
      height: { male: "115-125 cm (45-49 in)", female: "Similar" },
      topSpeed: "60 km/h (37 mph)",
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "mixed",
      primaryForage: "Grass, tubers, melons",
      muzzleShape: "Moderate",
      waterDependence: "Water-independent. Can survive weeks without free water, obtaining moisture from wild melons, roots, and tubers.",
      habitat: "Kalahari and Namib deserts, arid zones",
    },
    morphology: {
      cranial: "Distinctive 'masked' face with black-and-white facial pattern. Moderate muzzle width for mixed feeding.",
      dentition: "Adapted for both grazing and browsing. Can process coarse desert vegetation.",
      skeletal: "Robust, muscular build. Thickened dermal shield on neck and shoulders (up to 6mm) acts as biological shield during dominance fighting and predator defense.",
      hoof: {
        dimensions: "9-11 cm",
        shape: "Large, splayed",
        distinctive: "Splayed toes function like snowshoe, reducing ground pressure for loose sand. Used as spades to dig up succulent roots.",
        substrate: "Deep Sand - adapted for dunes",
      },
      specialAdaptations: [
        "Carotid rete mirabile - cooling system for brain allows body temperature to rise to 45°C while brain stays below 40°C",
        "Highly efficient kidneys produce concentrated urine",
        "Thickened dermal shield protects against predator bites and horn impacts",
        "Straight rapiers - lethal weapons, will stand ground against lions",
      ],
    },
    behavior: {
      social: "Form herds. Both sexes carry horns - females often longer, males thicker bases.",
      feeding: "Can survive without surface water. Feeds on wild melons (tsamma), roots, and tubers. Grazes when available.",
      defense: "One of few antelope that will stand and fight. Lowers head to present wall of spears that can impale attackers. Horn thrashing marks territory.",
      uniqueBehaviors: [
        "Standoff behavior - deep, churning hoof marks where animal pivoted to face threat",
        "Horn thrashing - marks territory by thrashing horns into bushes at ~1m height",
        "Desert adaptation - can allow body to hyperthermic while protecting brain",
      ],
    },
    tracking: {
      trackMorphology: "Large, splayed tracks. In deep sand, tracks connected by drag marks where animal doesn't lift feet high.",
      trackDimensions: "9-11 cm",
      gaitSignature: "Splayed toes reduce ground pressure. Drag marks in sand indicate energy conservation. Depth of drag marks indicates fatigue.",
      behavioralSpoor: "Standoff sites show deep, churning hoof marks from pivoting. Horn thrashing marks on Boscia or Acacia bushes at ~1m height indicate territory marking.",
      strategy: "Read depth of drag marks to determine fatigue. Look for standoff sites and horn thrashing marks to locate trophy bulls.",
      keySigns: [
        "Splayed tracks in sand",
        "Drag marks connecting tracks (energy conservation)",
        "Standoff sites with churning marks",
        "Horn thrashing marks on bushes at ~1m",
      ],
    },
    hunting: {
      caliber: ".300 Win Mag, .338 Win Mag (deep penetration required)",
      shotPlacement: "Vitals slightly further forward. Punch through shoulder.",
      trophy: "Females often longer horns, males thicker bases. Black-and-white facial mask.",
      meat: "Widely considered best-tasting venison in Africa. Succulent, slightly sweet, fine texture. Prime steaks medium-rare.",
      difficulty: "Medium-High - Will stand and fight. Never approach wounded from front - horns are lethal",
    },
    description: "The warrior of the desert. Strikingly beautiful with long straight horns. Flagship species for arid zones. Anatomically and physiologically fortified against extremes of heat and aridity.",
    conservationNarrative: "Supports conservation of desert ecosystems and water-independent species adaptation research.",
  },
  {
    id: "springbok",
    name: "Springbok",
    scientificName: "Antidorcas marsupialis",
    nickname: "National Animal of South Africa",
    category: "desert",
    investment: "$800",
    biometrics: {
      weight: { male: "33-48 kg (73-106 lb)", female: "30-44 kg (66-97 lb)" },
      height: { male: "70-85 cm (28-34 in)", female: "Similar" },
      topSpeed: "88 km/h (55 mph)",
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "mixed",
      primaryForage: "Shrubs, succulents, grass",
      muzzleShape: "Narrow",
      waterDependence: "Water-independent if diet of roots, tubers, and succulents is sufficient. Often feeds at night when plant moisture content is highest.",
      habitat: "Karoo and Namib regions, arid zones",
    },
    morphology: {
      cranial: "Narrow muzzle for selecting succulent shrubs and forbs during dry season, broad enough to graze fresh grass after rains.",
      dentition: "Adapted for dietary plasticity - can switch between browse and grass seasonally.",
      skeletal: "Masterpiece of athletic engineering. High concentration of fast-twitch glycolytic fibers (Type IIx) for explosive anaerobic power. Long distal limb segments for speed and jumping.",
      hoof: {
        dimensions: "3.5-5 cm",
        shape: "Sharp, cordate (heart-like)",
        distinctive: "Sharp edges provide grip on hard-baked clay pans. Small footprint minimizes friction and weight for high sprinting speeds.",
        substrate: "Hard Rock/Karoo - adapted for hard ground",
      },
      specialAdaptations: [
        "Marsupium - pocket of skin with white crest that turns inside out as visual signal",
        "Pronking - stiff-legged vertical leaps up to 2m using elastic recoil of tendons",
        "High fast-twitch muscle fiber concentration for explosive power",
        "Four color phases: Common, Black, White, Copper",
      ],
    },
    behavior: {
      social: "Form herds. National animal of South Africa.",
      feeding: "Intermediate feeder. Dietary plasticity allows switching between shrubs/forbs (dry season) and grass (wet season).",
      defense: "Pronking is 'honest signal' to predators - demonstrates fitness and energy, discouraging chase.",
      uniqueBehaviors: [
        "Pronking - vertical leaps with stiff legs, arched back, up to 2m high",
        "Marsupium display - white crest flashes when excited or alarmed",
        "Springbok Slam - four distinct color phases",
      ],
    },
    tracking: {
      trackMorphology: "Small, sharp, tightly heart-shaped. Narrower and sharper than Impala tracks.",
      trackDimensions: "3.5-5 cm",
      gaitSignature: "Sharp tips for hard substrate. When pronking, lands with all four feet close together, driving deeply into ground.",
      behavioralSpoor: "Pronking marks - trail transitions from walking to clusters of four deep prints indicates alarm. Herd has likely moved off at high speed.",
      strategy: "Look for pronking marks to determine alarm state. Clusters of four deep prints indicate recent alarm and high-speed departure.",
      keySigns: [
        "Pronking marks - clusters of four deep prints",
        "Sharp, heart-shaped tracks on hard ground",
        "Transition from walking to pronking indicates alarm",
      ],
    },
    hunting: {
      caliber: ".22-250, .243 Win, 6.5 Creedmoor (accuracy over power)",
      shotPlacement: "Tight behind shoulder. Vital area is small (grapefruit size).",
      trophy: "Lyre-shaped, thick base. SCI Gold: 30\"",
      meat: "Highly prized. Loin served as Carpaccio (raw, thinly sliced). 80% less cholesterol than beef.",
      difficulty: "Medium - Small vital area requires precision. High speed and pronking make tracking challenging",
    },
    description: "The national animal. Hunting Springbok in the Karoo is a cultural institution akin to driven grouse shooting in Scotland. A masterpiece of athletic engineering, famous for pronking display.",
    conservationNarrative: "Supports sustainable harvest practices in Karoo ecosystems and cultural hunting traditions.",
  },
  {
    id: "impala",
    name: "Impala",
    scientificName: "Aepyceros melampus",
    nickname: "Bread and Butter of Safari",
    category: "plains",
    investment: "$800",
    biometrics: {
      weight: { male: "53-76 kg (117-168 lb)", female: "40-53 kg (88-117 lb)" },
      height: { male: "75-92 cm (30-36 in)", female: "70-85 cm (28-33 in)" },
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "mixed",
      primaryForage: "Grass (wet season), Browse (dry season)",
      muzzleShape: "Moderate",
      waterDependence: "Water-dependent",
      habitat: "Ecotone between woodland and grassland",
    },
    morphology: {
      cranial: "Moderate muzzle width allows seasonal switching between grass and browse. Perfect adaptation for ecotone habitat.",
      dentition: "Moderately hypsodont - capable of handling grass silica but retains occlusal geometry for shearing leaves. Microwear analysis shows both grazing and browsing patterns.",
      skeletal: "Long distal limb segments (tibia/fibula and metatarsals) favor speed and explosive jumping. Digital cushion in hoof acts as shock absorber for 3m jumps.",
      hoof: {
        dimensions: "4-6 cm",
        shape: "Heart-shaped, neat, symmetrical",
        distinctive: "No dewclaws. Neat, oval, pointed. Often confused with Bushbuck but sharper and less splayed.",
        substrate: "Bushveld - adapted for firm soils",
      },
      specialAdaptations: [
        "Metatarsal glands - unique tuft of black hair above heels with scent glands",
        "Seasonal dietary switching - maintains high nutritional plane year-round",
        "3m high, 10m long jumping capability",
        "Distinctive 'McDonald's M' on buttocks",
      ],
    },
    behavior: {
      social: "Large breeding herds or bachelor herds. Rams fiercely territorial during rut (May).",
      feeding: "Seasonal switching: graze on monocots (grasses) during wet season, browse dicots (acacia pods, leaves) during dry season.",
      defense: "High, kicking jumps (stotting) with metatarsal glands releasing scent for herd cohesion.",
      reproduction: "Rut in May. Rams become extremely vocal with loud roars. Utilize communal dung middens.",
      uniqueBehaviors: [
        "Metatarsal gland scent marking during stotting",
        "Communal dung middens for territorial marking",
        "Forehead glands rubbed against bushes for scent marking",
        "Loud roars during rut",
      ],
    },
    tracking: {
      trackMorphology: "Classic heart shape, neat and symmetrical. No dewclaws. Often create 'highways' or game paths beaten flat.",
      trackDimensions: "4-6 cm",
      gaitSignature: "Neat, oval, pointed. Sharper and less splayed than Bushbuck, reflecting preference for firmer soils.",
      behavioralSpoor: "Fresh, wet dung pile on midden indicates dominant ram active in immediate vicinity. Dark, oily stains on vegetation at head height from forehead gland marking.",
      strategy: "Look for dung middens and scent marking. Fresh midden activity indicates territorial ram nearby. Game paths beaten flat indicate high traffic areas.",
      keySigns: [
        "Communal dung middens with fresh, wet piles",
        "Forehead gland marks on vegetation (dark, oily stains)",
        "Game paths beaten flat from high traffic",
        "Roaring/snorting alarm calls",
      ],
    },
    hunting: {
      caliber: ".243 Win, .270 Win, 7x57 Mauser (excessive power causes meat wastage)",
      shotPlacement: "Standard heart/lung shot. Small vital area.",
      trophy: "Lyre-shaped, heavy ridges. SCI Gold: 52\"",
      meat: "Versatile and tender. Standard for Potjiekos (stew). Absorbs marinades well - ideal for schnitzels.",
      difficulty: "Low-Medium - Most common antelope, perfect introduction for first-time African hunters",
    },
    description: "The 'bread and butter' of the safari industry - ubiquitous, beautiful, perfect introduction for first-time African hunters. Often cited as the 'perfect antelope' due to incredible adaptability.",
    conservationNarrative: "Contributes to sustainable harvest practices and meat donation programs in bushveld ecosystems.",
  },
  {
    id: "blesbok",
    name: "Blesbok",
    scientificName: "Damaliscus pygargus phillipsi",
    nickname: "Symbol of the Highveld",
    category: "plains",
    investment: "$1,200",
    biometrics: {
      weight: { male: "65-80 kg (143-176 lb)", female: "55-70 kg (121-154 lb)" },
      height: { male: "85-100 cm (33-39 in)", female: "Similar" },
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "grazer",
      primaryForage: "Themeda triandra (Red Grass)",
      muzzleShape: "Moderate - slightly more selective than Wildebeest",
      waterDependence: "Physiologically tied to water and specific grass species",
      habitat: "Highveld open plains, temperate grasslands",
    },
    morphology: {
      cranial: "Prominent white blaze on face, interrupted by brown band (unlike continuous blaze of Bontebok). Low head carriage structurally efficient for grazing.",
      dentition: "Hypsodont teeth adapted for abrasive silica in short-grass diet. Moderately broad muzzle reflects slightly more selective grazing than Wildebeest.",
      skeletal: "Anatomically ill-equipped for jumping. Muscle mass distribution and skeletal angles optimized for efficient trotting and cantering on flat ground.",
      hoof: {
        dimensions: "6-7 cm",
        shape: "Robust heart-shaped",
        distinctive: "Slightly blunter than Impala. Small, compact, designed for hard-packed soils of grassy plains.",
        substrate: "Grassland - hard-packed soils",
      },
      specialAdaptations: [
        "Non-jumper - prefer to crawl under obstacles rather than jump",
        "Behavioral thermoregulation - stand in groups facing sun with heads low",
        "Contained by standard livestock fencing due to crawling behavior",
      ],
    },
    behavior: {
      social: "Form herds on open plains.",
      feeding: "Selective grazer of Themeda triandra (Red Grass). Diurnal grazers.",
      defense: "Stand in open sun with heads lowered, nodding. This posture minimizes shadow and reduces surface area exposed to solar radiation.",
      uniqueBehaviors: [
        "The 'Nodding' Sign - plagued by nasal bot flies, causing frequent head nodding/shaking",
        "Behavioral thermoregulation - standing posture reduces solar exposure",
        "Crawling under fences rather than jumping",
      ],
    },
    tracking: {
      trackMorphology: "Heart-shaped, similar to Impala but larger and more robust. Slightly blunter than Impala.",
      trackDimensions: "6-7 cm",
      gaitSignature: "Robust heart shape. Designed for hard-packed grassland soils.",
      behavioralSpoor: "Hair snagged on bottom strands of wire fences or 'slides' where animals shimmied underneath. Visual 'spoor' - nodding behavior visible at great distances in heat haze.",
      strategy: "Look for fence slides and hair snags. Nodding behavior acts as visual indicator for spotting herds at distance. Contrasts with Kudu which jump over fences.",
      keySigns: [
        "Hair snagged on wire fences",
        "Slides under fences",
        "Nodding behavior (nasal bot flies)",
        "Visual spotting in heat haze",
      ],
    },
    hunting: {
      caliber: ".243 Win, 6.5 Creedmoor, .270 Win, 7mm Rem Mag (flat-shooting essential)",
      shotPlacement: "Standard heart/lung. Lead necessary on running shots.",
      trophy: "White rings, thick base. SCI Gold: 40\"",
      meat: "Good, honest venison. Excellent for sosaties (marinated kebabs) on braai.",
      difficulty: "Low-Medium - Open plains make spotting easier, but flat-shooting essential",
    },
    description: "Endemic to South Africa. Once nearly hunted to extinction, now one of the most commercially successful species on game farms. Specialist grazer of the Highveld plains.",
    conservationNarrative: "Represents successful conservation story - from near extinction to sustainable management on private land.",
  },
  {
    id: "hartebeest",
    name: "Red Hartebeest",
    scientificName: "Alcelaphus buselaphus caama",
    nickname: "The Harley Davidson",
    category: "plains",
    investment: "$1,500",
    biometrics: {
      weight: { male: "~150 kg (330 lb)", female: "~120 kg (265 lb)" },
      height: { male: "~135 cm (53 in)", female: "Similar" },
      topSpeed: "70 km/h (Endurance specialist)",
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "grazer",
      primaryForage: "Medium/Tall grass",
      muzzleShape: "Narrow - more selective than Wildebeest",
      waterDependence: "Water-dependent",
      habitat: "Open plains, Kalahari",
    },
    morphology: {
      cranial: "Narrower muzzle than Wildebeest allows more selective picking of higher quality leaves from within grass tufts. Can digest coarser grass than Blesbok but requires better quality than Wildebeest.",
      dentition: "Adapted for selective grazing. Narrow muzzle for picking quality leaves from grass tufts.",
      skeletal: "The 'Uphill Runner' - shoulders significantly higher than rump. This shifts center of mass forward onto powerful forelimbs. Distinct bouncing canter is incredibly energy-efficient. Horns mounted on prominent bony pedicel raises eyes for grazing while maintaining high vantage point.",
      hoof: {
        dimensions: "7-9 cm",
        shape: "Long, narrow - gothic arch or pointed heart",
        distinctive: "Unmistakably long and narrow. 'High heels' adaptation for speed on hard ground. Acts like running spike.",
        substrate: "Hard Plains - adapted for baked earth",
      },
      specialAdaptations: [
        "The Pedicel - horns mounted on bony stalk raises eyes for grazing while maintaining vigilance",
        "Uphill build - superior stamina, can maintain high speeds for kilometers",
        "Zigzag bouncing run - difficult to follow at speed",
      ],
    },
    behavior: {
      social: "Form herds. Use termite mounds as lookout points.",
      feeding: "Selective grazer. Picks higher quality leaves from within grass tufts.",
      defense: "One of fastest antelope (60-70 km/h). Superior stamina - can outlast almost any predator. Zigzag fleeing makes trail difficult to follow.",
      uniqueBehaviors: [
        "Termite mound sentinels - use mounds as lookout points, frequently revisited",
        "Zigzag bouncing run - direction changes abruptly every few meters",
        "Stop and look back behavior",
      ],
    },
    tracking: {
      trackMorphology: "Unmistakably long and narrow, resembling gothic arch or pointed heart. Significantly narrower than Wildebeest tracks.",
      trackDimensions: "7-9 cm",
      gaitSignature: "Long, narrow shape acts like running spike for traction on hard, baked earth. 'High heels' of Hartebeest vs 'sneakers' of Wildebeest.",
      behavioralSpoor: "Hoof marks scuffed into sides or tops of termite mounds indicate frequent use as vantage points. Zigzag pattern in tracks shows bouncing run.",
      strategy: "Look for termite mound activity. Hoof marks on mounds indicate sentinel behavior. Zigzag pattern indicates high-speed fleeing.",
      keySigns: [
        "Termite mound hoof marks",
        "Zigzag bouncing pattern",
        "Long, narrow 'high heel' tracks",
        "Stop and look back behavior",
      ],
    },
    hunting: {
      caliber: ".30-06, .300 Win Mag (tougher than they look)",
      shotPlacement: "Aim low on shoulder. High withers can deceive into shooting too high.",
      trophy: "Heavy Z-shape horns. 18-20 year lifespan.",
      meat: "Good quality venison. Lean and flavorful.",
      difficulty: "Medium - High speed and stamina make tracking challenging. High withers can deceive shot placement",
    },
    description: "The 'Harley Davidson' of the antelope world - high shoulders, sloping back, elongated face. The marathon runner, built not just for speed but for sustained, high-speed endurance.",
    conservationNarrative: "Supports conservation of open plains ecosystems and endurance specialist species.",
  },
  {
    id: "bushbuck",
    name: "Bushbuck",
    scientificName: "Tragelaphus scriptus",
    nickname: "The Pugnacious Antelope",
    category: "spiral",
    investment: "$1,800",
    biometrics: {
      weight: { male: "40-80 kg (88-176 lb)", female: "25-60 kg (55-132 lb)" },
      height: { male: "70-100 cm", female: "65-85 cm" },
    },
    biology: {
      digestiveType: "ruminant",
      feedingGuild: "browser",
      primaryForage: "Herbs, legumes, buds",
      muzzleShape: "Narrow/Pointed",
      waterDependence: "Closely associated with riverine thickets and riparian forests",
      habitat: "Riverine thickets, riparian forests",
    },
    morphology: {
      cranial: "Very narrow, pointed muzzle allows selection of high-quality plant parts. Smallest of the Tragelaphines.",
      dentition: "Adapted for selective browsing of herbs, shrubs, and leguminous plants.",
      skeletal: "The 'Hider' Morphology - rounded, arched back (kyphosis) with hindquarters slightly higher than shoulders. Wedge shape for moving through dense undergrowth. Powerful high rump provides propulsive force.",
      hoof: {
        dimensions: "4-5 cm",
        shape: "Elongated, slightly splayed",
        distinctive: "Similar to Impala but more elongated and often splayed. Deep splay marks in soft mud. Broader relative to size than Kudu hooves.",
        substrate: "Riverine Mud - adapted for soft, muddy soils",
      },
      specialAdaptations: [
        "Kyphosis (arched back) - wedge shape for dense undergrowth",
        "Solitary, cryptic lifestyle - relies on freezing and short bursts",
        "Thick coat and loose skin can close up bullet wounds",
        "Known reservoir for trypanosomes (sleeping sickness)",
      ],
    },
    behavior: {
      social: "Solitary, nocturnal. Relies on crypsis rather than herd protection.",
      feeding: "Selective browsers feeding on herbs, shrubs, and leguminous plants in riverine areas.",
      defense: "Known as 'poor man's buffalo' - will actively charge if wounded. Freezes then charges. Known to circle back on own track and wait in ambush.",
      uniqueBehaviors: [
        "The Ambush - circles back on own track and waits for tracker",
        "Freeze and charge behavior",
        "Thick coat minimizes blood trail",
        "Strictly riverine and forest-dwelling",
      ],
    },
    tracking: {
      trackMorphology: "Small, elongated, slightly splayed. Similar to Impala but more elongated. Deep splay marks in soft mud from pushing off.",
      trackDimensions: "4-5 cm",
      gaitSignature: "Tracks found in 'tunnels' within vegetation rather than open game paths. Low center of gravity movement through dense undergrowth.",
      behavioralSpoor: "Lack of blood spoor can be deceptive - thick coat and loose skin close wounds. Focus on 'tunnel' ahead, not just ground. Requires speculative tracking to deepest cover.",
      strategy: "NEVER look just at ground. Focus on 'tunnel' ahead. Speculative tracking - predict deepest cover where animal would seek refuge. Be aware of ambush - animal may circle back.",
      dangerLevel: "EXTREME - Widely considered one of the most dangerous activities in African hunting. Will charge if wounded or cornered.",
      keySigns: [
        "Tracks in vegetation tunnels",
        "Deep splay marks in riverine mud",
        "Minimal blood trail (thick coat)",
        "Ambush potential - may circle back",
      ],
    },
    hunting: {
      caliber: ".308 Win, 7mm-08 (heavy, slow bullet best). 12-gauge slug effective in thickets.",
      shotPlacement: "Shoulder crease. Precision key. Gut-shot is safety hazard.",
      trophy: "Straight with spiral keel (12-18\"). Dark brown to almost black males.",
      meat: "Tender and tasty. Excellent for stews and curries.",
      difficulty: "EXTREME - Solitary, will charge if wounded. Thick cover makes tracking dangerous",
    },
    description: "The smallest spiral horn but punches above weight. Known as 'Imbabala' - strictly riverine and forest-dwelling. The 'leopard of the antelope world' - solitary, nocturnal, reliant on camouflage.",
    conservationNarrative: "Supports conservation of riverine ecosystems and management of cryptic forest species.",
  },
  {
    id: "warthog",
    name: "Warthog",
    scientificName: "Phacochoerus africanus",
    nickname: "Vlakvark",
    category: "small",
    investment: "$600",
    biometrics: {
      weight: { male: "60-150 kg (130-330 lb)", female: "45-75 kg (99-165 lb)" },
      height: "64-85 cm",
    },
    biology: {
      digestiveType: "hindgut",
      feedingGuild: "grazer/rooter",
      primaryForage: "Short grass, roots",
      muzzleShape: "Flat/Shovel",
      waterDependence: "Can survive on diet of roots and tubers, but prefers water access",
      habitat: "Savanna, open woodland",
    },
    morphology: {
      cranial: "Short neck constrained by massive muscles needed for rooting. Flat, shovel-like snout for digging. Four tusks: upper tusks (canines) grow outward/upward, lower tusks hone against upper creating razor-sharp edge.",
      dentition: "Dental Formula: I 1/3, C 1/1, P 3/2, M 3/3 = 34. Third molar (M3) massive with columns of enamel. 'Conveyor belt' replacement system - molars migrate forward as front teeth wear, extending ability to process abrasive food into old age.",
      skeletal: "Carpal callosities - thickened, calloused pads on carpal joints ('wrists') develop in fetus before birth. Allows grazing while kneeling. Stocky, barrel-shaped body modified for subterranean life.",
      hoof: {
        dimensions: "4-6 cm",
        shape: "Rectangular, blocky",
        distinctive: "Four distinct indentations - two main hooves + two dewclaws (positioned low, almost always register). Easily distinguishable from two-toed antelope tracks.",
        substrate: "General - adapted for various substrates",
      },
      specialAdaptations: [
        "Carpal callosities - genetic adaptation for kneeling while grazing",
        "Backward burrow entry - presents tusks to intruders",
        "Molar conveyor belt - extends ability to process abrasive food",
        "Hindgut fermentation - allows persistence on lower quality forage with high volume",
      ],
    },
    behavior: {
      social: "Form sounders (family groups). Do not dig own burrows - appropriate Aardvark holes.",
      feeding: "Grazer of short grass (kneeling). Omnivorous - supplements with roots, bulbs, tubers (dug with hard snout), and occasionally carrion or bones (osteophagy) for minerals.",
      defense: "Enter burrows backward to present formidable tusks to potential intruders. Lower tusks are razor-sharp primary weapons for slashing predators.",
      uniqueBehaviors: [
        "Kneeling while grazing - carpal callosities allow this unique behavior",
        "Backward burrow entry - defensive strategy",
        "Rooting behavior - uses hard snout (not tusks) to dig",
        "Osteophagy - consumes bones for mineral supplementation",
      ],
    },
    tracking: {
      trackMorphology: "Blocky, rectangular. Four distinct indentations (two main hooves + two dewclaws). Easily distinguishable from antelope tracks.",
      trackDimensions: "4-6 cm",
      gaitSignature: "Dewclaws almost always register, creating four-toed pattern. Rectangular shape distinct from heart-shaped antelope tracks.",
      behavioralSpoor: "Active burrows show 'slide marks' at entrance and lack spiderwebs. Kneeling pads - smooth, compacted depressions in soil alongside feeding areas, paired with cropped grass. Mud wallows common.",
      strategy: "Look for active burrows (slide marks, no spiderwebs). Kneeling pads indicate recent feeding. Mud wallows show regular use areas.",
      keySigns: [
        "Four-toed tracks (dewclaws register)",
        "Kneeling pads - compacted depressions",
        "Active burrows with slide marks",
        "Mud wallows",
        "Sausage-shaped fibrous scat",
      ],
    },
    hunting: {
      caliber: ".308 Win, .30-06 (shot placement critical)",
      shotPlacement: "Very low - heart sits almost between front legs. Enter burrows backward.",
      trophy: "Tusk length + circumference. SCI Gold: 29\"",
      meat: "Superb - like pork but leaner and nuttier. Smoked ribs and cabanossi sausages are lodge favorites.",
      difficulty: "Medium - Often 'target of opportunity' but highly sought for tusks and exceptional meat",
    },
    description: "While often a 'target of opportunity,' highly sought after for tusks and exceptional meat quality. The taxonomic outlier - a suid solving savanna problems with unique evolutionary innovations.",
    conservationNarrative: "Supports sustainable harvest of suid species and research into hindgut fermentation adaptations.",
  },
];

export function getSpeciesById(id: string): SpeciesData | undefined {
  return speciesDatabase.find(species => species.id === id);
}

export function getSpeciesByCategory(category: string): SpeciesData[] {
  if (category === "all") return speciesDatabase;
  return speciesDatabase.filter(species => species.category === category);
}

