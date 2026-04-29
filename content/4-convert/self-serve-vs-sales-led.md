[Back to Day 4: Convert](README.md)

# Self-Serve vs Sales-Led: Picking the GTM Motion That Fits Your Product

Every founder eventually has to decide which way customers will buy: pull a credit card and sign up at 11pm, or fill out a "request demo" form and wait for an SDR to call back. The decision sounds tactical — what does the website CTA say? — but it cascades into everything: pricing structure, onboarding design, hiring, content strategy, and the entire shape of your funnel.

Most indie SaaS get this wrong twice. First by defaulting to self-serve because "that's what software does now," then by bolting a sales motion onto a product that wasn't designed for one when the early-stage growth stalls. The teams that nail it pick the motion that fits their ACV, their buyer's procurement style, and their product's complexity — and they're honest about which motion they're actually running, not the one their pitch deck claims.

This guide is the playbook for choosing between self-serve, sales-led, and product-led-sales (PLS), and for shipping the convert mechanics that match your choice.

## What Done Looks Like

By end of quarter:

- A documented decision on which motion you're running (self-serve / sales-led / hybrid PLS)
- A pricing model that supports the motion (transparent vs custom; per-seat vs usage; published vs gated)
- A homepage CTA, signup flow, and onboarding designed around that motion
- A hiring plan aligned to the motion (founder-only sales for sales-led; product/growth eng for self-serve)
- A measurable conversion benchmark for the motion you're running

This pairs with [Pricing Strategy](../1-position/pricing-strategy.md) (price structure tells the buyer which motion you're in), [Sales Playbook](sales-playbook.md) (the execution doc for sales-led), [Onboarding Flow](onboarding-flow.md) (self-serve lives or dies on this), [Free to Paid](free-to-paid.md) (the conversion model for self-serve trials), and [Sales Demo Calls](sales-demo-calls.md) (the core ritual of sales-led).

## The Three Motions, Honestly

Founders use these terms loosely. Be precise.

### Self-serve (PLG: product-led growth)
The buyer can sign up, evaluate, and pay without ever talking to a human at your company. Pricing is published. Onboarding is automated. The product itself is the salesperson. ACV typically $5–$200/mo per seat or per workspace.

Examples: Linear (early stage), Notion, Cal.com, Plausible, Resend, Tally, Loops.

### Sales-led
The buyer can't (or won't) buy without talking to your sales team. Pricing may not be on the website. Custom contracts. Procurement and security review. ACV typically $20K+ ARR; deal cycles 30-180 days.

Examples: traditional enterprise SaaS — Salesforce mid-market, Zendesk Suite, MongoDB Enterprise, most "Enterprise" tiers of any company.

### Product-led sales (PLS, hybrid)
The product allows self-serve, but a sales team is layered on top to convert high-intent users to higher tiers. The buyer can start without sales but is steered toward sales when usage signals justify it. ACV mixed: $0 freemium, $50/mo individual, $50K+ enterprise — same product, three motions.

Examples: GitHub, Slack, Linear (current), Notion (current), Vercel, Datadog, MongoDB Atlas.

```
Help me categorize my current motion honestly.

Answer these 8 questions truthfully:

1. **Is the price published on the website?** (Yes = pulling toward self-serve)
2. **Can a buyer sign up and pay without talking to you?** (Yes = pulling toward self-serve)
3. **Do most paying customers come from inbound demo requests?** (Yes = pulling toward sales-led)
4. **What's the median ACV?** (<$3K/yr = self-serve; $3K-$20K = PLS; $20K+ = sales-led)
5. **How long is your sales cycle?** (<14 days from signup to payment = self-serve; 30-90 days = PLS; 90+ days = sales-led)
6. **Do you have an "Enterprise" tier with "Contact us" pricing?** (Yes = at minimum hybrid PLS)
7. **Do customers' procurement teams need to review your contract?** (Yes = sales-led component required)
8. **Do you have an SDR or AE on the team?** (Yes = sales-led or hybrid PLS)

Score:
- 5+ "self-serve" answers → you're running self-serve, even if you wish you were sales-led
- 5+ "sales-led" answers → you're sales-led, even if your homepage says "Sign up free"
- Mixed → you're running PLS (intentional or not)

Output:
1. The motion you''re currently running (be honest)
2. The motion your pitch / homepage CLAIMS you''re running
3. The gap between the two
4. The decision: align to one, or formalize the hybrid
```

