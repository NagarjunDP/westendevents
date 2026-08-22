"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isMobileVideoLoaded, setIsMobileVideoLoaded] = useState(false);
  const [isDesktopVideoLoaded, setIsDesktopVideoLoaded] = useState(false);

  useEffect(() => {
    const video = mobileVideoRef.current;
    if (video) {
      if (video.readyState >= 2) {
        setIsMobileVideoLoaded(true);
      }
      video.play().catch(() => {
        // Handle browser autoplay policy
      });
    }
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-black overflow-hidden flex flex-col justify-center pt-20 sm:pt-24 md:pt-20 pb-8">
        
        {/* =========================================
            MOBILE LAYOUT (Full Bleed Background 9:16)
            ========================================= */}
        <div className="absolute inset-0 md:hidden z-0 overflow-hidden bg-black flex items-center justify-center">
           {/* Fast-loading Poster Image */}
           <div 
             className="absolute inset-0 bg-[url('/Video-44267-mobile-poster.jpg')] bg-cover bg-center transition-opacity duration-700"
             style={{ opacity: isMobileVideoLoaded ? 0.3 : 1 }}
           />

           {/* High-Performance Native Mobile Video (Trimmed at 3s, Instant Playback) */}
           <video
             ref={mobileVideoRef}
             autoPlay
             loop
             muted
             playsInline
             preload="auto"
             poster="/Video-44267-mobile-poster.jpg"
             onLoadedData={() => setIsMobileVideoLoaded(true)}
             onCanPlay={() => setIsMobileVideoLoaded(true)}
             className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${
               isMobileVideoLoaded ? 'opacity-85' : 'opacity-85'
             }`}
           >
             <source src="/mobile-hero-fast.mp4" type="video/mp4" />
           </video>
           
           <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30"></div>
        </div>

        {/* =========================================
            DESKTOP LAYOUT (Full Bleed Background 16:9 Landscape from Turned Portrait)
            ========================================= */}
        <div className="hidden md:flex absolute inset-0 z-0 overflow-hidden bg-black items-center justify-center">
           {/* Placeholder Image */}
           <div 
             className="absolute inset-0 bg-[url('/205A4188.jpg')] bg-cover bg-center transition-opacity duration-[1.5s]"
             style={{ opacity: isDesktopVideoLoaded ? 0 : 0.7 }}
           />
           <iframe
              src="https://player.vimeo.com/video/1220420378?background=1&autoplay=1&loop=1&muted=1&quality=1080p"
              className={`absolute pointer-events-none top-1/2 left-1/2 w-[120vh] h-[120vw] min-w-[177.78vh] min-h-[177.78vw] transition-opacity duration-[1.5s] ${isDesktopVideoLoaded ? 'opacity-80' : 'opacity-0'}`}
              style={{
                border: "none",
                transform: "translate(-50%, -50%) rotate(-90deg) scale(1.4)"
              }}
              allow="autoplay; fullscreen; picture-in-picture"
              title="Westend Events Desktop Reel"
              onLoad={() => setIsDesktopVideoLoaded(true)}
           />
           {/* Gradient to ensure text readability */}
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent"></div>
        </div>
      
        {/* =========================================
            CONTENT (Overlay)
            ========================================= */}
        <div className="relative z-20 w-full md:max-w-4xl lg:max-w-5xl px-5 sm:px-8 md:px-12 lg:px-20 pt-16 sm:pt-20 md:pt-20 pb-6 text-white max-w-full">
          
          {/* Eyebrow */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] sm:text-[11px] md:text-[12px] font-mono tracking-[0.18em] uppercase text-[var(--color-brand-gold)] mb-2 block font-bold leading-normal"
          >
            LUXURY WEDDINGS • DESTINATION CELEBRATIONS • CORPORATE EXPERIENCES
          </motion.span>
          
          {/* Headline H1 (Sleek Desktop Font Scaling) */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-3 sm:mb-4 md:mb-5 leading-[1.18] sm:leading-[1.15] text-white tracking-tight"
          >
            We Don’t Just Plan Events. <br className="hidden sm:block"/>
            <span className="italic font-light text-[var(--color-brand-gold)]">We Own Every Detail.</span>
          </motion.h1>

          {/* Sub-headline Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-sans text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed mb-5 sm:mb-6 max-w-2xl text-gray-200"
          >
            From concept to final execution — décor, production, entertainment, hospitality and special effects, managed by one experienced team.
          </motion.p>

          {/* Dual CTAs: Plan Your Wedding & Plan a Corporate Event */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6"
          >
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  window.dispatchEvent(new CustomEvent("selectEventType", { detail: "wedding" }));
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-white transition-colors duration-300 px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase shadow-xl text-center rounded-xl cursor-pointer"
            >
              Plan Your Wedding
            </button>

            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                  window.dispatchEvent(new CustomEvent("selectEventType", { detail: "corporate" }));
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="border border-white/40 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-[#0E0A07] transition-colors duration-300 px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase text-center rounded-xl cursor-pointer"
            >
              Plan a Corporate Event
            </button>
          </motion.div>

          {/* Underneath Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-3 sm:pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[11px] sm:text-xs md:text-sm font-mono text-[var(--color-brand-gold)] text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
              <span className="text-white font-bold">500+ Events</span>
              <span className="text-white/40">•</span>
              <span className="text-white font-bold">100% In-House Production</span>
            </div>
            <span className="hidden sm:inline text-white/40">|</span>
            <div className="text-white/80">Lonavala • Pune • Mumbai • Goa • Across India</div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
