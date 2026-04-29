[Back to Day 1: Position](README.md)

# Name Your Product (And Live With It)

Naming is one of the most over-stressed and under-thought decisions early-stage founders make. Founders spend weeks deliberating, ask 30 friends what they think, change the name twice in the first six months, and end up with a result no better than what they would have picked in two days of disciplined work.

Bad names hurt. Generic names disappear in search. Hard-to-spell names die in word-of-mouth. Names that conflict with bigger companies invite trademark trouble. But the most common failure mode is not picking a bad name — it is being indecisive long enough that the lack of a name blocks every other launch decision.

This is the playbook to land on a name that survives the next five years, do it in a defined window, and stop second-guessing.

## Why Most Naming Processes Fail

Three patterns produce the typical bad outcome:

- **Choosing in committee.** Crowd-sourced naming votes converge on names everyone tolerates and no one loves. The name no one objects to is rarely the name that earns attention.
- **Optimizing for the wrong constraints.** "Available .com domain" is a real constraint, but most founders inflate it into a search criterion that filters out 90% of plausible names. In 2026, a `.ai`, `.io`, or `.co` is a perfectly fine answer; insisting on `.com` is a self-imposed handicap.
- **Treating naming as a marketing decision.** Marketing decisions are reversible (pivot the messaging); naming is functionally permanent (you live with it for years). The right framing: name as a contract with future-you.

The version that works is constrained: a 5-day decision window, a clear rubric, a small decision group (1-3 people), and an explicit acceptance of "good enough" rather than perfect.

## What You Are Building This Week

By the end of this work:

