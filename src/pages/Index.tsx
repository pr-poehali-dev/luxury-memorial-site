import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
                Памятники <br />
                <span className="text-primary">премиум класса</span>
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
            
            {/* 3D Model Request Form */}
            <div className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-primary/10">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">3D макет памятника</h3>
                  <p className="text-muted-foreground">
                    Получите реалистичную визуализацию перед изготовлением
                  </p>
                </div>
                
                {/* Large 3D Visualization Image */}
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/2f6194d4-96fc-4373-a105-199c5a4748d6.png"
                    alt="3D макет памятника - мемориальный комплекс"
                    className="w-full max-h-96 sm:max-h-[500px] lg:max-h-[600px] rounded-2xl shadow-2xl object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    <Icon name="Cube" size={16} className="inline mr-2" />
                    3D визуализация
                  </div>
                  <div className="absolute bottom-6 right-6 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Реальный размер
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Benefits */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg mb-4">Преимущества 3D макета:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Eye" size={20} className="text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium">Точная визуализация</div>
                          <div className="text-sm text-muted-foreground">Увидите результат до изготовления</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="RotateCcw" size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">Внесение изменений</div>
                          <div className="text-sm text-muted-foreground">Корректировки на этапе проекта</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Clock" size={20} className="text-purple-600" />
                        </div>
                        <div>
                          <div className="font-medium">Быстрая готовность</div>
                          <div className="text-sm text-muted-foreground">Готовность за 2-3 рабочих дня</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon name="Gift" size={20} className="text-orange-600" />
                        </div>
                        <div>
                          <div className="font-medium">Бесплатно</div>
                          <div className="text-sm text-muted-foreground">При заказе памятника</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simplified Form */}
                  <div className="space-y-6">
                    <div className="bg-muted/30 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-4 text-center">Заказать 3D макет</h4>
                      <form className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                          <input
                            type="text"
                            placeholder="Введите ваше имя"
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Телефон *</label>
                          <input
                            type="tel"
                            placeholder="+7 (999) 123-45-67"
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            required
                          />
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-medium">
                          <Icon name="Cube" size={18} className="mr-2" />
                          Заказать 3D макет бесплатно
                        </Button>

                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-200">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <Icon name="Gift" size={16} className="text-green-600" />
                              <span className="font-semibold text-green-800">Макет бесплатно</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              При заказе памятника • Готовность: 2-3 дня
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
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
                    <div className="aspect-[4/3] overflow-hidden">
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

      {/* Main Services CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-heading text-4xl font-bold mb-4">Заказать услуги</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящую услугу и получите индивидуальное предложение с расчётом стоимости
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Заказать изготовление памятника */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-900 to-slate-700 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10 pb-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon name="Hammer" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl text-center mb-2">
                  Заказать изготовление памятника
                </CardTitle>
                <CardDescription className="text-gray-300 text-center text-sm">
                  Индивидуальное изготовление из премиальных материалов
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-2">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Гранит, мрамор, бронза</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Гравировка портрета</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-green-400" />
                    <span>Гарантия 10 лет</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-slate-900 hover:bg-gray-100 font-medium">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <p className="text-center text-xs text-gray-400 mt-2">от 45 000 ₽</p>
              </CardContent>
            </Card>

            {/* Мемориальные комплексы */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10 pb-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl text-center mb-2">
                  Мемориальные комплексы
                </CardTitle>
                <CardDescription className="text-emerald-100 text-center text-sm">
                  Комплексное оформление семейных захоронений
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-2">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span>Семейные памятники</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span>Склепы и усыпальницы</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-emerald-300" />
                    <span>Элитные комплексы</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-emerald-800 hover:bg-gray-100 font-medium">
                  <Icon name="Users" size={16} className="mr-2" />
                  Заказать проект
                </Button>
                <p className="text-center text-xs text-emerald-200 mt-2">от 150 000 ₽</p>
              </CardContent>
            </Card>

            {/* Заказать благоустройство */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10 pb-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon name="TreePine" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl text-center mb-2">
                  Заказать благоустройство
                </CardTitle>
                <CardDescription className="text-orange-100 text-center text-sm">
                  Комплексное обустройство мемориального участка
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-2">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-orange-200" />
                    <span>Облицовка могил</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-orange-200" />
                    <span>Цветники и вазы</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-orange-200" />
                    <span>Дорожки и ступени</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-orange-700 hover:bg-gray-100 font-medium">
                  <Icon name="Shovel" size={16} className="mr-2" />
                  Получить смету
                </Button>
                <p className="text-center text-xs text-orange-200 mt-2">от 25 000 ₽</p>
              </CardContent>
            </Card>

            {/* Заказать оформление памятника */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-600 to-indigo-700 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10 pb-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon name="PenTool" size={32} className="text-white" />
                </div>
                <CardTitle className="font-heading text-xl text-center mb-2">
                  Заказать оформление памятника
                </CardTitle>
                <CardDescription className="text-purple-100 text-center text-sm">
                  Художественная гравировка портретов и надписей
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 pt-2">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-purple-200" />
                    <span>Портреты на камне</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-purple-200" />
                    <span>Художественная резьба</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-purple-200" />
                    <span>Золочение букв</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-purple-700 hover:bg-gray-100 font-medium">
                  <Icon name="Palette" size={16} className="mr-2" />
                  Заказать эскиз
                </Button>
                <p className="text-center text-xs text-purple-200 mt-2">от 15 000 ₽</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
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
              <div key={item} className="aspect-[4/3] bg-muted rounded-xl overflow-hidden group cursor-pointer">
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
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div>
                <h4 className="font-heading text-xl font-semibold mb-2">Оставьте свой отзыв</h4>
                <p className="text-muted-foreground text-sm">Поделитесь опытом сотрудничества с нами</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Написать отзыв
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