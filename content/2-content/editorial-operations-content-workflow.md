# Editorial Operations & Content Workflow

[⬅️ Back to Day 2: Content](./)

Once you're publishing more than 1-2 pieces a week, content becomes an operations problem. Ideas need triage; briefs need templates; drafts need review; SEO needs validation; legal/compliance review (sometimes); design needs lead time; publication needs scheduling; promotion needs coordination; performance needs tracking. Without an explicit operating model, content slips: pieces miss deadlines, brand voice drifts, the same topics get covered twice while top-priority topics languish, and freelancer + agency relationships fray.

This is the operational backbone for content marketing. Not the strategy (covered in [SEO Strategy](./seo-strategy.md)) and not the writing tactics (covered in [Long-Tail SEO Content Production](./long-tail-seo-content-production.md)) — this is the *how do we run content as a function* layer.

## What Done Looks Like

- Documented editorial calendar covering 4-12 weeks ahead (depends on cadence)
- Standard content brief template that every piece is written from
- Approval workflow: draft → editor → SEO check → legal (if applicable) → publish
- Content templates library (blog post structures, case study skeletons, comparison-page layouts) reusable + maintained
- Freelancer / agency operating playbook: how briefs are issued, deadlines, payment, quality control
- Performance review cadence: weekly / monthly / quarterly per piece + per channel
- Tooling: where the calendar lives, where briefs live, where drafts review, how publication happens
- Owner: a content lead, content ops manager, or fractional thereof past $5M ARR

## 1. The Editorial Calendar

The single most important artifact. Without it, content drifts to "what's easy to write this week."

### What Goes In

For each piece in the calendar:

- **Topic / working title**
- **Type** (SEO blog / thought-leadership / case study / pillar page / lead magnet / comparison page / glossary / etc.)
- **Target keyword** (if SEO-driven)
- **Target persona** (if persona-driven)
- **Distribution channels** (blog only? email? social? syndication?)
- **Owner** (writer + editor)
- **Due dates**: brief due → draft due → review due → publish date
- **Status** (idea → briefed → drafting → in-review → published → promoted)
- **Notes / dependencies** (waiting on customer interview; legal review needed; etc.)

### Cadence

Decide explicitly:

- **Weekly**: 1-2 pieces per week (most B2B SaaS)
- **Daily**: 5+ pieces per week (heavy SEO / programmatic)
- **Bi-weekly / monthly**: 1-2 pieces per month (early-stage; founder-led)

Most B2B SaaS settle on **2-4 pieces per week** at scale (~150-200/year). More requires team; less may be sufficient depending on positioning.

### Calendar Tools

- **Notion / Airtable**: most common for early-stage; flexible
- **Trello / Asana**: kanban-style flow
- **Google Sheets**: simplest; works at small scale
- **Specialized**: ContentCal, CoSchedule, Welcome (formerly NewsCred), Storychief

For most teams, **Airtable** (with views for calendar / kanban / list / table) is the sweet spot. Keep it simple until you outgrow it.

### Time Horizons

