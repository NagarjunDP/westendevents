"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname?.startsWith("/x-admin-portal") || pathname?.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "GALLERY", href: "/gallery" },
    { name: "COLLECTION", href: "/collection" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b border-transparent",
          isScrolled
            ? "bg-[#FCE4EC]/95 backdrop-blur-[20px] h-[64px] shadow-sm shadow-[#0E0A07]/5"
            : "bg-transparent h-[80px]"
        )}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between relative">

          {/* Logo (Left side for all devices) */}
          <Link href="/" className="relative z-[60] flex items-center">
            <img
              src="/logo.png"
              alt="Westend Events"
              className="h-[48px] lg:h-[56px] w-auto object-contain transition-all duration-500 hover:scale-105"
            />
          </Link>

          {/* Mobile Centered Animated Text */}
          <Link href="/" className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: [0.7, 1, 0.7],
                textShadow: ["0px 0px 4px rgba(201,168,76,0.3)", "0px 0px 12px rgba(201,168,76,0.8)", "0px 0px 4px rgba(201,168,76,0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "font-serif text-[15px] sm:text-[18px] font-medium tracking-[0.1em] whitespace-nowrap transition-colors duration-500",
                isScrolled ? "text-[#0E0A07]" : "text-[var(--color-brand-gold)]"
              )}
            >
              Westend<span className="italic font-light">Events</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group relative font-sans text-[11px] tracking-[0.25em] transition-colors duration-300 uppercase py-2",
                  isScrolled ? "text-[#0E0A07] hover:text-[var(--color-brand-gold)]" : "text-[var(--color-cream-muted)] hover:text-[var(--color-brand-gold)]"
                )}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-brand-gold)] origin-center scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+919923590037" className={cn(
              "font-sans text-[12px] tracking-wider transition-colors",
              isScrolled ? "text-[#0E0A07] hover:text-[var(--color-brand-gold)]" : "text-[var(--color-brand-gold)] hover:text-white"
            )}>
              +91 99235 90037
            </a>
            <Link href="/#contact" className={cn(
              "border px-6 py-2.5 font-sans text-[11px] tracking-[0.2em] uppercase transition-all duration-300",
              isScrolled
                ? "border-[#0E0A07] text-[#0E0A07] hover:bg-[#0E0A07] hover:text-[#FDF6F5]"
                : "border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07]"
            )}>
              Plan Your Event
            </Link>
          </div>

          {/* Mobile Hamburger (Animated) */}
          <button
            className="lg:hidden relative z-[60] flex flex-col justify-center items-end w-[32px] h-[32px] gap-[6px] group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={cn(
              "h-[2px] transition-all duration-400 origin-right",
              isMobileMenuOpen ? "w-[32px] -rotate-45 translate-y-[1px] bg-[#0E0A07]" : isScrolled ? "w-full bg-[#0E0A07]" : "w-full bg-[var(--color-brand-gold)]"
            )} />
            <span className={cn(
              "h-[2px] transition-all duration-400",
              isMobileMenuOpen ? "w-0 opacity-0 bg-[#0E0A07]" : isScrolled ? "w-[60%] bg-[#0E0A07]" : "w-[60%] bg-[var(--color-brand-gold)]"
            )} />
            <span className={cn(
              "h-[2px] transition-all duration-400 origin-right",
              isMobileMenuOpen ? "w-[32px] rotate-45 -translate-y-[1px] bg-[#0E0A07]" : isScrolled ? "w-full bg-[#0E0A07]" : "w-full bg-[var(--color-brand-gold)]"
            )} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[50] bg-[#FDFBF7] flex flex-col px-6 pt-24 pb-8 overflow-hidden"
          >
            <nav className="flex flex-col w-full gap-2 mt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block py-2 font-serif text-[24px] leading-none text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors italic tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto flex flex-col items-center gap-6 text-center pt-6"
            >
              <div className="flex items-center gap-6">
                <a href="https://instagram.com/westendevents" target="_blank" rel="noopener noreferrer" className="text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors p-2 border border-[#0E0A07]/20 rounded-full hover:border-[var(--color-brand-gold)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="https://youtube.com/@westendevents3797" target="_blank" rel="noopener noreferrer" className="text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors p-2 border border-[#0E0A07]/20 rounded-full hover:border-[var(--color-brand-gold)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                </a>
              </div>

              <div className="flex flex-col items-center gap-3">
                <a href="tel:+919923590037" className="font-sans text-[15px] tracking-widest text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors">
                  +91 99235 90037
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[var(--color-brand-gold)] text-[#0E0A07] px-8 py-3 font-sans text-[12px] font-semibold tracking-[0.2em] uppercase hover:bg-[#0E0A07] hover:text-white transition-all duration-300 shadow-md"
                >
                  Plan Your Event
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
