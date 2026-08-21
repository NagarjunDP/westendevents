"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileVideoLoaded, setIsMobileVideoLoaded] = useState(false);
  const [isDesktopVideoLoaded, setIsDesktopVideoLoaded] = useState(false);

  return (
    <>
      <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-black overflow-hidden flex flex-col justify-end md:justify-center">
        
        {/* =========================================
            MOBILE LAYOUT (Full Bleed Background 9:16)
            ========================================= */}
        <div className="absolute inset-0 md:hidden z-0 overflow-hidden bg-black flex items-center justify-center">
           {/* Fast-loading Poster Image */}
           <div 
             className="absolute inset-0 bg-[url('/Video-44267-mobile-poster.jpg')] bg-cover bg-center transition-opacity duration-1000"
             style={{ opacity: isMobileVideoLoaded ? 0.3 : 1 }}
           />

           {/* High-Performance CDN Video Background */}
           <iframe 
             src="https://player.vimeo.com/video/1200799664?background=1&autoplay=1&loop=1&muted=1&quality=1080p"
             className={`absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[100vh] min-w-[100vw] min-h-[56.25vw] transition-opacity duration-1000 ${
               isMobileVideoLoaded ? 'opacity-85' : 'opacity-0'
             }`}
             allow="autoplay; fullscreen; picture-in-picture"
             frameBorder="0"
             onLoad={() => setIsMobileVideoLoaded(true)}
           ></iframe>
           
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        </div>

        {/* =========================================
            DESKTOP LAYOUT (Full Bleed Background 4:3)
            ========================================= */}
        <div className="hidden md:flex absolute inset-0 z-0 overflow-hidden bg-black items-center justify-center">
           {/* Placeholder Image */}
           <div 
             className="absolute inset-0 bg-[url('/205A4188.jpg')] bg-cover bg-center transition-opacity duration-[1.5s]"
             style={{ opacity: isDesktopVideoLoaded ? 0 : 0.7 }}
           />
           <iframe
              src="https://player.vimeo.com/video/1200799664?background=1&autoplay=1&loop=1&muted=1&quality=1080p"
              className={`absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[75vw] min-h-[100vh] min-w-[133.33vh] transition-opacity duration-[1.5s] ${isDesktopVideoLoaded ? 'opacity-70' : 'opacity-0'}`}
              style={{border:"none"}}
              allow="autoplay; fullscreen; picture-in-picture"
              title="Westendevents Desktop Reel"
              onLoad={() => setIsDesktopVideoLoaded(true)}
           >
           </iframe>
           {/* Gradient to ensure text readability */}
           <div className="absolute inset-0 bg-black/30"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
      
        {/* =========================================
            CONTENT (Overlay)
            ========================================= */}
        <div className="relative z-20 w-full md:max-w-4xl px-6 md:px-12 lg:px-24 pb-24 md:pb-0 text-white">
          
          {/* Eyebrow */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow mb-6 md:mb-8 block text-white/80"
          >
            <span className="md:hidden">Destination Weddings</span>
            <span className="hidden md:inline">Luxury Production</span>
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-6 md:mb-8 leading-[1.1] text-white"
          >
            Unforgettable <br className="hidden lg:block"/> Celebrations
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-sans text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg text-gray-200"
          >
            Flawless in-house production for extraordinary luxury weddings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="/gallery"
              className="group relative inline-flex items-center justify-center px-8 py-4 w-fit text-[12px] font-semibold tracking-[0.2em] uppercase overflow-hidden border border-white/40 bg-black/20 backdrop-blur-md transition-colors"
            >
              {/* Liquid Wave Animation Background */}
              <span className="absolute left-1/2 top-[120%] w-[300px] h-[300px] -translate-x-1/2 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:top-[-50%] pointer-events-none">
                <span className="absolute inset-0 bg-white rounded-[43%] animate-[spin_5s_linear_infinite]" />
                <span className="absolute inset-0 bg-white/60 rounded-[40%] animate-[spin_7s_linear_infinite_reverse]" />
              </span>

              <span className="relative z-10 text-white group-hover:text-[#0E0A07] transition-colors duration-700 flex items-center gap-3">
                View Our Work
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
