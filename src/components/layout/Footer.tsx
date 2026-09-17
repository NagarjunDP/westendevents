"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ExternalLink, Navigation } from "lucide-react";
import { usePathname } from "next/navigation";

const destinations = [
  "Lonavla", "Pune",
  "Goa", "Mahabaleshwar", "Karjat", "Khopoli", "Igatpuri", "Mumbai", "Udaipur", "Jaipur"
];

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/westendevents-admin-portal") || pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="relative bg-[#070503] text-[#FAF6EF] pt-14 pb-8 overflow-hidden font-sans border-t border-[var(--color-brand-gold)]/50">

      {/* Background Subtle Radial Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--color-brand-gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top VIP Call-to-Action Luxury Banner */}
        <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#17110A] via-[#1F170E] to-[#17110A] border border-[var(--color-brand-gold)]/40 shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-gold)]/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[var(--color-brand-gold)]/20 transition-all duration-700 pointer-events-none" />

          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/30 text-[var(--color-brand-gold)] font-mono text-[10px] uppercase font-bold tracking-widest">
              <span>INDIA'S PREMIER LUXURY PRODUCTION</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Plan Your <span className="text-[var(--color-brand-gold)] italic font-light">Extraordinary Event?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl">
              100% In-House Decor, Original JBL VRX Sound Systems, SFX & Full Production. Based in Lonavla & Pune.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <Link
              href="/#contact"
              className="px-7 py-3.5 rounded-full bg-[var(--color-brand-gold)] text-[#0E0A07] font-bold text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:shadow-[0_0_25px_rgba(201,168,76,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap shadow-md"
            >
              Get A Proposal →
            </Link>
          </div>
        </div>

        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Column 1: Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <img src="/logo.png" alt="Westend Events" className="h-14 w-auto object-contain drop-shadow-[0_4px_12px_rgba(201,168,76,0.2)]" />
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed max-w-xs font-light">
              India's premier luxury event management & in-house production company based in Lonavla and Pune. Specializing in destination weddings, corporate summits & concerts.
            </p>

            {/* Social Links Badges */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/westendevents"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-brand-gold)]/40 bg-[#16100A] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg group"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>

              <a
                href="https://youtube.com/@westendevents3797"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-brand-gold)]/40 bg-[#16100A] text-[var(--color-brand-gold)] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg group"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>

              <a
                href="https://wa.me/919923590038?text=Hello%20Westend%20Events!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg group"
                title="WhatsApp Chat"
                >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.708 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] font-bold mb-5 text-[var(--color-brand-gold)] border-b border-[var(--color-brand-gold)]/30 pb-1.5 inline-block">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs tracking-widest text-gray-300 uppercase">
              <li>
                <Link href="/" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services?tab=weddings" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Weddings</span>
                </Link>
              </li>
              <li>
                <Link href="/services?tab=corporate" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Corporate Events</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-1.5 group">
                  <span className="text-[var(--color-brand-gold)] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: In-House Services */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] font-bold mb-5 text-[var(--color-brand-gold)] border-b border-[var(--color-brand-gold)]/30 pb-1.5 inline-block">
              In-House Services
            </h4>
            <ul className="space-y-3 font-sans text-xs text-gray-300">
              <li>
                <Link href="/services/decor" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                  <span>Luxury Wedding Decor</span>
                </Link>
              </li>
              <li>
                <Link href="/services/sound-sfx" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                  <span>JBL VRX Sound & Stage AV</span>
                </Link>
              </li>
              <li>
                <Link href="/services/sound-sfx" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                  <span>Special Entries & Pyros (SFX)</span>
                </Link>
              </li>
              <li>
                <Link href="/services/anchors-artists" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                  <span>Entertainment & Artists</span>
                </Link>
              </li>
              <li>
                <Link href="/services/full-event-management" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)]" />
                  <span>Full Event Management</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Concierge Contact Card */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] font-bold mb-5 text-[var(--color-brand-gold)] border-b border-[var(--color-brand-gold)]/30 pb-1.5 inline-block">
              24/7 VIP Direct Lines
            </h4>

            <div className="w-full bg-[#120D08] border border-[var(--color-brand-gold)]/30 p-5 rounded-2xl space-y-4 shadow-xl">

              <div className="flex items-start gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/40 flex items-center justify-center shrink-0 text-[var(--color-brand-gold)]">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#A8937D] font-semibold block">Phone Call</span>
                  <a href="tel:+919923590038" className="text-sm font-bold text-white hover:text-[var(--color-brand-gold)] transition-colors">
                    +91 99235 90038
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left pt-2 border-t border-[#241A11]">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand-gold)]/15 border border-[var(--color-brand-gold)]/40 flex items-center justify-center shrink-0 text-[var(--color-brand-gold)]">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#A8937D] font-semibold block">Email Support</span>
                  <a href="mailto:westendagarwal@gmail.com" className="text-xs text-gray-200 hover:text-[var(--color-brand-gold)] transition-colors block font-medium">
                    westendagarwal@gmail.com
                  </a>
                  <div className="h-[1px] w-8 bg-[var(--color-brand-gold)]/20 my-1" />
                  <a href="mailto:info@westendevent.com" className="text-xs text-gray-200 hover:text-[var(--color-brand-gold)] transition-colors block font-medium">
                    info@westendevent.com
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Dual Business Location Maps Section */}
        <div className="border-t border-[#1C150E] pt-10 pb-10">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] font-bold block mb-1">
              OFFICE & STUDIO INFRASTRUCTURE
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold">
              Empanelled Locations & Warehouses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Location 1: Lonavla */}
            <div className="bg-[#120D09] border border-[var(--color-brand-gold)]/30 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[var(--color-brand-gold)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--color-brand-gold)] font-serif font-bold text-base">
                  <MapPin className="w-4 h-4 shrink-0 text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform" />
                  <span>Lonavla Office & Decor Studio</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pl-6 font-light">
                  Westend Events, Bhangarwadi, Lonavla, Maharashtra 410401, India
                </p>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[#2B2117] bg-[#070504]">
                <iframe
                  title="Westend Events Lonavla Location"
                  src="https://maps.google.com/maps?q=Westend+Events,+Bhangarwadi,+Lonavla,+Maharashtra+410401,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 rounded-xl"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Bhangarwadi+Lonavla+Maharashtra+410401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1D150E] border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] transition-all duration-300 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Bhangarwadi+Lonavla+Maharashtra+410401"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#4285F4]/15 border border-[#4285F4]/40 text-[#4285F4] hover:bg-[#4285F4] hover:text-white text-[11px] font-mono font-bold transition-all duration-300 shadow-sm"
                >
                  <span>Google Business Profile ⭐</span>
                </a>
              </div>
            </div>

            {/* Location 2: Pune */}
            <div className="bg-[#120D09] border border-[var(--color-brand-gold)]/30 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[var(--color-brand-gold)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] group">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[var(--color-brand-gold)] font-serif font-bold text-base">
                  <MapPin className="w-4 h-4 shrink-0 text-[var(--color-brand-gold)] group-hover:scale-110 transition-transform" />
                  <span>Pune Central Office & Production Warehouse</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pl-6 font-light">
                  Westend Events, Gate No 754, Balghare Vasti Rd, Kudalwadi, Chikhali, Pune 411062, India
                </p>
              </div>

              {/* Map Embed Frame */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[#2B2117] bg-[#070504]">
                <iframe
                  title="Westend Events Pune Location"
                  src="https://maps.google.com/maps?q=Westend+Events,+Gate+No+754,+Balghare+Vasti+Rd,+Kudalwadi,+Chikhali,+Pimpri-Chinchwad,+Maharashtra+411062,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 rounded-xl"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Gate+No+754+Balghare+Vasti+Rd+Kudalwadi+Chikhali+Pimpri+Chinchwad+Maharashtra+411062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1D150E] border border-[var(--color-brand-gold)]/40 text-[var(--color-brand-gold)] text-[11px] font-mono font-bold hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] transition-all duration-300 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Westend+Events+Gate+No+754+Balghare+Vasti+Rd+Kudalwadi+Chikhali+Pimpri+Chinchwad+Maharashtra+411062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#4285F4]/15 border border-[#4285F4]/40 text-[#4285F4] hover:bg-[#4285F4] hover:text-white text-[11px] font-mono font-bold transition-all duration-300 shadow-sm"
                >
                  <span>Google Business Profile ⭐</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Areas We Serve Marquee/Grid */}
        <div className="border-t border-[#1C150E] pt-8 pb-6 text-center">
          <span className="text-[10px] font-mono text-[#A8937D] uppercase tracking-[0.25em] block mb-3 font-semibold">
            KEY EVENT DESTINATIONS
          </span>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-gray-300 font-sans mb-6">
            {destinations.map((loc, i) => (
              <span key={loc} className="flex items-center">
                <Link href={`/destinations/${loc.toLowerCase()}`} className="hover:text-[var(--color-brand-gold)] transition-colors font-medium">
                  {loc}
                </Link>
                {i < destinations.length - 1 && <span className="mx-2 text-[var(--color-brand-gold)]/40">•</span>}
              </span>
            ))}
          </div>

          {/* Featured Programmatic Event Guides */}
          <span className="text-[10px] font-mono text-[var(--color-brand-gold)] uppercase tracking-[0.25em] block mb-3 font-semibold">
            FEATURED DESTINATION & CORPORATE GUIDES
          </span>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-[11px] text-gray-400 font-sans max-w-5xl mx-auto">
            <Link href="/wedding-planner-lonavala" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Wedding Planner Lonavala
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/corporate-event-planner-pune" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Corporate Events Pune
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/wedding-planner-khandala" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Wedding Planner Khandala
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/wedding-planner-karjat" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Farmhouse Weddings Karjat
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/wedding-planner-mahabaleshwar" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Highland Weddings Mahabaleshwar
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/wedding-planner-panchgani" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Wedding Planner Panchgani
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/wedding-planner-alibaug" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Beach & Villa Weddings Alibaug
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/wedding-planner-lavasa" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Lakefront Weddings Lavasa
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/corporate-offsite-lonavala" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Corporate Offsites Lonavala
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/destination-wedding-pune" className="hover:text-[var(--color-brand-gold)] transition-colors">
              Destination Wedding Pune
            </Link>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-[#1C150E] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-sans text-center">
          <p>© {new Date().getFullYear()} <span className="text-white font-semibold">Westend Events</span>. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[var(--color-brand-gold)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-brand-gold)] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
