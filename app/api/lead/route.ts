import { NextResponse } from "next/server"
import { Resend } from "resend"

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, revenue, challenge, referral } = body

    if (!name || !company || !challenge) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const to = process.env.LEAD_NOTIFICATION_EMAIL || "zach@centurionmovement.com"

    await getResend().emails.send({
      from: "Verdant AI <onboarding@resend.dev>",
      to,
      subject: `New Lead: ${name} — ${company}`,
      html: `
        <h2>New Lead from Verdant AI Partners</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Revenue</td><td style="padding:8px;">${revenue || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Challenge</td><td style="padding:8px;">${challenge}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Referral</td><td style="padding:8px;">${referral || "—"}</td></tr>
        </table>
        <p style="color:#888;margin-top:20px;">Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead form error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
