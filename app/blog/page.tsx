import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { posts } from "./posts"

export const metadata = {
  title: "Blog | Centurion AI",
  description:
    "Insights on AI implementation, strategy, and automation from the Centurion AI team.",
}

export default function BlogIndex() {
  return (
    <main>
      <section
        className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
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

        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white opacity-0 animate-reveal">
            Blog
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2"
            style={{ color: "#94A3B8" }}
          >
            Insights on AI implementation, strategy, and what actually works.
          </p>
        </div>
      </section>

      <section className="py-20 px-4" style={{ backgroundColor: "#0B1120" }}>
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-slate-700/40 p-8 hover:border-blue-400/30 transition-colors group"
                style={{ backgroundColor: "#1E293B" }}
              >
                <p className="text-sm font-mono mb-3" style={{ color: "#64748B" }}>
                  {post.date}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "#94A3B8" }}
                >
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center text-blue-400 font-medium text-sm group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
