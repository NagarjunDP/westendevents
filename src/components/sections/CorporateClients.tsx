"use client";

import { motion } from "framer-motion";

interface Client {
  name: string;
  category: string;
  svgLogo: React.ReactNode;
}

const row1Clients: Client[] = [
  {
    name: "Eicher Motors",
    category: "Automotive & Manufacturing",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="40" rx="4" fill="#D32F2F"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="Impact, 'Arial Black', sans-serif" fontWeight="900" fontSize="22" letterSpacing="3">EICHER</text>
      </svg>
    )
  },
  {
    name: "DB Schenker",
    category: "Global Logistics & Supply Chain",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" x="2" y="4" fill="#E30613" rx="4"/>
        <text x="18" y="26" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18">DB</text>
        <text x="44" y="27" fill="#0D0A07" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" letterSpacing="2">SCHENKER</text>
      </svg>
    )
  },
  {
    name: "ACG Pharma",
    category: "Pharmaceuticals & Healthcare",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20L16 6H28L40 20L28 34H16L4 20Z" fill="#00529B"/>
        <path d="M16 14L22 6L28 14L22 22L16 14Z" fill="#00A3E0"/>
        <text x="48" y="28" fill="#00529B" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="24" letterSpacing="2">ACG</text>
      </svg>
    )
  },
  {
    name: "Tetra Pak",
    category: "Food Packaging & Processing",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8C4 5.79086 5.79086 4 8 4H36L26 36H8C5.79086 36 4 34.2091 4 32V8Z" fill="#0072CE"/>
        <path d="M36 4H40L30 36H26L36 4Z" fill="#E30613"/>
        <text x="46" y="27" fill="#0072CE" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5">Tetra Pak</text>
      </svg>
    )
  },
  {
    name: "Hansgrohe",
    category: "Luxury Sanitaryware & Fittings",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="175" height="40" rx="4" fill="#005B48"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="Georgia, serif" fontWeight="700" fontSize="19" letterSpacing="1">hansgrohe</text>
      </svg>
    )
  },
  {
    name: "SBI Bank",
    category: "Banking & Financial Services",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" fill="#00A3E0"/>
        <circle cx="20" cy="15" r="5" fill="#FFFFFF"/>
        <rect x="18" y="15" width="4" height="13" fill="#FFFFFF"/>
        <text x="44" y="27" fill="#280071" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">SBI</text>
      </svg>
    )
  }
];

const row2Clients: Client[] = [
  {
    name: "JITO",
    category: "Jain International Trade Org",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="130" height="40" rx="4" fill="#C9A84C"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="Georgia, serif" fontWeight="900" fontSize="22" letterSpacing="3">JITO</text>
      </svg>
    )
  },
  {
    name: "Lions Club",
    category: "International Service Organisation",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 165 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" fill="#002D62"/>
        <circle cx="20" cy="20" r="13" fill="#F4C430"/>
        <text x="20" y="26" textAnchor="middle" fill="#002D62" fontFamily="Impact, sans-serif" fontWeight="900" fontSize="17">L</text>
        <text x="44" y="27" fill="#002D62" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">LIONS</text>
      </svg>
    )
  },
  {
    name: "Rotary International",
    category: "Global Humanitarian Club",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="15" fill="#013A81"/>
        <circle cx="20" cy="20" r="7" fill="#F7A800"/>
        <text x="42" y="27" fill="#013A81" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" letterSpacing="1">Rotary</text>
      </svg>
    )
  },
  {
    name: "Azentio",
    category: "Financial Software & Tech",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" fill="url(#azentio-g3)"/>
        <path d="M14 25L20 13L26 25H23L20 19L17 25H14Z" fill="#FFFFFF"/>
        <defs>
          <linearGradient id="azentio-g3" x1="6" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C5CE7"/>
            <stop offset="1" stopColor="#00CEC9"/>
          </linearGradient>
        </defs>
        <text x="42" y="27" fill="#0D0A07" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="19" letterSpacing="2">AZENTIO</text>
      </svg>
    )
  },
  {
    name: "DeLaval",
    category: "Livestock & Dairy Technology",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8L20 4L34 8V22L20 34L6 22V8Z" fill="#003399"/>
        <path d="M20 10L28 21H12L20 10Z" fill="#FFFFFF"/>
        <text x="42" y="27" fill="#003399" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5">DeLaval</text>
      </svg>
    )
  },
  {
    name: "AYC Social",
    category: "Youth & Cultural Social Club",
    svgLogo: (
      <svg className="h-8 sm:h-9 w-auto" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="130" height="40" rx="4" fill="#8E44AD"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#FFFFFF" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" letterSpacing="3">AYC</text>
      </svg>
    )
  }
];

export function CorporateClients() {
  const marqueeTrack1 = [...row1Clients, ...row1Clients, ...row1Clients];
  const marqueeTrack2 = [...row2Clients, ...row2Clients, ...row2Clients];

  return (
    <section className="relative w-full bg-[#FAF6EF] py-10 sm:py-16 md:py-24 overflow-hidden border-t border-b border-[var(--color-brand-gold)]/20 font-sans">
      
      {/* Decorative Gold Lighting Accent Lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/40 to-transparent" />

      {/* Section Header */}
      <div className="container relative z-10 mx-auto px-5 sm:px-8 md:px-12 lg:px-24 mb-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow block mb-3 font-mono font-bold tracking-[0.25em]"
        >
          CORPORATE & SOCIAL CLIENTELE
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E0A07] font-medium mb-4"
        >
          Trusted by Industry Leaders & Clubs
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm md:text-base text-[#4A3E31] max-w-2xl mx-auto leading-relaxed font-light"
        >
          Executing seamless corporate galas, product launches, social galas, and brand conventions with turnkey technical production.
        </motion.p>
      </div>

      {/* DUAL-ROW CONTINUOUS SLIDING MARQUEE */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6 py-2">
        
        {/* Ambient Side Mask Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAF6EF] via-[#FAF6EF]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF6EF] via-[#FAF6EF]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Sliding Left */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 whitespace-nowrap">
          {marqueeTrack1.map((client, index) => (
            <div 
              key={`row1-${index}`} 
              className="inline-flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[var(--color-brand-gold)] transition-all duration-300 shrink-0 group cursor-pointer"
            >
              <div className="flex items-center justify-center shrink-0">
                {client.svgLogo}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xs sm:text-sm font-bold text-[#0E0A07] group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {client.name}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#8A7663] font-semibold">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Sliding Right (Reverse) */}
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6 whitespace-nowrap">
          {marqueeTrack2.map((client, index) => (
            <div 
              key={`row2-${index}`} 
              className="inline-flex items-center gap-3.5 sm:gap-4 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white border border-[#EADBCE] shadow-xs hover:shadow-md hover:border-[var(--color-brand-gold)] transition-all duration-300 shrink-0 group cursor-pointer"
            >
              <div className="flex items-center justify-center shrink-0">
                {client.svgLogo}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-xs sm:text-sm font-bold text-[#0E0A07] group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {client.name}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#8A7663] font-semibold">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
