"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, BarChart, Settings, Cpu, LineChart } from "lucide-react"

const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    icon: <Code2 className="h-4 w-4" />,
    skills: [
      { name: "Python", level: "Expert", highlight: true },
      { name: "JavaScript", level: "Advanced", highlight: true },
      { name: "SQL", level: "Expert" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "R", level: "Intermediate" },
    ],
  },
  {
    id: "data",
    label: "Data & Analysis",
    icon: <BarChart className="h-4 w-4" />,
    skills: [
      { name: "Grafana", level: "Expert", highlight: true },
      { name: "Pandas/NumPy", level: "Expert" },
      { name: "Tableau", level: "Advanced" },
      { name: "Power BI", level: "Advanced" },
      { name: "Statistical Modeling", level: "Advanced" },
    ],
  },
  {
    id: "fintech",
    label: "Fintech & Risk",
    icon: <LineChart className="h-4 w-4" />,
    skills: [
      { name: "Risk Modeling", level: "Advanced", highlight: true },
      { name: "Monte Carlo", level: "Expert" },
      { name: "Fixed Income", level: "Intermediate" },
      { name: "Derivatives", level: "Intermediate" },
      { name: "Time Series", level: "Advanced" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Systems",
    icon: <Cpu className="h-4 w-4" />,
    skills: [
      { name: "Remote Monitoring", level: "Expert", highlight: true },
      { name: "Data Pipelines", level: "Advanced" },
      { name: "System Integration", level: "Advanced" },
      { name: "MQTT/HTTP", level: "Advanced" },
      { name: "Infrastructure", level: "Intermediate" },
    ],
  },
]

export function Skills() {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Competencies</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl px-4">
          A comprehensive toolkit for data-driven results, spanning from low-level systems to high-level financial models.
        </p>
      </div>

      <Tabs defaultValue="programming" className="w-full">
        <div className="flex justify-center mb-10 overflow-x-auto pb-4 md:pb-0">
          <TabsList className="h-12 bg-muted/50 p-1">
            {skillCategories.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id} 
                className="px-4 md:px-8 flex gap-2 items-center data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {cat.icon}
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {skillCategories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cat.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-4 text-center group ${
                    skill.highlight 
                    ? "border-primary/20 bg-primary/5 shadow-lg shadow-primary/5" 
                    : "border-transparent bg-muted/30 hover:bg-muted/50"
                  }`}
                >
                  <div className={`p-4 rounded-full ${skill.highlight ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground group-hover:text-primary"} transition-colors`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{skill.level}</p>
                  </div>
                  {skill.highlight && (
                    <Badge variant="default" className="text-[10px] animate-pulse">Core Skill</Badge>
                  )}
                </div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-16 p-8 bg-card rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold italic">"Versatile in Python & JavaScript"</h3>
          <p className="text-muted-foreground text-sm">
            Leveraging Python for statistical weight and JavaScript for dynamic visualization.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <span className="font-bold text-xl">Py</span>
          </div>
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
            <span className="font-bold text-xl">JS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
