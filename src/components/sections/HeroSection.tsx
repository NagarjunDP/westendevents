"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Autoplay prevented:", err);
        });
      }
    }
  }, []);

  return (
    <>
      <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-black overflow-hidden flex flex-col justify-end md:justify-center">
        
        {/* =========================================
            FULL-BLEED HIGH-PERFORMANCE VIDEO BACKGROUND
            ========================================= */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black flex items-center justify-center">
           {/* Fallback Poster Background */}
           <div 
             className="absolute inset-0 bg-[url('/Video-44267-mobile-poster.jpg')] bg-cover bg-center opacity-30"
           />

           {/* Direct HTML5 Video Background */}
           <video
             ref={videoRef}
             autoPlay
             loop
             muted
             playsInline
             preload="auto"
             poster="/Video-44267-mobile-poster.jpg"
             className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-80"
           >
             <source src="/Video-44267-mobile-opt.mp4" type="video/mp4" />
           </video>

           {/* Readability Gradients */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
           <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
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
