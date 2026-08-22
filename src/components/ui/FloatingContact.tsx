"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function FloatingContact() {
  const pathname = usePathname();

  if (pathname?.startsWith("/westendevents-admin-portal") || pathname?.startsWith("/admin")) {
    return null;
  }
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        href="https://wa.me/919923590037"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-[#0E0A07] shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={22} className="fill-current" />
      </motion.a>
      
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.1 }}
        href="tel:+919923590037"
        className="w-12 h-12 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center text-[#0E0A07] shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:scale-110 transition-transform duration-300"
        aria-label="Call Us"
      >
        <Phone size={20} className="fill-current" />
      </motion.a>
    </div>
  );
}
