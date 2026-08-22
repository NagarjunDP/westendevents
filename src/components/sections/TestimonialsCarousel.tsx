"use client";

import { motion } from "framer-motion";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      text: "Westend Events executed my son's wedding with extraordinary grandeur and precision. Their 100% in-house decor team, original JBL VRX sound, and SFX made the entire celebration unforgettable.",
      author: "Kanwaljit Singh (Actor)",
      meta: "Celebrity Wedding · Lonavla"
    },
    {
      text: "We flew in from Toronto with 180 guests and didn't have to worry about a single thing. The décor, sound, and coordination were flawless — it felt like a Bollywood film brought to life.",
      author: "Natasha & Arjun S.",
      meta: "NRI Destination Wedding · Lonavla"
    },
    {
      text: "As an American bride marrying into an Indian family, I was overwhelmed. Westend Events held our hand through every ritual and detail. Truly end-to-end — they meant it.",
      author: "Emily & Rohan M.",
      meta: "Foreigner & NRI Fusion Wedding · Goa"
    },
    {
      text: "Their JBL sound system and in-house production team was the best we've experienced for our annual corporate convention. Punctual, professional, and world-class.",
      author: "Event Chairperson, JITO & Corporate Lead",
      meta: "Corporate & Social Convention · Mumbai"
    }
  ];

  return (
    <section className="bg-[#FDFBF7] py-20 md:py-[120px] overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-center mb-16 md:mb-24 mobile-center px-4 md:px-12 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-3xl md:text-5xl text-[#0E0A07] max-w-3xl mx-auto leading-tight"
        >
          Trusted by Couples and Brands Across the World
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden w-full group">
        <motion.div 
          className="flex gap-6 md:gap-8 w-max px-3 md:px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx}
              className="w-[85vw] max-w-[400px] shrink-0 bg-[#FFFFFF] p-8 md:p-12 border border-[var(--color-gold-muted)] flex flex-col items-start text-left transition-all duration-500 hover:border-[var(--color-brand-gold)] relative"
            >
              <div className="absolute -top-[45px] -left-[10px] font-serif text-[120px] leading-none text-[var(--color-brand-gold)] opacity-40 select-none pointer-events-none">
                "
              </div>
              <p className="font-serif italic text-[#0E0A07] text-lg leading-relaxed mb-10 flex-grow relative z-10 pt-4">
                {t.text}
              </p>
              <div className="relative z-10">
                <div className="text-[12px] text-[var(--color-brand-gold)] uppercase tracking-[0.2em] mb-1 font-semibold">{t.author}</div>
                <div className="text-[11px] text-[#4A3E31] uppercase tracking-wider">{t.meta}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
