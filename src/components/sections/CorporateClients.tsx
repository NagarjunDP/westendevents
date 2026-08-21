"use client";

import { motion } from "framer-motion";

interface Client {
  name: string;
  category: string;
  svgLogo: React.ReactNode;
}

const corporateClients: Client[] = [
  {
    name: "Eicher Motors",
    category: "Automotive & Manufacturing",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 180 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="45" rx="6" fill="#D32F2F"/>
        <text x="18" y="30" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">EICHER</text>
      </svg>
    )
  },
  {
    name: "DB Schenker",
    category: "Global Logistics & Supply Chain",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 210 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" x="4" y="4.5" fill="#E30613" rx="4"/>
        <text x="12" y="30" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="20">DB</text>
        <text x="50" y="29" fill="#1A1208" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="17" letterSpacing="1.5">SCHENKER</text>
      </svg>
    )
  },
  {
    name: "ACG Pharma",
    category: "Pharmaceuticals & Healthcare",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 22.5L20 8H34L46 22.5L34 37H20L8 22.5Z" fill="#00529B"/>
        <path d="M20 16.5L27 8L34 16.5L27 25L20 16.5Z" fill="#00A3E0"/>
        <text x="54" y="30" fill="#00529B" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="2">ACG</text>
      </svg>
    )
  },
  {
    name: "Tetra Pak",
    category: "Food Packaging & Processing",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 190 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10C6 7.79086 7.79086 6 10 6H40L28 39H10C7.79086 39 6 37.2091 6 35V10Z" fill="#0072CE"/>
        <path d="M40 6H44L32 39H28L40 6Z" fill="#E30613"/>
        <text x="52" y="30" fill="#0072CE" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="0.5">Tetra Pak</text>
      </svg>
    )
  },
  {
    name: "Hansgrohe",
    category: "Luxury Sanitaryware & Fittings",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 200 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="45" rx="6" fill="#005B48"/>
        <text x="16" y="29" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="20" letterSpacing="1">hansgrohe</text>
      </svg>
    )
  },
  {
    name: "Azentio",
    category: "Financial Software & Tech",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 180 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22.5" r="14" fill="url(#azentio-grad)"/>
        <path d="M16 27L22 15L28 27H24.5L22 21.5L19.5 27H16Z" fill="#FFFFFF"/>
        <defs>
          <linearGradient id="azentio-grad" x1="8" y1="8" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C5CE7"/>
            <stop offset="1" stopColor="#00CEC9"/>
          </linearGradient>
        </defs>
        <text x="44" y="30" fill="#1A1208" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="21" letterSpacing="2">AZENTIO</text>
      </svg>
    )
  },
  {
    name: "SBI Bank",
    category: "Banking & Financial Services",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 210 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22.5" r="16" fill="#00A3E0"/>
        <circle cx="22" cy="18" r="6" fill="#FFFFFF"/>
        <rect x="20" y="18" width="4" height="12" fill="#FFFFFF"/>
        <text x="48" y="29" fill="#280071" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">SBI BANK</text>
      </svg>
    )
  },
  {
    name: "JITO",
    category: "Jain International Trade Organisation",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="45" rx="6" fill="#D4AF37"/>
        <text x="18" y="31" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="3">JITO</text>
      </svg>
    )
  },
  {
    name: "Lions Club",
    category: "International Service Organisation",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 190 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22.5" r="16" fill="#002D62"/>
        <text x="16" y="29" fill="#F4C430" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18">L</text>
        <text x="46" y="29" fill="#002D62" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="1">LIONS CLUB</text>
      </svg>
    )
  },
  {
    name: "AYC",
    category: "Youth & Cultural Social Club",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 150 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" x="4" y="4.5" fill="#8E44AD" rx="6"/>
        <text x="10" y="30" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18">A</text>
        <text x="48" y="30" fill="#8E44AD" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">AYC</text>
      </svg>
    )
  },
  {
    name: "Brotherhood Club",
    category: "Prestigious Social Organisation",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 220 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22.5" r="15" fill="#2C3E50"/>
        <path d="M16 22.5L22 16L28 22.5L22 29L16 22.5Z" fill="#E74C3C"/>
        <text x="46" y="29" fill="#2C3E50" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="17" letterSpacing="1">BROTHERHOOD</text>
      </svg>
    )
  },
  {
    name: "iKrop",
    category: "Agritech & Innovation",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 150 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 28C12 28 14 14 26 12C26 12 28 26 12 28Z" fill="#27AE60"/>
        <path d="M24 33C24 33 26 21 36 19C36 19 38 31 24 33Z" fill="#2ECC71"/>
        <text x="44" y="30" fill="#1A1208" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="24" letterSpacing="1">iKrop</text>
      </svg>
    )
  },
  {
    name: "DeLaval",
    category: "Dairy & Livestock Technology",
    svgLogo: (
      <svg className="h-9 w-auto" viewBox="0 0 180 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10L24 6L40 10V26L24 38L8 26V10Z" fill="#003399"/>
        <path d="M24 12L34 24H14L24 12Z" fill="#FFFFFF"/>
        <text x="48" y="30" fill="#003399" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22" letterSpacing="0.5">DeLaval</text>
      </svg>
    )
  }
];

export function CorporateClients() {
  // Multiply client list for seamless infinite marquee loop
  const marqueeList = [...corporateClients, ...corporateClients, ...corporateClients];

  return (
    <section className="relative w-full bg-[#FAF6EF] py-16 md:py-24 overflow-hidden border-t border-b border-[var(--color-brand-gold)]/20">
      
      {/* Decorative Gold Accent Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-brand-gold)]/40 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24 mb-10 text-center">
        {/* Eyebrow */}
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow block mb-3"
        >
          CORPORATE & SOCIAL EVENTS
        </motion.span>

        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--color-cream)] font-medium mb-4"
        >
          Trusted by Industry Leaders & Clubs
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm md:text-base text-[var(--color-cream-muted)] max-w-2xl mx-auto leading-relaxed"
        >
          Executing seamless corporate galas, product launches, 
          social galas, and brand activations with 100% in-house production.
        </motion.p>
      </div>

      {/* INFINITE SLIDING MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden py-6 bg-[#F5ECD7]/50 border-y border-[var(--color-brand-gold)]/15 backdrop-blur-xs">
        
        {/* Left & Right Shadow Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#FAF6EF] to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#FAF6EF] to-transparent pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex items-center gap-6 md:gap-8">
          {marqueeList.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center gap-4 px-6 py-3.5 rounded-full bg-white border border-[var(--color-brand-gold)]/25 shadow-xs hover:shadow-md hover:border-[var(--color-brand-gold)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-center h-9">
                {client.svgLogo}
              </div>
              <div className="h-6 w-[1px] bg-[var(--color-brand-gold)]/20 mx-1" />
              <span className="font-sans text-xs font-semibold tracking-wider text-[var(--color-cream-muted)] group-hover:text-[var(--color-cream)] transition-colors whitespace-nowrap uppercase">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
