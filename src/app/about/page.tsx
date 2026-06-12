import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Westend Events",
  description: "Learn about Westend Events, a premier luxury destination wedding and event production company based in Lonavala.",
  alternates: {
    canonical: "https://www.westendevent.com/about"
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-[120px] pb-24 overflow-hidden">
      {/* Hero Header */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-16 md:mb-24 pt-12 md:pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] mb-6 block">
            WHO WE ARE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#0E0A07] mb-8 leading-tight">
            Crafting <span className="italic font-light text-[var(--color-brand-gold)]">Unforgettable</span> Memories.
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-[#4A3E31] max-w-2xl mx-auto leading-relaxed">
            Westend Events is a premier luxury event management and production house based in Lonavala. We specialize in curating bespoke destination weddings and high-end corporate events across India.
          </p>
        </div>
      </div>

      {/* Cinematic Image Break */}
      <div className="w-full h-[40vh] md:h-[60vh] relative mb-16 md:mb-24">
        <Image
          src="/205A4204.jpg"
          alt="Westend Events Production"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Core Ethos Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-5xl text-[#0E0A07] mb-6 leading-tight">
              The In-House <br/><span className="italic font-light">Advantage</span>
            </h2>
            <div className="w-12 h-[1px] bg-[var(--color-brand-gold)] mb-8" />
            <p className="font-sans text-[15px] text-[#4A3E31] leading-relaxed mb-6">
              Unlike traditional event planners who rely heavily on external vendors, we pride ourselves on owning our production. From our dedicated decoration team and original JBL VRX sound systems to special effects and ambient lighting, everything is managed directly by us.
            </p>
            <p className="font-sans text-[15px] text-[#4A3E31] leading-relaxed">
              This zero-outsource approach guarantees absolute quality control, flawless execution, and a truly seamless experience for you and your guests. When we commit to your vision, we own every detail.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
             <div className="relative w-full max-w-[400px] aspect-[4/5]">
               <Image
                 src="/_MP_2156.jpg"
                 alt="Event Details"
                 fill
                 className="object-cover shadow-2xl"
               />
               <div className="absolute -inset-4 border border-[var(--color-brand-gold)]/40 -z-10 translate-x-4 translate-y-4" />
             </div>
          </div>
        </div>
      </div>

      {/* Simple CTA */}
      <div className="mt-32 mb-12 text-center px-4">
        <h3 className="font-serif text-2xl md:text-4xl text-[#0E0A07] mb-8">Ready to start planning?</h3>
        <Link 
          href="/#contact"
          className="inline-flex items-center justify-center border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-[#0E0A07] transition-colors bg-transparent px-10 py-4 uppercase tracking-widest text-[12px] font-medium"
        >
          Contact Our Team
        </Link>
      </div>
    </main>
  );
}
