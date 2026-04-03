"use client"

import * as React from "react"
import Image from "next/image"

const projects = [
  {
    title: "OCR PWA Utility",
    description: "A versatile Progressive Web App that extracts text from images using advanced OCR technology. Built with a focus on speed and offline accessibility.",
    category: "Productivity",
    image: "/images/ocr_live.png",
    tags: ["Next.js", "Tesseract.js", "PWA"],
    link: "https://ocrpwa.vercel.app/"
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
    title: "Currency Analytics",
    description: "High-precision currency converter with real-time sync and full PWA service worker support for travelers.",
    category: "FinTech",
    image: "/images/currency_live.png",
    tags: ["React", "API Integration", "Data viz"],
    link: "https://currency-henna-delta.vercel.app/"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <a 
          key={index} 
          href={project.link} 
          target="_blank" 
          rel="noopener"
          className="group block relative rounded-2xl overflow-hidden bg-bg-card border border-border/40 hover:border-accent/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border/20">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
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
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">{project.category}</span>
              <div className="flex gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono text-muted-foreground bg-white/5 border border-white/10 px-1.5 py-0.5 rounded uppercase transition-colors group-hover:text-foreground group-hover:border-accent/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground/80 line-clamp-2">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
