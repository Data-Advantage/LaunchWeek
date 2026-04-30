# AI Product Strategy & Roadmap

[⬅️ Back to Day 1: Position](./)

In 2026, every B2B SaaS has the same question: how should we integrate AI? The pressure comes from every direction — investors expecting AI features in your next pitch deck, customers asking "do you do AI?", competitors shipping AI agents that may or may not work, and a flood of frontier models (Claude Opus 4.7, GPT-5, Gemini 3) capable of dramatically reshaping product surfaces. The wrong response: panic-build "AI features" that don't actually move metrics, slap a chatbot on the homepage, ship a "summary button" that summarizes things nobody needed summarized.

This is the strategic playbook for figuring out what to build, what to skip, where to invest, and how to communicate. Distinct from [AI product positioning](./ai-product-positioning.md) (which is the marketing layer); this is about product strategy + roadmap decisions.

## What Done Looks Like

- A clear AI thesis: where AI creates real value in your product (vs cosmetic AI features)
- 3-5 prioritized AI feature investments with success criteria
- Build-vs-buy decisions documented (use OpenAI / Claude / Gemini APIs vs train own models vs use vertical AI vendors)
- Cost / margin model: AI features have variable costs that don't disappear; pricing reflects this
- Privacy + compliance baked in (BAA / SOC 2 / customer data not training models)
- Clear "what's AI, what isn't" inside the product (transparency builds trust)
- Internal AI literacy: PMs + engineers + sales + CS understand what's possible + impossible
- A specific person owns AI strategy (head of AI / CTO / a senior PM) past $5M ARR
- Quarterly review: which AI features moved metrics; which didn't; iterate

## 1. The AI Thesis: Where Does AI Actually Help

The first task is honest: where does AI create durable value for *your* customers, not generic "AI features."

### Strong AI Use Cases

These typically work:

- **Free-form text understanding**: classifying / summarizing / extracting from unstructured customer input
- **Generation in low-stakes contexts**: drafting emails, generating ideas, creating boilerplate
- **Search + retrieval over your data**: semantic search beats keyword for many use cases
- **Conversational interfaces** for self-serve support / FAQ / discovery
- **Recommendation + ranking**: prioritizing what users see based on intent
- **Translation, transcription, and language tasks**: massively improved
- **Code generation** for technical products
- **Data extraction** from documents, screenshots, PDFs
- **Anomaly detection + insights generation**

### Weak AI Use Cases

These usually disappoint:

