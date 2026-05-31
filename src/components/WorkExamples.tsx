export function WorkExamples() {
  const examples = [
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/47285148-da4a-4f39-89e4-46e4371a7460.jpg",
      title: "Ферма кровельная",
      description: "Лёгкая стропильная ферма из профильных труб на коннекторах. Сборка без сварки за несколько часов",
    },
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/f3bcca57-1c2c-43ee-8ae2-bb65886ff611.jpg",
      title: "Коннектор №5",
      description: "Коньковый узел кровельной фермы. Верхние пояса 40×40, раскосы и стойка 20×40. Болты М8: 60мм-6шт., 20мм-8шт.",
    },
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/4ce018c1-4d4b-4d0b-ba7d-efe2655aab9b.jpg",
      title: "Пространственный узел №6",
      description: "Коннектор №6 соединяет три трубы в разных плоскостях — основа пространственного каркаса",
    },
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/f0376635-ffc2-44d1-a10b-7b973209f6dd.jpg",
      title: "Крестовой узел №1-1",
      description: "Коннектор №1-1 в крестовом соединении — для решёток, настилов и плоских каркасов",
    },
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/f2f9ed9e-12ef-46fb-a12f-429707210c5d.jpg",
      title: "Набор для стеллажа",
      description: "Готовый комплект коннекторов для сборки стеллажа — угловые, Т-образные, фланцевые и болты",
    },
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/e0ed143c-d428-462e-a814-835479f25760.jpg",
      title: "Каркас навеса",
      description: "Комплект коннекторов для навеса — угловые 3D, крестовые, шарнирные и фланцевые",
    },
    {
      image: "https://cdn.poehali.dev/projects/8d3899c4-d13c-4e96-95b2-9a435b9258e9/bucket/db2fdf66-dfa8-4f54-aaad-f82a46d9a9ef.jpg",
      title: "Промышленный стенд",
      description: "Усиленная конструкция из профильных труб на коннекторах — нагрузка до 500 кг",
    },
  ]

  return (
    <section id="examples" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Примеры <span className="font-semibold">работ</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Реальные конструкции, собранные с нашими коннекторами — без сварки, быстро и надёжно
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-video bg-muted cursor-pointer"
            >
              <img
                src={example.image}
                alt={example.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{example.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{example.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}