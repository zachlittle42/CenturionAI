import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  revenue: z.string().min(1, "Please select your monthly revenue"),
  challenge: z.string().min(1, "Please tell us about your biggest challenge"),
  referral: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    const to = process.env.LEAD_NOTIFICATION_EMAIL || "zach@centurionmovement.com"

    await resend.emails.send({
      from: "Verdant AI <onboarding@resend.dev>",
      to,
      subject: `New Lead: ${validated.name} — ${validated.company}`,
      html: `
        <h2>New Lead from Verdant AI Partners</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${validated.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${validated.email}">${validated.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${validated.company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${validated.phone || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Revenue</td><td style="padding:8px;">${validated.revenue}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Challenge</td><td style="padding:8px;">${validated.challenge}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Referral</td><td style="padding:8px;">${validated.referral || "—"}</td></tr>
        </table>
        <p style="color:#888;margin-top:20px;">Submitted at ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "We'll be in touch within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
