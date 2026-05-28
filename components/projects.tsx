"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform, useSpring } from "framer-motion"

const categoryColors: Record<string, string> = {
  Productivity:   "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Public Utility": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  FinTech:        "text-amber-400 bg-amber-400/10  border-amber-400/20",
  Commute:        "text-sky-400   bg-sky-400/10    border-sky-400/20",
  Travel:         "text-rose-400  bg-rose-400/10   border-rose-400/20",
  Entertainment:  "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20",
  "Data Analytics / Monitoring / KPI Design": "text-sky-400 bg-sky-400/10 border-sky-400/20",
  "Applied AI / Full-Stack Product": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Machine Learning / Product Analytics": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "AI Product Prototype / Hackathon": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "Applied AI / Trend Intelligence / Market Analytics": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "FinTech / Applied AI / Market Analytics": "text-amber-400 bg-amber-400/10 border-amber-400/20",
  "AI-Assisted Research / Location Intelligence / Product Prototype": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
}

function SpotlightProjectCard({ project, idx, variants }: { project: any; idx: number; variants: any }) {
  const cardRef = React.useRef<HTMLAnchorElement>(null)
  
  // Track viewport relative scroll coordinates
  const { scrollYProgress } = useScroll({
    target: cardRef as any,
    offset: ["start end", "end start"]
  })

  const springProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })
  const y = useTransform(springProgress, [0, 1], ["-12%", "12%"])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = React.useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }, [mouseX, mouseY])

  return (
    <motion.a
      ref={cardRef as any}
      href={project.link}
      target="_blank"
      rel="noopener"
      custom={idx}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      onMouseMove={handleMouseMove}
      className="shimmer-card group block relative rounded-2xl overflow-hidden bg-bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
    >
      {/* Background Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              var(--accent-glow) 0%,
              transparent 80%
            )
          `,
        }}
      />
      {/* Border Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              var(--accent-border) 0%,
              transparent 80%
            )
          `,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      {/* Image Container with dynamic scroll parallax */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border/20 z-10">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y, scale: 1.15 }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

        {/* View Project Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <div className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_20px_var(--accent-glow)]">
            View Live Site
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold ${categoryColors[project.category] ?? "text-accent bg-accent/10 border-accent/20"}`}>
            {project.category}
          </span>
          <div className="flex flex-wrap justify-end gap-1.5">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] font-mono text-muted-foreground bg-white/5 border border-white/10 px-1.5 py-0.5 rounded uppercase transition-colors group-hover:text-foreground group-hover:border-accent/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <h4 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300 mb-2 liquid-glare-title">
          {project.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80">
          {project.description}
        </p>
      </div>

      {/* Bottom accent bar on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
    </motion.a>
  )
}

const featuredProjects = [
  {
    title: "Narrative Velocity Tracker",
    description: "AI trend intelligence dashboard that tracks emerging narratives and momentum shifts. Parses real-time queries to identify topic crossovers, signal changes, and key trend velocity scores.",
    category: "Applied AI / Trend Intelligence / Market Analytics",
    image: "/images/narrative_live.png",
    tags: ["Applied AI", "Market Intelligence", "Dashboards"],
    link: "https://chocomeowy.github.io/narrative-tracker/"
  },
  {
    title: "AI Market Signal Intelligence Dashboard",
    description: "Market intelligence concept combining momentum indicators, valuation context, and AI reasoning. Automates scanning to output structured, live watchlists for financial research.",
    category: "FinTech / Applied AI / Market Analytics",
    image: "/images/market_live.png",
    tags: ["Python", "SQL", "Applied AI", "Financial Analytics"],
    link: "https://stock-alerts-nine.vercel.app/"
  },
  {
    title: "Morning Kaki",
    description: "AI daily companion concept designed for senior care. Combines LLM workflows, custom voice guides, caregiver notifications, and location triggers into an accessible desktop & mobile layout.",
    category: "AI Product Prototype / Hackathon",
    image: "/images/morning_live.jpg",
    tags: ["LLM APIs", "Voice AI", "Product Mockup"],
    link: "https://morning-kaki.vercel.app/"
  },
  {
    title: "SG Food Guide by Manus",
    description: "Location intelligence prototype built using AI research workflows. Automatically extracts and structures raw local food recommendations into interactive map coordinates, tags, and guides.",
    category: "AI-Assisted Research / Location Intelligence / Product Prototype",
    image: "/images/food_live.png",
    tags: ["AI-Assisted Research", "Location Intelligence", "UX"],
    link: "https://sgfoodguide.manus.space/"
  }
]

const softwareProjects = [
  {
    title: "LayoverSG",
    description: "Transit itinerary planner for Singapore Changi Airport. Generates optimized, time-aware travel schedules integrated with local transit routes and live schedules for stopover passengers.",
    category: "Public Utility",
    image: "/images/layover_live.png",
    tags: ["Next.js", "SEO", "Transit API"],
    link: "https://layoversg.com/"
  },
  {
    title: "Causeway Cameras",
    description: "Border traffic monitoring dashboard. Leverages live LTA telemetry camera feeds and traffic APIs to help commuters track live causeway queues and estimate travel times.",
    category: "Public Utility",
    image: "/images/causeway_live.png",
    tags: ["React", "LTA API", "Leaflet"],
    link: "https://causeway.vercel.app/"
  },
  {
    title: "Sakura Cards",
    description: "Lore-faithful digital tarot reading application. Features high-fidelity layout rendering, custom card spreads, and dynamic Framer Motion animations based on Cardcaptor Sakura.",
    category: "Entertainment",
    image: "/images/sakura_live.png",
    tags: ["React", "Framer Motion", "Lore-driven"],
    link: "https://sakuracards.vercel.app/"
  },
  {
    title: "BusTime SG",
    description: "High-performance bus arrival tracker. Integrates Singapore LTA arrival feeds to deliver real-time ETAs with localized search, distance sorting, and favorite stop caching.",
    category: "Commute",
    image: "/images/bus_live.png",
    tags: ["Next.js", "Geolocation", "Transit API"],
    link: "https://bustime-eta.vercel.app/"
  }
]

// Spring transition values for a high-end elastic motion
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.96 
  },
  visible: (idx: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70, // soft spring
      damping: 14,   // elegant damping
      mass: 0.8,
      delay: (idx % 2) * 0.15, // Grid-based stagger effect
    }
  })
}

export function Projects() {
  const [featuredActiveIdx, setFeaturedActiveIdx] = React.useState(0)
  const [softwareActiveIdx, setSoftwareActiveIdx] = React.useState(0)

  const featuredRef = React.useRef<HTMLDivElement>(null)
  const softwareRef = React.useRef<HTMLDivElement>(null)

  const handleScrollFeatured = () => {
    const el = featuredRef.current
    if (!el) return
    const cardWidth = el.offsetWidth * 0.82
    const scrollLeft = el.scrollLeft
    const index = Math.round(scrollLeft / (cardWidth + 20))
    setFeaturedActiveIdx(index)
  }

  const handleScrollSoftware = () => {
    const el = softwareRef.current
    if (!el) return
    const cardWidth = el.offsetWidth * 0.82
    const scrollLeft = el.scrollLeft
    const index = Math.round(scrollLeft / (cardWidth + 20))
    setSoftwareActiveIdx(index)
  }

  return (
    <div className="space-y-16">
      {/* ─── Software Projects Section ─── */}
      <div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-3 liquid-glare-title">
          Software Projects
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
          Public applications that show product thinking, API integration, and practical delivery.
        </p>

        {/* Desktop View: Standard Grid with Spring Staggered Reveal */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareProjects.map((project, idx) => (
            <SpotlightProjectCard
              key={idx}
              project={project}
              idx={idx}
              variants={cardVariants}
            />
          ))}
        </div>

        {/* Mobile View: High-Fidelity Swipable Carousel with Liquid Dot Indicator */}
        <div className="md:hidden flex flex-col gap-4 relative">
          <div
            ref={softwareRef}
            onScroll={handleScrollSoftware}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6"
          >
            {softwareProjects.map((project, idx) => (
              <div
                key={idx}
                className="w-[82vw] sm:w-[60vw] flex-shrink-0 snap-center select-none"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-card block relative rounded-2xl overflow-hidden bg-bg-card border border-border/40 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold ${categoryColors[project.category] ?? "text-accent bg-accent/10 border-accent/20"}`}>
                        {project.category}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-foreground mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Liquid Dots Indicator */}
          <div className="flex justify-center items-center gap-2.5 mt-1">
            {softwareProjects.map((_, idx) => {
              const isActive = softwareActiveIdx === idx
              return (
                <div
                  key={idx}
                  className="relative w-2.5 h-2.5 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const el = softwareRef.current
                    if (!el) return
                    const cardWidth = el.offsetWidth * 0.82
                    el.scrollTo({ left: idx * (cardWidth + 20), behavior: "smooth" })
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSoftwareDot"
                      className="absolute w-5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? "bg-accent-foreground z-10 scale-[0.5]" : "bg-muted-foreground/30"}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ─── Featured Projects Section ─── */}
      <div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-3 liquid-glare-title">
          Featured AI, Data &amp; FinTech Projects
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
          Practical projects that turn messy information into structured insights, signal views, dashboards, and decision-ready workflows.
        </p>

        {/* Desktop View: Standard Grid with Spring Staggered Reveal */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <SpotlightProjectCard
              key={idx}
              project={project}
              idx={idx}
              variants={cardVariants}
            />
          ))}
        </div>

        {/* Mobile View: High-Fidelity Swipable Carousel with Liquid Dot Indicator */}
        <div className="md:hidden flex flex-col gap-4 relative">
          <div
            ref={featuredRef}
            onScroll={handleScrollFeatured}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-6 px-6"
          >
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="w-[82vw] sm:w-[60vw] flex-shrink-0 snap-center select-none"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-card block relative rounded-2xl overflow-hidden bg-bg-card border border-border/40 hover:border-accent/40 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 80vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold ${categoryColors[project.category] ?? "text-accent bg-accent/10 border-accent/20"}`}>
                        {project.category}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-foreground mb-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Liquid Dots Indicator */}
          <div className="flex justify-center items-center gap-2.5 mt-1">
            {featuredProjects.map((_, idx) => {
              const isActive = featuredActiveIdx === idx
              return (
                <div
                  key={idx}
                  className="relative w-2.5 h-2.5 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    const el = featuredRef.current
                    if (!el) return
                    const cardWidth = el.offsetWidth * 0.82
                    el.scrollTo({ left: idx * (cardWidth + 20), behavior: "smooth" })
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeaturedDot"
                      className="absolute w-5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive ? "bg-accent-foreground z-10 scale-[0.5]" : "bg-muted-foreground/30"}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

