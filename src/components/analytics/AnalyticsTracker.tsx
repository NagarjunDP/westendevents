"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    // Do not track admin portal or API calls
    if (
      pathname.startsWith("/westendevents-admin-portal") ||
      pathname.startsWith("/admin") ||
      pathname.startsWith("/x-admin-portal")
    ) {
      return;
    }

    // Unique Visitor ID in localStorage
    let visitorId = "";
    try {
      visitorId = localStorage.getItem("we_visitor_id") || "";
      if (!visitorId) {
        visitorId = `v_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        localStorage.setItem("we_visitor_id", visitorId);
      }
    } catch {
      visitorId = `v_anon_${Date.now()}`;
    }

    // Check if this is a page refresh or route navigation
    const isRefresh = lastPathRef.current === pathname;
    lastPathRef.current = pathname;

    const width = typeof window !== "undefined" ? window.innerWidth : 1024;
    const deviceType = width < 768 ? "mobile" : width < 1024 ? "tablet" : "desktop";

    const payload = JSON.stringify({
      page: pathname,
      deviceType,
      visitorId,
      isRefresh
    });

    // Use sendBeacon if supported for high reliability on mobile browser unloads/navigations
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      try {
        const blob = new Blob([payload], { type: "application/json" });
        const sent = navigator.sendBeacon("/api/analytics/track", blob);
        if (sent) return;
      } catch {
        // Fallback to fetch
      }
    }

    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true
    }).catch(() => {
      // Ignore silent tracking errors
    });
  }, [pathname]);

  return null;
}

