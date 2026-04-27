[Back to Day 5: Launch](README.md)

# Launching with a Waitlist

Most AI companies in 2026 launch a waitlist before they launch the product. Done right, the waitlist becomes a list of validated, warm leads who are ready to convert in week one. Done badly, it's a graveyard of expired curiosity.

This page is the playbook: when to use one, how to build it, what conversion rate to expect, and which mechanics actually move the needle.

## When a Waitlist Helps — and When It Hurts

**Use a waitlist when:**

- The product isn't ready for self-serve onboarding yet, but the marketing engine is. You want to start collecting attention before the build is finished.
- You expect demand spikes that could break the experience for new users (compute-heavy AI features, scarce GPU capacity, manual onboarding steps).
- You want to validate the offer with real signups before you finalize pricing or features. Notion AI famously used its 1M-signup waitlist to pivot from usage-based pricing to flat tiers before the public launch — the waitlist showed them the buyers.
- You're doing a launch announcement on Hacker News, Product Hunt, or X. A waitlist gives you a "we're live, you're in" moment that converts better than "here's a new product, please sign up."

**Skip the waitlist when:**

- The product is finished and self-serve onboarding works. A waitlist is friction that converts a paying-ready user into a maybe-someday user.
- You can't keep the list warm with consistent communication for at least four weeks. Interest decays fast. By day 30, conversion rates drop off a cliff. By day 90, most signups have forgotten you exist.
- You're in a category where the customer expects to buy today (developer tools, productivity apps with mature alternatives). A waitlist signals "we aren't ready" and your competitor is.

The single best heuristic: **only run a waitlist if you have a credible launch date and a plan to communicate at least weekly between signup and launch.** If you can't commit to that, skip it and just build a "notify me" form for when you ship.

---

## What "Good" Looks Like in 2026

Realistic numbers for a well-designed waitlist page driving real traffic:

- **Visitor → email signup**: 15–35% on a focused, well-positioned page. Below 10% means the page isn't selling the value clearly.
- **Email signup → activated user (day 1 of launch)**: 30–50% if you nurture well, 10–20% if you go silent.
- **Activated user → paying customer**: same as your normal funnel — typically 5–15% for indie SaaS.

If 1,000 people land on your waitlist page, you should expect ~200 emails, ~80 activated users on launch day, and ~10 paying customers in week one. Those compound — each launch event (HN, PH, podcast) drops a fresh batch into the same funnel.

---

## The Stack

The minimum viable waitlist is one form, one list, and one email tool. Don't overbuild.

### Tools that actually work

| Tool | Use it for | Free tier? |
|---|---|---|
| **Tally** or **Typeform** | Embedded signup form, progressive profiling | Yes |
| **Beehiiv** | List management + drip emails + double opt-in | Yes (2,500 subs) |
| **Resend** + **Loops** | If you want to send transactional + lifecycle emails from your own backend | Yes (3K/mo Resend) |
| **Waitlister / GetWaitlist / Prefinery** | Done-for-you landing page with referral mechanics | Free up to ~100 subs |
| **Senja** | Collect testimonials from beta users to embed on the page | Paid |

The recommended stack for an autonomous-AI company in 2026:

1. **Beehiiv** for list + emails (newsletter-native, double opt-in built in, free to 2,500 subs)
2. **Tally** for the form, embedded on the landing page
3. **Resend** for transactional confirmations from your app
4. Optional: **GetWaitlist** if you want gamified referrals without writing them yourself

If you can run the same email list for both pre-launch waitlist and post-launch newsletter, do that. One list, two phases.

---

## The Landing Page

A waitlist page is a special-purpose landing page. Five things it must do, in order:

