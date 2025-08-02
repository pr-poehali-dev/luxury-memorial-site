import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {

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
    <div className="min-h-screen bg-background">
      <Header />

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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Создать памятник
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть процесс
                </Button>
              </div>
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
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="granite">Гранит</TabsTrigger>
              <TabsTrigger value="marble">Мрамор</TabsTrigger>
              <TabsTrigger value="bronze">Бронза</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monuments.map(monument => (
                  <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={monument.image}
                        alt={monument.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="aspect-square bg-muted rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={monuments[item % 3]?.image}
                  alt={`Галерея ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

          {/* Masonry-style Reviews Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mb-12">
            {[
              {
                name: "Анна Михайловна",
                role: "Москва • Семейный памятник",
                rating: 5,
                text: "Очень довольна качеством памятника. Мастера выполнили работу на высоком уровне, портрет получился очень похожим. Установили быстро и аккуратно. Рекомендую!",
                avatar: "AM",
                date: "2 недели назад",
                color: "from-rose-500 to-pink-600",
                bgPattern: "bg-gradient-to-br from-rose-50 to-pink-50",
                service: "Портрет + гравировка"
              },
              {
                name: "Дмитрий Петров",
                role: "СПб • Красный гранит", 
                rating: 5,
                text: "Заказывали семейный комплекс из красного гранита. Результат превзошёл все ожидания. Профессиональный подход, качественные материалы, разумные цены. Очень довольны сотрудничеством!",
                avatar: "ДП",
                date: "1 месяц назад",
                color: "from-blue-500 to-indigo-600",
                bgPattern: "bg-gradient-to-br from-blue-50 to-indigo-50",
                service: "Семейный комплекс"
              },
              {
                name: "Елена Васильевна",
                role: "Казань • Мраморный памятник",
                rating: 5,
                text: "Спасибо за терпение и понимание в такой трудный момент. СПаціалісты очень деликатно всё объяснили.",
                avatar: "ЕВ",
                date: "3 недели назад",
                color: "from-emerald-500 to-teal-600",
                bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50",
                service: "Консультация + установка"
              },
              {
                name: "Александр К.",
                role: "Екатеринбург • Вертикальный",
                rating: 5,
                text: "Отличное соотношение цена-качество. Гранитный памятник простоял уже 2 года, выглядит как новый. Гравировка чёткая, полировка держится отлично. Спасибо за качественную работу и честные цены!",
                avatar: "АК",
                date: "1 неделю назад",
                color: "from-amber-500 to-orange-600",
                bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50",
                service: "Гранит + полировка"
              },
              {
                name: "Мария Сергеевна",
                role: "Нижний Новгород • Ручная работа",
                rating: 5,
                text: "Заказывала мраморный памятник с ручной гравировкой. Работа художника просто потрясающая! Портрет получился живым, будто фотография на камне.",
                avatar: "МС",
                date: "2 месяца назад",
                color: "from-purple-500 to-violet-600",
                bgPattern: "bg-gradient-to-br from-purple-50 to-violet-50",
                service: "Ручная гравировка"
              },
              {
                name: "Игорь Николаевич",
                role: "Самара • Бронзовые элементы",
                rating: 5,
                text: "Профессиональная команда! От консультации до установки всё прошло гладко. Особенно ценю индивидуальный подход и внимание к деталям. Результат превосходный.",
                avatar: "ИН",
                date: "3 дня назад",
                color: "from-cyan-500 to-blue-600",
                bgPattern: "bg-gradient-to-br from-cyan-50 to-blue-50",
                service: "Индивидуальный проект"
              }
            ].map((review, index) => {
              const isLarge = index === 1 || index === 3;
              return (
                <div 
                  key={index} 
                  className={`break-inside-avoid mb-8 group cursor-pointer ${isLarge ? 'transform hover:scale-105' : 'hover:scale-102'} transition-all duration-700`}
                >
                  <div className={`relative ${review.bgPattern} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/60`}>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <div className={`w-full h-full bg-gradient-to-br ${review.color} rounded-full blur-3xl`}></div>
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 opacity-5">
                      <Icon name="Quote" size={96} className="text-current" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${review.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-800 text-lg">{review.name}</h4>
                          <p className="text-sm text-slate-600 mb-2">{review.role}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-xs text-slate-500">•</span>
                            <span className="text-xs text-slate-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${review.color} text-white text-xs font-medium mb-4 shadow-sm`}>
                        <Icon name="Award" size={12} />
                        {review.service}
                      </div>
                      
                      {/* Review Text */}
                      <blockquote className={`text-slate-700 leading-relaxed mb-6 ${isLarge ? 'text-lg' : 'text-base'} relative`}>
                        <Icon name="Quote" size={20} className="text-slate-300 absolute -top-2 -left-1" />
                        <span className="pl-6">{review.text}</span>
                      </blockquote>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-green-500" />
                          <span className="text-xs text-green-600 font-medium">Подтверждённый отзыв</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Icon name="ThumbsUp" size={14} />
                          <span className="text-xs">{Math.floor(Math.random() * 20) + 5}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
                <p className="mb-4">Цена памятника формируется из нескольких факторов:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Box" size={20} className="text-blue-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Размер и форма</h4>
                      <p className="text-sm">Высота, ширина, толщина стелы и дополнительных элементов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Gem" size={20} className="text-purple-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Материал</h4>
                      <p className="text-sm">Тип гранита, мрамора или бронзовые элементы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Palette" size={20} className="text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Оформление</h4>
                      <p className="text-sm">Портреты, надписи, художественные элементы, золочение</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Package" size={20} className="text-orange-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground">Комплектация</h4>
                      <p className="text-sm">Тумба, цветник, дополнительные элементы</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Точную стоимость рассчитаем после консультации и выбора всех параметров
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  Какая гарантия предоставляется на памятники?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Мы предоставляем комплексную гарантию на все виды работ:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">10 лет гарантии</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Качество материалов</li>
                      <li>• Прочность установки</li>
                      <li>• Стойкость гравировки</li>
                    </ul>
                  </div>
                  <div className="border border-blue-200 bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Пожизненное обслуживание</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Бесплатные консультации</li>
                      <li>• Помощь в уходе</li>
                      <li>• Мелкий ремонт</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Что не входит в гарантию:</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Механические повреждения (вандализм, удары)</li>
                    <li>Естественное загрязнение от внешних факторов</li>
                    <li>Изменения, внесённые третьими лицами</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="CreditCard" size={20} className="text-primary" />
                  Как происходит оплата заказа?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Мы предлагаем удобную схему оплаты в два этапа:</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Предоплата 50%</h4>
                      <p className="text-sm mb-2">После утверждения проекта и подписания договора</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Наличными</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Банковской картой</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Безналичный расчёт</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Доплата 50%</h4>
                      <p className="text-sm mb-2">При получении готового памятника перед установкой</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Наличными</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Банковской картой</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <Icon name="FileText" size={16} className="inline mr-2" />
                    Все платежи оформляются документально с предоставлением чеков и договора
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/5 rounded-2xl p-6">
              <div className="text-center sm:text-left">
                <h4 className="font-heading text-xl font-semibold mb-2">Остались вопросы?</h4>
                <p className="text-muted-foreground">Получите персональную консультацию нашего специалиста</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Icon name="Phone" size={16} className="mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
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

      <Footer />
    </div>
  );
}