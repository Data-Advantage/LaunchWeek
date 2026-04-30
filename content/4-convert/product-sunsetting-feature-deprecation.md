# Product Sunsetting & Feature Deprecation: How to Kill Things Without Killing Trust

[⬅️ Back to Day 4: Convert](./)

Every product accumulates features, integrations, plans, and sometimes whole product lines that no longer earn their keep. Some serve <2% of users but consume 20% of engineering time. Some are blocking modernization. Some were strategic experiments that failed. Some were built for a partner who no longer exists. The hard truth: if you never sunset anything, your product becomes unmaintainable, your engineering velocity collapses under technical debt, your support team spends time triaging legacy edge cases instead of solving real problems, and your roadmap is hostage to historical decisions. The harder truth: if you sunset clumsily — surprise removals, no migration path, broken integrations, hostile communications — you destroy customer trust faster than any incident, and the customers most affected are usually your most engaged power users (they used the feature you killed).

The companies that handle this well treat sunsetting as a real product launch in reverse: data-driven decision criteria, a long enough timeline that customers can adapt without panic, transparent communications that respect the customer's reality (their workflow depends on this), a documented migration path with tooling, and a process that scales — because over five years you will sunset dozens of things. This is distinct from [layoffs / restructuring](../5-launch/layoffs-restructuring-playbook.md) (people, not features), [acquisition / exit strategy](../5-launch/acquisition-exit-strategy.md) (company-level), and [product launch tiers](../5-launch/product-launch-tiers.md) (the inverse motion). It belongs alongside ongoing lifecycle work: [reduce churn](./reduce-churn.md), [renewal negotiation](./renewal-negotiation-playbook.md), [pricing migration / repackaging](../1-position/pricing-migration-repackaging.md).

## What Done Looks Like

- Documented sunsetting criteria: when does a feature/integration/plan become a candidate for deprecation
- Quarterly product portfolio review: explicit list of "kill / keep / improve" decisions made by product leadership
- Tiered deprecation taxonomy: what gets the full enterprise-grade sunset process vs. what gets a faster path
- Standard timeline: minimum notice periods by tier (e.g., 30 days for free-tier features, 12+ months for enterprise contracts)
- Standard communications package: in-app banners, email sequences, blog posts, docs updates, support training — all templated
- Migration paths defined: every sunset has a documented "where do users go instead" answer
- Migration tooling: where feasible, automated migration tools or service-team-led migration for affected accounts
- Affected-customer outreach: named owner per major-account, especially for enterprise customers on contracts
- Legal review: contracted features can't be removed without contractual basis or amendment
- Data preservation policy: deleted feature, retained data — for how long, how exportable
- Post-sunset retrospective: what worked, what didn't, what we'd do differently
- Maintenance freeze: deprecated features are not enhanced (engineering discipline)
- Telemetry that proves the deprecation is working (usage going down, support tickets going down)

## 1. The Decision Criteria — When to Sunset

Before any feature is sunset, the decision must be defensible. Build the criteria once; apply them quarterly.

### Quantitative thresholds
- **Active usage**: <2-5% of monthly active users; or <1% of paying customers using it in the last 90 days
- **Revenue attribution**: feature is gated to a plan that produces <X% of ARR; or 0 customers cite it as their reason to buy / stay
- **Support cost**: feature produces >Y support tickets per active user per month (above the product baseline)
- **Engineering cost**: feature requires >Z engineer-weeks per quarter to maintain (high relative to product baseline)
- **Security / compliance debt**: feature requires legacy auth, deprecated SDKs, untested code paths, or fails current security review
- **Strategic alignment**: feature is in a product area you've decided to exit (vertical you're abandoning, segment you're not serving anymore)

### Qualitative signals
- Customer Advisory Board hasn't asked about it in 18 months
- Sales team never demos it
- Marketing pages don't reference it
- Engineering team avoids changes near its codepath ("don't touch X — too fragile")
- The feature is fundamentally incompatible with where the product is going (e.g., requires a deprecated architecture that contradicts your current direction)

