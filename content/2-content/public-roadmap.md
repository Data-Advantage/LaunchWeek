[Back to Day 2: Content](README.md)

# Public Roadmap as Marketing: Show What's Coming Without Promising What You Won't Ship

Most B2B SaaS founders react to "Do you have a public roadmap?" the same way: defensive. The fear is that a public roadmap commits the team to specific dates, lets competitors copy plans, or invites pile-on from customers demanding their pet feature. So most companies hide their roadmap behind a "Contact sales" door, share it in PDFs to enterprise prospects, and lose the marketing leverage entirely.

A well-built public roadmap is one of the highest-leverage marketing assets in B2B SaaS. It signals momentum without overpromising, gives prospects in deep evaluation a reason to commit ("they're building exactly what I need"), demonstrates the team's strategic clarity, and converts feature-request friction into engaged-customer feedback. The trick is structure — categorize what's done, what's in progress, what's in research, what's intentionally not coming — so the roadmap is informative without being a binding commitment.

This guide is the playbook for building a public roadmap that drives signups, feature requests, and trust — without painting your team into corners.

## What Done Looks Like

By end of the project:

- A public `/roadmap` page on your site
- Categorized by stage (Done / In Progress / Researching / Not on Roadmap)
- Updated at least monthly
- Connected to the changelog (per [Changelog & Roadmap](../../../VibeWeek/6-grow/changelog-roadmap-chat.md) for product implementation)
- A feedback mechanism (upvote, comment, suggest)
- Linked from product, marketing site, and pitch decks

This pairs with [Changelog & Roadmap](../../../VibeWeek/6-grow/changelog-roadmap-chat.md) (the engineering side), [Comparison Pages](../4-convert/comparison-pages.md) (your "we're shipping X soon" defends against competitor wins), [Trust Center & Security Page](../4-convert/trust-center-security-page.md) (similar transparency artifact), [Customer References](../4-convert/customer-references.md) (roadmap customers often become references), [Building in Public](../3-distribute/building-in-public.md) (broader transparency strategy), and [Founder Newsletter](founder-newsletter.md) (channel for roadmap updates).

## When to Have a Public Roadmap

Not every company needs one. Decide deliberately.

```
Help me decide if I should ship a public roadmap.

The "yes" signals:

- Sales-led: prospects often ask "is X coming?" — public answer saves cycles
- B2B with mid-market+ buyers: customers expect to see strategic direction
- Product-led but with feature-request fatigue: roadmap absorbs requests
- Categories with active competitor publishing: keeps you visible
- Bootstrapped / smaller company: signals momentum without enterprise budget

The "wait" signals:

- Pre-product-market-fit: roadmap shifts too fast to publish
- Highly stealthy positioning play: you don''t want competitors to see
- Tiny team without bandwidth to update monthly: stale roadmap is worse than no roadmap
- Highly regulated or contractual: legal restrictions on forward-looking statements

For my company:
- Sales motion (per [self-serve vs sales-led](../4-convert/self-serve-vs-sales-led.md))
- Stage (PMF / scaling / mature)
- Competitor public-roadmap status
- Internal capacity to maintain

Output:
1. The decision: yes / wait / no
2. The reasoning
3. The maintenance commitment (monthly minimum)
4. The audience priority
```

The biggest unforced error: **publishing a roadmap and never updating it.** A roadmap last updated 6 months ago is a negative signal — looks like the company stopped shipping. Worse than no roadmap.

## Categorize Status to Manage Expectations

The structure is more important than the content. Categories prevent commitment creep.

```
Help me design the roadmap categorization.

The patterns:

**Pattern A: Three-bucket roadmap (recommended for most)**

- **Recently Shipped**: last 90 days
- **In Progress**: actively being built
- **Researching**: under consideration; no commit

Pros:
- Clean, scannable
- "Researching" gives flexibility
- Feels current

**Pattern B: Five-bucket roadmap**

- **Recently Shipped**: last 90 days
- **Now**: actively being built
- **Next**: planned next quarter
- **Later**: future quarters
- **Considering**: under research

Pros:
- More information for buyers
- Cons: "Next" / "Later" can feel like commitments

**Pattern C: Outcome-themed (no buckets)**

- Each item: a customer outcome, not a feature
- "Make import 10x faster" instead of "rebuild import pipeline"
- Status indicator per item

Pros:
- Customer-centric language
- Cons: harder to scan

**For most indie SaaS in 2026**: Pattern A is the safe default. Add "Not on roadmap" if you get repeat requests for things you''ll never build.

**The "Not on Roadmap" bucket**:

A surprisingly powerful category:
- "X feature: we''re not building this because [reason]"
- Saves customer cycles asking
- Demonstrates strategic clarity
- Examples: "Native mobile app — we focus on web; mobile-web is a priority instead"

**Anti-categories to avoid**:

- **Specific dates** ("Q3 2026") — commits you publicly; drift is brutal
- **Person names assigned** — internal info; not public
- **Internal codenames** — confusing; doesn''t add value
- **"Stretch goals"** — sets up failure narrative

**Critical implementation rules**:

1. **No specific dates.** "In Progress" means "currently being built" not "shipping by date X."
2. **Always show "Recently Shipped"** to demonstrate momentum.
3. **"Researching" is the safety valve.** When in doubt, put it there.
4. **Update monthly minimum.** A stale roadmap is bad PR.

**Don''t**:
- Promise dates publicly
- Show every line item (curate to ~10-30 visible items)
- Confuse "considering" with "committed"

Output:
1. The chosen pattern
2. The categories with definitions
3. The "Not on Roadmap" bucket if relevant
4. The update cadence
```

