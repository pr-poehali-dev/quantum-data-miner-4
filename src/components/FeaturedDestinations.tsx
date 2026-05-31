import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const connectors = [
  {
    name: "Угловой 90°",
    type: "Одноплоскостной",
    image: "/santorini-sunset.png",
    description: "Соединяет две трубы под прямым углом. Идеально для рам, стеллажей и опорных конструкций",
    price: "от 120 ₽",
  },
  {
    name: "Т-образный",
    type: "Трёхсторонний",
    image: "/bali-indonesia-rice-terraces-tropical-paradise.jpg",
    description: "Соединение трёх труб в одной плоскости. Применяется в перегородках и стеллажных системах",
    price: "от 150 ₽",
  },
  {
    name: "Крестовой",
    type: "Четырёхсторонний",
    image: "/kyoto-japan-traditional-temples-cherry-blossoms.jpg",
    description: "Четыре трубы в одной плоскости. Для решёток, настилов и сложных плоских конструкций",
    price: "от 180 ₽",
  },
  {
    name: "Угловой 3D",
    type: "Пространственный",
    image: "/maldives-overwater-bungalows-crystal-clear-water.jpg",
    description: "Соединяет три трубы в трёх плоскостях. Для пространственных каркасов и навесов",
    price: "от 210 ₽",
  },
  {
    name: "Фланцевый",
    type: "Торцевой",
    image: "/iceland-northern-lights-waterfalls-dramatic-landsc.jpg",
    description: "Крепление трубы к плоской поверхности: полу, стене, потолку. Надёжная фиксация",
    price: "от 90 ₽",
  },
  {
    name: "Шарнирный",
    type: "Поворотный",
    image: "/dubai-modern-skyline-luxury-desert.jpg",
    description: "Регулируемый угол от 0° до 180°. Для нестандартных конструкций и скатных крыш",
    price: "от 350 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="catalog" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Виды <span className="font-semibold">коннекторов</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Широкий ассортимент металлических соединителей для профильных труб 20×20, 25×25, 40×40 мм и других сечений
          </p>
        </div>

        {/* Connectors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {connectors.map((connector, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={connector.image || "/placeholder.svg"}
                  alt={connector.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">{connector.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{connector.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{connector.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{connector.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-2 bg-transparent"
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Все товары
          </Button>
        </div>
      </div>
    </section>
  )
}
