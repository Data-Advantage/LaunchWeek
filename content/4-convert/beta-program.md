[Back to Day 4: Convert](README.md)

# Run a Beta Program That Builds Loyalty (and Customers)

A well-run beta program turns 20–50 early users into a feedback loop that improves the product, becomes a source of testimonials, generates word-of-mouth, and converts a non-trivial fraction directly into paying customers. A badly-run beta program produces 200 dormant accounts, three angry refund-style emails, and zero usable signal.

The difference is structural. The good version has explicit selection criteria, a clear contract with participants ("here's what you get, here's what we ask"), a defined runtime, and a transition into either paid or sunset at the end. The bad version is "we let people use it free for a while and hoped feedback would emerge."

This is the playbook for the version that works.

## Why Beta Programs Matter More Than Founders Think

Three reasons a structured beta is high-leverage for an indie or AI SaaS:

- **The signal you get is irreplaceable.** Twenty users actively giving you feedback for 4 weeks produce more product insight than 1,000 free-tier users you never hear from. Beta is the highest-information / unit-of-time channel a founder has.
- **It's the cheapest path to social proof.** Beta participants who become paid customers write the first wave of testimonials. Without those testimonials, the launch lands cold.
- **It reduces launch risk.** Bugs found in beta are bugs not found by paying customers. The "first 30 days post-launch" is when reviews crystallize; you want those days as smooth as possible.

Done badly, however, beta programs become free-tier-with-extra-steps. Participants don't activate, don't give feedback, and don't convert. The founder learns nothing useful and has burned weeks of attention.

This guide pairs with [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) (beta is the next stage past pre-product interviews), [Find Your First 10 Paying Customers](../5-launch/first-10-customers.md) (beta participants often become the first 10 — though deliberately, not accidentally), [Convert Free Users to Paid](free-to-paid.md) (beta-to-paid conversion is its own funnel stage), and [Public Changelog and Roadmap](../../../VibeWeek/6-grow/changelog-roadmap-chat.md) (beta participants get advance access to roadmap items).

## When to Run a Beta

Not every product needs one. The decision rule:

```
Should I run a beta program?

GO signals:

1. **Product is functional but not battle-tested.** It works for me; it hasn't been used by people whose workflow doesn't perfectly match mine.

2. **There's a defined "next state" the beta is testing.** "Will they use this 3+ times a week?" "Will they pay?" "Will they refer?" Specific question = useful beta.

3. **I have access to 50-200 candidates** (waitlist, network, niche community). A beta doesn't work with 5 candidates; the conversion math requires real volume.

4. **I can sustain 4-8 weeks of high-touch engagement** with beta participants. If I'm about to be heads-down in product or hiring, defer.

5. **The cost-of-goods is acceptable for non-paying users.** Free beta participants generate inference / hosting cost. If COGS > $10/month per user, structure pricing accordingly (paid beta, more on this below).

WAIT signals:

1. **Product is too rough.** Pre-MVP betas waste participant goodwill. Better to run more [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) and ship a better baseline.

2. **No clear conversion-to-paid path.** If you don't yet have pricing locked in, "free for now → paid later" creates expectation problems. Set pricing first.

3. **I just want users.** Beta as a vanity-metrics exercise produces nothing useful. Public launch is faster if the goal is signups.

Decision rule:
- 4+ go signals + 0 wait signals: run a beta now
- 2-3 go signals: maybe; sharpen the question first
- 0-1 go signals: don't. Other channels will produce better learning per hour invested.
```

The single most important "go signal": **a defined question the beta will answer**. "Will they use it 3x/week?" is a beta. "Let's let people try it" is not.

---

## 1. Define the Beta Contract

Beta participants and you have an implicit contract. Make it explicit so neither side is surprised.

