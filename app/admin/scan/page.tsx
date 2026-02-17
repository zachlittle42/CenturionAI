"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Camera, Check, Loader2 } from "lucide-react"

export default function ScanPage() {
  const { status } = useSession()
  const router = useRouter()
  const scannerRef = useRef<HTMLDivElement>(null)
  const html5QrScannerRef = useRef<any>(null)
  const [scannedData, setScannedData] = useState<string | null>(null)
  const [contactName, setContactName] = useState("")
  const [contactNotes, setContactNotes] = useState("")
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState("")
  const [scannerReady, setScannerReady] = useState(false)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  const onScanSuccess = useCallback((decodedText: string) => {
    setScannedData(decodedText)

    // Auto-detect name from LinkedIn URLs
    if (decodedText.includes("linkedin.com/in/")) {
      const match = decodedText.match(/linkedin\.com\/in\/([^/?]+)/)
      if (match) {
        const name = match[1].replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())
        setContactName(name)
      }
    } else if (decodedText.startsWith("BEGIN:VCARD")) {
      const nameMatch = decodedText.match(/FN:(.+)/)
      if (nameMatch) {
        setContactName(nameMatch[1].trim())
      }
    }

    // Stop scanner after successful scan
    if (html5QrScannerRef.current) {
      try {
        html5QrScannerRef.current.clear()
      } catch (e) {
        // ignore
      }
    }
  }, [])

  useEffect(() => {
    if (status !== "authenticated" || scannedData) return

    let mounted = true

    async function initScanner() {
      const { Html5Qrcode } = await import("html5-qrcode")

      if (!mounted || !scannerRef.current) return

      const scanner = new Html5Qrcode("qr-reader")
      html5QrScannerRef.current = scanner

      try {
        await scanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          (decodedText: string) => {
            onScanSuccess(decodedText)
          },
          () => {
            // ignore scan failures (no QR found in frame)
          }
        )
        if (mounted) setScannerReady(true)
      } catch (err: any) {
        if (mounted) {
          setError(
            err?.message?.includes("Permission")
              ? "Camera permission denied. Please allow camera access and refresh."
              : "Could not start camera. Make sure you're on HTTPS and camera is available."
          )
        }
      }
    }

    initScanner()

    return () => {
      mounted = false
      if (html5QrScannerRef.current) {
        try {
          html5QrScannerRef.current.stop()
          html5QrScannerRef.current.clear()
        } catch (e) {
          // ignore cleanup errors
        }
      }
    }
  }, [status, scannedData, onScanSuccess])

  async function handleSave() {
    if (!scannedData) return
    setSaving(true)
    setError("")

    try {
      const res = await fetch("/api/admin/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rawData: scannedData,
          name: contactName || undefined,
          notes: contactNotes || undefined,
        }),
      })

      if (res.ok) {
        setSaved(true)
        setTimeout(() => router.push("/admin/dashboard"), 1500)
      } else {
        const data = await res.json()
        setError(data.error || "Failed to save contact")
      }
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  function handleScanAnother() {
    setScannedData(null)
    setContactName("")
    setContactNotes("")
    setSaved(false)
    setError("")
    setScannerReady(false)
  }

  if (status === "loading") {
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
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link
            href="/admin/dashboard"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-white">Scan QR Code</h1>
            <p className="text-xs text-slate-500">Point camera at a QR code</p>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        {!scannedData ? (
          <div className="space-y-6">
            {/* Scanner viewport */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-black">
              <div id="qr-reader" ref={scannerRef} className="w-full" />
              {!scannerReady && !error && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90">
                  <Loader2 size={32} className="text-blue-400 animate-spin mb-3" />
                  <p className="text-slate-400 text-sm">Starting camera...</p>
                </div>
              )}
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <div className="text-center text-slate-500 text-sm">
              <p>Hold a QR code (LinkedIn, vCard, URL) in front of the camera</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Success state */}
            {saved ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-green-400" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Contact Saved!</h2>
                <p className="text-slate-400 text-sm">Redirecting to dashboard...</p>
              </div>
            ) : (
              <>
                {/* Scanned data preview */}
                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <p className="text-xs text-blue-400 font-medium mb-1">Scanned Data</p>
                  <p className="text-white text-sm break-all">{scannedData}</p>
                </div>

                {/* Edit form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Contact Name
                    </label>
                    <input
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Ash"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Notes
                    </label>
                    <textarea
                      value={contactNotes}
                      onChange={(e) => setContactNotes(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="e.g., Met at Starbucks, interested in AI consulting"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-500 hover:bg-blue-400 disabled:bg-blue-500/50 text-white font-medium rounded-lg transition-colors"
                  >
                    {saving ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check size={16} />
                        Save Contact
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleScanAnother}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Camera size={16} />
                    Scan Another
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
