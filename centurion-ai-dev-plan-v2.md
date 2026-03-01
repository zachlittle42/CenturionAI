# Centurion AI — Development Plan v2
*Generated: Feb 28, 2026 | Based on full UX audit + marketing strategy review*

---

## Priority Order

```
P0 = Must ship before any marketing or the Alex meeting (Thu Mar 5)
P1 = Ship this week — these are active conversion killers
P2 = Ship within 2 weeks — growth multipliers
P3 = Month 2+ — nice to haves
```

---

## P0 — Pre-Meeting Critical (Ship before Thu Mar 5)

### 1. Embed Calendly on every CTA
Every "Book a Call," "Book Your Audit," "Talk to Us First," and "Get Started" button needs to open a real booking flow.

**Implementation:**
- Create a Calendly account at calendly.com (free tier works)
- Add a 30-min "Strategy Call" event type
- Add a 60-min "Strategy Audit Kickoff" event type
- Embed as popup modal (not redirect) on these pages:
  - `/strategy-audit` — both "Book Your Audit" and "Talk to Us First" buttons
  - `/get-started` — primary CTA
  - `/ai-transformation` — "Get Started" buttons under tier cards
  - `/openclaw-ai-agents` — "Get Started" button
  - Homepage — "Not sure where to start?" CTA at bottom

**How to implement:**
```tsx
// Install: npm install react-calendly
import { PopupButton } from 'react-calendly';

<PopupButton
  url="https://calendly.com/YOUR_USERNAME/strategy-call"
  rootElement={document.getElementById('root')}
  text="Book Your Audit →"
/>
```

**Calendly URL:** Replace every dead-end button href with the Calendly popup.

---

### 2. Custom domain
Point a real domain at this site. `centurionai.com` is taken — check these:
- centurionai.co
- getcenturionai.com  
- centurion-ai.com
- workwithcenturion.com
- meetcenturionai.com

**Steps:**
1. Register on Namecheap/Google Domains (~$12)
2. In Vercel dashboard → project settings → Domains → add domain
3. Update DNS records as Vercel instructs
4. Done in 10–30 min

