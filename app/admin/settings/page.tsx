"use client"

import { useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { ArrowLeft, LogOut, FlaskConical } from "lucide-react"
import WeeklyCoachReview from "@/components/weekly-coach-review"
import { getLastWeekReviewData } from "@/lib/mock/weekly-review-data"

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    )
  }

  if (status === "unauthenticated") return null

  const weeklyData = getLastWeekReviewData()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard"
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <FlaskConical size={18} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Settings</h1>
                <p className="text-xs text-slate-500">{session?.user?.email}</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FlaskConical size={16} className="text-purple-400" />
            <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Playground
            </h2>
          </div>
          <p className="text-slate-500 text-sm">
            Beta features and card prototypes. Test new ideas here before they
            ship to other screens.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          <WeeklyCoachReview data={weeklyData} />
        </div>
      </main>
    </div>
  )
}
