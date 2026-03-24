"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

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
        className="mt-8"
      >
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader className="px-0">
            <CardTitle className="text-xl">Earlier Academic Background</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-card/50">
                <h4 className="font-bold">Engineering Foundation</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Background in engineering providing a strong analytical and problem-solving mindset 
                  essential for IoT and Data Analytics.
                </p>
              </div>
              <div className="p-4 rounded-lg border bg-card/50">
                <h4 className="font-bold">Specialized Certifications</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Continuous learning in Data Analytics, Technical Business Analysis, and Fintech 
                  through various professional development programs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
