import { Card, CardContent } from "@/components/ui/card"
import { 
  SiPython, SiCplusplus, SiTypescript, SiJavascript, 
  SiNextdotjs, SiFastapi, SiDjango, SiExpress, SiReactquery
} from "react-icons/si"
import { 
  FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa"

const skills = [
  { name: "Python", proficiency: 95, icon: SiPython, color: "text-blue-500" },
  { name: "C++", proficiency: 85, icon: SiCplusplus, color: "text-blue-700" },
  { name: "TypeScript", proficiency: 90, icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", proficiency: 95, icon: SiJavascript, color: "text-yellow-400" },
  { name: "React", proficiency: 92, icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", proficiency: 88, icon: SiNextdotjs, color: "text-white" },
  { name: "Tanstack", proficiency: 85, icon: SiReactquery, color: "text-red-500" },
  { name: "FastAPI", proficiency: 90, icon: SiFastapi, color: "text-teal-500" },
  { name: "Django", proficiency: 85, icon: SiDjango, color: "text-green-700" },
  { name: "Node.js", proficiency: 88, icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", proficiency: 85, icon: SiExpress, color: "text-gray-400" },
  { name: "Git", proficiency: 90, icon: FaGitAlt, color: "text-orange-600" },
]

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4 text-center">
        <h2 className="text-sm font-semibold tracking-widest text-primary uppercase">Toolkit</h2>
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
          Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Technologies</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Proficiency levels based on production use across real projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, idx) => {
          const Icon = skill.icon
          return (
            <Card key={idx} className="bg-card/40 backdrop-blur border-primary/10 hover:border-primary/40 transition-all group overflow-hidden">
              <CardContent className="p-5 flex items-center gap-4">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-background flex items-center justify-center shrink-0 border border-primary/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`text-2xl ${skill.color}`} />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground/90">{skill.name}</span>
                    <span className="text-xs font-bold text-primary">{skill.proficiency}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary/50 to-primary rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
