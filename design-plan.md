# Centurion AI Website Redesign - Design Plan

## Site Architecture

```
/                              Homepage (router + credibility)
/ai-transformation             Tiers 1-3 (platform setup → workflows → infrastructure)
/ai-engineering                Outsourced AI-augmented dev shop
/services/strategy-audit       Dedicated sub-page for the entry-point audit offering
/get-started                   Single lead gen conversion page
```

## Navigation Structure

```
[Logo: Centurion AI]   AI Transformation | AI Engineering | Strategy Audit | [Get Started →]
```

- Fixed top navbar with backdrop blur (keep existing pattern)
- "Get Started" is always the primary CTA button in nav
- Mobile: hamburger menu with all links
- No more scroll-based section anchors - each page is its own route

---

## Page-by-Page Breakdown

### 1. Homepage `/`

**Purpose:** Establish credibility, create urgency, route visitors to the right service.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Hero | `hero.tsx` (rewrite) | Bold headline about AI gap. Sub-copy: fractional AI leadership positioning. Two primary CTAs: "Transform Your Team" → /ai-transformation, "Build With Us" → /ai-engineering |
| 2 | The Problem | New: `problem-section.tsx` | 2-3 pain points: companies bought AI seats nobody uses, no strategy, competitors moving faster. Dark background for contrast |
| 3 | Two Paths | New: `two-paths.tsx` | Side-by-side cards: AI Transformation ("We make your team AI-powered") vs AI Engineering ("Our AI team builds for you"). Each with icon, 3 bullets, CTA arrow |
| 4 | Social Proof | New: `social-proof.tsx` | Metrics strip (e.g., "50+ teams transformed", "3x faster delivery"). Can use placeholder numbers initially |
| 5 | CTA | New: `cta-banner.tsx` | Full-width banner: "Ready to start?" with button to /get-started |
| 6 | Footer | `footer.tsx` (update) | Updated links for new site structure |

**Components to remove:** `two-column-intro.tsx`, `consulting-overview.tsx`, `services.tsx` (replaced by new sections)

### 2. AI Transformation `/ai-transformation`

**Purpose:** Sell Tiers 1-3 as a natural progression. High-volume entry point.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Hero | Inline in page | "Go from AI-curious to AI-native." Sub-copy about the transformation journey |
| 2 | The Gap | Section | Why ChatGPT seats alone fail: no training, no connectors, no workflows, no measurement |
| 3 | Tier 1: AI Foundations | `tier-card.tsx` | Platform setup + connectors + prompt packs + training. Platform comparison table. Starter/Growth/Scale pricing cards |
| 4 | Tier 2: Custom Workflows | `tier-card.tsx` | Claude Code setup, custom skills, multi-agent workflows. Workflow Starter/Pro/Enterprise pricing cards |
| 5 | Tier 3: Managed Infrastructure | `tier-card.tsx` | OpenClaw hosted agents. Self-Hosted/Cloud/Cloud+Local/Managed Premium pricing cards |
| 6 | How It Works | `process-steps.tsx` | 3 steps: Audit → Implement → Train & Support |
| 7 | FAQ | `faq-section.tsx` | 5-7 common objections using shadcn Accordion |
| 8 | CTA | `cta-banner.tsx` (reuse) | "Book your AI audit" → /get-started |

### 3. AI Engineering `/ai-engineering`

**Purpose:** Sell outsourced AI-augmented development. Technical buyer audience.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Hero | Inline in page | "AI-augmented engineering teams that ship 3x faster" |
| 2 | What We Build | `capabilities-grid.tsx` | Grid of capabilities: Full-stack apps, Internal tools, API integrations, Data pipelines, AI/ML features, Mobile apps |
| 3 | How It Works | `process-steps.tsx` (reuse) | Sprint model: Scoping → Embedded team → Biweekly delivery → Ship |
| 4 | Why Us | `comparison-section.tsx` | Traditional agency vs Centurion AI: speed, cost, AI tooling, outcome-based |
| 5 | Engagement Models | `pricing-cards.tsx` | Single Project / Ongoing Sprints / Dedicated Team with pricing |
| 6 | Tech Stack | `tech-stack.tsx` | Tools we use: Claude Code, Cursor, Next.js, Python, etc. |
| 7 | FAQ | `faq-section.tsx` (reuse) | Technical questions |
| 8 | CTA | `cta-banner.tsx` (reuse) | "Let's scope your project" → /get-started |

### 4. Strategy Audit `/services/strategy-audit`

