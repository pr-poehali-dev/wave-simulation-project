import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
              О ПРОЕКТЕ
            </a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
              ПРЕИМУЩЕСТВА
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
              НОВОСТИ
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
              ТАРИФЫ
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors tracking-wide">
              КОНТАКТЫ
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-bold tracking-wider" asChild>
              <a href="#contact">ИГРАТЬ</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
