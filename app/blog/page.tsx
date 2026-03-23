import { Metadata } from "next"
import BlogContent from "./BlogContent"

export const metadata: Metadata = {
  title: "Blog | Verdant AI Partners",
  description:
    "Insights on AI implementation, strategy, and automation from the Verdant AI Partners team.",
  openGraph: {
    title: "Blog | Verdant AI Partners",
    description:
      "Insights on AI implementation, strategy, and automation from the Verdant AI Partners team.",
    url: "https://verdantaipartners.com/blog",
    siteName: "Verdant AI Partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Verdant AI Partners",
    description:
      "Insights on AI implementation, strategy, and automation from the Verdant AI Partners team.",
  },
  alternates: {
    canonical: "https://verdantaipartners.com/blog",
  },
}

export default function BlogIndex() {
  return <BlogContent />
}
