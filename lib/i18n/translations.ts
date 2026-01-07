export type Language = 'en' | 'de' | 'fr' | 'af';

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'af', name: 'Afrikaans', flag: '🇿🇦' },
];

export const translations = {
  en: {
    // Header
    menu: 'Menu',
    bookYourSafari: 'Book Your Safari',
    
    // Hero
    luxuryGameReserve: 'LUXURY GAME RESERVE',
    witnessUntamedMajesty: 'Witness Untamed Majesty',
    yourExclusiveAfricanSafari: 'YOUR EXCLUSIVE AFRICAN SAFARI',
    
    // Trust Bar
    malariaFree: 'Malaria-Free',
    safeForFamilies: 'Safe for Families',
    conservation: 'Conservation',
    ethicalHarvest: 'Ethical Harvest',
    luxury: 'Luxury',
    worldClassService: 'World-Class Service',
    certified: 'Certified',
    professionalGuides: 'Professional Guides',
    
    // Sections
    theCradleOfIron: 'The Cradle of Iron',
    theJourney: 'The Journey',
    fromArrivalToLegacy: 'From Arrival to Legacy',
    theGuardians: 'The Guardians',
    whoWeAre: 'Who We Are',
    thePursuit: 'The Pursuit',
    theConnection: 'The Connection',
    realImpact: 'Real Impact',
    fieldToFork: 'Field to Fork',
    theCulinaryNarrative: 'The Culinary Narrative',
    theExperience: 'The Experience',
    beginYourJourney: 'Begin Your Journey',
    
    // CTAs
    reserveNow: 'Reserve Now',
    viewAccommodation: 'View Accommodation',
    learnMore: 'Learn More',
    experienceTheFullJourney: 'Experience the Full Journey',
    discoverTheLegend: 'Discover the Legend',
    
    // Footer
    certifications: 'Certifications',
    legal: 'Legal',
    location: 'Location',
    taxAdvisory: 'Tax Advisory',
    privacyPolicy: 'Privacy Policy',
    indemnity: 'Indemnity',
    paiaManual: 'PAIA Manual',
    allRightsReserved: 'All rights reserved.',
  },
  de: {
    // Header
    menu: 'Menü',
    bookYourSafari: 'Safari Buchen',
    
    // Hero
    luxuryGameReserve: 'LUXUS-WILDGEBIET',
    witnessUntamedMajesty: 'Erleben Sie ungezähmte Majestät',
    yourExclusiveAfricanSafari: 'IHR EXKLUSIVES AFRIKANISCHES SAFARI',
    
    // Trust Bar
    malariaFree: 'Malariafrei',
    safeForFamilies: 'Sicher für Familien',
    conservation: 'Naturschutz',
    ethicalHarvest: 'Ethische Jagd',
    luxury: 'Luxus',
    worldClassService: 'Weltklasse-Service',
    certified: 'Zertifiziert',
    professionalGuides: 'Professionelle Führer',
    
    // Sections
    theCradleOfIron: 'Die Wiege des Eisens',
    theJourney: 'Die Reise',
    fromArrivalToLegacy: 'Von der Ankunft zum Vermächtnis',
    theGuardians: 'Die Wächter',
    whoWeAre: 'Wer Wir Sind',
    thePursuit: 'Die Jagd',
    theConnection: 'Die Verbindung',
    realImpact: 'Echter Einfluss',
    fieldToFork: 'Vom Feld auf den Teller',
    theCulinaryNarrative: 'Die Kulinarische Erzählung',
    theExperience: 'Das Erlebnis',
    beginYourJourney: 'Beginnen Sie Ihre Reise',
    
    // CTAs
    reserveNow: 'Jetzt Reservieren',
    viewAccommodation: 'Unterkunft Ansehen',
    learnMore: 'Mehr Erfahren',
    experienceTheFullJourney: 'Die Vollständige Reise Erleben',
    discoverTheLegend: 'Die Legende Entdecken',
    
    // Footer
    certifications: 'Zertifizierungen',
    legal: 'Rechtliches',
    location: 'Standort',
    taxAdvisory: 'Steuerberatung',
    privacyPolicy: 'Datenschutzrichtlinie',
    indemnity: 'Freistellung',
    paiaManual: 'PAIA-Handbuch',
    allRightsReserved: 'Alle Rechte vorbehalten.',
  },
  fr: {
    // Header
    menu: 'Menu',
    bookYourSafari: 'Réserver Votre Safari',
    
    // Hero
    luxuryGameReserve: 'RÉSERVE DE CHASSE DE LUXE',
    witnessUntamedMajesty: 'Témoignez de la Majesté Indomptée',
    yourExclusiveAfricanSafari: 'VOTRE SAFARI AFRICAIN EXCLUSIF',
    
    // Trust Bar
    malariaFree: 'Sans Paludisme',
    safeForFamilies: 'Sûr pour les Familles',
    conservation: 'Conservation',
    ethicalHarvest: 'Récolte Éthique',
    luxury: 'Luxe',
    worldClassService: 'Service de Classe Mondiale',
    certified: 'Certifié',
    professionalGuides: 'Guides Professionnels',
    
    // Sections
    theCradleOfIron: 'Le Berceau du Fer',
    theJourney: 'Le Voyage',
    fromArrivalToLegacy: 'De l\'Arrivée au Legs',
    theGuardians: 'Les Gardiens',
    whoWeAre: 'Qui Nous Sommes',
    thePursuit: 'La Poursuite',
    theConnection: 'La Connexion',
    realImpact: 'Impact Réel',
    fieldToFork: 'De la Ferme à la Table',
    theCulinaryNarrative: 'Le Récit Culinaire',
    theExperience: 'L\'Expérience',
    beginYourJourney: 'Commencez Votre Voyage',
    
    // CTAs
    reserveNow: 'Réserver Maintenant',
    viewAccommodation: 'Voir l\'Hébergement',
    learnMore: 'En Savoir Plus',
    experienceTheFullJourney: 'Vivre le Voyage Complet',
    discoverTheLegend: 'Découvrir la Légende',
    
    // Footer
    certifications: 'Certifications',
    legal: 'Légal',
    location: 'Emplacement',
    taxAdvisory: 'Conseil Fiscal',
    privacyPolicy: 'Politique de Confidentialité',
    indemnity: 'Indemnité',
    paiaManual: 'Manuel PAIA',
    allRightsReserved: 'Tous droits réservés.',
  },
  af: {
    // Header
    menu: 'Kieslys',
    bookYourSafari: 'Boek Jou Safari',
    
    // Hero
    luxuryGameReserve: 'LUKSUS WILDBEDRYF',
    witnessUntamedMajesty: 'Aanskou Ongetemde Majesteit',
    yourExclusiveAfricanSafari: 'JOU EKSKLUSIEWE AFRIKAANSE SAFARI',
    
    // Trust Bar
    malariaFree: 'Malaria-Vry',
    safeForFamilies: 'Veilig vir Gesinne',
    conservation: 'Bewaring',
    ethicalHarvest: 'Etiese Oes',
    luxury: 'Luukse',
    worldClassService: 'Wêreldklas Diens',
    certified: 'Gesertifiseer',
    professionalGuides: 'Professionele Gidse',
    
    // Sections
    theCradleOfIron: 'Die Wieg van Yster',
    theJourney: 'Die Reis',
    fromArrivalToLegacy: 'Van Aankoms tot Erfenis',
    theGuardians: 'Die Bewaarders',
    whoWeAre: 'Wie Ons Is',
    thePursuit: 'Die Jag',
    theConnection: 'Die Verbinding',
    realImpact: 'Ware Impak',
    fieldToFork: 'Van Veld tot Vurk',
    theCulinaryNarrative: 'Die Kulinêre Verhaal',
    theExperience: 'Die Ervaring',
    beginYourJourney: 'Begin Jou Reis',
    
    // CTAs
    reserveNow: 'Reserveer Nou',
    viewAccommodation: 'Bekyk Akkommodasie',
    learnMore: 'Leer Meer',
    experienceTheFullJourney: 'Ervaar die Volledige Reis',
    discoverTheLegend: 'Ontdek die Legende',
    
    // Footer
    certifications: 'Sertifiseringe',
    legal: 'Wettig',
    location: 'Ligging',
    taxAdvisory: 'Belastingadvies',
    privacyPolicy: 'Privaatheidbeleid',
    indemnity: 'Vrywaring',
    paiaManual: 'PAIA Handleiding',
    allRightsReserved: 'Alle regte voorbehou.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