```
Define the beta contract for [my product].

Standard beta contract (this is what participants get and give):

**What beta participants get**:
- Free or discounted access to the full product (or specific tier)
- Direct line to the founder for support / feedback
- Influence on the roadmap (feature requests they raise are prioritized)
- Lifetime discount on the paid plan after beta concludes (typical: 30-50% off for 12 months)
- Beta-tester badge / early-access status going forward

**What beta participants give**:
- Use the product at least [N] times in the [N]-week beta window
- Respond to weekly feedback prompts (3-5 minutes each)
- One 30-minute video call at week 2 with the founder
- Permission to use their feedback in marketing (with attribution opt-in)
- Decide at the end of beta whether to continue as a paying customer or churn cleanly

**Beta runtime**: 4 weeks is the sweet spot for most products
- Less than 2 weeks → no behavioral signal accumulates
- More than 8 weeks → participants drift; the beta becomes "free forever" by accident

**Pricing during beta**: three options
- Free during beta, paid after — most common; risk is "free → paid" friction
- Discounted during beta (e.g., 50% off list), continues at discount post-beta — better at converting to paid; participants self-select for genuine interest
- Paid during beta at full price — for premium / high-stakes products; "thank you for paying us to test our product" is a real ask, only works for high-conviction buyers

For my product:
- Recommend ONE pricing approach
- Define the explicit contract on both sides
- Output the beta-program landing page copy + the application form
- Output the beta-acceptance email template + the beta-rejection email template

Don't ship without writing the contract down. Implicit contracts breed misaligned expectations.
```

The "free during beta, paid after" model is the most-common but produces the most awkward conversion conversations. The "discounted during beta, continues at discount" model converts at substantially higher rates because participants who paid even a little have already crossed the will-pay threshold.

---

## 2. Source the Right Participants

Quality of participants determines quality of learning. Random sign-ups produce random feedback; deliberately-selected participants produce sharp feedback.

```
Build a beta-participant sourcing plan.

The sourcing channels (in order of signal quality):

1. **Customer interview alumni** (per [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md))
   - You already know they have the problem
   - They've already given you 30 minutes; converting to "want to try the product" is a small ask
   - 60-80% acceptance rate when invited personally
   - Source ~5-10 here

2. **Waitlist sign-ups**
   - If you have an existing waitlist (per [Waitlist Launch](../5-launch/waitlist-launch.md)), filter to highest-fit
   - Apply selection criteria: ICP match, role fit, recent activity (signed up 90+ days ago vs yesterday — older sign-ups have stuck around)
   - Send personal invites, not mass-email (mass-email gets ~5% acceptance; personal invites get 20-40%)
   - Source ~10-15 here

3. **Network referrals**
   - Ask 5 trusted people in your network: "I'm running a beta of [product] for [audience]. Who's the best person you know who'd be a great beta tester?"
   - The introductions are warm; the participant joins because someone they trust suggested them
   - Source ~5-10 here

4. **Niche-community participants** (per [Community Seeding](../3-distribute/community-seeding.md))
   - Where your ICP already hangs out: Reddit, Slack groups, Discord, Indie Hackers
   - Post a beta-recruitment message; require an application form (reduces low-quality signups)
   - Source ~10-20 here

5. **Public application form**
   - Last resort, biggest noise-to-signal ratio
   - Useful as a backup; requires more screening
   - Source 0-10 here

Selection criteria — accept ONLY participants who match:

- **ICP fit**: role, industry, company size align with your target buyer
- **Active problem**: they've described or experienced the problem your product solves (in the application or interview)
- **Engagement intent**: they explicitly say they'll commit 30+ minutes of testing per week
- **Diversity**: spread across use cases, sizes, industries — avoid 20 lookalike users producing the same feedback

Reject criteria — even if otherwise compelling:

- "I'd love to try it for free" with no engagement intent → free-tier hunter
- Someone whose business doesn't need your product → noise
- Someone who's mostly going to wave their friends/network at you → off-target
- Already 5 from this exact persona → diminishing returns

Aim for 20-50 accepted participants depending on your product's complexity. Smaller for high-touch B2B products; larger for fast-feedback consumer or prosumer products.

Output: my participant-sourcing plan, the selection criteria checklist, the rejection email template (be kind, suggest alternative paths).
```

The single most-overlooked rule: **reject more than you accept**. Founders who accept everyone end up with low-engagement betas. Beta is a credibility signal; rejection makes acceptance feel earned.

---

## 3. Define the Cadence

Once participants are accepted, the operating rhythm of the beta determines outcomes. The good version is structured; the bad version is ad-hoc.

