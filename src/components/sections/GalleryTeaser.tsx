"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BentoGallery } from "@/components/gallery/BentoGallery";

export function GalleryTeaser() {
  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-[100px] px-4 md:px-12 lg:px-24 border-t border-[var(--color-brand-gold)]/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 mobile-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow block mb-3"
          >
            PORTFOLIO HIGHLIGHTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl md:text-5xl mb-4 font-serif text-[var(--color-cream)]"
          >
            Moments We've <span className="italic text-[var(--color-brand-gold)]">Made Unforgettable</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[15px] text-[var(--color-cream-muted)] max-w-2xl mx-auto italic"
          >
            500+ celebrations across Lonavala, Goa, Udaipur, Jaipur & Mumbai. Seamless turnkey execution behind every detail.
          </motion.p>
        </div>

        {/* Bento Gallery Showcase */}
        <BentoGallery maxItems={6} />

        <div className="text-center mt-14">
          <Link 
            href="/gallery" 
            className="inline-flex items-center gap-3 px-8 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase border border-[var(--color-brand-gold)] text-black bg-[var(--color-brand-gold)] hover:bg-black hover:text-white transition-all duration-300 rounded-full shadow-lg hover:shadow-2xl"
          >
            Explore Complete Gallery (15+ Highlights) →
          </Link>
        </div>
      </div>
    </section>
  );
}
