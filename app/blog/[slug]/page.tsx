import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { posts, Post, PostCategory } from "../posts"
import ReadingProgress from "./ReadingProgress"

function getReadTime(content: string): string {
  return Math.ceil(content.split(/\s+/).length / 200) + ' min read'
}

/** Convert "February 25, 2026" → "2026-02-25" (ISO 8601) */
function toISODate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toISOString().split('T')[0]
}

const categoryKeywords: Record<PostCategory, string[]> = {
  pillar: ['AI strategy', 'AI implementation', 'enterprise AI', 'digital transformation'],
  implementation: ['AI implementation', 'AI deployment', 'AI integration', 'machine learning'],
  automation: ['AI automation', 'workflow automation', 'business process automation', 'RPA'],
  models: ['AI models', 'large language models', 'LLM', 'GPT', 'machine learning models'],
  agents: ['AI agents', 'autonomous agents', 'agentic AI', 'AI assistants'],
  healthcare: ['healthcare AI', 'medical AI', 'health tech', 'clinical AI'],
  'tech-basics': ['AI basics', 'AI fundamentals', 'technology explained', 'AI for business'],
  comparison: ['AI tools comparison', 'software comparison', 'AI platforms', 'tool evaluation'],
  'project-writeup': ['AI case study', 'AI project', 'implementation results', 'AI ROI'],
}

const categoryConfig: Record<PostCategory, { label: string; color: string }> = {
  pillar: { label: 'Pillar Guide', color: '#bcf1ae' },
  implementation: { label: 'Implementation', color: '#10B981' },
  automation: { label: 'Automation', color: '#8B5CF6' },
  models: { label: 'AI Models', color: '#F59E0B' },
  agents: { label: 'AI Agents', color: '#06B6D4' },
  healthcare: { label: 'Healthcare', color: '#F43F5E' },
  'tech-basics': { label: 'Tech Basics', color: '#c2c9bb' },
  comparison: { label: 'Comparison', color: '#F97316' },
  'project-writeup': { label: 'Project Writeup', color: '#6366F1' },
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return { title: "Post Not Found | Verdant AI Partners" }
  return {
    title: `${post.title} | Verdant AI Partners Blog`,
    description: post.excerpt,
    keywords: categoryKeywords[post.category],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://verdantaipartners.com/blog/${post.slug}`,
      siteName: 'Verdant AI Partners',
      type: 'article' as const,
      publishedTime: toISODate(post.date),
      authors: ['Verdant AI Partners'],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://verdantaipartners.com/blog/${post.slug}`,
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: toISODate(post.date),
            author: {
              "@type": "Organization",
              name: "Verdant AI Partners",
              url: "https://verdantaipartners.com",
            },
            publisher: {
              "@type": "Organization",
              name: "Verdant AI Partners",
              url: "https://verdantaipartners.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://verdantaipartners.com/blog/${post.slug}`,
            },
          }),
        }}
      />
      <ReadingProgress />

      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
        style={{ backgroundColor: "#121411" }}
      >

        <div className="container relative z-10 mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          <p className="text-sm font-mono mb-4" style={{ color: "#c2c9bb" }}>
            {post.date}
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: `${categoryConfig[post.category].color}15`, color: categoryConfig[post.category].color }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryConfig[post.category].color }} />
              {categoryConfig[post.category].label}
            </span>
            <span className="text-xs" style={{ color: '#c2c9bb' }}>{getReadTime(post.content)}</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white opacity-0 animate-reveal">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: "#0d0f0c" }}>
        <div className="container mx-auto max-w-7xl">
          <div className="lg:flex lg:gap-12">
            {/* Main article */}
            <div className="flex-1 max-w-3xl">
              <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white prose-em:text-slate-300 prose-a:text-[#bcf1ae] prose-a:no-underline hover:prose-a:underline">
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
                        style={{ color: "#e3e3dd" }}
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
                        style={{ color: "#e3e3dd" }}
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
                      style={{ color: "#e3e3dd" }}
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
              <div className="mt-16 pt-8 border-t border-[#42493e]/15">
                <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedPosts.map(rp => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}`}
                      className="rounded-xl border border-[#42493e]/15 p-5 hover:border-[#bcf1ae]/30 transition-colors block"
                      style={{ backgroundColor: '#1a1c19' }}>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium mb-2"
                        style={{ color: categoryConfig[rp.category].color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryConfig[rp.category].color }} />
                        {categoryConfig[rp.category].label}
                      </span>
                      <h3 className="text-sm font-bold text-white mb-2 line-clamp-2">{rp.title}</h3>
                      <p className="text-xs line-clamp-2" style={{ color: '#c2c9bb' }}>{rp.excerpt}</p>
                      <p className="text-xs mt-2" style={{ color: '#c2c9bb' }}>{getReadTime(rp.content)}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Link href="/blog" className="inline-flex items-center text-[#bcf1ae] hover:text-[#a1d494] font-medium transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to all posts
                </Link>
              </div>
            </div>

            {/* Sidebar - desktop only */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24 rounded-xl border border-[#42493e]/15 p-6" style={{ backgroundColor: '#1a1c19' }}>
                <h3 className="text-lg font-bold text-white">Book a Strategy Audit</h3>
                <p className="text-sm mt-2" style={{ color: '#c2c9bb' }}>Get a custom AI roadmap for your business in 30 days.</p>
                <Link href="/get-started"
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
