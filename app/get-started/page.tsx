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
  teamSize: z.string().min(1, "Please select a team size"),
  interest: z.string().min(1, "Please select what you're interested in"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const teamSizeOptions = [
  { value: "1-10", label: "1-10" },
  { value: "11-25", label: "11-25" },
  { value: "26-50", label: "26-50" },
  { value: "51-150", label: "51-150" },
  { value: "150+", label: "150+" },
]

const interestOptions = [
  { value: "ai-foundations", label: "AI Foundations - Platform Setup & Training" },
  { value: "custom-workflows", label: "Custom Workflows - Automation & Agents" },
  { value: "managed-infrastructure", label: "Managed AI Infrastructure - OpenClaw" },
  { value: "ai-engineering", label: "AI Engineering - Software Development" },
  { value: "strategy-audit", label: "Strategy Audit - Where Does AI Fit?" },
  { value: "not-sure", label: "Not sure yet - help me figure it out" },
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
      teamSize: "",
      interest: "",
      message: "",
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
        description: "We'll be in touch within 24 hours.",
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
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#0F172A" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.03] z-0" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <Link
            href="/"
            className="inline-block text-sm text-blue-400 hover:text-blue-300 mb-8"
          >
            &larr; Back to Centurion AI
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 font-display text-balance opacity-0 animate-reveal">
            Let&apos;s figure out the right path for you.
          </h1>
          <p className="text-lg leading-relaxed opacity-0 animate-reveal stagger-1" style={{ color: "#94A3B8" }}>
            Tell us about your business and what you&apos;re looking for. We&apos;ll respond within 24 hours with a tailored recommendation.
          </p>
        </div>

        {/* Lead Form Card */}
        <Card className="max-w-2xl mx-auto border shadow-xl overflow-hidden gradient-border opacity-0 animate-reveal stagger-2" style={{ backgroundColor: "#1E293B", borderColor: "rgba(96,165,250,0.15)" }}>
          <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@company.com"
                            className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
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
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your company"
                            className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-slate-300">
                          Team Size
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500">
                              <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {teamSizeOptions.map((option) => (
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
                </div>

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-300">
                        What are you interested in?
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {interestOptions.map((option) => (
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-slate-300">
                        Tell us more
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="What challenges are you facing? What are you hoping AI can help with?"
                          className="bg-slate-800/50 border-slate-600/50 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send My Request
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
            <Separator className="flex-1 bg-slate-700" />
            <span className="text-sm text-slate-500 font-medium">or</span>
            <Separator className="flex-1 bg-slate-700" />
          </div>

          <div className="text-center mt-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-blue-400" />
              <p className="text-lg font-semibold text-white">
                Prefer to talk? Book a call directly.
              </p>
            </div>
            <div
              className="mt-4 rounded-lg border border-blue-400/20 bg-blue-900/20 p-8 text-center"
              data-url="https://calendly.com/YOUR_CALENDLY_URL"
            >
              <p className="text-sm" style={{ color: "#94A3B8" }}>
                Schedule a free 30-minute strategy call. We&apos;ll discuss your goals and recommend the right path forward.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="max-w-2xl mx-auto mt-10 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            <p className="text-sm">
              No spam. No pressure. Just a conversation about what&apos;s possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
