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
            <Card className="h-full flex flex-col border-2 border-primary/5 bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-xl">
              <CardHeader className="p-8 relative">
                <div className="absolute top-8 right-8 p-3 bg-primary/10 rounded-xl text-primary opacity-20 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110">
                  {exp.icon}
                </div>
                <div className="flex items-center gap-3 text-primary/70 font-bold tracking-widest uppercase text-xs mb-4">
                  <span className="px-3 py-1 bg-primary/10 rounded-full border border-primary/20">{exp.period}</span>
                </div>
                <CardTitle className="text-3xl font-extrabold tracking-tight group-hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground/70 mt-2">
                  {exp.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-8 pb-8 pt-0">
                <div className="h-px w-12 bg-primary/20 mb-6 group-hover:w-24 transition-all duration-500" />
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed font-medium italic border-l-4 border-primary/10 pl-4 py-1">
                  {exp.description}
                </p>
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-4 text-base text-muted-foreground/90 font-medium">
                      <div className="h-2 w-2 rounded-full bg-primary/40 shrink-0 mt-2 group-hover:bg-primary transition-colors" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-8 py-6 flex flex-wrap gap-2.5 bg-primary/5 border-t border-primary/10">
                {exp.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-bold px-3 py-1 rounded-lg"
                  >
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
