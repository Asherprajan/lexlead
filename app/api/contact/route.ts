import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod validation schema
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .or(z.literal(""))
    .optional(),
  phone: z
    .string()
    .min(8, "Please enter a valid phone number with area code")
    .max(20, "Phone number is too long")
    .regex(/^[+0-9\s\-()]+$/, "Phone number contains invalid characters"),
  practiceArea: z
    .string()
    .min(1, "Please select an area of practice"),
  preferredChambers: z.string().optional(),
  message: z
    .string()
    .min(6, "Please provide a brief outline of your enquiry")
    .max(1500, "Message should not exceed 1500 characters"),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, "You must acknowledge the privacy & disclaimer notice"),
  // Honeypot for bot protection
  website_field_check: z.string().optional(),
});

// Simple in-memory rate limiter: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; firstRequestTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);

  if (!clientData) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (now - clientData.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (clientData.count >= MAX_REQUESTS) {
    return true;
  }

  clientData.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many consultation requests from this address. Please wait a few minutes or contact our chambers directly by phone.",
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Check honeypot field
    if (body.website_field_check) {
      // Silently discard bot spam
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const formattedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify the submitted information.",
          details: formattedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // In a production deployment with configured SMTP / transactional email (e.g. Resend, SendGrid, or AWS SES),
    // an email notification is dispatched to office@lexleadlegal.in.
    // We log the structured consultation request securely (without dumping sensitive case details)
    console.log("[Lexlead Chambers Consultation Request]", {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      practiceArea: data.practiceArea,
      preferredChambers: data.preferredChambers,
      messageLength: data.message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Your preliminary consultation request has been received by Lexlead Legal Solutions. An advocate will review your enquiry and contact you within one business day.",
      referenceId: `LEX-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error("[Contact Route Error]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or reach out by phone.",
      },
      { status: 500 }
    );
  }
}
