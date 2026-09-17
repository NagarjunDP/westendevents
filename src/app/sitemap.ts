import { MetadataRoute } from "next";
import { allSEOPages } from "@/data/seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.westendevent.com";

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/collection", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/gallery", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/testimonials", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/destinations", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/destination-weddings-for-nris", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const }
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority
  }));

  const programmaticEntries: MetadataRoute.Sitemap = allSEOPages.map((page) => {
    let priority = 0.85;
    if (page.pageType === "hub") {
      priority = 0.95;
    } else if (page.pageType === "pillar") {
      priority = 0.9;
    }

    return {
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority
    };
  });

  return [...staticEntries, ...programmaticEntries];
}
