"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const destinations = [
  "Lonavala", "Pune", "Mumbai", "Udaipur", "Jaipur", 
  "Goa", "Mahabaleshwar", "Karjat", "Khopoli", "Igatpuri"
];

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/x-admin-portal") || pathname?.startsWith("/admin")) {
    return null;
  }
  return (
    <footer className="bg-[#0E0A07] text-[#FAF6EF] pt-16 pb-8 border-t-[4px] border-[var(--color-brand-gold)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Westend Events" className="h-14 w-auto object-contain" />
            </Link>
            <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
              Luxury destination wedding planners and event management company based in Lonavla, Maharashtra. We provide complete in-house decor, production, sound, and special effects.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/westendevents" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-brand-gold)] transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com/@westendevents3797" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-brand-gold)] transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-sans text-[13px] tracking-widest text-gray-300 uppercase">
              <li><Link href="/" className="hover:text-[var(--color-brand-gold)] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-gold)] transition-colors">Services</Link></li>
              <li><Link href="/collection" className="hover:text-[var(--color-brand-gold)] transition-colors">Collection</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-brand-gold)] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3 font-sans text-sm text-gray-300">
              <li><Link href="/services/decor" className="hover:text-[var(--color-brand-gold)] transition-colors">Wedding Decor</Link></li>
              <li><Link href="/services/sound-sfx" className="hover:text-[var(--color-brand-gold)] transition-colors">Sound & Special Effects</Link></li>
              <li><Link href="/services/anchors-artists" className="hover:text-[var(--color-brand-gold)] transition-colors">Anchors & Artists</Link></li>
              <li><Link href="/services/full-event-management" className="hover:text-[var(--color-brand-gold)] transition-colors">Full Event Management</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h4 className="font-serif text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300 w-full">
              <li className="flex items-start md:items-start justify-center md:justify-start gap-3 w-full">
                <MapPin size={20} className="text-[var(--color-brand-gold)] shrink-0 mt-1" />
                <span>Lonavala, Maharashtra, India</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 w-full">
                <Phone size={20} className="text-[var(--color-brand-gold)] shrink-0" />
                <a href="tel:+919923590037" className="hover:text-[var(--color-brand-gold)] transition-colors">+91 99235 90037</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 w-full">
                <Mail size={20} className="text-[var(--color-brand-gold)] shrink-0" />
                <a href="mailto:westendeventagarwal@gmail.com" className="hover:text-[var(--color-brand-gold)] transition-colors">westendeventagarwal@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Areas We Serve */}
        <div className="border-t border-gray-800 pt-8 pb-6 text-center">
          <h4 className="font-serif text-lg font-medium text-white mb-4">Areas We Serve</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-400 font-sans">
            {destinations.map((loc, i) => (
              <span key={loc} className="flex items-center">
                <Link href={`/destinations/${loc.toLowerCase()}`} className="hover:text-[var(--color-brand-gold)] transition-colors">
                  {loc}
                </Link>
                {i < destinations.length - 1 && <span className="mx-2 text-gray-700">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-sans text-center">
          <p>© {new Date().getFullYear()} Westend Events. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
