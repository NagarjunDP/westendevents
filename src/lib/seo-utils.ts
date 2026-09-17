import { SEOPageData } from "../data/seo/types";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbsForPage(page: SEOPageData): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: "Home", url: "https://www.westendevent.com" }
  ];

  if (page.pageType === "hub") {
    items.push({
      name: `${page.location} Events`,
      url: `https://www.westendevent.com/${page.slug}`
    });
  } else {
    // Add location hub if available
    const locationSlug = page.location.toLowerCase().replace(/\s+/g, "-");
    items.push({
      name: `${page.location} Hub`,
      url: `https://www.westendevent.com/${locationSlug}`
    });
    items.push({
      name: page.targetKeyword,
      url: `https://www.westendevent.com/${page.slug}`
    });
  }

  return items;
}

export function buildPageSchemas(page: SEOPageData) {
  const breadcrumbs = getBreadcrumbsForPage(page);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventPlanner"],
    "name": `Westend Events - ${page.targetKeyword}`,
    "image": "https://www.westendevent.com/205A4188.jpg",
    "telephone": "+91 99235 90038",
    "email": "info@westendevent.com",
    "priceRange": "₹₹₹ - ₹₹₹₹",
    "url": `https://www.westendevent.com/${page.slug}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bhangarwadi",
      "addressLocality": "Lonavla",
      "addressRegion": "Maharashtra",
      "postalCode": "410401",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.7481",
      "longitude": "73.4056"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": page.location },
      { "@type": "City", "name": "Lonavla" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Khandala" },
      { "@type": "City", "name": "Karjat" },
      { "@type": "City", "name": "Mahabaleshwar" },
      { "@type": "City", "name": "Panchgani" },
      { "@type": "City", "name": "Alibaug" },
      { "@type": "City", "name": "Lavasa" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://instagram.com/westendevents",
      "https://youtube.com/@westendevents3797"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": (page.faqs ?? []).map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer ?? [faq.directAnswer, faq.detailedAnswer].filter(Boolean).join(" ")
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": page.targetKeyword,
    "serviceType": page.serviceCategory,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Westend Events",
      "telephone": "+91 99235 90038"
    },
    "areaServed": {
      "@type": "City",
      "name": page.location
    },
    "description": page.metaDescription
  };

  return {
    localBusinessSchema,
    breadcrumbSchema,
    faqSchema,
    serviceSchema
  };
}
