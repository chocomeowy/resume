"use client"

import * as React from "react"
import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Connect } from "@/components/connect"

export default function Home() {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll(".section-reveal")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-0 min-h-screen relative">
        <aside className="lg:w-[380px] lg:sticky lg:top-0 h-fit lg:h-screen pt-12 lg:pt-24 pb-12 lg:pb-24 lg:pr-12 z-20">
          <Sidebar />
        </aside>
        
        <main className="flex-1 pt-12 lg:pt-24 pb-24 lg:pl-16 space-y-32 lg:space-y-40">
          <section id="about" className="section-reveal">
            <Hero />
          </section>
          
          <section id="experience" className="section-reveal">
            <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
              Experience
              <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
            <Education />
          </section>
          
          <section id="projects" className="section-reveal">
            <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
              Selected Projects
              <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
            <Projects />
          </section>
          
          <section id="skills" className="section-reveal">
            <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
              Skills & Expertise
              <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
            <Skills />
          </section>
          
          <section id="connect" className="section-reveal">
            <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
              Get in Touch
              <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
            </div>
            <Connect />
          </section>

          <footer className="pt-24 pb-12 mt-12 border-t border-border/40 text-[11px] font-mono text-muted-foreground uppercase tracking-widest text-center lg:text-left">
            Designed & Built by Yong Fah Jin &bull; 2026
          </footer>
        </main>
      </div>
    </div>
  )
}
