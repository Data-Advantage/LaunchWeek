[Back to Day 4: Convert](README.md)

# Reduce Churn Before It Starts

Identify at-risk users before they cancel. Build the early warning system now, while you have time to act.

## Why This Matters

Acquiring a new customer costs 5-25x more than retaining an existing one. Monthly churn of 5% means you're replacing half your customer base every year just to stay flat. Getting churn to 2% means you're growing even if you never run a marketing campaign.

Most founders react to churn — they notice it in the revenue numbers, then ask departing users why they left. This is too late.

The founders who control churn do it proactively: they identify the behavioral signals that predict churn 2-4 weeks before cancellation, and they intervene before the user makes a decision.

You don't have the data to know these signals at launch. But you can build the system now so you accumulate the data and start acting on it as soon as patterns emerge.

---

## The Churn Prediction Framework

Churn is almost always preceded by behavioral changes. Users who churn:

- Log in less frequently
- Use fewer features
- Stop completing their core workflow
- Stop inviting team members (for collaboration tools)
- Stop getting results (for outcome-based tools)

You need to track these signals. Then you need to act on them.

**The three-tier system:**

**Tier 1: Usage drop-off alert** (leading indicator, most time to act)
Trigger: user's weekly usage drops 50%+ compared to their baseline

**Tier 2: Disengagement alert** (clear signal)
Trigger: user hasn't logged in for 7 days

**Tier 3: Pre-cancellation alert** (often too late, but worth trying)
Trigger: user visits the cancel/billing page

---

## Step 1: Define Your Engagement Metrics

First, define what "engaged" looks like for your product. Different products have different engagement rhythms.

```
I'm building [product] for [ICP].

Define engagement metrics for my product:

1. What is the core action that indicates an engaged user? (What does an active user do at least X times per week?)
2. What's a reasonable baseline frequency for this action? (Daily? Weekly?)
3. What would "declining engagement" look like? (50% drop? 100% drop? Reduced feature usage?)
4. What actions correlate with a user being "successful" with the product?
5. What are the leading indicators of a user about to churn?

Use [MetricGen.ai](https://metricgen.ai) to model the revenue impact of different churn rates and intervention success rates.
```

---

## Step 2: Instrument Usage Tracking

In PostHog, track the events that define engagement:

```typescript
// Track every meaningful action
posthog.capture('core_action_completed', {
  userId,
  action: 'generated_content', // or whatever your core action is
  outcome: result.metrics, // track the result too if you can
})

posthog.capture('session_started', {
  userId,
  daysSinceLastLogin: daysSince,
})

posthog.capture('feature_used', {
  userId,
  feature: featureName,
})
```

**Build a user engagement score:**
A simple engagement score can be calculated weekly:

```typescript
// Pseudocode for engagement scoring
function calculateEngagementScore(userId: string, pastWeek: UserActivity) {
  const score =
    (pastWeek.sessions * 10) +
    (pastWeek.coreActionsCompleted * 25) +
    (pastWeek.featuresUsed * 5) +
    (pastWeek.teamInvitations * 15)

  return score
}

// Compare to baseline (their average over the past 4 weeks)
// If score drops >50% from baseline → trigger Tier 1 alert
```

---

## Step 3: Set Up Alerts

**In PostHog, create cohorts:**
- "At-risk" cohort: users who haven't logged in for 5+ days AND have an active subscription
- "Disengaged" cohort: users with declining usage over 2 consecutive weeks

**Set up notifications:**
Connect PostHog to Slack or email (via PostHog integrations) to notify you when users enter these cohorts.

At early stage, you handle these manually. At scale, you automate the interventions.

---

## Step 4: Build Intervention Playbooks

For each alert tier, define your response:

**Tier 1: Usage Drop-Off (triggered by 50% usage decline)**