The biggest single roadmap principle: **never publish dates publicly**. Ship-by-date commitments compound risk; one missed date erodes trust on every other item. "In progress" / "researching" is enough information for buyers; specifics live in private sales conversations.

## Decide What Goes On the Roadmap

Curate. Not every commit gets a roadmap entry.

```
Help me decide what goes on the roadmap.

The criteria:

**Always include**:
- Major customer-visible features (new modules, new integrations, big workflow improvements)
- Strategic capabilities (SOC 2 → already covered in trust center; major compliance milestones)
- High-frequency feature requests (showing you''re listening)
- Recently-shipped wins (last 90 days)

**Sometimes include**:
- Performance improvements (only if customer-visible)
- Internal architecture changes (only if customer-visible — e.g., "moving to multi-region")
- API additions (especially for developer-targeting products)

**Skip from roadmap**:
- Bug fixes (these go in changelog, not roadmap)
- Internal tooling
- Team / organization changes
- Investor updates / fundraising news
- Minor copy changes / tweaks

**Granularity**:

Each roadmap item should be:
- Specific enough to be meaningful
- Vague enough to allow flexibility
- Customer-outcome-oriented when possible

Bad: "Refactor billing service"
OK: "New billing system for usage-based plans"
Good: "Per-seat + usage-based hybrid pricing support"

**Volume**:

- 8-15 items "In Progress" + "Researching" combined
- 5-15 items "Recently Shipped"
- More than 30 visible items: too noisy; trim
- Fewer than 5: looks like nothing''s happening

**For each item, write**:

- A clear title (5-10 words)
- A 1-2 sentence description
- Status (which bucket)
- Optional: tags (segment, persona)
- Optional: link to RFC / docs / community thread

**Critical implementation rules**:

1. **Curate aggressively.** Roadmap reading attention is short.
2. **Customer outcomes first.** Translate engineering language.
3. **Update or remove stale items.** Don''t leave "in progress" for 12 months.

Output:
1. The roadmap content list
2. The descriptions per item
3. The trim criteria
4. The update process
```

The single biggest credibility killer: **"In Progress" items that have been listed for 6+ months.** Either ship or move to "Researching" or remove. Static roadmap items signal stuck product development.

## Add a Feedback Mechanism

A read-only roadmap is OK. An interactive one is gold.

```
Design the feedback layer.

The patterns:

**Pattern 1: Upvotes**

- Each roadmap item has an upvote count
- Customers click to upvote
- High-vote items get priority signal
- Tools: Canny, Frill, Featurebase, ProductBoard, Hyperjump

**Pattern 2: Comments**

- Customers add comments / use cases
- Founders / PMs respond
- Builds shared understanding
- Same tools as above

**Pattern 3: Suggest new items**

- Customers can suggest items not on the roadmap
- Suggestions go to a backlog you triage
- Promoted suggestions appear on roadmap

**Pattern 4: Email subscription**

- "Get notified when this ships"
- Track per-item interest
- Convert to launch-customer pipeline

**Tools**:

- **Canny** — most-popular roadmap/feedback platform; embeds in your site
- **Featurebase** — modern, indie-friendly
- **Frill** — affordable; clean
- **ProductBoard** — enterprise-leaning; expensive
- **Hellonext** — budget option
- **Custom** — Notion / Airtable + light frontend (some indies do this)

**Cost considerations**:

- Canny / ProductBoard: $50-300/mo+ depending on tier
- Featurebase / Frill: $25-50/mo
- Custom: free to build, ongoing maintenance

**For most indie SaaS in 2026**: Featurebase or Canny on indie pricing. The investment in a real tool pays back in user-research signal.

**Critical implementation rules**:

1. **Respond to comments.** Treat the roadmap as a forum.
2. **Surface popular requests** (without committing).
3. **Tag with status changes.** "Now researching" / "Now in progress" — update items as state changes.
4. **Don''t over-promise on upvotes.** "100 upvotes = built" is bad math; use as signal, not contract.

**Privacy considerations**:

- Customers can see other customers'' upvotes / comments
- Some enterprise customers are uncomfortable with this
- Option: anonymous mode; or hide commenter names from public

**Don''t**:
- Build custom feedback when a $25/mo tool does it better
- Skip responding to comments (kills engagement)
- Treat upvotes as binding commitments

Output:
1. The chosen tool
2. The feedback policy (response SLA)
3. The privacy settings
4. The integration plan (link from product, marketing, etc.)
```

