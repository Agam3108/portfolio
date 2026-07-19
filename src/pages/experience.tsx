import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "314e Corporation",
    period: "07/2026 - Present",
  },
  {
    role: "Software Engineering Intern",
    company: "314e Corporation",
    period: "01/2026 - 07/2026",
    description: [
      "Shipped production-grade full-stack features for Jeeves, an AI-integrated just-in-time EHR training platform with a KLAS rating exceeding 95%, using React for frontend and FastAPI for scalable backend services.",
      "Introduced a two-stage AI video editing pipeline using Temporal workflows for video pre-processing and AI-driven segmentation, eliminating manual intervention and reducing video editing turnaround time by 60%.",
      "Expanded the Jeeves content framework by enabling PDF consumables for microlearning assets, architecting a secure browser to R2 uploads via presigned URLs, asset versioning, and seamless in-app PDF delivery.",
      "Engineered a video intro/outro templating system using Fabric.js and Canvas APIs, enabling real-time branded overlays and supporting 150+ reusable media templates across 10 production tenants.",
      "Implemented guided product tours across 18+ core Jeeves screens with features like version control and screen-level step tracking, streamlining user onboarding and improving feature discoverability for new platform users."
    ],
    techStack: ["React", "FastAPI", "Temporal", "Fabric.js", "Canvas APIs", "Cloudflare R2"]
  }
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-heading">Work Experience</h1>
        <p className="text-lg text-muted-foreground">My professional journey so far.</p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 transition-transform z-10" />
            
            {/* Content Card */}
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{exp.role}</CardTitle>
                  <span className="font-mono text-sm text-muted-foreground mt-2 sm:mt-0 bg-secondary px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="font-medium text-primary/80">{exp.company}</p>
              </CardHeader>
              {(exp.description || exp.techStack) && (
                <CardContent className="space-y-4">
                  {exp.description && (
                    <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground text-sm">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {exp.techStack && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {exp.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
