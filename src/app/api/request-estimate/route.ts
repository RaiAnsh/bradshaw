import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

type EstimateRequestBody = {
  name?: string;
  phone?: string;
  city?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: EstimateRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const city = (body.city ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !phone || !city || !email) {
    return NextResponse.json(
      { error: "Please fill in your name, phone, city, and email." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.ESTIMATE_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.ESTIMATE_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error(
      "[request-estimate] Missing RESEND_API_KEY or ESTIMATE_FROM_EMAIL env vars."
    );
    return NextResponse.json(
      { error: "Email service isn't configured yet. Please call us directly." },
      { status: 500 }
    );
  }

  const html = `
    <h2>New Free Estimate Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>City / Address:</strong> ${escapeHtml(city)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || "(none provided)").replace(/\n/g, "<br />")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Estimate Request from ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[request-estimate] Resend error:", res.status, errText);
      return NextResponse.json(
        { error: "We couldn't send your request. Please call us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[request-estimate] Unexpected error:", error);
    return NextResponse.json(
      { error: "We couldn't send your request. Please call us directly." },
      { status: 500 }
    );
  }
}
