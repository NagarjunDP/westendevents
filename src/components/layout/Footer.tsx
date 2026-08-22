"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, Navigation } from "lucide-react";
import { usePathname } from "next/navigation";

const destinations = [
  "Lonavala", "Pune",
  "Goa", "Mahabaleshwar", "Karjat", "Khopoli", "Igatpuri", "Mumbai", "Udaipur", "Jaipur"
];

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/westendevents-admin-portal") || pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-[#0E0A07] text-[#FAF6EF] pt-16 pb-8 border-t-[4px] border-[var(--color-brand-gold)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Brand & About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Westend Events" className="h-14 w-auto object-contain" />
            </Link>
            <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6">
              Luxury destination wedding planners & event management company based in Lonavala and Pune. We provide complete 100% in-house decor, production, sound, and special effects.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/westendevents" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-brand-gold)] transition-colors">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com/@westendevents3797" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-brand-gold)] transition-colors">
                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold mb-6 text-white border-b border-[var(--color-brand-gold)]/40 pb-2 inline-block">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-sans text-[13px] tracking-widest text-gray-300 uppercase">
              <li><Link href="/" className="hover:text-[var(--color-brand-gold)] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[var(--color-brand-gold)] transition-colors">Services</Link></li>
              <li><Link href="/collection" className="hover:text-[var(--color-brand-gold)] transition-colors">Collection</Link></li>
              <li><Link href="/about" className="hover:text-[var(--color-brand-gold)] transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold mb-6 text-white border-b border-[var(--color-brand-gold)]/40 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3 font-sans text-sm text-gray-300">
              <li><Link href="/services/decor" className="hover:text-[var(--color-brand-gold)] transition-colors">Wedding Decor</Link></li>
              <li><Link href="/services/sound-sfx" className="hover:text-[var(--color-brand-gold)] transition-colors">Sound & Special Effects</Link></li>
              <li><Link href="/services/anchors-artists" className="hover:text-[var(--color-brand-gold)] transition-colors">Anchors & Artists</Link></li>
              <li><Link href="/services/full-event-management" className="hover:text-[var(--color-brand-gold)] transition-colors">Full Event Management</Link></li>
            </ul>
          </div>

          {/* Direct Lines & Email */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h4 className="font-serif text-lg font-semibold mb-6 text-white border-b border-[var(--color-brand-gold)]/40 pb-2 inline-block">Direct Contact</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-300 w-full">
              <li className="flex items-start justify-center md:justify-start gap-3 w-full">
                <Phone size={18} className="text-[var(--color-brand-gold)] shrink-0 mt-1" />
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+919923590037" className="hover:text-[var(--color-brand-gold)] transition-colors font-medium">+91 99235 90037</a>
                  <a href="tel:+919923590038" className="hover:text-[var(--color-brand-gold)] transition-colors font-medium">+91 99235 90038</a>
                </div>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 w-full">
                <Mail size={18} className="text-[var(--color-brand-gold)] shrink-0 mt-1" />
                <div className="flex flex-col gap-0.5">
                  <a href="mailto:info@westendevent.com" className="hover:text-[var(--color-brand-gold)] transition-colors font-medium">info@westendevent.com</a>
                  <a href="mailto:westendeventagarwal@gmail.com" className="hover:text-[var(--color-brand-gold)] transition-colors font-medium">westendeventagarwal@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Dual Business Location Maps Section */}
        <div className="border-t border-gray-800 pt-10 pb-12">
          <div className="text-center mb-8">
            <span className="text-[11px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-2">
              OUR OFFICE & STUDIO LOCATIONS
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold">
              Visit Our Lonavala & Pune Locations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Location 1: Lonavala */}
            <div className="bg-[#140F0A] border border-[var(--color-brand-gold)]/30 p-4 sm:p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[var(--color-brand-gold)] transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--color-brand-gold)] font-serif font-bold text-lg">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Lonavala Office & Studio</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-7">
                  Westend Events, Bhangarwadi, Lonavala, Maharashtra 410401, India
                </p>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-[#2E261D] bg-[#070504]">
                <iframe
                  title="Westend Events Lonavala Location"
                  src="https://maps.google.com/maps?q=Westend+Events,+Bhangarwadi,+Lonavala,+Maharashtra+410401,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 rounded-xl"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Bhangarwadi+Lonavala+Maharashtra+410401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#1F1710] border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-xs font-mono font-bold hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Lonavala Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Location 2: Pune */}
            <div className="bg-[#140F0A] border border-[var(--color-brand-gold)]/30 p-4 sm:p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[var(--color-brand-gold)] transition-colors">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[var(--color-brand-gold)] font-serif font-bold text-lg">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Pune Office & Warehouse</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-7">
                  Westend Events, Gate No 754, Balghare Vasti Rd, Kudalwadi, Chikhali, Pimpri-Chinchwad, Maharashtra 411062, India
                </p>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-[#2E261D] bg-[#070504]">
                <iframe
                  title="Westend Events Pune Location"
                  src="https://maps.google.com/maps?q=Westend+Events,+Gate+No+754,+Balghare+Vasti+Rd,+Kudalwadi,+Chikhali,+Pimpri-Chinchwad,+Maharashtra+411062,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 rounded-xl"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Gate+No+754+Balghare+Vasti+Rd+Kudalwadi+Chikhali+Pimpri+Chinchwad+Maharashtra+411062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#1F1710] border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-xs font-mono font-bold hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Pune Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>

        {/* Areas We Serve */}
        <div className="border-t border-gray-800 pt-8 pb-6 text-center">
          <h4 className="font-serif text-base font-medium text-white mb-4">Areas We Serve</h4>
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
