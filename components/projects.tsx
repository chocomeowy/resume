"use client"

import * as React from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

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

const featuredProjects = [
  {
    title: "Narrative Velocity Tracker",
    category: "Applied AI / Trend Intelligence / Market Analytics",
    description: "AI-assisted trend intelligence dashboard that tracks emerging narratives, market signals, and momentum shifts. It converts fragmented information into structured summaries, scoring logic, and decision-ready insights for faster analysis.",
    points: [
      "Tracks emerging narratives and signal changes",
      "Uses structured scoring and summaries",
      "Demonstrates AI-assisted market intelligence and data analysis",
      "Relevant to FinTech, product analytics, business intelligence, and decision support",
    ],
    skills: ["Applied AI", "Market Intelligence", "Data Analytics", "Signal Scoring", "Dashboards", "Automation"],
    cta: "View Project",
    link: "https://chocomeowy.github.io/narrative-tracker/",
  },
  {
    title: "AI Market Signal Intelligence Dashboard",
    category: "FinTech / Applied AI / Market Analytics",
    description: "Market intelligence dashboard concept that combines momentum indicators, valuation context, options activity, technical signals, and AI-generated reasoning into a structured signal watchlist. Designed to support faster market scanning and research workflows, not to provide investment advice.",
    points: [
      "Converts financial market signals into a structured watchlist",
      "Includes AI-generated explanation of signal context",
      "Combines momentum, valuation, trend, and options activity",
      "Demonstrates FinTech analytics, dashboard design, and AI reasoning",
      "For demonstration and research only",
    ],
    skills: ["Python", "SQL", "Applied AI", "Financial Analytics", "Signal Dashboard", "Data Visualisation", "Research Automation"],
    cta: "View Project",
    link: "https://stock-alerts-nine.vercel.app/",
  },
  {
    title: "Morning Kaki",
    category: "AI Product Prototype / Hackathon",
    description: "Rapidly prototyped an AI-powered daily companion concept during an AI hackathon, combining LLM workflows, voice, image, reminders, and notification features into a mobile-first product experience.",
    points: [
      "Explores AI-assisted daily planning and caregiver-friendly workflows",
      "Combines voice, image, reminders, and notification concepts",
      "Shows rapid product prototyping across applied AI features",
    ],
    skills: ["LLM APIs", "Rapid Prototyping", "Product Thinking", "Vercel", "AI Workflows"],
    cta: "View Project",
    link: "https://morning-kaki.vercel.app/",
  },
  {
    title: "SG Food Guide by Manus",
    category: "AI-Assisted Research / Location Intelligence / Product Prototype",
    description: "AI-assisted Singapore food discovery prototype that organises local dishes, stalls, locations, filters, and map-based exploration into a structured consumer guide. Demonstrates rapid AI-assisted research, information structuring, and product prototyping.",
    points: [
      "AI-assisted research and content structuring",
      "Converts fragmented food recommendations into a searchable guide",
      "Includes map-based exploration and filtering",
      "Good example of rapid AI product prototyping",
    ],
    skills: ["AI-Assisted Research", "Product Prototyping", "Location Intelligence", "Information Architecture", "UX"],
    cta: "View Project",
    link: "https://sgfoodguide.manus.space/",
  },
]

const softwareProjects = [
  {
    title: "LayoverSG",
    description: "Singapore Changi Airport transit itinerary planner. Curated, time-aware guides for travelers on stopovers.",
    category: "Public Utility",
    image: "/images/layover_live.png",
    tags: ["Next.js", "SEO", "Transit API"],
    link: "https://layoversg.com/"
  },
  {
    title: "Causeway Cameras",
    description: "Real-time border traffic monitoring. Integrates LTA DataMall live feeds for cross-border commuter planning.",
    category: "Public Utility",
    image: "/images/causeway_live.png",
    tags: ["React", "LTA API", "Leaflet"],
    link: "https://causeway.vercel.app/"
  },
  {
    title: "Sakura Cards",
    description: "Lore-faithful digital tarot reading application. Features interactive Clow and Sakura card spreads with dynamic mystical effects.",
    category: "Entertainment",
    image: "/images/sakura_live.png",
    tags: ["React", "Framer Motion", "Lore-driven"],
    link: "https://sakuracards.vercel.app/"
  },
  {
    title: "BusTime SG",
    description: "Minimalist Singapore bus arrival tracker. Save favorite stops and view live ETAs with a clean, low-latency UI.",
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
  return (
    <div className="space-y-14">
      <div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-3">
          Featured AI, Data &amp; FinTech Projects
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
          Practical projects that turn messy information into structured insights, signal views, dashboards, and decision-ready workflows.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="shimmer-card group relative flex h-full flex-col rounded-2xl overflow-hidden bg-bg-card border border-border/40 p-6 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
            >
              <span className={`inline-flex text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold mb-4 w-fit ${categoryColors[project.category] ?? "text-accent bg-accent/10 border-accent/20"}`}>
                {project.category}
              </span>
              <h4 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80 mb-5">
                {project.description}
              </p>
              <ul className="space-y-2 mb-5 text-sm text-muted-foreground">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.skills.map((skill) => (
                  <span key={skill} className="text-[9px] font-mono text-muted-foreground bg-white/5 border border-white/10 px-2 py-1 rounded uppercase transition-colors group-hover:text-foreground group-hover:border-accent/20">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-1">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent transition-colors hover:text-foreground"
                  >
                    {project.cta}
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {project.cta}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-3">
          Other Software Projects
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
          Public applications that show product thinking, API integration, and practical delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softwareProjects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              className="shimmer-card group block relative rounded-2xl overflow-hidden bg-bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* View Project Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-[0_0_20px_var(--accent-glow)]">
                    View Live Site
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold ${categoryColors[project.category] ?? "text-accent bg-accent/10 border-accent/20"}`}>
                    {project.category}
                  </span>
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono text-muted-foreground bg-white/5 border border-white/10 px-1.5 py-0.5 rounded uppercase transition-colors group-hover:text-foreground group-hover:border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Bottom accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
