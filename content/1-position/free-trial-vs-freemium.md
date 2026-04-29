[Back to Day 1: Position](README.md)

# Free Trial vs Freemium vs Reverse Trial: Picking Your Free Strategy

Almost every SaaS founder has the same conversation on the same week: should we offer a free trial or a free tier? Half the team has read a blog post saying "freemium is dead." The other half has read one saying "freemium is the only way to do PLG." Both are right and wrong; the answer depends on the product, the buyer, and the unit economics — not on what worked for whoever wrote the latest hot take.

This guide is the playbook for picking the right free-strategy shape for your SaaS, building it so it actually converts, and switching when the data says you should. Get this decision right and the rest of your funnel works in your favor; get it wrong and you spend years optimizing a leak instead of fixing the model.

## What Done Looks Like

By end of the exercise:

- A documented free-strategy choice (free trial / freemium / reverse trial / paid-only / hybrid) with the reasoning written down
- A trial-to-paid OR free-to-paid conversion benchmark for your motion
- A concrete plan for the free tier's friction points (where users hit limits and feel the upgrade pull)
- The signup → activation → conversion funnel instrumented in your analytics
- A 90-day window after launch to see real numbers before considering switching

This pairs with [Pricing Strategy](pricing-strategy.md) (this is where the free strategy gets baked into pricing), [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) (motion drives free-strategy choice), [Pricing Page](../4-convert/pricing-page.md) (the surface where free vs paid is communicated), [Free to Paid](../4-convert/free-to-paid.md) (the conversion mechanics downstream), [Onboarding Flow](../4-convert/onboarding-flow.md) (the path to value for free users), and [Trial-to-Paid](../../../VibeWeek/6-grow/trial-to-paid-chat.md) (engineering side).

## The Five Strategies, Honestly Defined

Founders use these terms loosely. Be precise.

### 1. Free Trial (time-limited full access)
Every user gets full Pro/Premium access for 14, 21, or 30 days. After the trial, they convert to paid or lose access. Common in mid-market B2B SaaS. ACV typically $50/mo–$2K/mo.

Examples: Linear (when it had a trial), Notion Teams trial, most Atlassian products, Calendly Teams.

