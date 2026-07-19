import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import { Layout } from "@/components/layout"
import Home from "@/pages/home"
import About from "@/pages/about"
import Projects from "@/pages/projects"
import Experience from "@/pages/experience"
import Resume from "@/pages/resume"
import Contact from "@/pages/contact"
import { useEffect } from "react"

export default function App() {
  
  // Custom cursor glow effect logic
  useEffect(() => {
    const cursorGlow = document.getElementById("cursor-glow")
    if (!cursorGlow) return

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
