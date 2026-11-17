import { SEOPageData } from "./seo/types";
import { tier1LonavalaPages } from "./seo/tier1-lonavala";
import { tier2PunePages } from "./seo/tier2-pune";
import { tier3KhandalaPages } from "./seo/tier3-khandala";
import { tier4KarjatPages } from "./seo/tier4-karjat";
import { tier5MahabaleshwarPages } from "./seo/tier5-mahabaleshwar";
import { tier6CoastalLakePages } from "./seo/tier6-coastal-lake";
import { locationHubPages } from "./seo/hubs";
import { tier7NashikPages } from "./seo/tier7-nashik";
import { tier8ExpansionPages } from "./seo/tier8-expansion";
import { tier9MicroservicePages } from "./seo/tier9-microservices";
import { tier10VenueSpecificPages } from "./seo/tier10-venue-specific";
import { tier11CeremonyMicroPages } from "./seo/tier11-ceremony-micro";
import { tier12CorporateVerticalPages } from "./seo/tier12-corporate-verticals";
import { tier13LuxuryThemePages } from "./seo/tier13-luxury-themes";
import { tier14PuneLocalityPages } from "./seo/tier14-pune-localities";
import { tier15DestinationRegionalPages } from "./seo/tier15-destination-regional";
import { tier16CelebrationPages } from "./seo/tier16-celebrations";
import { landingPages } from "./landing-pages";

export const allSEOPages: SEOPageData[] = [
  ...locationHubPages,
  ...tier1LonavalaPages,
  ...tier2PunePages,
  ...tier3KhandalaPages,
  ...tier4KarjatPages,
  ...tier5MahabaleshwarPages,
  ...tier6CoastalLakePages,
  ...tier7NashikPages,
  ...tier8ExpansionPages,
  ...tier9MicroservicePages,
  ...tier10VenueSpecificPages,
  ...tier11CeremonyMicroPages,
  ...tier12CorporateVerticalPages,
  ...tier13LuxuryThemePages,
  ...tier14PuneLocalityPages,
  ...tier15DestinationRegionalPages,
  ...tier16CelebrationPages,
  ...landingPages.map((page, index): SEOPageData => ({
    slug: page.slug,
    targetKeyword: `${page.service} ${page.location}`,
    secondaryKeywords: [page.service, page.location, "Westend Events"],
    pageType: "spoke",
    serviceCategory: page.service,
    location: page.location,
    metaTitle: page.title,
    metaDescription: page.metaDescription,
    canonicalUrl: `https://www.westendevent.com/${page.slug}`,
    h1: page.h1,
    heroBadge: `Local ${page.service} Planning in ${page.location}`,
    heroIntro: `${page.introParagraph1}\n\n${page.introParagraph2}`,
    quickMetrics: [
      { label: "Planning Support", value: "End-to-End" },
      { label: "Production", value: "In-House" },
      { label: "Service Area", value: page.location },
      { label: "Client Rating", value: "4.9/5" }
    ],
    localSummary: page.introParagraph1,
    distanceInfo: {
      fromMumbai: page.location === "Pune" ? "150 km" : page.location === "Alibaug" ? "120 km" : "Via Mumbai-Pune Expressway",
      fromPune: page.location === "Pune" ? "Within city" : "Road transfer from Pune",
      nearestTransit: `${page.location} Station or nearest major road access`
    },
    empanelledVenues: [
      { name: `${page.location} Resort Lawn`, type: "Resort Venue", highlight: `Outdoor or covered setup suited to ${page.service.toLowerCase()} with clear guest circulation.`, guestCapacity: "80 to 500 Guests" },
      { name: `${page.location} Premium Hotel`, type: "Hotel Venue", highlight: "Indoor-ready rooms, dining service and dedicated production access.", guestCapacity: "50 to 400 Guests" },
      { name: `${page.location} Private Estate`, type: "Private Venue", highlight: "Flexible layout for a tailored celebration or focused corporate agenda.", guestCapacity: "30 to 300 Guests" }
    ],
    serviceBreakdown: page.benefits.map((benefit, benefitIndex) => ({
      title: benefit,
      description: `${page.benefits[benefitIndex]} is delivered through a written scope, local venue coordination and accountable on-site management.`
    })),
    pricingPackages: [
      { name: "Essential Planning", startingPrice: "Custom quote", guestCount: "Scope dependent", deliverables: [page.benefits[0], "Venue coordination", "Production schedule"] },
      { name: "Complete Production", startingPrice: "Custom quote", guestCount: "Tailored to guest count", deliverables: page.benefits, isPopular: true }
    ],
    galleryImages: [
      { url: "/205A4188.jpg", alt: `${page.service} setup by Westend Events in ${page.location}`, category: "Production" },
      { url: "/205A6890.jpg", alt: `${page.location} ${page.service} decor and lighting`, category: "Decor" },
      { url: "/205A2130.jpg", alt: `Guests attending ${page.service.toLowerCase()} in ${page.location}`, category: "Guest Experience" }
    ],
    caseStudy: {
      headline: `A tailored ${page.service.toLowerCase()} in ${page.location}`,
      story: `The team planned the venue layout, production timeline and guest movement around the property and season, then managed the on-ground execution through final handover.`,
      testimonial: "Westend Events coordinated the complete experience with a highly organised on-site team.",
      guestCount: "Custom"
    },
    faqs: page.faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
    pillarSlug: "events",
    hubSlug: `${page.location.toLowerCase()}-westend-events`,
    nearbyLocationSlugs: page.nearbyLocations,
    relatedServiceSlugs: landingPages
      .filter((candidate) => candidate.location === page.location && candidate.slug !== page.slug)
      .slice(index % 4, (index % 4) + 3)
      .map((candidate) => candidate.slug)
  }))
];

export function getAllSEOPages(): SEOPageData[] {
  return allSEOPages;
}

export function getAllSEOSlugs(): string[] {
  return allSEOPages.map((page) => page.slug);
}

export function getSEOPageBySlug(slug: string): SEOPageData | undefined {
  return allSEOPages.find((page) => page.slug === slug);
}

export function getSEOPagesByLocation(location: string): SEOPageData[] {
  return allSEOPages.filter(
    (page) => page.location.toLowerCase() === location.toLowerCase()
  );
}

export function getSEOPagesByCategory(category: string): SEOPageData[] {
  return allSEOPages.filter((page) =>
    page.serviceCategory.toLowerCase().includes(category.toLowerCase())
  );
}
