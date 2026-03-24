"use client"

import { motion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import QRCode from "react-qr-code"
import { Download, QrCode, ExternalLink, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export function ResumeQR() {
  const websiteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://portfolio.example.com';
  const resumeUrl = `${websiteUrl}/resume.pdf`;

  return (
    <div className="container max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resume & Connect</h2>
        <p className="mt-4 text-muted-foreground">Download my detailed CV or scan to view on your mobile device.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-2 border-primary/10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle>Detailed Resume</CardTitle>
              </div>
              <CardDescription>
                A comprehensive overview of my professional journey, skills, and academic achievements in a printer-friendly PDF format.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Full experience history and project details
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Technical certifications and publications
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Direct contact information
                </li>
              </ul>
              <a 
                href="/resume.pdf" 
                download
                className={cn(buttonVariants({ size: "lg" }), "w-full h-14 text-lg font-bold gap-2")}
              >
                <Download className="h-5 w-5" />
                Download PDF Resume
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center p-8 bg-muted/30 rounded-3xl border-2 border-dashed border-muted-foreground/20"
        >
          <div className="bg-white p-6 rounded-2xl shadow-xl mb-6">
            <QRCode value={resumeUrl} size={200} />
          </div>
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary font-bold">
              <QrCode className="h-5 w-5" />
              <span>Scan to Download</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-[250px]">
              Access my digital resume instantly on your smartphone.
            </p>
            <button 
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              Open Direct Link <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