The biggest source of unforced waste in early-stage SaaS: **claiming one motion while running another.** A "self-serve" startup that needs founder calls for every $200 deal isn't self-serve; it's a sales-led startup with a confused homepage. A "sales-led" startup whose 90% of revenue comes from inbound credit-card swipes is self-serve. Naming what you actually run lets you optimize.

## How to Decide Between Them

Three forces decide which motion fits: ACV, buyer behavior, and product complexity.

```
Help me pick the right motion for my product.

**Force 1: ACV (price + tenure economics)**

- ACV under $3K/year per customer: self-serve almost always wins
  - The unit economics don't support a sales conversation
  - A 30-min sales call costs ~$50 in time alone; you can''t afford it on a $200/yr customer
  - Exception: if your pipeline-to-close is so high (50%+) that you can run "founder-led sales" without a real sales team

- ACV $3K-$20K/year: PLS hybrid is usually right
  - Self-serve handles the long tail of $300-$3K customers
  - Sales engages on the right-tail $5K-$20K opportunities
  - Most "land and expand" SaaS lives here

- ACV $20K+/year: sales-led
  - Procurement review, security questionnaires, custom contracts make self-serve impossible
  - The customer will EXPECT to talk to a human
  - Self-serve doesn''t scale these deals because the buyer process doesn''t

**Force 2: Buyer behavior**

- Developer / IC tool (the buyer is the user): self-serve plays well
  - Devs hate sales calls and won''t take them for tooling under $X
  - Adoption happens bottom-up

- Manager / VP tool (the buyer is not the daily user): tends sales-led
  - Buyer wants a demo even at low ACV
  - "Will my team adopt this?" needs reassurance a website can''t provide

- IT / procurement-purchased: sales-led
  - SOC 2 reports, contracts, MSAs are gating
  - Self-serve checkout flows aren''t set up to handle these

**Force 3: Product complexity**

- "I get it in 90 seconds": self-serve possible
  - Plausible, Cal.com, Tally — first impression communicates value

- "I need 5 minutes to understand the workflow": PLS or guided self-serve
  - Onboarding tour + activation milestones drive conversion

- "I need a demo to understand the value": sales-led
  - Datadog''s 600 integrations, complex multi-tenant SaaS, AI agent platforms
  - Self-serve trial without context = trial that goes cold

**The 2x2**:

|  | Low complexity | High complexity |
|---|---|---|
| **Low ACV** | Self-serve | PLS (with strong onboarding) |
| **High ACV** | Sales-led with self-serve trial | Sales-led |

Map my product to a quadrant. If I land in "Low ACV / High complexity," ask whether the complexity is essential or accidental; can the v1 product be simpler?

Output:
1. The quadrant I land in
2. The motion that fits
3. The motion-fit gaps in my current setup (homepage, pricing, onboarding, hiring) that need to change
4. The 30-day plan to align
```

The biggest predictor of GTM success: **picking the motion that matches the buyer's natural buying process.** Trying to force devs through a sales-led intake when they'd happily pay $30/mo on a credit card frustrates them and slows growth. Trying to self-serve a $50K enterprise contract is impossible — procurement will not allow it.

## Self-Serve: What "Done" Looks Like

If you're running self-serve, the system has to be self-sufficient. The product onboards, activates, converts, and expands without a human in the loop.

