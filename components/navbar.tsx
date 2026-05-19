"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { MagneticLink } from "@/components/magnetic-link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Connect", href: "#connect" },
]

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display font-extrabold text-xl tracking-tight">
              Portfolio<span className="text-accent animate-pulse">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav 
            className="hidden md:flex items-center gap-2"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, idx) => (
              <div 
                key={item.name} 
                className="relative py-2 px-3"
                onMouseEnter={() => setHoveredIndex(idx)}
              >
                <MagneticLink href={item.href}>
                  <span className="relative z-10 text-xs font-mono tracking-widest uppercase transition-colors duration-300 text-muted-foreground hover:text-foreground">
                    {item.name}
                  </span>
                </MagneticLink>

                {/* Smooth sliding glowing underline on hover */}
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="navbarHoverUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-accent rounded-full shadow-[0_0_12px_var(--accent)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <MagneticLink href="/Yong_Fah_Jin_CV.pdf">
            <span className="group/btn relative inline-flex items-center justify-center px-5 py-2 bg-accent text-accent-foreground text-xs font-bold font-mono tracking-wider uppercase rounded-full shadow-[0_0_15px_var(--accent-glow)] overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              <span className="relative">Resume</span>
            </span>
          </MagneticLink>
        </div>
      </div>
    </header>
  )
}
