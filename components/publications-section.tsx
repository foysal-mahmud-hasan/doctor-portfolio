import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const publications = [
  {
    title: "Advances in Regenerative Aesthetic Medicine: A Comprehensive Review",
    journal: "Journal of Aesthetic Medicine",
    year: "2023",
    authors: "Chen, S., Martinez, R., & Thompson, K.",
    link: "#",
  },
  {
    title: "Holistic Approaches to Anti-Aging: Integrating Wellness and Aesthetics",
    journal: "International Journal of Dermatology",
    year: "2022",
    authors: "Chen, S., & Williams, J.",
    link: "#",
  },
  {
    title: "Patient Satisfaction in Minimally Invasive Aesthetic Procedures",
    journal: "Aesthetic Surgery Journal",
    year: "2021",
    authors: "Chen, S., Lee, M., Anderson, P., & Roberts, L.",
    link: "#",
  },
  {
    title: "The Role of Nutrition in Skin Health and Aesthetic Outcomes",
    journal: "Dermatology Research and Practice",
    year: "2020",
    authors: "Chen, S.",
    link: "#",
  },
  {
    title: "Innovative Laser Technologies in Modern Aesthetic Practice",
    journal: "Lasers in Surgery and Medicine",
    year: "2019",
    authors: "Chen, S., & Kumar, A.",
    link: "#",
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground text-balance">
              Publications & research
            </h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-border transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-serif font-normal text-foreground mb-3 group-hover:text-primary transition-colors text-pretty">
                        {pub.title}
                      </h3>
                      <p className="text-base md:text-lg text-foreground/70 font-light mb-2">{pub.journal}</p>
                      <p className="text-sm text-muted-foreground font-light mb-1">{pub.authors}</p>
                      <p className="text-sm text-muted-foreground font-light">{pub.year}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
