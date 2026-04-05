"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[rgba(18,20,17,0.95)] backdrop-blur-md border-t border-[rgba(66,73,62,0.15)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <p className="text-sm text-[#8c9387] hidden sm:block">
            Set up your AI operating system in 2-4 weeks.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] text-sm font-medium transition-colors shadow-lg shadow-[#bcf1ae]/10 ml-auto sm:ml-0"
          >
            Get Started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
