"use client"

import * as React from "react"
import Image from "next/image"

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
}

const featuredProjects = [
  {
    title: "IoT Monitoring & Revenue Impact Dashboard",
    category: "Data Analytics / Monitoring / KPI Design",
    description: "Scaled monitoring coverage from 40 to 500 IoT devices across solar energy assets. Built 20+ Grafana dashboards to help operations and finance teams track availability, alert volumes, incident response, and revenue-impacting downtime.",
    skills: ["Grafana", "PostgreSQL", "KPI Design", "Monitoring", "Data Analysis", "Stakeholder Reporting"],
  },
  {
    title: "AI Transcription & Translation Platform",
    category: "Applied AI / Full-Stack Product",
    description: "Built and maintained an AI-enabled transcription and translation product using VueJS, FastAPI, and cloud-based AI APIs. Supported backend integration, product iteration, and client-driven feature delivery.",
    skills: ["VueJS", "FastAPI", "AI APIs", "Product Delivery", "API Integration"],
  },
  {
    title: "B2B Recommendation Engine",
    category: "Machine Learning / Product Analytics",
    description: "Developed a collaborative filtering recommendation engine to support product discovery and cross-sell opportunities for B2B users. Combined behavioural signals, similarity logic, and REST API delivery to generate next-action recommendations.",
    skills: ["Python", "Collaborative Filtering", "BigQuery", "REST API", "Product Analytics"],
  },
  {
    title: "Morning Kaki, AI Hackathon Prototype",
    category: "AI Product Prototype / Hackathon",
    description: "Rapidly prototyped an AI-powered daily companion concept during an AI hackathon, combining LLM workflows, voice, image, and notification features into a mobile-first product experience.",
    skills: ["LLM APIs", "Rapid Prototyping", "Product Thinking", "Vercel", "AI Workflows"],
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

export function Projects() {
  return (
    <div className="space-y-14">
      <div>
        <h3 className="font-display font-bold text-2xl text-foreground mb-3">
          Featured FinTech, AI &amp; Data Projects
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
          Selected work across monitoring, analytics, applied AI, and product-facing data systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="shimmer-card group relative rounded-2xl overflow-hidden bg-bg-card border border-border/40 p-6 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
            >
              <span className={`inline-flex text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border font-semibold mb-4 ${categoryColors[project.category] ?? "text-accent bg-accent/10 border-accent/20"}`}>
                {project.category}
              </span>
              <h4 className="font-display font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80 mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span key={skill} className="text-[9px] font-mono text-muted-foreground bg-white/5 border border-white/10 px-2 py-1 rounded uppercase transition-colors group-hover:text-foreground group-hover:border-accent/20">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
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
          {softwareProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener"
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
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