```
Help me ship the self-serve mechanics.

The mandatory pieces:

**1. Public pricing**
- Price is on the homepage / pricing page; no "Contact sales" for the core tiers
- Per [Pricing Page](pricing-page.md): clear tiers, monthly + annual toggle, included quotas
- An "Enterprise" tier is fine for $50K+ deals, but the SMB tiers must be self-serve

**2. Friction-light signup**
- Email or OAuth (Google / GitHub) — no email verification gate before activation
- No credit card required for the trial (unless your churn dynamics force it)
- Onboarding starts the moment the account is created — no "we''ll email you" delay

**3. Onboarding to activation**
- Per [Onboarding Flow](onboarding-flow.md): one clear path to the product''s "aha moment"
- Activation milestone defined and instrumented
- Time-to-activation under 10 minutes for B2B; under 5 minutes for prosumer
- Email sequence per [Email Sequences](../2-content/email-sequences.md) reinforces activation

**4. Trial-to-paid conversion**
- Per [Free to Paid](free-to-paid.md): clear trial/free-tier boundary; clear upgrade prompt at the right moment
- No-touch checkout: Stripe Checkout, Paddle, or similar
- Self-serve cancellation (don''t require email; this kills NPS and churns customers anyway)

**5. In-product expansion**
- Customers upgrade tiers from inside the product
- Add-on purchases (more seats, more usage) are one-click
- Per [Expansion Revenue](expansion-revenue.md): the motion isn''t complete without this

**6. Self-serve support escalation**
- Per [Support Agent](support-agent.md): docs / AI / community first, human last
- Human support is reactive, not assumed-required
- Customers can self-resolve 80%+ of issues

**What you DON''T do in self-serve**:
- Manual demo calls for SMB customers (kills your hourly rate)
- Custom contracts under $20K ACV (kills your time)
- Hand-holding onboarding for paying customers (don''t scale)
- Slack / WhatsApp customer support channels for free-tier users (sets a bad precedent)

**Hiring implications**:
- First hires: product engineering, growth engineering, customer support
- NOT: SDRs, AEs, sales engineers (yet)
- Founder spends time on product + content, not calls

**Conversion benchmarks**:
- Visitor → trial: 1-3% (good)
- Trial → paid: 8-25% (good for self-serve)
- Trial → activated → paid: 30-50% (good if your activation is right)

Output:
1. The 6 self-serve pieces audited (which are present, which are missing)
2. The 30-day plan to fix the gaps
3. The activation metric you''ll instrument
4. The hiring plan for the next 90 days
```

The single biggest self-serve killer: **a "request demo" button on the homepage of a self-serve product.** It signals that real customers go through sales. Buyers self-deselect. Either commit to self-serve (no demo button) or admit you're PLS / sales-led.

## Sales-Led: What "Done" Looks Like

If you're sales-led, the homepage is a brochure; the product is the proof; the sales team is the conversion engine.

