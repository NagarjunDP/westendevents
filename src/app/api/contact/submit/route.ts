import { addContactSubmission } from "@/lib/admin-store";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, type, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submission = addContactSubmission({
      name,
      email,
      phone,
      date: date || "",
      type: type || "wedding",
      message
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully",
      submissionId: submission.id
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
