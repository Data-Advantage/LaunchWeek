[Back to Day 4: Convert](README.md)

# A/B Testing Your Landing Page

Run your first conversion test. Learn what works before you scale traffic.

## Why This Matters

A/B testing removes the guesswork from marketing. Instead of debating which headline is better in a Slack thread, you run the test and let your visitors decide.

A 20% improvement in landing page conversion doubles the value of every traffic channel you have. If your current conversion rate is 2% and you improve it to 2.4%, that's a 20% improvement — and every future visitor is worth 20% more.

At early stage, you don't have enough traffic for statistically significant tests on everything. But you don't need perfect statistics to learn. You need disciplined testing to build intuition about what resonates with your audience.

---

## What to Test First

Not all tests are equal. The highest-impact tests in order:

**1. Headline (highest impact)**
The headline determines whether visitors read anything else. A 10% improvement in headline engagement can improve overall conversion 5-15%.

**2. CTA text (high impact)**
"Start free trial" vs. "Get instant access" vs. "Try it free" — these small changes can move conversion 5-10%.

**3. CTA placement / prominence**
Above the fold vs. below, button size, color against your design system.

**4. Hero image / product visual**
A product screenshot vs. an abstract image vs. a diagram vs. a video.

**5. Pricing tier emphasis**
Which tier is highlighted as "recommended."

**6. Social proof placement**
Testimonials above vs. below the fold, before vs. after features.

Test in this order. The headline test comes first because it has the highest potential impact and the quickest learning.

---

## Running an A/B Test (Without Dedicated Testing Software)

At early stage, you often don't have the traffic to run a proper split test with statistical significance. Here are your options:

**Option A: Week-over-week test**
Run version A for one week, version B the next week. Not statistically perfect, but gives directional signal.

**Option B: Traffic segment test**
Show version A to mobile visitors and version B to desktop visitors (or vice versa). Only valid if the segments behave similarly.

**Option C: PostHog feature flags**
PostHog has built-in A/B testing / feature flags. You can serve different headlines to different users and track conversion for each.

**Option D: Vercel Edge Config**
If you're on Vercel, you can use Edge Config to run A/B tests at the edge without client-side rendering issues.

**Recommendation for launch:** Use PostHog feature flags. It's free, integrates with your existing analytics, and gives you proper user-level tracking.

---

## Setting Up a PostHog A/B Test

```javascript
// In your landing page component
import { useFeatureFlagVariantKey } from 'posthog-js/react'

export function HeroSection() {
  const variant = useFeatureFlagVariantKey('headline-test')

  const headlines = {
    control: "Publish SEO-optimized content in half the time",
    variant_a: "Go from keyword to published in under an hour",
    variant_b: "Content that ranks — built for teams without a content team",
  }

  const headline = headlines[variant] ?? headlines.control

  return (
    <section>
      <h1>{headline}</h1>
      {/* ... */}
    </section>
  )
}
```

In PostHog:
1. Create a new Experiment
2. Name it (e.g., "Headline Test - March")
3. Define variants (control + 1-2 variants)
4. Set the goal metric (signed_up event)
5. Launch the experiment

---

## Your First Test: Headline

Generate 3 headline variations to test:

```
I need to A/B test my landing page headline.

My current headline: [current headline]
My value proposition: [value prop]
My ICP: [description]
Primary CTA: [what you want visitors to do]

Generate 3 alternative headlines that take different approaches:

Variant A: Lead with the outcome (what they get)
Variant B: Lead with the problem being solved (what they escape)
Variant C: Lead with the differentiator (what makes us different)

Each headline: 6-12 words, specific, no jargon, no superlatives.
For each: explain the hypothesis (why would this version convert better than control?)
```

---

## Statistical Significance — A Practical Guide

The standard for statistical significance in A/B testing is 95% confidence. This means you're 95% sure the difference you're seeing is real, not random noise.

**The minimum sample size:** For a 2% baseline conversion rate and detecting a 20% improvement (to 2.4%), you need approximately 4,000-5,000 visitors per variant for 95% confidence.

Most early-stage SaaS don't have this traffic. So how do you run tests?

**Option 1: Accept lower confidence**
A 70-80% confidence test still gives you useful signal. You might be wrong 20-30% of the time, but you're still learning faster than not testing.

**Option 2: Test bigger changes**
Instead of testing two similar headlines, test fundamentally different approaches. Bigger changes produce bigger signal that's visible with less traffic.

**Option 3: Track leading indicators**
Instead of testing for signups (takes a long time to accumulate), test for scroll depth, time on page, or CTA hover events. These correlate with conversion and accumulate faster.

**Option 4: Use qualitative methods alongside quantitative**
Show both versions to 5-10 users (in person or via UserTesting) and ask which one makes them want to sign up. Qualitative feedback is directional and requires no statistical significance.

---

## The Testing Cadence

**At early stage (under 1K monthly visitors):**
- Focus on qualitative methods (user interviews, session replay)
- Run one test per month maximum
- Don't optimize prematurely — focus on traffic

**At growth stage (1K-10K monthly visitors):**
- Run 2-3 tests per month
- Focus on headline, CTA, and social proof placement
- Start building a test history

**At scale (10K+ monthly visitors):**
- Full A/B testing program with proper statistical rigor
- Multiple concurrent tests on different page sections
- Dedicated conversion rate optimization resources

---

## What Not to Test

**Don't test:**
- Colors (low impact relative to copy)
- Minor wording differences ("Try" vs. "Test") — too similar to reach significance
- Things you can't act on (if both variants convert the same, you've learned nothing)
- Multiple things simultaneously (you won't know which caused the change)

**Do test:**
- Value proposition framing (outcome vs. problem vs. differentiator)
- Social proof type and placement
- CTA offers (free trial vs. money-back guarantee vs. no credit card)
- Pricing display (monthly by default vs. annual by default)

---

## Interpreting Results

When a test produces a winner:
1. Ship the winner
2. Document what you learned and why you think it worked
3. Generate a new hypothesis based on the insight
4. Run the next test

When a test is inconclusive:
1. Check: did you have enough traffic?
2. Check: was the difference between variants big enough to detect?
3. Consider: is this question better answered qualitatively?

Build a testing log. Over time, your testing history teaches you what your specific audience responds to — which is worth more than any A/B testing framework.

---

## Deliverable

- One A/B test configured and running in PostHog
- 3 headline variants written and ready to test
- Testing hypothesis documented
- Testing calendar (what to test next)

---

## What's Next

With a test running, move to [Onboarding Flow Design](onboarding-flow.md) — because improving the conversion rate from signup to first value is usually the highest ROI work you can do.