The biggest engagement multiplier: **founders / PMs replying to comments**. A roadmap with 50 customer comments and 0 founder replies is a graveyard. The same roadmap with thoughtful replies builds advocacy. Treat it like a community space.

## Connect to Changelog and Newsletter

The roadmap is one of three connected artifacts. Use them together.

```
Design the artifact stack.

The pattern:

**1. Roadmap** (`/roadmap`):
- Forward-looking
- "What''s coming"
- Categorized
- Updated monthly

**2. Changelog** (`/changelog`):
- Backward-looking
- "What shipped"
- Dated entries
- Updated per release (per [changelog & roadmap](../../../VibeWeek/6-grow/changelog-roadmap-chat.md))

**3. Newsletter** (per [Founder Newsletter](founder-newsletter.md)):
- Periodic
- "What''s the broader story"
- Often references both roadmap and changelog

**Connections**:

- Each "Recently Shipped" roadmap item links to its changelog entry
- Each changelog entry has a link back to the roadmap item it satisfied
- Newsletter wraps recent changelog + roadmap updates monthly

**Cross-promotion**:

- Roadmap page footer: "Follow our newsletter for monthly updates"
- Changelog: "See what''s coming next on the roadmap"
- Newsletter: "Roadmap updated this month: [highlights]"

**The release cycle**:

When you ship something:
1. Update changelog (per `changelog-roadmap-chat`)
2. Move roadmap item from "In Progress" to "Recently Shipped"
3. Email subscribers who upvoted that item ("This shipped! Try it out.")
4. Mention in next newsletter
5. Optionally: blog post / launch tweet for major items

**For each released roadmap item**:

- Move it to "Recently Shipped" (don''t just delete — momentum signal)
- Date it
- Link to changelog entry
- Link to docs

**Don''t**:
- Treat roadmap and changelog as the same thing
- Skip the connection (roadmap orphans look stale)
- Forget to email upvoters when their item ships

Output:
1. The artifact connections diagram
2. The release process checklist
3. The cross-promotion plan
4. The notification system
```

The biggest single conversion lever: **emailing customers who upvoted X feature when X feature ships**. They came back to your product; they remember why they wanted it; they tell peers. The conversion rate from "feature requested → upvoted → shipped → used" outperforms most acquisition channels.

## Maintain on a Cadence

Stale roadmaps damage trust. Build the cadence.

```
Set up the maintenance cadence.

The cadence:

**Weekly (15 min)**:
- Skim items; any progress to update?
- Check feedback comments; respond
- Move items between buckets if needed

**Monthly (1 hour)**:
- Full roadmap review
- Move "Recently Shipped" off the page after 90 days
- Curate "Researching" — anything ready to promote? Anything to demote?
- Draft an update for the newsletter

**Quarterly (2 hours)**:
- Strategic review
- Are the categories still right?
- Should anything become "Not on roadmap"?
- Are we delivering against roadmap promises?
- Any items stuck >2 quarters?

**Annual (half day)**:
- Major roadmap reset / refresh
- Review: did "In Progress" items actually ship?
- Look at competitor roadmaps; are we positioned right?
- Big strategic shifts make it onto the page

**The accountability discipline**:

- Owner: typically founder or head of product
- Cadence on calendar (recurring)
- "Stale" items flagged automatically (>90 days in same bucket without update)

**Stale-item handling**:

If an item has been "In Progress" for >6 months:
- Check: is it actually being built? Or stalled?
- If stalled: move to "Researching" or "Not on roadmap" — be honest
- Customers who upvoted: notify with the change

**Don''t**:
- Promise updates without putting the cadence on calendar
- Let items languish in "In Progress" for years
- Skip the quarterly strategic review

Output:
1. The recurring calendar events
2. The owner per cadence
3. The stale-item flagging logic
4. The quarterly review template
```

The biggest predictor of roadmap-program success: **a recurring monthly review on the founder''s calendar.** Without the calendar event, the roadmap rots within 90 days. With it, it''s alive for years.

