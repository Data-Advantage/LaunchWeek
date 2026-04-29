[Back to Day 4: Convert](README.md)

# Comparison Pages That Actually Convert

Comparison pages — the `/vs/competitor` pages buyers find when they're already shopping — are the single highest-converting content type most B2B SaaS will ever publish. Buyers search "[my-product] vs [competitor]" or "alternatives to [competitor]" with explicit intent to choose. A page that meets them at that moment, treats them like adults, and answers the real question converts at 5–15% — multiples of any other landing page on your site.

Done badly, they're worse than nothing. Defensive copy, exaggerated feature checkmarks, and "competitor X is bad and we are good" framing destroy trust and invite the competitor to publish a counter-page that ranks better than yours. The teams that win at comparison pages treat them as positioning artifacts first and SEO assets second.

This guide is the playbook for picking which competitors to target, structuring the page so it ranks AND converts, and maintaining it past the first publish.

## What Done Looks Like

By end of quarter:

- 2–5 published `/vs/competitor` pages, one per direct competitor worth comparing against
- Each page ranks page 1 for "[your product] vs [competitor]" within 3–6 months of publish
- Each page has a measurable conversion rate (sign-up, demo request, or trial start) tracked separately from the homepage
- A maintenance cadence: pages reviewed quarterly, refreshed when either product changes
- A decision criterion for declining future comparison pages (some competitors aren't worth the page)

This pairs with [Competitive Positioning](../1-position/competitive-positioning.md) (the comparison page is downstream of positioning), [SEO Strategy](../2-content/seo-strategy.md) (the keyword research and on-page structure), [Pricing Page](pricing-page.md) (visitors who finish the comparison page often jump to pricing next), and [AEO/GEO](../2-content/aeo-geo.md) (LLMs cite comparison pages heavily — be the source).

## When NOT to Build a Comparison Page

Most founders build comparison pages too early or against the wrong competitor. The page is real work to produce and to maintain, so be selective.

```
Help me decide whether to build a /vs page for each candidate competitor.

For each competitor on my shortlist, score these:

1. **Search volume**: does "[my product] vs [competitor]" or "alternatives to [competitor]" have meaningful monthly search volume? (Use Ahrefs / SEMrush / Google Keyword Planner.)
2. **Buyer overlap**: do my actual prospects compare us against this competitor in sales calls, support tickets, or churn surveys? (Real overlap, not assumed overlap.)
3. **Honest differentiation**: can I name a real, honest reason a buyer would pick me over them — without lying or exaggerating? If the answer is "we have feature X and they don't," check whether that's still true (their roadmap may have closed the gap).
4. **Honest concession**: can I name a real, honest reason a buyer would pick them over me? If I can't think of one, the page will read as defensive marketing — buyers will sense it.
5. **Their content posture**: have they published a counter "/[competitor] vs [my product]" page? If yes, am I prepared to win the SERP fight, or am I picking a battle I'll lose?
6. **Stability of the comparison**: will the comparison still be true in 6 months? If their product is moving fast and the page will be stale by Q3, the maintenance cost may exceed the value.

Rules:
- Build pages against the 2–5 competitors with high search volume, high buyer overlap, and a stable honest comparison.
- Skip competitors where the comparison is unstable, where I can't honestly differentiate, or where buyers don't actually compare us.
- Skip competitors who are 10x my size if the comparison feels like punching up at someone who never punches back. (Sometimes worth it for SEO; usually not for conversion.)

Output:
1. A scored shortlist of every direct competitor
2. The 2–5 to build pages for, ranked
3. The 1–3 to explicitly NOT build pages for, with reason
4. A revisit date for the "not now" list
```

The biggest unforced error is building a comparison page against a competitor whose buyers don't overlap with yours. If your prospects are coming from "Notion alternatives" but you're building a Notion-vs-page despite having a totally different ICP, the traffic doesn't convert. Pick comparisons buyers are actually making.

## The Page Structure That Ranks AND Converts

A good comparison page has a specific structure. Skip any of these sections and either ranking or conversion suffers.

```
Help me draft the comparison page for [my product] vs [competitor].

The structure I'm using:

**1. Title and H1**
- H1: "[My product] vs [competitor]" or "[My product] vs [competitor]: [the actual trade-off]"
- NOT: "Why [my product] is better than [competitor]" (defensive, low trust)
- Title tag: "[My product] vs [competitor]: [year] comparison" — buyers search with year
- Meta description: a one-sentence summary of the actual trade-off

**2. TL;DR at the top (above the fold)**
- 3–5 bullets that name the trade-off honestly
- Example: "[Competitor] is the right pick if you need X, Y, Z. [My product] is the right pick if you need A, B, C."
- This is the section LLMs cite. Make it dense, factual, scan-friendly.

**3. The honest "when [competitor] is the right pick" section**
- Yes, you actually write this. It builds trust faster than any other section.
- Real reasons a buyer should pick the competitor (their strengths, their fit cases)
- This is also the section the competitor's sales team will quote you on. Make it accurate.

**4. The honest "when [my product] is the right pick" section**
- Mirror of section 3: real reasons a buyer should pick you
- Specific use cases, customer types, scenarios
- No "we are better at everything" framing

**5. Feature-by-feature comparison table**
- Honest checkmarks. If the competitor has the feature in any form, mark it. Asterisks and footnotes are fine.
- Group by category (e.g., Core, Integrations, Pricing, Support) not by random ordering
- Source any claim that''s not obvious. "Per [competitor]''s docs as of [date]"
- Update the date in the page footer when you refresh

**6. Pricing comparison**
- Side-by-side, with the honest acknowledgment that pricing changes
- Total cost of ownership where relevant (per-seat pricing vs flat; included vs add-on features)
- Date-stamp it; refresh quarterly

**7. The migration story (if applicable)**
- "Switching from [competitor] to [my product]" subsection
- Import tools, data migration support, white-glove onboarding offer
- This is where comparison pages convert hardest — buyers who searched are halfway out the door

**8. Customer quotes**
- Quotes from customers who switched, ideally naming what they liked / disliked about the competitor
- Per [Customer References](customer-references.md): structured quotes with name, title, company, logo
- Avoid "[competitor] is bad" quotes — use "we needed X and got it from [my product]" framing

**9. FAQ**
- The 5–10 questions buyers actually ask in the comparison
- Schema-marked-up FAQ for SERP rich results (per [SEO Strategy](../2-content/seo-strategy.md))
- Examples: "Can I export my data?" "Does it support [integration]?" "What''s the migration path?"

**10. CTA**
- Single, clear next step: free trial, demo request, or pricing page
- Don''t overload — one CTA per page
- The CTA reflects the buying stage. Comparison-page traffic is mid-funnel; offer a low-friction next step.

Output the full page draft following this structure, with all sections filled in.
```

The biggest mistake is the feature-checkmark battle. A page that claims "we have X" with a green checkmark and "[competitor] doesn't have X" with a red X — when [competitor] actually has a partial version of X — destroys trust the moment a buyer notices. Buyers always notice. Footnote your asterisks; admit partial parity; let your real differentiation stand on its own.

## Three Patterns for the Comparison Itself

The shape of the comparison drives how it converts. Pick the right one for your situation.

### Pattern 1: The "yes, and we're different" page

Use when: you and the competitor solve genuinely different problems for genuinely different ICPs, and the comparison is mostly about helping the buyer self-select.

Example framing: "Linear vs Jira. Both are issue trackers. Linear is built for engineering teams under 200 people who prioritize speed. Jira is built for enterprises with complex workflows. Here's how to pick."

This is the highest-trust pattern. You don't need to win — you need to help the buyer pick correctly. Many of those buyers are still you.

### Pattern 2: The "same job, different shape" page

Use when: you and the competitor solve the same problem with meaningfully different approaches (open vs closed, self-host vs cloud, no-code vs code-first, etc.).

Example framing: "Sentry vs Honeybadger. Both monitor errors. Sentry is broad and language-rich; Honeybadger is opinionated and Ruby-friendly. Pick based on stack and team size."

The key here is naming the axis of difference up front (in the TL;DR) and structuring the rest of the page around it. Buyers who land on this page already know they need the category — your job is to help them choose the shape.

### Pattern 3: The "alternative to [bigger competitor]" page

Use when: you're meaningfully smaller than the competitor and a chunk of their unhappy users are looking for alternatives.

Example framing: "An alternative to [big competitor] for [specific underserved segment]." The URL is often `/[big-competitor]-alternative` instead of `/vs/[big-competitor]`.

This is the pattern with the highest conversion rate and the highest risk of looking petty. Two rules:
- Never trash the bigger competitor. Buyers respect "they're great for enterprises; we're built for [your segment]" far more than "[competitor] is bloated and expensive."
- Be specific about who you're for. "Alternative to [big competitor] for solo founders who don't need SSO" beats "alternative to [big competitor]" with no qualifier.

```
Help me pick the right pattern for my [my product] vs [competitor] page.

For each candidate competitor, decide:

1. Are we solving the same problem or genuinely different problems?
2. Is the shape of our approach meaningfully different (deployment, philosophy, target user)?
3. Are we meaningfully smaller than this competitor and looking for their unhappy users?

Map each competitor to one of:
- Pattern 1 (different problems / different ICPs)
- Pattern 2 (same job, different shape)
- Pattern 3 (alternative-to / smaller-vs-bigger)

For each, draft the TL;DR section in 3 bullets so I can validate the framing before writing the full page.

Output:
1. The pattern per competitor
2. The TL;DR bullets per competitor
3. Any competitor where the pattern is unclear (these may not be worth a page)
```

## SEO Mechanics That Actually Matter

Comparison pages live or die on whether they rank. Most of the conversion math assumes you're on page 1 of search results. The mechanics are not exotic, but they're specific.

```
Help me apply the SEO mechanics to my comparison page.

**URL structure**:
- Primary form: `yoursite.com/vs/[competitor]` — clean, scannable, easy to link from internal pages
- Alt form: `yoursite.com/[competitor]-alternative` — for pattern 3 pages
- Don''t use: `?utm_…` parameters in the canonical, content under `/blog/` (looks like a blog post not a comparison), or the competitor name in the path more than once

**Title tag**:
- "[My product] vs [competitor]: [year] comparison" or
- "[My product] vs [competitor]: which is right for [audience]"
- Length: 50–60 characters
- Include the year — buyers search "[product] vs [competitor] 2026"

**Meta description**:
- 140–155 characters
- Lead with the trade-off, not a sales pitch
- Example: "Compare [my product] and [competitor] on pricing, features, and best fit. [My product] excels at X; [competitor] excels at Y."

**H-tag hierarchy**:
- One H1: "[My product] vs [competitor]"
- H2 per major section (TL;DR, when [competitor] wins, when we win, feature comparison, pricing, FAQ)
- H3 for sub-sections within each
- Keywords in H2s, naturally — not stuffed

**Schema markup** (per [SEO Strategy](../2-content/seo-strategy.md)):
- `FAQPage` schema on the FAQ section (eligible for rich results)
- `Product` schema on the hero (your product) and `ItemList` for the comparison table
- `Review` schema if you have customer quotes that include ratings

**Internal links**:
- Link FROM the comparison page TO: pricing, features, integrations, migration guide
- Link TO the comparison page FROM: features pages (where relevant), homepage (in a "compare us" section), blog posts (when comparing alternatives is relevant context)

**Content depth**:
- 1,500–2,500 words is the sweet spot for comparison pages in 2026
- Below 1,000 words: thin content, won''t rank
- Above 3,000 words: bloat, conversion drops

**Freshness signal**:
- Date the page in the footer ("Last updated: [date]")
- Refresh quarterly — not just date change, real content review
- Bump pricing, feature parity, and customer quotes
- Old comparison pages (>12 months stale) drop in rankings even if traffic was strong

Output:
1. The full SEO checklist applied to my page
2. The schema markup JSON-LD blocks ready to drop in
3. The internal-link plan
4. The freshness review schedule
```

The biggest ranking mistake is treating the comparison page as a static asset. Comparison pages need fresh signals — pricing changes, feature changes, customer quotes — to keep their rank as competitors update. Treat them as living documents.

## Watching for the Counter-Page

Once your `/vs/competitor` ranks, the competitor will notice. About a third of the time they'll publish a counter-page (`competitor.com/vs/your-product`) within 90 days. Two responses are reasonable:

- **Keep your page honest and let theirs be petty.** If their counter-page exaggerates or trashes you, you'll likely outrank it on signals like trust and bounce rate. Don't escalate.
- **Update your page with new information.** If their counter-page surfaces a real critique — your support is slow, your pricing is opaque, your migration is hard — fix it in the product first, then update your page. Don't argue; address.

What you should NOT do: write a rebuttal page, edit your page in anger, or remove their valid critiques. Buyers can tell when a page becomes defensive between visits.

```
Watch for competitor counter-pages.

Set up monthly checks:
- Search "[competitor] vs [my product]" — see what ranks
- Search "[competitor] alternative" — see if you appear and what tone surrounds you
- Set up a Google Alert for `"[competitor].com" "[my product]"` — catches mentions
- Check Ahrefs / SEMrush for new pages on competitor''s domain mentioning your product

When a counter-page appears:
1. Read it as if you were a buyer
2. Note any factual errors (their claims, not their framing)
3. Note any critiques that are actually true
4. Update your page to address the truthful critiques (in the product first if possible)
5. Reach out to the competitor only if there''s a clear factual error worth correcting professionally

Output:
1. The monitoring setup
2. The response template for factual-error outreach
3. The internal review process when a counter-page appears
```

The teams that lose this game aren't the ones who get a counter-page — they're the ones who panic. Steady, honest pages beat reactive pages every time.

## Maintenance: The Quarterly Review

A comparison page that's 18 months out of date is worse than no page. Pricing shifts, features ship, customer quotes age, and the search algorithm punishes stale pages. Build the maintenance cadence into the same calendar as your roadmap reviews.

```
Run the quarterly review for each comparison page.

Per page, check:

**Accuracy**:
- Is every feature checkmark still correct? Open the competitor''s docs and verify.
- Is every pricing claim current? Pull their pricing page; compare.
- Are customer quotes still relevant? Have any customers churned out — pull those quotes.
- Has the product changed in ways that update the comparison? Add new strengths or new fit cases.

**Performance**:
- What's the page''s ranking for the primary keyword? (Track in GSC.)
- What''s the conversion rate vs last quarter? (Track in your analytics tool.)
- What''s the bounce rate? (High bounce = mismatch with intent — either page or keyword issue.)

**Action**:
- If accuracy needs an update, do it.
- If ranking dropped, audit on-page SEO and content depth.
- If conversion dropped, check the CTA and the customer quote freshness.
- If the page is no longer worth maintaining, archive it (don''t delete — 301 to homepage or competitive-positioning).

Output:
1. The review log per page
2. Actions taken this quarter
3. Pages flagged for next quarter''s deeper review
4. Any page recommended for archive
```

---

## What "Done" Looks Like

A working comparison-page program in 2026 has:

- A clear-eyed shortlist of which competitors to compare against and which to skip
- 2–5 published `/vs/[competitor]` pages, each at 1,500–2,500 words
- Each page structured with TL;DR, honest "when they win" section, feature comparison, pricing, customer quotes, FAQ, single CTA
- Schema markup (FAQ, Product, ItemList) on every page
- Quarterly accuracy review baked into the team rhythm
- Counter-page monitoring set up and reviewed monthly
- Conversion tracking separate from homepage so the page's value is measurable
- A documented decision criterion for declining future comparison-page requests

The hidden cost of comparison pages isn't writing them — it's maintaining them. The teams that win publish 3 pages and maintain all 3 forever. The teams that lose publish 12 pages and maintain none.

## See Also

- [Competitive Positioning](../1-position/competitive-positioning.md) — the upstream work that makes the comparison honest
- [SEO Strategy](../2-content/seo-strategy.md) — the keyword and on-page mechanics
- [AEO/GEO](../2-content/aeo-geo.md) — LLMs cite comparison pages heavily; structure for that too
- [Pricing Page](pricing-page.md) — where comparison-page traffic often goes next
- [Customer References](customer-references.md) — the source of credible customer quotes
- [Beta Program](beta-program.md) — beta participants are great migration-story sources

[Back to Day 4: Convert](README.md)
