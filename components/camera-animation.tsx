// "use client"

// import { useRef, useEffect, Suspense } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { PresentationControls } from "@react-three/drei"
// import * as THREE from "three"

// function DocumentCamera({ currentTheme }) {
//   const { scene } = useThree()
//   const cameraRef = useRef()

//   // Create a simple document camera model
//   useEffect(() => {
//     if (!cameraRef.current) {
//       // Base
//       const base = new THREE.Mesh(
//         new THREE.BoxGeometry(2, 0.2, 2),
//         new THREE.MeshStandardMaterial({
//           color: currentTheme === "dark" ? "#333333" : "#EEEEEE",
//           metalness: 0.8,
//           roughness: 0.2,
//         }),
//       )
//       base.position.y = -1

//       // Stand
//       const stand = new THREE.Mesh(
//         new THREE.CylinderGeometry(0.1, 0.1, 2, 16),
//         new THREE.MeshStandardMaterial({
//           color: currentTheme === "dark" ? "#444444" : "#DDDDDD",
//           metalness: 0.8,
//           roughness: 0.2,
//         }),
//       )
//       stand.position.y = 0

//       // Camera head
//       const head = new THREE.Mesh(
//         new THREE.BoxGeometry(0.8, 0.5, 0.5),
//         new THREE.MeshStandardMaterial({
//           color: currentTheme === "dark" ? "#222222" : "#CCCCCC",
//           metalness: 0.9,
//           roughness: 0.1,
//         }),
//       )
//       head.position.y = 1

//       // Lens
//       const lens = new THREE.Mesh(
//         new THREE.CylinderGeometry(0.15, 0.15, 0.2, 32),
//         new THREE.MeshStandardMaterial({
//           color: "#111111",
//           metalness: 0.9,
//           roughness: 0.1,
//         }),
//       )
//       lens.rotation.x = Math.PI / 2
//       lens.position.set(0, 1, 0.35)

//       // Lens glass
//       const glass = new THREE.Mesh(
//         new THREE.CircleGeometry(0.12, 32),
//         new THREE.MeshStandardMaterial({
//           color: "#88CCFF",
//           metalness: 0.9,
//           roughness: 0.1,
//           transparent: true,
//           opacity: 0.8,
//         }),
//       )
//       glass.rotation.x = Math.PI / 2
//       glass.position.set(0, 1, 0.46)

//       // LED
//       const led = new THREE.Mesh(
//         new THREE.SphereGeometry(0.05, 16, 16),
//         new THREE.MeshStandardMaterial({
//           color: "#9DEAA8",
//           emissive: "#9DEAA8",
//           emissiveIntensity: 2,
//         }),
//       )
//       led.position.set(0.3, 1, 0.25)

//       // Arm
//       const arm = new THREE.Mesh(
//         new THREE.BoxGeometry(0.1, 0.8, 0.1),
//         new THREE.MeshStandardMaterial({
//           color: currentTheme === "dark" ? "#444444" : "#DDDDDD",
//           metalness: 0.8,
//           roughness: 0.2,
//         }),
//       )
//       arm.position.set(0, 0.6, 0)

//       // Create a group and add all parts
//       const cameraGroup = new THREE.Group()
//       cameraGroup.add(base)
//       cameraGroup.add(stand)
//       cameraGroup.add(head)
//       cameraGroup.add(lens)
//       cameraGroup.add(glass)
//       cameraGroup.add(led)
//       cameraGroup.add(arm)

//       // Add to scene
//       scene.add(cameraGroup)
//       cameraRef.current = cameraGroup
//     }

//     // Update materials when theme changes
//     if (cameraRef.current) {
//       const base = cameraRef.current.children[0]
//       const stand = cameraRef.current.children[1]
//       const head = cameraRef.current.children[2]
//       const arm = cameraRef.current.children[6]

//       base.material.color.set(currentTheme === "dark" ? "#333333" : "#EEEEEE")
//       stand.material.color.set(currentTheme === "dark" ? "#444444" : "#DDDDDD")
//       head.material.color.set(currentTheme === "dark" ? "#222222" : "#CCCCCC")
//       arm.material.color.set(currentTheme === "dark" ? "#444444" : "#DDDDDD")
//     }
//   }, [scene, currentTheme])

//   // Animate the camera
//   useFrame((state) => {
//     if (cameraRef.current) {
//       // Gentle floating animation
//       cameraRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2

//       // LED blinking occasionally
//       const led = cameraRef.current.children[5]
//       if (Math.random() > 0.995) {
//         led.material.emissiveIntensity = 0.5
//         setTimeout(() => {
//           if (led) led.material.emissiveIntensity = 2
//         }, 150)
//       }
//     }
//   })

//   return null
// }

// export default function CameraAnimation({ currentTheme = "light" }) {
//   // Safety check to ensure we're in the browser
//   if (typeof window === "undefined") {
//     return <div className="h-full w-full bg-gradient-to-br from-[#BBD5F8]/10 to-[#9DEAA8]/10 rounded-lg" />
//   }