```
Build my 4-week beta-program cadence.

**Week 0 (kickoff, 1-week pre-launch)**:
- Accepted participants get a personal welcome email (founder-signed, NOT noreply)
- Calendar: 1 group kickoff call (30 minutes, optional but well-attended)
- Or: individual 15-minute onboarding calls if smaller cohort
- Set expectations: what you'll be asking, what they'll get, what to do if they hit issues
- Set up: direct Slack channel / Discord / email thread where they can reach the founder

**Week 1**:
- Personal email mid-week from founder: "How's it going? What's the first reaction?"
- Light weekly survey (3 questions, < 2 minutes): activation status, top friction, would they recommend
- Be present in the support channel daily — every question gets a reply within hours
- If any participant hasn't activated by end of week 1, personal outreach: "I noticed you haven't tried [feature] yet — anything I can help with?"

**Week 2**:
- Mid-program 30-minute video call (per the contract). 1:1 if cohort < 10; group call if larger
- Document what you heard. What's working, what isn't, what surprises emerged
- Mid-beta email recap to all participants: "Here's what we've learned in 2 weeks. We've shipped [N] fixes based on your feedback."

**Week 3**:
- Stable-state observation week
- Light feedback prompts; less hand-holding
- Watch metrics: are participants using the product as expected? Activation rate? Repeat usage?
- If a feature is broken or confusing, ship a fix mid-beta — visible iteration is part of the product

**Week 4 (transition)**:
- Final survey: comprehensive, ~10 questions, 5-10 minutes
- Final 30-minute call (1:1 ideally) to ask: "Will you continue paying? What would change your mind?"
- Pricing conversion ask: present the offer (full price / beta discount / etc.) clearly, with deadline
- Transition: paid customers stay; non-converters either get a deeper exit-interview or graceful sunset

**Week 5 (post-beta)**:
- Send retention email to converters: "Welcome aboard officially!"
- Send sunset email to non-converters: "Thanks for participating — your account stays active for 30 days at the beta level, then archives."
- Founder writes a public learnings post (per [Building in Public](../3-distribute/building-in-public.md))
- Apply learnings to product roadmap

Output: the email templates for each touchpoint + the survey content + the calendar block.
```

The "personal mid-week check-in" is the rule that separates 30% engagement from 70%. Participants who never hear from you forget they joined the beta; those who get a personal message stay engaged.

---

## 4. Capture the Right Feedback

Bad feedback is noise. Good feedback is product roadmap. The discipline is asking the right questions.

```
Build the feedback-capture system for my beta.

**Three types of feedback to capture**:

1. **Behavioral signal** (passive — from analytics)
   - Did participants activate? (Per [Activation Funnel](../../../VibeWeek/6-grow/activation-funnel-chat.md))
   - How often did they return?
   - Which features did they use? Which did they ignore?
   - Where did they get stuck (unfinished workflows, error states)?
   - Source: PostHog (per [PostHog Setup](../../../VibeWeek/6-grow/posthog-setup-chat.md))

2. **Direct feedback** (active — from surveys and conversations)
   - Weekly 3-question pulse:
     - "On a scale of 1-10, how useful has [product] been this week?"
     - "What was the most painful or confusing part?"
     - "If [product] disappeared tomorrow, would you miss it? Why?"
   - Mid-beta and end-of-beta longer surveys (10 questions each)
   - Open-ended invitations: "What did we miss in your context?"

3. **Reaction-in-the-wild** (organic — what participants say to each other and online)
   - Mention monitoring: are participants tweeting / posting about the product? Tone?
   - Word-of-mouth tracking: are they bringing in colleagues / friends?
   - Slack / Discord chatter: what conversations does the product surface?

**The feedback questions that produce sharp signal**:

- "What did you try to do that the product couldn't?" — surfaces feature gaps
- "When did you last open the product, and why?" — surfaces real use cases
- "What surprised you?" — surfaces unexpected delights or pains
- "If you had to onboard a colleague, how would you start?" — surfaces real workflow
- "What other tools do you use alongside it?" — surfaces ecosystem fit
- "What would make this a 10/10?" — surfaces the gap between current and ideal

**The feedback questions that produce noise**:

- "What features would you like?" — produces wishlists; rarely the most important things
- "Is the UI good?" — opinion; depends on individual taste
- "Will you recommend this?" — performative; people say yes politely
- "Any thoughts?" — too open; produces vague replies

For my product, output:
- The survey templates (weekly pulse + mid-beta + final)
- The behavioral metrics dashboard
- The 1:1 conversation question library (5-7 high-signal questions)
- The synthesis template (where you compile what you heard each week)
```