## Avoid the Common Failures

Every roadmap has the same failure modes. Recognize them.

```
The failure-mode checklist.

**Failure 1: The "everything but the kitchen sink" roadmap**
- 100+ items
- Nobody can scan it
- Looks unfocused
- Fix: curate aggressively; show only what matters

**Failure 2: The over-promised roadmap**
- "Q3 2026: Mobile app, AI assistant, multi-region, SOC 2, GraphQL API"
- Half slip dates; trust crumbles
- Fix: no dates; "researching" buffer; under-promise

**Failure 3: The stale roadmap**
- Last update 8 months ago
- "In Progress" items unchanged
- Customers conclude product is dying
- Fix: monthly cadence on calendar; trim ruthlessly

**Failure 4: The vague roadmap**
- "Better performance" / "Improved UX" — meaningless
- Customers can''t tell if their need is addressed
- Fix: customer-outcome-oriented specifics

**Failure 5: The marketing-only roadmap**
- Polished page; great copy; but engineering team has never seen it
- Items don''t reflect actual development
- Fix: roadmap reflects engineering reality, not marketing wishes

**Failure 6: The "stealth" roadmap**
- Public version is a marketing-curated subset
- Real roadmap exists internally
- Customers feel manipulated when they see internal-vs-public mismatch
- Fix: one roadmap; same audience for public and internal

**Failure 7: The unmaintained feedback layer**
- Customers comment; nobody responds
- Upvotes accumulate; items don''t move
- Fix: response SLA; treat as community space

**Failure 8: The competitor copy**
- Roadmap items appear that map exactly to competitor''s recent launches
- Looks reactive, not strategic
- Fix: own your strategic vision; don''t mirror competitors

**Failure 9: Broken promises ignored**
- Items that didn''t ship "as planned" get silently moved or deleted
- Customers notice
- Fix: honest update — "we tried; here''s why we''re changing direction"

**Failure 10: No "Not on roadmap" bucket**
- Same requests come repeatedly
- Sales spends cycles answering
- Fix: explicit "Not on roadmap" with reason

Output:
1. Audit your current roadmap (or planned one) for each failure
2. Fixes per failure mode
3. The team agreement on roadmap discipline
```

The single biggest meta-lesson: **a roadmap is a trust artifact, not a marketing channel.** The moment customers feel marketed to instead of informed, the asset becomes a liability. Be honest; under-promise; respond to feedback; ship what you say you''ll ship.

---

## What "Done" Looks Like

A working public roadmap in 2026 has:

- A `/roadmap` page on your marketing site
- Categorized by status (Done / In Progress / Researching / Not on Roadmap)
- 8-15 forward-looking items + 5-15 recently-shipped items
- A feedback mechanism (upvotes / comments via Canny / Featurebase / similar)
- Updated at least monthly with a calendar-recurring review
- Connected to the changelog and the newsletter
- No specific dates publicly committed
- Customer-outcome-oriented language
- Founder / PM responses to feedback within 7 days
- Quarterly strategic review baked into the team rhythm

The hidden cost of NOT having a public roadmap: **every prospect in serious evaluation asks "what''s coming?" — and your sales team types the same answer 50 times per quarter.** The roadmap saves the cycles, demonstrates strategic clarity, and converts feature-request friction into engaged-customer feedback. Done well, it''s the highest-leverage marketing artifact for B2B SaaS in deep evaluation cycles.

## See Also

- [Changelog & Roadmap (engineering side)](../../../VibeWeek/6-grow/changelog-roadmap-chat.md) — the implementation side
- [Founder Newsletter](founder-newsletter.md) — channel for roadmap updates
- [Customer Feedback Surveys](../../../VibeWeek/6-grow/customer-feedback-surveys-chat.md) — companion feedback mechanism
- [Building in Public](../3-distribute/building-in-public.md) — broader transparency strategy
- [Trust Center & Security Page](../4-convert/trust-center-security-page.md) — similar transparency artifact
- [Comparison Pages](../4-convert/comparison-pages.md) — "we''re shipping X soon" defends competitive losses
- [Customer References](../4-convert/customer-references.md) — roadmap customers often become references
- [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) — sales-led benefits more from public roadmap
- [Win/Loss Analysis](../4-convert/win-loss-analysis.md) — "missing feature" loss reasons inform roadmap
- [Pitch Deck](../1-position/pitch-deck.md) — pitch deck includes roadmap slide
- [Lead Magnets](lead-magnets.md) — "subscribe for roadmap updates" is a magnet
- [Activation Funnel](../../../VibeWeek/6-grow/activation-funnel-chat.md) — feature releases drive activation

[Back to Day 2: Content](README.md)
