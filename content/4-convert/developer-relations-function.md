# Developer Relations (DevRel) Function: Build a DevRel Team That Drives Adoption (Not a Conference-Speaker Hobby)

[⬅️ Back to Day 4: Convert](./)

If you sell to developers — APIs, infrastructure, dev tools, open-source-led commercial products, components, AI/ML platforms — Developer Relations is the function that turns awareness into adoption and adoption into commercial pipeline. Done well, DevRel produces a continuous flow of self-serve sign-ups, GitHub stars, Stack Overflow / Discord / Slack / Reddit goodwill, conference talks that recruit both customers and engineers, and a content engine that no traditional marketing team can replicate. Done badly, DevRel becomes a vanity program — a few experienced engineers flying around speaking at conferences while no one can answer "did the talk produce any signups?" — and gets cut at the first downturn.

The pattern that works: hire DevRel against a clear charter (which of the 4 motions: education / advocacy / community / DX), measure outputs that matter (developer signal, not impressions), invest in developer experience (DX) as core engineering work, build a content + sample + tutorial flywheel, and keep DevRel close to product and engineering — not buried under marketing. This is distinct from [first sales hire](./first-sales-hire.md), [solutions engineering hire](./solutions-engineering-hire.md), and [first marketing hire](./first-marketing-hire.md). DevRel sits in the white space between product, engineering, and marketing — and is the wrong hire if you don't actually sell to developers.

## What Done Looks Like

- DevRel charter explicitly defined: which of the four motions (education, advocacy, community, DX) you're investing in, in what proportion
- First DevRel hire matched to the charter (not a generic "DevRel" job description)
- DevRel reports to a function that matches the charter — Product / Engineering for DX-heavy charter; Marketing for awareness-heavy charter
- Content engine running: documentation, tutorials, blog posts, sample apps, video walkthroughs, conference talks, podcast appearances
- Developer Experience metrics tracked (time-to-first-API-call, sample-app run-rate, doc bounce rate, error-rate on common requests)
- Community presence active where developers actually are (GitHub, Discord, Slack, Stack Overflow, Reddit, Hacker News, X, dev.to)
- Pipeline attribution: DevRel-influenced signups and conversions tracked, with documented attribution rules
- Speaker bureau: 2-5 named DevRel team members + product engineers ready to give conference talks
- Office hours / open-source review cadence: at least one weekly time slot where developers can interact with the team
- Clear boundary between DevRel and Sales: DevRel never carries a quota; can hand qualified leads to sales
- Anti-vanity discipline: stars / followers / impressions are reported as context, not as primary KPIs

## 1. Decide Which DevRel Motion You Actually Need

There is no generic DevRel role. There are at least four distinct motions, each with different daily activities, hires, and metrics. Picking the wrong motion produces a frustrated DevRel team and zero business impact.

### Motion 1: Education (DevEd)
**What they do**: produce tutorials, documentation, video walkthroughs, sample apps, code examples, onboarding flows that take a developer from "never heard of you" to "shipped something with you."

**Right when**: your product is technically novel and developers need to learn how to use it before they can evaluate it. Common for: new APIs, AI/ML platforms, infrastructure tools, frameworks.

**Hires**: technical writers + developer educators with strong code+writing skills. Often "Developer Educator" or "Technical Writer" titles.

**Metrics**: tutorial completion rate, time-to-first-API-call (T-T-F-A-C), doc page bounce rate, sample-app fork count, video watch-through rate, return-visitor rate to docs.

### Motion 2: Advocacy (Devangelism)
**What they do**: speak at conferences, write technical essays, appear on podcasts, run webinars, build personal brand around the product's domain. Outbound thought leadership.

**Right when**: your product/category is unfamiliar and you need to evangelize it; or you're competing in a crowded space where mindshare drives adoption.

**Hires**: developer advocates with conference-speaker chops + an existing audience. Often "Developer Advocate" or "Principal Developer Advocate."

**Metrics**: talks delivered + recorded views, podcast/article reach, attributed pipeline from talks/articles, social engagement on technical content.

### Motion 3: Community
**What they do**: nurture the developer community on Discord, Slack, GitHub Discussions, Reddit, Stack Overflow. Triage support questions, surface bugs, collect feedback, run AMAs, organize community events, identify and amplify community contributors.

