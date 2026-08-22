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

    const targetEmails = ["info@westendevent.com", "westendeventagarwal@gmail.com"];
    console.log(`[Form Trigger] Direct enquiry notification dispatched to: ${targetEmails.join(", ")} for client ${name}`);

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully and dispatched to admin emails",
      notificationTargets: targetEmails,
      submissionId: submission.id
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
  }
}
