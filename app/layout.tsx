import type React from "react"
import type { Metadata } from "next"
import { Manrope, Epilogue } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import AuthSessionProvider from "@/components/session-provider"
import LayoutShell from "@/components/layout-shell"
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
})

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Verdant AI Partners — AI Implementation That Actually Works",
  description: "We help businesses adopt AI effectively — from tech foundations and team training through custom agents and embedded engineering. Hands-on implementation, not slide decks.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* TODO: Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      <body className={`${manrope.variable} ${epilogue.variable} font-body antialiased`}>
        <AuthSessionProvider>
          <LayoutShell>
            {children}
          </LayoutShell>
          <Toaster />
          <Analytics />
        </AuthSessionProvider>
      </body>
    </html>
  )
}
