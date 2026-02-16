import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StickyCta from "@/components/sticky-cta"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Centurion AI - AI Implementation That Actually Works",
  description: "We transform your team with AI tools and workflows, or our AI-augmented engineering teams build your product. Platform setup, training, custom workflows, managed infrastructure, and full-stack development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${instrumentSerif.variable} font-body antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <StickyCta />
        <Toaster />
      </body>
    </html>
  )
}
