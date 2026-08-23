"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function InHouseAdvantage() {
  const capabilities = [
    "JBL VRX Sound Systems",
    "Technical AV",
    "LED Screens",
    "Special Entries",
    "SFX",
    "Bespoke Décor",
    "Hospitality",
    "Stage Production"
  ];

  return (
    <section className="bg-[#0E0A07] text-[#FAF6EF] py-20 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-b border-[var(--color-brand-gold)]/30 font-sans">
      <div className="max-w-[1400px] mx-auto text-center space-y-12">
        
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/20 border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold tracking-[0.25em] uppercase"
        >
          <Sparkles size={14} />
          <span>100% IN-HOUSE ADVANTAGE</span>
        </motion.div>

        {/* Main Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-tight"
        >
          One Team. <span className="italic font-light text-[var(--color-brand-gold)]">Everything In-House.</span>
        </motion.h2>

        {/* Capabilities Pill Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto pt-4"
        >
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-2xl bg-[#1C1611] border border-[var(--color-brand-gold)]/40 text-sm sm:text-base font-serif font-bold text-white flex items-center gap-2 shadow-lg hover:border-[var(--color-brand-gold)] transition-colors"
            >
              <CheckCircle2 size={16} className="text-[var(--color-brand-gold)] shrink-0" />
              <span>{cap}</span>
            </div>
          ))}
        </motion.div>

        {/* Sub-tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-6 max-w-3xl mx-auto space-y-6"
        >
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[var(--color-brand-gold)] font-light italic leading-relaxed border-t border-b border-white/10 py-6">
            "Fewer vendors. Better coordination. Greater control. Flawless execution."
          </p>

          <div>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-white transition-colors duration-300 px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-xl"
            >
              <ShieldCheck size={16} />
              <span>Experience Our In-House Advantage</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