**Right when**: you have a critical mass of developers using your product (>1000 active users) and the community is producing organic activity that needs cultivation.

**Hires**: community managers with technical depth (can answer real questions, not just moderate). Often "Community Manager" or "Developer Community Manager."

**Metrics**: response time on community questions, % of questions answered, monthly active community members, community-contributor count, NPS / sentiment in community channels.

### Motion 4: Developer Experience (DX)
**What they do**: improve the actual experience of using your product. Audit onboarding, fix doc gaps, build SDKs, design CLI commands, polish error messages, instrument T-T-F-A-C, ship sample apps. This is engineering work that prioritizes developer-facing quality.

**Right when**: your product's developer experience is mediocre and improving it would directly drive adoption. Most products in this category.

**Hires**: senior engineers who care about developer experience, often working part-time on DX while maintaining the SDK/CLI; or dedicated DX engineers. Often "Developer Experience Engineer" or "Staff Engineer, DX."

**Metrics**: T-T-F-A-C, error rates on common operations, SDK installation success rate, "time to second integration" (deeper usage), CSAT on docs.

### Picking
- **Pre-PMF / early adoption**: Motion 4 (DX) + Motion 1 (Education). Don't do conferences or community until you have a product worth telling people about.
- **Post-PMF / scaling adoption**: add Motion 2 (Advocacy) to drive top-of-funnel awareness.
- **Established with engaged users**: add Motion 3 (Community) to scale support + organic content.
- **Most companies need 4 + 1 first**, then 2, then 3 — in that order.

DON'T hire a generic "DevRel" person and let them define the role. DON'T copy the FAANG playbook (heavy advocacy + community) when you're at 50 customers — you'll burn your DevRel budget on conference flights for talks no one watches.

## 2. The First DevRel Hire

Match the hire to the charter. The wrong hire wastes 12-18 months.

### Profile: Education-First Charter
- Strong writing samples (tutorials, technical essays)
- Has shipped real code in the relevant stack
- Comfortable producing video/screencast content
- Bonus: experience with documentation tools (Mintlify, Docusaurus, Fern, ReadMe, Scalar)
- Title: "Developer Educator" or "Senior Technical Writer (Developer)"

### Profile: Advocacy-First Charter
- Existing speaker reputation (talks at major conferences with recordings)
- Strong personal brand on X / LinkedIn / dev.to / their own blog
- Willing to travel 40-60% of the year (or capable of producing equivalent virtual reach)
- Title: "Developer Advocate" or "Principal Developer Advocate"

### Profile: Community-First Charter
- Has run a community before (Discord/Slack/forum) at meaningful scale
- Technical enough to actually answer questions (not just "I'll forward to the team")
- Comfortable with public visibility and async writing
- Title: "Developer Community Manager" or "Head of Community"

### Profile: DX-First Charter
- Senior engineer with strong opinions about developer experience
- Has built and maintained an SDK, CLI, or developer-facing API
- Cares about error messages, onboarding flows, and "tiny stuff that compounds"
- Often a hybrid role: 60% engineering, 40% DevRel-style work
- Title: "Developer Experience Engineer" or "Staff Engineer, Developer Experience"

### Critical
- Don't hire a "DevRel" who is "all four" at once. Generalists end up doing none of the four well.
- Hire 1 specialist matched to the charter; expand to 2-3 over the next 12 months as the charter expands.
- Compensate competitively — strong DevRel hires are senior IC compensation (Staff/Principal levels), not entry-level marketing salaries.

## 3. Where DevRel Reports

Where DevRel sits in the org chart determines which problems they solve.

### Under Marketing
- Right when: charter is heavy on advocacy + community-as-marketing
- Risk: DX work gets de-prioritized; marketing-friendly metrics (impressions, follower count) drown out adoption metrics
- Fit for: established companies with mature product where awareness is the bottleneck

### Under Product
- Right when: charter is heavy on education + DX
- Risk: speaker / advocacy work gets sidelined; less marketing-amplification rigor
- Fit for: API / dev-tool / infrastructure companies pre-PMF or scaling

### Under Engineering
- Right when: charter is heavy on DX + SDK/CLI maintenance
- Risk: education + advocacy underinvested
- Fit for: open-source / infra companies where DX = engineering quality

