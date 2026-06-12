import { Metadata } from "next";
import { CollectionGallery } from "./CollectionGallery";

export const metadata: Metadata = {
  title: "The Collection | Westend Events",
  description: "Browse our curated collection of luxury destination weddings, premium decor, and high-end event production across India.",
  openGraph: {
    title: "The Collection | Westend Events",
    description: "Browse our curated collection of luxury destination weddings, premium decor, and high-end event production.",
    url: "https://www.westendevent.com/collection",
  },
  alternates: {
    canonical: "https://www.westendevent.com/collection"
  }
};

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-[120px] pb-24">
      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-16 md:mb-24 pt-12 md:pt-20 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)] mb-6 block">
          OUR PORTFOLIO
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-[#0E0A07] mb-6 leading-tight max-w-4xl mx-auto">
          The <span className="italic font-light">Collection</span>
        </h1>
        <p className="font-sans text-[16px] md:text-[18px] text-[#4A3E31] max-w-2xl mx-auto leading-relaxed">
          A curated glimpse into our world of luxury production. From intimate lakeside ceremonies to grand royal affairs, every detail is owned and executed by our in-house team.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto">
        <CollectionGallery />
      </div>
    </main>
  );
}
