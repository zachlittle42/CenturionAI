"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StickyCta from "@/components/sticky-cta"

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname.startsWith("/admin")

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <StickyCta />
    </>
  )
}
