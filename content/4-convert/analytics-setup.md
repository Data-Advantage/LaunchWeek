[Back to Day 4: Convert](README.md)

# Analytics Setup (Day-One Dashboard)

Set up analytics and build a 5-metric dashboard. Know what's working before you scale anything.

## Why This Matters

"We need more traffic" is the most common and least useful diagnosis in early-stage marketing. Most products that are failing for lack of traffic are actually failing for lack of conversion. More traffic doesn't fix a broken funnel.

Analytics tell you which problem you actually have. Without analytics, you're optimizing by intuition. With analytics, you're optimizing by data.

Set up analytics on day one — before you have traffic — so you have a clean baseline and historical data from launch.

---

## The 5 Metrics That Matter at Launch

At early stage, most analytics dashboards show too much. This creates noise and analysis paralysis.

Track these five and only these five to start:

**1. Unique Visitors**
How many distinct people are reaching your site? This is your top-of-funnel health metric.

**2. Signup Rate**
What percentage of visitors start a free trial or create an account? (Target: 3-5% for SaaS with paid traffic; 1-2% is common for organic.) This is your landing page effectiveness metric.

**3. Activation Rate**
What percentage of signups complete the core action that produces value? ("Aha moment" completion.) This is your onboarding effectiveness metric.

**4. Conversion to Paid**
What percentage of activated users convert to a paid plan? This is your product-market fit signal.

**5. Revenue (MRR)**
Monthly Recurring Revenue. The output metric everything else flows into.

These five form a funnel: Visitors → Signups → Activated → Paid → Revenue. Each ratio tells you where you're leaking.

Use [MetricGen.ai](https://metricgen.ai) to model out what improving each ratio does to your revenue. Seeing "if activation rate goes from 20% to 40%, MRR doubles" makes prioritization obvious.

---

## Step 1: Choose Your Analytics Stack

You need two types of analytics:

**Product analytics** (user behavior): PostHog (recommended), Mixpanel, or Amplitude
- Tracks what users do inside your product
- Funnel analysis
- Session replay (watch real user sessions)

**Website analytics** (traffic): Vercel Analytics or Google Analytics 4
- Page views, traffic sources, geographic data
- Performance metrics

**Recommendation for launch:** PostHog + Vercel Analytics. Both have free tiers sufficient for early-stage.

---

## Step 2: Install PostHog

PostHog is the recommended product analytics tool for SaaS launches. It's open-source, has an excellent free tier (1M events/month), and includes session replay — which is invaluable for understanding why users churn.

**Installation (Next.js):**

```javascript
// app/providers.tsx
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: 'identified_only',
      capture_pageview: false,
    })
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
```

**Track key events:**

```javascript
// When a user signs up
posthog.capture('user_signed_up', {
  plan: 'free_trial',
  source: document.referrer,
})

// When a user completes the activation action
posthog.capture('activation_completed', {
  time_to_activation_minutes: timeFromSignup,
})

// When a user converts to paid
posthog.capture('converted_to_paid', {
  plan: selectedPlan,
  mrr: planPrice,
})
```

**The minimum events to track from day one:**
- `page_viewed` (auto-captured)
- `signed_up`
- `[core_action]_completed` (whatever your activation event is)
- `trial_started`
- `payment_completed`

---

## Step 3: Build Your Funnel

In PostHog, create a conversion funnel with these steps:

1. Viewed landing page
2. Signed up
3. Completed activation action
4. Started trial (or converted to paid if no trial)
5. Payment completed

This funnel shows you exactly where users are dropping off. If 100 people visit and 5 sign up and 1 activates — the problem is onboarding (70% drop-off at activation). If 100 visit and 40 sign up and 8 activate and 0 pay — the problem is conversion from free to paid.

---

## Step 4: Install Session Replay

PostHog's session replay is one of the highest-ROI tools for early-stage products. You can literally watch users try to use your product and see exactly where they get confused.

Enable in PostHog settings → Session Recording → Enable for all users.

**How to use session replay:**
- Watch 10 sessions of users who signed up but didn't activate
- Note where they pause, click multiple times, or navigate away
- These are your onboarding friction points
- Fix the top 3 friction points before running any other optimization

This is worth more than any A/B test at early stage. You'll see problems you never imagined.

---

## Step 5: Set Up Your Dashboard

In PostHog, create a dashboard with these 5 charts:

**Chart 1: Weekly unique visitors (line chart)**
Source: website analytics or PostHog page views

**Chart 2: Signup rate (funnel)**
Visitors → Signups, shown as percentage

**Chart 3: Activation rate (funnel)**
Signups → Activated, shown as percentage

**Chart 4: Paid conversion (funnel)**
Activated → Paid, shown as percentage

**Chart 5: MRR (line chart)**
Pull from Stripe or your payment processor

Bookmark this dashboard. Open it every Monday morning before you do anything else.

---

## Step 6: Set Up Traffic Source Tracking

You need to know where your signups are coming from — not just your visitors.

**UTM parameters:** Add UTM parameters to every link you share:
- `?utm_source=twitter&utm_medium=social&utm_campaign=launch`
- `?utm_source=newsletter&utm_medium=email&utm_campaign=week1`
- `?utm_source=reddit&utm_medium=community&utm_campaign=r_marketing`

PostHog automatically captures UTM parameters when you use them consistently.

**What to track:**
- Which channels drive the most signups (not just visitors)
- Which channels drive the highest activation rate
- Which channels drive the highest paid conversion rate

The channel that converts to paid at the highest rate is where you should invest more — even if it's not your highest-traffic channel.

---

## Google Search Console Integration

If you set up GSC on Day 2, you now have data flowing in. Connect the dots:

- Which keywords drive the most signups (not just clicks)
- Which pages have high traffic but low signup conversion (optimization targets)
- How your content is performing vs. competitors in search

Use [MetricGen.ai](https://metricgen.ai) to model the relationship between your content investment and revenue outcomes. This helps you prioritize: which content investment has the clearest path to revenue?

---

## Weekly Analytics Review Ritual

Every Monday, spend 30 minutes on this review:

1. **Open the 5-metric dashboard** — which metrics changed week-over-week?
2. **Watch 3 session replays** — 1 from a converted user, 1 from a churned user, 1 from someone who didn't activate
3. **Check traffic sources** — which channels are driving the most signups this week?
4. **Identify the top constraint** — which ratio in the funnel is lowest? That's your priority this week.
5. **Write one insight** — one specific thing you learned from this week's data

This ritual takes 30 minutes and prevents the common founder mistake of optimizing based on intuition rather than data.

---

## Deliverable

- PostHog installed and tracking key events
- Vercel Analytics installed
- 5-metric dashboard built
- Conversion funnel configured
- Session replay enabled
- UTM parameters implemented on all external links

---

## What's Next

With analytics running, move to [A/B Testing Your Landing Page](ab-testing.md) — where you systematically improve your conversion rate.
