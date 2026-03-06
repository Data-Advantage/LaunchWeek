import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Non-Technical Founder",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "LaunchWeek.ai transformed my business idea into a functioning SaaS product in just 5 days. As someone with no coding experience, this platform was a game-changer for me.",
      stars: 5,
    },
    {
      name: "Maya Rodriguez",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "I've always had ideas but struggled with implementation. LaunchWeek.ai bridged that gap, allowing me to translate my designs into a working product without writing a single line of code.",
      stars: 5,
    },
    {
      name: "Jordan Lee",
      role: "Product Manager",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The structured 5-day process helped me validate my concept quickly without lengthy development cycles. I was able to get user feedback and iterate faster than ever before.",
      stars: 4,
    },
  ]

  return (
    <section id="testimonials" className="bg-slate-50 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear from entrepreneurs who have successfully launched their SaaS products with LaunchWeek.ai.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {Array(testimonial.stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  {Array(5 - testimonial.stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-muted-foreground" />
                    ))}
                </div>
                <p className="mt-4 text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