```
Help me ship the sales-led mechanics.

The mandatory pieces:

**1. Outbound + inbound mix**
- Inbound: SEO, content marketing, paid ads → demo requests
- Outbound: per [Cold Outreach](../3-distribute/cold-outreach.md), [Social DM Outreach](../3-distribute/social-dm-outreach.md): targeted prospects
- Per [Channel Selection](../3-distribute/channel-selection.md): pick 1-2 channels and double down

**2. Demo request as the primary CTA**
- Homepage CTA: "Request a demo" or "Talk to sales" — NOT "Sign up free"
- A short, gated form (5-7 fields max — name, work email, company, size, role)
- Calendar booking link delivered immediately on submit (Cal.com, Chili Piper, Calendly)
- Per [Sales Demo Calls](sales-demo-calls.md): the demo is structured, not improvised

**3. Pricing strategy aligned to sales-led**
- Per [Pricing Strategy](../1-position/pricing-strategy.md): Enterprise / Custom tier; pricing not fully on website
- Bundles, multi-year discounts, custom contract terms
- Annual default; monthly often unavailable or with surcharge

**4. Sales playbook + tooling**
- Per [Sales Playbook](sales-playbook.md): documented stages from MQL → SQL → opportunity → close
- CRM (HubSpot, Pipedrive, Attio, Folk, Close, or Salesforce)
- Email sequencer / cadence tool (Apollo, Outreach, Salesloft)

**5. Customer references and case studies**
- Per [Customer References](customer-references.md): 5+ named case studies; 3+ reference customers willing to take a sales call
- Logo wall on homepage and pricing page
- ROI / outcome data published

**6. Security and compliance posture**
- SOC 2 Type II report, GDPR DPA, signed MSA template
- A trust portal (vanta-style) so prospects can self-serve security review
- Procurement-friendly contract language

**7. Founder-led sales until ~$1M ARR**
- Founder runs the first 30-50 sales themselves
- Hire first AE / SDR only after founder has closed enough deals to write the playbook
- Premature sales hiring is a top-10 startup death cause

**What you DON''T do in sales-led**:
- Self-serve checkout flows for the core product (confuses buyers about which motion they''re in)
- Aggressive 14-day trials (sales-led trials run 30-90 days, often white-glove)
- Hide-the-pricing AND have-a-public-trial (pick a side)

**Hiring implications**:
- First hires: SDRs (lead-gen), AEs (close), customer success (post-sale)
- Sales engineer when product complexity demands it
- Founder owns the playbook before delegating

**Conversion benchmarks**:
- MQL → SQL: 20-40%
- SQL → opportunity: 30-50%
- Opportunity → closed-won: 15-30%
- Total visitor → paid: 0.1-1% (small percentages, big deals)

Output:
1. The 7 sales-led pieces audited
2. The 30-day plan
3. The CRM and tooling stack chosen
4. The hiring plan
```

The single biggest sales-led killer: **founder reluctance to do sales personally.** Founders who don't want to sell don't ship sales-led companies. If you can't (or won't) run the first 30 sales yourself, the option is self-serve / PLS, not sales-led with a hired sales team.

## PLS (Hybrid): What "Done" Looks Like

PLS is the hardest of the three to run. You need both the self-serve infrastructure AND the sales infrastructure, and a clear handoff between them.

```
Help me ship the PLS hybrid mechanics.

The mandatory pieces:

**1. Self-serve baseline**
- Everything from "Self-Serve" section, fully shipped
- Free or low-cost tier that the long tail can buy themselves
- Strong product analytics (per [PostHog Setup](../../../VibeWeek/6-grow/posthog-setup-chat.md)) instrumented from day 1

**2. Product Qualified Lead (PQL) signals**
- Define what makes a free user a high-intent prospect:
  - Volume signals: hit a usage threshold, invited 5+ teammates
  - Intent signals: visited the pricing page 3x, downgraded a feature gate
  - Firmographic signals: company size, domain matches Fortune 500
- Per [Analytics Setup](analytics-setup.md): instrument every PQL signal
- A PQL queue / dashboard surfaces these to sales

**3. Sales overlay for PQLs only**
- Sales doesn''t reach out to every signup — only PQLs
- A "talk to sales" button appears in-product when usage thresholds hit
- AE / sales-assist team handles inbound demo requests from PQLs

**4. Tiered pricing with sales-gated top tier**
- Free / individual / team / enterprise
- The first three tiers are fully self-serve
- Enterprise is "Contact sales" — and means it (custom contract, security, dedicated support)

**5. Two-track expansion**
- Self-serve expansion (more seats, higher tier) for SMB
- Sales-led expansion (multi-year, multi-team) for mid-market+

**6. Crystal-clear messaging**
- Homepage shows both motions: "Sign up free" AND "Talk to sales"
- The buyer self-selects which path is right for them

**7. Account-based sales**
- Sales targets specific accounts, not random outbound
- ABM tools (Apollo, Clay) help identify high-fit accounts already in your free tier

**The hardest PLS question**:
- When does sales reach out to a free user? Too early = annoying. Too late = competitor wins them.
- The right answer depends on PQL definition; tune it constantly.

**Conversion benchmarks**:
- Self-serve track: per self-serve benchmarks above
- Sales-overlay track: 25-40% PQL → opportunity; 25-40% opportunity → closed
- Mix: 60-80% revenue self-serve, 20-40% sales-led for most PLS companies

**Hiring implications**:
- All self-serve roles
- Plus: AE focused on PQL conversion; sales engineer for enterprise integrations
- Often: a "growth" role that owns the boundary between self-serve and sales-assisted

Output:
1. The PLS pieces audited
2. The PQL definition (specific signals + threshold)
3. The 30-day plan
4. The tooling stack (CRM, analytics, account intelligence)
```

