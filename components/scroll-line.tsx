"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function ScrollLine() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the document
  const { scrollYProgress } = useScroll()
  
  // Smooth the scroll progress for a buttery-smooth elastic feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  })

  // Map progress to height percentage of the active track
  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"])
  
  // Map progress to top percentage of the riding dot
  const top = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  return (
    <div 
      ref={containerRef}
      className="hidden lg:block absolute left-8 top-0 bottom-0 w-[2px] z-10 pointer-events-none"
    >
      {/* Background track line */}
      <div className="absolute inset-0 bg-border/20 rounded-full" />
      
      {/* Active scrolling line with accent glow */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent/60 via-accent to-accent shadow-[0_0_10px_var(--accent)] rounded-full origin-top"
        style={{ height }}
      />
      
      {/* Dynamic riding glowing node */}
      <motion.div 
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-2 border-background shadow-[0_0_15px_var(--accent)] z-20 flex items-center justify-center"
        style={{ top }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-background animate-pulse" />
      </motion.div>
    </div>
  )
}
