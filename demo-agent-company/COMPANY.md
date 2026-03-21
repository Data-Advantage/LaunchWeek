# COMPANY.md — Pixola

> This is the master context file for Pixola's AI agents. Every agent reads this before every task.

---

## Mission

We exist to help indie makers and small creative teams generate stunning, brand-consistent images without hiring a designer or learning complex tools.

The creative tools market assumes you either have a designer on staff or you're happy with generic stock photos. Neither is true for the 5 million indie makers, solo founders, and small content teams who need original visuals at scale. Pixola exists for them.

---

## Product

**Pixola** — AI image generation built for brand consistency.

**What it does:**
Users define their visual brand once — color palette, style reference, subject guidelines — and Pixola applies that brand context to every generation. Create a hero image, a social graphic, and a product screenshot that all look like they came from the same design system. Without a designer.

**Key features:**
- **Brand DNA**: Define your palette, style, and subjects once. Every generation inherits it automatically.
- **One-click variants**: Generate 4 variations of any image in 15 seconds. Pick the best one.
- **Smart upscaling**: 4x upscale with detail preservation for print and retina screens.
- **Team sharing**: Share brand configurations with collaborators — no setup required on their end.
- **Export presets**: Social sizes (1:1, 16:9, 9:16), blog hero, product screenshot — formatted and ready.

**What we don't do:**
- Video generation
- Logo design (we help with the surrounding visuals, not the logo itself)
- Complex illustration workflows (we're optimized for speed and brand consistency, not bespoke illustration)

**Technology:**
Built on Fal.ai for fast inference, with our own brand-conditioning layer. Frontend is Next.js + Convex, hosted on Vercel.

---

## Ideal Customer Profile (ICP)

**Primary persona: The Solo Content Creator**

- **Role:** Solo founder, indie maker, content creator, or 1-2 person startup
- **Company type:** Pre-seed startup, bootstrapped SaaS, or creator business
- **Industry:** Horizontal — any founder who ships content (SaaS, e-commerce, media)
- **Company size:** 1-5 people, no dedicated design function

**Their situation:**
They're shipping product, writing content, and running marketing — all at once. They need visuals for every blog post, every social post, every landing page update. Canva doesn't have what they want. Stock photos feel generic. Midjourney requires prompt engineering expertise they don't have time to develop. And hiring a designer for one-off images is expensive and slow.

They've tried AI image generation before. The output was good for one image, but they couldn't reproduce the same "look" for the next one. So everything feels inconsistent. They've given up on brand consistency as a goal.

**Their goals:**
- Ship content faster without bottlenecking on visuals
- Look more polished than their competitors without a design budget
- Spend less than 5 minutes per image, from idea to final export

**Their objections:**
- "I've tried AI image tools before and the quality is inconsistent" — Pixola's brand DNA system is specifically designed to solve this. We address it directly in onboarding.
- "I don't want to spend time on prompts" — Our smart templates and brand presets mean you describe the concept, not the style. The brand does the rest.
- "I'm not sure this will match my existing brand" — First generation is free, no credit card required. They can verify it works before committing.

**Language they use:**
- "I just need something that looks professional"
- "I don't have a design budget"
- "The AI images I've made look weird or generic"
- "Everything has to match but I don't have time to make it match"
- "I need this for the blog post going out tomorrow"

---

## Pricing

| Tier | Price | What's Included |
|------|-------|-----------------|
| Starter | $19/mo | 200 generations/mo, 1 brand profile, basic export sizes |
| Creator | $49/mo | 1,000 generations/mo, 5 brand profiles, all export sizes, team sharing (3 seats) |
| Studio | $149/mo | Unlimited generations, 20 brand profiles, full team (10 seats), priority inference |

**Positioning rationale:**
Starter catches the "just trying it" segment. Creator is our primary target — the indie maker who needs enough volume to cover their weekly content cadence. Studio catches agencies and small teams.

**Free trial:**
7-day free trial on Creator tier. No credit card required. Converts to $49/mo or drops to a free tier (25 generations/mo, 1 brand profile).

---

## Competitive Landscape

| Competitor | Their strength | Our differentiator |
|-----------|----------------|-------------------|
| Midjourney | Image quality ceiling | Brand consistency system — MJ requires prompt re-engineering every time |
| Canva AI | Distribution and templates | We generate original images; Canva remixes stock and templates |
| DALL-E (ChatGPT) | Integration with chat | Brand DNA persistence across sessions — ChatGPT forgets your brand |
| Adobe Firefly | Enterprise brand features | Price and simplicity — Firefly's brand features require an Enterprise plan |

**Our unfair advantage:**
The brand DNA layer. Competitors offer one-shot generation. We offer a persistent brand memory that applies to every image you ever make. This is technically differentiated and creates a switching cost as your brand library grows.

---

## Brand Voice

**Five adjectives that define our voice:**
1. **Direct** — We say what we mean. "Generate brand-consistent images in 15 seconds" not "Empower your creative vision."
2. **Confident** — We know who we are and what we're for. We don't hedge.
3. **Honest** — We don't overpromise. If something's hard, we say so.
4. **Peer-to-peer** — We sound like a smart founder talking to another founder, not a marketing team talking to a prospect.
5. **Specific** — We use real numbers. "5 minutes" not "fast". "200 generations" not "plenty."

**Do:**
- Lead with the outcome the reader gets
- Use the language in "their language" section
- Be concrete: "your brand's colors, fonts, and style" not "your brand identity"

**Don't:**
- "Seamless", "powerful", "robust", "cutting-edge", "game-changing"
- Start with "We believe..." or "Our mission is..."
- Write paragraphs that could apply to any SaaS

---

## Hard Limits

- Never claim specific performance metrics we haven't validated (e.g., "guaranteed to rank #1")
- Never compare to Midjourney or Adobe with specific quality claims — focus on our differentiation, not their weakness
- Never offer refunds outside the stated policy without board approval
- Never mention our underlying model providers (Fal.ai) in customer-facing content — our brand is Pixola, not "powered by Fal.ai"
- Never publish pricing changes without board sign-off
- Never claim enterprise-readiness features we haven't shipped

---

*Last updated: 2026-03-20*
*Owner: CEO*
