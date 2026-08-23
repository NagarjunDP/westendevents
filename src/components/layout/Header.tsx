"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (pathname?.startsWith("/westendevents-admin-portal") || pathname?.startsWith("/admin")) {
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
    { name: "PORTFOLIO", href: "/collection" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b border-[#F48FB1]/30 bg-[#FCE4EC]/95 backdrop-blur-[20px] shadow-sm shadow-[#0E0A07]/5",
          isScrolled ? "h-[68px]" : "h-[80px]"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between relative">

          {/* Logo (Left side for all devices) */}
          <Link href="/" className="relative z-[60] flex items-center group">
            <img
              src="/logo.png"
              alt="Westend Events"
              className="h-[46px] lg:h-[54px] w-auto object-contain transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Mobile Centered Animated Text */}
          <Link href="/" className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] flex items-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0.8 }}
              animate={{
                opacity: [0.8, 1, 0.8],
                textShadow: ["0px 0px 4px rgba(201,168,76,0.3)", "0px 0px 14px rgba(201,168,76,0.8)", "0px 0px 4px rgba(201,168,76,0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif text-[16px] sm:text-[18px] font-medium tracking-[0.12em] whitespace-nowrap text-[#0E0A07]"
            >
              Westend<span className="italic font-light text-[var(--color-brand-gold)]">Events</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative font-sans text-[12px] xl:text-[13px] tracking-[0.18em] transition-colors duration-300 uppercase py-2 text-[#0E0A07] hover:text-[var(--color-brand-gold)] font-bold"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-brand-gold)] origin-center scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <a
              href="tel:+919923590038"
              className="font-sans text-[13px] font-bold tracking-wider transition-all duration-300 text-[#0E0A07] hover:text-[var(--color-brand-gold)] flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E0A07]/5 border border-[#0E0A07]/15 hover:border-[var(--color-brand-gold)]"
            >
              <Phone size={13} className="text-[#0E0A07] animate-pulse" />
              <span>+91 99235 90038</span>
            </a>

            <Link
              href="/#contact"
              className="border-2 border-[#0E0A07] text-[#0E0A07] hover:bg-[#0E0A07] hover:text-[#FAF6EF] px-5 py-2 font-sans text-[12px] tracking-[0.18em] uppercase transition-all duration-300 font-extrabold rounded-lg whitespace-nowrap shadow-sm"
            >
              Get a Proposal
            </Link>
          </div>

          {/* Mobile Hamburger (Animated) */}
          <button
            className="lg:hidden relative z-[60] flex flex-col justify-center items-end w-[32px] h-[32px] gap-[6px] group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={cn(
              "h-[2px] transition-all duration-400 origin-right bg-[#0E0A07]",
              isMobileMenuOpen ? "w-[32px] -rotate-45 translate-y-[1px]" : "w-full"
            )} />
            <span className={cn(
              "h-[2px] transition-all duration-400 bg-[#0E0A07]",
              isMobileMenuOpen ? "w-0 opacity-0" : "w-[60%]"
            )} />
            <span className={cn(
              "h-[2px] transition-all duration-400 origin-right bg-[#0E0A07]",
              isMobileMenuOpen ? "w-[32px] rotate-45 -translate-y-[1px]" : "w-full"
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
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[50] bg-[#FCE4EC]/98 backdrop-blur-2xl flex flex-col px-6 pt-24 pb-8 overflow-hidden text-[#0E0A07]"
          >
            <nav className="flex flex-col w-full gap-3 mt-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block py-2.5 font-serif text-[26px] leading-none text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors italic tracking-wide font-bold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-auto flex flex-col items-center gap-5 text-center pt-6 border-t border-[#F48FB1]/40"
            >
              <div className="flex items-center gap-5">
                <a href="https://instagram.com/westendevents" target="_blank" rel="noopener noreferrer" className="text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors p-2.5 border border-[#0E0A07]/20 rounded-full bg-white/60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="https://youtube.com/@westendevents3797" target="_blank" rel="noopener noreferrer" className="text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors p-2.5 border border-[#0E0A07]/20 rounded-full bg-white/60">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                </a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <a href="tel:+919923590038" className="font-sans text-[15px] font-extrabold tracking-widest text-[#0E0A07] hover:text-[var(--color-brand-gold)] transition-colors">
                  +91 99235 90038
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 border-2 border-[#0E0A07] text-[#0E0A07] hover:bg-[#0E0A07] hover:text-[#FAF6EF] bg-white/80 px-8 py-3.5 font-sans text-[12px] font-extrabold tracking-[0.2em] uppercase rounded-lg shadow-sm"
                >
                  Get a Proposal
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