### When to NOT sunset
- A feature you wish more users used but you haven't actually marketed
- A feature that's a "deal saver" for ICP customers even if total usage is low
- A feature whose maintenance cost is negligible (would-cost-more-to-remove-than-keep)
- A feature that meaningfully blocks competitive losses (turn-off button on a contractual differentiator)
- An integration with a partner where the partnership is strategic even if direct usage is low

### The portfolio review
Quarterly, product leadership pulls a list of every feature, integration, plan, and SKU that meets one or more thresholds. Each gets a explicit "keep / improve / kill / monitor next quarter" decision with the rationale documented. The list is shared with leadership so kill decisions don't surprise sales or CS.

## 2. Tiered Deprecation Taxonomy

Not every sunset needs the same process. Match effort to impact.

### Tier 1: Internal-only feature retirement
- Internal admin tools, debugging panels, employee-only views
- Process: communicate internally, ship the removal, decommission in next sprint
- Timeline: 1-2 weeks
- No customer comms; minimal documentation

### Tier 2: Free-tier or freemium feature deprecation
- Feature available to free users; no paying customers materially affected
- Process: 30-60 days notice via in-app banner + email; docs update; remove
- Timeline: 30-60 days
- Customer comms: yes, but lighter-touch

### Tier 3: Paid-feature deprecation (no contracted SLA)
- Standard paid plans; feature not explicitly named in contracts
- Process: 90-180 days notice; in-app + email + blog post + docs update; documented migration path; support team enabled
- Timeline: 3-6 months
- Customer comms: full package; named-account outreach for top-X customers using it

### Tier 4: Contracted feature deprecation (enterprise customers)
- Feature is in customer contracts (MSA, order form, addendum)
- Process: legal review; contract amendments; account-by-account migration plan; named CSM owns relationship; CEO / CRO involvement for largest customers
- Timeline: 12-18 months minimum (longer if contracts run that long)
- Customer comms: high-touch; one-on-one with affected customers; possible commercial concessions (credit, discount on migration plan)

### Tier 5: Whole product sunsetting
- An entire SKU, product line, or major capability area
- Process: like Tier 4 plus PR strategy, internal change management, rep retraining, partner notifications
- Timeline: 18-24 months
- Often paired with: a successor product, M&A move, strategic pivot

The error is treating Tier 2 like Tier 1 (surprise removal of a feature 5,000 free users use produces a Twitter cycle) or Tier 4 like Tier 3 (sunsetting a feature in enterprise contracts without legal review produces lawsuits).

## 3. The Standard Timeline (Tier 3 / Tier 4)

The reference cadence for a paid-feature or contracted deprecation. Adjust to your tier.

### T-180 days (or T-365 for contracted)
- Internal alignment: PM, engineering, CS, sales, legal, marketing aligned on the decision and the migration story
- Migration path documented
- Migration tooling scoped (or a "we'll do it for you" service motion if applicable)
- Affected-customer list pulled from product analytics + CRM
- Top-account list identified for personal outreach

### T-120 days
- Public announcement: blog post, in-product banner, email to affected users
- Docs updated: deprecation notice on every page that documents the feature
- API: deprecation headers added (`Sunset` HTTP header, `Deprecation` header)
- Support team trained on the deprecation, the migration path, and the timeline

### T-90 days
- Reminder email to affected users
- In-app banner intensifies (closeable but persistent)
- Sales team scripts updated: never sell into a deprecated feature
- New signups: feature hidden or visibly marked "deprecating soon"

### T-60 days
- Final reminder email
- "Would you like help migrating?" outreach to affected customers
- For Tier 4 / contracted: every affected customer has a named CSM or AM who has spoken to them about the migration

### T-30 days
- Last-chance email
- Migration tooling battle-tested (not the day before sunset)
- Customer success ready for the support spike

### T-0 (sunset day)
- Feature is removed (or feature flag flipped off)
- Public confirmation: "feature X has been removed; here's what to do instead"
- Old API endpoints return clear 410 GONE or redirect to successor with a header explaining
- Data retention: deprecated feature's data retained per policy for export window (typically 90+ days)

