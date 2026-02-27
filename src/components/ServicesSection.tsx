import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const advantages = [
  {
    icon: "Coins",
    title: "Честная экономика",
    description:
      "Никакого pay-to-win. Всё, что ты имеешь — заработано игрой. Баланс экономики тщательно выверен: деньги реально стоят своего труда, а не купить за донат.",
  },
  {
    icon: "Bug",
    title: "Быстрое исправление багов",
    description:
      "Нашёл баг — жди фикс в течение суток. У нас работает активная команда разработчиков, которая оперативно реагирует на все репорты игроков.",
  },
  {
    icon: "RefreshCw",
    title: "Регулярные обновления",
    description:
      "Каждую неделю — новый контент, механики и события. Скучать не придётся: сервер развивается вместе с игроками.",
  },
  {
    icon: "Users",
    title: "Живое сообщество",
    description:
      "Дружелюбный Discord, активный чат и сплочённая РП-тусовка. Новичков встречают тепло — здесь помогают освоиться.",
  },
  {
    icon: "Shield",
    title: "Честная администрация",
    description:
      "Баны только по делу, жалобы рассматриваются объективно. Администраторы слышат игроков и принимают решения справедливо.",
  },
  {
    icon: "Zap",
    title: "Мощное железо",
    description:
      "Сервер работает на выделенном железе без лагов и тормозов. Пинг стабильный, краши — редкость. Играй в своё удовольствие.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mx-auto block w-fit tracking-widest">
          ПОЧЕМУ MANASHKA?
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Преимущества, которые{" "}
          <span className="text-primary">решают</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Мы не просто ещё один сервер. Мы — проект, который создавался с уважением к игрокам и любовью к РП.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={adv.icon} fallback="Star" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors font-bold tracking-wide">{adv.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{adv.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
