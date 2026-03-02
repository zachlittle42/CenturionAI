import { Metadata } from "next"
import BlogContent from "./BlogContent"

export const metadata: Metadata = {
  title: "Blog | Centurion AI",
  description:
    "Insights on AI implementation, strategy, and automation from the Centurion AI team.",
}

export default function BlogIndex() {
  return <BlogContent />
}