### T+30 days
- Retrospective: what worked, what didn't, customer escalations
- Telemetry check: is usage actually 0? Are support tickets falling?
- Any customers still affected get a manual unblock plan

### T+90 days (or beyond)
- Code cleanup: remove the dead code paths, drop the unused tables/columns, remove the feature flags
- Operational debt elimination: this is the payoff for the whole exercise

## 4. The Communications Package

Sunsets fail when communications fail. Build the package once; reuse the templates.

### Asset 1: Internal FAQ / change brief
- Audience: support, sales, CS, marketing, exec
- Content: what's being sunset, why, when, the migration path, the customer-impact list, the talking points, the things NOT to say
- Distribution: internal Slack/Notion + a 30-min all-hands briefing with Q&A
- Updated: as questions surface

### Asset 2: Public blog post / changelog entry
- Audience: customers + prospects + press
- Content: what (clearly), why (honestly), when (specifically), what to do instead (with links to docs / migration tool / support contact)
- Tone: respectful of the customer's reality; no marketing spin; direct
- Examples to model after: GitHub deprecation announcements, Stripe API deprecations, Atlassian feature retirements

### Asset 3: Email sequence to affected users
- Email 1 (T-180/T-120): "We're sunsetting X. Here's what's happening, why, when, and how to migrate."
- Email 2 (T-90): "Reminder: X sunsets in 90 days. Have you started migrating? Here's the help available."
- Email 3 (T-30): "Final reminder: X sunsets in 30 days. If you need help, reply directly."
- Email 4 (T+0): "X has been removed. Here's the successor."
- Each email links to: blog post, docs, migration guide, support / human contact

### Asset 4: In-app banner / modal
- Persistent banner near the deprecated feature
- Click-through to the migration guide
- Closeable for usability, but reappears on each session in T-30 window

### Asset 5: Documentation
- "Deprecated" badge on every relevant doc page
- Banner at top: "This feature is sunsetting on [date]. See [migration guide] for the replacement."
- Migration guide as a first-class doc, treated like a launch doc

### Asset 6: API deprecation signals
- `Sunset` HTTP header on responses (RFC 8594)
- `Deprecation` header (RFC draft) with a link to the deprecation notice
- API changelogs for SDK consumers
- Deprecation warnings logged in dashboards / CLI

### Asset 7: Support macros / canned responses
- "I see you're asking about X — that feature is sunsetting on [date]. Here's the migration path: [...]"
- Linked to support tooling (Zendesk macro / Intercom canned response)
- Prepared for both "I just learned about this" and "I'm angry about this" scenarios

### Asset 8: Top-account outreach scripts
- For Tier 4: named CSM/AM has a 1:1 call with each affected enterprise account
- Script: "We're sunsetting X. We know your team uses it for [...]. Here's what we're doing to support your migration. The timeline is [...]. Let's plan the migration together."
- Documented in account notes; tracked as an operational metric

## 5. Migration Paths

Every sunset must answer: where do users go instead?

### Pattern 1: Direct successor
- "Feature X is replaced by Feature Y. Here's how to map your existing X usage to Y."
- Migration tooling: a one-click migration in-product, or a CLI/API for advanced users
- Documentation: "Migrating from X to Y" guide with screenshots, code samples, FAQ

### Pattern 2: Feature merged into a different feature
- "Feature X is now part of Feature Z. Your existing X data will appear in Z."
- Best for: users who don't notice (the merge is automatic + non-breaking)
- Risk: some users were using X precisely because it was separate; surface the change explicitly

### Pattern 3: Third-party recommendation
- "Feature X is being sunset; we recommend [partner / open-source / build-your-own] as a replacement."
- Honest acknowledgment that the use case is real but no longer fits your roadmap
- Sometimes paired with a partnership: a designated successor product, possibly with migration scripts

