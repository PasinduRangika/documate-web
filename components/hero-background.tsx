"use client"

import { useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"

interface HeroBackgroundProps {
  theme?: string
}

export default function HeroBackground({ theme = "light" }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Safety check to ensure we're in the browser
  if (typeof window === "undefined") {
    return <div className="absolute inset-0 bg-gradient-to-br from-[#BBD5F8]/20 to-transparent" />
  }

  return (
    <Canvas>
      <Suspense fallback={null}>
        {/* Simple lighting setup without Environment component */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[0, 0, -5]} rotation={[0, 0, 0]}>
            <torusGeometry args={[3, 1, 16, 100]} />
            <meshStandardMaterial color={theme === "dark" ? "#9DEAA8" : "#BBD5F8"} wireframe />
          </mesh>
        </Float>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[-5, 2, -10]} rotation={[0, 0, 0]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial color={theme === "dark" ? "#BBD5F8" : "#9DEAA8"} wireframe />
          </mesh>
        </Float>
      </Suspense>
    </Canvas>
  )
}
