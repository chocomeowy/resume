"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export function MagneticLink({ children, className, href, onClick }: MagneticLinkProps) {
  const ref = React.useRef<HTMLAnchorElement>(null)

  // Motion values for magnetic displacement
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics configuration for a buttery-smooth elastic recoil
  const springConfig = { damping: 12, stiffness: 120, mass: 0.15 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  // Scale spring
  const scale = useMotionValue(1)
  const springScale = useSpring(scale, { damping: 15, stiffness: 200 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Get displacement vector from element center to cursor
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    // Define attraction strength (closer to center = stronger relative pull)
    // We restrict maximum displacement to 12px for subtle premium feel
    const maxDisplacement = 12
    const pullStrength = 0.35 // 35% of displacement

    const targetX = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaX * pullStrength))
    const targetY = Math.max(-maxDisplacement, Math.min(maxDisplacement, deltaY * pullStrength))

    x.set(targetX)
    y.set(targetY)
  }

  const handleMouseEnter = () => {
    scale.set(1.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    scale.set(1)
  }

  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        onClick={onClick as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
        style={{
          x: springX,
          y: springY,
          scale: springScale,
          display: "inline-block",
        }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.div
      ref={ref as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        x: springX,
        y: springY,
        scale: springScale,
        display: "inline-block",
      }}
    >
      {children}
    </motion.div>
  )
}
