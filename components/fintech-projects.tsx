"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, GraduationCap, Code, Globe } from "lucide-react"

const fintechProjects = [
  {
    title: "Algorithmic Risk Assessment Model",
    category: "Academic / NTU",
    description: "Developed a Python-based risk assessment framework utilizing Monte Carlo simulations for market volatility forecasting.",
    highlights: [
      "Engineered a simulation engine to model 10,000+ market scenarios.",
      "Integrated real-time data feeds via Alpha Vantage API.",
      "Implemented Value-at-Risk (VaR) and Conditional VaR (CVaR) metrics.",
    ],
    icon: <Rocket className="h-5 w-5" />,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Proprietary Data Ingestion Pipeline",
    category: "Independent Research",
    description: "Architected a high-performance SQL pipeline for ingesting and normalizing heterogeneous financial data.",
    highlights: [
      "Designed a schema optimized for time-series financial data.",
      "Automated data cleaning and validation using specialized Python scripts.",
      "Achieved 40% reduction in query latency through indexing strategies.",
    ],
    icon: <Code className="h-5 w-5" />,
    tech: ["SQL", "Python", "ETL", "Time-Series"],
  },
]

export function FintechProjects() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
          <GraduationCap className="h-4 w-4" />
          FinTech & Academic Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Specialized Projects</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl px-4">
          Focused technical implementations that merge financial theory with robust software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {fintechProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full border-2 border-primary/5 bg-card/50 hover:border-primary/20 transition-all duration-300 group shadow-sm hover:shadow-lg">
              <CardHeader className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold px-2 py-0.5 border-primary/20 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2 font-medium italic">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8 pt-0">
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-sm text-muted-foreground font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5 group-hover:bg-primary transition-colors" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-primary/10">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-primary/5 text-primary text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md border border-primary/10">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
