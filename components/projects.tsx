"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Activity, Gauge, TrendingUp, Monitor, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Technical Business Analyst / IoT Specialist",
    company: "Terrenus Energy",
    period: "2022 - 2024",
    description: "Managed and optimized remote monitoring systems for a large fleet of IoT devices.",
    highlights: [
      "Remote monitoring of 40 to 500+ devices across multiple sites.",
      "Engineered over 20+ sophisticated Grafana dashboards for real-time visualization.",
      "Optimized data pipelines for consistent performance and 99% uptime.",
      "Liaised between technical teams and stakeholders to deliver actionable insights.",
    ],
    icon: <Monitor className="h-6 w-6" />,
    skills: ["IoT", "Grafana", "Data Analytics", "Technical BA"],
  },
  {
    title: "Quantitative Risk Modeling",
    company: "Academic Project / Fintech Research",
    period: "2024 - Present",
    description: "Developed robust risk assessment models for financial applications.",
    highlights: [
      "Implemented Monte Carlo simulations for market risk forecasting.",
      "Analyzed historical volatility and correlation matrices for portfolio optimization.",
      "Utilized Python for complex statistical modeling and data validation.",
      "Integrated risk parameters into automated decision-making frameworks.",
    ],
    icon: <TrendingUp className="h-6 w-6" />,
    skills: ["Python", "Risk Modeling", "Monte Carlo", "Statistics"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Briefcase className="h-4 w-4" />
          Professional Experience
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience & Projects</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Bridging the gap between engineering and finance through data-driven technical analysis 
          and IoT management.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full flex flex-col border-2 hover:border-primary/30 transition-all group overflow-hidden">
              <CardHeader className="relative pb-0">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  {exp.icon}
                </div>
                <div className="flex items-center gap-3 text-primary mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {exp.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wider uppercase">{exp.period}</span>
                </div>
                <CardTitle className="text-2xl mt-2">{exp.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-foreground/80">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <p className="text-muted-foreground mb-6 font-medium italic">
                  "{exp.description}"
                </p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-2 flex flex-wrap gap-2 border-t mt-4 bg-muted/20">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-background/50">
                    {skill}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 opacity-5">
          <Activity className="h-64 w-64" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="p-4 bg-primary text-primary-foreground rounded-2xl shadow-xl shadow-primary/20">
            <Gauge className="h-12 w-12" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">IoT Infrastructure Specialist</h3>
            <p className="mt-2 text-muted-foreground lg:text-lg">
              Extensive background in managing 40 to 500 devices concurrently, 
              leveraging technical expertise to ensure robust and scalable monitoring 
              ecosystems for industrial energy applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
