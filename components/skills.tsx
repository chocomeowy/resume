"use client"

import * as React from "react"

const skillLevelMap: Record<string, number> = {
  Expert:    95,
  Advanced:  80,
  Technical: 75,
  Dev:       70,
  Analysis:  78,
  Data:      82,
  Cloud:     65,
}

const skillCategories = [
  {
    title: "Core Expertise",
    skills: [
      { name: "FinTech Engineering",          level: "Expert"    },
      { name: "Technical Business Analysis",  level: "Expert"    },
      { name: "Data Analytics & ML",          level: "Advanced"  },
      { name: "IoT Infrastructure",           level: "Advanced"  },
    ]
  },
  {
    title: "Engineering & Tooling",
    skills: [
      { name: "Python / Pandas / TF",  level: "Technical" },
      { name: "React / Next.js / TS",  level: "Dev"       },
      { name: "Power BI / Tableau",    level: "Analysis"  },
      { name: "SQL / NoSQL",           level: "Data"      },
      { name: "Docker / AWS",          level: "Cloud"     },
    ]
  }
]

function SkillBar({ name, level, index }: { name: string; level: string; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const fillRef = React.useRef<HTMLDivElement>(null)
  const pct = skillLevelMap[level] ?? 60

  React.useEffect(() => {
    const el = ref.current
    const fill = fillRef.current
    if (!el || !fill) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => fill.classList.add("animate"), index * 80)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="group flex flex-col gap-2 p-4 bg-bg-card/30 border border-border/40 rounded-xl hover:bg-bg-card/50 hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          {name}
        </span>
        <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
          {level}
        </span>
      </div>

      {/* Track */}
      <div className="w-full h-1 rounded-full bg-border/60 overflow-hidden">
        <div
          ref={fillRef}
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-accent/70 to-accent shadow-[0_0_6px_var(--accent-glow)]"
          style={{ "--skill-width": `${pct}%` } as React.CSSProperties}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {skillCategories.map((category, idx) => (
        <div key={idx} className="space-y-4">
          <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            {category.title}
          </h3>
          <div className="flex flex-col gap-3">
            {category.skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={i + idx * category.skills.length}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
