import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Terminal } from "lucide-react"

import About from "./about"
import Projects from "./projects"
import Experience from "./experience"
import Skills from "./skills"
import Contact from "./contact"

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero Section */}
      <section id="home" className="flex flex-col md:flex-row items-center justify-between min-h-[85vh] py-12 md:py-20 gap-12 animate-in slide-in-from-bottom-8 duration-700">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 space-y-6 text-left w-full">
          <div className="inline-flex items-center space-x-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-mono border">
            <Terminal className="h-4 w-4" />
            <span>hello_world.tsx</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold font-heading text-primary transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:scale-[1.02] origin-left cursor-default">
              Agam Srivastava
            </h1>
            <h2 className="text-lg font-medium text-secondary-foreground transition-all duration-300 hover:text-foreground hover:translate-x-1 cursor-default">
               Associate Software Engineer @ 314e Corporation
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A Software Engineer passionate about building efficient, scalable systems and AI-integrated applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button asChild size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto group">
              <Link to="/#experience">
                Work Experience
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full shadow-sm hover:shadow-primary/10 transition-all w-full sm:w-auto group">
              <Link to="/#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative w-full">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-primary via-accent to-primary animate-gradient-slow shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent blur-2xl opacity-40 animate-pulse rounded-full" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-card">
              <img 
                src="/profile.png" 
                alt="Agam Srivastava" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Floating Contact CTA */}
        <Button 
          asChild 
          size="lg" 
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-200 ease-out hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-in fade-in zoom-in slide-in-from-bottom-4"
        >
          <Link to="/#contact">Lets Build Something</Link>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </div>
  )
}
