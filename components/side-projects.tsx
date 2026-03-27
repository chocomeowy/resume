"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Camera, Languages, Bus, Zap, Smartphone, Globe } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const sideProjects = [
  {
    title: "OCR PWA",
    description: "A versatile Progressive Web App that extracts text from images using advanced OCR technology. Built with a focus on speed and offline accessibility.",
    link: "https://ocrpwa.vercel.app/",
    tags: ["React", "Tesseract.js", "PWA", "Offline-first"],
    icon: <Languages className="h-6 w-6" />,
    stats: "Image to Text"
  },
  {
    title: "Causeway Cameras",
    description: "Real-time traffic monitoring for Singapore-Malaysia border crossings. Integrates LTA DataMall live feeds to help commuters plan their journeys efficiently.",
    link: "https://causeway.vercel.app/",
    tags: ["Next.js", "LTA DataMall API", "Real-time"],
    icon: <Camera className="h-6 w-6" />,
    stats: "LTA Live Feeds"
  },
  {
    title: "Currency Converter",
    description: "A high-performance currency converter designed for travelers. Features full offline support and real-time exchange rate synchronization.",
    link: "https://currency-henna-delta.vercel.app/",
    tags: ["React", "PWA", "Service Workers", "FinTech"],
    icon: <Zap className="h-6 w-6" />,
    stats: "Fully Offline"
  },
  {
    title: "BusTime ETA",
    description: "A streamlined bus arrival tracker for Singapore. Allows users to save favorite stops and view real-time ETAs with a minimalist, high-performance UI.",
    link: "https://bustime-eta.vercel.app/",
    tags: ["React", "LTA API", "PWA", "UX-focused"],
    icon: <Bus className="h-6 w-6" />,
    stats: "Real-time ETAs"
  }
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

export function SideProjects() {
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-4">
          <Smartphone className="h-4 w-4" />
          Side Projects & PWAs
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Applications</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
          A collection of purpose-built applications focusing on utility, 
          offline capabilities, and seamless user experiences.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {sideProjects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full flex flex-col border-2 border-emerald-500/5 bg-card/50 hover:bg-card hover:border-emerald-500/20 transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-xl">
              <CardHeader className="p-8 relative">
                <div className="absolute top-8 right-8 p-3 bg-emerald-500/10 rounded-xl text-emerald-500 opacity-30 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110">
                  {project.icon}
                </div>
                <div className="flex items-center gap-3 text-emerald-500/70 font-bold tracking-widest uppercase text-xs mb-4">
                  <span className="px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">{project.stats}</span>
                </div>
                <CardTitle className="text-3xl font-extrabold tracking-tight group-hover:text-emerald-500 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-8 pb-4 pt-0">
                <div className="h-px w-12 bg-emerald-500/20 mb-6 group-hover:w-24 transition-all duration-500" />
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-emerald-500/20 text-emerald-600/80 font-semibold"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-8 py-6 bg-emerald-500/5 border-t border-emerald-500/10">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 group/btn flex items-center justify-center gap-2"
                  )}
                >
                  Launch Application
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
