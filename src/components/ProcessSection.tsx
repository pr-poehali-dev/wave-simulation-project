import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Fragment } from "react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Download",
    title: "Скачай GTA:SA",
    description:
      "Установи GTA San Andreas и скачай актуальную версию клиента SA:MP/CRMP с нашего сайта. Всё бесплатно — никаких скрытых платежей.",
    number: "01",
  },
  {
    icon: "Settings",
    title: "Подключись к серверу",
    description:
      "Запусти лаунчер, введи IP сервера и создай персонажа. Система поможет с первыми шагами — новичкам выдаётся стартовый набор.",
    number: "02",
  },
  {
    icon: "Gamepad2",
    title: "Начни своё РП",
    description:
      "Выбери профессию, найди работу или вступи в банду. Мир MANASHKA живёт своей жизнью — ты здесь главный герой своей истории.",
    number: "03",
  },
]

const updates = [
  {
    icon: "Car",
    title: "Система тюнинга авто",
    description: "Более 200 деталей тюнинга, покраска в кастомные цвета, уникальные номера. Твоя машина — твой стиль.",
    tag: "ДОБАВЛЕНО",
    tagColor: "bg-green-500/20 text-green-400",
  },
  {
    icon: "Building2",
    title: "Бизнес-система v2.0",
    description: "Открывай магазины, заправки, СТО. Полноценная экономика с поставками, сотрудниками и налогами.",
    tag: "ОБНОВЛЕНО",
    tagColor: "bg-primary/20 text-primary",
  },
  {
    icon: "Smartphone",
    title: "Мобильная версия",
    description: "Уже в разработке — играй с телефона без потери качества. Полноценный геймплей в кармане.",
    tag: "СКОРО",
    tagColor: "bg-yellow-500/20 text-yellow-400",
  },
  {
    icon: "Swords",
    title: "Система войн группировок",
    description: "Захват территорий, организованные ограбления, систематизированный криминальный мир.",
    tag: "В РАЗРАБОТКЕ",
    tagColor: "bg-blue-500/20 text-blue-400",
  },
]

export function ProcessSection() {
  return (
    <>
      {/* Как подключиться */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest">
              КАК НАЧАТЬ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Три шага до{" "}
              <span className="text-primary">своего персонажа</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Подключиться к MANASHKA CRMP проще, чем кажется. Следуй шагам и уже через 10 минут окажешься в игре.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <Fragment key={index}>
                <Card className="relative overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 bg-card border-border">
                  <div className="absolute top-0 right-0 text-[120px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                    {step.number}
                  </div>
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                      <Icon name={step.icon} fallback="Star" className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors font-bold tracking-wide">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                    style={{ left: `${(index + 1) * 33.33 - 4}%` }}
                  >
                    <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Что нового */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest">
              ОБНОВЛЕНИЯ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Что{" "}
              <span className="text-primary">нового</span>
              {" "}на сервере?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Мы постоянно добавляем контент и улучшаем игровой опыт. Вот что уже готово и что придёт в ближайшее время.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {updates.map((update, index) => (
              <Card key={index} className="group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                      <Icon name={update.icon} fallback="Star" className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{update.title}</h3>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${update.tagColor}`}>{update.tag}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{update.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
