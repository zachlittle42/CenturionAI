"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { Send, Calendar } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-50 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-100 rounded-full opacity-30 blur-3xl"></div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready to Elevate Your Business?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-brand-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose how you'd like to connect with our team at Centurion AI.
          </p>
        </div>

        <Tabs defaultValue="form" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-brand-50 p-1 rounded-lg">
            <TabsTrigger
              value="form"
              className="data-[state=active]:bg-white data-[state=active]:text-brand-700 data-[state=active]:shadow-md"
            >
              <Send className="h-4 w-4 mr-2" />
              Contact Form
            </TabsTrigger>
            <TabsTrigger
              value="calendly"
              className="data-[state=active]:bg-white data-[state=active]:text-brand-700 data-[state=active]:shadow-md"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule a Call
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form">
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-center mb-6 text-gray-900">Tell us about your challenges</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Share a brief overview of your business..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-brand-500 focus:ring-brand-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-center text-gray-500">We'll respond within 24 hours.</p>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendly">
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-brand-500 to-brand-700"></div>
              <CardContent className="p-0 overflow-hidden rounded-md">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/YOUR_CALENDLY_URL"
                  style={{ minWidth: "320px", height: "630px" }}
                ></div>
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