- **High-stakes decisions** without human review (medical diagnosis, legal advice, financial trades)
- **Real-time precision** requirements (sub-100ms decisions; LLMs are slow)
- **Tasks requiring real-world reasoning beyond context window**
- **Replicating a human relationship** (sales, customer success — augment, don't replace)
- **Generation in contexts demanding precision** (legal contracts, medical records, financial calcs)
- **Solved problems** (search via Algolia is fine for keyword search; AI doesn't always help)

### Test Your Thesis

For each candidate AI feature, answer:

1. **What user job is being done?** (Not "we want AI"; "we want to help users do X faster.")
2. **Could a human do this in 30 seconds?** If yes, AI might do it in 3 seconds reliably. If no (requires hours of analysis), AI may struggle.
3. **What's the failure cost?** If AI gets it wrong 10% of the time, can the user recover?
4. **Is there an existing non-AI solution that's good enough?**
5. **Will this be worth running in 2 years?** (Specific to your product; not just "AI is hot")

If a feature passes all five, it's worth building. If not, skip.

## 2. Build vs Buy: API vs Custom Model vs Vendor

For every AI feature, the architectural decision:

### Use a Foundation Model API (Claude / GPT / Gemini)

Default in 2026 for 80%+ of AI features.

Pros:
- Best-in-class reasoning + generation
- No model training / hosting overhead
- Frequent improvements (capabilities increase quarterly)
- BAA available at enterprise tiers
- Predictable pricing per token

Cons:
- Variable cost (scales with usage)
- Privacy concerns if naive ("our data going to OpenAI/Anthropic")
- Vendor dependency (Anthropic raises prices, you eat it)
- Latency: API calls add ~500ms-3s

Use foundation model APIs when:
- The use case fits a general LLM well
- You need quality > cost
- BAA / privacy requirements can be met by vendor
- You want to ship fast

### Fine-Tune a Smaller Open-Source Model

For specific use cases at high volume.

Pros:
- Lower per-inference cost at high volume
- Domain-specific accuracy (with good training data)
- Self-hosted = full data privacy

Cons:
- Engineering investment (initial training + ongoing)
- Quality may lag frontier models
- Operational burden (GPU hosting, monitoring)
- Requires labeled training data

Use fine-tuned models when:
- You're at >$1M/yr in API spend (then it's worth optimizing)
- Specific narrow task with quality bar foundation models miss
- Privacy / data residency requires self-hosted

### Use a Vertical AI Vendor

Specialized AI platforms targeting specific use cases.

Examples:
- **AI customer support**: Decagon / Sierra / Ada / Intercom Fin
- **AI sales SDR**: 11x / Artisan / Aisdr
- **AI moderation**: Hive / OpenAI Moderation / Spectrum Labs
- **AI image / video editing**: Runway / Krea / Magnific
- **AI voice**: Vapi / Bland / Retell

Pros:
- Specialized for the task; works out of box
- Integration time measured in days
- Often better than DIY for the specific use case

Cons:
- Vendor margin captures some value
- Lock-in
- Less customization

Use vertical vendors when:
- The use case is well-defined + commoditized
- Speed-to-market beats per-unit cost
- You don't have AI engineering capacity

### Decision Framework

| Use Case | Default Pick |
|---|---|
| New AI feature, mainstream task | Foundation model API (Claude / GPT) |
| Mature use case with specialist vendor | Vertical AI vendor |
| Ultra-high volume, narrow task | Fine-tuned open-source model |
| Privacy-critical | Self-hosted (Llama, Mistral) on BAA infrastructure |
| Rapid prototype | Foundation model API; iterate to specialist later |

## 3. The 3-Tier AI Feature Roadmap

A useful framing: classify AI features by ambition + risk.

### Tier 1: Cosmetic AI ("AI Sprinkles")

Adding AI to existing surfaces with low risk:

- "Summarize this" buttons
- "Generate alt text" / "Write me a description"
- "Tone adjustment" on outgoing messages
- "Improve this" on user-typed content
- Smart search (semantic vs keyword)

Time to ship: weeks. Cost: low. Differentiation: minimal. Customer expectation: yes, please.

Build these first; they're table stakes by 2026.

### Tier 2: Workflow AI

AI that materially changes how a user accomplishes their job:

- AI-drafted document templates (sales proposals, customer responses)
- Smart classification + routing (incoming requests / leads)
- Intelligent recommendations (next-best-action)
- AI-assisted analytics (auto-insights from dashboards)
- Conversational interfaces over your data

Time to ship: months. Cost: medium. Differentiation: meaningful. Customer expectation: differentiating.

These are where most B2B SaaS create real AI value.

### Tier 3: AI Agents / Autonomous

AI that takes actions on the user's behalf:

- AI customer support agents resolving tier-1 tickets autonomously
- AI SDRs sourcing + outreaching prospects
- AI workflow automation that triggers + routes work
- AI coding agents that write + commit code

Time to ship: quarters to years. Cost: high. Differentiation: potentially transformative. Customer expectation: this is "real" AI.

Most companies should NOT start here. Build Tier 1 + Tier 2 first; learn; then attempt Tier 3.

## 4. Cost + Margin Math

AI features have variable costs that don't disappear. Plan for them.

### Per-Inference Costs (2026 ranges)

- Claude Opus 4.7: ~$15-75 per 1M input tokens; $75-150 per 1M output
- Claude Sonnet 4.6: ~$3-15 per 1M input; $15-75 per 1M output
- Claude Haiku 4.5: ~$0.80-1 per 1M input; $4-5 per 1M output
- GPT-5 / Sonnet 4.6: similar tiers
- GPT-4o-mini / Haiku tiers: cheap but lower quality

### Calculating Per-Customer AI Cost

For a typical "AI summary" feature:

- 5K tokens input + 1K tokens output per use
- Customer uses 10 times/day = 60K tokens/day = 1.8M tokens/month
- At Claude Sonnet pricing: ~$15-30/customer/month in AI costs
- At Haiku pricing: ~$5-10/customer/month

If your ACV is $50/seat/mo and 5 seats = $250/mo customer ARR, AI costs of $50/customer/month = 20% gross margin hit. Significant.

### Pricing Implications

- **Bundle AI into existing pricing** if cost is low + competitive: "AI summarize" doesn't need separate pricing
- **AI-specific tiers** for higher cost AI features: "AI Pro plan adds AI agent"
- **Usage-based pricing** for high-cost AI: per-seat with per-usage caps; overage charges
- **Hard caps + alerts** for runaway usage (a single customer burning $10K/month in tokens is real)

### Optimization Levers

- Smaller models when sufficient (Haiku before Opus)
- Caching (Anthropic prompt caching reduces input cost 90% for repeated prompts)
- Truncation / summarization (don't send 100K tokens of context if 5K works)
- Hybrid: keyword search first, LLM only for ambiguous cases
- Per-customer rate limits

## 5. Privacy + Compliance

The line where AI features can break customer trust.

### Customer Data Training

- Do NOT train models on customer data without explicit consent
- Use API providers with "do not train" guarantees (Anthropic, OpenAI Enterprise, Azure OpenAI)
- For SaaS handling sensitive data: zero-data-retention agreements

### BAA / Compliance

- HIPAA: use Claude Enterprise, OpenAI Enterprise, AWS Bedrock with BAA
- SOC 2: ensure AI vendors are SOC 2 certified
- GDPR: AI processing may require additional disclosures + opt-outs

### Surfacing AI Use to Customers

Best practice: be transparent.

- "✨ AI-generated" labels on AI output
- "How AI is used" page explaining your AI policies
- Customer admin controls: turn off AI features per workspace
- Audit logs: which AI features ran when

### Data Leakage Risks

- Cross-tenant prompt injection: a malicious user's input shouldn't expose another tenant's data
- Output sanitization: AI may regurgitate training data; rare but possible
- Logs: don't log full prompts + responses indefinitely; retention policy

## 6. Internal AI Literacy

Your team needs to understand AI to build AI products.

### PM Literacy

- Understand context windows, latency, hallucination rates
- Know what current models can / can't do
- Test prompts manually before specifying features
- Write better PRDs that specify "the AI should..." with realistic expectations

### Engineering Literacy

- Familiar with prompt engineering basics
- Know the major providers' APIs (Anthropic, OpenAI, Google)
- Eval frameworks (does the AI feature actually work?)
- Cost monitoring + alerting

### Sales / CS Literacy

- Realistic about AI limits to avoid overselling
- Demo AI features without "magic" framing
- Handle customer concerns about AI privacy + accuracy
- Know when to escalate to product

### Investment

- Internal training: 1-2 hrs/quarter on AI updates
- Hands-on workshops for PMs / engineers
- Slack channel for AI sharing + experiments
- Budget for individual experimentation ($100/mo/user in API credits)

## 7. AI Roadmap Process

How you plan AI features matters as much as what you build.

### Quarterly AI Roadmap Review

- What's the current AI thesis?
- What features in flight; how are they performing?
- What new AI capabilities did frontier models release this quarter?
- What's competitive landscape doing?
- What's the spend trajectory?

### Per-Feature Eval Framework

Every AI feature needs a measurable eval:

- **Quality**: accuracy / relevance / hallucination rate
- **Latency**: median + p95 response time
- **Cost**: per-request and per-customer
- **Adoption**: % of eligible users using it
- **Impact**: does it move retention / activation / NPS?

If a feature can't be measured, you can't iterate on it.

### Kill Criteria

Define when you'd kill an AI feature:

- Adoption <10% of eligible users after 90 days
- Quality below threshold despite tuning
- Cost ratio worse than 30% of feature revenue
- Customer trust events (visible AI failures hurting reputation)

Most teams underestimate kill criteria; build features that drift forever. Be willing to retire.

## 8. Common Failure Modes

**"AI sprinkles" without strategic thesis.** Adding AI summaries to every screen because Cursor / Notion did it. Doesn't move metrics; adds cost; complicates UX.

**Underestimating AI cost.** Pricing assumes negligible AI cost; reality is 20-50% of revenue. Margin crashes. Model costs early.

**Overestimating AI capability.** "We'll let users ask anything; the LLM will figure it out." Doesn't work; LLMs hallucinate; users bounce. Constrain AI to specific tasks.

**Building Tier 3 (agents) before Tier 1 + 2.** Founder excited about AI agents; tries to ship autonomous agent before any simpler AI features. Fails operationally.

**Vendor lock-in to a single LLM.** Anthropic raises prices 40%; you can't switch quickly. Use abstraction layers (Vercel AI Gateway, OpenRouter, AI SDK).

**No evals.** Ship AI feature; don't measure quality; gradual degradation goes unnoticed; users lose trust. Build eval suites.

**Customer-data-training concerns ignored.** Customer asks "do you train on our data?"; you don't have a clean answer. Lose enterprise deal. Be explicit.

**Cosmetic AI features pretending to be transformative.** Labeling a "summarize" button as "Revolutionary AI Summarization™" — customers see through it.

**Building features the model can't reliably do.** "AI will detect customer intent and route automatically" — at 70% accuracy, the routing is worse than no automation. Test before promising.

**Privacy theater.** "Your data is private!" without explaining what that means concretely. Be specific (no training; data residency; encryption) or don't claim privacy.

**No transparency about AI use.** Output looks AI-generated; users notice; trust erodes. Label "AI-generated" outputs.

**Hardcoding to current model capabilities.** Building around current Claude Sonnet limits; in 6 months, capability shifts and your design feels dated. Architect for capability evolution.

**Not budgeting for AI ops.** AI features need monitoring, eval, prompt iteration, cost optimization — ongoing investment. Treat as platform.

**Treating AI as a moat.** "Our AI is unique" — not unless you have proprietary data, fine-tuned models, or unique application. Most AI features can be replicated by competitors quickly.

**No customer admin controls.** Customer wants to disable AI features for their workspace (compliance, preference); you've made it impossible. Build admin toggles.

**Confusing AI features with AI strategy.** Shipping 10 disconnected AI features doesn't add up to coherent AI product. Have a thesis.

**Not internal-testing with employees.** Ship AI feature without dogfooding internally. Customers find embarrassing edge cases. Always dogfood first.

**Sales overselling AI capability.** "Our AI can do anything." Customer expectations gap creates churn. Sales training matters.

**Investor-driven AI strategy.** "Our investors want more AI" → ship AI features that don't move customer metrics. Customer-driven strategy wins.

**No kill criteria.** AI feature underperforming; nobody pulls the plug; resources stuck. Define kill criteria.

**Forgetting non-AI users.** Products designed entirely around AI alienate users who don't want AI. Make AI optional + valuable.

## What Done Looks Like (Recap)

You've shipped AI product strategy when:

- Documented AI thesis articulating where AI creates value in your product
- 3-5 prioritized AI feature investments with measurable success criteria
- Build-vs-buy decisions explicit per feature
- Cost + margin model accounting for variable AI cost
- Privacy + compliance approach documented + communicated
- Internal AI literacy program (PM / Eng / Sales / CS)
- Quarterly AI roadmap review with eval data
- Kill criteria defined; willing to retire underperforming features
- Customer admin controls for AI usage
- A named owner past $5M ARR

## Mistakes to Avoid

- Cosmetic AI without strategic thesis
- Underestimating per-inference cost / margin impact
- Building Tier 3 agents before Tier 1 + 2
- Vendor lock-in without abstraction
- No evals; quality drifts unnoticed
- Privacy theater without specifics
- Lack of transparency on AI usage
- Hardcoding to current model limits
- No AI ops budget
- Investor-driven AI roadmap vs customer-driven
- No kill criteria; features drift forever
- No customer admin controls
- Forgetting non-AI users

## See Also

- [AI Product Positioning](./ai-product-positioning.md) — marketing layer
- [Product Naming](./product-naming.md)
- [Sub-Product / Feature Naming](./sub-product-and-feature-naming.md)
- [Pricing Strategy](./pricing-strategy.md) — pricing AI features
- [Pricing Packaging & Tier Design](./pricing-packaging-tier-design.md)
- [Pricing Migration / Repackaging](./pricing-migration-repackaging.md)
- [Free Trial vs Freemium](./free-trial-vs-freemium.md)
- [International Pricing & Localization](./international-pricing-localization.md)
- [Quarterly Planning & Operating Cadence](./quarterly-planning-operating-cadence.md)
- [Annual Planning & OKRs](./annual-planning-okrs.md)
- [Competitive Positioning](./competitive-positioning.md)
- [Multi-Product Strategy](./multi-product-strategy.md)
- [Vertical SaaS Positioning](./vertical-saas-positioning.md)
- [Vertical SaaS Expansion](./vertical-saas-expansion.md)
- [Open Source Strategy](./open-source-strategy.md)
- [Moats & Defensibility](./moats-and-defensibility.md)
- [Mission & Vision Statement](./mission-vision-statement.md)
- [Category Creation Strategy](./category-creation-strategy.md)
- [Annual Strategy Offsite](./annual-strategy-offsite.md)
- [Founder Story](./founder-story.md)
- [Brand Voice](./brand-voice.md)
- [Brand Identity](./brand-identity.md)
- [Pricing Experiments (4-convert)](../4-convert/pricing-experiments.md)
- [Product-Led Growth Playbook (4-convert)](../4-convert/product-led-growth-playbook.md)
- [Product Qualified Leads / PQL (4-convert)](../4-convert/product-qualified-leads-pql.md)
- [Activation Metric Definition (4-convert)](../4-convert/activation-metric-definition.md)
- [Customer Education & Training Programs (4-convert)](../4-convert/customer-education-training-programs.md)
- [Annual Sales Kickoff (4-convert)](../4-convert/annual-sales-kickoff.md)
- [Pricing Page (4-convert)](../4-convert/pricing-page.md)
- [Sales Enablement Battle Cards (4-convert)](../4-convert/sales-enablement-battle-cards.md)
- [AI Sales Agents / SDR Automation (VibeReference)](https://viberef.dev/marketing-and-seo/ai-sales-agents-sdr-automation.md)
- [AI Customer Support Agents (VibeReference)](https://viberef.dev/ai-development/ai-customer-support-agents.md)
- [AI Moderation & Trust & Safety Platforms (VibeReference)](https://viberef.dev/ai-development/ai-moderation-trust-safety-platforms.md)
- [AI Data Annotation & Labeling Platforms (VibeReference)](https://viberef.dev/ai-development/ai-data-annotation-labeling-platforms.md)
- [Conversation Intelligence & Meeting Recording Platforms (VibeReference)](https://viberef.dev/marketing-and-seo/conversation-intelligence-meeting-recording-platforms.md)
- [AI Image & Video Editing Platforms (VibeReference)](https://viberef.dev/image-generation/ai-image-video-editing-platforms.md)
- [Healthcare HIPAA-Compliant Stack & Tools (VibeReference)](https://viberef.dev/auth-and-payments/healthcare-hipaa-compliant-stack-tools.md)
- [LLM Observability Providers (VibeReference)](https://viberef.dev/ai-development/llm-observability-providers.md)
- [LLM Evaluation & Prompt Testing Platforms (VibeReference)](https://viberef.dev/ai-development/llm-evaluation-prompt-testing-platforms.md)
- [AI SDK (VibeReference)](https://viberef.dev/ai-development/ai-sdk.md)
- [AI Gateways (VibeReference)](https://viberef.dev/cloud-and-hosting/ai-gateways.md)
- [Vercel AI Gateway (VibeReference)](https://viberef.dev/cloud-and-hosting/vercel-ai-gateway.md)
- [In-Product AI Agent Implementation (VibeWeek)](https://vibeweek.dev/6-grow/in-product-ai-agent-implementation-chat.md)
- [In-Product AI Search / QA (VibeWeek)](https://vibeweek.dev/6-grow/in-product-ai-search-qa-chat.md)
- [AI Streaming Chat UI (VibeWeek)](https://vibeweek.dev/6-grow/ai-streaming-chat-ui-chat.md)
- [AI Features Implementation (VibeWeek)](https://vibeweek.dev/6-grow/ai-features-implementation-chat.md)
- [LLM Cost Optimization (VibeWeek)](https://vibeweek.dev/6-grow/llm-cost-optimization-chat.md)
- [LLM Quality Monitoring (VibeWeek)](https://vibeweek.dev/6-grow/llm-quality-monitoring-chat.md)
