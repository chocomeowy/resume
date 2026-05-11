"use client"

const skillCategories = [
  {
    title: "Business & Analysis",
    skills: [
      "Data Analysis",
      "KPI Design",
      "Requirements Gathering",
      "UAT",
      "SOP Documentation",
      "Stakeholder Management",
      "Reporting Automation",
    ],
  },
  {
    title: "FinTech & AI",
    skills: [
      "Digital Banking",
      "Financial Technology",
      "Applied AI",
      "Product Analytics",
      "Platform Risk",
      "Recommendation Systems",
    ],
  },
  {
    title: "Technical",
    skills: [
      "Python",
      "JavaScript",
      "SQL",
      "ReactJS",
      "NextJS",
      "VueJS",
      "NodeJS",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "BigQuery",
      "Grafana",
      "Azure",
      "Kubernetes",
      "Git",
      "Linux",
    ],
  },
]

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-4">
          <h3 className="font-display font-bold text-lg text-foreground flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/50 bg-bg-card/40 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/30 hover:text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
