import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Icon from "@/components/ui/icon"

const values = [
  { title: "Без pay-to-win", description: "Донат только косметический — внешки, анимации. Геймплей честный" },
  { title: "Реалистичный РП", description: "Проработанные механики работы, криминала, бизнеса и семей" },
  { title: "Активная разработка", description: "Команда разработчиков трудится над улучшениями постоянно" },
  { title: "Баги фиксируются быстро", description: "Репорты принимаются 24/7, критические баги закрываются в тот же день" },
  { title: "Регулярные ивенты", description: "Еженедельные события, турниры и сезонные обновления" },
  { title: "Свободный отыгрыш", description: "Играй полицейским, бизнесменом, бандитом — роль выбираешь ты" },
]

const stats = [
  { number: "500+", label: "Игроков онлайн" },
  { number: "24/7", label: "Сервер работает" },
  { number: "50+", label: "Новых механик" },
  { number: "1+", label: "Год работы" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest">
            <Icon name="Gamepad2" fallback="Star" className="h-4 w-4" />
            О MANASHKA CRMP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Проект, который{" "}
            <span className="text-primary relative">
              уважает игроков
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                <path d="M0 4C75 2 225 6 300 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            MANASHKA CRMP — это копия Радмир РП, созданная командой энтузиастов. Мы строим сервер, где важен скилл, а не размер кошелька.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-border/50 shadow-md hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors tracking-wide">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-semibold tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