//   return (
//     <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
//       <Suspense fallback={null}>
//         {/* Simple lighting setup without Environment component */}
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[10, 10, 5]} intensity={0.8} />
//         <directionalLight position={[-10, -10, -5]} intensity={0.4} />
//         <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow />

//         <PresentationControls
//           global
//           rotation={[0, 0, 0]}
//           polar={[-Math.PI / 4, Math.PI / 4]}
//           azimuth={[-Math.PI / 4, Math.PI / 4]}
//           config={{ mass: 2, tension: 400 }}
//           snap={{ mass: 4, tension: 400 }}
//         >
//           <DocumentCamera currentTheme={currentTheme} />
//         </PresentationControls>
//       </Suspense>
//     </Canvas>
//   )
// }
"use client"

import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber"
import { EXRLoader } from "three-stdlib"
import { PMREMGenerator } from "three"
import { PresentationControls } from "@react-three/drei"
import * as THREE from "three"

function HDRIEnvironment() {
  const { scene, gl } = useThree()
  const texture = useLoader(EXRLoader, "/studio_small_03_4k.exr")

  useEffect(() => {
    const pmremGenerator = new PMREMGenerator(gl)
    const envMap = pmremGenerator.fromEquirectangular(texture).texture
    scene.environment = envMap
    texture.dispose()
    pmremGenerator.dispose()

    return () => {
      scene.environment = null
    }
  }, [texture, scene, gl])

  return null
}

function DocumentCamera({ currentTheme }) {
  const { scene } = useThree()
  const cameraRef = useRef()

  useEffect(() => {
    if (!cameraRef.current) {
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.2, 2),
        new THREE.MeshStandardMaterial({
          color: currentTheme === "dark" ? "#333333" : "#EEEEEE",
          metalness: 0.8,
          roughness: 0.2,
        }),
      )
      base.position.y = -1

      const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 2, 16),
        new THREE.MeshStandardMaterial({
          color: currentTheme === "dark" ? "#444444" : "#DDDDDD",
          metalness: 0.8,
          roughness: 0.2,
        }),
      )
      stand.position.y = 0

      const head = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.5, 0.5),
        new THREE.MeshStandardMaterial({
          color: currentTheme === "dark" ? "#222222" : "#CCCCCC",
          metalness: 0.9,
          roughness: 0.1,
        }),
      )
      head.position.y = 1

      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 0.2, 32),
        new THREE.MeshStandardMaterial({
          color: "#111111",
          metalness: 0.9,
          roughness: 0.1,
        }),
      )
      lens.rotation.x = Math.PI / 2
      lens.position.set(0, 1, 0.35)

      const glass = new THREE.Mesh(
        new THREE.CircleGeometry(0.12, 32),
        new THREE.MeshStandardMaterial({
          color: "#88CCFF",
          metalness: 0.9,
          roughness: 0.1,
          transparent: true,
          opacity: 0.8,
        }),
      )
      glass.rotation.x = Math.PI / 2
      glass.position.set(0, 1, 0.46)

      const led = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshStandardMaterial({
          color: "#9DEAA8",
          emissive: "#9DEAA8",
          emissiveIntensity: 2,
        }),
      )
      led.position.set(0.3, 1, 0.25)

      const arm = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.8, 0.1),
        new THREE.MeshStandardMaterial({
          color: currentTheme === "dark" ? "#444444" : "#DDDDDD",
          metalness: 0.8,
          roughness: 0.2,
        }),
      )
      arm.position.set(0, 0.6, 0)

      const cameraGroup = new THREE.Group()
      cameraGroup.add(base, stand, head, lens, glass, led, arm)

      scene.add(cameraGroup)
      cameraRef.current = cameraGroup
    }

    if (cameraRef.current) {
      const base = cameraRef.current.children[0]
      const stand = cameraRef.current.children[1]
      const head = cameraRef.current.children[2]
      const arm = cameraRef.current.children[6]

      base.material.color.set(currentTheme === "dark" ? "#333333" : "#EEEEEE")
      stand.material.color.set(currentTheme === "dark" ? "#444444" : "#DDDDDD")
      head.material.color.set(currentTheme === "dark" ? "#222222" : "#CCCCCC")
      arm.material.color.set(currentTheme === "dark" ? "#444444" : "#DDDDDD")
    }
  }, [scene, currentTheme])

  useFrame((state) => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      const led = cameraRef.current.children[5]
      if (Math.random() > 0.995) {
        led.material.emissiveIntensity = 0.5
        setTimeout(() => {
          if (led) led.material.emissiveIntensity = 2
        }, 150)
      }
    }
  })

  return null
}

export default function CameraAnimation({ currentTheme = "light" }) {
  if (typeof window === "undefined") {
    return (
      <div className="h-full w-full bg-gradient-to-br from-[#BBD5F8]/10 to-[#9DEAA8]/10 rounded-lg" />
    )
  }

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow />
        <HDRIEnvironment />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <DocumentCamera currentTheme={currentTheme} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  )
}
