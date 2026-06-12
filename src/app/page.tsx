import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesBentoGrid } from "@/components/sections/ServicesBentoGrid";
import { InHouseAdvantage } from "@/components/sections/InHouseAdvantage";
import { DestinationSpotlight } from "@/components/sections/DestinationSpotlight";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Westend Events | Luxury Wedding & Event Management in Lonavla, Pune, Goa & Rajasthan",
  description: "India's most trusted luxury event company based in Lonavla. Destination weddings for foreigners & NRIs, local luxury weddings, corporate events & concerts. 100% in-house production — décor, JBL VRX sound, special effects, anchors. Serving Lonavla, Mumbai, Pune, Goa, Udaipur, Jaipur & beyond.",
  alternates: {
    canonical: "https://www.westendevent.com",
  },
  openGraph: {
    title: "Westend Events | Luxury Wedding & Event Management in Lonavla, Pune, Goa & Rajasthan",
    description: "India's most trusted luxury event company based in Lonavla. Destination weddings for foreigners & NRIs, local luxury weddings, corporate events & concerts.",
    images: ["/205A4188.jpg"]
  }
};

const faqs = [
  {
    question: "How do foreigners plan a destination wedding in India?",
    answer: "Planning a destination wedding in India from abroad is seamless with Westendevents. We act as your single point of contact, handling venue shortlisting, guest logistics, full in-house décor, and on-ground coordination. You bring the vision, we execute everything remotely and on-site."
  },
  {
    question: "What is the best place for destination wedding near Mumbai?",
    answer: "Lonavla, Karjat, and Khopoli are the premier destinations near Mumbai. They offer lush resorts, misty hills, and beautiful farmhouses perfect for intimate to grand weddings, all within a 2-hour drive."
  },
  {
    question: "Does Westendevents provide in-house decoration and sound?",
    answer: "Yes, this is our biggest differentiator. We own our entire decoration inventory and original JBL VRX sound systems. We do not outsource, ensuring 100% quality control."
  },
  {
    question: "Can international couples get married in Lonavla or Goa?",
    answer: "Absolutely. We specialize in royal Indian ceremonies for international and NRI couples in both the scenic hills of Lonavla and the tropical beaches of Goa."
  }
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Westendevents",
    "description": "Luxury event management company based in Lonavla offering destination weddings, local weddings, corporate events, brand activations and concerts with 100% in-house production.",
    "areaServed": ["Lonavla", "Khopoli", "Karjat", "Pune", "Mumbai", "Igatpuri", "Mahabaleshwar", "Goa", "Udaipur", "Jaipur", "India"],
    "serviceType": ["Destination Wedding Planning", "Luxury Wedding Management", "Corporate Event Management", "Brand Activation", "Concert Production"],
    "hasOfferCatalog": ["In-house Decoration", "JBL VRX Sound System", "Special Effects", "Anchor and Artist Management"],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.7537",
      "longitude": "73.4068"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lonavla",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "telephone": "+919923590037",
    "priceRange": "₹₹₹₹",
    "openingHours": "Mo-Su 09:00-21:00"
  };

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.westendevent.com/"
      }
    ]
  };

  return (
    <div className="animate-in fade-in duration-[400ms]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <HeroSection />
      <StatsBar />
      <ServicesBentoGrid />
      <InHouseAdvantage />
      <DestinationSpotlight />
      <GalleryTeaser />
      <TestimonialsCarousel />
      <FAQSection faqs={faqs} />
      <ContactSection />
    </div>
  );
}
