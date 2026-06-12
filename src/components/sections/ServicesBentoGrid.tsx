"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesBentoGrid() {
  return (
    <section className="bg-[#FAF6EF] py-20 md:py-[120px] px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 mobile-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] mb-6 mobile-center"
          >
            WHAT WE DO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-4xl md:text-6xl text-[#0E0A07] leading-[1.1] mb-8"
          >
            We Don't Just Plan Events.<br />
            <span className="text-[var(--color-brand-gold)] italic font-light">We Own Every Detail.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[16px] text-[#4A3E31] max-w-[520px] leading-relaxed mb-12 mobile-center-subtext"
          >
            From in-house décor and JBL VRX sound systems to special effects, anchors, and artists — Westendevents delivers complete, zero-outsource luxury event management across Lonavla, Pune, Mumbai, Goa, Udaipur, Jaipur and beyond.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="h-[1px] bg-[var(--color-brand-gold)]/40 max-w-[520px] mobile-center-rule"
          />
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 auto-rows-auto md:auto-rows-[280px]">

          {/* Card A (7 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-7 md:row-span-2 relative group overflow-hidden bg-[var(--color-bg-card)] min-h-[420px] w-full"
          >
            <div className="absolute inset-0 bg-[url('/205A4188.jpg')] bg-cover bg-center transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Border Draw Animation on Hover */}
            <div className="absolute inset-4 border border-[var(--color-brand-gold)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-[1.02] group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
              <div className="flex justify-between items-start w-full">
                <div>
                  <span className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-3 block">01 /</span>
                  <h3 className="font-serif text-[28px] md:text-[32px] text-white leading-tight mb-3">Destination & Foreign Weddings</h3>
                  <p className="font-sans text-[14px] text-white/80 max-w-md leading-relaxed mb-6">Royal ceremonies for international couples, crafted in India's most iconic venues</p>

                  <div className="flex flex-wrap gap-2">
                    {["Lonavla", "Goa", "Udaipur", "Jaipur"].map(loc => (
                      <span key={loc} className="px-[14px] py-[8px] rounded-[20px] border border-[var(--color-brand-gold)] text-[10px] uppercase tracking-wider text-[var(--color-brand-gold)] bg-[#0E0A07]/40 backdrop-blur-sm">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="text-[var(--color-brand-gold)] opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block" />
              </div>
            </div>
            <Link href="/services" className="absolute inset-0 z-10" />
          </motion.div>

          {/* Card B (5 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-5 md:row-span-1 relative group overflow-hidden bg-[var(--color-bg-card)] min-h-[260px] md:min-h-[280px] w-full"
          >
            <div className="absolute inset-0 bg-[url('/MDP_1147.jpg')] bg-cover bg-center transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-4 border border-[var(--color-brand-gold)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-[1.02] group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
              <div className="flex justify-between items-end w-full">
                <div>
                  <span className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-2 block">02 /</span>
                  <h3 className="font-serif text-[22px] text-white leading-tight mb-2">Local Luxury Weddings</h3>
                  <p className="font-sans text-[14px] text-white/80 italic max-w-[280px]">Intimate to grand — every detail owned and executed by our team</p>
                </div>
                <ArrowRight className="text-[var(--color-brand-gold)] opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 mb-1 hidden md:block" />
              </div>
            </div>
            <Link href="/services" className="absolute inset-0 z-10" />
          </motion.div>

          {/* Card C (5 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-5 md:row-span-1 relative group overflow-hidden bg-[var(--color-bg-card)] min-h-[260px] md:min-h-[280px] w-full"
          >
            <div className="absolute inset-0 bg-[url('/_05A6890.jpg')] bg-cover bg-center transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-4 border border-[var(--color-brand-gold)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-[1.02] group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
              <div className="flex justify-between items-end w-full">
                <div>
                  <span className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-2 block">03 /</span>
                  <h3 className="font-serif text-[22px] text-white leading-tight mb-2">Corporate Events & Conferences</h3>
                  <p className="font-sans text-[14px] text-white/80 italic max-w-[280px]">Conferences, galas, and summits that leave a lasting impression</p>
                </div>
                <ArrowRight className="text-[var(--color-brand-gold)] opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 mb-1 hidden md:block" />
              </div>
            </div>
            <Link href="/services" className="absolute inset-0 z-10" />
          </motion.div>

          {/* Card D (4 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-[var(--color-bg-card)] min-h-[260px] md:min-h-0 w-full"
          >
            <div className="absolute inset-0 bg-[url('/_05A6896.jpg')] bg-cover bg-center transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-4 border border-[var(--color-brand-gold)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-[1.02] group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
              <div className="flex justify-between items-end w-full">
                <div>
                  <span className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-2 block">04 /</span>
                  <h3 className="font-serif text-[20px] text-white leading-tight mb-2">Brand Activations</h3>
                  <p className="font-sans text-[13px] text-white/80 italic max-w-[200px]">Launches and experiences that make your audience feel something</p>
                </div>
              </div>
            </div>
            <Link href="/services" className="absolute inset-0 z-10" />
          </motion.div>

          {/* Card E (4 cols, 1 row) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-[var(--color-bg-card)] min-h-[260px] md:min-h-0 w-full"
          >
            <div className="absolute inset-0 bg-[url('/_MP_2156.jpg')] bg-cover bg-center transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute inset-4 border border-[var(--color-brand-gold)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] scale-[1.02] group-hover:scale-100 group-hover:opacity-100 pointer-events-none" />

            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:-translate-y-2">
              <div className="flex justify-between items-end w-full">
                <div>
                  <span className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-2 block">05 /</span>
                  <h3 className="font-serif text-[20px] text-white leading-tight mb-2">Concerts & Entertainment</h3>
                  <p className="font-sans text-[13px] text-white/80 italic max-w-[200px]">Full production — sound, lighting, effects, artists — all in-house</p>
                </div>
              </div>
            </div>
            <Link href="/services" className="absolute inset-0 z-10" />
          </motion.div>

          {/* Card F (4 cols, 1 row) Typographic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:col-span-4 md:row-span-1 relative group overflow-hidden bg-[var(--color-blush)] transition-colors duration-700 hover:bg-[#4d2828] min-h-[260px] md:min-h-0 w-full flex flex-col items-center justify-center p-8 border border-white/5 hover:border-[var(--color-brand-gold)]/30"
          >
            <div className="absolute -bottom-6 -right-6 font-serif text-[160px] leading-none text-[var(--color-brand-gold)] opacity-[0.05] font-bold pointer-events-none select-none">06</div>
            <div className="relative z-10 text-center w-full max-w-[220px]">
              <div className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-6">IN-HOUSE PRODUCTION</div>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="text-[12px] text-[var(--color-cream)] uppercase tracking-wider border-b border-[var(--color-brand-gold)]/30 pb-3">OWN DECORATION TEAM</li>
                <li className="text-[12px] text-[var(--color-cream)] uppercase tracking-wider border-b border-[var(--color-brand-gold)]/30 pb-3">JBL VRX SOUND SYSTEM</li>
                <li className="text-[12px] text-[var(--color-cream)] uppercase tracking-wider border-b border-[var(--color-brand-gold)]/30 pb-3">SPECIAL EFFECTS</li>
                <li className="text-[12px] text-[var(--color-cream)] uppercase tracking-wider">ANCHORS & ARTISTS</li>
              </ul>
              <Link href="/services" className="text-[12px] text-[var(--color-brand-gold)] hover:text-white transition-colors">See Our Production →</Link>
            </div>
          </motion.div>

        </div>

        {/* CTA Row below grid */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-[#0E0A07]/10 pt-8 gap-6">
          <p className="font-serif italic text-[#4A3E31] mobile-center">Every service. Every detail. One team.</p>
          <div className="flex items-center justify-center gap-4 w-full md:w-auto">
            <span className="text-[12px] text-[#0E0A07] uppercase tracking-widest">500+ Events</span>
            <span className="text-[var(--color-brand-gold)]">·</span>
            <Link href="/services" className="text-[13px] text-[var(--color-brand-gold)] uppercase tracking-wider hover:underline underline-offset-4 decoration-[1px]">Explore All Services →</Link>
          </div>
        </div>

      </div>
    </section>
  );
}
