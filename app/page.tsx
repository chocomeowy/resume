"use client"

import * as React from "react"
import { Sidebar } from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Connect } from "@/components/connect"
import { MobileHeader } from "@/components/mobile-header"
import { InteractiveCanvas } from "@/components/interactive-canvas"

export default function Home() {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }

    // Section reveal
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".section-reveal").forEach((el) => sectionObserver.observe(el))

    // Hero stagger
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".hero-stagger")
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add("visible"), i * 120)
          })
          staggerObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    const heroSection = document.querySelector("#about")
    if (heroSection) staggerObserver.observe(heroSection)

    return () => {
      sectionObserver.disconnect()
      staggerObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Ambient background orbs */}
      <div className="bg-orbs" aria-hidden="true" />
      <div className="bg-orb-3" aria-hidden="true" />

      {/* Interactive 3D WebGL Constellation Asset */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20 dark:opacity-15 mix-blend-normal dark:mix-blend-screen overflow-hidden">
        <InteractiveCanvas />
      </div>

      <MobileHeader />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-0 min-h-screen relative">
          <aside className="lg:w-[380px] lg:sticky lg:top-0 h-fit lg:h-screen pt-8 lg:pt-10 xl:pt-12 pb-6 lg:pb-6 lg:pr-12 z-20 lg:overflow-y-auto scrollbar-none">
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
                Projects
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
              Designed &bull; Built by Yong Fah Jin &bull; 2026
            </footer>
          </main>
        </div>
      </div>
    </>
  )
}
