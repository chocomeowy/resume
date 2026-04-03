"use client"

import * as React from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <div className="about-text space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        <p>
          I'm a <span className="text-foreground font-semibold italic">Business & Data Analyst</span> dedicated to building high-performance, data-driven systems. Currently completing my <span className="text-foreground">MSc in Financial Technology at NTU</span>, I bridge the gap between complex engineering and actionable business intelligence.
        </p>
        <p>
          My background in <span className="text-foreground">IoT Infrastructure</span> and <span className="text-foreground">Technical Business Analysis</span> allows me to approach problems with both a systems-thinking mindset and a focus on user-centric outcomes.
        </p>
        <p>
          From optimizing cross-border traffic monitoring to architecting AI-powered microservices, I specialize in <span className="text-foreground font-semibold">building tools that transform messy signals into decisions that matter</span>.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <a 
          href="#projects"
          className={cn(
            buttonVariants({ variant: "default" }),
            "glow-button rounded-full px-8 py-6 bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_var(--accent-glow)] h-auto"
          )}
        >
          View Projects
        </a>
        <a 
          href="#connect"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full px-8 py-6 border-border/60 hover:bg-bg-hover hover:border-accent/40 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 h-auto whitespace-nowrap"
          )}
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}
