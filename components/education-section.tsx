import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    degree: "Doctor of Medicine (MD)",
    institution: "Stanford University School of Medicine",
    location: "Stanford, CA",
    year: "2008",
    honors: "Graduated with Honors",
  },
  {
    degree: "Residency in Dermatology",
    institution: "University of California, San Francisco",
    location: "San Francisco, CA",
    year: "2008 - 2011",
    honors: "Chief Resident, 2010-2011",
  },
  {
    degree: "Fellowship in Aesthetic Medicine",
    institution: "American Academy of Aesthetic Medicine",
    location: "Chicago, IL",
    year: "2011 - 2012",
    honors: "Board Certified",
  },
  {
    degree: "Bachelor of Science in Biology",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    year: "2004",
    honors: "Summa Cum Laude",
  },
]

const certifications = [
  "Board Certified by the American Board of Dermatology",
  "Diplomate of the American Board of Aesthetic Medicine",
  "Advanced Certification in Regenerative Medicine",
  "Certified Laser Safety Officer",
  "Member, American Society for Dermatologic Surgery",
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground text-balance">
              Education & certifications
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 hover:border-border transition-all duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-lg md:text-xl text-foreground/70 font-light mb-1">{edu.institution}</p>
                      <p className="text-base text-muted-foreground font-light">{edu.location}</p>
                    </div>
                    <div className="text-base text-muted-foreground md:text-right font-light">
                      <p className="font-normal">{edu.year}</p>
                    </div>
                  </div>
                  <p className="text-base text-foreground/60 font-light mt-4">{edu.honors}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/50 bg-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-6">
                Professional certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-primary mt-1.5 text-lg">•</span>
                    <span className="text-muted-foreground leading-relaxed text-lg font-light">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
