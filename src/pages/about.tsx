import { Card, CardContent } from "@/components/ui/card"

const education = {
  institution: "Indian Institute of Information Technology, Bhopal",
  degree: "B.Tech in Electronics and Communication Engineering",
  period: "11/2022 – 06/2026",
  details: "CPI: 8.96/10",
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-heading">About Me</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I am a software engineer with 6+ months of experience building across the stack, specializing in Python and FastAPI for creating scalable backend solutions, and React and TypeScript for building responsive UI elements and interfaces.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-heading">Education</h2>
        <Card className="bg-card/50 backdrop-blur border-border overflow-hidden hover:border-primary/50 transition-colors">
          <CardContent className="p-6 space-y-2">
            <div>
              <h3 className="font-bold text-lg text-primary leading-tight">{education.institution}</h3>
              <p className="font-medium text-sm mt-1">{education.degree}</p>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{education.period}</span>
                <span>{education.details}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
