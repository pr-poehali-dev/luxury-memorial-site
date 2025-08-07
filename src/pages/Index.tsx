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
            <h3 className="font-heading text-4xl font-bold mb-4">Каталог товаров и услуг</h3>
            <p className="text-xl text-muted-foreground">Широкий выбор готовых решений для любого бюджета</p>
          </div>

          <Tabs defaultValue="monuments" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger 
                value="monuments"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                Памятники на могилу
              </TabsTrigger>
              <TabsTrigger 
                value="improvement"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                Благоустройство захоронения
              </TabsTrigger>
              <TabsTrigger 
                value="decoration"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
              >
                Оформление памятника
              </TabsTrigger>
            </TabsList>

            {/* Памятники на могилу */}
            <TabsContent value="monuments">
              <Tabs defaultValue="manufacture" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6">
                  <TabsTrigger value="manufacture">Заказать изготовление памятника</TabsTrigger>
                  <TabsTrigger value="military">Памятники военным СВО</TabsTrigger>
                  <TabsTrigger value="complex">Мемориальные комплексы</TabsTrigger>
                </TabsList>

                <TabsContent value="manufacture">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Полный цикл изготовления памятников из гранита и мрамора с доставкой и установкой</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.map(monument => (
                      <MonumentCard key={monument.id} monument={monument} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="military">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Специальные памятники для героев СВО с военной символикой и льготными условиями</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(0, 3).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: monument.title + " (СВО)", badge: "Военный"}} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="complex">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Готовые решения включающие памятник, благоустройство и оформление захоронения</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(1, 4).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Мемориальный комплекс " + monument.title, price: monument.price + 20000}} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            {/* Благоустройство захоронения */}
            <TabsContent value="improvement">
              <Tabs defaultValue="foundation" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6">
                  <TabsTrigger value="foundation">Заказать цоколь</TabsTrigger>
                  <TabsTrigger value="furniture">Столики и лавочки</TabsTrigger>
                  <TabsTrigger value="fences">Ограды на могилу</TabsTrigger>
                </TabsList>

                <TabsContent value="foundation">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Гранитные и бетонные цоколи для надёжного основания памятника</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(0, 3).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Цоколь " + monument.title, price: Math.floor(monument.price * 0.4)}} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="furniture">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Гранитные столики и лавочки для комфортного посещения места захоронения</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(1, 4).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Столик и лавочка", price: Math.floor(monument.price * 0.6)}} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="fences">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Кованые и гранитные ограды для благоустройства территории захоронения</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(2, 5).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Ограда " + monument.title, price: Math.floor(monument.price * 0.5)}} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>

            {/* Оформление памятника */}
            <TabsContent value="decoration">
              <Tabs defaultValue="ceramics" className="w-full">
                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6">
                  <TabsTrigger value="ceramics">Фотокерамика</TabsTrigger>
                  <TabsTrigger value="epitaphs">Эпитафии</TabsTrigger>
                  <TabsTrigger value="glass">Фото на стекле</TabsTrigger>
                </TabsList>

                <TabsContent value="ceramics">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Высококачественные керамические портреты с долговечным покрытием</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(0, 3).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Фотокерамика", price: Math.floor(monument.price * 0.2)}} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="epitaphs">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Гравировка памятных надписей и эпитафий золотом и краской</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(1, 4).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Эпитафии", price: Math.floor(monument.price * 0.15)}} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="glass">
                  <div className="mb-6 text-center">
                    <p className="text-lg text-muted-foreground">Элитные портреты на стекле с лазерной гравировкой высокой детализации</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monuments.slice(2, 5).map(monument => (
                      <MonumentCard key={monument.id} monument={{...monument, title: "Фото на стекле", price: Math.floor(monument.price * 0.3)}} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
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
            <h3 className="font-heading text-4xl font-bold mb-4">Галерея наших работ</h3>
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Отзывы о нас
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят наши клиенты о качестве работы и сервисе
            </p>
          </div>

          {/* Простые отзывы для ускорения загрузки */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Анна М.", text: "Очень довольна качеством памятника. Мастера выполнили работу на высоком уровне." },
              { name: "Дмитрий П.", text: "Заказывали семейный комплекс из красного гранита. Результат превзошёл ожидания." },
              { name: "Елена В.", text: "Спасибо за терпение в такой трудный момент. Специалисты очень деликатно всё объяснили." }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-400" />
                  ))}
                </div>
                <h4 className="font-bold text-lg mb-2">{review.name}</h4>
                <p className="text-slate-600 mb-4">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">350+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Рекомендуют нас</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg max-w-md sm:max-w-none mx-auto">
              <div className="text-center sm:text-left">
                <h4 className="font-heading text-lg sm:text-xl font-semibold mb-2">Оставьте свой отзыв</h4>
                <p className="text-muted-foreground text-sm">Поделитесь опытом сотрудничества с нами</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap shrink-0">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Написать отзыв
              </Button>
            </div>
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