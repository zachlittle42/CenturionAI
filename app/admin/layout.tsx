import type React from "react"

export const metadata = {
  title: "Admin - Verdant AI Partners",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#121411]">
      {children}
    </div>
  )
}
