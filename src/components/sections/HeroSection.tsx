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
            className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-3 sm:mb-5 leading-tight text-white tracking-tight"
          >
            Unforgettable Celebrations, <br className="hidden sm:block"/>
            <span className="italic font-light text-[var(--color-brand-gold)] font-serif text-xl sm:text-3xl md:text-4xl block sm:inline mt-1 sm:mt-0">
              Flawlessly Executed.
            </span>
          </motion.h1>

          {/* Sub-headline Paragraph (Shown on Tablet/Desktop for zero mobile clutter) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="hidden sm:block font-sans text-sm md:text-base lg:text-lg font-light leading-relaxed mb-6 max-w-3xl text-gray-200"
          >
            From luxury destination weddings to large-scale corporate summits, Westend Events delivers complete in-house production and seamless execution across India.
          </motion.p>

          {/* Dual CTAs (Responsive for Mobile & Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 mb-4 sm:mb-6 pt-1 sm:pt-0"
          >
            {/* Desktop Button 1 / Mobile WhatsApp Us */}
            <a
              href="https://wa.me/919923590038?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden bg-[#25D366] text-white hover:bg-emerald-600 transition-colors duration-300 px-6 py-3 text-[11px] font-mono font-bold tracking-[0.16em] uppercase shadow-xl text-center rounded-xl flex items-center justify-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>

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
              className="hidden sm:inline-flex bg-[var(--color-brand-gold)] text-[#0E0A07] hover:bg-white transition-colors duration-300 px-7 py-3.5 text-[12px] font-mono font-bold tracking-[0.18em] uppercase shadow-xl text-center rounded-xl cursor-pointer"
            >
              Plan Your Wedding
            </button>

            {/* Mobile View Portfolio / Desktop Plan Corporate Event */}
            <a
              href="/gallery"
              className="sm:hidden border border-white/40 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-[#0E0A07] transition-colors duration-300 px-6 py-3 text-[11px] font-mono font-bold tracking-[0.16em] uppercase text-center rounded-xl cursor-pointer"
            >
              View Portfolio
            </a>

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
              className="hidden sm:inline-flex border border-white/40 bg-black/40 backdrop-blur-md text-white hover:bg-white hover:text-[#0E0A07] transition-colors duration-300 px-7 py-3.5 text-[12px] font-mono font-bold tracking-[0.18em] uppercase text-center rounded-xl cursor-pointer"
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
