"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Layers } from "lucide-react"

export function Education() {
  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education</h2>
        <p className="mt-4 text-muted-foreground">Academic foundation and specialized training.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <CardTitle className="text-2xl md:text-3xl font-bold">MSc in Financial Technology (Fintech)</CardTitle>
                  <CardDescription className="text-xl font-semibold text-foreground/80 mt-2">
                    Nanyang Technological University (NTU)
                  </CardDescription>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit h-fit px-4 py-2 text-sm font-semibold rounded-full bg-primary/10 text-primary border-primary/20">
                Current Pursuit
              </Badge>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-sm md:text-base font-medium text-muted-foreground border-y py-4 my-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary/60" />
                <span>2024 - Present</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary/60" />
                <span>Singapore</span>
              </div>
            </div>

            <CardContent className="p-0 text-muted-foreground lg:text-lg leading-relaxed max-w-4xl">
              <p>
                Focused on the intersection of finance and technology, covering areas such as blockchain, 
                algorithmic trading, financial data science, and quantitative risk management. 
                Gaining hands-on experience with modern financial systems and data-driven decision making.
              </p>
            </CardContent>
          </div>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">BSc Business</h3>
              </div>
              <p className="text-lg font-semibold text-foreground/80">SIM, University of London</p>
              <Badge variant="outline" className="mt-2 text-primary border-primary/20">Second Upper Honours</Badge>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Foundational business education providing strong analytical and managerial skills applied across 
                various operational and technical roles.
              </p>
            </div>
          </Card>

          <Card className="border-2 border-primary/5 hover:border-primary/20 transition-all duration-300 shadow-sm">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                   <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Professional Certifications</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground flex-grow">
                <li className="flex gap-2 items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span>Advanced Diploma in Python & ML (SMU Academy)</span>
                </li>
                <li className="flex gap-2 items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span>Software Engineering Immersive (General Assembly)</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
