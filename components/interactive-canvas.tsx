"use client"

import * as React from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

export function InteractiveCanvas() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

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
    const particleCount = isMobile ? 350 : 800
    const connectionDistance = isMobile ? 1.5 : 1.8
    const scale = isMobile ? 0.7 : 1.0

    // Geometry and particle properties
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const initialPositions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    // Setup theme-based colors
    const isDark = resolvedTheme === "dark"
    const colorPrimary = isDark ? new THREE.Color("#0ea5e9") : new THREE.Color("#2563eb") // Cyan vs Indigo
    const colorSecondary = isDark ? new THREE.Color("#8b5cf6") : new THREE.Color("#7c3aed") // Purple vs Violet

    const radius = 5 * scale

    // Generate random positions inside a sphere using spherical coordinates
    for (let i = 0; i < particleCount; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = radius * (0.8 + 0.2 * Math.random()) // Slight volume variance

      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      initialPositions[i * 3] = x
      initialPositions[i * 3 + 1] = y
      initialPositions[i * 3 + 2] = z

      // Velocity for subtle floating movements
      velocities[i * 3] = (Math.random() - 0.5) * 0.015
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.015
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015

      // Gradient color based on position
      const mixRatio = (x + radius) / (2 * radius)
      const particleColor = new THREE.Color().copy(colorPrimary).lerp(colorSecondary, mixRatio)
      colors[i * 3] = particleColor.r
      colors[i * 3 + 1] = particleColor.g
      colors[i * 3 + 2] = particleColor.b
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
      opacity: isDark ? 0.12 : 0.06,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })

    const lineGeometry = new THREE.BufferGeometry()
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineMesh)

    // Interactive mouse state
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }
    let lastMouseX = 0
    let lastMouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      // Map normalized coordinates from -1 to 1
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

    // Animation Loop variables
    let clock = new THREE.Clock()
    let animationFrameId: number

    // Render loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const time = clock.getElapsedTime()
      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute
      const currentPositions = positionsAttr.array as Float32Array

      // Smooth mouse coordinate interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      // Rotate group towards cursor
      particleSystem.rotation.y = time * 0.04 + mouse.x * 0.35
      particleSystem.rotation.x = mouse.y * 0.35
      lineMesh.rotation.copy(particleSystem.rotation)

      // Dynamic wave distortion and float simulation
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3
        const yIdx = i * 3 + 1
        const zIdx = i * 3 + 2

        // Float movement
        initialPositions[xIdx] += velocities[xIdx]
        initialPositions[yIdx] += velocities[yIdx]
        initialPositions[zIdx] += velocities[zIdx]

        // Keep inside sphere volume boundary
        const dist = Math.sqrt(
          initialPositions[xIdx] ** 2 +
          initialPositions[yIdx] ** 2 +
          initialPositions[zIdx] ** 2
        )
        if (dist > radius * 1.1 || dist < radius * 0.7) {
          velocities[xIdx] *= -1
          velocities[yIdx] *= -1
          velocities[zIdx] *= -1
        }

        // Apply interactive wave ripples based on trigonometric waves
        const wave = Math.sin(time * 1.2 + initialPositions[xIdx] * 0.4) * 0.08
        currentPositions[xIdx] = initialPositions[xIdx] + wave
        currentPositions[yIdx] = initialPositions[yIdx] + Math.cos(time * 0.8 + initialPositions[yIdx] * 0.4) * 0.08
        currentPositions[zIdx] = initialPositions[zIdx]
      }
      positionsAttr.needsUpdate = true

      // Dynamic connection lines generation (recalculated every frame)
      const linePositions: number[] = []
      const lineColors: number[] = []

      for (let i = 0; i < particleCount; i++) {
        const x1 = currentPositions[i * 3]
        const y1 = currentPositions[i * 3 + 1]
        const z1 = currentPositions[i * 3 + 2]

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = currentPositions[j * 3]
          const y2 = currentPositions[j * 3 + 1]
          const z2 = currentPositions[j * 3 + 2]

          const dist = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2)

          if (dist < connectionDistance) {
            linePositions.push(x1, y1, z1)
            linePositions.push(x2, y2, z2)

            // Connect colors matching parent nodes
            lineColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2])
            lineColors.push(colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2])
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
