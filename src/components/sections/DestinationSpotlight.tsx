"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function DestinationSpotlight() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const locations = [
    {
      name: "Lonavla",
      desc: "Misty hills, lush resorts, and intimate farmhouses just 2 hours from Mumbai",
      image: "/_MP_2138.jpg"
    },
    {
      name: "Karjat / Khopoli",
      desc: "Riverside venues and jungle retreats perfect for multi-day celebrations",
      image: "/_MP_2148.jpg"
    },
    {
      name: "Mahabaleshwar",
      desc: "Serene hilltop escapes for private, intimate wedding gatherings",
      image: "/_MP_2145.jpg"
    },
    {
      name: "Goa",
      desc: "Beachside ceremonies, colonial architecture, and tropical luxury",
      image: "/_05A6913.jpg"
    },
    {
      name: "Udaipur / Jaipur",
      desc: "Royal palaces and heritage havelis for grand destination weddings",
      image: "/_MP_2173.jpg"
    }
  ];

  return (
    <section className="bg-[#FAF6EF] py-20 md:py-[120px] overflow-hidden">
      <div className="px-4 md:px-12 lg:px-24 max-w-[1400px] mx-auto mb-16 mobile-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-3xl md:text-5xl text-[#0E0A07] leading-tight mb-8 max-w-2xl"
        >
          Your Dream Indian Wedding, Handled from Anywhere in the World
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-sans text-[16px] text-[#4A3E31] max-w-3xl leading-relaxed mobile-center-subtext"
        >
          Planning a destination wedding in India from the US, UK, Europe, or Australia? Westend Events is your single point of contact — from shortlisting venues in Lonavla's lush hills or Goa's beachfronts, to managing guest logistics, décor, sound, and on-ground coordination. You bring the vision, we handle everything else — remotely and on-site.
        </motion.p>
      </div>

      {/* Cards - horizontal scroll on mobile, flex grid on desktop */}
      <div className="max-w-[1400px] mx-auto">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible pb-8 px-4 md:px-12 lg:px-24"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {locations.map((loc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, delay: 0.1 * idx, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[85vw] max-w-[320px] shrink-0 md:min-w-0 md:w-full flex flex-col snap-center group relative transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-2 hover:shadow-[0_0_12px_rgba(201,168,76,0.3)] bg-[#FFFFFF] border-b-2 border-[var(--color-brand-gold)]"
            >
              <div className="w-full h-[220px] overflow-hidden bg-[#161616]">
                <img 
                  src={loc.image} 
                  alt={`${loc.name} destination wedding Westend Events`}
                  className="w-full h-full object-cover transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 h-auto min-h-[120px] flex flex-col justify-center">
                <h3 className="font-serif text-[22px] text-[#0E0A07] mb-2">{loc.name}</h3>
                <p className="font-sans text-[12px] text-[#4A3E31] italic leading-relaxed">{loc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