*(Dev can't do this step — needs Zach to register domain manually)*

---

### 3. Fix "Talk to Us First" button
Currently links to nothing. Wire it to Calendly (same as above) or a mailto: as a fallback.

---

## P1 — Conversion Killers (This Week)

### 4. Add starting prices to homepage service cards
Every service card on the homepage should show a "From $X" price so visitors self-qualify before clicking through.

**Changes needed in `app/page.tsx`:**
- Tech Basics card: add "From $297/mo + $500 setup"
- Strategy Audit card: add "From $1,500 one-time"
- AI Transformation card: add "From $3,000 setup"  
- AI Engineering card: add "From $6,000/mo"
- OpenClaw AI Agents card: add "From $3,000 setup"

---

### 5. Add social proof section to homepage
Add above the fold or directly below the hero. Even placeholder works.

**Add this section to homepage, after the hero:**
```
SECTION: "Trusted by forward-thinking teams."
- 3 placeholder testimonial cards (name, company, quote)
- OR a simple "X businesses served" stat
- OR logos bar: Claude | ChatGPT | Gemini | Copilot | OpenClaw | Cursor
  (logos of AI platforms you support — credibility signal even without client logos)
```

**Logos bar is the fastest win — no client permission needed:**
```tsx
// Tool logos: Claude, ChatGPT, Gemini, Copilot, Cursor, n8n, Make, Zapier
// Show as grayscale row with label "Platforms we work with"
```

---

### 6. Homepage nav tab labels — differentiate them
Current: Tech | Strategy | AI | AI (last two look identical at a glance)
Fix: Tech | Audit | Transform | Build | Agents

Changes in `app/page.tsx` wherever the tab labels are defined.

---

### 7. Fix T3 naming conflict (AI Transformation vs OpenClaw Agents page)
On `/ai-transformation`, the T3 card is titled "OpenClaw AI Agent Implementation" — same territory as the new `/openclaw-ai-agents` page. Creates SEO cannibalization.

**Fix:** Rename T3 on the AI Transformation page to **"Managed AI Agent Infrastructure"** and add a line: "→ Learn more about our OpenClaw AI Agents service" linking to the dedicated page.

---

### 8. Add "retainers are optional" clarifier on AI Transformation
In the Ongoing Support & Retainers section, add one line above the tier cards:
```
"All implementations are complete standalone engagements. 
Retainers are optional — add ongoing support if you want us 
to continue building and iterating after launch."
```

---

### 9. OpenClaw explainer in hero (OpenClaw Agents page)
"OpenClaw" means nothing to a cold visitor. Add one sentence to the hero subheader:

Current subheader:
```
Deploy AI agents that run your business workflows 24/7 — on your infrastructure...
```

Updated:
```
OpenClaw is an open-source AI agent platform. We deploy, configure, and manage 
it for your business — so you get enterprise-grade AI agents without the enterprise 
complexity. Your infrastructure. Your data. Your control.
```

---

### 10. Meta pixel install
Install now (free) so the audience builds before you run any ads.

```tsx
// app/layout.tsx — add in <head>
<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

*Needs Zach to create a Meta Business account and get a Pixel ID — then Dev wires it in.*

---

## P2 — Growth Multipliers (Within 2 Weeks)

### 11. Lead capture form on homepage
Replace or augment the "Not sure where to start?" CTA with a simple inline form:

```
Name
Company
Biggest challenge right now (dropdown: Getting basics set up / Understanding AI options / 
                               Building AI workflows / Hiring AI engineers / Deploying AI agents)
[Get My Recommendation →]
```

Hook it to Zach's email via Resend/Formspree, or pipe into a simple Google Sheet via a Next.js API route. No CRM needed yet.

---

### 12. Tech Basics — add platform transparency to FAQ
The FAQ answer to "What platform is this built on?" currently says "our proprietary platform." 

If this is GoHighLevel white-label, say so. If it's custom-built, say: "We've built our platform on industry-standard infrastructure with enterprise-grade security. Happy to walk you through the stack on a call."

Vague answers lose technical buyers.

---

### 13. Tech Basics — add a product screenshot
Add one screenshot or mockup showing what the dashboard looks like. Even a cleaned-up screenshot of the actual product. Goes in the "Everything your business needs to run" section.

---

### 14. OpenClaw Agents — add FAQ answer for "How do I talk to my agent?"
Add this FAQ:

```
Q: How do I interact with my agent?
A: Your agent works across the tools you already use — Telegram, Slack, WhatsApp, 
or a custom web interface. You talk to it in plain English. It can also run on 
a schedule, triggering actions automatically without any input from you.
```

---

### 15. AI Engineering — add work samples section
The homepage promises "Real things we build for real businesses" — the AI Engineering page should back this up. Even 2–3 examples:

```
✓ Built a patient intake automation for a healthcare group (saved 4 hrs/week)
✓ Deployed an AI email responder for a 50-person ops team (40% faster response time)  
✓ Automated weekly reporting for a fintech startup (3 hrs of analyst time reclaimed)
```

Doesn't need to be a real client yet — frame as "types of projects we take on."

---

### 16. Blog / content section
Add a `/blog` route with a simple list of posts. Even 2–3 articles:

Suggested first posts:
1. "Why your AI pilot failed (and what to do differently)"
2. "The $1,500 question every business should answer before buying AI software"  
3. "How I built an AI agent for a medical spa in one afternoon"

These drive SEO and warm up cold traffic that finds you via LinkedIn.

---

## P3 — Month 2+ (After First Client)

### 17. Case study page
Once you close your first client (hopefully Alex), build a `/case-studies` page. Even one real case study with numbers converts better than any amount of copy.

### 18. LinkedIn social proof integration
Pull in LinkedIn recommendations or embed a testimonial widget.

### 19. A/B test hero headline
Test "AI implementation for companies that want results" vs. something more specific like "We build the AI workflows your team actually uses." Use Vercel's built-in A/B testing or a simple cookie-based toggle.

### 20. Google Analytics / Search Console
Set up GA4 and submit sitemap to Google Search Console. Required before any SEO work pays off.

---

## Priority Summary Table

| # | Task | Priority | Effort | Who |
|---|------|----------|--------|-----|
| 1 | Embed Calendly on all CTAs | P0 | Medium | Dev |
| 2 | Custom domain | P0 | Low | Zach (register) + Dev (DNS) |
| 3 | Fix "Talk to Us First" button | P0 | Low | Dev |
| 4 | Starting prices on homepage cards | P1 | Low | Dev |
| 5 | Social proof / logos bar on homepage | P1 | Low | Dev |
| 6 | Nav tab label fix | P1 | Low | Dev |
| 7 | Fix T3 naming conflict | P1 | Low | Dev |
| 8 | Retainers "optional" clarifier | P1 | Low | Dev |
| 9 | OpenClaw explainer in hero | P1 | Low | Dev |
| 10 | Meta pixel install | P1 | Low | Zach (pixel ID) + Dev |
| 11 | Lead capture form | P2 | Medium | Dev |
| 12 | Tech Basics platform transparency | P2 | Low | Dev |
| 13 | Tech Basics product screenshot | P2 | Medium | Zach (screenshot) |
| 14 | OpenClaw FAQ — "how do I talk to my agent" | P2 | Low | Dev |
| 15 | AI Engineering work samples | P2 | Low | Dev |
| 16 | Blog section + 3 posts | P2 | High | Zach + Dev |
| 17 | Case study page | P3 | High | After first client |
| 18 | LinkedIn social proof | P3 | Low | After testimonials exist |
| 19 | A/B test hero | P3 | Medium | After baseline traffic |
| 20 | GA4 + Search Console | P3 | Low | Dev |

---

## Blockers That Need Zach (Not Dev)

1. **Calendly account** — create account, set up event types, share URL with Dev
2. **Domain registration** — pick one and register (~$12), then Dev handles DNS
3. **Meta Pixel ID** — create Meta Business account, create pixel, share ID with Dev
4. **Tech Basics screenshot** — screenshot of actual product dashboard
5. **Blog content** — Dev can scaffold the blog route, but posts need Zach's voice

---

*Plan v2 prepared by Dev. Questions → Zach. Implementation → Claude Code.*