### Pattern 4: No replacement
- "Feature X is being sunset. There is no direct replacement. Here are workarounds: [...]"
- Hardest message; reserve for cases where the use case has fundamentally changed
- Be direct; don't hide the bad news in vague "expanded capabilities" language
- Offer commercial concessions where appropriate (credit, refund of the relevant plan upgrade)

### Pattern 5: Migration as a service
- For Tier 4 / strategic accounts: your services team migrates the customer
- Hours: budget 5-40 hours per affected enterprise customer (depending on complexity)
- Often the right move for top 10-20 accounts even if it's economically painful — the relationship matters more than the migration cost

## 6. Data Retention and Export

Deprecating the feature is not the same as deleting the data. Define the policy.

### Standard policy
- Feature is removed from UI / API on sunset date
- Underlying data is retained for an additional 90-180 days (or per contract for Tier 4)
- During retention window: data exportable via UI ("download my X data") or API ("/legacy-x/export")
- After retention: data hard-deleted; communicate the deletion date clearly

### Why this matters
- Legal / compliance: customers may have regulatory obligations on data retention you can't pre-empt
- Trust: customers fear that "feature gone = data gone"; retention + export reduces panic
- Recovery: occasionally a sunset is reversed (rare, but happens); retained data enables this

### Communicating retention
- The blog post / email / docs MUST clearly state: how long data is retained, how to export, when it's deleted
- Mass-export tooling: don't make every customer email support; provide self-serve export

## 7. Engineering Discipline During Deprecation

The "deprecating" period is also when the most engineering damage happens.

### Maintenance freeze
- Once a feature is officially deprecated, NO new features are added to it
- Critical bug fixes only; security fixes only
- Team rotates off; the feature is on critical-care
- Document this freeze visibly; otherwise customers (and your own team) keep filing/working on enhancement requests

### Code quarantine
- Mark the deprecated code paths clearly in the codebase
- New tests do NOT extend the feature
- Refactors elsewhere do not bend to accommodate the dying feature
- Deprecation comments include the sunset date so future engineers know it's truly going away

### Telemetry
- Maintain or improve monitoring of the deprecated feature through sunset
- Alerts fire on: usage spike (someone migrated TO the feature instead of away — likely confused), error rate increase (regression in maintenance mode), support ticket increase
- Usage trend is THE metric proving the deprecation is on track

### Post-sunset cleanup
- Code removal: 30-90 days after sunset, remove the dead code
- Database cleanup: drop unused columns/tables after the data retention window
- Feature-flag cleanup: remove the flag once usage is provably zero
- Doc cleanup: archive the docs to a "/archived/" path; don't 404 (links exist on the internet); link archive entries to the migration guide

## 8. Legal and Contractual Considerations

For Tier 4 sunsets especially, legal must be involved early.

### Contract review
- Pull every contract / order form mentioning the feature
- Identify which contracts have explicit feature commitments (uptime, availability, capability)
- Identify which have "we may modify the service" general clauses
- Get legal sign-off on the deprecation plan per contract type

### Customer notice obligations
- Some contracts require N days/months of notice before material service changes
- Some require written notice via specific channels
- Some require offering credit / refund / contract termination right when the service materially changes
- Build the per-contract notice schedule

### Modifications and amendments
- For high-value customers on contracts that don't permit unilateral deprecation: negotiate amendments
- Often the right outcome: the customer accepts an amendment in exchange for the migration support, a discount on the new plan, or both
- Document the amendments; they're part of the audit trail for the next renewal

### Refund and credit policy
- For paid-feature deprecation with no successor: pro-rate refund or credit for affected customers
- For contracted-feature: per-contract negotiation
- Document the policy publicly; arbitrary case-by-case decisions create perceived unfairness

### Public messaging compliance
- Press releases / blog posts about sunsets may be regulated (especially for public companies; SEC disclosure rules)
- Coordinate with legal + IR (if applicable) on messaging
- Avoid forward-looking statements that imply a roadmap commitment to a replacement that isn't certain

## 9. Stakeholders Beyond Customers

Sunsets affect more than the people using the feature.

