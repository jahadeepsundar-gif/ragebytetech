import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many enquiries submitted from this IP address. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & Validate Payload
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload provided." },
        { status: 400 }
      );
    }

    const validation = contactFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check form inputs.",
          fieldErrors: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 3. Email Delivery via Resend
    const emailResult = await sendContactEmail(validation.data);

    if (!emailResult.isConfigured) {
      return NextResponse.json(
        {
          success: true,
          configured: false,
          message:
            "Enquiry validated and recorded successfully. Server notice: RESEND_API_KEY is currently unconfigured. Set RESEND_API_KEY in environment variables to enable live email delivery.",
        },
        { status: 200 }
      );
    }

    if (!emailResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: emailResult.error || "Failed to dispatch enquiry email. Please try again or contact us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        configured: true,
        message:
          "Your enquiry has been received. The RageByte team will review your project details and get back to you within 24 hours.",
        messageId: emailResult.messageId,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      {
        success: false,
        error: `Unexpected server error: ${errorMsg}`,
      },
      { status: 500 }
    );
  }
}
