"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Send, Calendar, ShieldCheck } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required"),
  phone: z.string().optional(),
  revenue: z.string().min(1, "Please select your monthly revenue"),
  challenge: z.string().min(1, "Please tell us about your biggest challenge"),
  referral: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const revenueOptions = [
  { value: "under-50k", label: "Under $50K" },
  { value: "50k-250k", label: "$50K–$250K" },
  { value: "250k-1m", label: "$250K–$1M" },
  { value: "1m-plus", label: "$1M+" },
]

export default function GetStartedPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      revenue: "",
      challenge: "",
      referral: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong")
      }

      toast({
        title: "Request received",
        description: "We'll be in touch within 24 hours with a recommendation.",
      })

      form.reset()
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or book a call instead.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#121411" }}>
      {/* Background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#bcf1ae]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#bcf1ae]/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <Link
            href="/"
            className="inline-block text-sm text-[#bcf1ae] hover:text-[#a1d494] mb-8"
          >
            &larr; Back to Verdant AI Partners
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-display text-balance opacity-0 animate-reveal">
            Tell us about your team. We&apos;ll scope your AI setup.
          </h1>
          <p className="text-lg leading-relaxed opacity-0 animate-reveal stagger-1" style={{ color: "#c2c9bb" }}>
            We&apos;ll get back to you within 24 hours with a tailored recommendation.
          </p>
        </div>

        {/* Lead Form Card */}
        <Card className="max-w-2xl mx-auto border shadow-xl overflow-hidden gradient-border opacity-0 animate-reveal stagger-2" style={{ backgroundColor: "#1a1c19", borderColor: "rgba(188,241,174,0.15)" }}>
          <div className="h-1 bg-gradient-to-r from-[#bcf1ae] to-[#a1d494]" />
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company"
                            className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                          Phone <span className="text-[#8c9387]">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="revenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                        Monthly Revenue
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae]">
                            <SelectValue placeholder="Select monthly revenue" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {revenueOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                        What&apos;s your biggest challenge right now?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Tell us in your own words..."
                          className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referral"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#c2c9bb]">
                        How did you hear about us? <span className="text-[#8c9387]">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Google, referral, social media..."
                          className="bg-[#292b27]/50 border-[#42493e]/50 text-white placeholder:text-[#8c9387] focus:border-[#bcf1ae] focus:ring-[#bcf1ae]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#bcf1ae] hover:opacity-90 text-[#0b390a] py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Get My Recommendation
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Divider + Alternative Contact */}
        <div className="max-w-2xl mx-auto mt-10">
          <div className="flex items-center gap-4">
            <Separator className="flex-1 bg-[#42493e]" />
            <span className="text-sm text-[#8c9387] font-medium">or</span>
            <Separator className="flex-1 bg-[#42493e]" />
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-[#bcf1ae]" />
              <p className="text-lg font-semibold text-white">
                Prefer to talk? Book a call directly.
              </p>
            </div>
            <div
              className="mt-4 rounded-lg border border-[#bcf1ae]/20 bg-[#0d0f0c]/20 p-8 text-center"
              data-url="https://calendly.com/YOUR_CALENDLY_URL"
            >
              <p className="text-sm" style={{ color: "#c2c9bb" }}>
                Schedule a free 30-minute strategy call. We&apos;ll discuss your goals and recommend the right path forward.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="max-w-2xl mx-auto mt-10 text-center">
          <div className="flex items-center justify-center gap-2 text-[#8c9387]">
            <ShieldCheck className="h-4 w-4 text-[#bcf1ae]" />
            <p className="text-sm">
              No spam. No pressure. Just a conversation about what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