### Sales team
- Sales reps need to know: don't pitch the deprecated feature; use the successor; here's the talking point if a prospect asks why we're sunsetting
- Update battle cards, demo scripts, sales decks
- For Tier 4: sales-side handoffs may need to coordinate with CS for affected accounts in renewal cycle

### Customer success
- CS owns the affected-account migration relationship
- Train CS on the migration path AND the talking points (especially "we know this is hard; here's what we're doing")
- Update CS playbooks; update CRM with deprecation flags on accounts using the feature

### Marketing
- Update marketing site, landing pages, comparison pages, SEO content that references the feature
- Comparison pages: don't strip the feature without acknowledgment; mention the sunset and the successor
- Customer case studies featuring the deprecated feature: update or archive

### Partners and integrations
- Integration partners using the deprecated feature need named outreach
- Public docs / partner portals updated
- Possible co-marketing on the migration path with a key partner

### Press
- For Tier 5 / whole-product sunsets: a press strategy
- Better to control the narrative than have it leak via support tickets
- Briefing key publications in advance is standard practice

### Investors and board
- Material sunsets (revenue-affecting, strategy-shifting) get briefed at board level in advance
- Be prepared to answer: how much revenue is affected, customer churn risk, how this advances strategy, timeline to recover any lost revenue

## 10. Post-Sunset Retrospective

The sunset is not done when the feature is gone. Run the retro.

### Topics to review
- Did the timeline work? Were there moments customers needed more time?
- Did the migration tooling actually serve the migration? What % of affected users migrated successfully?
- Support ticket volume during the deprecation: spike or steady? What were the top concerns?
- Customer churn linked to the sunset: how many customers cited the deprecation as a reason to leave?
- Internal cost: how many engineering hours, CS hours, legal hours did this consume?
- What surprised us? What did we miss?
- What template improvements should we make for the next sunset?

### Documenting institutional memory
- The retrospective output becomes part of the playbook for the next sunset
- Over time, your team gets dramatically better at this; the first sunset is hard, the tenth is routine

## 11. The Hard Cases

Some sunsets are uniquely difficult. Have a plan for the harder shapes.

### Sunsetting a feature that's the reason a major customer bought
- Top-down stakeholder management; the founder/CEO may need to engage personally
- Alternative offer: build a successor in collaboration with the customer; or grant an exception (the feature stays for them)
- Accept that the customer may churn; have a recovery story for the rest of the cohort

### Sunsetting an integration with a major partner
- Partner relationship is at stake even if individual customer impact is low
- Coordinate the announcement with the partner; share talking points
- Often the right move is a gentle ramp-down with the partner involved in customer communications

### Sunsetting a feature you'd like to bring back later
- The risk: customers don't trust "we'll bring it back"
- Be honest: if you might bring it back, say "we may revisit this later but cannot commit"; if you won't, say so
- The hardest case is shipping a successor that competes with the deprecated feature: handle as a re-launch, not a sunset

### Sunsetting after an acquisition
- Acquired company's customers feel doubly burned ("you bought us and now you're killing the product we use")
- Communications budget here is 2-3x; named-account outreach is non-negotiable
- Migration path: usually to your own product; budget heavy services hours

### Sunsetting under regulatory pressure (e.g., a feature requires a deprecated standard)
- Communicate the regulatory driver clearly; "we are required to remove this by X" lands differently than "we chose to remove this"
- Timeline may not be flexible; communicate why

## 12. Anti-Patterns and Failure Modes

