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
  ...tier16CelebrationPages
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
