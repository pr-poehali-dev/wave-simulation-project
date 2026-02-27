import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const futureFeatures = [
  {
    title: "Мобильная версия",
    category: "Ближайшее будущее",
    description:
      "Разработка мобильного клиента уже началась. Скоро ты сможешь заходить на сервер с телефона — полноценный геймплей без компромиссов. Следи за анонсами в нашем Discord.",
    icon: "Smartphone",
    status: "В разработке",
    statusColor: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  {
    title: "Собственный движок",
    category: "Большая цель",
    description:
      "Мы начали разработку собственного игрового проекта на базе накопленного опыта. Это будет уже не копия — это будет оригинальный МА-проект с уникальными механиками.",
    icon: "Rocket",
    status: "Старт разработки",
    statusColor: "bg-primary/20 text-primary border-primary/30",
  },
  {
    title: "Система недвижимости",
    category: "Следующее обновление",
    description:
      "Покупай квартиры, дома и особняки. Обустраивай интерьер, сдавай в аренду, устраивай вечеринки. Твой дом — твоя крепость.",
    icon: "Home",
    status: "Скоро",
    statusColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    title: "Система репутации",
    category: "В планах",
    description:
      "Каждое твоё действие влияет на репутацию в мире. Честный бизнесмен или опасный криминальный авторитет — выбор за тобой.",
    icon: "Star",
    status: "Планируется",
    statusColor: "bg-muted/50 text-muted-foreground border-border",
  },
]

export function PortfolioSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest">
            БУДУЩЕЕ MANASHKA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Куда мы{" "}
            <span className="text-primary">движемся</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            MANASHKA — это не статичный сервер. Мы постоянно развиваемся, и впереди у нас большие планы. Мобильная версия, собственный движок и сотни новых механик.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0 group-hover:scale-110">
                    <Icon name={feature.icon} fallback="Star" className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="text-sm text-primary font-bold tracking-wider">{feature.category}</p>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${feature.statusColor}`}>
                        {feature.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/10 border border-primary/20">
            <Icon name="Bell" fallback="Star" className="h-5 w-5 text-primary" />
            <p className="text-sm text-foreground/80">
              Следи за обновлениями в{" "}
              <Button variant="link" className="text-primary p-0 h-auto font-bold" asChild>
                <a href="#contact">нашем Discord</a>
              </Button>
              {" "}— анонсы первыми попадают туда
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