- **Surprise sunset.** Announce on Friday, sunset Monday. Twitter cycle, churn, lasting trust damage.
- **Vague "we're evolving the product" language.** Customers see through it. Be direct.
- **Sunset with no migration path.** Customers stuck; angriest cohort possible.
- **Forgetting Tier 4 contractual commitments.** Lawsuits. Renegotiation losses. Strategic relationship damage.
- **Maintenance creep during deprecation.** Engineers keep enhancing the dying feature; sunset slips; deprecation becomes permanent.
- **No telemetry.** You don't know if the sunset is working until the day it ends.
- **Deleting data immediately on sunset.** Customers panic. Always offer a retention + export window.
- **Inconsistent communications across channels.** The blog says one thing; in-app banner says another; sales pitches the deprecated feature. Customer trust evaporates.
- **Skipping the retro.** Same mistakes the next time. Each sunset should improve the playbook.
- **Mass deprecation announcement bundle.** Stuffing 5 sunsets into one announcement looks like quiet quitting on customers; spread strategically.
- **No commercial accommodation for affected paying customers.** Strict refund policies make sense; refusing any accommodation loses customers permanently.
- **Founder / CEO not involved on Tier 4/5.** Top accounts expect a senior voice; the CSM alone is not enough.
- **Treating sunsets as one-offs.** Build the playbook; over five years you'll do dozens.

## What Done Looks Like (Recap)

- Documented criteria + quarterly portfolio review
- 5-tier deprecation taxonomy with effort matched to impact
- Standard timeline (180 days for paid; 12-18 months for contracted)
- Templated communications package: internal brief, blog post, email sequence, in-app banner, docs, API headers, support macros, top-account scripts
- Documented migration paths for every sunset
- Migration tooling or services-led migration where appropriate
- Data retention and export policy explicit and communicated
- Engineering maintenance freeze enforced during deprecation
- Legal review on every Tier 4/5 sunset
- Stakeholder coordination: sales, CS, marketing, partners, press, board
- Post-sunset retrospective + playbook iteration
- Telemetry proving the deprecation worked: usage to zero, support tickets falling, code removed, debt eliminated

## Mistakes to Avoid

- **No criteria; arbitrary kill decisions.** Looks political. Erodes internal alignment.
- **Surprise removal.** Trust damage outlasts any engineering benefit.
- **Vague language.** Customers detect dishonesty; respect them with directness.
- **No migration path.** "We're killing it; figure it out" loses the customer permanently.
- **Sunsetting Tier 4 like Tier 3.** Contractual commitments require legal review and longer timelines.
- **No data export window.** Panic, support spike, churn.
- **Maintenance creep during deprecation.** Discipline collapses; deprecation never finishes.
- **Skipping the retro.** Repeating the same mistakes is unforgivable when the playbook is right there.
- **Bundling unrelated sunsets in one announcement.** Confused customers; harder to communicate per-feature migration paths.
- **No commercial accommodation.** Especially for cases where you're removing a feature the customer paid extra for.
- **Founder / CEO absent on the largest accounts.** Top accounts notice.
- **Treating each sunset as the first sunset.** Build the playbook; institutionalize the discipline.

## See Also

- [Reduce Churn](./reduce-churn.md) — sunsetting affects retention; manage that risk explicitly
- [Renewal Negotiation Playbook](./renewal-negotiation-playbook.md) — affected enterprise renewals likely involve sunset discussions
- [Customer Health Scoring Playbook](./customer-health-scoring-playbook.md) — affected customers often degrade in health
- [Customer Onboarding Playbook](./customer-onboarding-playbook.md) — onboarding adapts to remove deprecated features
- [Customer Marketing Program](./customer-marketing-program.md) — customer communication infrastructure
- [Voice of Customer Program](./voice-of-customer-program.md) — surface usage signals before sunsetting decisions
- [Pricing Migration / Repackaging](../1-position/pricing-migration-repackaging.md) — adjacent motion: changing what's in plans rather than removing features
- [Annual Contract Negotiation](./annual-contract-negotiation.md) — affected contracts may need amendments
- 5-launch: [Crisis Communication Playbook](../5-launch/crisis-communication-playbook.md) — a botched sunset can become a crisis
- 5-launch: [Acquisition / Exit Strategy](../5-launch/acquisition-exit-strategy.md) — full company-level off-ramp
- 5-launch: [Layoffs / Restructuring Playbook](../5-launch/layoffs-restructuring-playbook.md) — distinct motion (people not features), similar discipline
- 5-launch: [Year in Review / Annual Letter](../5-launch/year-in-review-annual-letter.md) — surface the year's sunset story honestly