### Standalone / Reports to CEO or VPE
- Right when: founder is the original DevRel and wants to scale that motion deliberately
- Risk: DevRel becomes a side-of-desk concern for the executive
- Fit for: small companies where DevRel is the GTM motion

### The wrong reporting line
DevRel under Sales is almost always wrong. Sales attaches quotas; DevRel can't carry quota and stay credible with developers; either DevRel becomes "sales engineering with a different name" (see [solutions-engineering-hire](./solutions-engineering-hire.md)) or it loses authenticity. Keep DevRel out of sales.

## 4. The Content Engine

DevRel without a content engine is theater. Build the engine in this order.

### Layer 1: Foundational documentation
Before any other content: docs that work. Quickstart that runs end-to-end in <10 minutes. API reference auto-generated from your OpenAPI spec. Conceptual guides for the non-trivial mental models. Recipes for the top 20 use cases. Use Mintlify, Docusaurus, Fern, ReadMe, Scalar, or a Next.js + MDX stack. Track docs analytics: which pages get traffic, which get bounces, which keywords developers search for and don't find.

### Layer 2: Sample applications
2-5 sample apps that demonstrate the product's value. Hosted on GitHub. Deployable in one click (Vercel, Netlify, Railway button). Maintained by DevRel + product engineers. Updated when the API changes. Each sample app maps to a real customer use case.

### Layer 3: Tutorials and guides
Step-by-step content for common problems. "How to build X with our product." Long-form, code-heavy, outcome-focused. Published on a blog or in the docs themselves. SEO-optimized for the actual queries developers run.

### Layer 4: Video walkthroughs
Screen-recorded walkthroughs of common flows. 5-15 minutes. YouTube + embedded in docs. Use Loom / OBS / ScreenFlow. Subtitles required (international audience + accessibility).

### Layer 5: Talks and presentations
Conference talks with recordings + slide decks shared publicly. Webinar archive. Podcast appearances by the team. Build the speaker bureau intentionally — at least 2-5 named team members who can give different talks.

### Layer 6: Technical essays
Long-form, opinion-driven essays on the domain. NOT product marketing. "Why we chose X over Y," "the architecture of Z," "the case against pattern P." This is what creates authority + evergreen SEO.

### Layer 7: Live and recurring formats
Office hours (weekly Q&A). Twitch / YouTube Live coding. Community AMA. Newsletter (technical, not promotional). These build relationships at scale.

### Production cadence
- Foundational docs: continuous; never "done"
- Sample apps: 1 new sample per quarter; existing samples maintained continuously
- Tutorials: 1-2 per month minimum
- Video walkthroughs: 1-2 per month
- Talks: 4-12 per year per advocate
- Essays: 1-2 per month
- Office hours: weekly

If your DevRel team can't sustain this cadence, you're under-resourced or the charter is too broad.

## 5. Developer Experience Metrics That Actually Matter

Vanity metrics get DevRel cut in budget reviews. Real metrics make the case.

### Top-of-funnel signal
- Unique developer signups / week
- GitHub stars (context only — not a primary KPI)
- Doc traffic, source-of-truth (organic search, social, direct)
- Sample-app fork count
- Newsletter / community signups

### Activation
- Time-to-first-API-call (T-T-F-A-C): from signup to first successful API call. This is the single most important DX metric. Target: <10 minutes for most products.
- Quickstart completion rate: % of signups who complete the quickstart
- Sample-app run rate: % of forks that successfully deploy and call the API

### Engagement / depth
- Developers using >1 endpoint / feature
- "Time to second integration": signup to second meaningful action
- Returning to docs over time

### Conversion
- Free → paid conversion rate
- DevRel-influenced revenue: signups that came through DevRel content (attributed via UTMs / first-touch / last-touch — pick a model and stick to it)
- Customer LTV from DevRel-sourced cohorts vs. other sources

### Community health
- Community questions answered within 24h: target 90%+
- Community sentiment (NPS / CSAT in community channels)
- Community-contributor count: developers shipping PRs / writing tutorials / answering questions on behalf of the community

### Quality
- Documentation NPS / CSAT
- Error rates on common API operations (pulled from your observability stack)
- Bug-report-to-fix latency on developer-reported issues

