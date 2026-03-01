import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { posts } from "../posts"

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: "Post Not Found | Centurion AI" }
  return {
    title: `${post.title} | Centurion AI Blog`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <main>
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        style={{ backgroundColor: "#0F172A" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-blue-400/50 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          <p className="text-sm font-mono mb-4" style={{ color: "#64748B" }}>
            {post.date}
          </p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white opacity-0 animate-reveal">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#0B1120" }}>
        <div className="container mx-auto max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-em:text-slate-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                const text = paragraph.slice(2, -2)
                return (
                  <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
                    {text}
                  </h2>
                )
              }
              if (paragraph.startsWith("*") && !paragraph.startsWith("**")) {
                return (
                  <p
                    key={i}
                    className="leading-relaxed mb-4"
                    style={{ color: "#CBD5E1" }}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.+?)\*/g, "<em>$1</em>"),
                    }}
                  />
                )
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <p
                    key={i}
                    className="leading-relaxed mb-4"
                    style={{ color: "#CBD5E1" }}
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.+?)\*/g, "<em>$1</em>"),
                    }}
                  />
                )
              }
              return (
                <p
                  key={i}
                  className="leading-relaxed mb-4"
                  style={{ color: "#CBD5E1" }}
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*(.+?)\*/g, "<em>$1</em>"),
                  }}
                />
              )
            })}
          </article>

          <div className="mt-16 pt-8 border-t border-slate-700/40">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
