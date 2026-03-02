'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { posts, Post, PostCategory } from './posts'

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
  comparison: { label: 'Comparisons', color: '#F97316' },
  'project-writeup': { label: 'Project Writeups', color: '#6366F1' },
}

const filterTabs: { label: string; value: PostCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Implementation', value: 'implementation' },
  { label: 'Automation', value: 'automation' },
  { label: 'AI Models', value: 'models' },
  { label: 'AI Agents', value: 'agents' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Tech Basics', value: 'tech-basics' },
  { label: 'Comparisons', value: 'comparison' },
  { label: 'Project Writeups', value: 'project-writeup' },
]

const featuredSlugs = [
  'pillar-ai-implementation-small-business',
  'pillar-ai-healthcare-wellness',
  'pillar-ai-strategy-audit',
]

function PostCard({ post }: { post: Post }) {
  const config = categoryConfig[post.category]
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-xl border border-slate-700/40 p-6 transition-all duration-200 group"
      style={{
        backgroundColor: '#1E293B',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = config.color + '60'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = ''
      }}
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
      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500">
          {post.date} &middot; {getReadTime(post.content)}
        </span>
        <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
      </div>
    </Link>
  )
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<PostCategory | 'all'>('all')

  const featuredPosts = featuredSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is Post => p !== undefined)

  const filteredPosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  // Group posts by category for the "all" view
  const groupedByCategory = new Map<PostCategory, Post[]>()
  for (const post of posts) {
    if (post.category === 'pillar') continue // pillar posts shown in hero
    const group = groupedByCategory.get(post.category)
    if (group) {
      group.push(post)
    } else {
      groupedByCategory.set(post.category, [post])
    }
  }

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden"
        style={{ backgroundColor: '#0F172A' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400/50 via-blue-400/50 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Practical AI for Business. No hype.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Guides, comparisons, and real-world walkthroughs to help you implement AI that actually works.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 relative z-10">
          {featuredPosts.map((post) => {
            const config = categoryConfig[post.category]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl border border-slate-700/40 p-6 transition-all duration-200 group hover:border-blue-400/40"
                style={{ backgroundColor: '#1E293B' }}
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
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {getReadTime(post.content)}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* STICKY FILTER BAR */}
      <div
        className="sticky top-0 z-30 border-b border-slate-700/40"
        style={{ backgroundColor: 'rgba(11, 17, 32, 0.95)', backdropFilter: 'blur(4px)' }}
      >
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex gap-1 px-4 py-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all whitespace-nowrap ${
                  activeCategory === tab.value
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <section style={{ backgroundColor: '#0B1120' }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="lg:flex lg:gap-8">
            {/* Post Grid */}
            <div className="flex-1 min-w-0">
              {activeCategory === 'all' ? (
                // Grouped view
                <div className="space-y-16">
                  {Array.from(groupedByCategory.entries()).map(([category, categoryPosts]) => {
                    const config = categoryConfig[category]
                    const displayPosts = categoryPosts.slice(0, 4)
                    return (
                      <div key={category}>
                        <div className="flex items-baseline justify-between mb-6">
                          <h2 className="text-2xl font-bold text-white">
                            {config.label}
                            <span className="text-sm font-normal text-slate-500 ml-3">
                              {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'}
                            </span>
                          </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {displayPosts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                          ))}
                        </div>
                        {categoryPosts.length > 4 && (
                          <button
                            onClick={() => setActiveCategory(category)}
                            className="mt-6 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                          >
                            View all {categoryPosts.length} posts
                            <ArrowRight className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              ) : (
                // Filtered view
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    {categoryConfig[activeCategory]?.label ?? activeCategory}
                    <span className="text-sm font-normal text-slate-500 ml-3">
                      {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <PostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SIDEBAR CTA */}
            <aside className="hidden lg:block w-80 shrink-0">
              <div className="sticky top-24">
                <div
                  className="rounded-xl border border-slate-700/40 p-6"
                  style={{ backgroundColor: '#1E293B' }}
                >
                  <h3 className="text-lg font-bold text-white">
                    Not sure where to start?
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    Book a free 30-min intro call with our team. We&apos;ll help you find
                    the highest-ROI AI opportunities in your business.
                  </p>
                  <Link
                    href="/strategy-audit"
                    className="mt-4 block text-center bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Book Strategy Audit &rarr;
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
