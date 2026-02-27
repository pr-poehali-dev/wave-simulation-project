import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nickname: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contacts = [
    {
      icon: "MessageCircle",
      title: "Discord",
      value: "discord.gg/manashka",
      description: "Основной канал связи",
    },
    {
      icon: "Send",
      title: "Telegram",
      value: "@manashka_crmp",
      description: "Новости и анонсы",
    },
    {
      icon: "Globe",
      title: "IP Сервера",
      value: "play.manashka.ru",
      description: "Подключайся напрямую",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest">
            СВЯЗАТЬСЯ С НАМИ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Присоединяйся к{" "}
            <span className="text-primary">MANASHKA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Есть вопросы, баг-репорт или просто хочешь познакомиться? Мы всегда на связи. Пиши — ответим быстро.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-border bg-card shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold tracking-wide">Написать нам</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold tracking-wide">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                        className="bg-background border-border focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="nickname" className="text-sm font-semibold tracking-wide">
                        Никнейм в игре
                      </label>
                      <Input
                        id="nickname"
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        placeholder="Ваш ник"
                        className="bg-background border-border focus:border-primary transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold tracking-wide">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.ru"
                      required
                      className="bg-background border-border focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold tracking-wide">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Напишите ваш вопрос, баг-репорт или предложение..."
                      rows={6}
                      required
                      className="bg-background border-border focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold tracking-widest group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    ОТПРАВИТЬ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <Card key={index} className="border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Icon name={contact.icon} fallback="Star" className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 tracking-wide">{contact.title}</h3>
                      <p className="text-primary font-semibold text-sm">{contact.value}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{contact.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-primary/30 bg-gradient-to-b from-primary/10 to-primary/5">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">игроков уже с нами</p>
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-green-400">Сервер онлайн</span>
                </div>
                <Button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-widest" asChild>
                  <a href="https://play.manashka.ru" target="_blank" rel="noopener noreferrer">
                    ПОДКЛЮЧИТЬСЯ
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
