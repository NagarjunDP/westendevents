import { recordPageView } from "@/lib/admin-store";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { page, deviceType, visitorId, isRefresh } = body;

    // Do not record views for admin paths or internal assets
    if (page && !page.startsWith("/x-admin-portal") && !page.startsWith("/admin") && !page.startsWith("/api")) {
      recordPageView(page, deviceType || "desktop", visitorId, Boolean(isRefresh));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
