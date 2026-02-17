import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { getContacts, addContact, deleteContact, updateContact, parseQRData } from "@/lib/contacts"

async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session || session.user?.email !== "zlittle@uci.edu") {
    return null
  }
  return session
}

export async function GET() {
  const session = await requireAuth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  const contacts = getContacts()
  return NextResponse.json(contacts)
}

export async function POST(request: Request) {
  const session = await requireAuth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
  }

  const { rawData, name: providedName, notes } = body

  if (!rawData) {
    return NextResponse.json({ error: "rawData is required" }, { status: 400 })
  }

  // Basic input validation
  if (typeof rawData !== "string" || rawData.length > 10000) {
    return NextResponse.json({ error: "rawData must be a string under 10000 characters" }, { status: 400 })
  }

  const parsed = parseQRData(rawData)
  const contact = addContact({
    name: providedName || parsed.name,
    source: parsed.source,
    sourceType: parsed.sourceType,
    rawData,
    notes: notes || "",
  })

  return NextResponse.json(contact, { status: 201 })
}

export async function DELETE(request: Request) {
  const session = await requireAuth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 })
  }

  const deleted = deleteContact(id)
  if (!deleted) {
    return NextResponse.json({ error: "Contact not found" }, { status: 404 })
  }
  return NextResponse.json({ success: true })
}

export async function PATCH(request: Request) {
  const session = await requireAuth()
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
  }

  const { id, name, notes } = body
  if (!id) {
    return NextResponse.json({ error: "id is required" }, { status: 400 })
  }

  const updated = updateContact(id, { name, notes })
  if (!updated) {
    return NextResponse.json({ error: "Contact not found" }, { status: 404 })
  }
  return NextResponse.json(updated)
}