Pros: clear ending; pressure to convert; lower CAC drag (you don't carry free users forever).
Cons: pressure can backfire; users who didn't activate during the trial bounce.

### 2. Freemium (free tier with permanent free access)
Some functionality is free forever; paid tiers unlock more. Common in PLG / dev-tool SaaS. ACV typically $5/mo–$200/mo for SMB; up to enterprise.

Examples: Slack (current), Notion (current), Linear, Figma, GitHub, Vercel, PostHog, Plausible.

Pros: low-friction adoption; viral growth; word-of-mouth; long-term funnel.
Cons: support cost for free users; hard to design the right limit; free users can poach value indefinitely.

### 3. Reverse Trial (start premium, fall back to free)
User signs up; gets full Pro features for 14-30 days; if they don't convert, they fall back to a (limited) free tier. Hybrid of trial + freemium. Increasingly popular in 2024–2026.

Examples: Vercel (Pro trial then Hobby), Notion (parts of), Linear (parts of), Loom.

Pros: tries to get the upgrade pressure of a trial AND the long-term funnel of freemium.
Cons: more complex to communicate; harder to instrument; harder to predict revenue.

### 4. Free Tier with No Trial (no Pro experience without paying)
Permanent free tier; paid tiers cost money and you don't get to try them first. User decides to pay based on what they hit on the free tier.

Examples: many indie tools, smaller dev tools without sales motion.

Pros: simple; no trial-end ceremony; cheap to operate.
Cons: harder to convert because users never see the Pro experience first-hand.

### 5. Paid-only (no free anything)
Every user pays from day one. Common in enterprise / sales-led SaaS, plus some indie ($X/mo small-money SaaS that explicitly avoids the freemium trap).

Examples: Most enterprise tools, many small indie SaaS, premium consumer apps.

Pros: every signup is qualified; no support tax for free users; clean unit economics.
Cons: high CAC; hard to grow without paid acquisition; word-of-mouth is harder.

```
Help me categorize my current strategy honestly.

Quick test:
1. Can a user sign up and use my product without paying? (Yes = freemium / trial / reverse trial)
2. Does that free access end on a date? (Yes = trial; No = freemium)
3. Does the free access include Pro features for a window? (Yes = reverse trial)
4. If I have a paid-only model: do I have a money-back guarantee or a demo gate? (These are quasi-trials)

Score:
- "No free access of any kind" → paid-only
- "Time-limited Pro access" → free trial
- "Permanent limited access" → freemium
- "Pro access then falls to free tier" → reverse trial
- "Permanent free with no Pro preview" → free tier without trial

Output:
1. The strategy I'm running today
2. The strategy my pitch / homepage CLAIMS
3. The gap between the two
```

The biggest unforced error: **claiming one strategy while running another.** A "freemium" product where 90% of users hit the wall in week 2 is really a trial. A "free trial" product where most never convert and stay on a degraded free tier is really freemium.

## Decision Framework: Three Forces

The right strategy depends on three forces. Score each for your product.

```
Help me apply the three-force framework.

**Force 1: Time-to-value**

How long does it take a new user to get meaningful value from your product?

- < 5 minutes: freemium works (low activation cost; free users keep adopting)
- 5-30 minutes: trial works (need a window to see value; trial pressure helps)
- 30+ minutes / requires data setup: trial OR sales-led; freemium hurts (most never activate)

If your time-to-value is high, freemium creates a graveyard of inactive accounts that will never pay.

**Force 2: Marginal cost of a free user**

What does it cost you to support one more free user?

- ~$0 (no compute / no support tax): freemium works
- Small ($0.10–$5/user/mo, e.g., light compute, occasional support): freemium with limits
- Significant ($10+/user/mo, e.g., heavy compute, AI inference, video processing): trial or paid-only — freemium burns money

LLM-heavy AI products often kill themselves on freemium because the inference cost per free user exceeds expected LTV.

**Force 3: Network effects / virality**

Does the product get more valuable as more people use it?

- Yes (collaboration, communication, marketplace effects): freemium pays back via virality
- No (pure single-user productivity tool): freemium is a leak with no compensating gain

Slack and Notion get viral lift from freemium. A tax calculator doesn't.

**The 2x2x2 grid**:

| Time-to-value | Marginal cost | Network effects | Recommended |
|---|---|---|---|
| Low | Low | Yes | Freemium |
| Low | Low | No | Freemium or reverse trial |
| Low | High | Yes | Reverse trial |
| Low | High | No | Free trial |
| High | Low | Yes | Free trial or reverse trial |
| High | Low | No | Free trial or paid-only |
| High | High | Yes | Free trial |
| High | High | No | Paid-only or sales-led demo |

Map my product to a row.

Output:
1. The row I land in
2. The strategy that fits
3. The gaps in my current setup if I''m running a different one
4. The 30-day plan to align
```

The biggest predictor of GTM success: **picking the strategy that matches your unit economics, not what's "in fashion."** AI-heavy products that copy Slack's freemium often discover their CAC math doesn't work; the inference cost on free users is too high. Match strategy to product, not to memes.

## How to Design a Freemium Tier That Converts

If you're running freemium, the limit design is everything. Most founders get this wrong.

```
Help me design the freemium tier limits.

The pattern:

The free tier should be **valuable enough that the user activates** AND **limited enough that growth makes them feel the wall**.

**Design rules**:

**1. The free tier must deliver core value standalone.**
- A user on the free tier should be able to say "this product does the thing I came for"
- If the user can't do their job on free, they bounce — they don't convert
- The free tier is the trial in disguise

**2. The wall should align with growth, not capability.**
- Bad: "Pro lets you use the AI summarizer; Free doesn't" (capability gate; user has no reason to start)
- Good: "Free has 100 AI summaries / month; Pro has unlimited" (volume gate; user feels the wall as they grow)

**3. Pick limits that bite at "habit-forming" usage.**
- 100 events / month sounds generous until the user logs 5/day for 3 weeks and hits the wall
- The wall arrives just as the user is realizing the product is part of their workflow
- That's the highest-converting moment

**4. Limit by usage, not by feature set, when possible.**
- Volume limits convert better than feature lockouts
- Feature lockouts feel arbitrary; volume limits feel earned

**5. Limit ONE primary axis, not five.**
- Pick the axis that aligns with your unit economics: per-seat, per-event, per-storage, per-integration
- Multiple-axis limits confuse the buyer ("I'm at 80% on storage but 10% on events?")

**6. Make the wall visible in advance.**
- Show "75% used" / "9 of 10" early; not "limit reached" only at 100%
- Customer sees the wall coming; can plan the upgrade

**Common freemium-tier-design patterns by category**:

- **Per-seat / per-team-size**: Free up to 3 users; Pro 4+. Notion, Linear, GitHub.
- **Per-event-volume**: Free up to 10K events/mo; Pro for more. PostHog, Plausible.
- **Per-storage**: Free 5GB; Pro 100GB. Dropbox.
- **Per-integration**: Free 1 integration; Pro unlimited. Many SMB SaaS.
- **Per-feature-tier**: Core features free; advanced free-only-during-trial. Less common; harder to design.

**Anti-patterns**:

- "Free tier is unusable on purpose" — users see through this and bounce
- "Free tier requires no commitment" — too generous; nobody upgrades
- "Free tier capabilities change every quarter" — kills trust; customers churn

**Output**:
1. The free-tier specification (one axis, one limit)
2. The visibility design (where the user sees the wall approaching)
3. The upgrade prompt (per [Free to Paid](../4-convert/free-to-paid.md))
4. Conversion benchmarks: target 2-5% free-to-paid for typical SaaS
```

The single biggest free-to-paid optimization: **choosing the right limit axis and the right number.** A team that picks "10 GB free storage" when their users average 8 GB after 3 months of use sees explosive conversion at the 10 GB wall. The same team picking "100 GB" sees almost no conversion because users never hit it.

## How to Design a Free Trial That Converts

If you're running a free trial, length and activation pressure are everything.

```
Design the free-trial mechanics.

**Trial length**:

- 7 days: too short for most products; users haven''t finished onboarding
- 14 days: common default; works for fast-time-to-value products
- 21 days: sweet spot for products with mid-time-to-value (most B2B SaaS)
- 30 days: too long for most; trial fatigue sets in; conversion windows pass
- 60 days: only for enterprise products with multi-stakeholder evaluations

**Default for indie B2B SaaS in 2026: 14 or 21 days.** Pick shorter (14) if your product is genuinely activated in a session; longer (21) if it requires a workflow change.

**Credit card required vs not**:

- Required: higher conversion rate per signup (people pre-committed); lower signup volume
- Not required: higher signup volume; lower conversion per signup
- Math: required usually wins on revenue per visitor; harder on viral growth

**Default for SMB / mid-market: don''t require card.** Default for enterprise: don''t require either; the enterprise sale handles billing.

**Trial extension**:

- Allow customers to request an extension (typically once, +7 days)
- Track who extends — high signal of intent
- Auto-extend for users who didn''t activate by day 7 (give them another shot)

**Trial-end transitions**:

- Hard cut-off (lose access): clearest conversion pressure; some users feel betrayed
- Soft cut-off (read-only / data export only): more humane; preserves goodwill
- Convert to free tier: hybrid — moves to reverse trial pattern

**Activation milestones during the trial**:

- Define 3-5 milestones a converting user hits ("created first project", "invited a teammate", "exported a report")
- Track which trials hit which milestones
- Trials that hit no milestones in week 1 are unrecoverable; consider auto-cancelling those instead of reaching out

**Behavioral trigger emails (not time-based)**:

- "Welcome — let''s get you to your first [milestone]" (sent on signup)
- "[Milestone hit] — here''s how Pro unlocks more"
- "You''re 7 days in and have created [N] [things] — most teams that convert had created [N+x]"
- "Your trial ends in 3 days — here''s what changes"

Don''t spam ("Day 5 of 14! Day 6 of 14!"); send messages that match user behavior.

**Common conversion benchmarks**:

- B2B SaaS, no card required: 5-15% trial-to-paid
- B2B SaaS, card required: 30-60% trial-to-paid (but lower signup volume)
- Consumer SaaS: lower (1-5%)

**Output**:
1. The trial length decision with reasoning
2. The card-required decision
3. The milestone definitions
4. The behavioral-trigger email plan
5. The trial-end transition policy
```

The biggest trial-conversion lever: **the "first wow moment" within the first session.** Users who don''t experience the value in their first session usually never come back. Engineering the onboarding so that wow happens in 2-5 minutes is worth more than any pricing optimization.

## How to Design a Reverse Trial

The hybrid pattern. Hardest to execute well; can outperform both classics.

```
Design the reverse-trial mechanics.

**The structure**:

1. User signs up; gets immediate access to Pro features (no card required)
2. Day X (typically 14): show "your Pro trial is ending"
3. Day X+1: user falls back to a (designed) free tier — NOT zero functionality
4. The free tier is permanent; user can stay forever or upgrade anytime

**Why this works**:

- Users see the Pro experience (so they know what they''re missing)
- Users keep useful access after trial (so they don''t bounce in frustration)
- The free tier is a holding pattern; users hit walls organically as they grow
- Combines trial pressure with freemium funnel

**Why it''s hard**:

- Two distinct experiences (Pro and Free) that have to feel coherent
- Trial-end UX must be careful: "you''re losing things" vs "you''re still welcome here"
- Engineering complexity: features must gracefully degrade
- Communication: customer needs to understand the model

**Design choices**:

**1. What Pro features are visible after fallback?**
- Pattern A: "Pro features locked; data preserved; upgrade to re-access" (clear, hostile)
- Pattern B: "Pro features available read-only; new actions blocked" (gentle, less converting)
- Pattern C: "Pro features removed; new free-tier limits apply" (clean, requires re-onboarding)

Most successful reverse trials use Pattern A or B.

**2. How aggressive is the trial-end communication?**
- Day X-7: "Your trial is ending in a week"
- Day X-3: "Your trial ends Friday; here''s what changes"
- Day X+1: "Welcome to the free tier — here''s what you can still do; upgrade for full access"

**3. Free-tier design**:
- Same as freemium: must be valuable standalone
- Must allow users to keep their data accessible (export at minimum)

**Conversion benchmarks**:

- Reverse trial typically converts at 1.5-3x basic freemium
- Lower than card-required trial but with higher signup volume and lower CAC
- Best for products with strong network effects (you keep the user in the funnel)

**Output**:
1. The trial-length decision (typically 14-21 days)
2. The Pro-vs-Free experience map
3. The trial-end communication sequence
4. The free-tier design
```

The hardest reverse-trial decision: **how much to keep accessible post-fallback.** Take too much away and users churn in frustration. Take too little and they never feel the upgrade pressure. The right answer is product-specific; A/B test if you can.

## When to Switch Strategies

Switching is hard but sometimes necessary. The signals are clear.

```
Help me decide if I should switch free strategies.

**Signals to switch FROM freemium TO trial**:
- Free-to-paid conversion rate stuck below 1% over 6+ months
- Free-tier support cost growing faster than revenue
- Users on free tier never engage past first session (low activation)
- Marginal cost per free user too high (AI / compute heavy)

**Signals to switch FROM trial TO freemium**:
- Trial signups slowing dramatically
- Word-of-mouth growth not happening (no viral loop without free tier)
- Customers asking "can I use this for personal projects?" (signal of community potential)
- Competitors launching freemium and pulling your potential users

**Signals to switch FROM trial OR freemium TO reverse trial**:
- Trial converts well but signup volume too low
- Freemium converts poorly because users never see Pro
- You want both: signups AND conversion pressure

**Signals to switch FROM free TO paid-only**:
- Unit economics don''t work even with optimization
- Buyer is exclusively enterprise / mid-market (free tier is wasted)
- Support tax on free users dominates revenue from paid
- Strategic shift to upmarket

**The cost of switching**:

- 6-12 months of suboptimal performance during transition
- Existing customer communication overhead
- Pricing-page rework
- Potential goodwill loss if you take features away
- Possible churn from free users who relied on the prior model

**Don''t switch when**:
- Your conversion rate is below benchmark but improving
- The strategy was right but the execution is weak (fix execution first)
- You''re bored of the current strategy (boredom isn''t a signal)
- A competitor''s flashy launch tempted you (they may know less than you do)

**Output**:
- The score for each switch direction
- The decision: switch / fix / monitor / stay
- If switching, the 6-12 month transition plan
- The communication plan for existing users
```

The bravest founder move: **changing the model when data demands it.** A founder who recognizes "freemium isn''t working for our unit economics" and switches to paid-only saves the company 18 months of trying to optimize a leaking funnel. Pride is expensive; clear-eyed correction isn''t.

## Avoid the Common Traps

A few traps catch most founders. Recognize them.

```
The trap checklist.

**Trap 1: "Freemium is the way" cargo-culting**
- Just because Slack / Notion / Linear do freemium doesn''t mean you should
- They have specific characteristics (network effects, low marginal cost, high LTV) that may not be yours

**Trap 2: "Free trial converts higher than freemium" cargo-culting**
- True per-signup; not true per visitor
- Freemium often wins on revenue per visitor due to volume
- The right metric is revenue per visitor, not conversion %

**Trap 3: Designing the free tier to be intentionally bad**
- Hostile design ("free tier is broken on purpose") backfires
- Customers see through it; reviews suffer; competitors exploit
- Make the free tier genuinely useful but limited along ONE growth axis

**Trap 4: Forgetting the ratio**
- Healthy freemium: 5-10% of users pay; that''s the math
- A 95% free-user base is normal IF unit economics support the funnel
- Don''t panic at low conversion %; check revenue per visitor instead

**Trap 5: Long free trials assume engagement you don''t have**
- A 30-day trial assumes the user will engage for 30 days
- Most users disengage by day 7; the extra 23 days are dead weight
- Shorter trials with stronger activation push outperform longer trials in most cases

**Trap 6: Mixing strategies confusingly**
- "Freemium + 14-day trial of Pro" is a reverse trial; call it that
- "Free tier + paid features locked" with no trial is freemium-no-trial
- Be precise in communication; mixed signals confuse buyers

**Trap 7: Letting free tier rot**
- Free tier needs maintenance; it''s a product surface
- Update it as the rest of the product evolves
- Don''t let it lag 18 months behind the paid tiers

**Output**:
- Which traps you''re currently in (if any)
- The fix per trap
- The discipline to avoid future traps
```

The single biggest cause of free-strategy failure: **picking based on inspiration, not analysis.** Read the post about freemium from the founder you admire; do the analysis on your own product; pick what fits yours; don''t copy theirs.

---

## What "Done" Looks Like

A working free-strategy decision in 2026 has:

- A documented choice (free trial / freemium / reverse trial / paid-only / hybrid) with clear reasoning
- Limits and walls designed deliberately, not accidentally
- A trial-to-paid OR free-to-paid conversion benchmark you measure
- Conversion-rate trend over 90 days post-launch (the data, not the assumption)
- A clear plan for switching if signals demand it
- Honest naming on the homepage (don''t call yourself freemium if you''re actually a trial)

The hidden cost of the wrong free strategy isn''t the homepage copy — it''s **months of optimizing the wrong leak**. A founder who shipped freemium when their product needed a trial spends two years tweaking onboarding while the real lever was the strategy choice. Get the model right; THEN optimize within it.

## See Also

- [Pricing Strategy](pricing-strategy.md) — pricing structure embeds the free strategy
- [Pricing Page](../4-convert/pricing-page.md) — the surface where the strategy is communicated
- [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) — motion drives free-strategy choice
- [Free to Paid](../4-convert/free-to-paid.md) — conversion mechanics downstream
- [Onboarding Flow](../4-convert/onboarding-flow.md) — the path to value
- [Comparison Pages](../4-convert/comparison-pages.md) — comparisons surface free-tier differences
- [Market Sizing](market-sizing.md) — TAM × ACV depends on the free strategy
- [Tagline & One-Liner](tagline-and-one-liner.md) — the line shifts subtly between trial / freemium framings
- [Trial-to-Paid](../../../VibeWeek/6-grow/trial-to-paid-chat.md) — engineering side of conversion

[Back to Day 1: Position](README.md)
