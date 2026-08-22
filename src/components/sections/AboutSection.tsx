"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Heart, Award, ShieldCheck, Users } from "lucide-react";

export function AboutSection() {
  const servicesList = [
    "Wedding Planning",
    "Destination Weddings",
    "Corporate Events",
    "Décor & Design",
    "Production",
    "Entertainment",
    "Artist Management",
    "Hospitality",
    "Guest Management",
    "Logistics",
    "Special Effects",
    "Sound & Technical Production"
  ];

  return (
    <section id="about" className="relative bg-[#FAF6EF] py-20 md:py-32 overflow-hidden font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-gold)]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#E8DCC4]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold tracking-[0.25em] uppercase mb-6"
          >
            <Sparkles size={14} />
            <span>ABOUT WESTEND EVENTS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E0A07] leading-[1.15] mb-8"
          >
            We Don’t Just Plan Events. <br className="hidden sm:block" />
            <span className="italic font-light text-[var(--color-brand-gold)]">We Create Experiences Worth Remembering.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] md:text-[18px] text-[#4A3E31] leading-relaxed max-w-3xl mx-auto"
          >
            At <strong className="text-[#0E0A07] font-semibold">Westend Events</strong>, every celebration begins with a story — and our passion is bringing that story to life. Based in <strong className="text-[var(--color-brand-gold)] font-semibold">Lonavala and Pune</strong>, we specialize in creating thoughtfully planned, beautifully designed and seamlessly executed weddings, destination celebrations, corporate events and social experiences.
          </motion.p>
        </div>

        {/* Main Content Grid: Text + Team Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          
          {/* Left Column: Vision & Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Team Image Card */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-2 border-[var(--color-brand-gold)]/40 p-2 bg-[#FAF6EF]">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/aboutsection.jpeg"
                  alt="Team Westend Events"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono font-medium flex items-center justify-between">
                  <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    👥 TEAM WESTEND
                  </span>
                  <span className="text-[var(--color-brand-gold)] font-semibold">
                    Lonavala & Pune
                  </span>
                </div>
              </div>
            </div>

            {/* Vision & Execution Text Box */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#F4EDE2] border border-[var(--color-brand-gold)]/20 space-y-4">
              <h3 className="font-serif text-2xl text-[#0E0A07] font-bold flex items-center gap-2">
                <ShieldCheck className="text-[var(--color-brand-gold)] w-6 h-6 shrink-0" />
                <span>Your Vision. Our Execution.</span>
              </h3>
              <p className="text-[15px] text-[#4A3E31] leading-relaxed">
                No two celebrations should ever feel the same. We take the time to understand your vision, personality and priorities before creating an experience that is truly yours. From venue planning and décor to entertainment, production, hospitality, logistics and on-ground coordination, every element is brought together by one dedicated team.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-[var(--color-brand-gold)] uppercase tracking-wider">
                ⚡ Creative Ideas + Strong Execution
              </div>
            </div>
          </motion.div>

          {/* Right Column: Weddings & Corporate Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Weddings Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#EADBCE] shadow-sm hover:border-[var(--color-brand-gold)]/50 transition-colors space-y-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/15 flex items-center justify-center text-[var(--color-brand-gold)]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <h3 className="font-serif text-2xl text-[#0E0A07] font-bold">
                Weddings & Destination Celebrations
              </h3>
              <p className="text-[15px] text-[#4A3E31] leading-relaxed">
                Whether it is an intimate wedding in the hills of Lonavala, a grand celebration in Pune or a destination wedding away from home, we work closely with families to make the entire journey smooth and memorable.
              </p>
              <p className="text-[14px] text-[#4A3E31]/90 italic border-l-2 border-[var(--color-brand-gold)] pl-4 py-1">
                "We understand that a wedding is more than an event — it is one of the most important celebrations for two families. That is why we focus equally on the details guests see and the countless details they never have to worry about."
              </p>
            </div>

            {/* Corporate Events Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#EADBCE] shadow-sm hover:border-[var(--color-brand-gold)]/50 transition-colors space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#0E0A07] flex items-center justify-center text-[var(--color-brand-gold)]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#0E0A07] font-bold">
                Corporate Events
              </h3>
              <p className="text-[15px] text-[#4A3E31] leading-relaxed">
                From conferences, product launches and exhibitions to annual celebrations, employee engagement programs and corporate experiences, Westend Events brings together professional planning, production and creative execution.
              </p>
              <p className="text-[14px] text-[#4A3E31]/90 italic border-l-2 border-[#0E0A07] pl-4 py-1">
                "We understand that every corporate event represents a brand. Our approach therefore combines creativity with timelines, precision and professional delivery."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Everything. One Team. Pill Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl bg-[#0E0A07] text-[#FAF6EF] border border-[var(--color-brand-gold)]/40 shadow-2xl mb-20 text-center space-y-8"
        >
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold">
              COMPLETE IN-HOUSE CAPABILITIES
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white">
              Everything. One Team.
            </h3>
            <p className="text-sm text-[#C0B0A0] max-w-xl mx-auto">
              From initial floorplan to final sound check — zero outsourcing, 100% quality guarantee.
            </p>
          </div>

          {/* Service Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-[#1C1611] border border-[var(--color-brand-gold)]/30 text-xs md:text-sm font-medium text-[#F4E8D6] flex items-center gap-2 hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-gold)] shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#A89888] italic max-w-2xl mx-auto pt-2">
            With years of experience and numerous celebrations behind us, our greatest achievement remains simple — seeing our clients and their guests enjoy an event exactly the way it was imagined.
          </p>
        </motion.div>

        {/* Tagline CTA Footer Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0E0A07]">
            Let’s Create Something <span className="italic text-[var(--color-brand-gold)]">Unforgettable.</span>
          </h3>
          <p className="text-base sm:text-lg font-medium text-[#4A3E31]">
            Your occasion deserves more than an event. <br className="hidden sm:block" />
            <strong>It deserves an experience people will talk about long after it is over.</strong>
          </p>
          
          <div className="p-4 rounded-xl bg-[var(--color-brand-gold)]/10 border border-[var(--color-brand-gold)]/30 inline-block">
            <span className="font-serif font-bold text-lg md:text-xl text-[#0E0A07]">
              Westend Events — You Celebrate. We Take Care of the Rest.
            </span>
          </div>

          <div className="pt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-[#E5BE48] transition-colors font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-xl shadow-lg shadow-[var(--color-brand-gold)]/20"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