1. **State what the product is** in one sentence above the fold. "An AI [thing] for [audience]."
2. **Explain why now** — what's broken about the alternatives, what changed in AI to make this possible.
3. **Show, don't tell** — one screenshot, one demo GIF, or one short video. Not a deck.
4. **One CTA, one input field**: email. Don't ask for company size, role, use case, or anything else above the fold. You can ask after the email captures.
5. **Social proof** — early-user quotes via [Senja](https://senja.io), the count of people on the list, or named beta partners. If you don't have any of those yet, replace this section with a clear "what you'll get" list.

Use [FastWrite](https://fastwrite.ai) to draft and refine the page copy. Run it through your brand voice prompt and iterate until the headline reads inevitable rather than aspirational.

---

## Viral Mechanics That Actually Move the Needle

In order of effort-vs-impact:

- **Position-bump referrals** (works) — every signup gets a unique referral link; sharing bumps them up the queue. This is the Robinhood/Superhuman pattern. Tools like Waitlister and GetWaitlist build this in.
- **Share-to-skip-the-line** (works) — refer 3 friends, jump to the front. Same mechanic, framed differently for share-shy audiences.
- **Build-in-public updates on X / LinkedIn** (works long-term) — every milestone (signup count, beta release, feature unlock) becomes a post that drives more signups. Compounds over weeks.
- **Lottery / random selection** (mixed) — "we'll let in 10 random people every week" creates a reason to stay subscribed but doesn't pull new signups.
- **Paid ads to a waitlist page** (rarely works) — CAC is usually too high relative to a not-yet-shipped product. Skip until launch.

The mechanic alone doesn't make a waitlist viral. The product idea has to be share-worthy first. Mechanics amplify a working signal — they don't create one.

---

## The Pre-Launch Email Cadence

Waitlist signups go cold without communication. Here's the minimum cadence that keeps a list warm without burning it out:

**Week 0 (signup day)** — automatic confirmation email. State the product, the launch window, and what they should expect from you between now and launch.

**Week 1** — "behind the scenes" email. One screenshot or GIF of something you built that week. Three sentences max.

**Week 2** — "tradeoff we just made" email. One product decision and the reason. Builds trust that you're shipping a real thing.

**Week 3** — "early access for X" — segment a small group (top referrers, named partners) into a private beta. Tell the rest of the list it's happening.

**Week 4** — "ten days out" — set the launch date publicly. Tell them what they'll get on launch day.

**Launch day** — "you're in" email with a one-click activation link. This is the most important email in the entire sequence — it converts the warm list into actual users.

**Launch + 3 days** — "what's new since launch" with one tangible improvement. Catches anyone who didn't open on launch day.

If you can't commit to at least four touchpoints between signup and launch, the waitlist will not convert and you'd be better off without one.

---

## Common Failure Modes

**"We have 5,000 signups but launch is six months away."** Signups expire. By launch day, half won't remember they joined. Fix: ship a private beta to top-of-list within four weeks of signup, even if it's manual onboarding for ten people.

**"The page converts at 4%."** The headline isn't doing the work. Most waitlist pages that underperform are trying to explain too much. Fix: rewrite the hero as one sentence and remove every other section above the fold.

**"We have signups but no one converted on launch day."** No nurture cadence between signup and launch — the list went cold. Fix on the next launch: weekly emails minimum, daily during launch week.

**"Referral mechanic is live but no one's referring."** Three causes: nothing to gain (rewards too soft), audience doesn't share publicly, or product idea isn't share-worthy yet. Fix the underlying signal first; mechanics don't save it.

---

## When to End the Waitlist

The waitlist should end on launch day. Replace the form with the actual signup, set up a redirect from `/waitlist` to `/`, and add the previous waitlist subscribers to your normal post-launch email program.

Don't keep the waitlist open after launch as "early access." Either the product is ready or it isn't. A perpetual waitlist is a bad signal — it suggests you don't trust the experience to handle real users.

---

## Pre-Launch Waitlist Checklist

- [ ] Launch date set (committed publicly, not just internally)
- [ ] Landing page live with one CTA, one input field
- [ ] Form connected to email tool with double opt-in
- [ ] Confirmation email written and tested
- [ ] At least four pre-launch nurture emails drafted
- [ ] Launch day email drafted
- [ ] Referral mechanic enabled (if applicable)
- [ ] Analytics tracking signup → activation → paying funnel
- [ ] First 10 named partners or beta users invited inside week 4
- [ ] Plan for what `/waitlist` redirects to on launch day

---

## Related Reading

- [Launch Day Checklist](launch-checklist.md) — what to do the morning of launch
- [Launch Announcements](launch-announcements.md) — templates for the email you'll send when the waitlist converts
- [Product Hunt](product-hunt.md) — pairing a waitlist with a PH launch
- [Hacker News](hacker-news.md) — pairing a waitlist with an HN launch
- [Landing Page Copy](../1-position/landing-page-copy.md) — how to write the headline that actually converts visitors

[Back to Day 5: Launch](README.md)
