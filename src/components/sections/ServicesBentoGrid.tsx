"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";

export function ServicesBentoGrid() {
  const weddingServices = [
    "Destination Weddings",
    "Luxury Weddings",
    "Wedding Décor & Production",
    "NRI / International Weddings",
    "Hospitality & Guest Management",
    "Entertainment & Special Effects"
  ];

  const corporateServices = [
    "Conferences & Summits",
    "Product Launches",
    "Annual Meets",
    "Awards & Gala Nights",
    "Brand Activations",
    "Corporate Offsites",
    "Exhibitions",
    "Sound / LED / Technical Production"
  ];

  return (
    <section className="bg-[#FAF6EF] pt-8 md:pt-12 pb-20 md:pb-24 px-4 md:px-12 lg:px-24 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto space-y-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold tracking-[0.25em] uppercase mb-6"
          >
            <Sparkles size={14} />
            <span>OUR EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-[#0E0A07] leading-tight mb-6"
          >
            Weddings & Corporate Experiences. <br />
            <span className="text-[var(--color-brand-gold)] italic font-light">Separated By Design.</span>
          </motion.h2>
        </div>

        {/* =========================================
            SECTION 1: WEDDINGS & CELEBRATIONS
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border-2 border-[var(--color-brand-gold)]/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Left Side: Large Cinematic Photograph */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('/205A4188.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/30 text-xs font-mono font-bold tracking-widest uppercase">
              <Heart size={14} className="fill-current" />
              <span>LUXURY WEDDINGS & DESTINATION CELEBRATIONS</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.2em]">CINEMATIC MANDAP & DECOR</span>
              <h3 className="font-serif text-2xl md:text-4xl text-white font-bold leading-snug">
                Royal Destination Ceremonies & NRI Celebrations
              </h3>
            </div>
          </div>

          {/* Right Side: Structured Services List */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-[#FAF6EF] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
                  ROUTE 01
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-[#0E0A07] font-bold">
                  Weddings & Celebrations
                </h3>
              </div>

              <p className="text-sm text-[#4A3E31] leading-relaxed">
                From dramatic mandap wide shots to couple entries, sangeet stages, and hospitality management — we own 100% in-house inventory for luxury weddings in Lonavala, Pune, Goa, Udaipur, and across India.
              </p>

              <ul className="space-y-3.5 pt-2">
                {weddingServices.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#0E0A07]">
                    <CheckCircle2 size={18} className="text-[var(--color-brand-gold)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#EADBCE]">
              <Link
                href="/services#weddings"
                className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-[#0E0A07] hover:text-white transition-all duration-300 px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] w-full shadow-lg"
              >
                <span>Explore Weddings →</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            SECTION 2: CORPORATE EXPERIENCES
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0E0A07] text-[#FAF6EF] border-2 border-[var(--color-brand-gold)]/40 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Left Side: Structured Corporate Services List */}
          <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 bg-[#140F0B] flex flex-col justify-between space-y-6 sm:space-y-8 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-[#261E16]">
            <div className="space-y-5 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-1.5">
                  CORPORATE SOLUTIONS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                  Corporate Experiences
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#C0B0A0] leading-relaxed">
                Scale, precision, and technical execution. Complete turnkey corporate management with in-house JBL sound, intelligent stage lighting, LED video walls, and custom stall fabrications.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 pt-1">
                {corporateServices.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                    <CheckCircle2 size={16} className="text-[var(--color-brand-gold)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#261E16]">
              <Link
                href="/services#corporate"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-white hover:text-[#0E0A07] transition-all duration-300 px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.16em] w-full shadow-lg text-center"
              >
                <span>Explore Corporate →</span>
              </Link>
            </div>
          </div>

          {/* Right Side: High-Impact Scale & Execution Corporate Photograph */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-[560px] overflow-hidden group order-1 lg:order-2">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('/corporate_conference.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0A07] via-[#0E0A07]/30 to-transparent" />
            
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 text-xs font-mono font-bold tracking-widest uppercase">
              <Briefcase size={14} />
              <span>CORPORATE STAGE SCALE & EXECUTION</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.2em]">BRANDED STAGE & LED VIDEO WALL</span>
              <h3 className="font-serif text-2xl md:text-4xl text-white font-bold leading-snug">
                Conferences, Launches, Awards & Technical AV
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
