import { getAdminStore, updateContactStatus } from "@/lib/admin-store";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

async function isAuthorized() {
  const cookieStore = await cookies();
  const session = cookieStore.get("westend_admin_session");
  return session && session.value === "authenticated_westend_admin_2026_token_verified";
}

export async function GET(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format");

  const store = getAdminStore();

  if (format === "csv") {
    // Generate CSV output
    const headers = ["ID", "Name", "Email", "Phone", "Event Date", "Event Type", "Message", "Timestamp", "Status", "Notes"];
    const rows = store.contacts.map(c => [
      `"${c.id}"`,
      `"${c.name.replace(/"/g, '""')}"`,
      `"${c.email}"`,
      `"${c.phone}"`,
      `"${c.date}"`,
      `"${c.type}"`,
      `"${c.message.replace(/"/g, '""')}"`,
      `"${c.timestamp}"`,
      `"${c.status}"`,
      `"${(c.notes || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="westend_contacts_${new Date().toISOString().split("T")[0]}.csv"`
      }
    });
  }

  return NextResponse.json({ contacts: store.contacts });
}

export async function PATCH(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing id or status" }, { status: 400 });
    }

    const updated = updateContactStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, contact: updated });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 });
  }
}
