# Centurion AI Website Redesign - Design Plan

---

## Pricing Tiers (Source of Truth)

---

### T1 — AI Foundation Setup
**$2,500–$3,500 (one-time)**

*"Your team actually uses AI, correctly."*

- AI readiness assessment (discovery call + current stack audit)
- Platform selection + setup (Claude Teams, ChatGPT Enterprise, Google Gemini, Copilot — your pick)
- Key connectors configured (Slack, Gmail, calendar basics)
- Role-specific prompt library (20–30 prompts tuned to actual job functions)
- 1 live team training session
- 30 days async support via Slack/email

**Time to deliver:** ~1 week
**Zach's time:** 6–10 hours
**Natural upsell:** T2 (they're using AI but want it to do more)

---

### T2 — MCP Integration + Workflow Build
**$5,000–$8,000 (one-time)**

*"Your AI is wired into every tool your team uses."*

- Full MCP setup for your tech stack: Slack, HubSpot/Salesforce, Google Drive/Notion, GitHub/Linear, Airtable, QuickBooks — whatever you run
- 3 custom automation workflows built and deployed (e.g., "inbound lead → CRM enriched → follow-up drafted → sent for approval")
- Claude Code + Cursor setup for engineering teams (if applicable)
- Coding agent workflow documentation
- Handoff training session

**Time to deliver:** 1–2 weeks
**Zach's time:** 10–20 hours (Claude Code handles most builds)
**Natural upsell:** T3 (they want it running autonomously, not just available)

---

### T3 — Managed OpenClaw Platform
**$3,500–$5,000 setup + monthly recurring**

*"AI agents running your business 24/7, on your infrastructure, managed by us."*

**Setup (one-time):**
- OpenClaw deployed on client-owned cloud (their AWS/DigitalOcean account)
- Initial agent configuration: voice, email, knowledge bot, CRM automation — up to 3 agents
- Integrations connected, workflows live
- Team onboarding + admin training

**Monthly plans:**

| Plan | Monthly | What's included |
|------|---------|----------------|
| **Managed Core** | $750/mo | Maintenance + updates + 1 coaching call + email support |
| **Managed Standard** | $1,000/mo | + 2 new workflow/skill builds + 2 coaching calls |
| **Managed Premium** | $1,500/mo | + priority support (4hr response) + 4 builds/month + unlimited async |

**API & Infrastructure passthrough:**
- Client owns their API keys (Anthropic, OpenAI, etc.) and their cloud account
- All API + hosting costs billed to their card directly — OR —
- Zach manages consolidated billing: actual API + infrastructure costs + **12% management markup**
- Monthly invoice includes: managed service fee + itemized infra/API usage
- Hard usage caps configured by default (prevents runaway costs)

**Zach's ongoing time per client:** 4–6 hrs/month
**At $1,000/month: $166–$250/hr effective rate**
**5 clients = $5,000–$7,500/month recurring**

---

### AI Engineering Retainer
**$150/hr — pick your weekly hours**

*"Submit tickets. We ship code."*

- AI-augmented development team (Claude Code + Cursor doing the heavy lifting)
- Full-stack: Next.js, React Native, Node.js, Python, PostgreSQL
- **10 hrs/week → $6,000/mo**
- **20 hrs/week → $12,000/mo** *(most popular)*
- **40 hrs/week → $24,000/mo**
- You own all code, all repos, no lock-in
- Month-to-month, cancel anytime
- Weekly delivery cadence, async Slack + dedicated project manager
- Separate from other tiers — different buyer, different contract

---

### Summary Table

| Tier | Type | Price | Recurring |
|------|------|-------|-----------|
| T1 — AI Foundation Setup | Project | $2,500–$3,500 | No |
| T2 — MCP + Workflow Build | Project | $5,000–$8,000 | No |
| T3 — Managed OpenClaw | Platform | $3,500–$5,000 setup | $750–$1,500/mo |
| T3 API/Infra Passthrough | Optional | Actual cost +12% | Varies |
| AI Engineering (10 hrs/wk) | Retainer | $6,000/mo | Yes |
| AI Engineering (20 hrs/wk) | Retainer | $12,000/mo | Yes |
| AI Engineering (40 hrs/wk) | Retainer | $24,000/mo | Yes |

---

### The Path to $5K/Month Recurring

| Milestone | Monthly Recurring |
|-----------|-----------------|
| 2 T3 Standard clients | $2,000/mo |
| 5 T3 Standard clients | $5,000/mo |
| 5 T3 + API passthrough (~$400 API avg) | $5,000 + $240 markup/mo |
| 5 T3 + 1 Engineering retainer | $8,000–$10,500/mo |

You hit your debt-paydown target at 5 T3 clients. Engineering retainers are upside.

---

*(Note: Standalone Strategy Audit at $1,500 removed. Assessment is embedded in T1 — it's how the engagement is scoped, not a separate product.)*

---

## Site Architecture

```
/                              Homepage (router + credibility)
/ai-transformation             T1–T3 service pages (Foundation → Integration → Managed)
/ai-engineering                AI-augmented dev shop + retainer pricing
/get-started                   Single lead gen conversion page
```
*(Note: /services/strategy-audit removed — audit is embedded in T1)*

## Navigation Structure

```
[Logo: Centurion AI]   AI Transformation | AI Engineering | [Get Started →]
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

**Purpose:** Sell T1–T3 as a natural progression. Discovery → Integration → Operate.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Hero | Inline in page | "Go from AI-curious to AI-native." Sub-copy: most companies have the tools, none of them work yet. |
| 2 | The Gap | Section | Why ChatGPT seats alone fail: no training, no connectors, no workflows, no measurement |
| 3 | T1: AI Foundation Setup | `tier-card.tsx` | Platform selection + setup + prompt library + training. $2,500–$3,500. "Assessment included — you leave with a working system, not a document." |
| 4 | T2: AI-Powered Dev + Integration | `tier-card.tsx` | Coding agents (Claude Code + others) + MCP integration for full stack + 3 workflows built. $5,000–$8,000. |
| 5 | T3: Managed OpenClaw | `tier-card.tsx` | Self-hosted on client infra. Setup $3,500–$5,000. Monthly $750–$1,500 (Core/Standard/Premium). Optional API/infra passthrough at cost +12%. |
| 6 | How It Works | `process-steps.tsx` | 3 steps: Discover → Build → Operate |
| 7 | FAQ | `faq-section.tsx` | 5-7 objections (shadcn Accordion) |
| 8 | CTA | `cta-banner.tsx` (reuse) | "Start with a Foundation Setup" → /get-started |

### 3. AI Engineering `/ai-engineering`

**Purpose:** Sell outsourced AI-augmented development. Technical buyer audience.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Hero | Inline in page | "AI-augmented engineering teams that ship 3x faster" |
| 2 | What We Build | `capabilities-grid.tsx` | Grid of capabilities: Full-stack apps, Internal tools, API integrations, Data pipelines, AI/ML features, Mobile apps |
| 3 | How It Works | `process-steps.tsx` (reuse) | Sprint model: Scoping → Embedded team → Biweekly delivery → Ship |
| 4 | Why Us | `comparison-section.tsx` | Traditional agency vs Centurion AI: speed, cost, AI tooling, outcome-based |
| 5 | Engagement Models | `pricing-cards.tsx` | 10 hrs/wk $3K/mo / 20 hrs/wk $5K/mo / 40 hrs/wk custom. Client owns all code. |
| 6 | Tech Stack | `tech-stack.tsx` | Tools we use: Claude Code, Cursor, Next.js, Python, etc. |
| 7 | FAQ | `faq-section.tsx` (reuse) | Technical questions |
| 8 | CTA | `cta-banner.tsx` (reuse) | "Let's scope your project" → /get-started |

### 4. ~~Strategy Audit `/services/strategy-audit`~~ — REMOVED

Assessment is now embedded in T1 (AI Foundation Setup). Not sold as a standalone.
The discovery call + readiness assessment is how T1 is scoped — it's a phase, not a product.
Remove this route and any nav/footer links pointing to it.

### 5. Get Started `/get-started`

**Purpose:** Single conversion page. Every CTA on site points here.

| Order | Section | Component | Content |
|-------|---------|-----------|---------|
| 1 | Header | Inline | "Let's figure out the right path for you" |
| 2 | Lead Form | `lead-form.tsx` | Name, Email, Company, Team Size (dropdown), Interest (dropdown: AI Foundation Setup / AI-Powered Dev + Integration / Managed OpenClaw / AI Engineering / Not sure yet), Message |
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
