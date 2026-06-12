"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function InHouseAdvantage() {
  const features = [
    {
      title: "OUR OWN DECORATION TEAM",
      desc: "Complete in-house décor — from mandap design and floral architecture to table styling and lighting ambience."
    },
    {
      title: "ORIGINAL JBL VRX SOUND SYSTEM",
      desc: "Professional-grade JBL VRX arrays owned and operated by our team. Crystal-clear sound for 50 to 5000 guests."
    },
    {
      title: "SPECIAL EFFECTS — ALL IN-HOUSE",
      desc: "Cold pyro, fog machines, confetti cannons, LED walls, laser shows — executed by our trained technicians."
    },
    {
      title: "ANCHORS & ARTISTS",
      desc: "Curated network of MCs, performers, and entertainers available on request for any event type."
    }
  ];

  return (
    <section className="bg-[#FDFBF7] py-20 md:py-[120px] px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Editorial Image */}
        <div className="w-full lg:w-5/12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="aspect-[3/4] w-full relative"
          >
            <div className="absolute inset-0 bg-[url('/205A4204.jpg')] bg-cover bg-center border-l-2 border-b-2 border-[var(--color-brand-gold)] translate-x-2 -translate-y-2 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/205A4204.jpg')] bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]" />
          </motion.div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-4xl md:text-5xl text-[#0E0A07] leading-tight mb-6 mobile-center"
          >
            Everything In-House.<br className="hidden md:block" /> Nothing Left to Chance.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[16px] text-[#4A3E31] mb-12 mobile-center-subtext"
          >
            Most event companies coordinate vendors. We own the entire production.
          </motion.p>

          <div className="flex flex-col gap-8 mb-12 w-full md:max-w-xl mx-auto lg:mx-0">
            {features.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="pl-[20px] border-l-[3px] border-[var(--color-brand-gold)] group"
              >
                <h4 className="text-[12px] uppercase tracking-[0.2em] text-[var(--color-brand-gold)] mb-2 transition-all duration-300 group-hover:text-[var(--color-gold-light)] group-hover:translate-x-1">
                  {item.title}
                </h4>
                <p className="font-sans text-[15px] text-[#0E0A07] font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col md:items-start items-center"
          >
            <p className="font-serif italic text-2xl md:text-3xl text-[#0E0A07] leading-snug mb-10 border-l-2 border-[#0E0A07]/20 pl-6 py-2 mobile-center">
              "When we say nail to hair — we mean every single element of your wedding is ours to own and perfect."
            </p>
            
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] transition-colors bg-transparent px-8 py-5 uppercase tracking-widest text-[12px] font-medium"
            >
              Talk to Our Team →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
