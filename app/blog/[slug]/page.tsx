import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { posts, Post, PostCategory } from "../posts"
import ReadingProgress from "./ReadingProgress"

function getReadTime(content: string): string {
  return Math.ceil(content.split(/\s+/).length / 200) + ' min read'
}

const categoryConfig: Record<PostCategory, { label: string; color: string }> = {
  pillar: { label: 'Pillar Guide', color: '#3B82F6' },
  implementation: { label: 'Implementation', color: '#10B981' },
  automation: { label: 'Automation', color: '#8B5CF6' },
  models: { label: 'AI Models', color: '#F59E0B' },
  agents: { label: 'AI Agents', color: '#06B6D4' },
  healthcare: { label: 'Healthcare', color: '#F43F5E' },
  'tech-basics': { label: 'Tech Basics', color: '#64748B' },
  comparison: { label: 'Comparison', color: '#F97316' },
  'project-writeup': { label: 'Project Writeup', color: '#6366F1' },
}

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

  const relatedPosts = posts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)
  const fillNeeded = 3 - relatedPosts.length
  if (fillNeeded > 0) {
    const others = posts.filter(p => p.slug !== post.slug && p.category !== post.category).slice(0, fillNeeded)
    relatedPosts.push(...others)
  }

  return (
    <main>
      <ReadingProgress />

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
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${categoryConfig[post.category].color}15`, color: categoryConfig[post.category].color }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryConfig[post.category].color }} />
              {categoryConfig[post.category].label}
            </span>
            <span className="text-xs" style={{ color: '#64748B' }}>{getReadTime(post.content)}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white opacity-0 animate-reveal">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#0B1120" }}>
        <div className="container mx-auto max-w-7xl">
          <div className="lg:flex lg:gap-12">
            {/* Main article */}
            <div className="flex-1 max-w-3xl">
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

              {/* Related Posts */}
              <div className="mt-16 pt-8 border-t border-slate-700/40">
                <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map(rp => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`}
                      className="rounded-xl border border-slate-700/40 p-5 hover:border-blue-400/30 transition-colors block"
                      style={{ backgroundColor: '#1E293B' }}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium mb-2"
                        style={{ color: categoryConfig[rp.category].color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryConfig[rp.category].color }} />
                        {categoryConfig[rp.category].label}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{rp.title}</h3>
                      <p className="text-xs line-clamp-2" style={{ color: '#94A3B8' }}>{rp.excerpt}</p>
                      <p className="text-xs mt-2" style={{ color: '#64748B' }}>{getReadTime(rp.content)}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all posts
                </Link>
              </div>
            </div>

            {/* Sidebar - desktop only */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 rounded-xl border border-slate-700/40 p-6" style={{ backgroundColor: '#1E293B' }}>
                <h3 className="text-lg font-bold text-white">Book a Strategy Audit</h3>
                <p className="text-sm mt-2" style={{ color: '#94A3B8' }}>Get a custom AI roadmap for your business in 30 days.</p>
                <Link href="/strategy-audit"
                  className="mt-4 inline-block w-full text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors">
                  Get Started →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
