"use client"

import * as React from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

interface InteractiveCanvasProps {
  activeSection: string
}

export function InteractiveCanvas({ activeSection }: InteractiveCanvasProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  // Track active section via Ref to prevent tearing down the WebGL scene on change
  const activeSectionRef = React.useRef(activeSection)
  React.useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  React.useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let width = container.clientWidth
    let height = container.clientHeight

    // Create Scene, Camera, and Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Device-specific properties for responsiveness
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 350 : 700 // Slight performance buffer for connection lines
    const scale = isMobile ? 0.7 : 1.0

    // Geometry and particle properties
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const initialPositions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    // Pre-initialize particles in a random sphere distribution so startup is clean
    const radius = 5 * scale
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = radius * (0.8 + 0.2 * Math.random())

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      initialPositions[i * 3] = x
      initialPositions[i * 3 + 1] = y
      initialPositions[i * 3 + 2] = z

      // Startup color fallback
      colors[i * 3] = 0.5
      colors[i * 3 + 1] = 0.5
      colors[i * 3 + 2] = 0.5
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    // Particle texture (soft glowing circle)
    const canvas = document.createElement("canvas")
    canvas.width = 16
    canvas.height = 16
    const ctx = canvas.getContext("2d")
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)")
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)")
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 16, 16)
    }
    const texture = new THREE.CanvasTexture(canvas)

    // Points Material
    const isDark = resolvedTheme === "dark"
    const pointsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.15 : 0.22,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.6 : 0.5,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })

    const particleSystem = new THREE.Points(geometry, pointsMaterial)
    scene.add(particleSystem)

    // Lines for visual constellation effect
    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: isDark ? 0.14 : 0.08,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineMesh)

    // Interactive mouse state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1
      mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        mouse.targetX = (event.touches[0].clientX / window.innerWidth) * 2 - 1
        mouse.targetY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    // Palette generator for the 3D sections
    const getSectionColors = (section: string) => {
      if (section === "projects") {
        return {
          primary: isDark ? new THREE.Color("#0ea5e9") : new THREE.Color("#2563eb"), // Cyan vs Blue
          secondary: isDark ? new THREE.Color("#8b5cf6") : new THREE.Color("#7c3aed"), // Purple vs Violet
        }
      } else if (section === "about") {
        return {
          primary: isDark ? new THREE.Color("#10b981") : new THREE.Color("#059669"), // Emerald vs Forest
          secondary: isDark ? new THREE.Color("#06b6d4") : new THREE.Color("#0891b2"), // Cyan vs Teal
        }
      } else if (section === "experience") {
        return {
          primary: isDark ? new THREE.Color("#f59e0b") : new THREE.Color("#d97706"), // Amber vs Bronze
          secondary: isDark ? new THREE.Color("#f43f5e") : new THREE.Color("#e11d48"), // Rose vs Crimson
        }
      } else if (section === "skills") {
        return {
          primary: isDark ? new THREE.Color("#3b82f6") : new THREE.Color("#1d4ed8"), // Blue vs Navy
          secondary: isDark ? new THREE.Color("#6366f1") : new THREE.Color("#4f46e5"), // Indigo vs Royal
        }
      } else { // connect
        return {
          primary: isDark ? new THREE.Color("#d946ef") : new THREE.Color("#c026d3"), // Fuchsia vs Dark Fuchsia
          secondary: isDark ? new THREE.Color("#8b5cf6") : new THREE.Color("#7c3aed"), // Purple vs Violet
        }
      }
    }

    // Mathematical calculations for morphing shapes
    const getTargetPosition = (i: number, time: number, section: string) => {
      const radius = 5.0 * scale

      if (section === "projects") {
        // Sphere
        const theta = (i * 0.15) + time * 0.05
        const phi = Math.acos(-1 + (2 * i) / particleCount)
        const r = radius * (0.85 + 0.15 * Math.sin(time * 0.2 + i * 0.1))
        
        return {
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi)
        }
      } else if (section === "about") {
        // Torus (Donut)
        const u = (i / particleCount) * 2.0 * Math.PI * 4 + time * 0.08
        const v = (i / particleCount) * 2.0 * Math.PI * 18 + time * 0.25
        const R = 4.2 * scale
        const r = 1.3 * scale * (1 + 0.1 * Math.sin(time * 0.4 + i * 0.08))
        return {
          x: (R + r * Math.cos(v)) * Math.cos(u),
          y: (R + r * Math.cos(v)) * Math.sin(u),
          z: r * Math.sin(v)
        }
      } else if (section === "experience") {
        // Double Helix (Vertical DNA)
        const isStrandA = i % 2 === 0
        const t = (i / particleCount) * 2.0 * Math.PI * 3.5 + time * 0.2
        const angle = isStrandA ? t : t + Math.PI
        const helixRadius = 2.3 * scale * (1 + 0.08 * Math.sin(time * 0.35 + i * 0.05))
        const height = 9 * scale
        return {
          x: helixRadius * Math.cos(angle),
          y: ((i / particleCount) - 0.5) * height,
          z: helixRadius * Math.sin(angle)
        }
      } else if (section === "skills") {
        // Atomic Orbit Rings
        const plane = i % 4
        const angle = (i / particleCount) * 2.0 * Math.PI * 3 + time * (plane === 0 ? 0.2 : plane === 1 ? -0.25 : plane === 2 ? 0.18 : -0.3)
        const orbitRadius = (4.0 + 0.3 * Math.sin(time * 0.4 + i * 0.05)) * scale
        
        if (plane === 0) { // XY plane
          return {
            x: orbitRadius * Math.cos(angle),
            y: orbitRadius * Math.sin(angle),
            z: 0
          }
        } else if (plane === 1) { // YZ plane
          return {
            x: 0,
            y: orbitRadius * Math.cos(angle),
            z: orbitRadius * Math.sin(angle)
          }
        } else if (plane === 2) { // ZX plane
          return {
            x: orbitRadius * Math.sin(angle),
            y: 0,
            z: orbitRadius * Math.cos(angle)
          }
        } else { // Tilted plane
          const cosA = Math.cos(angle)
          const sinA = Math.sin(angle)
          return {
            x: orbitRadius * cosA * Math.cos(Math.PI / 4),
            y: orbitRadius * sinA,
            z: orbitRadius * cosA * Math.sin(Math.PI / 4)
          }
        }
      } else {
        // Connect - Conical Vortex
        const t = (i / particleCount)
        const angle = t * 2.0 * Math.PI * 5 - time * 0.4
        const vortexRadius = (t * 5.0 + 0.4) * scale
        return {
          x: vortexRadius * Math.cos(angle),
          y: (t - 0.5) * 8.5 * scale,
          z: vortexRadius * Math.sin(angle)
        }
      }
    }

    // Animation Loop variables
    const startTime = performance.now()
    let animationFrameId: number

    // Render loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const time = (performance.now() - startTime) * 0.001
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute
      const currentPositions = positionsAttr.array as Float32Array

      const colorsAttr = geometry.attributes.color as THREE.BufferAttribute
      const currentColors = colorsAttr.array as Float32Array

      // Smooth mouse coordinate interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      // Rotate group towards cursor
      particleSystem.rotation.y = time * 0.03 + mouse.x * 0.25
      particleSystem.rotation.x = mouse.y * 0.25
      lineMesh.rotation.copy(particleSystem.rotation)

      // Fetch dynamic settings from ref
      const currentSection = activeSectionRef.current
      const sectionColors = getSectionColors(currentSection)

      // Connection lines spacing optimizations based on active shape density
      let connectionDistance = isMobile ? 1.3 : 1.6
      if (currentSection === "about") connectionDistance = isMobile ? 0.9 : 1.1
      else if (currentSection === "experience") connectionDistance = isMobile ? 0.7 : 0.9
      else if (currentSection === "skills") connectionDistance = isMobile ? 0.6 : 0.8
      else if (currentSection === "connect") connectionDistance = isMobile ? 0.8 : 1.0

      // Particle physics & mathematical shape lerp
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3
        const yIdx = i * 3 + 1
        const zIdx = i * 3 + 2

        // Get target coordinate for current section shape
        const target = getTargetPosition(i, time, currentSection)

        // Seamless glide morphing towards target coordinate
        initialPositions[xIdx] += (target.x - initialPositions[xIdx]) * 0.05
        initialPositions[yIdx] += (target.y - initialPositions[yIdx]) * 0.05
        initialPositions[zIdx] += (target.z - initialPositions[zIdx]) * 0.05

        // Micro ripples and natural wave offsets
        const waveX = Math.sin(time * 1.5 + initialPositions[xIdx] * 0.4) * 0.05
        const waveY = Math.cos(time * 1.2 + initialPositions[yIdx] * 0.4) * 0.05
        const waveZ = Math.sin(time * 1.0 + initialPositions[zIdx] * 0.4) * 0.05

        currentPositions[xIdx] = initialPositions[xIdx] + waveX
        currentPositions[yIdx] = initialPositions[yIdx] + waveY
        currentPositions[zIdx] = initialPositions[zIdx] + waveZ

        // Dynamic gradient color calculations
        const mixRatio = (currentPositions[xIdx] + radius) / (2 * radius)
        const targetColor = new THREE.Color().copy(sectionColors.primary).lerp(sectionColors.secondary, THREE.MathUtils.clamp(mixRatio, 0, 1))

        // Lerp color changes for smooth palette morphing
        currentColors[xIdx] += (targetColor.r - currentColors[xIdx]) * 0.05
        currentColors[xIdx + 1] += (targetColor.g - currentColors[xIdx + 1]) * 0.05
        currentColors[xIdx + 2] += (targetColor.b - currentColors[xIdx + 2]) * 0.05
      }
      positionsAttr.needsUpdate = true
      colorsAttr.needsUpdate = true

      // Dynamic connection lines constellation builder
      const linePositions: number[] = []
      const lineColors: number[] = []

      // Performance check: stride lines comparison dynamically to preserve INP
      const step = isMobile ? 2 : 1
      for (let i = 0; i < particleCount; i += step) {
        const x1 = currentPositions[i * 3]
        const y1 = currentPositions[i * 3 + 1]
        const z1 = currentPositions[i * 3 + 2]

        for (let j = i + 1; j < particleCount; j += step) {
          const x2 = currentPositions[j * 3]
          const y2 = currentPositions[j * 3 + 1]
          const z2 = currentPositions[j * 3 + 2]

          const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2)

          if (dist < connectionDistance) {
            linePositions.push(x1, y1, z1)
            linePositions.push(x2, y2, z2)

            lineColors.push(currentColors[i * 3], currentColors[i * 3 + 1], currentColors[i * 3 + 2])
            lineColors.push(currentColors[j * 3], currentColors[j * 3 + 1], currentColors[j * 3 + 2])
          }
        }
      }

      lineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3))
      lineGeometry.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3))
      lineGeometry.attributes.position.needsUpdate = true
      if (lineGeometry.attributes.color) lineGeometry.attributes.color.needsUpdate = true

      // Render Scene
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      width = containerRef.current.clientWidth
      height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      pointsMaterial.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [resolvedTheme])

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
      style={{ 
        maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)"
      }}
    />
  )
}
