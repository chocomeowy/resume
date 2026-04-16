"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Connect", href: "#connect" },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = React.useState("about")

  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Avatar Badge */}
        <div className="mb-8 flex items-center gap-4">
          <div className="relative flex-shrink-0">
            {/* Outer animated ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-accent/50 to-transparent animate-spin" style={{ animationDuration: '6s', padding: '2px' }} />
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/40 flex items-center justify-center shadow-[0_0_20px_var(--accent-glow)]">
              <span className="font-display font-bold text-lg text-accent tracking-tight">YFJ</span>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-background shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
          </div>
          <div className="badge flex items-center gap-2 font-mono text-[11px] text-accent tracking-[0.12em] uppercase px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow shadow-[0_0_10px_var(--accent)]" />
            Available for new opportunities
          </div>
        </div>

        {/* Name with gradient shimmer */}
        <h1 className="name text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-4 font-display">
          <span className="gradient-name">Yong <br />Fah Jin</span>
        </h1>
        
        <h2 className="title text-lg font-semibold text-foreground/90 mb-5 font-display tracking-tight">
          Business &amp; Data Analyst
        </h2>
        
        <p className="tagline text-sm text-muted-foreground leading-relaxed max-w-[280px]">
          Architecting data-driven FinTech systems at the intersection of AI, analytics, and financial infrastructure.
        </p>

        {/* Nav with pill-style active indicator */}
        <nav className="mt-12 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "nav-item relative flex items-center gap-4 px-3 py-2.5 rounded-lg text-[11px] font-mono tracking-[0.12em] uppercase transition-all duration-300 group",
                  isActive
                    ? "nav-pill-active text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                )}
              >
                <span className={cn(
                  "h-px transition-all duration-300 flex-shrink-0",
                  isActive
                    ? "w-10 bg-accent shadow-[0_0_6px_var(--accent)]"
                    : "w-6 bg-muted-foreground/40 group-hover:w-10 group-hover:bg-foreground/60"
                )} />
                {item.name}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px_var(--accent)]" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="flex flex-col gap-8 pb-8 pt-12 mt-auto items-center lg:items-start">
        <div className="flex items-center gap-8 w-full justify-center lg:justify-start px-2">
          <a href="https://github.com/chocomeowy" target="_blank" rel="noopener" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_var(--accent)]">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/yongfahjin/" target="_blank" rel="noopener" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_var(--accent)]">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
