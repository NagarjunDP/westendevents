"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Heart, Award, ShieldCheck, Globe, Phone, Star, Mic } from "lucide-react";

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

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center">
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
            We Create. <span className="italic font-light text-[var(--color-brand-gold)]">You Celebrate.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[16px] md:text-[18px] text-[#4A3E31] leading-relaxed max-w-3xl mx-auto space-y-4"
          >
            <p>At <strong className="text-[#0E0A07] font-semibold">Westend Events</strong>, we believe extraordinary events are created when imagination meets flawless execution.</p>
            <p>Based in <strong className="text-[var(--color-brand-gold)] font-semibold">Lonavala and Pune</strong>, we create and manage <strong className="text-[#0E0A07]">weddings, corporate events and destination celebrations</strong>, bringing together planning, design, production, entertainment, hospitality and logistics under one roof.</p>
            <p>Every event is different. Every client has a different story. Our job is to understand yours — and bring it to life beautifully.</p>
            <p className="pt-2 font-serif text-xl md:text-2xl italic text-[var(--color-brand-gold)] font-semibold">"You enjoy the moment. We take care of everything behind it."</p>
          </motion.div>
        </div>

        {/* =========================================
            FOUNDER FEATURE SECTION (Asha Agarwal)
            ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white border-2 border-[var(--color-brand-gold)]/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-[var(--color-brand-gold)]/10 rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-b border-[#EADBCE] pb-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 px-3 py-1 rounded-full mb-3 border border-[var(--color-brand-gold)]/30">
                <Star size={14} className="fill-current" />
                <span>FOUNDER & CREATIVE DIRECTOR</span>
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0A07] font-bold">
                Asha Agarwal
              </h3>
              <p className="font-mono text-sm text-[#8A7663] font-semibold mt-1">
                Founder, Westend Events | Pune & Lonavla
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://instagram.com/westendevents?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF6EF] border border-[#EADBCE] text-xs font-mono font-bold text-[#0E0A07] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                <svg className="w-4 h-4 text-pink-600 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/westendevents0505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF6EF] border border-[#EADBCE] text-xs font-mono font-bold text-[#0E0A07] hover:border-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold)] transition-colors"
              >
                <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="tel:+919923590038"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[var(--color-brand-gold)] text-[#0E0A07] text-xs font-mono font-bold hover:bg-[#0E0A07] hover:text-white transition-colors"
              >
                <Phone size={14} />
                <span>+91 99235 90038</span>
              </a>
            </div>
          </div>

          <div className="space-y-6 text-[#4A3E31] text-[15px] sm:text-[16px] leading-relaxed">
            <p>
              <strong className="text-[#0E0A07]">Asha Agarwal</strong> is a dynamic entrepreneur and the creative force behind <strong className="text-[#0E0A07]">Westend Events</strong>, one of the leading event and wedding planning companies serving Lonavala, Pune, and destinations across India.
            </p>

            {/* Honors & Recognitions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#EADBCE] space-y-2">
                <Award size={24} className="text-[var(--color-brand-gold)]" />
                <h4 className="font-serif font-bold text-[#0E0A07] text-sm">Best Wedding Planner</h4>
                <p className="text-xs text-[#6A5A4A]">Honored with the <em>"Best Wedding Planner in Town"</em> award by the Western Eastern Maharashtra Forum.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#EADBCE] space-y-2">
                <Mic size={24} className="text-[var(--color-brand-gold)]" />
                <h4 className="font-serif font-bold text-[#0E0A07] text-sm">Guest Speaker</h4>
                <p className="text-xs text-[#6A5A4A]">Invited to share her entrepreneurial journey on <em>"Women Leading Businesses in the Event Industry"</em>.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#EADBCE] space-y-2">
                <Star size={24} className="text-[var(--color-brand-gold)]" />
                <h4 className="font-serif font-bold text-[#0E0A07] text-sm">Industry Felicitations</h4>
                <p className="text-xs text-[#6A5A4A]">Felicitation at <strong>The Westin Goa</strong> for outstanding contributions to the wedding & events industry.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F4EDE2] border border-[var(--color-brand-gold)]/30 space-y-2">
              <div className="flex items-center gap-2 font-mono font-bold text-xs text-[var(--color-brand-gold)] uppercase tracking-wider">
                <CheckCircle2 size={16} />
                <span>EXCELLENCE IN NUMBERS</span>
              </div>
              <p className="text-sm sm:text-base text-[#0E0A07] font-medium">
                Under her leadership, Westend Events has successfully executed <strong>30+ weddings in a single year with 100% positive client feedback</strong>, reflecting the company's unwavering focus on quality, creativity, and flawless execution.
              </p>
            </div>

            <p>
              What sets Westend Events apart is its <strong className="text-[#0E0A07]">fully in-house execution team</strong>, comprising dedicated professionals for <em>Event Management, Production, Special Effects, Sound & Audio, and Technical Operations</em>. This integrated approach ensures complete quality control, seamless coordination, and unforgettable experiences for every celebration.
            </p>

            <p className="font-serif italic text-[#0E0A07] text-base sm:text-lg border-l-4 border-[var(--color-brand-gold)] pl-4 py-1">
              "From intimate gatherings to grand luxury weddings and corporate events, Asha Agarwal continues to transform ideas into extraordinary celebrations, making every event a memorable experience."
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid: Text + Team Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
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
          className="p-8 md:p-12 rounded-3xl bg-[#0E0A07] text-[#FAF6EF] border border-[var(--color-brand-gold)]/40 shadow-2xl text-center space-y-8"
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
