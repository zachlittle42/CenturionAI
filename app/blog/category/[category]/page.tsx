import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { posts, PostCategory } from '../../posts'
import type { Metadata } from 'next'

const categoryConfig: Record<PostCategory, { label: string; color: string; description: string }> = {
  pillar: {
    label: 'Pillar Guides',
    color: '#bcf1ae',
    description: 'Comprehensive guides covering the most important AI implementation topics for businesses.',
  },
  implementation: {
    label: 'Implementation',
    color: '#10B981',
    description: 'Practical advice on rolling out AI tools, managing adoption, and measuring results.',
  },
  automation: {
    label: 'Automation',
    color: '#8B5CF6',
    description: 'How to automate workflows, reduce manual work, and connect your systems with AI.',
  },
  models: {
    label: 'AI Models',
    color: '#F59E0B',
    description: 'Deep dives into AI models — capabilities, comparisons, and how to choose the right one.',
  },
  agents: {
    label: 'AI Agents',
    color: '#06B6D4',
    description: 'Everything about AI agents — what they are, how they work, and how to deploy them in your business.',
  },
  healthcare: {
    label: 'Healthcare',
    color: '#F43F5E',
    description: 'AI applications for healthcare practices, clinics, and wellness businesses.',
  },
  'tech-basics': {
    label: 'Tech Basics',
    color: '#64748B',
    description: 'Foundational technology concepts every business owner should understand.',
  },
  comparison: {
    label: 'Comparisons',
    color: '#F97316',
    description: 'Side-by-side comparisons of AI tools, platforms, and approaches to help you choose.',
  },
  'project-writeup': {
    label: 'Project Writeups',
    color: '#6366F1',
    description: 'Real project case studies and lessons learned from AI implementations.',
  },
}

const allCategories = Object.keys(categoryConfig) as PostCategory[]

export function generateStaticParams() {
  return allCategories.map((category) => ({ category }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = params.category as PostCategory
  const config = categoryConfig[category]

  if (!config) {
    return { title: 'Category Not Found | Verdant AI Partners Blog' }
  }

  const title = `${config.label} Articles | Verdant AI Partners Blog`
  const description = config.description

  return {
    title,
    description,
    alternates: {
      canonical: `https://verdantaipartners.com/blog/category/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `https://verdantaipartners.com/blog/category/${category}`,
      siteName: 'Verdant AI Partners',
      type: 'website',
    },
  }
}

function getReadTime(content: string): string {
  return Math.ceil(content.split(/\s+/).length / 200) + ' min read'
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category as PostCategory
  const config = categoryConfig[category]

  if (!config) {
    return (
      <main className="min-h-screen bg-[#121411] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-[#e3e3dd] mb-4">Category not found</h1>
          <Link href="/blog" className="text-[#bcf1ae] hover:underline">
            Back to blog
          </Link>
        </div>
      </main>
    )
  }

  const filteredPosts = posts.filter((p) => p.category === category)

  return (
    <main className="min-h-screen bg-[#121411] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#bcf1ae] hover:underline mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: config.color }}
            />
            <h1 className="text-3xl sm:text-4xl font-bold text-[#e3e3dd]">{config.label}</h1>
          </div>
          <p className="text-[#c2c9bb] text-lg max-w-2xl">{config.description}</p>
          <p className="text-sm text-[#c2c9bb]/60 mt-3">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Post grid */}
        {filteredPosts.length === 0 ? (
          <p className="text-[#c2c9bb]">No articles in this category yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-[#42493e]/15 p-6 transition-all duration-200 hover:border-[#bcf1ae]/30 group bg-[#1a1c19]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: config.color }}
                  />
                  <span className="text-xs font-medium" style={{ color: config.color }}>
                    {config.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-[#bcf1ae] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {post.date} &middot; {getReadTime(post.content)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-[#bcf1ae] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Browse other categories */}
        <div className="mt-16 pt-10 border-t border-[#42493e]/20">
          <h2 className="text-xl font-bold text-[#e3e3dd] mb-6">Browse other topics</h2>
          <div className="flex flex-wrap gap-3">
            {allCategories
              .filter((c) => c !== category)
              .map((c) => {
                const catConfig = categoryConfig[c]
                const count = posts.filter((p) => p.category === c).length
                if (count === 0) return null
                return (
                  <Link
                    key={c}
                    href={`/blog/category/${c}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#42493e]/20 bg-[#1a1c19] px-4 py-2 text-sm text-[#c2c9bb] hover:border-[#bcf1ae]/30 hover:text-[#bcf1ae] transition-colors"
                  >
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: catConfig.color }}
                    />
                    {catConfig.label}
                    <span className="text-[#c2c9bb]/40 text-xs">({count})</span>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
    </main>
  )
}
