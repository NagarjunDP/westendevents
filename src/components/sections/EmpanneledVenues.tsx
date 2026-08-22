"use client";

import { motion } from "framer-motion";
import { Building2, Sparkles, ShieldCheck } from "lucide-react";

export function EmpanneledVenues() {
  const venues = [
    {
      name: "Maharaja Agrasen Palace",
      location: "Lonavala",
      tagline: "Official Empanneled Event Partner",
      type: "Royal Palace & Heritage Banquets",
      badge: "Empanneled Partner"
    },
    {
      name: "Ovis Holiday Resort",
      location: "Lonavala",
      tagline: "Official Empanneled Production Partner",
      type: "Luxury Resort & Scenic Lawns",
      badge: "Empanneled Partner"
    },
    {
      name: "Upperdeck Resort",
      location: "Lonavala",
      tagline: "Official Empanneled Event Partner",
      type: "Hilltop Luxury Resort & Open-Air Venues",
      badge: "Empanneled Partner"
    },
    {
      name: "The Orchid Lonavala",
      location: "Lonavala",
      tagline: "Official Empanneled Event Partner",
      type: "5-Star Luxury Eco Resort",
      badge: "Empanneled Partner"
    }
  ];

  return (
    <section className="bg-[#FAF6EF] py-16 md:py-24 px-4 md:px-12 lg:px-24 border-b border-[var(--color-brand-gold)]/25 font-sans">
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
            Officially Empanneled With Premier <span className="text-[var(--color-brand-gold)] italic font-light">Lonavala Resorts.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm md:text-base text-[#4A3E31] font-light max-w-2xl mx-auto leading-relaxed"
          >
            Westend Events is officially empanneled as the preferred event management & production partner for Lonavala's most prestigious resorts and palaces.
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
              className="p-8 rounded-3xl bg-white border border-[#EADBCE] shadow-sm space-y-4 hover:border-[var(--color-brand-gold)] hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 flex items-center justify-center text-[var(--color-brand-gold)]">
                  <Building2 size={22} />
                </div>
                <span className="px-3 py-1 rounded-full bg-[var(--color-brand-gold)]/15 text-[var(--color-brand-gold)] font-mono text-[10px] font-bold uppercase tracking-wider">
                  {venue.badge}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#0E0A07] group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {venue.name}
                </h3>
                <p className="text-xs font-mono text-[#8A7663] mt-1">{venue.type}</p>
              </div>

              <div className="pt-3 border-t border-[#EADBCE]/50 flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-brand-gold)]">
                <Sparkles size={12} />
                <span>{venue.tagline}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
