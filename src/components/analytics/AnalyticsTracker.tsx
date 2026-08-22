"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    // Do not track admin portal or API calls
    if (pathname.startsWith("/westendevents-admin-portal") || pathname.startsWith("/admin")) {
      return;
    }

    // Unique Visitor ID in localStorage
    let visitorId = localStorage.getItem("we_visitor_id");
    if (!visitorId) {
      visitorId = `v_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem("we_visitor_id", visitorId);
    }

    // Check if this is a page refresh or route navigation
    const isRefresh = lastPathRef.current === pathname;
    lastPathRef.current = pathname;

    const deviceType = window.innerWidth < 768 ? "mobile" : window.innerWidth < 1024 ? "tablet" : "desktop";

    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: pathname,
        deviceType,
        visitorId,
        isRefresh
      })
    }).catch(() => {
      // Ignore silent tracking errors
    });
  }, [pathname]);

  return null;
}
