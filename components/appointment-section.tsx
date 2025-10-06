"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, Phone, MapPin } from "lucide-react"

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your appointment request. We will contact you shortly to confirm.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="appointment" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground mb-6 text-balance">
              Book your consultation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Begin your wellness journey with a personalized consultation tailored to your aesthetic and health goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-border/50 bg-card">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-8">Get in touch</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-normal text-foreground mb-2 text-lg">Phone</p>
                      <a
                        href="tel:+14155551234"
                        className="text-muted-foreground hover:text-primary transition-colors font-light"
                      >
                        (415) 555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-normal text-foreground mb-2 text-lg">Email</p>
                      <a
                        href="mailto:dr.chen@serenitywellness.com"
                        className="text-muted-foreground hover:text-primary transition-colors font-light"
                      >
                        dr.chen@serenitywellness.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-normal text-foreground mb-2 text-lg">Office hours</p>
                      <p className="text-muted-foreground font-light">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground font-light">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground font-light">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-normal text-foreground mb-2 text-lg">Location</p>
                      <p className="text-muted-foreground font-light">Serenity Wellness & Aesthetics</p>
                      <p className="text-muted-foreground font-light">123 Market Street, Suite 500</p>
                      <p className="text-muted-foreground font-light">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Form */}
            <Card className="border-border/50 bg-card">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-normal text-foreground mb-8">
                  Request appointment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-normal">
                      Full name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-normal">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-normal">
                      Phone number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(415) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-normal">
                        Preferred date
                      </Label>
                      <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-foreground font-normal">
                        Preferred time
                      </Label>
                      <Input id="time" name="time" type="time" value={formData.time} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-normal">
                      Message <span className="text-muted-foreground font-light">(Optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your wellness goals or any specific concerns..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