**Purpose:** Low-risk entry point. The easiest thing to sell.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Hero | Inline in page | "Know exactly where AI fits in your business" |
| 2 | What You Get | `deliverables.tsx` | AI-Adoption Report, technical appendix, use case matrix, ROI projections, implementation roadmap |
| 3 | The Process | `timeline.tsx` | 30/60/90-day options with what's included at each level |
| 4 | What We Assess | `assessment-grid.tsx` | Current tools, workflows, team readiness, data maturity, quick wins |
| 5 | Pricing | `pricing-simple.tsx` | Standalone $1,500-$3,000 or credited toward Tier 1 setup |
| 6 | CTA | `cta-banner.tsx` (reuse) | "Book your audit" → /get-started |

### 5. Get Started `/get-started`

**Purpose:** Single conversion page. Every CTA on site points here.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Header | Inline | "Let's figure out the right path for you" |
| 2 | Lead Form | `lead-form.tsx` | Name, Email, Company, Team Size (dropdown), Interest (dropdown: AI Foundations / Custom Workflows / Managed Infrastructure / AI Engineering / Strategy Audit / Not sure), Message |
| 3 | Alternative | `calendly-embed.tsx` | "Prefer to talk? Book a call directly" with Calendly widget |
| 4 | What to Expect | Inline | "We respond within 24 hours with a tailored recommendation" |

---

## Design System

### Existing (keep):
- **Framework:** Next.js 14 + TypeScript
- **Styling:** Tailwind CSS + CSS variables
- **Components:** shadcn/ui (already installed with full library)
- **Icons:** Lucide React
- **Brand colors:** Blue palette (brand-50 through brand-950)
- **Dark sections:** brand-900 to black gradients
- **Cards:** shadow-md with gradient top bars
- **Animations:** fade-in, slide-up

### Additions:
- **Pricing cards:** New component using shadcn Card with "popular" badge variant
- **Comparison tables:** Using shadcn Table
- **FAQ accordion:** Using shadcn Accordion (already installed)
- **Process steps:** Numbered step component with connecting lines
- **CTA banner:** Reusable full-width gradient banner
- **Page hero:** Reusable hero component that accepts title, subtitle, CTAs as props

### Typography scale:
- Page hero titles: text-4xl md:text-5xl lg:text-6xl font-bold
- Section titles: text-3xl md:text-4xl font-bold
- Tier/card titles: text-2xl font-bold
- Body: text-base to text-lg, text-gray-700
- Small/meta: text-sm text-gray-500

### Spacing:
- Section padding: py-20 px-4
- Container: max-w-6xl mx-auto (main content), max-w-5xl for text-heavy sections
- Card grid gaps: gap-8
- Internal card padding: p-6 to p-8

---

## Component Reuse Strategy

### Shared components (new):
1. `page-hero.tsx` - Reusable hero with title, subtitle, CTA slots
2. `cta-banner.tsx` - Full-width conversion banner
3. `faq-section.tsx` - Accordion-based FAQ (accepts items array)
4. `pricing-card.tsx` - Individual pricing card with features list
5. `pricing-grid.tsx` - Grid wrapper for pricing cards
6. `process-steps.tsx` - Numbered horizontal steps

### Existing to update:
- `navbar.tsx` - Multi-page navigation with active states per route
- `footer.tsx` - Updated links
- `contact-section.tsx` → becomes `lead-form.tsx` (moved to /get-started)

### To remove:
- `two-column-intro.tsx` (replaced by new homepage sections)
- `consulting-overview.tsx` (replaced)
- `services.tsx` (replaced by service pages)

---

## Mobile Responsiveness

- All grids: 1 col on mobile, 2 on md, 3 on lg where applicable
- Pricing cards: stack vertically on mobile, horizontal scroll or stack on tablet
- Tables: horizontal scroll wrapper on mobile
- Navigation: existing hamburger pattern works, just update links
- Hero: reduce text sizes on mobile (already handled by responsive classes)
- CTA buttons: full-width on mobile

---

## File Structure

```
app/
  layout.tsx                    (update: consistent nav/footer)
  page.tsx                      (rewrite: new homepage)
  ai-transformation/
    page.tsx                    (new)
  ai-engineering/
    page.tsx                    (new)
  get-started/
    page.tsx                    (new)
  services/
    strategy-audit/
      page.tsx                  (new)
  api/
    contact/
      route.ts                  (new: form submission endpoint)

components/
  navbar.tsx                    (update)
  footer.tsx                    (update)
  page-hero.tsx                 (new)
  problem-section.tsx           (new)
  two-paths.tsx                 (new)
  social-proof.tsx              (new)
  cta-banner.tsx                (new)
  pricing-card.tsx              (new)
  pricing-grid.tsx              (new)
  process-steps.tsx             (new)
  faq-section.tsx               (new)
  lead-form.tsx                 (new)
  capabilities-grid.tsx         (new)
  comparison-section.tsx        (new)
  tech-stack.tsx                (new)
```
