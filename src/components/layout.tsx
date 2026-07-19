import { Outlet, Link, useLocation } from "react-router-dom"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useEffect } from "react"

export function Layout() {
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  // Handle scrolling to hash with precise offset for sticky header
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        // Calculate offset (Header is ~64px (h-16), so 100px gives nice breathing room)
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location])

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Skills", path: "/#skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/#contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-accent selection:text-accent-foreground">
      {/* Background Cursor Glow Effect Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div id="cursor-glow" className="absolute w-[400px] h-[400px] rounded-full blur-[100px] bg-primary/10 transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform hidden sm:block mix-blend-screen dark:mix-blend-lighten" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 -ml-2 sm:ml-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-6 mt-8">
                  {links.map((link) => (
                    <SheetTrigger asChild key={link.path}>
                      <Link
                        to={link.path}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </SheetTrigger>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link to="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
              <span className="font-heading font-bold text-xl tracking-tight text-primary">Personal Portfolio</span>
            </Link>
          </div>

          {/* Nav Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Links */}
            <nav className="hidden md:flex items-center space-x-6 mr-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full transition-transform hover:scale-110"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full container max-w-7xl mx-auto px-4 md:px-8 py-8 animate-in fade-in duration-500">
        <Outlet />
      </main>
    </div>
  )
}
