"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  period: string
  title: string
  company: string
  companyIcon: string
  description?: string
  bullets?: string[]
  tags?: string[]
  isLast?: boolean
}

function TimelineItem({ period, title, company, companyIcon, description, bullets, tags, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-12 pb-16 group">
      {/* Vertical Line with Gradient */}
      <div className={cn(
        "absolute left-[7px] top-[28px] bottom-0 w-[2.5px] bg-gradient-to-b from-accent/60 via-accent/20 to-transparent z-0",
        isLast && "h-16"
      )} />
      
      {/* Premium Indicator: Glowing Pulsing Dot */}
      <div className="absolute left-0 top-[8px] flex items-center justify-center -translate-x-1/2 ml-[8px]">
        <div className="relative flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_12px_var(--accent)] z-20 transition-transform duration-500 group-hover:scale-125" />
          <div className="absolute w-8 h-8 rounded-full border border-accent/30 animate-ping opacity-20" />
          <div className="absolute w-10 h-10 rounded-full border border-accent/10 opacity-10" />
        </div>
      </div>

      {/* Card with shimmer */}
      <div className="shimmer-card relative p-6 rounded-2xl bg-bg-card/40 border border-border/40 backdrop-blur-md hover:bg-bg-card/60 hover:border-accent/40 transition-all duration-500 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-0.5">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            {/* Company icon badge */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg shadow-[0_0_10px_var(--accent-glow)] group-hover:shadow-[0_0_16px_var(--accent-glow)] transition-all duration-300">
              {companyIcon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-display tracking-tight group-hover:text-accent transition-colors duration-300">
                {title}
              </h3>
              <div className="text-accent/90 font-bold text-sm tracking-wide mt-1 uppercase">{company}</div>
            </div>
          </div>
          <div className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 h-fit">
            {period}
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
            {description}
          </p>
        )}

        {bullets && (
          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-4 leading-relaxed group/bullet">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/bullet:bg-accent transition-colors duration-300 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {tags && (
          <div className="flex flex-wrap gap-2 pt-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const experiences = [
  {
    period: "Jan 2024 — Dec 2025",
    title: "Remote Monitoring Analyst & Software Developer",
    company: "Terrenus Energy",
    companyIcon: "⚡",
    bullets: [
      "Scaled IoT monitoring from 40 to 500+ devices across solar assets, building a real-time alerting ecosystem.",
      "Designed and maintained 20+ Grafana dashboards to monitor cross-regional operations and financial performance.",
      "Reduced incident detection time to < 1 hour via proactive offline-device alerting and automated diagnostics.",
      "Automated monthly reporting with a custom PostgreSQL/Python system, eliminating manual data entry."
    ],
    tags: ["PostgreSQL", "Grafana", "Python", "Azure", "Kubernetes"]
  },
  {
    period: "Jan 2023 — Sep 2023",
    title: "Application Engineer (Contract)",
    company: "DBS Singapore",
    companyIcon: "🏦",
    bullets: [
      "Built responsive internal dashboards using ReactJS and Material-UI for core banking infrastructure monitoring.",
      "Developed Python-based production monitoring solutions to enhance incident response speed.",
      "Collaborated with SRE teams to translate operational requirements into actionable observability metrics."
    ],
    tags: ["ReactJS", "Python", "SRE", "Banking Tech"]
  },
  {
    period: "Dec 2021 — Dec 2022",
    title: "Application Engineer",
    company: "Sentient.io",
    companyIcon: "🤖",
    bullets: [
      "Built a B2B parts recommendation engine for Toyota using collaborative filtering and item-based similarity.",
      "Developed ScribeRabbit, a full-stack AI transcription platform using VueJS, FastAPI, and GCP services.",
      "Optimized data pipelines for interactive analytics dashboards using BigQuery SQL and automated ETL."
    ],
    tags: ["VueJS", "FastAPI", "BigQuery", "GCP", "MLOps"]
  },
  {
    period: "Aug 2015 — May 2021",
    title: "Business Support Analyst",
    company: "Apple South Asia",
    companyIcon: "🍎",
    bullets: [
      "Managed multi-million dollar enterprise order fulfilments across cross-regional logistics partners.",
      "Generated service level and KPI reports to inform leadership resourcing and operational strategy.",
      "Conducted UAT for internal supply chain tools and maintained comprehensive SOPs for regional teams."
    ],
    tags: ["Business Analytics", "Logistics", "UAT", "Operations"]
  }
]

const education = [
  {
    period: "2024 — Present",
    title: "MSc in Financial Technology (FinTech)",
    company: "Nanyang Technological University (NTU)",
    companyIcon: "🎓",
    description: "Specialising in ML in finance, blockchain, and DeFi. Coursework: Quantitative Risk Modelling, Time-series Forecasting, and Quantitative Trading.",
    tags: ["Machine Learning", "Quant Finance", "Blockchain"]
  },
  {
    period: "Completed",
    title: "BSc Business — Second Upper Honours",
    company: "SIM / University of London",
    companyIcon: "📚",
    description: "Foundational business education underpinning analytical thinking and operations management."
  }
]

export function Education() {
  return (
    <div className="space-y-24">
      {/* Experience Section */}
      <div className="relative">
        <div className="space-y-2">
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              {...exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Academic Profile */}
      <div className="pt-20 border-t border-border/40">
        <div className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase mb-12 flex items-center gap-4">
          Academic Profile
          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div key={i} className="shimmer-card group p-8 rounded-2xl bg-bg-card/40 border border-border/40 backdrop-blur-md hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg shadow-[0_0_10px_var(--accent-glow)]">
                    {edu.companyIcon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent/70 bg-accent/5 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground font-display mb-2 group-hover:text-accent transition-colors duration-300">{edu.title}</h3>
                <div className="text-sm font-semibold text-accent/80 mb-4">{edu.company}</div>
                {edu.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {edu.description}
                  </p>
                )}
              </div>
              {edu.tags && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-border/60 text-muted-foreground group-hover:border-accent/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
