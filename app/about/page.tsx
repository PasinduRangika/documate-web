"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Camera, Check, ChevronDown, ChevronUp, Settings, Smartphone, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const howItWorks = [
    {
      title: "Connect Your Camera",
      description: "Plug in your document camera via USB and open Documate in your browser",
      icon: <Camera className="h-10 w-10" />,
    },
    {
      title: "Configure Settings",
      description: "Select your camera, resolution, and other preferences",
      icon: <Settings className="h-10 w-10" />,
    },
    {
      title: "Start Using",
      description: "Control your camera with intuitive on-screen controls",
      icon: <Zap className="h-10 w-10" />,
    },
    {
      title: "Access Anywhere",
      description: "Use on any device with a browser - no installation needed",
      icon: <Smartphone className="h-10 w-10" />,
    },
  ]

  const supportedCameras = [
    { brand: "IPEVO", models: ["V4K", "VZ-R", "VZ-X"] },
    { brand: "ELMO", models: ["MX-P2", "L-12", "TT-12"] },
    { brand: "HoverCam", models: ["Solo 8Plus", "Ultra 8", "Solo 5"] },
    { brand: "Lumens", models: ["DC193", "DC125", "DC170"] },
    { brand: "AVer", models: ["F17-8M", "F50-8M", "M70-8M"] },
  ]

  const faqs = [
    {
      question: "Do I need to install any software?",
      answer: "No, Documate runs entirely in your browser. There's no need to install any software or apps.",
    },
    {
      question: "Which browsers are supported?",
      answer: "Documate works with all modern browsers including Chrome, Firefox, Safari, and Edge.",
    },
    {
      question: "Can I use Documate on my tablet or smartphone?",
      answer: "Yes, Documate is fully responsive and works on tablets and smartphones with modern browsers.",
    },
    {
      question: "How do I connect my document camera?",
      answer: "Simply connect your document camera to your device via USB, then open Documate in your browser.",
    },
    {
      question: "Is there a limit to the resolution I can use?",
      answer: "The maximum resolution depends on your camera's capabilities and your browser's WebRTC implementation.",
    },
  ]

  const changelog = [
    {
      version: "2.0.0",
      date: "May 1, 2023",
      changes: [
        "Complete UI redesign",
        "Added support for 4K resolution",
        "Improved camera detection",
        "Added dark mode",
      ],
      tags: ["Major Update", "UI"],
    },
    {
      version: "1.5.0",
      date: "February 15, 2023",
      changes: ["Added support for more camera models", "Improved performance", "Fixed various bugs"],
      tags: ["Feature", "Performance"],
    },
    {
      version: "1.0.0",
      date: "December 1, 2022",
      changes: ["Initial release", "Basic camera controls", "Support for common document cameras"],
      tags: ["Release"],
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Teacher",
      content:
        "Documate has transformed how I present materials in my classroom. It's so easy to use and the students love it!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Michael Chen",
      role: "Engineer",
      content:
        "The best document camera controller I've used. Clean interface, responsive controls, and works on any device.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content:
        "I use Documate for all my product demonstrations. The ability to control focus and zoom right from the browser is game-changing.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* How It Works Section */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold  sm:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              About Documate
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-400">
              Learn how Documate works and why it's the perfect solution for your document camera needs
            </p>
          </div>
          <div className="mb-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-gray-200 dark:border-gray-800">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <div className="mb-4 rounded-full bg-[#BBD5F8]/20 p-4 dark:bg-[#9DEAA8]/10">{step.icon}</div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Cameras Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Supported UVC Cameras</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-background">
            <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-3 lg:grid-cols-5">
              {supportedCameras.map((camera, index) => (
                <div key={index} className="text-center">
                  <h3 className="mb-2 font-bold">{camera.brand}</h3>
                  <div className="space-y-1">
                    {camera.models.map((model, modelIndex) => (
                      <Badge key={modelIndex} variant="outline" className="mr-1">
                        {model}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">And many more UVC-compliant document cameras</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">What's New</h2>
          <div className="mx-auto max-w-3xl space-y-8">
            {changelog.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border bg-background p-6"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">Version {release.version}</h3>
                    <p className="text-sm text-muted-foreground">{release.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {release.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2">
                  {release.changes.map((change, changeIndex) => (
                    <li key={changeIndex} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-green-500" />
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">What Our Users Say</h2>
          <div className="relative mx-auto max-w-3xl">
            {mounted && (
              <div className="overflow-hidden">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-lg border bg-background p-6"
                >
                  <div className="mb-4 flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[activeTestimonial].name}
                      />
                      <AvatarFallback>{testimonials[activeTestimonial].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                    </div>
                  </div>
                  <p className="italic">{testimonials[activeTestimonial].content}</p>
                </motion.div>
              </div>
            )}
            {mounted && (
              <div className="mt-4 flex justify-center gap-2">
                <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Previous testimonial">
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Next testimonial">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#BBD5F8]/20 py-20 dark:bg-[#9DEAA8]/10">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Join thousands of users who are already enjoying the benefits of Documate. Try it today!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="bg-[#9DEAA8] text-black hover:bg-[#8BD997]" size="lg">
              Add to Home Screen
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
