import { Metadata } from "next"
import BlogContent from "./BlogContent"

export const metadata: Metadata = {
  title: "Blog | Verdant AI Partners",
  description:
    "Insights on AI implementation, strategy, and automation from the Verdant AI Partners team.",
}

export default function BlogIndex() {
  return <BlogContent />
}
