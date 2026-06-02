import { Wrench, Shield, Truck, Settings, RefreshCw, Paintbrush } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Простой монтаж",
    description: "Сборка без сварки и специального оборудования. Болтовые соединения — справится любой",
  },
  {
    icon: Shield,
    title: "Надёжное качество",
    description: "Сталь с антикоррозийным покрытием. Нагрузка до 500 кг на узел — проверено на практике",
  },
  {
    icon: Truck,
    title: "Доставка",
    description: "Доставка по всей России транспортной компанией",
  },
  {
    icon: Settings,
    title: "Без сварки и сверления",
    description: "Собирайте конструкции самостоятельно — не нужно сварочного оборудования или дрели",
  },
  {
    icon: RefreshCw,
    title: "Разборные конструкции",
    description: "Легко разбирать, дополнять, изменять и перевозить — конструкция адаптируется под ваши задачи",
  },
  {
    icon: Paintbrush,
    title: "Порошковая покраска",
    description: "Красьте трубы до монтажа — порошковое покрытие защищает от коррозии значительно лучше обычной краски",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">МеталлКоннект</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы помогаем строить быстро и надёжно — от гаражных стеллажей до промышленных стендов
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}