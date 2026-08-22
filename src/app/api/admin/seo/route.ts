import {
  addSeoKeyword,
  addSeoMonthlyReport,
  getAdminStore,
  updateSeoChecklistStatus
} from "@/lib/admin-store";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function isAuthorized() {
  const cookieStore = await cookies();
  const session = cookieStore.get("westend_admin_session");
  return session && session.value === "authenticated_westend_admin_2026_token_verified";
}

// Live routes & meta inspection list
const REAL_SITE_META = [
  {
    route: "/",
    title: "Westend Events | Luxury Wedding & Event Management in Lonavla, Pune, Goa & Rajasthan",
    description: "India's most trusted luxury event company based in Lonavla. Destination weddings for foreigners & NRIs, local luxury weddings, corporate events & concerts.",
    schema: "Event, LocalBusiness, Organization",
    h1: "Westend Events — Luxury Wedding & Production",
    status: "Optimal"
  },
  {
    route: "/destinations",
    title: "Royal Destination Weddings Lonavla, Udaipur, Jaipur & Goa",
    description: "Explore India's premier luxury wedding venues & locations handled 100% in-house by Westend Events.",
    schema: "TouristDestination, ItemList",
    h1: "Luxury Destinations & Royal Palaces",
    status: "Optimal"
  },
  {
    route: "/services",
    title: "In-House Sound, Stage & Production Services | Westend Events",
    description: "JBL VRX sound, trussing, wedding decor, lighting, celebrity artist management & stage setups.",
    schema: "Service, Product",
    h1: "Complete In-House Event Production",
    status: "Optimal"
  },
  {
    route: "/destination-weddings-for-nris",
    title: "Luxury NRI Destination Weddings in India | Westend Events",
    description: "Exclusive end-to-end wedding planning for NRIs & overseas couples visiting India.",
    schema: "Event, Service",
    h1: "NRI & Overseas Destination Weddings",
    status: "Optimal"
  },
  {
    route: "/gallery",
    title: "Luxury Wedding Setup Portfolio Gallery | Westend Events",
    description: "High-resolution photos of real destination wedding decor, stage setups, and concerts.",
    schema: "ImageGallery",
    h1: "Real Weddings & Event Showcase",
    status: "Optimal"
  },
  {
    route: "/about",
    title: "About Westend Events | Founder & Production Team Lonavla",
    description: "Discover our journey building Lonavla's leading luxury wedding and production firm.",
    schema: "AboutPage, Organization",
    h1: "The Artisans Behind Westend Events",
    status: "Optimal"
  },
  {
    route: "/blog",
    title: "Luxury Event & Destination Wedding Guide Blog | Westend Events",
    description: "Expert tips on destination wedding budgeting, venue selection in Rajasthan & Goa.",
    schema: "Blog, Article",
    h1: "Westend Journal & Insights",
    status: "Optimal"
  }
];

export async function GET() {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const store = getAdminStore();
  return NextResponse.json({
    analytics: store.analytics,
    seo: store.seo,
    metaAudit: REAL_SITE_META
  });
}

export async function PATCH(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action } = body;

    if (action === "update_checklist") {
      const { id, status } = body;
      const updated = updateSeoChecklistStatus(id, status);
      return NextResponse.json({ success: true, item: updated });
    } else if (action === "add_report") {
      const { month, summary, achievements, organicTrafficGrowth, agencyNotes } = body;
      const newReport = addSeoMonthlyReport({
        month,
        status: "Current Month",
        summary,
        achievements: achievements || [],
        organicTrafficGrowth: organicTrafficGrowth || "+0%",
        agencyNotes: agencyNotes || ""
      });
      return NextResponse.json({ success: true, report: newReport });
    } else if (action === "add_keyword") {
      const { keyword, targetUrl, currentRank, previousRank, change, searchVolume, intent } = body;
      const newKw = addSeoKeyword({
        keyword,
        targetUrl: targetUrl || "/",
        currentRank: Number(currentRank) || 1,
        previousRank: Number(previousRank) || 1,
        change: change || "0",
        searchVolume: searchVolume || "1,000 / mo",
        intent: intent || "Commercial"
      });
      return NextResponse.json({ success: true, keyword: newKw });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update SEO data" }, { status: 500 });
  }
}
