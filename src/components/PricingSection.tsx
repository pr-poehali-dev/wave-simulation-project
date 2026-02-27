import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Новичок",
    price: "Бесплатно",
    description: "Для всех игроков",
    features: [
      "Полный доступ к игровому миру",
      "Стартовый набор новичка",
      "Базовые профессии",
      "Общий чат и форум",
      "Поддержка 24/7",
    ],
    highlighted: false,
    cta: "Начать играть",
  },
  {
    name: "VIP",
    price: "199 ₽/мес",
    description: "Для преданных игроков",
    features: [
      "Уникальный VIP-тег в чате",
      "Бонус +25% к зарплате",
      "Приоритетный вход на сервер",
      "Эксклюзивные скины авто",
      "VIP-зона и спецмероприятия",
      "Кастомный номер авто",
    ],
    highlighted: true,
    cta: "Получить VIP",
  },
  {
    name: "PREMIUM",
    price: "499 ₽/мес",
    description: "Для лучших из лучших",
    features: [
      "Всё из VIP",
      "Уникальный Premium-тег",
      "Бонус +50% к зарплате",
      "Личный гараж на 10 авто",
      "Эксклюзивные анимации",
      "Доступ к закрытым ивентам",
      "Персональный поддержка",
    ],
    highlighted: false,
    cta: "Получить Premium",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ПРИВИЛЕГИИ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Выбери свой{" "}
            <span className="text-primary">статус</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Базовая игра полностью бесплатна. Привилегии — только косметика и удобство, никакого преимущества в геймплее
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary shadow-xl shadow-primary/20 scale-105 bg-gradient-to-b from-card to-primary/5"
                  : "border-border hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300 bg-card`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg tracking-wider">
                  ПОПУЛЯРНЫЙ
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-1 font-bold tracking-wider">{tier.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-bold tracking-wider ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                      : "border border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary"
                  }`}
                  asChild
                >
                  <a href="#contact">{tier.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Все привилегии —{" "}
            <span className="text-primary font-bold">только косметика</span>
            . Игровое преимущество купить нельзя.
          </p>
        </div>
      </div>
    </section>
  )
}
