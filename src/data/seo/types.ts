export type PageType = "pillar" | "spoke" | "hub";

export type ServiceCategory =
  | "Wedding Planning"
  | "Destination Wedding Planning"
  | "Destination Wedding & Corporate Event Management"
  | "Wedding Decoration"
  | "Corporate Event Management"
  | "Conference & Offsite"
  | "Team Outing & Retreat"
  | "Product Launch"
  | "Celebration & Anniversary"
  | "Photography & Pre-Wedding"
  | "Sound & Production"
  | "Location Hub";

export type TargetLocation =
  | "Lonavala"
  | "Khandala"
  | "Pune"
  | "Karjat"
  | "Mahabaleshwar"
  | "Panchgani"
  | "Alibaug"
  | "Lavasa";

export interface LocalVenue {
  name: string;
  type: string;
  highlight: string;
  guestCapacity: string;
}

// Schema A: Used by tiers 1-5
export interface ServiceFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface PageImage {
  src: string;
  alt: string;
  caption: string;
}

export interface PricingPackageV1 {
  tierName: string;
  startingPrice: string;
  bestFor: string;
  inclusions: string[];
}

// Schema B: Used by tier 6 + hubs
export interface ServiceBreakdownItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export interface PricingPackage {
  name: string;
  startingPrice: string;
  guestCount: string;
  deliverables: string[];
  isPopular?: boolean;
}

// Shared
export interface TimelineStep {
  step: string;
  phase: string;
  duration: string;
  description: string;
}

export interface PageTestimonial {
  quote: string;
  clientName: string;
  clientRoleOrEvent: string;
  venueName: string;
  rating: number;
}

// FAQ can use either schema
export interface PageFAQ {
  question: string;
  answer?: string;          // Schema B (tier6 + hubs)
  directAnswer?: string;    // Schema A (tier1-5)
  detailedAnswer?: string;  // Schema A (tier1-5)
}

export interface RelatedLink {
  title: string;
  slug: string;
  description: string;
}

export interface SEOPageData {
  slug: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  pageType: PageType;
  serviceCategory: ServiceCategory | string;
  location: TargetLocation;

  // Meta tags
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;

  // Header & Hero
  h1: string;
  heroBadge: string;
  heroIntro: string;
  quickMetrics: {
    label: string;
    value: string;
  }[];

  // Local Trust Signals
  localSummary: string;
  distanceInfo: {
    fromMumbai: string;
    fromPune: string;
    nearestTransit: string;
  };
  empanelledVenues: LocalVenue[];

  // Deep Service Scope — Schema A (tiers 1-5)
  serviceTitle?: string;
  serviceDescription?: string;
  serviceFeatures?: ServiceFeature[];

  // Deep Service Scope — Schema B (tier6 + hubs)
  serviceBreakdown?: ServiceBreakdownItem[];

  // Gallery — Schema A (tiers 1-5)
  galleryTitle?: string;
  galleryIntro?: string;
  gallery?: PageImage[];

  // Gallery — Schema B (tier6 + hubs)
  galleryImages?: GalleryImage[];

  // Production Timeline (optional)
  timelineTitle?: string;
  timeline?: TimelineStep[];

  // Pricing — Schema A (tiers 1-5)
  pricingSignal?: {
    headline: string;
    description: string;
    packages: PricingPackageV1[];
    note: string;
  };

  // Pricing — Schema B (tier6 + hubs)
  pricingPackages?: PricingPackage[];

  // Social Proof & Case Study
  caseStudy: {
    headline?: string;
    story?: string;
    testimonial?: PageTestimonial | string;
    clientName?: string;
    venue?: string;
    guestCount?: string;
    challenge?: string;
    solution?: string;
  };

  // Structured FAQs
  faqs: PageFAQ[];

  // Interlinking Model
  pillarSlug?: string;
  hubSlug?: string;
  relatedServiceSlugs?: string[];
  nearbyLocationSlugs?: string[];
  relatedSlugs?: string[];
}