### Anti-vanity discipline
Track stars, followers, impressions, and conference talk views — but never as primary KPIs. They are CONTEXT. The primary KPIs are signups, T-T-F-A-C, conversion, and community health.

## 6. Community Strategy

If you're investing in community, be explicit about where, how, and who.

### Where to be
- **GitHub Discussions** if your product has a public repo: low overhead, indexable, integrates with issues
- **Discord** for live chat / community building: best for active communities; high moderation cost
- **Slack Connect** for B2B: better for enterprise customers; less developer-native than Discord
- **Stack Overflow**: tag your product; ensure questions get answered within 24h
- **Reddit** / Hacker News: presence + engagement when relevant; never astroturf
- **X / Twitter**: still relevant for technical mindshare; engage authentically; share content

DON'T be on all platforms. Pick 2-3 where your developers actually are; commit to those.

### Who runs it
- Community manager (or DevRel) sets tone, moderates, schedules events
- Engineers participate in technical questions; rotation among the team
- Product team participates in roadmap discussions
- Founders engage when relevant — but not as the primary daily presence (they don't scale)

### Cadence
- Daily: triage new questions, respond within 24h
- Weekly: office hours / community call
- Monthly: AMA / community update / changelog walkthrough
- Quarterly: virtual or in-person community event for top contributors

### Community contributor program
- Identify top community contributors (questions answered, tutorials written, PRs submitted)
- Recognition: badges, profile features, conference invitations, swag
- Eventually: paid community-expert program (champions, ambassadors) with named compensation

## 7. Sample Apps and Reference Architectures

Sample apps are the highest-leverage DevRel asset for most companies. They are self-evident proof that your product works, give developers a starting point, and surface real DX problems.

### What makes a great sample app
- Solves a real problem (not "hello world" — an actual application a developer might ship)
- Runs end-to-end with one command after a fresh clone
- Deployable in one click (Vercel button / Railway button / Render blueprint / Cloudflare Workers)
- Maintained: updated when SDK changes; CI keeps it green
- Documented: README explains the architecture, key files, where to start customizing
- Discoverable: linked from docs, blog posts, the website's developer hub

### What sample apps to build
- The "one obvious starter" for your most common use case
- One sample per major framework (Next.js, Remix, Hono, FastAPI, Rails) if you're cross-language
- One sample per major customer archetype (a B2B sample, a marketplace sample, etc.)
- One "advanced" sample showing edge cases or production-grade patterns
- Total: 3-7 well-maintained samples beats 30 abandoned ones

### Maintenance
- CI runs against samples on every SDK release (catches breaking changes)
- Quarterly review: which samples have stale dependencies, unfixed issues, or no recent activity?
- Retirement: archive samples that no longer reflect best practices; redirect README to the replacement

## 8. Office Hours, Live Coding, and Recurring Formats

Recurring touchpoints build relationships that one-off content can't.

### Office hours
- Weekly, 1-hour, public, recorded
- Open Q&A; bring your own problem; team answers live
- Format: someone moderates; 1-2 engineers / DevRel + maybe a guest from product
- Recording posted to YouTube; transcript published
- Attendance grows over months as developers know when to bring questions

### Live coding / streaming
- Weekly or biweekly
- DevRel + an engineer build something using your product, live
- Twitch / YouTube Live
- Recording posted; build documented as a tutorial
- Use as field-test of T-T-F-A-C and product friction

### AMAs
- Monthly or quarterly
- Founders / leads do AMAs in community channels
- Aggregated questions ahead of time
- Highest-quality questions surface before live event
- Drives community engagement spikes

### Newsletter
- Monthly, technical, NOT promotional
- Includes: new features (with code examples), tutorials, community shoutouts, ecosystem highlights, upcoming events
- Owned by DevRel; reviewed by product/eng before send
- Best-in-class examples: Vercel newsletter, Cloudflare's newsletter, Anthropic's newsletter

## 9. Speaker Bureau and Conferences

Conferences ARE expensive. Treat them as a deliberate investment.

### Building the bureau
- Identify 2-5 internal team members who can give 30-45 minute talks
- Mix: DevRel + product engineers + occasionally founders
- Each speaker has 1-3 talks they can deliver; new talks developed quarterly

### Conference selection
- ICP fit: are your target developers attending?
- Content fit: is your topic on-theme?
- Reach: organic recordings / social / press
- Cost: travel, sponsorship, time
- Quality test: would your team attend this conference if they didn't have to speak?

### Track ROI
- Talk recording views (over 6 months, not 1 week)
- Signups attributed to talk URL (UTM the slide-deck links)
- Pipeline from conference attendees (sales reaches out to attendee list when sponsored)
- Recruiter pipeline from talk visibility
- Cost per attributed signup

### Recurring events you should consider sponsoring or attending
- Stripe Sessions, Vercel Ship, Cloudflare Connect, AWS re:Invent (for enterprise infra)
- KubeCon, RailsConf, JSConf, RustConf, DjangoCon (language-specific)
- DevOps Enterprise Summit, GitHub Universe, AI Engineer Summit (newer)
- Localized: regional JS / Python / Ruby conferences for targeted geographies

### Skipping conferences
You don't need conferences if your charter is education + DX-first. A great YouTube channel + strong docs can outproduce conference travel for many companies. Don't fund conference travel because "that's what DevRel teams do."

## 10. The DevRel-Sales Boundary

Done badly, DevRel becomes a sales-development resource. Done well, DevRel feeds sales without becoming sales.

### Rules
- DevRel does NOT carry quota
- DevRel does NOT do outbound prospecting
- DevRel CAN identify hand-raisers and route to sales (with full context)
- DevRel CAN co-present technical demos with sales for strategic accounts (similar to solutions engineering)
- DevRel content + community produces inbound leads that flow through normal funnels

### When DevRel and Sales overlap
- Enterprise prospect asks deep technical questions DevRel + SE answer together
- Customer Advisory Board includes developer leaders DevRel cultivates
- Conference attendee who's a fit goes into sales sequence with DevRel-attributed first touch
- Open-source contributor who works at a target enterprise; DevRel maintains relationship; sales engages on commercial conversation

### When DevRel and Sales should NOT overlap
- DevRel attending pricing / negotiation calls (kills credibility)
- DevRel doing outbound to non-customers (corrupts the relationship)
- DevRel content gated behind sales-qualification forms (drives developers away)

## 11. The Inevitable Budget-Review Defense

DevRel is the function most likely to be cut in a downturn. Build the case before you need it.

### What you measure publicly inside the company
- Quarterly: T-T-F-A-C trend, signups attributed to DevRel content, conversion of DevRel-attributed cohorts, community-question response time, DevRel-influenced pipeline
- Annually: cost per attributed signup, LTV of DevRel-sourced customers, talk recording reach 12 months later, doc-traffic growth

### What kills the function
- Reporting only vanity metrics (stars, followers, impressions)
- Inability to attribute signups or pipeline to DevRel work
- "DevRel produces awareness" without ever showing how awareness becomes revenue
- A DevRel team flying to conferences with no recording / talk distribution strategy

### What protects the function
- Clear before/after metrics (T-T-F-A-C halved; conversion up 20%)
- Attributed pipeline / revenue, even with imperfect attribution methodology
- Cost-per-developer-signup compared to paid ads
- Renewable content assets (docs, tutorials, samples) that compound — each piece keeps producing signups for years

## 12. Anti-Patterns and Failure Modes

- **The four-in-one job description.** Generalist DevRel doing all four motions does none well. Pick a charter; hire to it.
- **Conference-speaker-as-DevRel.** Hire someone to give talks but underinvest in DX, docs, and community. Talks produce impressions; DX produces conversions.
- **DevRel under sales with a quota.** Becomes sales engineering; loses developer trust.
- **Vanity-metric reporting.** Stars + impressions never funded a function. Track signals that map to revenue or product-quality.
- **Astroturfing.** Fake comments, planted Stack Overflow questions, sock-puppet Reddit accounts. Gets discovered. Permanent reputation damage.
- **Pay-to-play sponsored content.** Sponsored YouTube videos that pretend to be authentic reviews. Developers detect this; backlash exceeds awareness.
- **No DX investment.** Tutorials and conferences with a 30-minute T-T-F-A-C wastes everything upstream. Fix the experience first.
- **Sample apps no one maintains.** Stale samples actively hurt. Either maintain or archive.
- **Community channel sprawl.** Slack + Discord + GitHub + Reddit + Stack Overflow + Twitter + LinkedIn — all under-served. Pick 2-3.
- **Building "for developers" but actually for VPs.** DevRel content optimized for buyer personas reads as marketing. Developers tune out; VPs don't read DevRel content. Lose-lose.
- **No founder presence.** Developers want to hear from the people building the product. Founders showing up sparingly but credibly outperforms 10x more output from non-technical staff.
- **Outbound Discord / DMs.** Pitching in private messages on community platforms destroys community trust faster than any other action. Don't.
- **Conference travel without recordings or distribution.** A 30-minute talk to 80 people, no recording, no slide deck shared, no follow-up content — wasted spend. Always demand recording rights or skip the talk.

## What Done Looks Like (Recap)

- DevRel charter explicitly defined and matched to the company's stage and product type
- First DevRel hire matched to the charter (not a generic title)
- Reporting line aligned with charter (Product / Engineering / Marketing / standalone)
- Content engine running across 7 layers (docs, samples, tutorials, video, talks, essays, live formats) at sustainable cadence
- Activation and conversion metrics tracked, not just impressions
- Community presence focused on 2-3 platforms; questions answered <24h
- 3-7 maintained sample apps that work end-to-end
- Speaker bureau with 2-5 named speakers and recorded talks
- Office hours / live coding running on a regular cadence
- Clear separation from Sales; no DevRel quota
- Annual budget defense built on attributed signups + revenue, not vanity metrics

## Mistakes to Avoid

- **Hiring DevRel before the product is worth talking about.** Pre-PMF DevRel is mostly wasted; fix the product first.
- **One DevRel "doing everything."** Specialize; hire for the charter.
- **DevRel under Sales.** Wrong reporting line; corrupts the function.
- **Reporting only vanity metrics.** Function gets cut at first downturn.
- **Skipping DX in favor of advocacy.** Conference talks don't fix a 60-minute T-T-F-A-C.
- **Spreading across every community platform.** Sub-scale presence everywhere; meaningful presence nowhere.
- **Sample-app sprawl with no maintenance.** Stale samples actively hurt.
- **Conference-driven without recording / distribution.** A 30-min talk reaches 80 people; a recording reaches 80,000 over 12 months.
- **Treating DevRel as the marketing team's content factory.** Becomes promotional content that developers ignore.
- **No founder participation.** The most credible voice in a developer audience is a founder. Schedule it.
- **Astroturfing or pay-to-play.** Discovered; permanent damage; existential risk to the function.
- **Letting DevRel set its own success metrics with no exec alignment.** Unaligned KPIs = budget cuts.
- **Underinvesting in documentation tooling.** Mintlify / Docusaurus / Fern / Scalar / ReadMe — pick one; commit to it; integrate analytics. Bad docs infrastructure makes great DevRel content disappear.

## See Also

- [First Marketing Hire](./first-marketing-hire.md) — adjacent function; different motion
- [Solutions Engineering Hire](./solutions-engineering-hire.md) — DevRel's sales-side cousin; do NOT confuse them
- [First Product Manager Hire](./first-product-manager-hire.md) — DevRel-Product collaboration
- [First Sales Hire](./first-sales-hire.md) — sales motion DevRel feeds (but doesn't replace)
- [Founder-Led Sales Handoff](./founder-led-sales-handoff.md) — DevRel often emerges from founder-led developer relationships
- [Customer Advisory Board](./customer-advisory-board.md) — developer-leader CAB benefits from DevRel cultivation
- [Customer Marketing Program](./customer-marketing-program.md) — overlap with community contributor recognition
- [Customer Education / Training Programs](./customer-education-training-programs.md) — distinct from DevRel; for already-paying customers
- [Sales Enablement / Battle Cards](./sales-enablement-battle-cards.md) — DevRel content can feed enablement
- 3-distribute: [Building in Public](../3-distribute/building-in-public.md) — common founder-DevRel motion
- 3-distribute: [GitHub Distribution](../3-distribute/github-distribution.md) — open-source-led DevRel motion
- 3-distribute: [Community Seeding](../3-distribute/community-seeding.md) — pre-DevRel community work
- 2-content: [Content Repurposing](../2-content/content-repurposing.md) — how DevRel content compounds across channels
- 2-content: [Documentation Strategy](../2-content/documentation-strategy.md) — foundational doc layer for any DevRel function
