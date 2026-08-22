import { getAdminStore, updatePopupConfig } from "@/lib/admin-store";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const AUTH_TOKEN = "authenticated_westend_admin_2026_token_verified";

export async function GET() {
  try {
    const store = getAdminStore();
    return NextResponse.json(
      { success: true, popup: store.popup },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      }
    );
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch popup configuration" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    // Check admin authentication cookie
    const cookieStore = await cookies();
    const authCookie = cookieStore.get("westend_admin_session");

    if (!authCookie || authCookie.value !== AUTH_TOKEN) {
      return NextResponse.json({ success: false, message: "Unauthorized admin access" }, { status: 401 });
    }

    const body = await request.json();
    const updated = updatePopupConfig(body);
    return NextResponse.json({ success: true, popup: updated });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update popup configuration" }, { status: 500 });
  }
}