The "what did you try that the product couldn't?" question is the single highest-information question in the category. It surfaces friction and gaps that surveys never catch. Ask it in every 1:1.

---

## 5. Iterate Visibly During the Beta

Beta participants who see you ship fixes based on their feedback convert at much higher rates than those who feel their feedback disappeared into a void. Visible iteration is part of the product.

```
Build the visible-iteration cadence for [my beta].

The pattern:

1. **When a participant flags an issue or request**:
   - Acknowledge within hours: "Thanks — I see what you mean. Tracking it as [ticket reference]."
   - Decide: ship a fix during beta? Add to roadmap? Decline politely?
   - Communicate the decision: "Yes, shipping this week" / "Roadmap for after launch" / "We've decided not to do this because [specific reason]"

2. **Ship at least one beta-driven improvement per week**:
   - Even small fixes count. Especially small fixes count — they show momentum.
   - When you ship, tell the participants: "We just shipped [thing] based on feedback from [participant or anonymized]"

3. **The mid-beta recap**:
   - "Here's what we've heard from you so far": 3-5 themes
   - "Here's what we've shipped": specific fixes/features
   - "Here's what we're working on": next week's plan
   - This single message is the heartbeat that keeps participants engaged

4. **The end-of-beta synthesis post** (public):
   - Per [Building in Public](../3-distribute/building-in-public.md) and [Public Changelog](../../../VibeWeek/6-grow/changelog-roadmap-chat.md)
   - "We ran a 4-week beta with [N] users. Here's what we learned:"
   - Specific learnings, specific fixes, specific roadmap updates
   - Doubles as marketing for the public launch

For my product, output:
- The beta-feedback triage process
- The "we shipped this" comms template
- The mid-beta recap email + structure
- The end-of-beta synthesis post outline

Anti-patterns:
- Silently ignoring participant feedback (they notice)
- Promising every request → shipping few (worse than rejecting upfront)
- Fixing only the loud feedback (most-engaged participants raise the most issues; the quiet majority's signal gets lost)
```

Shipping the fix matters less than telling participants you shipped the fix. Founders who fix bugs silently while staying quiet underperform founders who ship the same fixes and write a 3-sentence "we shipped X based on your feedback" note.

---

## 6. Convert Beta Participants to Paying Customers

The end-of-beta is where many programs lose participants who would have converted with the right approach. The pricing conversation matters.

```
Run the beta-to-paid conversion at end of beta.

**Pre-conversation prep** (week 3.5):
- Score each participant on engagement (activation, weekly usage, feedback quality)
- Identify high-engagement participants → likely converters
- Identify low-engagement participants → either onboarding failed (recoverable with 1:1) or they're not really a fit (gracefully sunset)

**The 1:1 final call** (15-20 min):
- Recap what they accomplished with the product (specific examples)
- "Will you continue using [product] after beta?" — open-ended; let them speak
- If yes:
  - "Great. The pricing for what you're using is [tier] at [price]. As a beta participant, you have [discount / benefit]. Want me to set you up?"
  - Most beta-discount offers: 30-50% off list for 12 months, then auto-renew at list
  - Confirmed converters → send invoice / Stripe link, get on paid plan
- If no or maybe:
  - "Help me understand — what would have to be true for it to be a yes?"
  - Listen for specific objections (price, missing feature, wrong fit, timing)
  - Decide: address the objection if you can, accept the no if you can't
- If clearly not interested:
  - "Totally fair. Anything specific I should change for the next person who tries this?"
  - End the call gracefully; sunset their account with grace

**The conversion offer**:
- For solo / small-business participants: a meaningful discount (~30-50%) for 12 months as the beta thank-you
- For larger / enterprise participants: a custom-priced annual contract; the beta builds the relationship for sales
- Time-limit the offer: "This rate is available for the next 7 days" — creates the action-forcing function

**The sunset for non-converters**:
- Account stays at beta level for 30 days post-beta
- Then converts to free tier (if you have one) or read-only-export for 90 days, then archived
- Final email: "Thanks for testing [product]. Your work is downloadable here. We'd love to have you back; here's how to reach me."

Realistic conversion numbers:
- High-engagement, full-fit participants: 60-80% convert to paid
- Medium-engagement: 20-40%
- Low-engagement: 5-15%
- Aggregate beta-to-paid: typically 30-50% of the cohort

Output: the end-of-beta conversion script, the sunset templates, the 7-day-deadline followup.
```

