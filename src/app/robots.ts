import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/westendevents-admin-portal", "/admin", "/api/admin/"]
    },
    sitemap: "https://www.westendevent.com/sitemap.xml"
  };
}
