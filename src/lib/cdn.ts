/**
 * CDN Utility for Westend Events
 * Ensures 0 Vercel Image Optimization compute cost.
 * Serves direct static unoptimized paths locally & in production,
 * with optional jsDelivr CDN prefix if NEXT_PUBLIC_USE_JSDELIVR environment variable is set.
 */

const JS_DELIVR_CDN_BASE = "https://cdn.jsdelivr.net/gh/NagarjunDP/westendevents@main/public";

export function getCdnUrl(path: string): string {
  if (!path) return "";
  // If it's already a full HTTP/HTTPS URL, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  
  // Format clean relative path
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // If jsDelivr CDN is explicitly enabled via env var, use it. Otherwise use direct static route.
  if (process.env.NEXT_PUBLIC_USE_JSDELIVR === "true") {
    return `${JS_DELIVR_CDN_BASE}/${cleanPath}`;
  }
  
  // Return direct static path (0 Vercel Image Optimization cost due to unoptimized configuration & HTML tags)
  return `/${cleanPath}`;
}
