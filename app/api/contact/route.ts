import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, botField } = body;

    // Honeypot check: If botField is filled, it's likely a spam bot
    if (botField) {
      return NextResponse.json(
        { success: true, message: "Message received." },
        { status: 200 }
      );
    }

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide your name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide a message." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject =
      subject && typeof subject === "string" && subject.trim().length > 0
        ? subject.trim()
        : "Portfolio Contact Form Inquiry";
    const cleanMessage = message.trim();

    // 1. Save to MongoDB (if configured)
    let savedToDb = false;
    let dbErrorMessage = "";
    try {
      const db = await connectToDatabase();
      if (!db) {
        dbErrorMessage = "MongoDB URI is not configured.";
      } else {
        await Contact.create({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
        });
        savedToDb = true;
      }
    } catch (dbError) {
      dbErrorMessage = dbError instanceof Error ? dbError.message : "Database error";
      console.error("Failed to save contact to MongoDB:", dbError);
    }

    // 2. Send email notification & visitor auto-reply
    let emailStatus: { sent: boolean; reason?: string } = {
      sent: false,
      reason: "Not executed",
    };
    try {
      emailStatus = await sendContactNotification({
        name: cleanName,
        email: cleanEmail,
        subject: cleanSubject,
        message: cleanMessage,
      });
    } catch (emailError) {
      const errMsg = emailError instanceof Error ? emailError.message : "Email error";
      emailStatus = { sent: false, reason: errMsg };
      console.error("Failed to send notification email:", emailError);
    }

    if (!savedToDb && !emailStatus.sent) {
      return NextResponse.json(
        {
          success: false,
          message: `Unable to save message or send email. DB: ${dbErrorMessage || "failed"} | Email: ${emailStatus.reason || "failed"}`,
          data: {
            savedToDb: false,
            emailSent: false,
            dbError: dbErrorMessage,
            emailError: emailStatus.reason,
          },
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out! Your message has been received.",
        data: {
          savedToDb,
          emailSent: emailStatus.sent,
          ...(dbErrorMessage && { dbNotice: dbErrorMessage }),
          ...(!emailStatus.sent && { emailNotice: emailStatus.reason }),
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("Error handling contact POST:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