```
Write a re-engagement email for a [product] subscriber whose usage has dropped.

Trigger: they haven't completed [core action] in the past week (their normal baseline is [X] per week)
Tone: concerned but not alarming — like a founder who genuinely cares
Goal: understand why usage dropped + offer help

Subject: [3-5 options — don't mention "we noticed your usage" creepily]
Body (100-150 words):
- Acknowledge that life gets busy (normalize, don't shame)
- Reference what they were accomplishing (brief, specific if possible)
- Ask a direct question: "Is there something blocking you? Is the product not working for your workflow?"
- Offer a specific form of help: "Happy to jump on a 15-minute call this week"
- Single CTA: reply to this email or book a time
```

**Tier 2: Disengagement (7 days without login)**

```
Write a re-engagement email for a subscriber who hasn't logged in for 7 days.

Goal: get them back in, or understand why they left
Tone: direct — they're clearly not using it, don't dance around it

Subject: [3 options — more direct than the Tier 1 email]
Body (75-100 words):
- Direct acknowledgment: "You haven't been back in a week"
- Ask the honest question: "What's getting in the way? Would a different workflow help?"
- Reminder of what they're missing (be specific — what outcome are they NOT getting?)
- Two options: return and try [specific thing] OR tell us what's missing (reply)
```

**Tier 3: Pre-Cancellation (visited billing/cancel page)**

```
Write an immediate pop-up or exit email for a subscriber visiting the cancellation page.

Goal: understand why they're cancelling + offer alternatives before they leave
Timing: shown as they try to cancel (in-product) OR sent immediately by email trigger

For the in-product pop-up:
1. Acknowledge they're considering cancelling (don't be defensive)
2. Ask one question: "Before you go — what wasn't working?"
3. Offer a pause option (if you have one) or downgrade instead of cancel
4. If they answer, offer a specific fix ("You mentioned X — here's how we just addressed that")

For the email (if you catch it after they leave):
- Same tone, 75 words max
- One question, one offer, one human
```

---

## Step 5: Exit Surveys

When someone does cancel, get the data. A brief exit survey is the most valuable market research you can do.

**Timing:** Trigger immediately after cancellation.

**Format:** 3 questions max (response rates drop dramatically after 3).

```
Write a 3-question exit survey for [product] cancellation.

Question 1: Why did you cancel? (multiple choice + "other")
Options: [Too expensive / Missing features I need / Not getting the ROI / Don't have time to use it / Switching to something else / Other]

Question 2: What would have made you stay?
[Open text, 1-3 sentences]

Question 3: Would you recommend [product] to a friend or colleague who needed [core use case]?
[Yes / Maybe / No]

Introduction (2 sentences): genuine, not corporate, asks them to help you improve
Thank you (1 sentence): honest, not "Your feedback is invaluable to us"
```

Track exit survey responses in a spreadsheet. After 20-30 responses, patterns emerge. The top 2-3 cancellation reasons are your product roadmap and your marketing messages.

---

## The Anti-Churn Playbook: Week 1

In your first week post-launch, do this manually for every churned user:

1. **Email them personally** (not automated): 2-3 sentences, ask what went wrong
2. **Offer to hop on a call**: 15 minutes to understand their experience
3. **Actually fix the problem**: if 3 users mention the same friction, fix it

At early stage, churning users are your most valuable feedback source. Treat them accordingly.

---

## Revenue Recovery: Paused Subscriptions

Instead of cancellation, offer a "pause" option. Let subscribers pause for 1-3 months and pick up where they left off.

Benefits:
- Reduces cancellation rate (some users would pause if they could)
- Creates a pool of warm return customers
- Revenue loss is temporary, not permanent

Stripe supports subscription pauses natively. Configure in Stripe Dashboard → Billing → Customer Portal → Allow pausing subscriptions.

---

## Deliverable

- Engagement metrics defined
- Usage tracking events instrumented
- At-risk user cohorts created in PostHog
- Three intervention email templates written
- Exit survey created and triggered on cancellation
- Pause subscription configured in Stripe

---

## What's Next

With your conversion infrastructure complete, move to [Day 5: Launch](../5-launch/README.md) — where you execute a coordinated public launch.
