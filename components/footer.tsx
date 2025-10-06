export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground tracking-wide">
              DR. SARAH CHEN
            </h3>
            <p className="text-muted-foreground font-light">Board-Certified Aesthetic & Wellness Physician</p>
            <div className="flex justify-center gap-8 pt-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors font-light tracking-wide"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground font-light">
                © {new Date().getFullYear()} Dr. Sarah Chen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
