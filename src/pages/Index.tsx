import { lazy, Suspense, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

// Lazy loading для компонентов
const Accordion = lazy(() => import('@/components/ui/accordion').then(module => ({
  default: module.Accordion
})));
const AccordionContent = lazy(() => import('@/components/ui/accordion').then(module => ({
  default: module.AccordionContent
})));
const AccordionItem = lazy(() => import('@/components/ui/accordion').then(module => ({
  default: module.AccordionItem
})));
const AccordionTrigger = lazy(() => import('@/components/ui/accordion').then(module => ({
  default: module.AccordionTrigger
})));

// Мемоизированные компоненты для оптимизации
const MonumentCard = memo(({ monument }: { monument: any }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-square overflow-hidden">
      <img 
        src={monument.image}
        alt={monument.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        loading="lazy"
        decoding="async"
      />
    </div>
    <CardHeader>
      <CardTitle className="font-heading">{monument.title}</CardTitle>
      <CardDescription className="text-lg font-semibold text-primary">
        {monument.price}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Button className="w-full">Подробнее</Button>
    </CardContent>
  </Card>
));

const ServiceCard = memo(({ service }: { service: any }) => (
  <Card className="text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={service.icon as any} size={32} className="text-primary" />
      </div>
      <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">
        {service.description}
      </CardDescription>
    </CardContent>
  </Card>
));

MonumentCard.displayName = 'MonumentCard';
ServiceCard.displayName = 'ServiceCard';

export default function Index() {

  // Оптимизированные данные
  const monuments = [
    { id: 1, title: 'Классический вертикальный', price: 'от 45 000 ₽', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg' },
    { id: 2, title: 'Горизонтальный элегант', price: 'от 38 000 ₽', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg' },
    { id: 3, title: 'Бронзовая мемориальная плита', price: 'от 25 000 ₽', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg' },
  ];

  const services = [
    { title: 'Изготовление памятников', description: 'Индивидуальное изготовление из премиальных материалов', icon: 'Hammer' },
    { title: 'Установка и монтаж', description: 'Профессиональная установка с гарантией качества', icon: 'Settings' },
    { title: 'Гравировка и оформление', description: 'Художественная гравировка портретов и надписей', icon: 'PenTool' },
    { title: 'Благоустройство места', description: 'Комплексное обустройство мемориального участка', icon: 'TreePine' }
  ];

  return (
    <Layout>
      <div className="bg-background">

      {/* Hero Section */}
      <section className="pt-4 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                Изготовление памятников <br />
                <span className="text-primary">в Москве</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Создаём вечные памятники из лучших материалов с индивидуальным подходом к каждому заказу
              </p>

            </div>
            
            {/* 3D Model Request Form - Mobile Optimized */}
            <div className="order-1 lg:order-2 bg-card rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-primary/10 overflow-hidden">
              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="text-center">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold mb-2">3D макет памятника</h3>
                  <p className="text-sm sm:text-base text-muted-foreground px-2">
                    Получите реалистичную визуализацию перед изготовлением
                  </p>
                </div>
                
                {/* Compact 3D Visualization Image */}
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/2f6194d4-96fc-4373-a105-199c5a4748d6.png"
                    alt="3D макет памятника - мемориальный комплекс"
                    className="w-full max-h-48 sm:max-h-64 md:max-h-80 rounded-lg object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                  />
                  <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="Cube" size={12} className="inline mr-1" />
                    3D
                  </div>
                </div>



                {/* Compact Form */}
                <div className="bg-muted/30 rounded-lg p-3 sm:p-4">
                  <h4 className="font-semibold text-sm sm:text-base mb-3 text-center">Заказать 3D макет</h4>
                  <form className="space-y-2 sm:space-y-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-3 py-2 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      className="w-full px-3 py-2 text-sm border border-input rounded-lg bg-background focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary"
                      required
                    />

                    <Button className="w-full bg-primary hover:bg-primary/90 h-9 sm:h-10 text-sm font-medium">
                      <Icon name="Cube" size={14} className="mr-1" />
                      Заказать бесплатно
                    </Button>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-2 border border-green-200">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Icon name="Gift" size={12} className="text-green-600" />
                          <span className="font-semibold text-green-800 text-xs">Бесплатный макет</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          При заказе памятника
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl font-bold mb-4">Каталог памятников</h3>
            <p className="text-xl text-muted-foreground">Широкий выбор готовых решений для любого бюджета</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                Памятники на могилу
              </TabsTrigger>
              <TabsTrigger 
                value="granite"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                Благоустройство захоронения
              </TabsTrigger>
              <TabsTrigger 
                value="marble"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                Оформление памятника
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monuments.map(monument => (
                  <MonumentCard key={monument.id} monument={monument} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row sm:inline-flex items-center gap-4 bg-white rounded-2xl sm:rounded-full px-6 sm:px-8 py-4 shadow-lg max-w-md sm:max-w-none mx-auto">
              <Icon name="Phone" size={20} className="text-primary flex-shrink-0" />
              <div className="text-center sm:text-left">
                <p className="font-medium text-sm sm:text-base">Не знаете, что выбрать?</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Получите бесплатную консультацию</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl font-bold mb-4">Наши услуги</h3>
            <p className="text-xl text-muted-foreground">Полный цикл работ от проектирования до установки</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={`service-${index}`} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl font-bold mb-4">Галерея работ</h3>
            <p className="text-xl text-muted-foreground">Примеры наших лучших проектов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monuments.map((monument, index) => (
              <div key={monument.id} className="aspect-square bg-muted rounded-xl overflow-hidden">
                <img 
                  src={monument.image}
                  alt={monument.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-4xl font-bold mb-6">О нашей компании</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Более 15 лет мы создаём памятники, которые станут достойной памятью о ваших близких. 
                Используем только лучшие материалы и современные технологии обработки.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Установленных памятников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-slate-100">
              <img 
                src="https://cdn.poehali.dev/files/1f6e9f37-646c-458a-ba44-aac1996ce96c.png"
                alt="Мемориальный комплекс с ангелом и цветами"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="mb-12">
            <h3 className="font-heading text-3xl font-bold mb-2">Отзывы клиентов</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                <div className="text-2xl font-bold">4.8</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <div className="text-sm text-gray-600 ml-2">247 отзывов</div>
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Plus" size={16} className="mr-2" />
                Оставить отзыв
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                name: "Анна Михайловна",
                avatar: "А",
                rating: 5,
                date: "15 ноября 2024",
                text: "Заказывали памятник из черного гранита для папы. Очень довольны качеством работы. Мастера подошли к делу с пониманием и профессионализмом. Памятник получился красивый, качественная гравировка. Установили в срок. Рекомендую!",
                helpful: 12,
                photos: 2
              },
              {
                name: "Дмитрий Петрович",
                avatar: "Д",
                rating: 5,
                date: "8 ноября 2024",
                text: "Отличная компания! Делали семейный памятник из красного гранита. Результат превзошёл все ожидания. Особенно понравился индивидуальный подход и внимание к деталям. Цена соответствует качеству.",
                helpful: 8,
                photos: 0
              },
              {
                name: "Елена Владимировна",
                avatar: "Е",
                rating: 5,
                date: "28 октября 2024",
                text: "Спасибо большое за терпение и понимание в такой трудный для нас момент. Менеджер очень деликатно всё объяснил, помог с выбором. Памятник сделали точно в срок, качество на высоте. Очень благодарны!",
                helpful: 15,
                photos: 1
              },
              {
                name: "Сергей Александрович",
                avatar: "С",
                rating: 4,
                date: "20 октября 2024", 
                text: "Заказывал памятник для мамы. В целом доволен работой. Небольшая задержка с доставкой, но предупредили заранее. Качество гравировки хорошее, установили аккуратно.",
                helpful: 6,
                photos: 0
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">{review.date}</div>
                    <p className="text-gray-800 leading-relaxed mb-4">{review.text}</p>
                    
                    {review.photos > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="Image" size={16} className="text-gray-400" />
                        <span className="text-sm text-gray-500">{review.photos} фото</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm">
                      <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800">
                        <Icon name="ThumbsUp" size={14} />
                        Полезно ({review.helpful})
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        Ответить
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        <Icon name="Share2" size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline">
              Показать все отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl font-bold mb-4">Часто задаваемые вопросы</h3>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы об изготовлении памятников</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="materials" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Mountain" size={20} className="text-primary" />
                  Какие материалы используются для изготовления памятников?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Мы используем только премиальные материалы высочайшего качества:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Гранит габбро-диабаз</strong> — самый прочный и долговечный материал, устойчив к любым погодным условиям</li>
                  <li><strong>Красный гранит (Лезники)</strong> — благородный материал с натуральным рисунком</li>
                  <li><strong>Серый гранит (Возрождение)</strong> — элегантный материал с равномерной текстурой</li>
                  <li><strong>Итальянский мрамор Каррара</strong> — премиум материал для эксклюзивных проектов</li>
                  <li><strong>Бронзовые элементы</strong> — для декоративных деталей и надписей</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="production-time" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  Сколько времени занимает изготовление памятника?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Сроки изготовления зависят от сложности проекта:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Стандартные памятники</h4>
                    <p className="text-sm">14-21 рабочий день</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Сложные проекты</h4>
                    <p className="text-sm">25-40 рабочих дней</p>
                  </div>
                </div>
                <p>В сезон высокой загруженности (весна-лето) сроки могут увеличиваться до 30-45 дней. Точные сроки сообщаем при заказе.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="portrait-engraving" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Camera" size={20} className="text-primary" />
                  Как происходит гравировка портрета на памятнике?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Мы предлагаем два способа гравировки портретов:</p>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="Zap" size={16} className="text-blue-500" />
                      Лазерная гравировка
                    </h4>
                    <p className="text-sm mb-2">Современная технология с высокой детализацией</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Точная передача деталей и полутонов</li>
                      <li>Долговечность изображения</li>
                      <li>Быстрое выполнение (2-3 дня)</li>
                    </ul>
                  </div>
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="Paintbrush" size={16} className="text-purple-500" />
                      Ручная гравировка
                    </h4>
                    <p className="text-sm mb-2">Художественная работа мастера-гравёра</p>
                    <ul className="text-sm space-y-1 list-disc list-inside">
                      <li>Уникальность каждого портрета</li>
                      <li>Живая, объёмная передача черт</li>
                      <li>Эксклюзивность исполнения</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="installation" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Wrench" size={20} className="text-primary" />
                  Включена ли установка памятника в стоимость?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Да, установка включена в стоимость памятника и включает:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Подготовка фундамента
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Доставка на кладбище
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Монтаж всех элементов
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Финальная обработка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Уборка территории
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Гарантия 10 лет
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 text-sm font-medium">
                    <Icon name="Shield" size={16} className="inline mr-2" />
                    Установка выполняется только нашими сертифицированными мастерами с опытом работы более 5 лет
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

              <AccordionItem value="price-factors" className="border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Calculator" size={20} className="text-primary" />
                    От чего зависит стоимость памятника?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  <p>Цена зависит от размера, материала (гранит, мрамор, бронза), сложности оформления и дополнительных услуг.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </div>
      </section>



      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl font-bold mb-4">Контакты</h3>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для консультации</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">г. Москва, ул. Примерная, 123</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-4" />
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Пн-Пт: 9:00-18:00<br />Сб-Вс: 10:00-16:00</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      </div>
    </Layout>
  );
}