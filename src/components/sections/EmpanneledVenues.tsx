"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, ShieldCheck } from "lucide-react";

export function EmpanneledVenues() {
  const venues = [
    {
      name: "Maharaja Agrasen Palace",
      location: "Lonavla",
      tagline: "Official Empanelled Event Partner",
      type: "Royal Palace & Heritage Banquets",
      badge: "Empanelled Partner",
      image: "/maharaj.jpeg"
    },
    {
      name: "Ovis Holiday Resort",
      location: "Lonavla",
      tagline: "Official Empanelled Production Partner",
      type: "Luxury Resort & Scenic Lawns",
      badge: "Empanelled Partner",
      image: "/ovisholiday.jpeg"
    },
    {
      name: "Upperdeck Resort",
      location: "Lonavla",
      tagline: "Official Empanelled Event Partner",
      type: "Hilltop Luxury Resort & Open-Air Venues",
      badge: "Empanelled Partner",
      image: "/upperdeckresort.png"
    },
    {
      name: "The Orchid Lonavla",
      location: "Lonavla",
      tagline: "Official Empanelled Event Partner",
      type: "5-Star Luxury Eco Resort",
      badge: "Empanelled Partner",
      image: "/orchid.jpeg"
    }
  ];

  return (
    <section className="bg-[#FAF6EF] py-10 sm:py-16 md:py-24 px-4 md:px-12 lg:px-24 border-b border-[var(--color-brand-gold)]/25 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold tracking-[0.25em] uppercase"
          >
            <ShieldCheck size={14} />
            <span>OFFICIAL VENUE ASSOCIATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl text-[#0E0A07] font-bold"
          >
            Officially Empanelled With Premier <span className="text-[var(--color-brand-gold)] italic font-light">Lonavla Resorts.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base text-[#4A3E31] font-light max-w-2xl mx-auto leading-relaxed"
          >
            Westend Events is officially empanelled as the preferred event management & production partner for Lonavla's most prestigious resorts and palaces.
          </motion.p>
        </div>

        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {venues.map((venue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-[#EADBCE] shadow-sm overflow-hidden flex flex-col justify-between hover:border-[var(--color-brand-gold)] hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Venue Image Banner */}
              <div className="relative h-44 w-full overflow-hidden bg-[#0E0A07]">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 font-mono text-[9px] font-bold uppercase tracking-wider">
                  {venue.badge}
                </span>
                <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs font-serif font-bold">
                  <Building2 size={14} className="text-[var(--color-brand-gold)]" />
                  <span>{venue.location}</span>
                </div>
              </div>

              {/* Venue Details */}
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0E0A07] group-hover:text-[var(--color-brand-gold)] transition-colors leading-snug">
                    {venue.name}
                  </h3>
                  <p className="text-xs font-mono text-[#8A7663] mt-1">{venue.type}</p>
                </div>

                <div className="pt-3 border-t border-[#EADBCE]/50 flex items-center gap-1.5 text-[11px] font-mono font-bold text-[var(--color-brand-gold)]">
                  <Sparkles size={12} className="shrink-0" />
                  <span>{venue.tagline}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