The hardest PLS pitfall: **letting sales chase low-PQL signups.** If sales emails everyone who signed up, you''re running sales-led with a self-serve flavor — you''re burning sales capacity on people who would have converted on their own. Define PQL strictly; let the long tail self-serve.

## When to Switch Motions

Founders sometimes need to switch. The signals are clear; the execution is hard.

### Signals you should switch from self-serve to PLS or sales-led
- Median ACV creeping up past $5K and inbound demo requests increasing
- Customers asking for SOC 2, MSAs, custom contracts more than once a quarter
- Top customers churning because "we needed more support during onboarding"
- Win rate on inbound demos > 30% (signals demand for human-led conversion)

### Signals you should switch from sales-led to PLS or self-serve
- ACV trending down (downmarket pull from market or competitors)
- Sales cycle stretching but conversion not improving
- Founder-led sales burning out the founder
- Buyers asking "can I just try it?" repeatedly

### What switching costs
- Pricing rework (self-serve needs published prices; sales-led needs custom)
- Hiring rework (different shape of team)
- 6-12 months of suboptimal performance during transition
- Founder time on the transition itself

```
Help me decide if I should switch motions.

Run through the signals. For each, score:
- Strong signal: 3
- Weak signal: 1
- No signal: 0

Add up the score. If 6+ in one direction, the case for switching is strong. If 3-5, monitor and revisit in 90 days. If <3, stay the course.

Then: if switching is justified, plan the 6-12 month transition with explicit milestones for pricing, hiring, content, and tooling changes.

Output:
1. The score
2. The decision (switch / monitor / stay)
3. If switching, the 6-12 month transition plan
```

The hidden cost of motion-switching: **mid-transition incoherence.** Buyers visiting your homepage during the transition see mixed signals (sales CTA + self-serve pricing) and bounce. Plan a coherent flag-day cutover or a clear sub-page for each motion.

---

## What "Done" Looks Like

A working GTM-motion decision in 2026 has:

- A documented motion (self-serve / sales-led / PLS) — not aspirational, actual
- Pricing structure aligned to the motion (transparent tiers vs custom contracts)
- Homepage CTA aligned (sign up vs talk to sales — pick one as primary)
- Onboarding designed for that motion (automated activation vs guided demos)
- Hiring plan that supports the motion (product/growth eng vs SDR/AE)
- Conversion benchmarks specific to the motion
- A clear PQL definition if running PLS
- A documented decision criterion for switching motions

The hidden cost in this decision isn't picking wrong — it's **claiming one motion while running another**. A self-serve site that needs founder calls for every signup is wasting both founder time and visitor trust. A sales-led product with self-serve checkout confuses buyers about which path they're on. Pick one. Run it well. Switch only when the signals justify the cost.

## See Also

- [Pricing Strategy](../1-position/pricing-strategy.md) — pricing structure tells the buyer which motion you're in
- [Pricing Page](pricing-page.md) — the surface where the motion is most visible
- [Sales Playbook](sales-playbook.md) — execution doc for sales-led
- [Sales Demo Calls](sales-demo-calls.md) — the core ritual of sales-led
- [Onboarding Flow](onboarding-flow.md) — self-serve lives or dies on this
- [Free to Paid](free-to-paid.md) — the conversion model for self-serve trials
- [Channel Selection](../3-distribute/channel-selection.md) — channel mix is downstream of motion
- [Customer References](customer-references.md) — case studies fuel sales-led conversations
- [Lead Magnets](../2-content/lead-magnets.md) — magnet design differs by motion
- [Comparison Pages](comparison-pages.md) — comparison-page tone differs by motion

[Back to Day 4: Convert](README.md)
