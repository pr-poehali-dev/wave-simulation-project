import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#about", label: "О ПРОЕКТЕ" },
    { href: "#services", label: "ПРЕИМУЩЕСТВА" },
    { href: "#portfolio", label: "НОВОСТИ" },
    { href: "#pricing", label: "ТАРИФЫ" },
    { href: "#contact", label: "КОНТАКТЫ" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background border-border">
        <SheetHeader>
          <SheetTitle className="text-left tracking-widest">MANASHKA CRMP</SheetTitle>
          <SheetDescription className="text-left text-muted-foreground">Навигация</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold tracking-wider hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center bg-primary text-white font-bold tracking-widest py-3 px-4 rounded-lg hover:bg-primary/90 transition-all"
          >
            НАЧАТЬ ИГРАТЬ
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
