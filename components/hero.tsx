"use client"

import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-5 max-w-3xl">
        <p className="hero-stagger font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
          Portfolio
        </p>
        <h2 className="hero-stagger font-display text-2xl sm:text-3xl lg:text-4.5xl font-extrabold tracking-tight leading-tight text-foreground">
          Applied AI Engineer, Software Developer &amp; Data Analyst
        </h2>
        <div className="hero-stagger space-y-4 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            I am a <span className="text-foreground font-semibold">Forward Deployed AI Engineer, Software Developer, and Data Analyst</span> based in Singapore, pursuing an <span className="text-foreground font-semibold">MSc in Financial Technology from NTU</span>. I build practical systems that connect data, software, and AI.
          </p>
          <p>
            My focus is on turning noisy operational signals, messy workflows, and emerging AI capabilities into tools that are useful, scalable, and easy for people to adopt. My professional experience spans IoT monitoring, full-stack development, analytics automation, and AI-enabled products across energy systems, banking operations, high-growth AI platforms, and regional logistics.
          </p>
          <p>
            I am currently transitioning deeper into <span className="text-foreground font-semibold">AI Engineering, FinTech, and SaaS roles</span>, with a strong interest and technical focus in AI agents, RAG applications, automation pipelines, product analytics, and AI-powered business workflows.
          </p>
        </div>
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
    </div>
  )
}
