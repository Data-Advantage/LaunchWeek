import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Do I need coding skills to use LaunchWeek.ai?",
      answer:
        "No, LaunchWeek.ai is specifically designed for entrepreneurs without coding skills. Our AI-powered platform and pre-engineered prompts guide you through the entire process of building and launching your SaaS product.",
    },
    {
      question: "How does the 5-day process work?",
      answer:
        "Our structured 5-day framework guides you through: Day 1 (Idea & Initial App Build), Day 2 (User Feedback & Refinement), Day 3 (Full App Build), Day 4 (Marketing Content Build), and Day 5 (Promotion & Launch). Each day includes step-by-step guidance and AI-powered assistance.",
    },
    {
      question: "What if I can't commit to 5 consecutive days?",
      answer:
        "No problem! You can follow the process as an intensive one-week journey or spread it across 5 weeks (10 half-day sessions) to accommodate your schedule.",
    },
    {
      question: "What external services will I need?",
      answer:
        "You'll need accounts with services like v0.dev, Vercel, GitHub, OpenAI API, Anthropic API, Supabase, and Stripe. We provide detailed setup instructions for each service during onboarding.",
    },
    {
      question: "How much does it cost to use the external services?",
      answer:
        "Most services offer free tiers that are sufficient for getting started. For production apps, you might need paid tiers ranging from $10-50/month depending on your usage and requirements.",
    },
    {
      question: "Can I build any type of SaaS product with LaunchWeek.ai?",
      answer:
        "LaunchWeek.ai is optimized for web-based SaaS applications. While there's flexibility in what you can build, some highly specialized or complex applications might require additional customization beyond the 5-day framework.",
    },
    {
      question: "What's the difference between the Free and Pro plans?",
      answer:
        "The Free plan allows up to 2 simultaneous projects and includes the core 5-day framework. The Pro plan ($7/month or $70/year) supports up to 20 simultaneous projects and adds advanced marketing content generation, SEO planning, and priority support.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 14-day money-back guarantee for Pro subscriptions if you're not satisfied with the service.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Find answers to common questions about LaunchWeek.ai.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
