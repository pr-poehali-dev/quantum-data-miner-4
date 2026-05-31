import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const connectors = [
  {
    name: "Коннектор №1-1",
    type: "Угловой",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/d21c5010-a358-4a08-83b6-06f2353a8618.jpg",
    description: "Угловое соединение труб. Идеально для рам, стеллажей и опорных конструкций",
    price: "от 120 ₽",
  },
  {
    name: "Коннектор №1-2",
    type: "Угловой",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/ad13b31e-642f-43d7-84ff-f617e6fd8017.jpg",
    description: "Угловое соединение труб увеличенного размера. Для более тяжёлых конструкций",
    price: "от 180 ₽",
  },
  {
    name: "Коннектор №2",
    type: "Угловой 3D",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/8a711913-82a2-40a6-b6d5-fdefaed06cff.jpg",
    description: "Пространственное соединение труб под углом. Для объёмных каркасов и навесов",
    price: "от 210 ₽",
  },
  {
    name: "Коннектор №3",
    type: "Т-образный",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/981ec069-de7d-458e-b5b4-4e09fa52490f.jpg",
    description: "Соединение трёх труб. Применяется в перегородках, стеллажных и кровельных системах",
    price: "от 250 ₽",
  },
  {
    name: "Коннектор №4",
    type: "Крестовой",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/303c3502-9cf4-4870-888a-6922aa753864.jpg",
    description: "Четыре трубы в одной плоскости. Для решёток, настилов и сложных конструкций",
    price: "от 280 ₽",
  },
  {
    name: "Коннектор №5",
    type: "Угловой скатный",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/f3bcca57-1c2c-43ee-8ae2-bb65886ff611.jpg",
    description: "Угловое соединение для скатных конструкций. Подходит для навесов и кровельных каркасов",
    price: "от 320 ₽",
  },
  {
    name: "Коннектор №6",
    type: "Пространственный",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/4ce018c1-4d4b-4d0b-ba7d-efe2655aab9b.jpg",
    description: "Трёхмерное угловое соединение труб. Для сложных пространственных конструкций",
    price: "от 350 ₽",
  },
  {
    name: "Коннектор №8",
    type: "Основание (пятка)",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/cc34e207-ed60-4759-a277-a97186211829.jpg",
    description: "Опорное основание для вертикальных стоек. Крепление к полу, фундаменту или поверхности",
    price: "от 90 ₽",
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
              <div className="relative h-64 overflow-hidden bg-muted/30">
                <img
                  src={connector.image}
                  alt={connector.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Type Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="text-xs font-medium">{connector.type}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{connector.name}</h3>
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