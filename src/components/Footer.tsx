import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">M</span>
              <span className="text-xl font-bold tracking-widest">ANASHKA</span>
              <span className="ml-1 text-xs font-bold tracking-widest text-primary border border-primary/50 px-1.5 py-0.5 rounded">CRMP</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Одна из лучших копий Радмир РП. Честная экономика, живое сообщество, регулярные обновления. Твоя история начинается здесь.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400 font-semibold">Сервер онлайн 24/7</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 tracking-widest text-sm">НАВИГАЦИЯ</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "О проекте" },
                { href: "#services", label: "Преимущества" },
                { href: "#portfolio", label: "Будущее" },
                { href: "#pricing", label: "Привилегии" },
                { href: "#contact", label: "Контакты" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 tracking-widest text-sm">СООБЩЕСТВО</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="MessageCircle" fallback="Star" className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="Send" fallback="Star" className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="Youtube" fallback="Star" className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="Globe" fallback="Star" className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  play.manashka.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MANASHKA CRMP. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Не аффилирован с Radmir RP / Anvil Interactive
          </p>
        </div>
      </div>
    </footer>
  )
}
