"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Users, ShieldCheck, Calendar, Sparkles } from "lucide-react";

export function StatsBar() {
  const locations = [
    "Lonavala",
    "Pune",
    "Mahabaleshwar",
    "Karjat",
    "Khopoli",
    "Igatpuri",
    "Udaipur",
    "Goa",
    "Jaipur",
    "Mulshi",
    "Mumbai"
  ];

  const communities = [
    "NRI / Global Couples",
    "Jain",
    "Marwadi",
    "Agarwal",
    "Maharashtrian / Brahmin",
    "Punjabi",
    "Sindhi",
    "Christian"
  ];

  return (
    <section className="bg-[#FAF6EF] py-10 md:py-14 pb-6 md:pb-8 px-4 md:px-12 lg:px-24 border-b border-[var(--color-brand-gold)]/30 font-sans">
      <div className="max-w-[1400px] mx-auto space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold tracking-[0.25em] uppercase"
          >
            <Sparkles size={14} />
            <span>END-TO-END EVENT MANAGEMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E0A07] font-bold tracking-tight"
          >
            Experience, Versatility & <span className="italic font-light text-[#0E0A07]">In-House Power.</span>
          </motion.h2>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white border border-[#EADBCE] shadow-sm text-center space-y-2 hover:border-[var(--color-brand-gold)] transition-colors"
          >
            <div className="font-serif text-4xl md:text-5xl text-[var(--color-brand-gold)] font-bold">500+</div>
            <div className="font-mono text-xs font-bold text-[#0E0A07] uppercase tracking-wider">Events Executed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-white border border-[#EADBCE] shadow-sm text-center space-y-2 hover:border-[var(--color-brand-gold)] transition-colors"
          >
            <div className="font-serif text-4xl md:text-5xl text-[var(--color-brand-gold)] font-bold">14+</div>
            <div className="font-mono text-xs font-bold text-[#0E0A07] uppercase tracking-wider">Years Experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-white border border-[#EADBCE] shadow-sm text-center space-y-2 hover:border-[var(--color-brand-gold)] transition-colors"
          >
            <div className="font-serif text-4xl md:text-5xl text-[var(--color-brand-gold)] font-bold">100%</div>
            <div className="font-mono text-xs font-bold text-[#0E0A07] uppercase tracking-wider">In-House Production</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-white border border-[#EADBCE] shadow-sm text-center space-y-2 hover:border-[var(--color-brand-gold)] transition-colors"
          >
            <div className="font-serif text-4xl md:text-5xl text-[var(--color-brand-gold)] font-bold">30+</div>
            <div className="font-mono text-xs font-bold text-[#0E0A07] uppercase tracking-wider">Weddings / Year</div>
          </motion.div>
        </div>

        {/* Detailed Grid: Key Destination Hubs + Communities Managed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Key Destination Hubs */}
          <div className="p-8 rounded-3xl bg-white border border-[#EADBCE] shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#EADBCE] pb-4">
              <MapPin className="text-[var(--color-brand-gold)] w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0E0A07]">Key Destinations Served</h3>
                <p className="text-xs font-mono text-[#8A7663]">Maharashtra & Pan-India Coverage</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {locations.map((loc, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#EADBCE] text-xs font-mono font-semibold text-[#0E0A07]">
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Communities & Traditions Managed */}
          <div className="p-8 rounded-3xl bg-white border border-[#EADBCE] shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#EADBCE] pb-4">
              <Users className="text-[var(--color-brand-gold)] w-6 h-6 shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0E0A07]">Weddings & Celebrations Managed</h3>
                <p className="text-xs font-mono text-[#8A7663]">Cultural & Religious Traditions</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {communities.map((comm, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-full bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 text-xs font-mono font-bold text-[#0E0A07]">
                  {comm} Weddings
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
