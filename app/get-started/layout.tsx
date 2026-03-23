import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get Started | Verdant AI Partners",
  description:
    "Tell us about your business and we'll show you exactly where AI fits. Free consultation — no pitch deck, no pressure.",
  alternates: {
    canonical: "https://verdantaipartners.com/get-started",
  },
}

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
