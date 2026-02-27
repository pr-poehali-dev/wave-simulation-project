import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2, Users, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse"
          style={{ top: "10%", left: "-10%", animationDuration: "5s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl animate-pulse"
          style={{ bottom: "5%", right: "-5%", animationDuration: "7s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
        {/* Red scanline effect */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(204,26,26,0.03)_2px,rgba(204,26,26,0.03)_4px)]" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Gamepad2
          className="absolute text-primary/20 animate-float"
          style={{ top: "15%", left: "12%", animationDelay: "0s" }}
          size={44}
        />
        <Users
          className="absolute text-primary/20 animate-float"
          style={{ top: "20%", right: "15%", animationDelay: "2s" }}
          size={38}
        />
        <Zap
          className="absolute text-primary/20 animate-float"
          style={{ bottom: "22%", left: "18%", animationDelay: "1s" }}
          size={32}
        />
        <Icon
          name="Swords"
          fallback="Shield"
          className="absolute text-primary/15 animate-float"
          style={{ bottom: "18%", right: "12%", animationDelay: "3s" }}
          size={36}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-primary tracking-widest">СЕРВЕР ОНЛАЙН</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
          Живи по{" "}
          <span className="text-primary relative inline-block">
            своим правилам
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C75 4 225 4 298 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          MANASHKA CRMP — одна из лучших копий Радмир РП с честной экономикой, живым сообществом и регулярными обновлениями.
        </p>
        <p className="text-base text-muted-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
          Забудь о донате — здесь побеждает скилл, а не кошелёк.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 text-lg group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all tracking-widest"
            asChild
          >
            <a href="#contact">
              НАЧАТЬ ИГРАТЬ
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary font-bold px-10 py-6 text-lg backdrop-blur-sm bg-transparent tracking-widest"
            asChild
          >
            <a href="#portfolio">КАК ПОДКЛЮЧИТЬСЯ</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Сервер онлайн 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>500+ активных игроков</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Честная экономика</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1.5s" }} />
            <span>Обновления каждую неделю</span>
          </div>
        </div>
      </div>
    </section>
  )
}
