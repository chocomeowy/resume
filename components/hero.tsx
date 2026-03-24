"use client"

import { motion } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BarChart3, Binary, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <div className="container relative py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 max-w-[800px]"
        >
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-4">
            Technical Business Analyst & Data Enthusiast
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Driving Innovation in <span className="text-primary">Fintech</span> & Data Analytics
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl leading-relaxed">
            Expertise in Technical Business Analysis with a strong foundation in IoT, Data Analytics, and Quantitative Risk Modeling. Currently pursuing MSc in Fintech at NTU.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link 
            href="#experience" 
            className={cn(buttonVariants({ size: "lg" }), "h-12 px-8")}
          >
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="#download" 
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-8")}
          >
            Resume
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl pt-12"
        >
          <div className="flex flex-col items-center space-y-2 p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg">Fintech</h3>
            <p className="text-sm text-muted-foreground text-center">
              Specializing in quantitative risk modeling and financial technology solutions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Binary className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg">Data Analytics</h3>
            <p className="text-sm text-muted-foreground text-center">
              Transforming complex IoT data into actionable business insights with Grafana and Python.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg">Risk Modeling</h3>
            <p className="text-sm text-muted-foreground text-center">
              Utilizing Monte Carlo simulations and advanced statistics for robust risk assessment.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-50" />
      </div>
    </div>
  )
}
