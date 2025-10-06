import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Medical Director & Founder",
    organization: "Serenity Wellness & Aesthetics",
    location: "San Francisco, CA",
    period: "2018 - Present",
    description:
      "Founded and lead a premier wellness center specializing in integrative aesthetic medicine, regenerative treatments, and holistic wellness programs. Oversee a team of 12 medical professionals.",
  },
  {
    title: "Senior Aesthetic Physician",
    organization: "Pacific Medical Spa Group",
    location: "Los Angeles, CA",
    period: "2014 - 2018",
    description:
      "Performed advanced aesthetic procedures including dermal fillers, neurotoxins, laser treatments, and body contouring. Developed personalized treatment plans for over 2,000 patients.",
  },
  {
    title: "Attending Physician",
    organization: "Stanford Health Care",
    location: "Palo Alto, CA",
    period: "2010 - 2014",
    description:
      "Provided comprehensive medical care in dermatology and aesthetic medicine. Conducted clinical research on innovative regenerative treatments and anti-aging therapies.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground text-balance">
              Professional experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg md:text-xl text-foreground/70 font-light">{exp.organization}</p>
                      </div>
                      <div className="text-base text-muted-foreground md:text-right font-light">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg font-light">{exp.description}</p>
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
