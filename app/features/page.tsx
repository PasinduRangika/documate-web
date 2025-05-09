"use client"

import { motion } from "framer-motion"
import { Camera, Check, Cpu, Focus, ImageIcon, Layers, Maximize, Sliders, Smartphone, Zap } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: "Camera Selection",
      description: "Easily switch between multiple connected document cameras",
      icon: <Camera className="h-10 w-10" />,
    },
    {
      title: "Resolution Control",
      description: "Select from multiple resolution options for optimal quality",
      icon: <Maximize className="h-10 w-10" />,
    },
    {
      title: "Focus Control",
      description: "Adjust focus manually or use auto-focus for crystal clear images",
      icon: <Focus className="h-10 w-10" />,
    },
    {
      title: "Zoom Control",
      description: "Zoom in and out to capture details or the full scene",
      icon: <Layers className="h-10 w-10" />,
    },
    {
      title: "Exposure Settings",
      description: "Fine-tune exposure for perfect lighting in any environment",
      icon: <Sliders className="h-10 w-10" />,
    },
    {
      title: "Image Capture",
      description: "Take snapshots of your document camera feed with a single click",
      icon: <ImageIcon className="h-10 w-10" />,
    },
    {
      title: "Cross-Platform",
      description: "Works on any device with a modern web browser",
      icon: <Smartphone className="h-10 w-10" />,
    },
    {
      title: "No Installation",
      description: "Run directly in your browser - no software to install",
      icon: <Zap className="h-10 w-10" />,
    },
    {
      title: "Low Latency",
      description: "Experience real-time control with minimal delay",
      icon: <Cpu className="h-10 w-10" />,
    },
  ]

  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic features for personal use",
      features: [
        "Camera selection",
        "Basic resolution options",
        "Manual focus control",
        "Basic zoom control",
        "Cross-platform support",
      ],
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Advanced features for professionals",
      features: [
        "All Free features",
        "4K resolution support",
        "Advanced focus controls",
        "Enhanced zoom capabilities",
        "Exposure fine-tuning",
        "Image capture and save",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Contact us",
      description: "Custom solutions for organizations",
      features: [
        "All Pro features",
        "Custom deployment options",
        "Multiple user accounts",
        "Advanced security features",
        "Custom branding",
        "Dedicated support",
        "Training sessions",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold sm:text-5xl">Features</h1>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Discover all the powerful features that make Documate the perfect solution for your document camera
                needs
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="mb-2 rounded-full bg-[#BBD5F8]/20 p-2 w-fit dark:bg-[#9DEAA8]/10">
                        {feature.icon}
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-muted py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Pricing Plans</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">Choose the perfect plan for your needs</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`h-full overflow-hidden ${
                    tier.highlighted ? "border-[#9DEAA8] shadow-lg dark:border-[#9DEAA8]" : ""
                  }`}
                >
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground"> {tier.period}</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {mounted && (
                      <Button
                        className={`mt-6 w-full ${tier.highlighted ? "bg-[#9DEAA8] text-black hover:bg-[#8BD997]" : ""}`}
                        variant={tier.highlighted ? "default" : "outline"}
                      >
                        {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Section */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold">Feature Comparison</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                See how our features compare across different plans
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Free</th>
                    <th className="p-4 text-center">Pro</th>
                    <th className="p-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Camera Selection</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">4K Resolution</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Advanced Focus Controls</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Image Capture</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Custom Branding</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Multiple User Accounts</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Priority Support</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
              {mounted && (
                <Button className="bg-[#9DEAA8] text-black hover:bg-[#8BD997]" size="lg">
                  Add to Home Screen
                </Button>
              )}
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
