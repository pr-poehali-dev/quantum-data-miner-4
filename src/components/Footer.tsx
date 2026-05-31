import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">МеталлКоннект</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Металлические коннекторы для профильных труб — быстрый монтаж без сварки с 2024 года
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Угловые коннекторы</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Т-образные</a></li>
              <li><a href="#catalog" className="hover:text-foreground transition-colors">Крестовые</a></li>

            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#packages" className="hover:text-foreground transition-colors">Готовые комплекты</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Видеоинструкции</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика возврата</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+79872962414" className="hover:text-foreground transition-colors">+7 (987) 296-24-14</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:2962414@gmail.com" className="hover:text-foreground transition-colors">2962414@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Казань, территория Химград, 19</span>
              </li>
              <li className="text-xs leading-relaxed pt-1">
                Доставка: Деловые Линии, СДЭК или по договорённости
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 МеталлКоннект. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}