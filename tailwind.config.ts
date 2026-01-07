import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette A: The Modern Heritage - Primary Colors
        "deep-olive": "#2B3D26",        // Primary - replaces khaki, signals authority
        "canvas-cream": "#EFEBD6",       // Secondary - replaces white, reduces glare
        "burnished-copper": "#B87333",   // Accent - luxury metallic, connects to brass/bullet aesthetic
        "signal-orange": "#D65A31",      // Action/CTA - high visibility, refined safety orange
        "espresso": "#231F20",           // Dark Base - warm alternative to black
        
        // Bushveld Spectrum - Authentic African Colors
        "bushveld-soil": "#894e34",      // Oxidised iron-rich earth - grounding, warmth
        "acacia-bark": "#543939",        // Dark hardwood trunks - stability, ruggedness
        "winter-sky": "#537285",         // Mid-day horizon haze - expansive, calming
        "dried-grass": "#9a7e49",        // Dormant savannah grass - natural, seasonal
        "sunset-gold": "#c98455",        // Golden hour light - luxury, warmth, nostalgia
        
        // Legacy colors (kept for backward compatibility)
        "charcoal": "#231F20",           // Mapped to Espresso
        "midnight": "#001F3F",
        "deep-forest": "#0A1F0A",
        "sand": "#EFEBD6",               // Mapped to Canvas Cream
        "taupe": "#D4C5B9",
        "clay": "#B87333",               // Mapped to Burnished Copper
        "soil": "#894e34",               // Mapped to Bushveld Soil
        "discovery-green": "#10707F",
        "cream": "#EFEBD6",              // Mapped to Canvas Cream
        "stone": "#C4B5A0",
        "wheat": "#E6D5B8",
        "caramel": "#D4A574",
        "slate": "#2F3E46",
        "silver": "#C0C0C0",
        "twilight-blue": "#0F1E2C",
        "sunset-glow": "#C57B57",
        "foliage": "#05080A",
        "champagne": "#c98455",              // Mapped to Sunset Gold for Golden Hour aesthetic
      },
      fontFamily: {
        heading: ["var(--font-serif)", "Playfair Display", "serif"],
        body: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-serif)", "Playfair Display", "serif"],
        montserrat: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};
export default config;

