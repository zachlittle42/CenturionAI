import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Instrument_Serif } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import AuthSessionProvider from "@/components/session-provider"
import LayoutShell from "@/components/layout-shell"
import { Analytics } from "@vercel/analytics/next"

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
      <body className={`${dmSans.variable} ${instrumentSerif.variable} font-body antialiased`}>
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
