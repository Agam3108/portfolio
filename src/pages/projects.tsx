import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "SQL Editor Engine",
    description: "Designed a relational SQL query engine in Python through a modular six-stage database pipeline involving lexer, parser, semantic analyser, planner, optimiser, and executor. Reduced join execution complexity from O(N×M) to O(N+M) through hash-based lookups and configured query optimizations like predicate pushdown.",
    tags: ["Python", "SQL Parsing", "AST", "Pytest"],
    github: "https://github.com/Agam3108/SQL_Editor_Engine",
    demo: "#"
  },
  {
    title: "ExTrack",
    description: "Developed a full-stack expense tracker application with secure authentication and user onboarding. Integrated real-time bar chart visualizations and transaction analytics. Enhanced backend scalability using Drizzle ORM and Neon PostgreSQL, reducing data retrieval time by 30%.",
    tags: ["NextJS", "Tailwind CSS", "Drizzle-ORM", "Clerk", "Neon"],
    github: "https://github.com/Agam3108/Expense_Tracker_1.1",
    demo: "https://expense-tracker-1-1.vercel.app/"
  },
  {
    title: "College Management System",
    description: "Configured a CMS using Django and JQuery with focus on workflow automation and role-based authentication. Integrated cross-organisational platform for students, staff members and head of departments of college. ",
    tags: ["Django", "JQuery", "SQLite", "Postgres"],
    github: "https://github.com/Agam3108/College_Management_System",
    demo: "https://college-management-system-20mt.onrender.com/"
  },
  {
    title: "Stock Market Prediction App",
    description: "Developed a stock market prediction web app using Python and Streamlit, enabling users to forecast stock prices up to ~4 years ahead with over 85% model confidence using the Prophet time series forecasting library.",
    tags: ["Python", "Streamlit", "Prophet", "Plotly"],
    github: "https://github.com/Agam3108/Stock_Prediction",
    demo: "https://stockprediction-cjq9un6dtuxkbiasmddhuh.streamlit.app/"
  },
  {
    title: "Fish Classification and Recognition",
    description: "Trained a Fish Species Classification model using MobileNetV2 and Tensorflow, achieving 95%+ accuracy across 9 fish species (9,000+ augmented images).",
    tags: ["Python", "Tensorflow", "MobileNetV2", "OpenCV"],
    github: "https://github.com/Agam3108/Minor_Project_Fish_Classification",
    demo: "https://minorprojectfishclassification-bv5qvw4yu3hpztabdg6r2h.streamlit.app/"
  }
]

export default function Projects() {
  return (
    <div className="space-y-8 py-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-heading">Projects</h1>
        <p className="text-lg text-muted-foreground">A selection of my recent work and open-source contributions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="flex flex-col bg-card/50 backdrop-blur hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="font-mono text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex space-x-4 border-t pt-4">
              <Button variant="ghost" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
