import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function BalashihaMonuments() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cemetery: '',
    service: '',
    message: ''
  });

  const monumentTypes = [
    {
      id: 'vertical',
      title: 'Вертикальные памятники',
      description: 'Классические стелы из гранита и мрамора',
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      priceFrom: 18000,
      popular: true,
      sizes: ['80x40x8 см', '100x50x8 см', '120x60x8 см'],
      materials: ['Габбро-диабаз', 'Карельский гранит', 'Мрамор']
    },
    {
      id: 'horizontal',
      title: 'Горизонтальные памятники',
      description: 'Надгробные плиты и горизонтальные памятники',
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      priceFrom: 28000,
      popular: false,
      sizes: ['100x50x8 см', '120x60x8 см', '150x70x8 см'],
      materials: ['Гранит черный', 'Гранит красный', 'Гранит серый']
    },
    {
      id: 'double',
      title: 'Двойные памятники',
      description: 'Памятники для двух человек',
      image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
      priceFrom: 65000,
      popular: true,
      sizes: ['120x60x8 см', '140x70x8 см', '160x80x8 см'],
      materials: ['Габбро-диабаз', 'Гранит Аврора', 'Гранит Возрождение']
    },
    {
      id: 'children',
      title: 'Детские памятники',
      description: 'Особые памятники для детей',
      image: '/img/eb1d44c1-99b8-4397-88bb-fb4436f2d9c7.jpg',
      priceFrom: 22000,
      popular: false,
      sizes: ['60x40x6 см', '80x50x8 см', '100x60x8 см'],
      materials: ['Белый мрамор', 'Розовый гранит', 'Голубой гранит']
    },
    {
      id: 'complex',
      title: 'Мемориальные комплексы',
      description: 'Полные комплексы с благоустройством',
      image: '/img/9b9a4a6a-509a-455c-b99f-4938bb1485e5.jpg',
      priceFrom: 95000,
      popular: false,
      sizes: ['Индивидуально', 'По проекту', 'Эксклюзив'],
      materials: ['Элитный гранит', 'Комбинированные', 'Натуральный камень']
    },
    {
      id: 'exclusive',
      title: 'Эксклюзивные памятники',
      description: 'Авторские работы и уникальные проекты',
      image: '/img/f6603dc6-7fa6-41ad-a5ab-5dc901738354.jpg',
      priceFrom: 180000,
      popular: false,
      sizes: ['По дизайну', 'Нестандартные', 'Индивидуальные'],
      materials: ['Редкие граниты', 'Импортные материалы', 'Художественная резьба']
    }
  ];

  const balashihaCemeteries = [
    {
      name: 'Балашихинское кладбище',
      address: 'г. Балашиха, ул. Кольцевая',
      description: 'Центральное кладбище города',
      area: '45 гектаров',
      founded: '1965',
      services: ['Памятники', 'Благоустройство', 'Ритуальные услуги']
    },
    {
      name: 'Кладбище Железнодорожный',
      address: 'г. Балашиха, мкр. Железнодорожный',
      description: 'Современное благоустроенное кладбище',
      area: '32 гектара',
      founded: '1978',
      services: ['Памятники', 'Колумбарий', 'Парковка']
    },
    {
      name: 'Никольско-Архангельское кладбище',
      address: 'пос. Никольско-Архангельское',
      description: 'Тихое кладбище в живописном месте',
      area: '28 гектаров',
      founded: '1982',
      services: ['Памятники', 'Ограды', 'Цветники']
    },
    {
      name: 'Кладбище Салтыковка',
      address: 'мкр. Салтыковка, ул. Парковая',
      description: 'Благоустроенная территория',
      area: '20 гектаров',
      founded: '1990',
      services: ['Памятники', 'Благоустройство', 'Уход за могилами']
    }
  ];

  const improvementServices = [
    {
      category: 'Основные работы',
      services: [
        { name: 'Укладка тротуарной плитки', price: 1200, unit: 'м²' },
        { name: 'Установка гранитной плитки', price: 2500, unit: 'м²' },
        { name: 'Засыпка щебнем', price: 800, unit: 'м²' },
        { name: 'Установка бордюров', price: 600, unit: 'пог.м' }
      ]
    },
    {
      category: 'Ограждения',
      services: [
        { name: 'Металлические ограды', price: 1800, unit: 'пог.м' },
        { name: 'Кованые ограды', price: 3500, unit: 'пог.м' },
        { name: 'Гранитные цоколи', price: 4200, unit: 'пог.м' },
        { name: 'Столбики и цепи', price: 1200, unit: 'пог.м' }
      ]
    },
    {
      category: 'Декор и аксессуары',
      services: [
        { name: 'Цветники гранитные', price: 8500, unit: 'шт' },
        { name: 'Вазы для цветов', price: 4200, unit: 'шт' },
        { name: 'Лампады и свечи', price: 2800, unit: 'шт' },
        { name: 'Скамейки и столы', price: 12000, unit: 'комплект' }
      ]
    }
  ];

  const workProcess = [
    {
      step: 1,
      title: 'Консультация',
      description: 'Бесплатная консультация по телефону или в офисе',
      icon: 'Phone',
      duration: 'сразу',
      details: ['Обсуждение требований', 'Выбор материалов', 'Предварительный расчет']
    },
    {
      step: 2,
      title: 'Выезд на место',
      description: 'Специалист выезжает на кладбище для замеров',
      icon: 'MapPin',
      duration: '1 день',
      details: ['Замеры участка', 'Оценка грунта', 'Фото для проекта']
    },
    {
      step: 3,
      title: 'Создание проекта',
      description: 'Разработка 3D-макета и технического проекта',
      icon: 'Monitor',
      duration: '2-3 дня',
      details: ['3D-визуализация', 'Подбор материалов', 'Детальная смета']
    },
    {
      step: 4,
      title: 'Согласование',
      description: 'Утверждение проекта и подписание договора',
      icon: 'FileCheck',
      duration: '1 день',
      details: ['Корректировки проекта', 'Подписание договора', 'Внесение предоплаты']
    },
    {
      step: 5,
      title: 'Изготовление',
      description: 'Производство памятника в мастерской',
      icon: 'Hammer',
      duration: '10-20 дней',
      details: ['Обработка камня', 'Гравировка портрета', 'Контроль качества']
    },
    {
      step: 6,
      title: 'Установка',
      description: 'Доставка и профессиональная установка',
      icon: 'Truck',
      duration: '1 день',
      details: ['Доставка на кладбище', 'Установка фундамента', 'Монтаж памятника']
    }
  ];

  const advantages = [
    {
      icon: 'MapPin',
      title: 'Работаем в Балашихе',
      description: 'Знаем все кладбища города и их требования'
    },
    {
      icon: 'Truck',
      title: 'Доставка включена',
      description: 'Бесплатная доставка по Балашихе и району'
    },
    {
      icon: 'Clock',
      title: 'Быстрые сроки',
      description: 'Изготовление за 10-20 дней'
    },
    {
      icon: 'Shield',
      title: 'Гарантия 10 лет',
      description: 'На все виды работ и материалы'
    },
    {
      icon: 'Users',
      title: 'Опытная бригада',
      description: 'Профессиональные мастера-установщики'
    },
    {
      icon: 'Star',
      title: 'Более 300 работ',
      description: 'Выполнено в Балашихе за последние 3 года'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Наш специалист свяжется с вами в течение 15 минут.');
    setFormData({ name: '', phone: '', email: '', cemetery: '', service: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Балашиха и Балашихинский район
                  </Badge>
                  <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                    Памятники на могилу в Балашихе
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Изготовление и установка памятников в Балашихе. Работаем со всеми 
                    кладбищами города. Бесплатный выезд для замеров. Гарантия 10 лет.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button size="lg" className="px-8">
                      <Icon name="Phone" className="mr-2" size={20} />
                      Заказать звонок
                    </Button>
                    <Button size="lg" variant="outline" className="px-8">
                      <Icon name="Calculator" className="mr-2" size={20} />
                      Рассчитать стоимость
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>Работаем по всей Балашихе</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Срок 10-20 дней</span>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                  <img 
                    src="/img/9111b21b-5c7b-4972-8b93-b5d287b07220.jpg"
                    alt="Памятники в Балашихе"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monument Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Каталог памятников для Балашихи
                </h2>
                <p className="text-lg text-muted-foreground">
                  Все виды памятников с доставкой и установкой
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monumentTypes.map((monument) => (
                  <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <img 
                        src={monument.image}
                        alt={monument.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-lg font-semibold">{monument.title}</h3>
                        {monument.popular && (
                          <Badge className="bg-orange-500 text-xs">Популярный</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{monument.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="text-xs font-medium text-muted-foreground mb-1">Размеры:</h4>
                          <div className="flex flex-wrap gap-1">
                            {monument.sizes.map((size, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {size}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-medium text-muted-foreground mb-1">Материалы:</h4>
                          <div className="flex flex-wrap gap-1">
                            {monument.materials.slice(0, 2).map((material, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {material}
                              </Badge>
                            ))}
                            {monument.materials.length > 2 && (
                              <Badge variant="secondary" className="text-xs">
                                +{monument.materials.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground">от </span>
                          <span className="text-xl font-bold text-primary">
                            {monument.priceFrom.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button size="sm" asChild>
                          <Link to="/catalog">
                            Заказать
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cemeteries */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Кладбища Балашихи
                </h2>
                <p className="text-lg text-muted-foreground">
                  Работаем со всеми кладбищами города
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {balashihaCemeteries.map((cemetery, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{cemetery.name}</CardTitle>
                          <CardDescription className="mt-1">{cemetery.address}</CardDescription>
                        </div>
                        <Icon name="MapPin" className="text-primary mt-1" size={20} />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{cemetery.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-xs font-medium text-muted-foreground">Площадь</div>
                          <div className="text-sm font-semibold">{cemetery.area}</div>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-muted-foreground">Основано</div>
                          <div className="text-sm font-semibold">{cemetery.founded}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {cemetery.services.map((service, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Как мы работаем
                </h2>
                <p className="text-lg text-muted-foreground">
                  Полный цикл от консультации до установки
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workProcess.map((process) => (
                  <Card key={process.step} className="relative hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                          <Icon name={process.icon as any} size={24} />
                        </div>
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                          {process.step}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mb-2">{process.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{process.description}</p>
                      
                      <div className="space-y-1 mb-4">
                        {process.details.map((detail, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Icon name="Check" className="text-primary" size={12} />
                            <span className="text-xs text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Badge variant="outline" className="text-xs">
                        {process.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Improvement Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Услуги благоустройства
                </h2>
                <p className="text-lg text-muted-foreground">
                  Полное обустройство участка на кладбище
                </p>
              </div>

              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8">
                  <TabsTrigger value="basic">Основные</TabsTrigger>
                  <TabsTrigger value="fencing">Ограды</TabsTrigger>
                  <TabsTrigger value="decor">Декор</TabsTrigger>
                </TabsList>
                
                {improvementServices.map((category, categoryIndex) => (
                  <TabsContent key={categoryIndex} value={categoryIndex === 0 ? 'basic' : categoryIndex === 1 ? 'fencing' : 'decor'}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.services.map((service, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                          <CardContent className="pt-6">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{service.name}</h3>
                              <Icon name="Hammer" className="text-primary" size={16} />
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-primary">
                                {service.price.toLocaleString()} ₽
                              </span>
                              <span className="text-sm text-muted-foreground">
                                за {service.unit}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-6">
                    Заказать памятник в Балашихе
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Оставьте заявку и получите бесплатную консультацию. 
                    Наш специалист выедет на кладбище для замеров в удобное время.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">+7 (495) 123-45-67</div>
                        <div className="text-sm text-muted-foreground">Работаем с 8:00 до 20:00</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">Выезд в любой район</div>
                        <div className="text-sm text-muted-foreground">Балашиха, Железнодорожный, Реутов</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Truck" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">Доставка бесплатно</div>
                        <div className="text-sm text-muted-foreground">По Балашихе и ближайшим районам</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Shield" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">Гарантия 10 лет</div>
                        <div className="text-sm text-muted-foreground">На все материалы и работы</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Получить расчет стоимости</CardTitle>
                    <CardDescription>
                      Заполните форму для получения персонального предложения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Ваше имя *"
                          required
                        />
                      </div>
                      
                      <div>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Телефон *"
                          type="tel"
                          required
                        />
                      </div>
                      
                      <div>
                        <Input
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                      
                      <div>
                        <select 
                          className="w-full px-3 py-2 border border-input bg-background rounded-md"
                          value={formData.cemetery}
                          onChange={(e) => handleInputChange('cemetery', e.target.value)}
                        >
                          <option value="">Выберите кладбище</option>
                          {balashihaCemeteries.map((cemetery, index) => (
                            <option key={index} value={cemetery.name}>{cemetery.name}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <select 
                          className="w-full px-3 py-2 border border-input bg-background rounded-md"
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                        >
                          <option value="">Выберите услугу</option>
                          <option value="vertical">Вертикальный памятник</option>
                          <option value="horizontal">Горизонтальный памятник</option>
                          <option value="double">Двойной памятник</option>
                          <option value="children">Детский памятник</option>
                          <option value="complex">Мемориальный комплекс</option>
                          <option value="improvement">Благоустройство</option>
                        </select>
                      </div>
                      
                      <div>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Дополнительная информация (размеры участка, материал, пожелания...)"
                          rows={3}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" className="mr-2" size={18} />
                        Получить расчет
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая "Получить расчет", вы соглашаетесь с обработкой персональных данных
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Почему выбирают нас в Балашихе
                </h2>
                <p className="text-lg text-muted-foreground">
                  3 года успешной работы в городе
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={advantage.icon as any} size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}