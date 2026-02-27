import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Наконец-то сервер, где не нужно донатить, чтобы быть крутым. Честная экономика — это редкость. Играю уже 3 месяца, не собираюсь уходить.",
    name: "Игрок Kostyan_V",
    role: "Бизнесмен на сервере, 350+ часов",
  },
  {
    quote: "Админы реально слушают игроков. Написал баг-репорт утром — к вечеру уже фикс. Такого я нигде не видел. Уважение команде!",
    name: "Игрок Dark_Rider",
    role: "Полицейский, 200+ часов",
  },
  {
    quote: "Атмосфера сумасшедшая. Нашёл друзей, создали свою группировку, захватываем кварталы. РП здесь живое — не как на мёртвых серверах.",
    name: "Игрок XShadow99",
    role: "Лидер группировки, 500+ часов",
  },
  {
    quote: "Пришёл после Радмир РП, думал будет хуже — оказалось в разы лучше. Без очередей, без лагов, с нормальными людьми. Это мой сервер теперь.",
    name: "Игрок ProStreet",
    role: "Гонщик, 180+ часов",
  },
  {
    quote: "Бизнес-система топовая. Открыл свой магазин, нанял сотрудников, делаю поставки. Это не просто игра — это реальная экономика в миниатюре.",
    name: "Игрок Merchant_King",
    role: "Владелец бизнеса, 420+ часов",
  },
  {
    quote: "Сервер на мощном железе — ни разу крашей за два месяца. Пинг стабильный даже в час-пик. Разработчики явно знают своё дело.",
    name: "Игрок SpeedNet",
    role: "Гонщик, 250+ часов",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.4

    const scroll = () => {
      scrollPosition += scrollSpeed
      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="container mx-auto max-w-7xl">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mx-auto block w-fit tracking-widest">
          ОТЗЫВЫ ИГРОКОВ
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят{" "}
          <span className="text-primary">наши игроки</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Сотни игроков уже выбрали MANASHKA CRMP своим домом. Вот что они думают о сервере.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[420px] border-border/50 bg-card hover:border-primary/30 transition-colors">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[100px] text-foreground/90">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-bold text-base text-primary">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm mt-1">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
