import { Metadata } from "next";
import { BentoGallery } from "@/components/gallery/BentoGallery";
import { Sparkles, Camera, Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Luxury Gallery | Westend Events Lonavla",
  description: "Explore our portfolio of luxury destination weddings, palace galas, JBL sound concerts, and special effects showcases across Lonavla, Goa, Udaipur & Mumbai.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-24 bg-[#FAF6EF] min-h-screen">
      
      {/* HERO BANNER */}
      <div className="relative py-16 md:py-24 bg-[#0E0A07] text-white overflow-hidden mb-12">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/30 via-black to-black" />
        <div className="absolute inset-0 bg-[url('/Video-44267-mobile-poster.jpg')] bg-cover bg-center opacity-20" />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24 text-center">
          <span className="eyebrow block mb-4 text-[var(--color-brand-gold)]">
            PORTFOLIO & CELEBRATION SHOWCASE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium mb-6 leading-tight">
            Crafted for <span className="italic text-[var(--color-brand-gold)]">Extraordinary</span> Memories
          </h1>
          <p className="font-sans text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From majestic palace weddings in Udaipur to beachside mandaps in Goa and grand corporate galas in Mumbai — explore our 100% in-house decor, JBL VRX sound, and special effects portfolio.
          </p>

          {/* Quick Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-[var(--color-brand-gold)] font-semibold">
            <div className="flex items-center gap-2 bg-white/5 border border-[var(--color-brand-gold)]/20 px-4 py-2 rounded-full">
              <Camera size={16} />
              <span>500+ Events Executed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-[var(--color-brand-gold)]/20 px-4 py-2 rounded-full">
              <Award size={16} />
              <span>100% In-House Production</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-[var(--color-brand-gold)]/20 px-4 py-2 rounded-full">
              <ShieldCheck size={16} />
              <span>Turnkey Event Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* BENTO GALLERY SECTION */}
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <BentoGallery isPage={true} />
      </div>

    </div>
  );
}
