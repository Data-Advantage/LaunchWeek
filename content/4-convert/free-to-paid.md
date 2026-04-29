[Back to Day 4: Convert](README.md)

# Convert Free Users to Paid

Most SaaS founders pour effort into trial signups, then watch 80–90% of those signups never convert to paying customers. Some never activate. Some activate but never reach the upgrade prompt at the right moment. Some hit the paywall and bounce because the value gap to the paid tier is unclear. Each of these is a fixable problem, and most teams ship significant lift from a quarter spent on free-to-paid optimization.

This is the playbook for that quarter. It assumes you have already done [Activation Funnel Diagnosis](../../../VibeWeek/6-grow/activation-funnel-chat.md) and have a working [Pricing Page](pricing-page.md) — those upstream pieces are prerequisites. With them in place, this guide is how you compound the conversion at the trial-to-paid edge.

## Why Most Free-to-Paid Funnels Underperform

Three structural problems hit every team the same way:

- **The free tier is either too generous or too tight.** Too generous: power users never need to upgrade because the free tier already gives them everything. Too tight: users hit the wall before they reach the aha moment, never see the value, and bounce. The median founder errs on "too generous" because they're afraid of friction.
- **Upgrade prompts are time-based, not behavior-based.** "Day 14 of trial — upgrade!" arrives whether the user has used the product 50 times or zero times. Behavior-triggered prompts ("you generated your 10th report — see what Pro unlocks") convert at 3-5× the rate.
- **The "what you get" framing focuses on features, not outcomes.** Pricing pages list features; converting users care about specific outcomes. "Get 10× more reports per month" beats "Generate up to 100 reports / month" in conversion testing every time.

The fix is structural: design the free tier deliberately, instrument behavior-based triggers, frame the upgrade as outcome-focused, and measure the right metrics.

## What You Are Building This Quarter

- A clear "free tier vs paid tier" structure that allows free users to genuinely succeed at the product, but creates natural pressure to upgrade once they're getting real value
- 4-6 behavior-triggered upgrade prompts, instrumented inside the product
- A trial-end / quota-hit experience that respects the user and presents the upgrade as a clear value swap
- A weekly conversion dashboard tracking trial-to-paid rate by cohort, channel, and behavior
- A test cadence that ships one conversion experiment per month, with explicit success metrics

