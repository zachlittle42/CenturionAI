import fs from "fs"
import path from "path"

const DATA_FILE = path.join(process.cwd(), "data", "contacts.json")

export interface Contact {
  id: string
  name: string
  source: string
  sourceType: "linkedin" | "url" | "vcard" | "text" | "unknown"
  rawData: string
  notes: string
  createdAt: string
}

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2))
  }
}

export function getContacts(): Contact[] {
  ensureDataFile()
  const data = fs.readFileSync(DATA_FILE, "utf-8")
  return JSON.parse(data)
}

export function addContact(contact: Omit<Contact, "id" | "createdAt">): Contact {
  const contacts = getContacts()
  const newContact: Contact = {
    ...contact,
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
  }
  contacts.unshift(newContact)
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2))
  return newContact
}

export function deleteContact(id: string): boolean {
  const contacts = getContacts()
  const filtered = contacts.filter((c) => c.id !== id)
  if (filtered.length === contacts.length) return false
  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2))
  return true
}

export function updateContact(id: string, updates: Partial<Pick<Contact, "name" | "notes">>): Contact | null {
  const contacts = getContacts()
  const index = contacts.findIndex((c) => c.id === id)
  if (index === -1) return null
  contacts[index] = { ...contacts[index], ...updates }
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2))
  return contacts[index]
}

export function parseQRData(rawData: string): { name: string; source: string; sourceType: Contact["sourceType"] } {
  // LinkedIn QR codes typically contain a URL like https://www.linkedin.com/in/username
  if (rawData.includes("linkedin.com")) {
    const match = rawData.match(/linkedin\.com\/in\/([^/?]+)/)
    const username = match ? match[1] : ""
    const name = username
      ? username.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
      : "LinkedIn Contact"
    return {
      name,
      source: rawData.startsWith("http") ? rawData : `https://${rawData}`,
      sourceType: "linkedin",
    }
  }

  // vCard format
  if (rawData.startsWith("BEGIN:VCARD")) {
    const nameMatch = rawData.match(/FN:(.+)/)
    const name = nameMatch ? nameMatch[1].trim() : "vCard Contact"
    return { name, source: rawData, sourceType: "vcard" }
  }

  // Generic URL
  if (rawData.startsWith("http://") || rawData.startsWith("https://")) {
    return { name: "Contact", source: rawData, sourceType: "url" }
  }

  // Plain text
  return { name: "Contact", source: rawData, sourceType: "text" }
}
