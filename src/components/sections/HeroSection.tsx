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
           {/* Anchor Mic Photo Background */}
           <div 
             className="absolute inset-0 bg-[url('/205A4188.jpg')] bg-cover bg-center transition-opacity duration-700 opacity-80"
           />

           {/* High-Performance Native Mobile Video */}
           <video
             ref={mobileVideoRef}
             autoPlay
             loop
             muted
             playsInline
             preload="auto"
             poster="/205A4188.jpg"
             onLoadedData={() => setIsMobileVideoLoaded(true)}
             onCanPlay={() => setIsMobileVideoLoaded(true)}
             className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-700 ${
               isMobileVideoLoaded ? 'opacity-70' : 'opacity-70'
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
            className="text-[10px] sm:text-[11px] md:text-[12px] font-mono tracking-[0.2em] uppercase text-[var(--color-brand-gold)] mb-2 block font-bold leading-normal"
          >
            LUXURY WEDDINGS & CORPORATE EXPERIENCES
          </motion.span>
          
          {/* Headline H1 */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium mb-4 sm:mb-5 leading-tight text-white tracking-tight"
          >
            Unforgettable Celebrations
            <span className="italic font-light text-[var(--color-brand-gold)] font-serif text-base sm:text-2xl md:text-3xl block mt-2 leading-relaxed">
              "Flawless in-house production for extraordinary luxury events."
            </span>
          </motion.h1>

          {/* Sub-headline Paragraph (Shown on Tablet/Desktop for zero mobile clutter) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden sm:block font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed mb-6 max-w-3xl text-gray-200"
          >
            From destination weddings to corporate events, Westend Events delivers creative concepts, complete in-house production and seamless execution across India.
          </motion.p>

          {/* Dual CTAs: Plan Your Wedding & Plan a Corporate Event */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6 pt-1 sm:pt-0"
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
              className="bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-white transition-colors duration-300 px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.16em] uppercase shadow-xl text-center rounded-xl cursor-pointer"
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
              className="border border-white/40 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-[#0E0A07] transition-colors duration-300 px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.16em] uppercase text-center rounded-xl cursor-pointer"
            >
              Plan Your Corporate Event
            </button>
          </motion.div>

          {/* Underneath Capabilities Bar (Desktop & Tablet) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden sm:flex pt-4 border-t border-white/20 flex-wrap items-center justify-start gap-3 text-xs md:text-sm font-mono text-[var(--color-brand-gold)] font-medium"
          >
            <span>JBL VRX Sound Systems</span>
            <span className="text-white/40">|</span>
            <span>Technical AV</span>
            <span className="text-white/40">|</span>
            <span>LED Screens</span>
            <span className="text-white/40">|</span>
            <span>Special Entries</span>
            <span className="text-white/40">|</span>
            <span>SFX</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
