import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Layers, Star } from "lucide-react"

const packages = [
  {
    title: "Набор для стеллажа",
    size: "Комплект 40 шт.",
    capacity: "до 200 кг",
    rating: "4.9",
    reviews: "87",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/f2f9ed9e-12ef-46fb-a12f-429707210c5d.jpg",
    highlights: ["Угловые 90°", "Т-образные", "Фланцевые", "Болты в комплекте"],
    price: "3 200 ₽",
  },
  {
    title: "Каркас навеса",
    size: "Комплект 60 шт.",
    capacity: "до 350 кг",
    rating: "4.8",
    reviews: "54",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/e0ed143c-d428-462e-a814-835479f25760.jpg",
    highlights: ["Угловые 3D", "Крестовые", "Шарнирные", "Фланцевые"],
    price: "5 800 ₽",
  },
  {
    title: "Промышленный стенд",
    size: "Комплект 100 шт.",
    capacity: "до 500 кг",
    rating: "5.0",
    reviews: "41",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/db2fdf66-dfa8-4f54-aaad-f82a46d9a9ef.jpg",
    highlights: ["Все типы коннекторов", "Усиленная сталь", "Антикор покрытие", "Инструкция"],
    price: "9 500 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Готовые <span className="font-semibold">комплекты</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Подобранные наборы коннекторов для типовых конструкций — всё необходимое в одном заказе
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Package className="h-4 w-4" />
                      <span>{pkg.size}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="h-4 w-4" />
                      <span>{pkg.capacity}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Цена комплекта</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}