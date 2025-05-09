"use client"

import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

interface CtaAnimationProps {
  theme?: string
}

export default function CtaAnimation({ theme = "light" }: CtaAnimationProps) {
  // Safety check to ensure we're in the browser
  if (typeof window === "undefined") {
    return <div className="h-full w-full bg-gradient-to-br from-[#BBD5F8]/10 to-transparent rounded-lg" />
  }

  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* Simple lighting setup without Environment component */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />

        <OrbitControls enableZoom={false} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial
              color={theme === "dark" ? "#9DEAA8" : "#BBD5F8"}
              wireframe
              emissive={theme === "dark" ? "#9DEAA8" : "#BBD5F8"}
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      </Suspense>
    </Canvas>
  )
}
