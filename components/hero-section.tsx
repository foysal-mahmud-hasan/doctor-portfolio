import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-spa-treatment-room-with-natural-light-and-m.jpg"
          alt="Luxury spa treatment room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto space-y-8 py-20">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-foreground text-balance leading-tight">
            Elevating wellness through artistry
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-light">
            Board-certified physician specializing in aesthetic medicine, regenerative treatments, and personalized
            holistic care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" asChild className="text-base px-8">
              <a href="#appointment">Book consultation</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent">
              <a href="#experience">View experience</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
