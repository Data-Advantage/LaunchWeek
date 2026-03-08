[Back to Day 4: Convert](README.md)

# Onboarding Flow Design

Get users from signup to their first meaningful moment in under 5 minutes. This single metric predicts retention better than almost anything else.

## Why This Matters

Users who reach their "aha moment" — the point where they genuinely feel the product's value — have dramatically higher retention than users who don't. Data from multiple SaaS products shows that reaching the activation event within the first session reduces churn by 30-50%.

Most SaaS onboarding is terrible. Users sign up, get dropped into an empty dashboard with no guidance, wander around for 3 minutes, and abandon the product. The founder interprets this as "they didn't have a problem our product solves." The real issue was the onboarding.

Good onboarding is a design problem, a copy problem, and a sequencing problem. Today you fix all three.

---

## Define Your Activation Event

Before designing onboarding, identify the one action that defines "activated." This is the action correlated with users who stick around and pay.

**How to identify your activation event:**
- Look at users who converted to paid — what did they all do in their first session?
- Look at users who churned after trial — what did they NOT do?
- The difference is usually one specific action

**Common activation events by product type:**
- Content tool: "Created and exported first piece of content"
- Project management: "Invited a team member"
- Analytics tool: "Connected a data source and viewed first report"
- Communication tool: "Sent first message"
- E-commerce tool: "Created first product listing"

If you're pre-launch and don't have data, use your judgment: what's the one thing a user must do to genuinely understand the product's value?

Document your activation event. Everything in your onboarding is designed to get users there as fast as possible.

---

## The 5-Minute Onboarding Standard

Users should reach their activation event within 5 minutes of signing up. This is the benchmark. If your onboarding takes 20 minutes to set up, fix the onboarding — not the user's patience.

**Principles for fast time-to-value:**

**1. Reduce required setup**
Every required field is a drop-off risk. Make fields optional where possible. Auto-fill what you can. Defer non-critical setup to after first value.

**2. Show, don't tell**
Interactive walkthroughs beat documentation 10:1. Show users where to click, not which page to read.

**3. Lead with the most impressive thing**
What's the most "wow" moment in your product? Get users there first. Hook them before you ask for setup effort.

**4. Use defaults aggressively**
Pre-fill templates, example projects, or sample data. Users should be able to see value without entering any data first.

---

## The Onboarding Sequence

Structure your onboarding in three phases:

**Phase 1: Welcome (0-30 seconds)**
Immediately reinforce that they made the right decision. Don't ask for more information yet.

```
Write a welcome screen message for [product] new users.

They just signed up for [free trial / account].
Tone: [brand voice adjectives] — like a founder welcoming a new user personally

Include:
- Confirmation they're in (2 sentences max)
- The one thing they should do first
- Estimated time to first value ("In the next 3 minutes, you'll [outcome]")

Do NOT: show a checklist of 15 things to set up.
Do NOT: ask for credit card yet.
Do: give them one next step with a clear action button.
```

**Phase 2: First Action (30 seconds - 2 minutes)**
Guide them to their first meaningful action. Use interactive hints, tooltips, or a simple wizard — not documentation.

**Phase 3: First Value (2-5 minutes)**
They should have experienced something genuinely useful by this point. After first value, introduce the rest of the product.

---

## Empty States

Empty states are the most overlooked onboarding element. When a user first enters your product, most of the UI is empty. Empty states are the copy and design that fills those empty spaces.

**Bad empty state:** A gray box with "No projects yet"
**Good empty state:** A clear explanation of what goes here + a CTA + sample content to show what it looks like

```
Write empty state copy for these sections of [product]:

[Section 1 name]: What this section is for, what the empty state should say, what CTA should be present
[Section 2 name]: Same
[Section 3 name]: Same

For each empty state:
1. Heading (5-7 words): what this section is / what they can do here
2. Supporting line (15-25 words): a bit more context or value
3. CTA button: the primary action that fills this section

Tone: [brand voice adjectives]
Don't: use "Nothing here yet" or "No [things] found" as the heading
Do: make every empty state feel like an invitation, not a dead end
```

---

## The Onboarding Email Sequence

Not all onboarding happens in the product. Email is a critical part of getting users back if they abandon mid-onboarding.

Use [FastWrite](https://fastwrite.ai) to generate the onboarding email sequence (5 emails, covered in the Day 2 email sequences guide). The key emails to connect to your onboarding flow:

**Trigger-based emails:**
- "Signed up but didn't complete activation" → send after 4 hours with a specific link to the next step
- "Activated but hasn't returned in 3 days" → send a feature highlight or success example
- "Approaching trial end without converting" → send conversion email with clear CTA

In PostHog, set up behavioral triggers:
1. User signs up → start welcome sequence
2. User doesn't activate within 24 hours → send "how to get started" email
3. User activates → send "what's next" email
4. Trial ends without payment → send "did we miss something?" email

---

## Progressive Disclosure

Show features as users need them, not all at once. A user on their first session doesn't need to know about advanced settings, integrations, or admin controls. They need to see core value.

**The disclosure timeline:**
- Session 1: Core value creation (activation event)
- Session 2: Key supporting features
- Session 3+: Power features, integrations, settings
- Week 2: Team features, collaboration
- Month 1: Advanced configuration

Each session should introduce 1-2 new capabilities, not 10.

**Feature discovery prompts:**
Contextual tooltips or "Did you know?" prompts that appear based on behavior, not time:
- "You've created 5 [things]. Here's a way to make that faster: [feature]"
- "Users like you often also use [feature] to [outcome]"

---

## Measuring Onboarding Effectiveness

In PostHog, build a funnel:

```
Signup → [Step 1 in onboarding] → [Step 2] → [Activation event]
```

Track:
- **Time to activation** (median): aim for under 5 minutes
- **Activation rate** (30-day): aim for 40%+ of signups
- **Drop-off step**: where does the funnel lose the most users?

Watch session replays of users who didn't activate. You'll see the exact friction point. Fix it. Measure again.

---

## Common Onboarding Mistakes

**Requiring too much information upfront.** Every field is a reason to quit. The minimum viable signup is email + password. Add more later.

**Showing all features at once.** Information overload causes paralysis. Lead with one thing.

**Not having a demo or sample data.** Users should be able to see what the product looks like before entering their own data.

**Not emailing when users abandon.** Most users who drop off mid-onboarding intended to complete it. A well-timed email recovers 15-25% of them.

**Skipping the mobile experience.** If your product works on mobile, your onboarding must work on mobile. Test it.

---

## Deliverable

- Activation event defined
- Onboarding sequence designed (phases + copy for each screen)
- Empty states written for all key sections
- Behavioral email triggers configured in PostHog
- Onboarding funnel set up in analytics

---

## What's Next

Move to [Pricing Page Optimization](pricing-page.md) — because optimizing conversion from "free" to "paid" is often the highest-leverage work you can do at early stage.
