"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Camera, ChevronLeft, ChevronRight, Download } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ErrorBoundary } from "@/components/error-boundary"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Dynamically import Three.js components with no SSR
const CameraAnimation = dynamic(() => import("@/components/camera-animation"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[300px]">
      <div className="h-64 w-64 animate-pulse rounded-full bg-[#9DEAA8]/20"></div>
    </div>
  ),
})

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeCameraIndex, setActiveCameraIndex] = useState(0)
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      title: "Streamlined Camera Setup",
      subtitle: "Pick your camera. Set your resolution. Done.",
      description:
        "Switch between connected UVC cameras, select resolution, or adjust aspect ratio — all from a simple and clean interface.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Camera Controls",
      subtitle: "Focus. Zoom. Exposure.",
      description:
        "Easily adjust focus, zoom, and exposure to fine-tune your feed. Whether you're zooming in on text or adjusting for lighting, the app gives you all the control you need to showcase your content clearly.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const cameras = [
    {
      name: "IPEVO V4K",
      brand: "IPEVO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "ELMO MX-P2",
      brand: "ELMO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "HoverCam Solo 8Plus",
      brand: "HoverCam",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Lumens DC193",
      brand: "Lumens",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const nextFeature = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const nextCamera = () => {
    setActiveCameraIndex((prev) => (prev === cameras.length - 1 ? 0 : prev + 1))
  }

  const prevCamera = () => {
    setActiveCameraIndex((prev) => (prev === 0 ? cameras.length - 1 : prev - 1))
  }

  const toggleAnimation = () => {
    setShowAnimation(!showAnimation)
  }

  // Don't render anything until client-side hydration is complete
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-[#BBD5F8]/20 blur-3xl"></div>
          <div className="absolute left-20 bottom-20 h-64 w-64 rounded-full bg-[#9DEAA8]/20 blur-3xl"></div>
        </div>

        <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-6"
          >
            <div className="mb-4  ">
              {/* Browser-based Document Camera Controller */}
            </div>
            <h1 className="pb-[10px] text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Effortless Camera Control. Right in Your Browser
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
              Control your document camera like never before — live, interactive, and hassle-free
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button className="bg-[#9DEAA8] text-black hover:bg-[#8BD997]" size="lg">
                Add to Home Screen
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-700">
                <Download className="mr-2 h-4 w-4" />
                Get it on Google Play
              </Button>
            </div>
          </motion.div>

          <div className="mt-16 h-[300px] w-full max-w-2xl">
            {showAnimation ? (
              <ErrorBoundary
                fallback={
                  <div className="flex items-center justify-center h-[300px]">
                    <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50 p-8 text-center">
                      <Camera className="mx-auto h-12 w-12 text-[#9DEAA8] mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">Camera preview not available</p>
                      <Button variant="outline" size="sm" className="mt-4" onClick={toggleAnimation}>
                        Show Static Image
                      </Button>
                    </div>
                  </div>
                }
              >
                <CameraAnimation currentTheme={theme} />
              </ErrorBoundary>
            ) : (
              <div className="flex items-center justify-center h-[300px]">
                <div className="relative h-64 w-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Document camera"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/80 dark:bg-gray-900/80"
                      onClick={toggleAnimation}
                    >
                      Try 3D Animation
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full text-white dark:text-gray-900"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Key Feature Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-[#BBD5F8]/10 text-[#BBD5F8] hover:bg-[#BBD5F8]/20 dark:bg-[#BBD5F8]/20">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Key Features
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-400">
              Discover what makes Documate the perfect solution for your document camera needs
            </p>
          </div>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8 md:grid-cols-2 md:items-center"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{features[activeFeature].title}</h3>
                  <p className="text-xl font-medium text-[#BBD5F8] dark:text-[#9DEAA8]">
                    {features[activeFeature].subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{features[activeFeature].description}</p>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-2 shadow-lg">
                  <Image
                    src={features[activeFeature].image || "/placeholder.svg"}
                    alt={features[activeFeature].title}
                    width={600}
                    height={400}
                    className="rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-transparent dark:from-gray-950/80"></div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevFeature}
                aria-label="Previous feature"
                className="border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextFeature}
                aria-label="Next feature"
                className="border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Camera Compatibility Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-[#9DEAA8]/10 text-[#9DEAA8] hover:bg-[#9DEAA8]/20 dark:bg-[#9DEAA8]/20">
              Compatibility
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
              Compatible with Leading Document Cameras
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-gray-600 dark:text-gray-400">
              Seamless plug-and-play support for leading document cameras, fully compatible with all UVC-compliant
              document cameras
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCameraIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <Card className="w-full max-w-md overflow-hidden border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative h-48 w-48 rounded-full bg-gray-100 dark:bg-gray-800 p-4">
                          <Image
                            src={cameras[activeCameraIndex].image || "/placeholder.svg"}
                            alt={cameras[activeCameraIndex].name}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {cameras[activeCameraIndex].name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">{cameras[activeCameraIndex].brand}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevCamera}
                aria-label="Previous camera"
                className="border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextCamera}
                aria-label="Next camera"
                className="border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-br from-[#BBD5F8]/10 to-[#9DEAA8]/10 p-8 dark:from-[#BBD5F8]/5 dark:to-[#9DEAA8]/5 shadow-lg border border-gray-100 dark:border-gray-800">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <Badge className="mb-2 bg-white/80 text-gray-900 hover:bg-white dark:bg-gray-800 dark:text-white">
                  Get Started Today
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Join thousands of users who are already enjoying the benefits of Documate. Try it today!
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button className="bg-[#9DEAA8] text-black hover:bg-[#8BD997]">Add to Home Screen</Button>
                  <Button variant="outline" className="border-gray-300 dark:border-gray-700">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50 shadow-inner">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Document camera in action"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/90 dark:bg-gray-900/90 p-4 shadow-lg">
                    <Camera className="h-12 w-12 text-[#9DEAA8]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Get Started Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button className="bg-[#9DEAA8] text-black hover:bg-[#8BD997] shadow-lg" size="lg">
          Get Started
        </Button>
      </div>
    </>
  )
}