The 7-day deadline on the conversion offer is the action-forcing function that converts maybes to yeses. Without it, "I'll think about it" becomes "I forgot." With it, participants make a decision instead of drifting.

---

## 7. Document the Learnings

The beta produced data. The beta is only valuable if the data feeds the next stage of the product.

```
Run an end-of-beta synthesis (within 7 days of beta concluding).

**Internal artifact** (private):
- Behavioral data: activation rate, repeat usage, top features used, top features ignored
- Direct feedback themes: 3-5 themes that emerged across multiple participants
- Surprises: things you didn't expect (positive and negative)
- Pricing signal: what did participants pay; what did the maybes say about price
- Conversion analysis: who converted, who didn't, why
- Roadmap updates: what's now prioritized that wasn't, what's now de-prioritized

**Public artifact** (per [Building in Public](../3-distribute/building-in-public.md) and [Public Changelog](../../../VibeWeek/6-grow/changelog-roadmap-chat.md)):
- "We ran a 4-week beta with [N] users. Here's the writeup."
- 5-10 specific learnings (not vague claims)
- 3-5 specific shipped improvements during the beta
- 2-3 customer quotes (with permission, attribution)
- The path forward: when does public launch happen, what's the pricing
- Doubles as marketing for the launch and as a credibility signal

**Apply to product**:
- Update roadmap based on the most-mentioned gaps
- Update onboarding based on the most-friction points
- Update pricing based on the willingness-to-pay signal
- Update the marketing copy based on what participants said (not what you think they thought)
- Update the ICP based on who converted vs who didn't

**Apply to the next beta** (if running one):
- What worked in selection? In onboarding? In feedback capture?
- What would I do differently? Capture in a "beta-program playbook" doc that compounds across betas

Output: the internal synthesis template + the public-post outline + the action items for product / marketing / pricing / next beta.
```

The public synthesis post is high-leverage marketing. It's specific, fresh, and includes real customer quotes — three things that distinguish good launch content from generic launch content. Founders who skip this leave free marketing on the table.

---

## Common Failure Modes

**"Most participants never activated."** Onboarding-during-beta is too lax. Be more high-touch in week 1: personal check-ins to anyone who hasn't activated by day 3. If 50%+ don't activate, the underlying onboarding is broken — fix that before public launch.

**"Beta-to-paid was 5%."** Either selection was too loose (participants weren't real ICP) or the conversion offer was too weak (no urgency, unclear value). Most likely both. Section 2 + Section 6.

**"Participants gave feedback I disagreed with and ignored."** That's fine — but tell them. "We've decided not to ship X because [reason]" is way better than silence. Silence breeds the "they don't listen" perception.

**"The beta extended to 8+ weeks because I kept finding things to fix."** Time-boxed betas matter. Ship the public launch; iterate post-launch.

**"We ran a beta with 5 friends." → no useful signal**. Friends produce performative feedback. The beta needs strangers — strangers produce honest feedback.

**"I was too busy to be present in the beta channel."** Predictable beta failure. The 4-8 week high-touch commitment is the cost of running a useful beta. If you can't sustain it, defer the program.

**"Some participants' feedback contradicts others'."** Normal. The synthesis step (Section 7) is where you reconcile. Common pattern: the most engaged participants have niche needs that don't generalize; the broader user base benefits more from foundational improvements.

---

## Deliverable

- Explicit beta contract (what they get, what they give, runtime, pricing)
- 20-50 deliberately-selected participants (60% from existing relationships, 40% from sourcing)
- 4-week structured cadence with weekly pulse + mid-beta call + end-of-beta call
- Feedback capture system (behavioral + direct + organic monitoring)
- Visible iteration cadence (weekly shipped improvements + comms)
- End-of-beta conversion conversation with discount offer
- Internal + public synthesis posts within 7 days

---

## What's Next

After the beta concludes successfully, move into [Find Your First 10 Paying Customers](../5-launch/first-10-customers.md) (the converted beta participants ARE your first 10 — but you'll want more) and [Public Changelog and Roadmap](../../../VibeWeek/6-grow/changelog-roadmap-chat.md) (use the public synthesis post as the first major changelog entry).
