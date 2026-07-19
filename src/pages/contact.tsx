import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto space-y-8 py-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold font-heading">Contact Me</h1>
        <p className="text-lg text-muted-foreground">Let's connect! Feel free to reach out for collaborations or just a friendly hello.</p>
      </div>

      <Card className="bg-card/50 backdrop-blur border-primary/20">
        <CardHeader className="text-center">
          <CardTitle>Get In Touch</CardTitle>
          <CardDescription>You can find me on the following platforms</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <Button variant="outline" className="h-14 justify-start text-lg font-medium hover:border-primary transition-all" asChild>
            <a href="mailto:agamsrivastava3108@gmail.com">
              <Mail className="mr-4 h-5 w-5" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" className="h-14 justify-start text-lg font-medium hover:border-primary transition-all" asChild>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="mr-4 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="h-14 justify-start text-lg font-medium hover:border-primary transition-all" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="mr-4 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" className="h-14 justify-start text-lg font-medium hover:border-primary transition-all" asChild>
            <a href="https://leetcode.com" target="_blank" rel="noreferrer">
              <SiLeetcode className="mr-4 h-5 w-5" />
              LeetCode
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
