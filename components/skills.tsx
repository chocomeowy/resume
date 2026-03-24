"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Database, BarChart, Settings, Cpu, LineChart, BrainCircuit } from "lucide-react"

const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    icon: <Code2 className="h-4 w-4" />,
    skills: [
      { name: "Python", level: "Expert", highlight: true },
      { name: "SQL", level: "Expert", highlight: true },
      { name: "AI & Machine Learning", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Web",
    icon: <Cpu className="h-4 w-4" />,
    skills: [
      { name: "ReactJS / NextJS", level: "Expert", highlight: true },
      { name: "FastAPI / Flask", level: "Expert", highlight: true },
      { name: "AI Microservices", level: "Advanced", highlight: true },
      { name: "NodeJS / Express", level: "Advanced" },
      { name: "VueJS", level: "Advanced" },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: <BarChart className="h-4 w-4" />,
    skills: [
      { name: "Grafana", level: "Expert", highlight: true },
      { name: "PostgreSQL / BigQuery", level: "Expert", highlight: true },
      { name: "Applied AI & LLMs", level: "Advanced", highlight: true },
      { name: "GTM / Analytics", level: "Advanced" },
      { name: "SAP / Excel", level: "Expert" },
    ],
  },
]

export function Skills() {
  const [activeTab, setActiveTab] = useState("programming")

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = skillCategories.findIndex((cat) => cat.id === prev)
        const nextIndex = (currentIndex + 1) % skillCategories.length
        return skillCategories[nextIndex].id
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="p-3 bg-primary/10 rounded-2xl text-primary mb-4">
          <BrainCircuit className="h-8 w-8 animate-pulse" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Competencies</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl px-4 italic font-medium">
          "Bridging Finance and Engineering through Artificial Intelligence."
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-10 overflow-x-auto pb-4 md:pb-0">
          <TabsList className="h-12 bg-muted/50 p-1">
            {skillCategories.map((cat) => (
              <TabsTrigger 
                key={cat.id} 
                value={cat.id} 
                className="px-4 md:px-8 flex gap-2 items-center data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-500"
              >
                {cat.icon}
                <span className="hidden sm:inline">{cat.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {skillCategories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="focus-visible:outline-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
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
                    <Badge variant="default" className="text-[10px] animate-pulse">Core Focus</Badge>
                  )}
                </div>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-16 p-8 bg-card rounded-2xl border-2 border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl shadow-primary/5">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <LineChart className="h-32 w-32" />
        </div>
        <div className="flex flex-col gap-2 relative z-10">
          <h3 className="text-xl font-bold text-primary italic">"Engineering Intelligence for Finance"</h3>
          <p className="text-muted-foreground text-sm font-medium">
            Building robust data pipes and AI models that translate complex signals into financial insights.
          </p>
        </div>
        <div className="flex gap-4 relative z-10">
          {["Py", "SQL", "AI"].map((label) => (
            <div key={label} className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm transition-transform hover:scale-110">
              <span className="font-bold text-xl">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
