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
    <>
      {/* Floating WhatsApp & Call Buttons (Positioned above sticky bar on mobile) */}
      <div className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 font-sans">
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              className="bg-[#0E0A07]/95 border border-[var(--color-brand-gold)]/40 p-4 rounded-2xl shadow-2xl backdrop-blur-md text-xs text-[#FAF6EF] space-y-3 min-w-[250px]"
            >
              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand-gold)] border-b border-[#2E261D] pb-1.5 font-bold flex items-center justify-between">
                <span>Direct WhatsApp & Call</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="space-y-2">
                <a
                  href="https://wa.me/919923590038?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="font-mono font-bold text-xs tracking-wide">+91 99235 90038</span>
                  </div>
                  <span className="text-[9px] uppercase font-mono font-bold bg-[#25D366]/20 px-2 py-0.5 rounded-md">Chat</span>
                </a>
              </div>

              <div className="pt-1 border-t border-[#2E261D] flex justify-center text-[11px]">
                <a href="tel:+919923590038" className="text-[var(--color-brand-gold)] hover:underline flex items-center gap-1.5 font-bold">
                  <Phone size={13} /> <span>Call Direct (+91 99235 90038)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col items-center gap-3">
          {/* Sticky WhatsApp Floating Button */}
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            href="https://wa.me/919923590038?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer border-2 border-white/20"
            aria-label="WhatsApp Chat"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="hidden sm:block absolute right-14 bg-[#0E0A07] text-[#FAF6EF] border border-[#25D366]/50 text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
              Chat on WhatsApp
            </span>
          </motion.a>

          {/* Quick Contact Toggle */}
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="w-12 h-12 bg-[#0E0A07] text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/40 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 font-bold"
            aria-label="Contact options"
          >
            <Phone size={18} />
          </button>
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar (Call | WhatsApp | Enquire) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0E0A07]/95 border-t border-[var(--color-brand-gold)]/40 backdrop-blur-xl px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <a
          href="tel:+919923590038"
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#1D150E] border border-[var(--color-brand-gold)]/30 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold flex items-center justify-center gap-1.5 uppercase"
        >
          <Phone size={13} />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/919923590038?text=Hello%20Westend%20Events!%20I%20would%20like%20to%20enquire%20about%20event%20management."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-[11px] font-mono font-bold flex items-center justify-center gap-1.5 uppercase shadow-md"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        <a
          href="/#contact"
          className="flex-1 py-2.5 px-3 rounded-lg bg-[var(--color-brand-gold)] text-[#0E0A07] text-[11px] font-mono font-bold flex items-center justify-center uppercase shadow-md"
        >
          <span>Enquire</span>
        </a>
      </div>
    </>
  );
}

