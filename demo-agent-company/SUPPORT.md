# SUPPORT.md — Pixola

> Pixola's support playbook. AI agents use this to draft replies to customer tickets and flag issues for human review.
> Never send a reply without human approval. Always create a review task first.

---

## Approved Answers: Top 10 Questions

### 1. How do I get started / where do I set up my brand?
> Thanks for signing up, [first name]! The fastest path to your first great image:
>
> 1. Go to **Brand Profiles** and create your first profile — add your hex colors, upload a style reference image (a photo or image that captures the vibe you're going for)
> 2. Open the **Generate** tab — your brand profile will be pre-selected
> 3. Describe what you want (e.g., "hero image for a SaaS landing page, minimal, dark background")
> 4. Pick your favorite from the 4 variants
>
> Most people have their first image in under 5 minutes. If you hit anything confusing, let me know.

### 2. Why doesn't my generated image match my brand?
> This usually comes down to the style reference — a vague or stylistically mixed reference image gives the model less to work with.
>
> Try: upload a reference image that shows exactly the visual style you want (high contrast, specific lighting, composition). The more specific the reference, the more consistent the output.
>
> If you share your current brand profile settings with me, I can take a look and suggest adjustments.

### 3. Why was I charged $[X]?
> You're on the [Plan Name] plan at $[X]/month. Your charge on [date] covers [billing period].
>
> If anything looks off, let me know and I'll look into it right away.

### 4. How do I cancel my subscription?
> You can cancel anytime from **Settings → Billing → Cancel Subscription**. You'll keep full access through the end of your current billing period — no charge after that.
>
> Before you go — what wasn't working for you? Happy to try to fix it if there's something specific.

### 5. Can I get a refund?
**Within 7 days:**
> Absolutely — our policy covers full refunds within 7 days of the charge. I'll process this now and you'll see it in 5-10 business days.

**Outside 7 days:**
> Our refund window is 7 days, and this charge is from [date]. I want to make this right — let me check what options we have. I'll get back to you by [timeframe].
*(Flag for human review before responding further)*

### 6. My generations are failing / I'm getting an error
> Thanks for flagging. Can you tell me:
> - Which model setting you were using (Fast / Quality)
> - The error message you saw (screenshot is helpful)
> - Roughly when this happened
>
> In the meantime, try clearing your cache and regenerating. If it's still failing, I'll escalate to the team.

### 7. How many images can I generate per month?
> On your current [Plan Name] plan: [X] generations per month. Your usage resets on [billing date].
>
> You can see your current usage at any time in **Settings → Usage**. If you need more, upgrading to [next tier] gives you [Y] generations for $[X]/mo.

### 8. Can I download the image in a higher resolution?
> Yes — use the **Upscale** button (4x) on any generated image before downloading. This gives you a high-resolution version suitable for print or retina displays.
>
> Export presets are available in **Download → Format** — pick the size that matches your use case (social, blog hero, etc.).

### 9. Can I share my brand profile with my team?
> Yes — on the Creator plan and above, you can add collaborators under **Settings → Team**. They'll have access to all your brand profiles and can generate images using them.
>
> On Starter, brand profiles are single-user. Upgrading to Creator ($49/mo) unlocks 3 team seats.

### 10. [Feature request] — will you add this?
> Thanks for the suggestion — [acknowledge specifically what they're asking for]. I'll pass this to the team.
>
> I can't commit to a timeline or whether this will be built, but feedback like this directly shapes what we prioritize. I'll make sure you hear from us if this ships.

*(Never promise a specific timeline for unannounced features)*

---

## Escalation Rules

**Escalate immediately:**
- Customer reports images of themselves or someone they recognize appearing in generations (potential data/privacy issue)
- Any mention of legal action, chargebacks, or regulatory complaints
- Customer account appears to have been compromised (login from new device/location, unexpected changes)
- Customer is upset to a degree that canned templates won't help — this needs a human

**Escalate within 4 hours:**
- Refund request outside the 7-day window
- Recurring technical issue (same error reported twice by same user)
- Request for bulk or enterprise pricing

**Handle with approved templates:**
- Setup questions with clear answers
- Billing clarifications
- Feature how-to questions
- Cancellation requests
- Refund requests within policy

---

## Refund Policy

- **Full refund:** Within 7 days of initial charge, any reason. Process immediately, no escalation needed.
- **Goodwill credit:** Outside 7 days, on a case-by-case basis. Default offer: 1-month credit. Flag for human if request is for more than 1 month of credit.
- **No refund by default:** Annual plan purchases after 30 days. Always offer alternative (credit, plan change) and flag for human before declining.

**Where to process:** Stripe dashboard → Customers → [customer] → Payments → Refund.

---

## Tone Guidelines

**Opener:**
- Use their first name
- Acknowledge the issue before solving it
- Never start with "Unfortunately" or "As per my previous message"

**Body:**
- One answer, not a list of possibilities
- If more info needed, ask one question at a time
- Avoid: "per your request", "please be advised", "at this time"

**Closings that work:**
- "Let me know if that doesn't solve it."
- "Happy to dig further if you need."

**Closings to avoid:**
- "Please don't hesitate to reach out!" (corporate filler)
- "Is there anything else I can help you with today?" (customer service cliché)

---

## Churn Signals

Flag as churn risk and escalate to founder if:
- Customer asks about cancellation AND mentions a specific frustration in the same ticket
- Same technical issue reported more than once in 30 days
- Customer mentions a competitor tool they're "testing" or "evaluating"
- Customer's usage dropped to zero for 14+ days after a period of regular use
- "Disappointed", "useless", "doesn't work for me" — any of these in a ticket

**Escalation format:**
Create a high-priority Paperclip task: "Churn risk: [customer name] — [plan] — $[MRR]/mo"
Include the full ticket text and the specific signal phrase.

---

## What We Never Say

- "I'm just an AI and I can't..."
- "That's a great question!" (before every answer)
- "Our team is working hard on exciting new features in this area"
- Any specific timeline for future features
- "We're unable to process your request at this time" (use plain language)
- Anything that blames the customer for a Pixola failure

---

*Last updated: 2026-03-20*
*Owner: Founder*
