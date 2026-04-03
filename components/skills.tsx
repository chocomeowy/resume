"use client"

import * as React from "react"

const skillCategories = [
  {
    title: "Core Expertise",
    skills: [
      { name: "FinTech Engineering", level: "Expert" },
      { name: "Technical Business Analysis", level: "Expert" },
      { name: "Data Analytics & ML", level: "Advanced" },
      { name: "IoT Infrastructure", level: "Advanced" },
    ]
  },
  {
    title: "Engineering & Tooling",
    skills: [
      { name: "Python / Pandas / TF", level: "Technical" },
      { name: "React / Next.js / TS", level: "Dev" },
      { name: "Power BI / Tableau", level: "Analysis" },
      { name: "SQL / NoSQL", level: "Data" },
      { name: "Docker / AWS", level: "Cloud" },
    ]
  }
]

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {skillCategories.map((category, idx) => (
        <div key={idx} className="space-y-6">
          <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent" />
            {category.title}
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {category.skills.map(skill => (
              <div 
                key={skill.name} 
                className="group flex items-center justify-between p-4 bg-bg-card/30 border border-border/40 rounded-xl hover:bg-bg-card/50 hover:border-accent/30 transition-all duration-300"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">{skill.name}</span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-accent/20 group-hover:text-foreground transition-all duration-300">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
