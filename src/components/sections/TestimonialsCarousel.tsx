"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsCarousel() {
  const testimonials = [
    {
      text: "Westend Events executed my son's wedding with extraordinary grandeur and precision. Their 100% in-house decor team, original JBL VRX sound, and SFX made the entire celebration unforgettable.",
      author: "Kanwaljit Singh (Actor)",
      meta: "Celebrity Wedding · Lonavala",
      rating: 5
    },
    {
      text: "We flew in from Toronto with 180 guests and didn't have to worry about a single thing. The décor, sound, and coordination were flawless — it felt like a Bollywood film brought to life.",
      author: "Natasha & Arjun S.",
      meta: "NRI Destination Wedding · Lonavala",
      rating: 5
    },
    {
      text: "As an American bride marrying into an Indian family, I was overwhelmed. Westend Events held our hand through every ritual and detail. Truly end-to-end — they meant it.",
      author: "Emily & Rohan M.",
      meta: "Foreigner & NRI Fusion Wedding · Goa",
      rating: 5
    },
    {
      text: "Their JBL sound system and in-house production team was the best we've experienced for our annual corporate convention. Punctual, professional, and world-class.",
      author: "Event Chairperson, JITO Lead",
      meta: "Corporate & Social Convention · Mumbai",
      rating: 5
    },
    {
      text: "The decor at Maharaja Agrasen Palace was stunning beyond words. From Mandap lighting to entry fireworks, Westend Events delivered 10/10 perfection.",
      author: "Dr. Vikram & Sneha K.",
      meta: "Luxury Palace Wedding · Lonavala",
      rating: 5
    }
  ];

  // Tripled for infinite seamless 60fps marquee loop
  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-[#FAF6EF] py-16 md:py-24 overflow-hidden border-t border-b border-[var(--color-brand-gold)]/20 font-sans">
      
      {/* Section Title */}
      <div className="max-w-[1400px] mx-auto text-center mb-10 md:mb-14 px-5 sm:px-8 md:px-12 lg:px-24">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow block mb-3 font-mono font-bold tracking-[0.25em]"
        >
          CLIENT EXPERIENCES & STORIES
        </motion.span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E0A07] font-medium leading-tight max-w-3xl mx-auto"
        >
          Trusted by Couples & Brands Across the World
        </motion.h2>
      </div>

      {/* CONTINUOUS SMOOTH SLIDING MARQUEE CAROUSEL */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Soft Ambient Side Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAF6EF] via-[#FAF6EF]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF6EF] via-[#FAF6EF]/80 to-transparent z-20 pointer-events-none" />

        {/* Sliding Marquee Track */}
        <div className="animate-marquee flex items-stretch gap-5 sm:gap-6 whitespace-normal">
          {marqueeTestimonials.map((t, idx) => (
            <div 
              key={idx}
              className="w-[290px] sm:w-[350px] md:w-[400px] bg-white p-6 sm:p-8 border border-[#EADBCE] rounded-2xl flex flex-col justify-between items-start text-left shadow-xs hover:shadow-xl hover:border-[var(--color-brand-gold)] transition-all duration-300 shrink-0 relative group"
            >
              {/* Decorative Gold Quotation Mark */}
              <div className="absolute top-3 right-5 font-serif text-[60px] leading-none text-[var(--color-brand-gold)] opacity-20 select-none pointer-events-none group-hover:opacity-40 transition-opacity">
                “
              </div>

              {/* Star Rating Header */}
              <div className="flex items-center gap-1 mb-4 text-amber-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>

              {/* Review Paragraph */}
              <p className="font-serif italic text-[#0E0A07] text-sm sm:text-base leading-relaxed mb-6 flex-grow relative z-10">
                "{t.text}"
              </p>

              {/* Author & Event Location Metadata */}
              <div className="relative z-10 pt-4 border-t border-[#F2E8DD] w-full">
                <div className="font-serif text-sm font-bold text-[#0E0A07] group-hover:text-[var(--color-brand-gold)] transition-colors">
                  {t.author}
                </div>
                <div className="font-mono text-[10px] sm:text-[11px] text-[#8A7663] font-semibold uppercase tracking-wider mt-0.5">
                  {t.meta}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
