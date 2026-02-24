# Cost Plus Labs — Blood Work E-Commerce Business Requirements

**Concept:** A low-price, high-volume, cash-pay online vendor of lab diagnostic services. Customers self-order blood work online and either (A) receive a collection kit shipped to their door, (B) go to a local partner lab for a draw, or (C) have a mobile phlebotomist come to them. The Mark Cuban Cost Plus Drugs model — transparent cost-plus pricing — applied to lab diagnostics.

---

## Table of Contents

1. [Three Fulfillment Models](#three-fulfillment-models)
2. [Regulatory Requirements (Federal)](#regulatory-requirements-federal)
3. [Regulatory Requirements (State)](#regulatory-requirements-state)
4. [Business Entity & Licensing](#business-entity--licensing)
5. [Lab Partnerships](#lab-partnerships)
6. [Physician Ordering Network](#physician-ordering-network)
7. [Technology Platform](#technology-platform)
8. [Pricing Strategy & Unit Economics](#pricing-strategy--unit-economics)
9. [Competitive Landscape](#competitive-landscape)
10. [Risk & Compliance Summary](#risk--compliance-summary)
11. [Go-to-Market Roadmap](#go-to-market-roadmap)

---

## Three Fulfillment Models

### Model A — Ship-to-Home Collection Kit
Customer orders online → receives a finger-prick or dried blood spot collection kit → collects sample at home → mails kit back in a prepaid mailer → CLIA-certified lab processes it → results delivered online.

**Pros:** Scalable, no brick-and-mortar, national reach, low marginal cost per order.
**Cons:** Limited test menu (finger-prick can't do everything a venous draw can), FDA scrutiny on kits, shipping logistics for biological specimens, longer turnaround.
**Examples:** Everlywell, LetsGetChecked, Imaware.

### Model B — Order Online, Draw at Local Lab
Customer orders online → receives a lab order (requisition) → walks into a Quest Diagnostics or LabCorp patient service center → gets a standard venous blood draw → results delivered online.

**Pros:** Full test menu, no specimen shipping, fast turnaround (1-2 days), lowest operational complexity — you are a front-end/marketplace only.
**Cons:** Dependent on lab network partnerships, customer must travel to a draw site, less differentiated.
**Examples:** RequestATest, Walk-In Lab, Ulta Lab Tests, HealthLabs.

### Model C — Mobile Phlebotomy (Come to You)
Customer orders online → schedules a time → certified phlebotomist arrives at their home/office → performs venous draw → transports specimen to partner lab → results delivered online.

**Pros:** Premium convenience, full test menu, differentiated service, higher willingness to pay.
**Cons:** Highest cost per order, geographic density required, phlebotomist staffing/scheduling complexity, vehicle/insurance/waste disposal overhead.
**Examples:** Getlabs, Scarlet Health, some concierge medicine practices.

### Recommended Launch Strategy
**Start with Model B** (online ordering → local lab draw). Lowest capital, fastest to market, full test menu. Add Model C (mobile phlebotomy) in high-density metros as a premium upsell. Add Model A (home kits) later for specific high-volume tests (hormone panels, STI panels, etc.) once volume justifies the FDA/kit logistics investment.

---

## Regulatory Requirements (Federal)

### CLIA (Clinical Laboratory Improvement Amendments)
- **Who it applies to:** Any laboratory performing testing on human specimens for health assessment or diagnosis.
- **What it means for you:** If you are the marketplace/ordering platform only (Model B), *you* don't need CLIA certification — your partner labs (Quest, LabCorp) already have it. If you operate your own lab (insourcing model) or run a mobile phlebotomy operation that does any point-of-care testing, you need your own CLIA certificate.
- **CLIA certificate types:** Certificate of Waiver (~$200/2 years, for simple waived tests only), Certificate of Registration, Certificate of Compliance, Certificate of Accreditation.
- **For mobile phlebotomy (Model C):** If you are collecting specimens only (not performing tests on-site), a Certificate of Waiver may suffice. If you run any CLIA-waived tests (e.g., rapid glucose), you need at least a CoW. Consult CMS form CMS-116.
- **Key resource:** [CMS CLIA Program](https://www.cms.gov/medicare/quality/clinical-laboratory-improvement-amendments)

### FDA
- **Collection kits (Model A):** At-home collection devices that are shipped to consumers may be classified as medical devices. The distinction matters:
  - **Collection-only kits** (you collect the sample, mail it to a CLIA lab for processing): These have historically operated under Laboratory Developed Test (LDT) enforcement discretion, but FDA scrutiny is increasing.
  - **Standalone OTC diagnostic devices** (the test is performed at home): These require FDA 510(k) clearance or De Novo classification.
- **2024 FDA Final Rule on LDTs:** FDA published a final rule in April 2024 to regulate LDTs as medical devices with a phased enforcement timeline. However, a federal court blocked this rule in April 2025. The regulatory future remains uncertain. Monitor this closely.
- **For Model B (marketplace only):** FDA requirements are minimal — you're not manufacturing or distributing a medical device. The partner labs handle FDA compliance for the tests themselves.
- **FTC:** The Federal Trade Commission will scrutinize marketing claims. Do not make diagnostic or treatment claims. Position as "informational" or "wellness" testing where appropriate.

### HIPAA
- **Mandatory** regardless of model. You are handling Protected Health Information (PHI) — names, dates of birth, lab results.
- Requirements: encrypted data storage, encrypted transmission, access controls, audit logs, breach notification procedures, Business Associate Agreements (BAAs) with every vendor touching PHI (payment processor, lab partner, cloud hosting, email provider, etc.).
- Your tech stack must be HIPAA-compliant from day one. This affects hosting (need BAA-covered cloud — AWS, GCP, and Azure all offer this), email (no standard Gmail), analytics (no standard Google Analytics without configuration), etc.

### Anti-Kickback Statute (AKS) & Stark Law
- These federal laws prohibit certain financial arrangements between entities that refer patients for services reimbursable by federal healthcare programs.
- **Relevance:** Since your model is cash-pay (no insurance billing), Stark Law technically doesn't apply (it's Medicare-specific). AKS is broader and could apply if any test is ever billed to a federal program. Stay cash-only to simplify this, but get legal counsel if you ever consider accepting insurance.
- Physician compensation in your ordering network must be at fair market value and not tied to volume/value of referrals.

---

## Regulatory Requirements (State)

### Direct Access Testing (DAT) Laws — The #1 Gating Factor

State law determines whether consumers can order lab tests without a physician's authorization. This is the single most important regulatory variable for your business.

**States that ALLOW direct access (no physician order required) — 25 states + DC:**
AK, AR, DC, DE, IN, IA, KS, LA, MN, MS, MO, MT, NE, NM, NC, ND, OH, OK, SD, TX, UT, VA, VT, WA, WI, WV

**States that ALLOW with RESTRICTIONS (limited test menu or require some clinician involvement) — 12 states:**
AZ, CA, CO, FL, IL, ME, MD, MA, NV, NJ, NY, OR

**States that PROHIBIT direct access — 13 states:**
AL, CT, GA, HI, ID, KY, MI, NH, PA, RI, SC, TN, WY

### What This Means Operationally
- In the 25 unrestricted DAT states, customers can order directly. You may still want a physician sign-off for liability protection, but it's not legally required.
- In the 12 restricted states, you need a physician ordering network to write the requisition. Some states restrict which tests can be consumer-ordered.
- In the 13 prohibited states, **every order must go through a physician.** You need a licensed physician in each state to review and authorize each order. This is how RequestATest and Walk-In Lab operate nationally — they maintain a national physician network.
- **Bottom line:** To operate in all 50 states, you need a physician ordering network regardless. In DAT states it's optional but adds a layer of clinical legitimacy and liability protection.

### State-Specific Lab Licenses
Some states require laboratories (and in some cases, entities that order lab work) to hold state-specific licenses beyond federal CLIA. Examples:
- **New York:** NYSDOH Clinical Laboratory Permit required. NY has some of the strictest lab regulations in the country.
- **California:** Phlebotomists must hold a state-issued California Phlebotomy Technician (CPT) certificate.
- **Florida:** Mobile phlebotomy businesses must have a Clinical Laboratory License from AHCA and a medical director.
- **Washington, Nevada, Louisiana:** Require state-specific phlebotomy licenses.

### State Business Licenses & Sales Tax
- Standard business registration in your home state.
- Sales tax on physical goods (collection kits in Model A) varies by state. Lab services are generally not subject to sales tax in most states, but collection kits as physical products may be.

---

## Business Entity & Licensing

### Entity Structure
- **LLC or Public Benefit Corporation (PBC)** — a PBC signals mission-driven intent (like Mark Cuban Cost Plus Drugs). This can be a marketing advantage.
- Register in your home state, file for foreign qualification in states where you have physical operations (lab, office, phlebotomists).
- Get an EIN from the IRS.

### Insurance
- **Professional liability / errors & omissions (E&O):** Covers claims arising from incorrect results, delayed reporting, etc.
- **General liability:** Standard business coverage.
- **Cyber liability / data breach insurance:** Critical given HIPAA data.
- **Workers' comp:** Required if you employ phlebotomists (Model C).
- **Commercial auto:** If phlebotomists use company vehicles (Model C).
- **Medical waste liability:** For specimen handling and disposal.

### Key Contracts Needed
1. **Lab services agreement** with Quest Diagnostics and/or LabCorp (or regional labs).
2. **Physician services agreement** for your ordering network (independent contractor physicians licensed in each state).
3. **Business Associate Agreements (BAAs)** with every vendor touching PHI.
4. **Terms of service & informed consent** for customers (disclaiming physician-patient relationship, noting that results are informational, advising follow-up with their own doctor).
5. **Privacy policy** (HIPAA-compliant, clearly stating how data is used, stored, shared).

---

## Lab Partnerships

### The Two Big Nationals

| | Quest Diagnostics | LabCorp |
|---|---|---|
| **Locations** | ~2,250 patient service centers | ~2,000 patient service centers |
| **Test menu** | 3,000+ tests | 5,000+ tests |
| **Consumer platform** | questhealth.com | ondemand.labcorp.com |
| **Affiliate program** | Yes — via Impact network | Yes — via Impact network |
| **Reseller/partner path** | Quest Partner Solutions (API available) | Lab Programs & Partnerships |
| **Turnaround** | 1-2 business days typical | 1-2 business days typical |

### Partnership Models

**Option 1: Affiliate (Easiest Start)**
- Sign up for Quest and/or LabCorp affiliate programs through the Impact network.
- Earn commissions on referrals. You control the front-end experience but pricing is set by them.
- Low control over pricing = hard to be the "cost plus" low-price leader.

**Option 2: Reseller / White-Label Partner (Recommended)**
- Negotiate a wholesale/reseller agreement directly with Quest or LabCorp.
- You buy tests at wholesale rates, mark them up on your own terms, and control the customer experience end-to-end.
- This is how RequestATest, Walk-In Lab, and Ulta Lab Tests operate.
- Requires higher volume commitments and a direct sales negotiation.
- Contact Quest Partner Solutions and LabCorp organizational partnerships to initiate.

**Option 3: Regional Lab Partnerships**
- Partner with independent CLIA-certified labs (Sonic Healthcare, BioReference, regional labs).
- Often more flexible on pricing and willing to negotiate with smaller-volume partners.
- Can supplement Quest/LabCorp with better pricing on specific panels.

**Option 4: Own Your Lab (Long-Term)**
- Build or acquire a CLIA-certified laboratory.
- Maximum margin control. This is how Everlywell eventually vertically integrated.
- High capital expenditure, regulatory complexity, and operational burden. Not a day-one play.

### Recommended Approach
Start with **Option 2** (reseller agreement) with both Quest and LabCorp. This gives you 4,000+ draw locations nationally, full test menu, and pricing control. Supplement with regional labs where they undercut the nationals on specific tests.

---

## Physician Ordering Network

### Why You Need One
Even in states that allow direct access testing, having a physician review and authorize orders provides:
1. Legal compliance in all 50 states (required in 25 of them).
2. Liability protection (a licensed physician has reviewed the order).
3. Clinical safety net (physicians can flag inappropriate orders or dangerous result patterns).
4. Credibility with consumers and lab partners.

### How to Build It
- **Option 1: Contract with a telehealth physician network.** Companies like Wheel, OpenLoop, or SteadyMD provide physician networks as a service. They handle licensing, credentialing, and malpractice insurance. You pay per-review or a monthly fee.
- **Option 2: Build your own network.** Recruit physicians licensed in each state as independent contractors. More control, more administrative burden. Each physician needs to be licensed in the state where the patient is located.
- **Option 3: Hybrid.** Use a telehealth network for broad coverage, supplement with your own physicians in high-volume states.

### Physician Workflow
1. Customer places order on your platform.
2. Order is routed to a licensed physician in the customer's state.
3. Physician reviews the order (asynchronous — no live visit needed for most wellness/screening tests).
4. Physician approves and signs the lab requisition.
5. Requisition is sent to the partner lab.
6. After results are available, physician reviews for critical values.
7. If critical values are found, physician contacts the customer directly.

### Compensation
- Typical rates: $2–$10 per order review (asynchronous), depending on volume and complexity.
- Must be fair market value — cannot be tied to test volume to avoid AKS issues.
- Telehealth network providers typically charge $3–$8 per encounter.

---

## Technology Platform

### Core Components

1. **E-commerce storefront** — Test catalog, search, filtering, bundling, cart, checkout.
2. **Physician ordering workflow** — Route orders to licensed physicians for review/approval by state.
3. **Lab integration** — API/HL7/FHIR integration with Quest, LabCorp, and any regional labs for requisition submission and results retrieval.
4. **Results portal** — Secure, HIPAA-compliant patient portal for viewing and downloading results (PDF + structured data).
5. **Payment processing** — Stripe or similar with HIPAA-compatible configuration. Cash-pay only simplifies this enormously (no insurance billing, no claims, no ERA/EOBs).
6. **Scheduling system** — For Model C (mobile phlebotomy), appointment booking with time/location.
7. **CRM / customer accounts** — Order history, longitudinal health data tracking, reorder reminders.
8. **Admin dashboard** — Order management, physician queue, lab status tracking, customer support tools.

### Tech Stack (Aligned with Centurion AI Capabilities)
- **Frontend:** Next.js + TypeScript + Tailwind CSS (you already run this stack)
- **Backend:** Node.js API routes or a separate Python/FastAPI service for lab integrations
- **Database:** PostgreSQL (patient data, orders, results)
- **Auth:** NextAuth.js or Clerk with MFA (HIPAA requires access controls)
- **Hosting:** AWS or GCP with BAA in place (both offer HIPAA-eligible services)
- **Payments:** Stripe (offers BAA for healthcare)
- **Lab integration:** HL7v2 / FHIR APIs (Quest and LabCorp both support electronic ordering)
- **Email:** SendGrid or AWS SES with BAA (no standard transactional email services)
- **File storage:** S3 with encryption at rest (for lab result PDFs)

### Key Integrations
- **Quest Health API** — Electronic test ordering and results retrieval
- **LabCorp API** — Same
- **Physician network platform** — Wheel, OpenLoop, or custom
- **Scheduling** — Calendly API or custom for mobile phlebotomy
- **SMS/notifications** — Twilio (offers BAA) for order updates and result notifications

---

## Pricing Strategy & Unit Economics

### The Cost Plus Model
Borrow directly from Mark Cuban's playbook:

```
Customer price = Lab wholesale cost + fixed markup (%) + order fee
```

**Example:**
| Component | Amount |
|---|---|
| Lab wholesale cost (CBC at Quest) | ~$5–8 |
| Your markup (e.g., 30%) | ~$1.50–2.40 |
| Per-order fee (physician review + platform) | $5.00 |
| **Customer pays** | **~$12–15** |

Compare to current market: Ulta Lab Tests charges $14.95 for a CBC, RequestATest charges higher. At $12, you're the low-price leader.

### Current Market Pricing (What Customers Pay Today)

| Test | RequestATest | Walk-In Lab | Ulta Lab Tests | Your Target |
|---|---|---|---|---|
| CBC | ~$29 | ~$24 | $14.95 | $10–12 |
| BMP | ~$29 | $28 | $12.95 | $10–12 |
| CMP | ~$39 | $39 | ~$20 | $15–18 |
| Lipid Panel | ~$39 | ~$34 | ~$18 | $12–15 |
| TSH | ~$39 | ~$35 | ~$20 | $15–18 |
| CBC + CMP combo | $59 | $46 | ~$30 | $22–28 |
| Basic Wellness (CBC+CMP+Lipid+A1C) | $129 | ~$99 | ~$60 | $45–55 |

*Prices are approximate and fluctuate with promotions.*

### Revenue Streams
1. **Test markup** — Primary revenue. Volume-driven.
2. **Per-order service fee** — Fixed fee per order ($3–5) covers physician review and platform costs.
3. **Bundle premiums** — Curated panels at slight premium over sum-of-parts.
4. **Mobile phlebotomy fee** — $25–50 convenience fee for Model C (come-to-you draw).
5. **Subscription/membership** — Optional: monthly/annual membership for frequent testers (e.g., $9.99/mo for 10% off all tests + free shipping on kits).
6. **Affiliate/referral** — Partner with health coaches, biohackers, functional medicine practitioners who refer patients.

### Unit Economics Target (Model B — Online Order, Lab Draw)

| Per-Order | Amount |
|---|---|
| Average order value (AOV) | $35–50 |
| Lab wholesale cost (COGS) | $10–18 |
| Physician review cost | $3–5 |
| Payment processing (3%) | $1.05–1.50 |
| **Gross margin per order** | **$12–25 (~50–60%)** |
| Customer acquisition cost (CAC) target | $5–15 |
| **Contribution margin** | **$7–15 per order** |

At 1,000 orders/month: ~$7K–15K contribution margin.
At 10,000 orders/month: ~$70K–150K contribution margin.
At 100,000 orders/month: ~$700K–1.5M contribution margin.

The business scales on volume. The cost-plus model and radical price transparency is the growth engine.

---

## Competitive Landscape

### Direct Competitors (Online Lab Test Ordering — Model B)

| Company | Lab Partners | Approx. Tests | Pricing Model | Notes |
|---|---|---|---|---|
| **RequestATest** | Quest + LabCorp | ~1,000 | Retail + $4 order fee | Established, decent SEO |
| **Walk-In Lab** | Quest + LabCorp | ~1,100 | Retail, frequent sales | Good refund policy |
| **Ulta Lab Tests** | Quest | ~1,000 | Low retail, promos | Often cheapest, Quest-only |
| **HealthLabs** | Quest + LabCorp | ~500+ | Retail | Doctor consultation included |
| **Personalabs** | LabCorp | ~500+ | Retail | LabCorp-focused |
| **LabCorp OnDemand** | LabCorp (direct) | 100+ | Retail | First-party, limited menu |
| **Quest Health** | Quest (direct) | 150+ | Retail | First-party, limited menu |
| **Marek Diagnostics** | LabCorp | Focused menu | Low-cost | Popular with fitness/TRT crowd |

### Adjacent Competitors

| Company | Model | Notes |
|---|---|---|
| **Everlywell** | Home kits (Model A) | VC-backed, mainstream brand |
| **LetsGetChecked** | Home kits (Model A) | Strong international presence |
| **Getlabs** | Mobile phlebotomy (Model C) | B2B2C, partners with DTC companies |
| **Scarlet Health** | Mobile phlebotomy (Model C) | Similar to Getlabs |

### Your Differentiation: Cost Plus Transparency
None of these competitors use a transparent cost-plus pricing model. They all use opaque retail pricing with frequent sales/coupons. Adopting a "wholesale cost + X% + flat fee" model — and showing it on every product page — would be genuinely novel in this space and directly echoes the Mark Cuban Cost Plus Drugs playbook that consumers already trust and understand.

---

## Risk & Compliance Summary

| Risk | Severity | Mitigation |
|---|---|---|
| State DAT law violations | **High** | Physician ordering network in all states; legal review per state |
| HIPAA breach | **High** | HIPAA-compliant tech stack from day one; BAAs with all vendors; regular security audits |
| FDA enforcement on home kits | **Medium** | Delay Model A until regulatory clarity; start with Model B |
| Lab partner relationship loss | **Medium** | Dual-source (Quest + LabCorp); add regional labs |
| Physician liability | **Medium** | Malpractice coverage for network; clear SOPs for critical values |
| FTC marketing enforcement | **Medium** | No diagnostic/treatment claims; "informational" positioning; legal review of all marketing |
| Anti-kickback statute | **Low** (cash-pay) | Fair market value physician compensation; no volume-based incentives; stay cash-only |
| State phlebotomy licensing (Model C) | **Medium** | Verify requirements per state; hire only properly credentialed phlebotomists |
| Price war with incumbents | **Low-Medium** | Volume-based wholesale negotiation; transparent pricing builds loyalty |

---

## Go-to-Market Roadmap

### Phase 1 — MVP (Model B Only)
- [ ] Form entity (LLC or PBC)
- [ ] Healthcare attorney engagement (state DAT compliance, terms of service, privacy policy)
- [ ] Negotiate reseller agreement with Quest Diagnostics and/or LabCorp
- [ ] Contract with telehealth physician network (Wheel, OpenLoop, or SteadyMD)
- [ ] Build e-commerce platform (test catalog, checkout, physician routing, results portal)
- [ ] HIPAA-compliant infrastructure setup (AWS/GCP with BAA, encrypted DB, audit logging)
- [ ] Launch with 50–100 most popular tests in the 25 unrestricted DAT states
- [ ] Pricing: transparent cost-plus model, undercut all competitors by 20–40%
- [ ] Marketing: SEO ("cheap blood work online," "blood test without doctor"), Reddit health/biohacking communities, health coach referral program

### Phase 2 — National Expansion
- [ ] Expand physician network to cover all 50 states
- [ ] Add second lab partner (if started with one)
- [ ] Expand test menu to 500+ tests
- [ ] Add subscription/membership tier
- [ ] Build API for B2B partners (health coaches, wellness companies, employers)
- [ ] Employer wellness program sales channel

### Phase 3 — Mobile Phlebotomy (Model C)
- [ ] Launch mobile phlebotomy in 3–5 high-density metros (e.g., Dallas, Austin, Phoenix, Miami, Atlanta)
- [ ] Hire/contract certified phlebotomists
- [ ] Build scheduling and dispatch system
- [ ] Premium convenience pricing ($25–50 surcharge per visit)
- [ ] Partner with Getlabs/Scarlet as an alternative to building in-house

### Phase 4 — Home Kits (Model A)
- [ ] Identify highest-volume tests suitable for finger-prick/dried blood spot collection
- [ ] Partner with kit manufacturer or develop own (FDA regulatory path TBD)
- [ ] Launch 5–10 home kit SKUs (hormone panel, STI panel, metabolic panel, thyroid)
- [ ] E-commerce fulfillment (ship kits via USPS/FedEx, prepaid return mailers)

### Phase 5 — Vertical Integration
- [ ] Evaluate acquiring or building a CLIA-certified lab
- [ ] In-house lab processing for highest-volume tests = maximum margin
- [ ] Continue using Quest/LabCorp for long-tail/specialty tests
- [ ] Longitudinal health data platform (track biomarkers over time, trends, alerts)

---

## Key Hires / Roles Needed

| Role | When | Why |
|---|---|---|
| Healthcare attorney | Phase 1 | State compliance, contracts, terms of service |
| HIPAA compliance officer | Phase 1 | Can be fractional/consultant initially |
| Full-stack developer | Phase 1 | Build the platform (or use Centurion AI engineering) |
| Operations / customer support | Phase 1 | Order issues, result questions, lab coordination |
| Physician network manager | Phase 2 | Manage relationships with ordering physicians |
| Phlebotomy coordinator | Phase 3 | Recruit, credential, schedule phlebotomists |
| Lab operations director | Phase 5 | If/when you build your own lab |

---

## Summary

The opportunity is real: lab diagnostics have the same pricing opacity and middleman bloat that Mark Cuban exposed in pharmaceuticals. A cost-plus, cash-pay, high-volume model can undercut incumbents by 20–40% while maintaining healthy margins. The regulatory path is navigable — the key requirements are:

1. **Physician ordering network** (for 50-state coverage)
2. **CLIA-certified lab partnerships** (Quest + LabCorp to start)
3. **HIPAA-compliant tech platform** (non-negotiable)
4. **State-by-state DAT compliance** (legal review required)
5. **Transparent, cost-plus pricing** (the differentiator)

Start with Model B (online order → local lab draw). It's the fastest, cheapest path to market with the lowest regulatory burden. Layer on mobile phlebotomy and home kits as the business scales.

---

*Document created for Centurion AI / Cost Plus Labs feasibility analysis.*
