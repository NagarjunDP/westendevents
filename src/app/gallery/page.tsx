import { Metadata } from "next";
import { BentoGallery } from "@/components/gallery/BentoGallery";
import { Camera, Award, ShieldCheck, Star } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

export const metadata: Metadata = {
  title: "Portfolio & Achievements Gallery | Westend Events Lonavla",
  description: "Explore our portfolio of luxury destination weddings, celebrity felicitations with Actor Kawaljit Singh & Hon'ble Goa CM Dr. Pramod Sawant, and turnkey production showcases.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FAF6EF] min-h-screen font-sans">

      {/* HERO BANNER */}
      <div className="relative py-16 md:py-24 bg-[#0E0A07] text-white overflow-hidden mb-12 border-b border-[var(--color-brand-gold)]/40">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/40 via-black to-black" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{ backgroundImage: `url('${getCdnUrl("/Video-44267-mobile-poster.jpg")}')` }}
        />

        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24 text-center">
          <span className="eyebrow inline-flex items-center gap-2 mb-4 text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 px-4 py-1.5 rounded-full border border-[var(--color-brand-gold)]/30 text-xs font-mono font-bold tracking-[0.2em] uppercase">
            <Star size={14} className="fill-current" />
            <span>PORTFOLIO, ACHIEVEMENTS & CELEBRITY HIGHLIGHTS</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium mb-6 leading-tight">
            Crafted for <span className="italic text-[var(--color-brand-gold)]">Extraordinary</span> Distinction
          </h1>
          <p className="font-sans text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our achievements, celebrity felicitations with veteran actor <strong>Kawaljit Singh</strong>, leadership presentations for <strong>Hon'ble Goa CM Dr. Pramod Sawant</strong>, and 100% in-house luxury wedding production.
          </p>

          {/* Quick Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs uppercase tracking-widest text-[var(--color-brand-gold)] font-semibold">
            <div className="flex items-center gap-2 bg-white/5 border border-[var(--color-brand-gold)]/30 px-4 py-2 rounded-full backdrop-blur-md">
              <Camera size={16} />
              <span>500+ Events Executed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-[var(--color-brand-gold)]/30 px-4 py-2 rounded-full backdrop-blur-md">
              <Award size={16} />
              <span>Celebrity & VIP Achievements</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-[var(--color-brand-gold)]/30 px-4 py-2 rounded-full backdrop-blur-md">
              <ShieldCheck size={16} />
              <span>100% In-House Production</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED CELEBRITY & VIP HIGHLIGHTS STRIP */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 mb-14">
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#17110A] via-[#231A10] to-[#17110A] border border-[var(--color-brand-gold)]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[var(--color-brand-gold)] shadow-xl shrink-0">
              <img 
                src={getCdnUrl("/kawaljitsingh.jpeg")} 
                alt="Actor Kawaljit Singh"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 px-2.5 py-0.5 rounded-full border border-[var(--color-brand-gold)]/30">
                <Star size={12} className="fill-current" />
                <span>CELEBRITY HIGHLIGHT</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                Felicitated by Veteran Actor Kawaljit Singh
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Recognized for outstanding event management & high-impact luxury production.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left lg:border-l lg:border-white/10 lg:pl-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[var(--color-brand-gold)] shadow-xl shrink-0">
              <img 
                src={getCdnUrl("/goacm.png")} 
                alt="Hon'ble Goa CM Dr. Pramod Sawant"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-brand-gold)] bg-[var(--color-brand-gold)]/10 px-2.5 py-0.5 rounded-full border border-[var(--color-brand-gold)]/30">
                <Award size={12} />
                <span>VIP & LEADERSHIP EVENT</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-bold">
                Presentation for Hon'ble Goa CM Dr. Pramod Sawant
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Felicitation & event execution showcase at The Westin Goa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BENTO GALLERY SECTION */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <BentoGallery isPage={true} />
      </div>

    </div>
  );
}
