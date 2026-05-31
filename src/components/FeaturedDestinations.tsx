import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const connectors = [
  {
    name: "Коннектор №1-1",
    type: "Крестовой",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/495b1ff9-558e-4563-92ed-e1744a0a1c58.jpg",
    description: "Применяется в сборе с коннекторами №№1-5 (поставляется в комплекте). Для крестовых соединений профильных труб 20×40, 40×40",
    price: "165 ₽",
  },
  {
    name: "Коннектор №1-2",
    type: "Крестовой",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/ad13b31e-642f-43d7-84ff-f617e6fd8017.jpg",
    description: "Применяется в сборе с коннектором №6 (поставляется в комплекте). Для крестовых соединений профильных труб 60×60",
    price: "181 ₽",
  },
  {
    name: "Коннектор №1",
    type: "Опорный узел",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/d21c5010-a358-4a08-83b6-06f2353a8618.jpg",
    description: "Опорный узел кровельной фермы из профильной трубы 40×40. Болты М8: 60мм-1шт., 50мм-4шт., 80мм-4шт. Гайки самостопорящиеся",
    price: "515 ₽",
  },
  {
    name: "Коннектор №2",
    type: "Промежуточный узел",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/8a711913-82a2-40a6-b6d5-fdefaed06cff.jpg",
    description: "Промежуточный узел кровельной фермы. Верхний пояс 40×40, раскос и стойка 20×40. Болты М8: 60мм-7шт., 20мм-8шт.",
    price: "792 ₽",
  },
  {
    name: "Коннектор №3",
    type: "Т-образный",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/981ec069-de7d-458e-b5b4-4e09fa52490f.jpg",
    description: "Т-образное соединение профильных труб 40×40 и 20×40. Болты М8: 60мм-4шт., 20мм-4шт. Гайки самостопорящиеся",
    price: "466 ₽",
  },
  {
    name: "Коннектор №4",
    type: "Опорный узел нижнего пояса",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/303c3502-9cf4-4870-888a-6922aa753864.jpg",
    description: "Опорный узел нижнего пояса кровельной фермы. Труба 40×40, раскосы и стойка 20×40. Болты М8: 60мм-8шт., 20мм-8шт.",
    price: "858 ₽",
  },
  {
    name: "Коннектор №5",
    type: "Коньковый узел",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/9c5a81ca-12bf-43fb-97d8-ffcf978ccce2.jpg",
    description: "Коньковый узел кровельной фермы. Верхние пояса 40×40, раскосы и стойка 20×40. Болты М8: 60мм-6шт., 20мм-8шт.",
    price: "793 ₽",
  },
  {
    name: "Коннектор №6",
    type: "Т-образный 60×60",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/4ce018c1-4d4b-4d0b-ba7d-efe2655aab9b.jpg",
    description: "Т-образное соединение профильных труб 60×60. Болты М8: 80мм-8шт., 20мм-8шт. Гайки самостопорящиеся",
    price: "842 ₽",
  },
  {
    name: "Коннектор №8",
    type: "Опорная пятка",
    image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/cc34e207-ed60-4759-a277-a97186211829.jpg",
    description: "Опорная пятка профильной трубы 60×60. Болты М8: 20мм-4шт. Отверстия под шпильки Ø10. Гайки самостопорящиеся",
    price: "562 ₽",
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

                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{connector.price}</span>
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