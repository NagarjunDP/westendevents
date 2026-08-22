export function LocalBusinessSchema({ location = "Lonavla, Maharashtra" }: { location?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EventVenue"],
    "name": "Westend Events",
    "description": `Luxury destination wedding planners and event management company in ${location}.`,
    "url": "https://www.westendevent.com",
    "logo": "https://www.westendevent.com/logo.png",
    "telephone": "+91 99235 90038",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lonavla",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.7481",
      "longitude": "73.4056"
    },
    "areaServed": [
      { "@type": "City", "name": "Lonavla" },
      { "@type": "City", "name": "Khopoli" },
      { "@type": "City", "name": "Karjat" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Mahabaleshwar" },
      { "@type": "City", "name": "Igatpuri" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Goa" }
    ],
    "sameAs": [
      "https://instagram.com/westendevents",
      "https://youtube.com/@westendevents3797"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbListSchema({ items }: { items: { name: string; item: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.westendevent.com${item.item}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VideoObjectSchema({ name, description, thumbnailUrl, uploadDate, contentUrl }: { name: string, description: string, thumbnailUrl: string, uploadDate: string, contentUrl: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": [thumbnailUrl],
    "uploadDate": uploadDate,
    "contentUrl": contentUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
