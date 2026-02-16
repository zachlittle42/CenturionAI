import { NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required"),
  teamSize: z.string().min(1, "Please select a team size"),
  interest: z.string().min(1, "Please select what you're interested in"),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    // TODO: Replace with actual email/CRM integration
    console.log("New lead submission:", validated)

    return NextResponse.json({
      success: true,
      message: "We'll be in touch within 24 hours.",
    })
  } catch (error) {
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
