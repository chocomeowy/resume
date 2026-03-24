import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { FintechProjects } from "@/components/fintech-projects";
import { Skills } from "@/components/skills";
import { ResumeQR } from "@/components/resume-qr";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <section id="about" className="py-20 px-6 md:px-10">
          <Hero />
        </section>
        <section id="education" className="py-20 px-6 md:px-10 bg-muted/30">
          <Education />
        </section>
        <section id="experience" className="py-20 px-6 md:px-10">
          <Projects />
        </section>
        <section id="fintech-projects" className="py-20 px-6 md:px-10 bg-muted/30">
          <FintechProjects />
        </section>
        <section id="skills" className="py-20 px-6 md:px-10">
          <Skills />
        </section>
        <section id="download" className="py-20 px-6 md:px-10">
          <ResumeQR />
        </section>
      </div>
      <footer className="py-8 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} - Professional Portfolio</p>
      </footer>
    </main>
  );
}
