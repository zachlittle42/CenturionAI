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

const siteTitle = "Verdant AI Partners — AI Operating System Setup for Growing Teams"
const siteDescription = "We set up your AI operating system — platform selection, connectors, workflows, and team training — in 2-4 weeks. From scattered AI usage to a working system."

export const metadata: Metadata = {
  metadataBase: new URL('https://verdantaipartners.com'),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://verdantaipartners.com',
    siteName: 'Verdant AI Partners',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Verdant AI Partners",
              url: "https://verdantaipartners.com",
              description: "AI Operating System Setup for growing teams — platform selection, connectors, workflows, training, and adoption support.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@verdant.ai",
                contactType: "sales"
              }
            })
          }}
        />
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
