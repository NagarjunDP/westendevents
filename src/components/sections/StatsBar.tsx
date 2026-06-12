"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

// Custom hook for CountUp effect
function useCountUp(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return { count, ref };
}

function StatItem({ number, label, suffix = "", index }: { number: number, label: string, suffix?: string, index: number }) {
  const { count, ref } = useCountUp(number, 2 + index * 0.2);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start text-center md:text-left z-10">
      <div className="font-serif text-5xl md:text-[72px] text-[var(--color-cream)] mb-2 md:mb-4 leading-none">
        {count}{suffix}
      </div>
      <div className="font-sans text-[11px] tracking-[0.2em] text-[var(--color-cream-muted)] uppercase mobile-center">
        {label}
      </div>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { number: 500, suffix: "+", label: "Events Crafted" },
    { number: 10, suffix: "+", label: "Locations Across India" },
    { number: 100, suffix: "%", label: "In-House Production" },
    { number: 0, suffix: "", label: "Nail to Hair Complete Services", isText: true, textValue: "All" }
  ];

  return (
    <section className="relative w-full bg-[#FDFBF7] py-16 md:py-[80px] overflow-hidden">
      {/* Faint Decorative Mandala/Floral Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-[800px] h-[800px] text-[var(--color-brand-gold)] fill-current animate-spin-slow" style={{ animationDuration: '60s' }}>
          <path d="M50 0 C60 40 90 40 100 50 C90 60 60 60 50 100 C40 60 10 60 0 50 C10 40 40 40 50 0 Z" />
          <path d="M50 20 C55 40 75 45 80 50 C75 55 55 60 50 80 C45 60 25 55 20 50 C25 45 45 40 50 20 Z" opacity="0.5"/>
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24">
        {/* Mobile: 2x2 grid. Desktop: Flex row with slashes */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:flex md:flex-row md:justify-between md:items-center w-full">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              {stat.isText ? (
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="font-serif text-[28px] md:text-[42px] italic text-[var(--color-brand-gold)] mb-2 md:mb-4 leading-none h-[1em] flex items-end pb-1"
                  >
                    Nail to Hair
                  </motion.div>
                  <div className="font-sans text-[11px] tracking-[0.2em] text-[var(--color-cream-muted)] uppercase mobile-center">
                    Complete Wedding Services
                  </div>
                </div>
              ) : (
                <StatItem number={stat.number} label={stat.label} suffix={stat.suffix} index={i} />
              )}
              
              {/* Divider slash for desktop only */}
              {i < stats.length - 1 && (
                <div className="hidden md:block mx-8 lg:mx-12 font-serif text-[40px] text-[var(--color-brand-gold)] font-light opacity-50">
                  /
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
