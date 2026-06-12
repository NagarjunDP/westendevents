"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function GalleryTeaser() {
  const images = [
    { src: "/_MP_2138.jpg", label: "Wedding · Lonavla", aspect: "aspect-[3/4]" },
    { src: "/_05A6890.jpg", label: "Corporate · Mumbai", aspect: "aspect-[4/3]" },
    { src: "/_05A6913.jpg", label: "Beach Setup · Goa", aspect: "aspect-[1/1]" },
    { src: "/_MP_2148.jpg", label: "Intimate Decor", aspect: "aspect-[3/4]" },
    { src: "/205A4204.jpg", label: "Grand Setup", aspect: "aspect-[16/9]" },
    { src: "/205A4188.jpg", label: "Ceremony", aspect: "aspect-[3/4]" },
    { src: "/MDP_1147.jpg", label: "Local Wedding", aspect: "aspect-[4/3]" },
    { src: "/_MP_2173.jpg", label: "Palace Wedding", aspect: "aspect-[1/1]" },
  ];

  return (
    <section className="bg-[var(--color-bg-primary)] py-20 md:py-[120px] px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 mobile-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl md:text-5xl mb-4"
          >
            <span className="font-sans text-[var(--color-cream)] font-light">Moments We've </span>
            <span className="font-serif italic text-[var(--color-brand-gold)]">Made Unforgettable</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans text-[16px] text-[var(--color-cream-muted)] italic mobile-center-subtext"
          >
            500+ events. 10+ locations. One team behind every detail.
          </motion.p>
        </div>

        {/* Masonry-style CSS columns grid */}
        <div className="columns-2 lg:columns-3 gap-4 space-y-4 mb-16">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group overflow-hidden break-inside-avoid bg-[var(--color-bg-card)] rounded-[2px]"
            >
              <div className={`w-full ${img.aspect}`}>
                <img 
                  src={img.src} 
                  alt={img.label + " Westendevents"}
                  className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-4 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="bg-white/90 text-black px-4 py-1.5 text-[11px] uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-[2px]">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="inline-block text-[13px] text-[var(--color-brand-gold)] uppercase tracking-wider hover:text-[var(--color-cream)] transition-colors border-b border-[var(--color-brand-gold)] pb-1">
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