- A clear set of constraints (the rubric you'll use to evaluate names)
- A list of 30-50 candidate names generated against the rubric
- A shortlist of 5-8 names that pass the rubric
- A final choice, with the reasoning documented for future-you
- The .domain registered, the @social-handles claimed, the basic trademark check completed
- Permission to stop thinking about it

This guide pairs with [ICP](ideal-customer-profile.md) (the audience whose ear the name has to register on), [Value Proposition](value-proposition.md) (the name has to live next to the value prop without contradicting it), and [Brand Voice](brand-voice.md) (the name's tone is part of the brand voice).

---

## 1. Pick the Naming Pattern

Five naming patterns dominate AI / SaaS in 2026. Each has tradeoffs. Pick one upfront — narrows the search space dramatically.

```
I'm naming [product description]. My ICP is [audience]. My main competitor names are [list 3-5].

Help me pick a naming pattern from these five:

1. **Descriptive** — name describes what the product does (Mailchimp, FastWrite, GitHub Copilot)
   - Pros: instantly clear, easier SEO, shorter sales cycle on first explanation
   - Cons: less distinctive, harder to expand the product into new categories
   - Best for: focused single-feature products, especially in commodity categories

2. **Coined / made-up** — invented word, no inherent meaning (Stripe, Notion, Anthropic)
   - Pros: maximally distinctive, trademarkable, escapes search competition
   - Cons: requires more brand-building to load with meaning; harder to remember on first hear
   - Best for: products that aspire to define a category or expand beyond their initial scope

3. **Metaphorical** — borrows from a familiar object or concept (Slack, Sequoia, Tower)
   - Pros: memorable, evocative, easy to talk about, often easy to spell
   - Cons: must clear trademark + .com / .ai / .io conflicts; risk of stale or culture-bound metaphors
   - Best for: products with a single strong attribute the metaphor amplifies

4. **Acronym / initialism** — letters that stand for something (IBM, AWS, GPT)
   - Pros: short, professional, often available as a domain
   - Cons: dry, hard to differentiate, often forgettable
   - Best for: B2B-only products, technical infrastructure, where a less-marketable name still works

5. **Founder name + thing** — your name + a category word (Mailgun's founder pattern, Linear / Cursor / Lovable as compressed founder-feel names)
   - Pros: personal, trustworthy, easy to register
   - Cons: limits future products that don't fit the personal brand
   - Best for: founder-led products in early stage

For my specific product:
- Recommend ONE pattern with rationale
- For each pattern I rejected, name the specific reason (e.g., "Acronym is wrong because my buyer is non-technical")
- Tell me what naming patterns my competitors use — and whether I should match or contrast

Default if no strong reason: coined or metaphorical for products that may grow beyond a single feature; descriptive for hyper-focused single-feature tools.
```

The single most underrated rule: **pick the pattern, then generate names within the pattern.** Generating freely across all patterns produces a chaotic shortlist and decision paralysis. Constraint enables creativity.

---

## 2. Build the Rubric First

Before generating names, write the criteria you'll evaluate them against. The rubric prevents the late-stage emotional whiplash where one sounds great Tuesday and feels wrong Wednesday.

```
Build a 7-criterion rubric for evaluating my product name candidates.

For each criterion, define a 1-5 score:

1. **Clarity** — Does the name help a stranger guess what the product does within 5 seconds of hearing it? (5 = "yes, instantly"; 1 = "no, confusing")

2. **Memorability** — Could I tell a friend the name once and have them remember it 24h later? Test by saying the candidate name out loud to someone unfamiliar.

3. **Spell-ability** — Can someone hear the name and spell it correctly without seeing it written? (Lyft, Airbnb fail here; Stripe, Notion pass.) Critical for word-of-mouth distribution.

4. **Pronounceability** — Can someone read the name and pronounce it out loud without hesitation? Names that need correction in conversation lose momentum.

5. **Differentiation** — When I search "[name]" in Google, do I get a sea of unrelated results that bury me, or a clear signal? Names that already conflict with established products in adjacent categories tank long-term SEO.

6. **Domain + handle availability** — Is the .com / .ai / .io / .co available at reasonable cost (under $1k for a domain in 2026)? Are @[name] available on X / LinkedIn / GitHub / Discord?

7. **Trademark cleanliness** — Quick USPTO Trademark Search and EUIPO check: are there registered marks in the same class (typically International Class 9 for software / Class 42 for SaaS)? A "no" here is a hard cut, not a tradeoff.

Apply weights:
- Trademark cleanliness: hard cut (anything that fails this is out, regardless of other scores)
- Domain availability: 25% weight
- Memorability + Spell-ability + Pronounceability: 35% combined
- Clarity + Differentiation: 25% combined
- Plus 15% for the gut-feel "this fits the brand" check

Output: the rubric as a single 1-page doc I can score every candidate name against.
```

The trademark check matters more than founders think. A name that conflicts with an existing registered trademark in your class is a future cease-and-desist letter waiting. The check is free (USPTO TESS, EUIPO eSearch) and takes 10 minutes per candidate.

---

## 3. Generate 30-50 Candidates

The right way to generate is volume first, quality filter after. Most founders generate 5 candidates, fall in love with #2, and never run a real comparison. Force the volume.

```
Generate 30-50 candidate names for my product using my chosen [naming pattern from Section 1].

Generation prompts to use, run in batches:

Round 1: literal descriptive names (10-15 candidates)
- Combinations of the verb + object that captures my product's core action
- Examples for an AI content tool: WriteFast, ContentForge, DraftLab, PromptDesk, etc.

Round 2: pattern variants (10-15 candidates)
- For metaphorical: nouns from one specific domain (animals, tools, geography, mythology)
- For coined: 5-8 letter inventions, typically vowel-rich for pronounceability
- For founder + thing: my name combined with category words

Round 3: cross-language and -reference (5-10 candidates)
- Words from Latin, Greek, Japanese, Italian that capture a quality (e.g., "Linear" — clean, simple)
- Modified spellings of existing words (e.g., "Lyft," "Doordash")

Round 4: AI generation (5-10 candidates)
- Prompt Claude / GPT: "Generate 10 [naming pattern] names for [product description] that match these characteristics: [criteria from rubric]. Avoid: generic, hyphenated, longer than 8 letters, hard to spell."
- Cross-check AI suggestions against trademark and domain availability — AI tends to hallucinate availability.

For each candidate output:
- The name
- The naming pattern (descriptive / coined / metaphorical / acronym / founder)
- A 1-sentence rationale for why I included it

Don't pre-filter at this stage. Volume + diversity > quality. The rubric in Section 2 does the filtering after.

Output: a single list of 30-50 candidates, each on its own line, ready for evaluation.
```

The cross-language move is underused. Many of the best 2020s SaaS names ("Linear," "Notion," "Vercel") are mildly archaic English or pulled from another language. Adding a Latin-Greek-Italian-Japanese pass widens the search beyond the obvious English combinations everyone else has tried.

---

## 4. Filter Through the Rubric

Score every candidate against the rubric. Most will fail one criterion or another; the goal is to surface the ones that pass all criteria, not to pick a "winner."

```
Score every candidate from Section 3 against my 7-criterion rubric.

For each candidate, output:
- Name
- Trademark check status (pending / clear / conflict — quick search results)
- Domain availability + cost (rough check via Namecheap / Porkbun)
- @social-handle availability (X / LinkedIn / GitHub / Discord — quick check)
- Score on each of the 7 rubric criteria
- Composite score (with trademark as hard cut)

Surface:
- The 5-8 highest-scoring candidates (the shortlist)
- Reasons each lower-scoring candidate dropped
- Any candidate where I overrode the rubric (e.g., low memorability but a name I love anyway) — track this for honesty later

Important: trademark conflicts are HARD CUTS. A name that conflicts with a registered mark in my class is removed regardless of how much I like it. Founders who push past this lose 6-12 months of brand-building when the cease-and-desist arrives.

Output: the shortlist of 5-8 candidates with full scoring, ready for the next step.
```

The single most-skipped step: registering the actual social handles to confirm availability. Domain availability checks miss cases where someone owns @yourname on X but never built anything there — the handle becomes effectively unrecoverable, and you ship with @yourproductHQ awkwardness forever.

---

## 5. Run the Three Tests Real Buyers Use

A name that scores well on the rubric still has to survive contact with reality. Three tests every shortlisted name must pass:

```
For each shortlisted candidate, run these three tests:

**Test 1: The radio test (memorability)**
- Say the name out loud to 5 people unfamiliar with my product
- Wait 24 hours
- Ask them to recall the name
- Names that get remembered correctly by 4+ of 5 testers pass; below that fails
- This single test eliminates a surprising share of shortlist candidates

**Test 2: The category-positioning test**
- Tell 5 different ICP-matching strangers: "There's a new product called [name]. What do you think it does?"
- The guesses should cluster in the right category (e.g., "an email tool" for an email product)
- If guesses are wildly varied or wildly wrong, the name has clarity problems
- Run this online via Twitter polls, Reddit, or DM your existing customer base

**Test 3: The five-year test**
- Imagine my product has 100,000 customers, has expanded into adjacent categories, and is being acquired or going public in 5 years
- Does the name still make sense? Is it not embarrassing? Does it scale beyond the initial scope?
- Names that are too tightly scoped (e.g., a "PromptHQ" that needs to expand beyond prompt management) fail this test

For each shortlisted candidate, output:
- Test 1 result (recall rate %)
- Test 2 result (category-clarity rate %)
- Test 3 result (yes / no / depends — with the "depends" reasoning)
- Final pass / fail / reconsider

After running tests:
- Names that pass all three become finalists
- Names that fail any one are usually out (unless I have a very strong gut reason to override — track that override)
```

The radio test is the most predictive. Names that fail the recall test in casual conversation will fail in word-of-mouth distribution every time, regardless of how clever they look written down.

---

## 6. Pick (Decisively)

After tests, you'll typically have 2-3 finalists. The temptation is to keep narrowing, ask more people, run more tests. Resist. The marginal cost of more deliberation outweighs the marginal benefit.

```
Pick the final name from my finalists.

Decision rule:

1. If one finalist clearly outscores the others on the rubric AND passes all three real-buyer tests, that's the name. Move forward.

2. If two or more finalists are tied:
   - Which name am I most excited to write on a business card / type into Slack 50 times a day?
   - Which name will I be embarrassed to say at a conference five years from now?
   - When I write the candidate at the top of a draft pitch deck, which one feels like it belongs there?

3. If I genuinely can't decide between two:
   - Pick the one with better domain availability and cleaner trademark
   - Domain.com economics: a $5,000 domain that's perfect is worth it; a $50,000 domain that's perfect is rarely worth it; a $1,000 domain that's good enough beats a $20 domain that's bad

4. If none feel right:
   - I'm probably looking for a name that doesn't exist
   - Re-examine the naming pattern (Section 1) — maybe coined when I was searching descriptive
   - Run one more generation round with the new pattern, NOT another month of analysis

Document the decision:
- Name picked
- Why (one paragraph)
- The runner-up (in case I need to revisit)
- Date locked in (commit publicly to the team to prevent second-guessing)
- The trademark / domain registrations to complete this week

Output: a single-page "naming decision" doc that future-me can refer to in 18 months when someone says "should we have called it X?"
```

The decision-by-default approach: if you cannot decide between two names in 5 days of consideration, you do not have a meaningful difference between them. Pick the one with cleaner availability and move on.

---

## 7. Lock It In Within 7 Days

Once decided, register everything within a week. Delays are how good names get stolen by other people.

```
Within 7 days of picking the name:

1. **Register the domain** — primary (.com / .ai / .io / .co), plus the obvious typo-domains and the .com if you didn't get it (typos can redirect to the primary)
2. **Claim the social handles** — X, LinkedIn, GitHub, Discord, Reddit (even if you won't use it now). Name-squatters hit 24-48h after Product Hunt launches.
3. **Trademark filing** — for products you're confident in, file an Intent-to-Use trademark (~$250-$350 per class with the USPTO direct, $1,500 with a lawyer). Defensive, not optional past 100 customers.
4. **Email infrastructure** — set up @[name].com email + privacy@ + support@ + security@ aliases. Per [Onboarding Email Sequence](../../../VibeWeek/6-grow/onboarding-email-sequence-chat.md), proper deliverability requires the right sender domain.
5. **Update everywhere** — pitch deck, GitHub repo name, Stripe product name, internal docs. Tedious but compounds: every reference to the old working name is friction later.

If any of these is blocked (e.g., a critical handle is taken), now is the time to know — not 60 days into the launch when you've already committed.

Failure-mode drill:
- **Critical handle taken**: try +HQ, +app, +ai, get[name], use[name]. Note: founders sometimes recover a squatted handle by emailing the squatter — works occasionally for ~$500.
- **.com taken at unreasonable price**: take the .ai or .io. The 2010s "must have .com" rule is functionally retired in 2026 for tech products.
- **Trademark conflict surfaces during filing**: don't bury this. Get a lawyer involved immediately; sometimes the conflict is in a different class and resolves easily, sometimes it's a hard rebrand.

Output: a checklist I can complete in 1-2 working days max.
```

The 7-day lock-in window is the rule that prevents permanent indecision. Founders who give themselves "until launch to finalize the name" rebrand 3 times in 6 months. Founders who lock in 7 days after deciding rebrand zero times.

---

## What Makes a Name Worth Rebranding

Rebrands cost weeks of engineering, marketing, and customer communication. Reasons that justify the cost:

- **Trademark conflict** — cease-and-desist letter or risk of one. Nonnegotiable; rebrand fast.
- **Massive product shift** — pivoted from B2C to B2B, current name doesn't fit. Rebrand is part of the pivot.
- **Hard-to-spell name causing measurable distribution loss** — if word-of-mouth is half what it should be because nobody can spell the URL. Run an actual A/B before committing.

Reasons that do not justify a rebrand, even though founders often think they do:

- **You found a name you like better.** No, you've spent a year staring at the current one and would have the same feeling about any other name in 12 months.
- **Some customers said the name is "weird."** A small percentage of customers will say any name is weird. The metric is whether prospective customers can find, remember, and pronounce it — not whether they prefer something different.
- **A bigger company launched a product with a similar name.** Annoying, but not a rebrand reason unless trademark conflicts are real (different classes are usually fine).

If you do rebrand: see [Reduce Churn](../../../VibeWeek/6-grow/reduce-churn-chat.md) for the customer-communication discipline. Existing customers care more about the rebrand than new prospects do; the migration plan matters more than the new name.

---

## Common Failure Modes

**"I've been deliberating for 8 weeks."** Naming is not a hard problem; you have made it one. Force a 5-day window. Pick a "good enough" finalist and ship. The name's value compounds; the indecision's cost compounds faster.

**"Everyone I've polled likes [generic name] but I don't love it."** Polled names converge on tolerable, not exceptional. Trust the rubric + tests over the popularity vote.

**"I picked but the .com is $30k."** Take the .ai / .io / .co. In 2026 the .com obsession is mostly nostalgia. The .ai is genuinely fine for AI products and often preferred.

**"I rebranded twice in 9 months."** The first name was probably fine; you re-litigated a closed decision. Lock in earlier with shorter deliberation windows.

**"Trademark conflict surfaced after filing."** Always run the USPTO TESS check (and EUIPO if Europe-bound) before locking in. Free and 10 minutes per candidate.

**"My name has SEO problems — there's an existing brand using it."** Should have caught this in Section 5's category-positioning test. Either rebrand now (cheaper than later) or accept the SEO penalty and lean harder on direct distribution channels.

---

## Deliverable

- A locked-in product name with the reasoning documented
- A primary domain (`.com`, `.ai`, `.io`, or `.co`) registered
- All major social handles claimed (X, LinkedIn, GitHub, Discord)
- Trademark filing initiated (Intent-to-Use minimum) for the international class your product falls under
- Email infrastructure set up at the new domain
- A "naming decision" doc archived for future reference

---

## What's Next

With the name locked in, move to [Craft Your Value Proposition](value-proposition.md) — the value prop now has a stable name to anchor on. Then [Define Your Brand Voice](brand-voice.md) — voice has to align with the name's tone. Then [Write Your Landing Page Copy](landing-page-copy.md) — every reference to the product carries the name forward.

Don't revisit the naming decision in Day 2 onward. The name is locked. Energy goes into the rest of the launch.
