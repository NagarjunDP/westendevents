"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function FloatingContact() {
  const pathname = usePathname();
  const [showOptions, setShowOptions] = useState(false);

  if (pathname?.startsWith("/westendevents-admin-portal") || pathname?.startsWith("/admin")) {
    return null;
  }
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-[#0E0A07]/95 border border-[var(--color-brand-gold)]/40 p-4 rounded-2xl shadow-2xl backdrop-blur-md text-xs text-[#FAF6EF] space-y-3 min-w-[240px]"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-gold)] border-b border-[#2E261D] pb-1.5 font-bold">
              Direct Contact & WhatsApp
            </div>

            <div className="space-y-2">
              <a
                href="https://wa.me/919923590037?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-emerald-400 fill-current" />
                  <span className="font-mono font-medium">+91 99235 90037</span>
                </div>
                <span className="text-[9px] uppercase font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">Chat</span>
              </a>

              <a
                href="https://wa.me/919923590038?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-emerald-400 fill-current" />
                  <span className="font-mono font-medium">+91 99235 90038</span>
                </div>
                <span className="text-[9px] uppercase font-bold bg-emerald-500/20 px-1.5 py-0.5 rounded">Chat</span>
              </a>
            </div>

            <div className="pt-1 border-t border-[#2E261D] flex justify-between text-[11px]">
              <a href="tel:+919923590037" className="text-[var(--color-brand-gold)] hover:underline flex items-center gap-1">
                <Phone size={12} /> <span>Call 37</span>
              </a>
              <a href="tel:+919923590038" className="text-[var(--color-brand-gold)] hover:underline flex items-center gap-1">
                <Phone size={12} /> <span>Call 38</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col items-center gap-3">
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          href="https://wa.me/919923590037?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle size={22} className="fill-current" />
        </motion.a>

        <button
          onClick={() => setShowOptions(!showOptions)}
          className="w-12 h-12 bg-[var(--color-brand-gold)] text-[#0E0A07] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(201,168,76,0.3)] hover:scale-110 transition-transform duration-300 font-bold"
          aria-label="Contact options"
        >
          <Phone size={20} className="fill-current" />
        </button>
      </div>
    </div>
  );
}