- **Today / This week**: detailed (every piece's status; daily check-ins)
- **Next 4 weeks**: defined (briefs assigned, writers booked)
- **Next quarter**: themes outlined (specific pieces optional)
- **Next year**: strategic priorities (verticals, campaigns, big rocks)

Don't over-plan. A 12-month detailed calendar is fiction. Plan in horizons.

## 2. The Content Brief

A brief is the document that goes from "we want a piece on X" to "writer can produce a draft." Without briefs, writers guess; quality is variable; rewrites pile up.

### Brief Template

Standard sections:

```
Title (working): [working title]
Slug: [/blog/example-slug]
Type: [SEO blog / thought-leadership / case study / etc.]
Target persona: [who reads this]
Search intent: [informational / navigational / commercial / transactional]
Primary keyword: [main keyword + monthly volume + difficulty]
Secondary keywords: [3-5 related keywords]
Target word count: [1500-3500]

Outline:
- H1: [proposed headline]
- H2: [section 1]
  - Sub-points to cover
- H2: [section 2]
  - Sub-points
- H2: [section 3]
  - Sub-points
- Conclusion + CTA

Voice + tone: [matches our brand voice; specific notes for this piece]

Internal links: [list of existing pages to link to]
External links: [authoritative sources to cite]
Visual requirements: [hero image; specific charts / screenshots; expert quotes]

Distribution plan: [where this gets promoted post-publish]

Success metrics: [target keyword ranking; estimated organic traffic; conversion goal]

Examples: [3-5 competitor / inspirational pieces to study]

Notes: [anything specific — customer interview to use; specific quotes to include; etc.]
```

### Who Writes the Brief

- Content strategist / content marketer (most common)
- SEO specialist (for SEO pieces)
- Founder / SME (for thought-leadership pieces)

Brief quality determines draft quality. A writer working from a 10-line brief produces 10-line briefs of work. Invest in brief depth.

### Brief Tools

Same as editorial calendar. Notion or Airtable with brief template. Some teams use **Frase**, **Clearscope**, **Surfer SEO** for SEO-specific briefs that pull SERP analysis automatically.

## 3. The Approval Workflow

Most pieces flow:

```
Idea → Brief → Drafting → Internal Review → SEO Check → Legal/Compliance (if needed) → Publish → Promote
```

### Roles

- **Writer**: produces the draft from brief
- **Editor**: reviews for quality, voice, structure, factual accuracy
- **SEO**: validates keyword optimization, internal linking, schema, meta
- **Subject Matter Expert (SME)**: reviews for technical accuracy
- **Legal / Compliance**: reviews regulated claims (financial, medical, security)
- **Designer**: produces hero image + in-line visuals
- **Publisher**: handles CMS upload, scheduling, formatting

For small teams, one person wears multiple hats. Document who owns what.

### SLA per Stage

- Brief approval: 1-2 days
- Drafting: 3-7 days (1500-3000 words)
- Editor review: 1-2 days
- SEO check: 1 day
- Legal: 2-5 days (often a bottleneck)
- Publish: 1 day

Total: 10-15 business days from brief approved to live. Faster cycles possible with practiced teams.

### Status Tracking

Every piece has a status. Daily / weekly content standups review:

- Stuck pieces (over deadline)
- Pieces in review (need attention)
- Just-published (need promotion)
- Upcoming this week

## 4. Content Templates Library

Reusable templates for common content types. Saves time + enforces consistency.

### Template Types

- **Blog post (SEO)**: H1 → intro → numbered sections with H2 → conclusion → CTA
- **Comparison page**: TL;DR table → category overview → per-product deep dives → decision matrix → verdict
- **Case study**: customer overview → challenge → solution → results → quote → CTA
- **Glossary entry**: term + 1-line definition → expanded explanation → related terms → CTA
- **Newsletter issue**: hook → 3-5 sections → CTA → signoff
- **Product update post**: what's new → why → how to use → screenshots
- **Tutorial / How-to**: prerequisites → step-by-step → common errors → next steps
- **Roundup / Lists**: intro → list items with consistent format → conclusion
- **Pillar page (long-form)**: hub-and-spoke structure linking to detailed sub-pages

### Template Components

For each:

- HTML / Markdown skeleton
- Suggested word count
- SEO requirements (meta length, keyword placement)
- Visual requirements (hero, charts, screenshots)
- CTA placements
- Internal linking guidance
- Brand voice notes

### Maintenance

Quarterly review:

- Are templates still working? (Performance review)
- Need new template type?
- Brand voice updates that should propagate?

Don't ossify. Templates evolve.

## 5. Freelancer / Agency Operating Model

Once you're producing 4+ pieces a week, you need external writers / agencies. The relationship needs structure.

### Onboarding

For each new freelancer:

1. **Brand voice training**: read your voice guide; review 5-10 prior pieces; write a sample
2. **First piece is paid + reviewed in detail**: heavy editor feedback to align
3. **Second piece**: lighter feedback; minor adjustments
4. **Third+**: cadence kicks in if quality is consistent

### Brief Issuance

- Standard brief template (above)
- Clear deadline + word count + payment terms
- Examples to study
- Single point-of-contact (your content lead, not the founder)

### Quality Bar

Document explicit quality expectations:

- Voice + tone match
- Factual accuracy (with citations)
- Original — not AI-spun copy
- Internal links + external citations
- Meets SEO requirements

### Payment

- **Per-piece flat fee**: most common ($150-1500 per piece depending on complexity)
- **Per-word**: less common; old-school
- **Retainer**: $3K-15K/mo for 4-8 pieces/mo from same writer
- **Agency contract**: 6-month minimums often; quarterly retainer

Pay on delivery (or 30-day NET) — not on publish. Writer's job is producing the agreed work; whether you publish depends on your edit/promote cycle.

### Revisions

Standard expectation: 2 rounds of revisions included. Beyond that, you're scope-creeping the writer or using the wrong writer.

### Off-Boarding

When a freelancer doesn't fit:

- Honest feedback once
- One more chance
- If still off, end the relationship cleanly
- Pay for the work delivered; don't try to recoup

## 6. Distribution Workflow

Publishing is the start, not the end.

### Standard Distribution Checklist

For every piece, the day-of and week-of:

**Day 0 (publish day):**

- Email to subscribers (or queue for next newsletter)
- Tweet / LinkedIn post / Mastodon / Bluesky from company + founder accounts
- Slack / Discord community share
- Internal Slack notification (your team should see it first)
- Submit to relevant communities (Hacker News if newsworthy; subreddits; etc.)

**Day 1-7:**

- Reply to comments + engagement
- Reach out to mentioned companies / experts (link build)
- Cross-post / republish (Medium / dev.to / LinkedIn Articles where appropriate)
- Pitch to relevant newsletters / podcasts
- Sales / CS share with relevant accounts

**Week 2-4:**

- Performance check (does it rank? Is it converting?)
- Update / iterate if underperforming
- Repurpose: video / podcast / Twitter thread / lead magnet

### Distribution Owner

Don't leave distribution to the writer. Distribution is its own role (often content marketer or social media person). Without explicit ownership, distribution slips.

## 7. Performance Review Cadence

### Weekly

- What published this week?
- Which pieces are getting traction (early signal)?
- Anything stuck or delayed?

### Monthly

- Top performers: traffic, conversions, links earned
- Underperformers: why?
- Calendar adjustments for next month

### Quarterly

- Review against quarterly content goals (SEO traffic, leads from content, brand engagement)
- Audit underperforming pieces (refresh, redirect, or kill)
- Adjust strategy based on what's working

### Annual

- Full content audit
- Strategy reset based on yearly trends
- Headcount + budget planning

## 8. Tooling Stack

A typical content ops stack:

| Function | Tools |
|---|---|
| Calendar / planning | Airtable, Notion, Trello, Asana |
| Briefs | Notion, Google Docs, Frase, Clearscope |
| Drafting | Google Docs, Notion |
| SEO research | Ahrefs, Semrush, Clearscope, Surfer |
| Editing / proofreading | Grammarly, ProWritingAid |
| AI assistance | Claude, GPT, Jasper, Copy.ai |
| Image / hero | Figma, Canva, Adobe Express, Midjourney |
| CMS / publish | Webflow, WordPress, Sanity, Contentful |
| Email | Loops, Customer.io, Mailchimp, Substack |
| Social | Buffer, Hootsuite, Hypefury, Typefully |
| Analytics | Google Analytics, Plausible, Fathom |
| SEO performance | Ahrefs, Semrush, GSC, Sistrix |

### Decision Framework

Don't over-tool. Most teams: Airtable + Notion + Google Docs + your CMS + Buffer + Ahrefs covers 90%.

## 9. Common Failure Modes

**No editorial calendar.** Content drifts to whatever's easy that week. Calendar is non-negotiable.

**Briefs too thin.** Writer guesses; drafts need 3 rewrites. Invest in brief depth.

**Approval bottleneck on founder.** Founder reviews every piece; pieces stack up; cadence breaks. Delegate review.

**No performance feedback loop.** Pieces published; never reviewed. Don't know what's working. Monthly performance review minimum.

**Freelancer onboarding skipped.** First piece is bad; relationship dies. Invest in onboarding + first-piece feedback.

**Distribution as afterthought.** Publish; cross fingers. 80% of pieces get <100 views due to no distribution. Plan distribution before publish.

**No template library.** Every piece reinvented. Same structure pieces; reuse templates.

**Templates ossified.** Templates from 2 years ago don't reflect current brand voice. Update quarterly.

**Brand voice drift.** Multiple writers; no voice guide; pieces feel disconnected. Maintain voice guide; reference in every brief.

**SEO afterthought.** Piece written; SEO bolted on; doesn't rank. SEO baked into brief.

**Legal as last-minute blocker.** Piece ready; legal flags issue; deadline missed. Brief in legal early for regulated topics.

**Owner ambiguity.** "Whose job is this?" — content lead, marketing, founder, freelancer agency. Document ownership per role.

**Calendar in 5 different tools.** Notion + Trello + Slack + Airtable + Google Sheets. Pick one source of truth.

**Daily standups for 1 piece per week of output.** Over-process. Match cadence to volume.

**No content audit / refresh cycle.** Older pieces decay; lose rankings. Quarterly audit; refresh top 20%.

**Freelancer payment late / unclear.** Writers won't take repeat work. Pay on delivery; clear terms.

**No way to surface "this customer interview should become a piece."** Sales / CS see content opportunities; never reach content team. Build a feedback loop.

**Publish without proofread.** Embarrassing typos; brand damage. Final proofread step before publish.

**Promotion without targeting.** Same Tweet to same audience for every piece. Tailor distribution per piece.

**No success criteria per piece.** "Just publish more" mindset. Each piece has goals; review against them.

**Not repurposing top performers.** Best blog post; never made into video / Twitter thread / lead magnet. Repurpose top 10% aggressively.

**Burnout on internal writers.** Content team writes 5 pieces/week; quality drops. Realistic cadence; freelancer support.

## What Done Looks Like (Recap)

You've shipped editorial operations when:

- 4-12 week editorial calendar maintained in one place
- Standard brief template used for every piece
- Approval workflow with role + SLA per stage
- Content templates library; reusable + maintained
- Freelancer / agency playbook (onboarding, briefs, payment, quality)
- Distribution checklist applied to every publish
- Weekly + monthly + quarterly performance review cadences
- Right-sized tooling stack (don't over-tool)
- Named owner of content operations past $5M ARR

## Mistakes to Avoid

- No calendar; content drifts
- Thin briefs; writers guess
- Founder bottleneck on approval
- No performance feedback
- Freelancer onboarding skipped
- Distribution as afterthought
- No templates; reinvention every time
- Brand voice drift
- SEO bolted on at end
- Legal blocking late
- Calendar fragmented across tools
- No content audit / refresh cycle
- Late freelancer payment
- No success criteria per piece
- Not repurposing top performers
- Burnout from unrealistic cadence

## See Also

- [SEO Strategy](./seo-strategy.md)
- [SEO Content Audit & Refresh](./seo-content-audit-refresh.md)
- [Long-Tail SEO Content Production](./long-tail-seo-content-production.md)
- [Blog Posts with AI](./blog-posts-with-ai.md)
- [Content Agent](./content-agent.md)
- [Content Repurposing](./content-repurposing.md)
- [Documentation Strategy](./documentation-strategy.md)
- [Founder Newsletter](./founder-newsletter.md)
- [Founder Podcast Production](./founder-podcast-production.md)
- [Customer Case Studies](./customer-case-studies.md)
- [Demo Video](./demo-video.md)
- [Lead Magnets](./lead-magnets.md)
- [Webinars](./webinars.md)
- [Public Roadmap](./public-roadmap.md)
- [Email Sequences](./email-sequences.md)
- [Social Content Calendar](./social-content-calendar.md)
- [Thought Leadership Essays](./thought-leadership-essays.md)
- [AEO + GEO](./aeo-geo.md)
- [Brand Voice (1-position)](../1-position/brand-voice.md)
- [Demand Generation Playbook](../3-distribute/demand-generation-playbook.md)
- [Inbound Marketing Playbook](../3-distribute/inbound-marketing-playbook.md)
- [LinkedIn Content Strategy](../3-distribute/linkedin-content-strategy.md)
- [Twitter / X Distribution](../3-distribute/twitter-x-distribution.md)
- [YouTube Distribution](../3-distribute/youtube-distribution.md)
- [Building in Public](../3-distribute/building-in-public.md)
- [Founder Brand](../3-distribute/founder-brand.md)
- [Newsletter Sponsorships](../3-distribute/newsletter-sponsorships.md)
- [Customer Education & Training Programs (4-convert)](../4-convert/customer-education-training-programs.md)
- [Customer Marketing Program (4-convert)](../4-convert/customer-marketing-program.md)
- [Marketing Operations Playbook (4-convert)](../4-convert/marketing-operations-playbook.md)
- [First Marketing Hire (4-convert)](../4-convert/first-marketing-hire.md)
- [Annual Planning & OKRs](../1-position/annual-planning-okrs.md)
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md)
- [Brand Voice (1-position)](../1-position/brand-voice.md)
- [Localization & Translation Tools (VibeReference)](https://viberef.dev/marketing-and-seo/localization-translation-tools.md)
- [SEO Content Optimization Tools (VibeReference)](https://viberef.dev/marketing-and-seo/seo-content-optimization-tools.md)
- [Schema Markup (VibeReference)](https://viberef.dev/marketing-and-seo/schema-markup.md)
- [AI Writing & Copy Tools (VibeReference)](https://viberef.dev/marketing-and-seo/ai-writing-copy-tools.md)
- [Newsletter Platforms (VibeReference)](https://viberef.dev/marketing-and-seo/newsletter-platforms.md)
- [Email Marketing Providers (VibeReference)](https://viberef.dev/marketing-and-seo/email-marketing-providers.md)
- [Microcopy & Product Copy Systems (VibeWeek)](https://vibeweek.dev/6-grow/microcopy-product-copy-systems-chat.md)
