import type React from "react"

export const metadata = {
  title: "Admin - Centurion AI",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {children}
    </div>
  )
}
