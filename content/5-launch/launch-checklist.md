[Back to Day 5: Launch](README.md)

# Launch Day Checklist

The step-by-step playbook for a coordinated SaaS launch. Run this the morning of launch.

## The Launch Philosophy

A good launch is not one moment — it's a 72-hour coordinated effort across multiple channels. Your goal is to create enough initial signal (signups, engagement, comments) that the platform algorithms amplify your reach, creating a compounding effect.

Coordinate the timing: get everything ready before you press publish anywhere. When you launch, launch everywhere at roughly the same time.

---

## T-48 Hours: Pre-Launch Prep

**48 hours before launch, verify:**

### Product
- [ ] Signup flow works end-to-end (test it yourself, then have someone else test it)
- [ ] Payment flow works (test with Stripe test card)
- [ ] Onboarding sequence sends correctly
- [ ] All CTAs on landing page point to the right destination
- [ ] Error states show useful messages (not blank screens)
- [ ] Mobile experience works on iOS and Android
- [ ] Page load time under 3 seconds (test on Vercel)
- [ ] SSL certificate active
- [ ] Custom domain live and working

### Analytics
- [ ] PostHog tracking key events
- [ ] Vercel Analytics installed
- [ ] Google Search Console verified
- [ ] Sitemap submitted to GSC
- [ ] UTM parameters on all external links

### Content
- [ ] Landing page copy final
- [ ] Pricing page final
- [ ] Blog posts published
- [ ] Social profiles optimized and updated
- [ ] Launch announcement posts drafted (don't publish yet)
- [ ] Email sequences loaded in your email platform

### Distribution
- [ ] Community accounts have established presence (Phase 2 contributors in relevant communities)
- [ ] HN "Show HN" post drafted
- [ ] Press list finalized with personalized outreach ready
- [ ] Partner notifications ready (if any partnerships are live)
- [ ] Waitlist email ready to send if you have one

---

## T-1 Hour: Final Checks

**One hour before launch:**

- [ ] Do a final end-to-end test (sign up, activate, test all features)
- [ ] Check your email platform is set up correctly
- [ ] Confirm your analytics is live
- [ ] Have your social content queued and ready (but not published)
- [ ] Clear your schedule for the next 6 hours
- [ ] Eat something. This will be intense.

---

## Launch Hour: The Sequence

Execute in this order. The first 2 hours set the tone.

**Hour 1: Ship the core launch**

```
0:00 — Publish your landing page / flip the switch
0:05 — Send waitlist announcement email (if you have a list)
0:10 — Post to Twitter/X (personal account + product account)
0:15 — Post to LinkedIn (personal account)
0:20 — Submit to Hacker News ("Show HN: [Product] — [one line description]")
0:30 — Post to Indie Hackers (both the main feed and relevant groups)
0:35 — Post to Reddit (most relevant subreddit first)
0:45 — Post to any Discord communities you're active in
0:50 — Notify personal network (email or direct message to people who'd genuinely care)
1:00 — Check all channels: respond to every early comment, question, or reply
```

**Hour 2-4: Engage and amplify**

```
2:00 — Respond to all HN comments (this is crucial — HN rewards engagement)
2:30 — Respond to all Reddit comments
3:00 — Send personal DMs to 10-15 people in your network with "I just launched — would love your honest take"
3:30 — Check analytics: signups, traffic sources, which channel is driving most
4:00 — Post a "2-hour update" thread on Twitter/X (building in public — this gets secondary engagement)
```

**Hours 4-6: Secondary amplification**

```
4:00 — If HN is gaining traction, post a follow-up comment with more context
4:30 — Reach out to any journalists / creators you pitched
5:00 — Post in secondary communities (second subreddit, second Discord)
5:30 — Share the day's results with your personal network via update post
6:00 — Write a "Launch Day" blog post (your experience so far) — publish it
```

---

## Launch Day: What to Monitor

Open these tabs and check every 30 minutes:

**Analytics Dashboard:**
- Unique visitors (real-time)
- Signups (how many, from which source)
- Activation events

**HN:**
- Comment rank (your submission)
- New comments (respond to all)

**Reddit:**
- Post upvotes
- New comments (respond to all)

**Twitter/X:**
- Mentions and replies
- Retweet amplification

**Email:**
- Opens and clicks on your launch email

---

## The Building-in-Public Update

Throughout launch day, post updates on Twitter/X and LinkedIn. People follow along with founder launch stories — it creates secondary engagement and humanizes your product.

```
Write a "Building in Public" launch update post for hour 2 of [product]'s launch.

Format: Twitter thread or LinkedIn post
What to include:
- Real-time update (how it's going, specific numbers if you have them)
- One thing that surprised you
- One thing you're grateful for
- What you're focused on right now

Tone: [brand voice adjectives] — honest, direct, human
Don't: make it a pitch. Make it a story.
```

Post these updates at:
- Hour 2 (first real data)
- Hour 6 (end of first day)
- Hour 24 (next morning update)
- Hour 48 (end of first weekend if you launched midweek)

---

## Handling Criticism

You will receive negative comments. Plan for this now so you're not caught off guard.

**The categories:**

**1. Genuine criticism of the product** → Thank them, acknowledge the specific issue, note that it's on your roadmap (if it is)

**2. Price criticism ("too expensive")** → Acknowledge the concern, explain the value, mention the trial. Don't apologize for your price.

**3. "X already does this"** → Acknowledge competitors graciously, explain your differentiation calmly, without disparaging them

**4. Generic negativity / trolling** → Don't engage. On HN, sometimes a thoughtful non-defensive response is right. On Twitter, ignore.

**5. Feature requests** → Thank them, note the feedback, don't promise timelines

Never argue. Never be defensive. Criticism is a gift — treat it that way publicly, process your feelings privately.

---

## Launch Day: The Non-Negotiables

**Respond to every comment on launch day.** No exceptions. Early community engagement is the algorithm signal that drives continued amplification.

**Don't disappear after posting.** Some founders post and go silent. This kills momentum. You need to be present and engaging for the first 6 hours.

**Track every signup's source.** When signups come in, note which channel they came from. This tells you where to invest more energy.

**Screenshot everything.** Your HN rank, your first signups, your first Twitter mention. You'll want this for the launch retrospective and future content.

---

## Deliverable

- Launch day executed with all channels coordinated
- All comments responded to within first 6 hours
- Building-in-public updates posted at hours 2 and 6
- Real-time metrics tracked in dashboard
- Launch day screenshots saved

---

## What's Next

Move to [Indie Hackers and Community Launch](indie-hackers.md) — the strategy for sustained community traction beyond launch day.
