"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { Camera, LogOut, Trash2, ExternalLink, Linkedin, Globe, FileText, MessageSquare, Pencil, Check, X, Settings, Activity } from "lucide-react"

interface Contact {
  id: string
  name: string
  source: string
  sourceType: "linkedin" | "url" | "vcard" | "text" | "unknown"
  rawData: string
  notes: string
  createdAt: string
}

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState("")
  const [editNotes, setEditNotes] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  useEffect(() => {
    if (status === "authenticated") {
      fetchContacts()
    }
  }, [status])

  async function fetchContacts() {
    setError(null)
    try {
      const res = await fetch("/api/admin/contacts")
      if (res.ok) {
        setContacts(await res.json())
      } else {
        setError("Failed to load contacts. Please try refreshing the page.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    }
    setLoading(false)
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this contact?")) return
    setError(null)
    try {
      const res = await fetch(`/api/admin/contacts?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        setContacts(contacts.filter((c) => c.id !== id))
      } else {
        setError("Failed to delete contact. Please try again.")
      }
    } catch {
      setError("Network error while deleting contact.")
    }
  }

  function startEdit(contact: Contact) {
    setEditingId(contact.id)
    setEditName(contact.name)
    setEditNotes(contact.notes)
  }

  async function saveEdit(id: string) {
    setError(null)
    try {
      const res = await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name: editName, notes: editNotes }),
      })
      if (res.ok) {
        const updated = await res.json()
        setContacts(contacts.map((c) => (c.id === id ? updated : c)))
        setEditingId(null)
      } else {
        setError("Failed to save changes. Please try again.")
        // Keep edit mode active on failure so user can retry
      }
    } catch {
      setError("Network error while saving. Please try again.")
      // Keep edit mode active on failure so user can retry
    }
  }

  function getSourceIcon(type: Contact["sourceType"]) {
    switch (type) {
      case "linkedin":
        return <Linkedin size={16} className="text-blue-400" />
      case "url":
        return <Globe size={16} className="text-green-400" />
      case "vcard":
        return <FileText size={16} className="text-purple-400" />
      case "text":
        return <MessageSquare size={16} className="text-yellow-400" />
      default:
        return <Globe size={16} className="text-slate-400" />
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    )
  }

  if (status === "unauthenticated") return null

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Contact Scanner</h1>
              <p className="text-xs text-slate-500">{session?.user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/body"
              className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              <Activity size={16} />
              Body
            </Link>
            <Link
              href="/admin/scan"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Camera size={16} />
              Scan QR
            </Link>
            <Link
              href="/admin/settings"
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <Settings size={16} />
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">
            Contacts
            <span className="ml-2 text-sm font-normal text-slate-500">({contacts.length})</span>
          </h2>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-between">
            <p className="text-red-400 text-sm">{error}</p>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-300 text-sm font-medium"
            >
              Dismiss
            </button>
          </div>
        )}

        {contacts.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-slate-700 rounded-xl">
            <Camera size={40} className="mx-auto text-slate-600 mb-4" />
            <h3 className="text-lg font-medium text-slate-300 mb-2">No contacts yet</h3>
            <p className="text-slate-500 mb-6 text-sm">Scan a QR code to add your first contact</p>
            <Link
              href="/admin/scan"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <Camera size={16} />
              Scan QR Code
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600/50 transition-colors"
              >
                {editingId === contact.id ? (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">Name</label>
                      <input
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 mb-1 block">Notes</label>
                      <textarea
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        rows={2}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Add notes about this contact..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => saveEdit(contact.id)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-medium rounded-lg transition-colors"
                      >
                        <Check size={14} />
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex items-center gap-1 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium rounded-lg transition-colors"
                      >
                        <X size={14} />
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {getSourceIcon(contact.sourceType)}
                        <h3 className="text-white font-medium">{contact.name}</h3>
                        <span className="text-xs px-2 py-0.5 bg-slate-700 text-slate-300 rounded-full">
                          {contact.sourceType}
                        </span>
                      </div>
                      {contact.sourceType === "linkedin" || contact.sourceType === "url" ? (
                        <a
                          href={contact.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 mb-1"
                        >
                          {contact.source}
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <p className="text-slate-400 text-sm mb-1 truncate">{contact.source}</p>
                      )}
                      {contact.notes && (
                        <p className="text-slate-500 text-sm mt-1 italic">{contact.notes}</p>
                      )}
                      <p className="text-slate-600 text-xs mt-2">
                        {new Date(contact.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => startEdit(contact)}
                        className="p-2 text-slate-500 hover:text-blue-400 transition-colors"
                        title="Edit contact"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                        title="Delete contact"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
