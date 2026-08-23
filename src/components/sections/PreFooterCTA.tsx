"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function PreFooterCTA() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-[url('/205A4189.jpg')] bg-cover bg-center"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-[#0E0A07]/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl mobile-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[11px] text-[var(--color-brand-gold)] uppercase tracking-[0.3em] mb-6 mobile-center"
        >
          Lonavala · Pune · Mumbai · Goa · Udaipur · Jaipur
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-4xl md:text-6xl text-[var(--color-cream)] mb-8 leading-tight"
        >
          Your Perfect Event Starts With One Conversation
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans text-[16px] text-[var(--color-cream-muted)] max-w-2xl mx-auto leading-relaxed mb-12 font-light mobile-center-subtext"
        >
          Whether you're a foreign couple dreaming of a royal Indian wedding, an NRI family planning a destination celebration, or a brand launching its next big moment — Westend Events is your complete production partner.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto rounded-none bg-gradient-gold text-[#0E0A07] hover:brightness-110 transition-all duration-300 px-8 py-6 uppercase tracking-widest text-[12px] font-semibold border-none">
              Plan My Wedding
            </Button>
          </Link>
          <Link href="/contact?type=corporate" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto rounded-none border-[var(--color-white-soft)] text-[var(--color-white-soft)] hover:bg-[var(--color-white-soft)] hover:text-[#0E0A07] transition-all duration-300 bg-transparent px-8 py-6 uppercase tracking-widest text-[12px]">
              Corporate Enquiry
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
