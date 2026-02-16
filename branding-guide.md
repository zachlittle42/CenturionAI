# Centurion AI - Branding Guide

## Brand Identity

**Company:** Centurion AI
**Tagline:** "AI implementation that actually works."
**Positioning:** We're not another AI consultancy that sells decks. We set up, configure, train, build, and run AI systems for businesses. Two models: we transform your team, or our team builds for you.

---

## Brand Voice & Tone

### Voice Principles

1. **Direct, not salesy.** Say what we do, what it costs, and what they get. No buzzword soup, no "leverage synergies," no "unlock potential." If a sentence could come from any consulting firm, rewrite it.

2. **Builder credibility.** We're practitioners, not advisors. We've built with Claude Code, shipped with AI agents, deployed OpenClaw. Reference real tools and real workflows, not abstract "AI solutions."

3. **Confident but not arrogant.** We know this space. We don't need to prove it with jargon. Simple statements of fact land harder than overblown claims.

4. **Urgency without fear-mongering.** The AI gap is real and growing. Companies that wait will fall behind. But we're not selling panic - we're selling the bridge across.

### Tone by Context

| Context | Tone |
|---------|------|
| Headlines | Bold, punchy, conversational. 5-10 words max. |
| Body copy | Clear, specific, benefit-focused. Short paragraphs. |
| Pricing sections | Transparent, no-nonsense. Show the numbers. |
| CTAs | Action-oriented. "Book your audit" not "Learn more" |
| Technical sections | Precise but accessible. Name the tools. |
| FAQ answers | Honest, direct. Address the real objection. |

### Words We Use
- Ship, build, deploy, configure, set up, train, automate
- Measurable, specific, concrete, practical
- Claude Code, OpenClaw, Cursor (real tool names)
- Sprint, delivery, outcome, workflow

### Words We Avoid
- Leverage, synergize, unlock, empower, revolutionize
- Cutting-edge, state-of-the-art, world-class
- "AI solutions" (say what the solution actually is)
- "Digital transformation" (too generic)
- "Our proprietary methodology" (just describe what you do)

---

## Messaging Framework

### The Core Problem
> Most companies bought AI seats. Nobody uses them well. There's no strategy, no training, no measurement. Meanwhile, competitors are shipping 3x faster with AI-augmented teams.

### Two Audiences, Two Messages

**AI Transformation Buyer** (COO, CEO, VP Ops, non-technical leaders)
- Pain: "We're paying for Claude/ChatGPT but nobody really uses it"
- Message: "We set up AI tools your team will actually use, train them to be effective, and build automated workflows that save real hours"
- Proof: Hours saved, adoption rates, workflow automation counts
- Entry point: Strategy audit ($1,500-$3,000)

**AI Engineering Buyer** (CTO, VP Eng, technical founders)
- Pain: "We need to ship faster but can't hire fast enough"
- Message: "Our AI-augmented engineering teams deliver working software in biweekly sprints, at a fraction of traditional agency cost"
- Proof: Delivery speed, cost comparison, shipped products
- Entry point: Scoping call for a single project

### Value Propositions by Tier

| Tier | One-Liner |
|------|-----------|
| AI Foundations (T1) | "We set up, connect, and train your team on AI platforms - so they actually get used." |
| Custom Workflows (T2) | "We build automated workflows that replace hours of repetitive work with minutes of AI." |
| Managed Infrastructure (T3) | "We host and manage always-on AI agents on your infrastructure." |
| AI Engineering | "Our AI-augmented dev teams ship your software 3x faster than traditional agencies." |
| Strategy Audit | "A 30-day audit that tells you exactly where AI fits, what it costs, and what ROI to expect." |

---

## Visual Identity

### Color Palette

**Primary: Brand Blue**
```
brand-50:  #f0f7ff  (backgrounds, light tints)
brand-100: #e0eefe  (hover states, light cards)
brand-200: #bae0fd  (borders, accents)
brand-300: #7cc8fb  (secondary elements)
brand-400: #36aaf5  (icons, highlights)
brand-500: #0c8ee7  (primary actions)
brand-600: #0070dc  (buttons, links - PRIMARY)
brand-700: #0059b3  (button hover)
brand-800: #004a94  (dark accents)
brand-900: #003e7a  (dark backgrounds)
brand-950: #00264d  (darkest, text on dark)
```

**Neutrals (existing Tailwind grays):**
- Text primary: gray-900
- Text secondary: gray-700
- Text muted: gray-500
- Borders: gray-200
- Light backgrounds: gray-50
- Dark sections: gray-900 or brand-900 to black gradient

**Accent (for pricing "popular" badges and highlights):**
- Use brand-500 with a subtle glow/ring
- "Most Popular" badges: brand-600 bg with white text

### Typography

- **Font:** System font stack (already configured in Next.js)
- **Headings:** font-bold, tracking-tight
- **Body:** Leading-relaxed for readability

### Iconography
- Lucide React icons throughout
- Consistent sizing: h-5 w-5 (inline), h-6 w-6 (cards), h-7 w-7 (feature icons)
- Icon color: brand-600 on light backgrounds, brand-400 on dark backgrounds
- Icons in rounded-lg containers with brand-50 or brand-100 background

### Card Patterns
- White cards with shadow-md, border-0
- Gradient top bar (h-1 or h-2, from-brand-500 to-brand-700)
- Hover: shadow-xl transition
- Pricing "popular" card: ring-2 ring-brand-500, shadow-lg

### Section Backgrounds
- Alternating: white → gray-50 → white → dark (brand-900/black gradient) → white
- Dark sections for emphasis moments (problem statement, social proof, CTA banners)
- Subtle blur circles for depth (existing pattern - keep it)

---

## Copy Conventions

### Headlines
- Short. 3-8 words when possible.
- Use periods for statements. Questions sparingly.
- First word capitalized, rest lowercase (sentence case) for sub-heads.
- ALL CAPS only for tiny labels/badges.

### CTAs
- Always verb-first: "Book your audit", "Build with us", "Get started", "See pricing"
- Primary CTA: brand-600 bg button
- Secondary CTA: outline variant
- Every page ends with a CTA to /get-started

### Pricing Display
- Show real numbers. Transparency builds trust.
- Setup fee + monthly recurring format
- "Starting at" language only when variable
- Include what's in each tier as bullet points with check marks

### Social Proof
- Use specific numbers over vague claims ("47 teams" not "many teams")
- Placeholder format for now: "XX teams transformed" / "Xh average time saved per employee per week"
- Testimonial format: quote + name + title + company

---

## The Two-Door Positioning

The homepage must clearly present two paths:

**Door 1: AI Transformation**
- Visual: Warm, approachable. People-focused imagery direction.
- Copy frame: "Your team + AI tools = better output"
- Icon: Users/team icon
- Color accent: brand-500 (slightly lighter, approachable)

**Door 2: AI Engineering**
- Visual: Technical, precise. Code/build imagery direction.
- Copy frame: "Our team + AI tools = your product shipped"
- Icon: Code/terminal icon
- Color accent: brand-700 (slightly darker, technical)

Both doors lead to the same conversion point: /get-started
