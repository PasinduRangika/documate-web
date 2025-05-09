"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "support@documate.app",
      link: "mailto:support@documate.app",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "123 Tech Lane, San Francisco, CA 94107",
      link: "https://maps.google.com/?q=123+Tech+Lane,+San+Francisco,+CA+94107",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold  sm:text-5xl">Contact Us</h1>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Send us a message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            rows={5}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-[#9DEAA8] text-black hover:bg-[#8BD997]">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
              {mounted && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-8"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>Reach out to us through any of these channels.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                          <a
                            key={index}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-muted"
                          >
                            <div className="rounded-full bg-[#BBD5F8]/20 p-2 dark:bg-[#9DEAA8]/10">{info.icon}</div>
                            <div>
                              <h3 className="font-medium">{info.title}</h3>
                              <p className="text-muted-foreground">{info.value}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Support Hours</CardTitle>
                      <CardDescription>We're here to help during these hours.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>9:00 AM - 6:00 PM EST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>10:00 AM - 4:00 PM EST</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted py-20">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Can't find the answer you're looking for? Reach out to our customer support team.
            </p>
            <Button variant="outline" size="lg">
              View All FAQs
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
