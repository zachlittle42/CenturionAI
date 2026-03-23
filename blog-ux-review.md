# Blog UX Redesign — Review

**Date:** March 1, 2026
**URL:** https://v0-centurion-ai-si.vercel.app/blog
**Commit:** `feat: blog UX redesign — featured posts, topic filters, related posts, sidebar CTA`

---

## What Was Built

### 1. Category Metadata (posts.ts)
- Added `PostCategory` type and `Post` interface with TypeScript enforcement
- Categorized all 66 posts across 9 categories: pillar (7), implementation (8), automation (8), models (8), agents (9), healthcare (7), tech-basics (5), comparison (5), project-writeup (9)

### 2. Blog Index Page — Full Redesign
- **Hero Section**: "Practical AI for Business. No hype." headline with 3 featured pillar post cards (AI Implementation, Healthcare, Strategy Audit)
- **Sticky Filter Bar**: 9 category tabs with horizontal scroll on mobile, amber/gold active state, backdrop blur on scroll
- **Grouped Post Grid** ("All" view): Posts grouped by category with section headers, 4 cards per section, "View all" links per category. Pillar posts excluded from grid (shown in hero)
- **Filtered View**: When a category is selected, full 3-column grid of all matching posts
- **Sidebar CTA**: "Not sure where to start?" with Strategy Audit button, sticky on desktop, hidden on mobile
- **Architecture**: Server component (page.tsx) for SEO metadata + client component (BlogContent.tsx) for interactive filters

### 3. Individual Post Page — Improvements
- **Reading Progress Bar**: Amber 3px bar at top of viewport, tracks scroll progress (client component)
- **Category Badge + Read Time**: Colored badge with dot + label, calculated read time (words / 200 wpm)
- **2-Column Layout**: Article content on left, sticky "Book a Strategy Audit" sidebar CTA on right (desktop only)
- **Related Posts**: 3 posts from the same category shown at bottom with category badges, excerpts, and read times

### 4. Post Card Design
- Consistent card component with category-colored dot + label, title, excerpt (2-line clamp), date + read time
- Hover: border color transitions to category color
- Category color system: blue (pillar), emerald (implementation), violet (automation), amber (models), cyan (agents), rose (healthcare), slate (tech-basics), orange (comparison), indigo (project-writeup)

---

## What Works Well

1. **Wayfinding is massively improved** — users can instantly filter 66 posts by topic instead of scrolling a flat list
2. **Featured hero cards** surface the 3 most important pillar articles immediately
3. **Category badges** provide visual hierarchy — you can scan the grid and understand the content taxonomy at a glance
4. **Sticky filter bar** stays accessible as you scroll, making it easy to switch topics without scrolling back up
5. **Read time estimates** set expectations before clicking into a post
6. **Related posts** keep users engaged after reading — same-category recommendations are highly relevant
7. **Sidebar CTAs** on both index and post pages provide consistent conversion opportunities without interrupting content
8. **Architecture split** (server + client components) preserves SEO metadata while enabling interactive filtering

---

## What to Improve Next

1. **Search**: Add a search bar to the filter bar for finding posts by keyword — especially useful as the blog grows past 100 posts
2. **URL-based filtering**: Sync the active category to a URL query parameter (`/blog?category=healthcare`) so filtered views are shareable and bookmarkable
3. **Pagination or infinite scroll**: The "All" view loads all 66 posts at once. As the blog grows, consider lazy loading or "Load more" buttons per category
4. **Hero rotation**: Consider rotating featured posts periodically or using analytics to surface highest-performing content
5. **Table of contents**: For pillar posts (12+ min read), add a sticky ToC sidebar for in-article navigation
6. **Markdown rendering**: The post content renderer uses basic regex for bold/italic/headings. Consider switching to a proper markdown renderer (remark/rehype) for better formatting support (lists, code blocks, links)
7. **Reading progress bar scope**: Currently tracks full page scroll including related posts and footer — ideally it should only track the article content area
8. **Mobile sidebar CTA**: The sidebar CTA is hidden on mobile. Consider adding a floating bottom CTA bar or an inline CTA after the article content on mobile
9. **Post thumbnails/images**: Adding hero images or category-specific illustrations to cards would increase visual appeal and click-through rates
10. **Analytics integration**: Track filter usage, card clicks, and CTA conversions to optimize layout and content strategy

---

## Screenshots

- `blog-index-hero.png` — Hero section with featured cards, filter bar, grouped grid
- `blog-healthcare-filter.png` — Healthcare category filter active, showing 7 posts in 3-column grid
- `blog-post-page.png` — Individual post with category badge, read time, sidebar CTA
- `blog-post-related.png` — Related posts section at bottom of individual post

---

## Files Changed

| File | Change |
|------|--------|
| `app/blog/posts.ts` | Added `PostCategory` type, `Post` interface, `category` field to all 66 posts |
| `app/blog/page.tsx` | Simplified to server component wrapper with SEO metadata |
| `app/blog/BlogContent.tsx` | **New** — Client component with hero, filters, grouped grid, sidebar |
| `app/blog/[slug]/page.tsx` | Added category badge, read time, 2-column layout, related posts, sidebar CTA |
| `app/blog/[slug]/ReadingProgress.tsx` | **New** — Client component for reading progress bar |
