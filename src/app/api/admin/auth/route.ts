import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "westend_admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Westend@SEO2026!";
const SESSION_COOKIE_NAME = "westend_admin_session";
const SESSION_TOKEN_VALUE = "authenticated_westend_admin_2026_token_verified";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, username, password } = body;

    const cookieStore = await cookies();

    if (action === "login") {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        cookieStore.set(SESSION_COOKIE_NAME, SESSION_TOKEN_VALUE, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7 // 7 days
        });

        return NextResponse.json({ success: true, message: "Authentication successful" });
      } else {
        return NextResponse.json(
          { success: false, message: "Invalid username or password" },
          { status: 401 }
        );
      }
    } else if (action === "logout") {
      cookieStore.delete(SESSION_COOKIE_NAME);
      return NextResponse.json({ success: true, message: "Logged out successfully" });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

    if (sessionCookie && sessionCookie.value === SESSION_TOKEN_VALUE) {
      return NextResponse.json({ authenticated: true });
    } else {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ authenticated: false, error: "Failed to check session" }, { status: 500 });
  }
}