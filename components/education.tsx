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
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors">
          <div className="md:grid md:grid-cols-[200px_1fr]">
            <div className="bg-primary/5 p-6 flex flex-col items-center justify-center text-primary border-b md:border-b-0 md:border-r">
              <GraduationCap className="h-12 w-12 mb-2" />
              <span className="font-bold text-sm text-center">Master of Science</span>
            </div>
            <CardHeader className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">MSc in Financial Technology (Fintech)</CardTitle>
                  <CardDescription className="text-lg font-medium text-foreground/80 mt-1">
                    Nanyang Technological University (NTU)
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="w-fit h-fit px-3 py-1">
                  Current Pursuit
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>2024 - Present</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Singapore</span>
                </div>
              </div>
              <CardContent className="p-0 mt-6 text-muted-foreground leading-relaxed">
                <p>
                  Focused on the intersection of finance and technology, covering areas such as blockchain, 
                  algorithmic trading, financial data science, and quantitative risk management. 
                  Gaining hands-on experience with modern financial systems and data-driven decision making.
                </p>
              </CardContent>
            </CardHeader>
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
