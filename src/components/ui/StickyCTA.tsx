"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <a
        href="tel:+910000000000"
        className="bg-white text-[var(--color-brand-maroon)] p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform flex items-center justify-center border border-gray-100"
        aria-label="Call Us"
      >
        <Phone fill="currentColor" size={24} />
      </a>
      
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-gold text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        {/* Simple inline SVG for WhatsApp icon to avoid extra dependencies for just one icon */}
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      </a>
    </div>
  );
}
