[Back to Day 2: Content](README.md)

# SEO Strategy for SaaS Launches

Build a keyword strategy around what your ICP actually searches for. Set up Google Search Console from day one.

## Why This Matters

SEO is the only marketing channel where effort today produces returns for years. A well-ranked blog post costs nothing to maintain but can drive 500-5,000 visitors per month indefinitely.

Most founders treat SEO as something to think about later, after they have traction from other channels. This is backwards. SEO has a long lag time — articles take 3-6 months to rank. Starting today means you have traffic by the time you need it.

The goal is not to rank for everything. It's to rank for the specific things your ICP searches for when they're in-market for a solution like yours.

---

## SEO Fundamentals for SaaS Launches

**Three types of keywords that matter:**

1. **Problem keywords** — What people search when they have the problem you solve.
   *"how to generate blog posts faster"*, *"content marketing without a team"*

2. **Solution keywords** — What people search when they know a category of solution exists.
   *"AI content marketing tool"*, *"automated blog writing software"*

3. **Competitor keywords** — What people search when they're evaluating alternatives.
   *"[competitor] alternative"*, *"[competitor] vs"*, *"best alternative to [competitor]"*

Launch with a mix of all three. Problem keywords have the highest organic search volume. Solution keywords have the highest purchase intent. Competitor keywords convert best.

---

## Step 1: Set Up Google Search Console (15 minutes)

Do this first. GSC is free and essential — it shows you exactly what keywords bring traffic to your site and how you rank for them.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain)
3. Verify ownership via HTML tag or DNS record
4. Submit your sitemap (`yourdomain.com/sitemap.xml`)

You won't have data for weeks, but the clock doesn't start until you set it up. Do it today.

---

## Step 2: Build Your Seed Keyword List (30 minutes)

Start with what you already know — the language from your ICP research. The words your buyers use in community posts, the questions they ask in subreddits, the phrases that appear in competitor reviews.

```
I'm building [product] for [ICP].

Generate a seed keyword list for my SEO strategy.

Based on my product's value proposition: [paste value prop]
My ICP's problems: [list 5-7 specific problems]
My top competitors: [list 3-5 competitors]

Generate:
1. 10 problem-focused keywords (the pain points people search for)
2. 10 solution-focused keywords (the category terms people search for)
3. 10 competitor-adjacent keywords (people searching for alternatives or comparisons)
4. 5 "how to" questions my ICP is likely Googling
5. 5 "best [category]" searches my ICP would run

Include long-tail variations (3+ words). These convert better and are easier to rank for.
```

You now have 40+ seed keywords. Next step: prioritize them.

---

## Step 3: Prioritize by Opportunity (45 minutes)

Not all keywords are equal. You want keywords with:
- **Meaningful search volume** (100+ searches/month for early-stage is fine)
- **Commercial intent** (the searcher is looking to solve a problem, not just learn)
- **Reasonable competition** (a new domain can't rank for "content marketing" but can rank for "content marketing tool for solo founders")

Use [FastWrite](https://fastwrite.ai) to run keyword research and get search volume + competition data for your seed list.

Then prioritize using this matrix:

| Keyword | Search Volume | Competition | Intent | Priority |
|---------|--------------|-------------|--------|----------|
| [keyword] | High/Med/Low | High/Med/Low | Research/Solution/Transaction | 1-10 |

**Priority scoring:**
- High volume + low competition + transactional intent = top priority
- Medium volume + medium competition + solution intent = target
- Low volume + any competition + research intent = low priority initially

For a new domain, focus on long-tail, low-competition keywords first. Ranking for 20 specific keywords at positions 3-10 is more valuable than aiming for a generic keyword you'll never rank for.

---

## Step 4: Build Your Keyword Clusters (30 minutes)

Keyword clusters are groups of related keywords that can be covered by one well-written piece of content. This is how modern SEO works — Google wants comprehensive coverage of a topic, not keyword stuffing.

```
Take these keywords:
[paste your prioritized list]

Group them into topic clusters. For each cluster:
1. Cluster name (the core topic)
2. Primary keyword (the main target)
3. Supporting keywords (related terms to include in the same article)
4. Content type (how-to guide, listicle, comparison, landing page, etc.)
5. Search intent (what is the person searching for this trying to accomplish?)

Aim for 5-7 clusters. Each cluster = one content piece.
```

---

## Step 5: Build Your Content Calendar

With clusters defined, build a prioritized content calendar. Don't use dates — prioritize by expected impact.

```
Create a prioritized content calendar for [product].

My keyword clusters:
[paste cluster list]

For each piece of content, define:
1. Title (SEO-optimized, includes primary keyword naturally)
2. Primary keyword + 3-5 secondary keywords
3. Content type and approximate length
4. Target reader and their search intent
5. CTA at the end (what should they do after reading?)
6. Internal linking opportunities (which other posts to link to)

Prioritize: which pieces have the best combination of high search volume, manageable competition, and direct relevance to our ICP's buying decision?
```

This calendar is your writing queue. The blog posts guide (next) walks through how to produce each piece.

---

## Step 6: On-Page SEO Checklist

Every piece of content you publish should hit these on-page SEO basics:

**Title tag:**
- Include primary keyword near the front
- 50-60 characters
- Click-worthy (not just the keyword — give a reason to click)

**Meta description:**
- 150-160 characters
- Include primary keyword
- CTA implied ("Learn how to..." or a benefit statement)

**H1:**
- Same as or close to title tag
- Only one H1 per page

**H2/H3 structure:**
- Use headers to structure the article logically
- Include secondary keywords naturally in headers
- Each H2 should cover a distinct sub-topic

**Internal links:**
- Link to 2-3 other pages on your site
- Use descriptive anchor text (not "click here")

**External links:**
- Link to 1-2 authoritative sources per article
- Opens in new tab

**Image alt text:**
- Every image has descriptive alt text
- Include keyword where it makes sense naturally

**URL slug:**
- Short, includes primary keyword, no stop words

Use [FastWrite](https://fastwrite.ai) to automatically apply SEO optimization to your content — it handles title tags, meta descriptions, and keyword density as part of the content pipeline.

---

## The AEO/GEO Bonus: Rank in AI Answers

Beyond traditional SEO, you want your content cited by AI tools like Perplexity, ChatGPT, and Google's AI Overviews. See the [AEO/GEO guide](aeo-geo.md) for specifics, but at the strategy level:

- Structured data matters more than ever
- Direct answers to specific questions get cited
- Entity-optimized content (naming tools, frameworks, people) performs better in AI results
- First-mover advantage still exists for niche topics

Plan at least 3-5 of your content pieces specifically for AI answer engine visibility.

---

## Deliverable

One markdown file: `seo-strategy.md`

Include:
- 20+ prioritized keywords (grouped by cluster)
- 5-7 keyword clusters with content briefs
- Content calendar (10-15 pieces, prioritized)
- On-page SEO checklist (for reference)
- GSC setup confirmation

---

## What's Next

With your keyword strategy set, move to [Write Your First 5 Blog Posts with AI](blog-posts-with-ai.md) — where you execute the strategy and produce publishable content.
