"use client"

import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-5 max-w-3xl">
        <p className="hero-stagger font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
          Portfolio
        </p>
        <h2 className="hero-stagger font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
          Applied AI Engineer, Data Analytics &amp; Automation
        </h2>
        <p className="hero-stagger text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I build practical AI, data, and automation tools that turn messy information into structured insights, dashboards, and decision-ready workflows.
        </p>
      </div>

      {/* Stat row */}
      <div className="hero-stagger flex flex-wrap gap-6 py-2">
        {[
          { value: "500+", label: "IoT Devices Scaled" },
          { value: "20+", label: "Dashboards Built" },
          { value: "NTU", label: "MSc FinTech" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="font-display font-extrabold text-2xl text-foreground tracking-tight">{stat.value}</span>
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-stagger flex flex-wrap gap-4">
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
            "rounded-full px-8 py-6 border-border/60 hover:bg-accent/5 hover:border-accent/40 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-95 h-auto whitespace-nowrap"
          )}
        >
          Contact Me
        </a>
      </div>

      <div className="about-text hero-stagger space-y-5 text-base text-muted-foreground leading-relaxed max-w-2xl border-t border-border/40 pt-8">
        <p>
          I am a <span className="text-foreground font-semibold">Singapore-based Applied AI, Data Analytics, and Automation practitioner</span> with a technical background in software development, production monitoring, and analytics. My experience spans energy, banking, AI-enabled platforms, and large-scale operations. I have built dashboards, automated reporting workflows, supported production monitoring, and translated operational complexity into actionable insights for business and technical stakeholders.
        </p>
        <p>
          I am currently pursuing an <span className="text-foreground font-semibold">MSc in Financial Technology at NTU</span> part-time, with a focus on digital banking, financial data, platform risk, and applied AI.
        </p>
      </div>
    </div>
  )
}