This pairs with [Pricing Page](pricing-page.md) (the surface where the upgrade decision lands), [Onboarding Flow](onboarding-flow.md) (free-tier users who don't activate never convert), and [A/B Testing](ab-testing.md) (the experimentation infrastructure for testing every change).

---

## 1. Design the Free Tier Deliberately

The free tier is a product decision, not a marketing one. The wrong design poisons every downstream conversion attempt; the right design creates natural pressure to upgrade.

### The four free-tier patterns

```
I'm building [your product] at [your-domain.com]. The product helps [audience] do [outcome]. My pricing tier structure today is [describe — typical: Free, Pro at $X, Team at $Y].

Help me evaluate four free-tier patterns and recommend ONE for my product:

1. **Time-limited trial** (14 / 30 days, full features, no card required)
   - Pros: simplest, lets users see the full product, classic SaaS default
   - Cons: pressure on users to evaluate fast; weak users churn at trial end without conversion; founder-attention-heavy support during trial
   - Best for: products with a fast time-to-value (under 3 days) and clear outcome

2. **Time-limited trial with card** (14 / 30 days, full features, card required up front)
   - Pros: 60% of trial signups convert to paid (vs 10-15% no-card)
   - Cons: 3-5× fewer trial signups
   - Best for: products with strong word-of-mouth, where the upfront friction filters seriously interested users

3. **Permanent free tier with usage cap** (e.g., 10 reports/month free, then upgrade)
   - Pros: free users keep using the product; the upgrade prompt comes at peak engagement (when they hit the cap doing real work)
   - Cons: requires careful design — cap too low and they bounce; too high and they never upgrade
   - Best for: products where usage is the right unit (token-based, action-based, content-based)

4. **Permanent free tier with feature gate** (free tier missing key features that paid users need)
   - Pros: free users can be advocates without being a cost; the gated features create clear upgrade reasons
   - Cons: feature-gating can feel arbitrary; need to pick gates that map to real customer-perceived value
   - Best for: collaboration / multi-user products where seats, integrations, or admin features are the natural gate

For my specific product:
- Recommend ONE pattern with rationale
- For a permanent-free pattern, propose the specific cap or feature-gate (be opinionated — vague advice is useless)
- Estimate expected trial-to-paid conversion rate based on the pattern (anchors from public data: 60% card-required, 10-15% no-card, 5-10% permanent-free)
- Identify the riskiest assumption — what would tell me my choice is wrong, and within how many weeks of running it should I see that signal?

Default if no strong reason: permanent free tier with usage cap, set so that 80% of users who complete onboarding hit the cap within their first 30 days of active use.
```

The pattern that works for most AI SaaS: **permanent free tier with usage cap** set just above the activation event but well below the workflow-defining usage. A user who hit the activation event got value; a user who hit the cap doing real work has a buying signal you cannot manufacture.

---

## 2. Instrument Behavior-Based Upgrade Triggers

Calendar-based prompts ("day 7! day 14!") are weaker than behavior-based ones in every conversion test that's been run publicly. Build triggers around what the user has actually done.

```
Help me design 4-6 behavior-triggered upgrade prompts for my product.

Each trigger should:

1. **Fire after the user has clearly experienced value** (NOT before — pre-value upgrade prompts feel pushy)
2. **Show up at the user's peak engagement moment** (right after they did the thing, not 6 hours later)
3. **Tie the upgrade to a specific outcome they care about**, not a feature list

Ten high-conversion trigger patterns to consider for my product:

1. **Hit the cap, mid-action**: user runs out of [free-tier resource] while in the middle of doing real work. Upgrade prompt: "You've reached your monthly limit of N. Upgrade to keep going right now."

2. **Cap warning at 80%**: friendly heads-up before they hit the wall. Upgrade prompt: "You're at 80% of your free quota. Pro gives 10× more — see what's included." Lets them upgrade with intention rather than under pressure.

3. **Multi-user moment**: user tries to invite a teammate, share a project, or use a multi-user feature. "Team plans support unlimited collaborators."

4. **Power-user behavior threshold**: user did N actions in M days (e.g., 20 reports in 14 days). They're using the product seriously. "You're using [product] heavily. Pro saves [time / cost] for users like you — see what's included."

5. **Failed attempt at gated feature**: user clicks a feature that's paid-only. NOT a generic "upgrade to access" — show what the feature does (Loom, screenshots) before the upgrade ask.

6. **Result they want to keep**: user generated something valuable they want to download / export / share, but export is paid-only. "Pro lets you export. One-click upgrade keeps your work."

7. **Time-series accumulation**: user has built up data, projects, or history that becomes more valuable over time. "You've created 30 projects. Pro keeps them organized with [folders / tags / search]."

8. **Comparison-with-paid-output**: user generated a free-tier output; show them side-by-side what Pro would generate. Concrete preview > abstract claim.

9. **Successful completion of a goal**: user just shipped / completed something significant. "Nice work! Pro users do this 3× faster — see what unlocks."

10. **Returning user nudge**: user logged in for the 5th, 10th, 20th time. They're committed. "You've been using [product] for [time]. Pro pays for itself if you're using it weekly — try it free for 14 days."

For my specific product, pick the 4-6 that fit best. For each:
- The exact trigger condition (event + threshold)
- The UX (in-product modal, banner, email — match to the moment)
- The copy (specific outcome, NOT "upgrade for more features")
- The fallback if dismissed (don't re-trigger for 7 days; track dismissal as a signal)
- Success metric (% of triggered users who clicked the CTA)

Output: the trigger map + sample copy + tracking event names.
```

The "specific outcome, not features" rule is the most violated one. The chat prompt above hammers it because every team naturally drifts back to feature lists. Your pricing page can list features; your in-product upgrade prompts should not.

---

## 3. Build the Cap-Hit Experience

For permanent-free-tier products, the moment the user hits their cap is the highest-leverage conversion moment in the whole funnel. Most founders treat it as a hard error wall; the right design treats it as the moment of truth.

```
Design the cap-hit experience for my permanent-free product.

The flow when a user hits their monthly quota mid-action:

1. **Don't break their work in progress** — let them complete the action they were on (or queue it for after upgrade), but block the next one
2. **Show, don't tell**: a clear "you've hit your limit" message that includes:
   - The specific limit and what they used (1,000 / 1,000 reports)
   - A timeline ("resets in 12 days" — gives them the option to wait)
   - Three options ranked by effort:
     a. **Upgrade to Pro now** — primary CTA, with a brief outcome-focused tagline
     b. **Wait until reset** — secondary; respect this choice, don't shame
     c. **See what Pro offers** — tertiary; opens the side-by-side comparison
3. **Inline upgrade form** — if they click "Upgrade to Pro now," the upgrade flow should NOT take them out of the product. Show pricing, accept payment, and return them to where they were within 30 seconds of clicking.
4. **Post-upgrade celebration** — when payment completes, the next thing they see is the action they were trying to do, completing successfully. Not a generic "thanks for upgrading" page.

For each step, output:
- The UI component
- The copy (under 100 words for the cap-hit message)
- The analytics events to track (cap_hit, cap_hit_upgraded, cap_hit_waited, cap_hit_dismissed)
- The fallback for users who hit the cap, dismiss, and come back later — the cap status should be obvious in the navbar so they don't bump into it again unprepared

Two specific patterns that lift conversion meaningfully:

- **Show the specific outcome they would have gotten if upgraded**: "If you'd been on Pro, that report would have already finished. Want to upgrade and pick up where you left off?" Concrete > abstract.
- **Single-month upgrade option**: $X for 1 month, no commitment. Lower friction than annual. Users who hit the cap once often hit it again, and the single-month customer often becomes a long-term subscriber.

Output: the implementation plan + the success metric (cap-hit-to-upgrade conversion rate). Target: 15-30% for healthy products.
```

The "don't break their work in progress" rule comes from real conversion data. Users whose in-flight action was killed by the cap convert at half the rate of users whose action was preserved. The technical work to preserve the action is small; the conversion impact is large.

---

## 4. Optimize the Trial-End Experience

For time-limited trial products, day 14 (or whatever your trial length) is the make-or-break moment. The teams that win this stage do not just send "your trial is ending" — they design the entire trial-end window.

```
Design the trial-end experience for my time-limited trial product.

Trial timeline:

**Day -3 (3 days before trial ends)**:
- In-app banner: "Your trial ends in 3 days. Upgrade now and your work continues seamlessly."
- Email from founder: "How's it going?" — open-ended, no upgrade ask, just a check-in. Replies surface objections to address.

**Day -1 (1 day before)**:
- In-app banner: "Trial ends tomorrow. Upgrade to keep your [data / projects / settings]."
- Email: "Tomorrow's the last day of your trial. Here's a recap of what you accomplished:" — specific to their usage. Numbers they can be proud of. Then the upgrade ask.

**Day 0 (trial ends)**:
- Account moves to "trial-expired" state — read-only, NOT deleted
- Email: "Your trial ended. Your work is safe; upgrade anytime in the next 30 days to pick up where you left off."
- In-app message on next login: clear upgrade options + the "wait, I have questions" path back to founder

**Day +7 (one week after)**:
- Email: "We held your work for a week — want to come back? Here's a 14-day extension or a 25% off founding-customer rate." This is the win-back email — only one, no nag follow-up.

**Day +30 (one month after)**:
- Final notice: "We'll archive your account in 30 days. Reactivate anytime, or [download your data]."

For each touchpoint:
- Output the in-app component or email template
- The ROI math: trial-end recovery rate at 7 / 14 / 30 days

Two non-obvious optimizations:

- **Don't delete trial accounts on day 0**. The 30-day grace window with read-only access is the highest-converting recovery surface. About 5-15% of trial-expired users return within 30 days when they can come back to their work.
- **The "your work is safe" framing**. Users worry about losing what they built. Telling them their work is preserved removes the biggest friction; many would have upgraded sooner if they'd known.

Output: the trial-end timeline + the email templates + the in-app component specs.
```

The in-app banner pattern matters more than the emails. Users who are still using the product during trial see banners; users who already disengaged from the product won't open emails. Design for the active user first.

---

## 5. Match the Upgrade Path to the Use Case

Different users have different reasons to upgrade. The single highest-leverage move is matching the upgrade path to the user's specific use case rather than presenting one generic flow.

```
Build a personalized upgrade path for [my product].

For the top 3-5 use cases in my product, design a different upgrade flow:

For each use case:
1. **Detect it from behavior** — what events tell me this user is using the product for use case X?
2. **Show the use-case-specific value** — when this user hits the upgrade trigger, the prompt mentions THEIR use case, not a generic feature list
3. **Highlight the most relevant Pro features** for that use case
4. **Use a relevant proof point** — a customer testimonial, a case study, a specific outcome from someone in the same use case

Example for an AI content tool:

- **Use case A: solo content creator** → Pro pitch: "Generate 10× the volume + access advanced models. [Customer X] writes 5x as many drafts on Pro."
- **Use case B: small marketing team** → Pro pitch: "Add team members, share templates, audit history. [Customer Y] manages 3 brands on the same plan."
- **Use case C: agency client work** → Pro pitch: "Custom branding for client deliverables, white-label exports, role-based access. [Customer Z] runs 12 client accounts on Pro."

Implementation:

- Tag users with detected use case (from onboarding survey + behavioral signals)
- The upgrade prompt copy + the pricing page they land on are personalized to the use case
- Success metric: per-use-case conversion rate. The lift is usually 30-50% over a single generic flow.

For my product, identify the 3-5 use cases. For each:
- The detection rule
- The use-case-specific upgrade-prompt copy
- The Pro features I'd highlight
- Where I'd source proof points if I don't have customer testimonials yet

Output: the use-case map + the personalized upgrade-path component specs.
```

The detection rule does not need to be perfect. Even crude behavior-based segmentation ("user invited a teammate" → team use case) lifts conversion noticeably over the no-segmentation baseline.

---

## 6. Win Back the Right Way

A meaningful share of trial-expired and free-tier-stalled users are recoverable with the right outreach. The wrong outreach trains them to ignore you forever.

```
Build a win-back program for free-tier-stalled and trial-expired users.

Two cohorts, two different approaches:

**Cohort A: Free-tier-stalled** (active free user but never hit cap, never engaged with upgrade prompts):
- Ask first, sell second: "Hey [name], saw you've been using [product] for [time]. What's working for you? What's missing?"
- Open-ended question, no upgrade ask. The replies surface real objections.
- Follow-up based on the reply — if they mention a feature gap, send the use-case-specific upgrade pitch (Section 5). If they say "love it as is," tag them as long-term free user and stop nagging.

**Cohort B: Trial-expired-without-converting** (used the trial, didn't upgrade, didn't reactivate within first week):
- 30 days after expiration: "Your account is still here. We made some changes — want to come back?" Mention the 1-2 most user-visible improvements since they left.
- Offer a no-card-required 14-day reactivation, OR a 25% off founding-customer discount. Pick one based on what they originally signed up for.
- Single touch. No follow-up if they don't engage. Aggressive win-back kills former-trial relationships permanently.

**90-day win-back checkpoint**:
- For users who have been quiet 90+ days, one final nudge: "Last one — anything we can do?" If no response, mark as cold and exclude from future marketing for 12 months.

Per [Reduce Churn](../../../VibeWeek/6-grow/reduce-churn-chat.md), the discipline that separates effective win-back from spam: **single touch per attempt, single attempt per quarter, respect the absence**.

For each cohort, output:
- The trigger conditions
- The exact email copy
- The success metric (reactivation rate within 14 days of touch)
- The exit conditions (when to stop)
```

Reactivation rates for well-targeted win-back: 5-15% over 12 months across both cohorts. Below 5% means the segmentation is wrong or the offer is weak; above 15% means you may be reaching users who would have come back anyway.

---

## 7. Measure What Actually Drives Conversion

Trial-to-paid conversion has more vanity metrics than almost any other funnel stage. The real metrics:

```
Set up a free-to-paid conversion dashboard.

Per-cohort metrics:

1. **Trial-to-paid conversion rate by signup cohort** (week of signup). Watch trends, not snapshots — a single bad week is noise.

2. **Conversion rate by activation status**:
   - Activated trial users → paid conversion (target: 30-60%)
   - Non-activated trial users → paid conversion (typically <5%)
   - The gap tells you the activation funnel is the upstream lever

3. **Conversion rate by acquisition source** (UTM-tagged):
   - Organic search vs paid social vs newsletter vs referral
   - Different channels produce dramatically different conversion rates
   - Surface the lowest-ROI channels and either fix the message or cut spend

4. **Conversion rate by behavior segment**:
   - Users who hit the cap (highest converting segment)
   - Users who invited a teammate
   - Users who completed onboarding
   - Pattern-match: which behaviors most strongly predict conversion?

5. **Time-to-conversion distribution**:
   - When do users convert relative to signup?
   - If most conversions happen in the first 7 days, your trial length is fine and your urgency is calibrated
   - If conversions trickle for 60+ days, your trial may be too long — users defer the decision

6. **Per-trigger conversion**:
   - For each upgrade trigger from Section 2, what % of triggered users converted within 14 days?
   - Surface the underperforming triggers and revise

Test cadence:
- One conversion experiment per month
- Pre-register the hypothesis, the metric, and the kill criterion
- Run for full statistical significance (typically 4-6 weeks for indie scale)
- Document the result regardless of outcome — failed experiments are inputs to the next test

Failure-mode metrics:
- Trial-to-paid below 10% (no-card trial) or 30% (card-required trial) → upstream activation problem, not a conversion problem
- Reactivation rate below 3% → win-back is broken or the original churn was about fundamental fit
- Single-touch unsubscribe rate >5% → win-back emails are aggressive enough to damage the list

Output: the SQL / dashboard spec + a quarterly retro template asking "what one experiment moved the needle this quarter?"
```

The "experiment per month" cadence is the discipline most teams skip. Without explicit experimentation, conversion improvements come from intuition and revert silently. With it, you compound learnings.

---

## 8. The Pricing Test You Should Run

Most teams test buttons, copy, and trigger placement. The test that often produces the biggest lift: pricing itself.

Three pricing variations worth testing in the first 6 months:

- **Lower the entry-tier price by 20-30%**: see if conversion volume increases more than the per-customer revenue decreases
- **Raise the entry-tier price by 20-30%**: see if conversion holds (often it does — buyers are less price-sensitive than founders fear)
- **Change the value-metric**: if you bill per-seat, try per-usage; if per-usage, try per-outcome. The right metric depends on what your buyer measures internally.

Implementation: feature-flag the new price point per [Feature Flags](../../../VibeWeek/6-grow/feature-flags-chat.md), assign new signups to control or test, run for 4-6 weeks, decide. **Existing customers stay on their current price** — never change a paying customer's price as part of an experiment.

The most common surprise: prices are usually too low, not too high. Most founders raising prices after a careful test see either flat or improved conversion at the new higher rate.

---

## Common Failure Modes

**"Free users never upgrade."** Free tier is too generous OR upgrade prompts are missing. Audit the free tier — does it give power users everything they need? Audit the prompts — are there at least 4 behavior-triggered prompts in the active user journey?

**"Trial-to-paid is 8% on a card-required trial."** Should be 50-70%. Either the activation rate during trial is broken (check [Activation Funnel Diagnosis](../../../VibeWeek/6-grow/activation-funnel-chat.md)) or the trial is too short for time-to-value.

**"Conversion is high in the first 14 days but no one converts later."** Trial-end experience is wrong — users who don't convert in the trial window are lost forever. Add the 30-day grace window from Section 4.

**"Users churn within 30 days of paying."** Free-to-paid conversion is firing on the wrong users. Tighten the upgrade triggers to require deeper engagement before firing.

**"We tested every button color and nothing moved the metric."** You're optimizing the wrong layer. The biggest free-to-paid levers are: free-tier design, behavior triggers, and pricing. Skip the button-color tests until those are nailed.

**"Our pricing page is confusing."** Free-to-paid conversion can be a pricing-page problem. Run [Pricing Page That Converts](pricing-page.md) — that's the upstream surface for conversion.

**"We send 5 upgrade emails per week and people unsubscribe."** Email-based upgrade pressure is the lowest-conversion / highest-burn approach. Move pressure into the in-product experience and use email for behavior-triggered, single-touch nudges only.

---

## Deliverable

- A deliberate free-tier design (one of the four patterns) with documented rationale
- 4-6 behavior-triggered upgrade prompts instrumented in-product
- A cap-hit or trial-end experience that respects the user and presents upgrade as a clear value swap
- 3-5 use-case-specific upgrade paths
- A win-back program with two cohorts and explicit single-touch discipline
- A weekly conversion dashboard tracking by segment, source, and behavior
- One conversion experiment running every month

---

## What's Next

Move to [Reduce Churn](reduce-churn.md) — converted users still need to retain. Free-to-paid is the doorway; reducing churn is the home you build on the other side. Then run [Analytics Setup](analytics-setup.md) at the same time so the dashboards from this guide actually exist and update.
