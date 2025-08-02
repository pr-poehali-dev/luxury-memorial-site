import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function TroekurovskoyeCemetery() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const monumentCategories = [
    {
      id: 'vertical',
      title: 'Вертикальные памятники',
      description: 'Классические стелы высотой от 80 до 150 см',
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      priceFrom: 25000,
      popular: true,
      features: ['Гранит габбро-диабаз', 'Портрет включен', 'Установка в комплекте']
    },
    {
      id: 'horizontal',
      title: 'Горизонтальные памятники',
      description: 'Элегантные надгробия прямоугольной формы',
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      priceFrom: 35000,
      popular: false,
      features: ['Увеличенная площадь', 'Место для цветника', 'Долговечность']
    },
    {
      id: 'complex',
      title: 'Мемориальные комплексы',
      description: 'Полноценные мемориалы с благоустройством',
      image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
      priceFrom: 85000,
      popular: false,
      features: ['Стела + тумба + цветник', 'Ограда в комплекте', 'Индивидуальный дизайн']
    },
    {
      id: 'exclusive',
      title: 'Эксклюзивные памятники',
      description: 'Уникальные проекты по индивидуальному заказу',
      image: '/img/eb1d44c1-99b8-4397-88bb-fb4436f2d9c7.jpg',
      priceFrom: 150000,
      popular: false,
      features: ['Авторский дизайн', 'Редкие материалы', 'Художественная резьба']
    }
  ];

  const improvementServices = [
    {
      title: 'Благоустройство участка',
      description: 'Полное обустройство могилы',
      image: '/img/e2d37bd6-585d-4c07-8f3c-5fcb8d1b9831.jpg',
      services: [
        'Укладка плитки и брусчатки',
        'Установка оград и заборов',
        'Цветники и вазы для цветов',
        'Скамейки и столы'
      ],
      priceFrom: 15000
    },
    {
      title: 'Художественное оформление',
      description: 'Декоративные элементы и гравировка',
      image: '/img/f6603dc6-7fa6-41ad-a5ab-5dc901738354.jpg',
      services: [
        'Портреты на граните',
        'Гравировка эпитафий',
        'Золочение надписей',
        'Художественная резьба'
      ],
      priceFrom: 5000
    }
  ];

  const cemeteryInfo = {
    address: 'Москва, Троекуровское кладбище, ул. Рассветная, 1',
    workingHours: 'Ежедневно с 9:00 до 17:00',
    area: '74 гектара',
    founded: '1969 год',
    sections: 'более 50 участков',
    features: [
      'Одно из крупнейших кладбищ Москвы',
      'Удобная транспортная доступность',
      'Развитая инфраструктура',
      'Администрация на территории',
      'Парковка для посетителей',
      'Ритуальные магазины рядом'
    ]
  };

  const designProcess = [
    {
      step: 1,
      title: 'Выезд на участок',
      description: 'Специалист выезжает на кладбище для замеров',
      icon: 'MapPin',
      duration: '1 день'
    },
    {
      step: 2,
      title: '3D-макет',
      description: 'Создание детального 3D-проекта памятника',
      icon: 'Monitor',
      duration: '2-3 дня'
    },
    {
      step: 3,
      title: 'Согласование',
      description: 'Утверждение проекта с администрацией кладбища',
      icon: 'FileCheck',
      duration: '1-2 дня'
    },
    {
      step: 4,
      title: 'Изготовление',
      description: 'Производство памятника в мастерской',
      icon: 'Hammer',
      duration: '14-21 день'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <div className="bg-background">
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Троекуровское кладбище
                  </Badge>
                  <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                    Изготовление памятников на Троекуровском кладбище
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Профессиональное изготовление и установка памятников с учетом всех требований 
                    администрации Троекуровского кладбища. Работаем с 2010 года.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="px-8">
                      <Icon name="Phone" className="mr-2" size={20} />
                      Бесплатная консультация
                    </Button>
                    <Button size="lg" variant="outline" className="px-8">
                      <Icon name="MapPin" className="mr-2" size={20} />
                      Выезд на кладбище
                    </Button>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                  <img 
                    src="/img/45084074-cadb-4ec1-9ec4-2cca82071a68.jpg"
                    alt="Троекуровское кладбище"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cemetery Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  О Троекуровском кладбище
                </h2>
                <p className="text-lg text-muted-foreground">
                  Важная информация для заказа памятника
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="font-semibold mb-2">Адрес</h3>
                    <p className="text-sm text-muted-foreground">{cemeteryInfo.address}</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Icon name="Clock" className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="font-semibold mb-2">Режим работы</h3>
                    <p className="text-sm text-muted-foreground">{cemeteryInfo.workingHours}</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Icon name="Calendar" className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="font-semibold mb-2">Основано</h3>
                    <p className="text-sm text-muted-foreground">{cemeteryInfo.founded}</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Icon name="Maximize" className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="font-semibold mb-2">Площадь</h3>
                    <p className="text-sm text-muted-foreground">{cemeteryInfo.area}</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Особенности кладбища</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cemeteryInfo.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Monument Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Каталог памятников
                </h2>
                <p className="text-lg text-muted-foreground">
                  Все виды памятников для Троекуровского кладбища
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {monumentCategories.map((category) => (
                  <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-heading text-xl font-semibold">{category.title}</h3>
                        {category.popular && (
                          <Badge className="bg-orange-500">Популярный</Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        {category.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Icon name="Check" className="text-primary" size={14} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-muted-foreground">от </span>
                          <span className="text-2xl font-bold text-primary">
                            {category.priceFrom.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button asChild>
                          <Link to="/catalog">
                            Смотреть каталог
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

        {/* Design Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Процесс разработки макета
                </h2>
                <p className="text-lg text-muted-foreground">
                  Как мы создаем индивидуальные проекты памятников
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {designProcess.map((process) => (
                  <Card key={process.step} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={process.icon as any} size={28} />
                      </div>
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                        {process.step}
                      </div>
                      <h3 className="font-semibold mb-2">{process.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{process.description}</p>
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

        {/* Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Услуги благоустройства
                </h2>
                <p className="text-lg text-muted-foreground">
                  Комплексное обустройство участка на кладбище
                </p>
              </div>

              <Tabs defaultValue="improvement" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
                  <TabsTrigger value="improvement">Благоустройство</TabsTrigger>
                  <TabsTrigger value="decoration">Оформление</TabsTrigger>
                </TabsList>
                
                <TabsContent value="improvement">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-heading text-2xl font-bold mb-4">
                        {improvementServices[0].title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {improvementServices[0].description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {improvementServices[0].services.map((service, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Icon name="Check" className="text-primary" size={16} />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">от </span>
                          <span className="text-2xl font-bold text-primary">
                            {improvementServices[0].priceFrom.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button>Заказать расчет</Button>
                      </div>
                    </div>
                    <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                      <img 
                        src={improvementServices[0].image}
                        alt={improvementServices[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="decoration">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-heading text-2xl font-bold mb-4">
                        {improvementServices[1].title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        {improvementServices[1].description}
                      </p>
                      <div className="space-y-3 mb-6">
                        {improvementServices[1].services.map((service, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Icon name="Check" className="text-primary" size={16} />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">от </span>
                          <span className="text-2xl font-bold text-primary">
                            {improvementServices[1].priceFrom.toLocaleString()} ₽
                          </span>
                        </div>
                        <Button>Заказать расчет</Button>
                      </div>
                    </div>
                    <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                      <img 
                        src={improvementServices[1].image}
                        alt={improvementServices[1].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
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
                    Заказать памятник на Троекуровское кладбище
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Оставьте заявку и наш специалист свяжется с вами для консультации. 
                    Бесплатный выезд на кладбище для замеров.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon name="Phone" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">+7 (495) 123-45-67</div>
                        <div className="text-sm text-muted-foreground">Звоните с 9:00 до 18:00</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">Бесплатный выезд</div>
                        <div className="text-sm text-muted-foreground">На территорию кладбища для замеров</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" className="text-primary" size={20} />
                      <div>
                        <div className="font-semibold">Срок изготовления</div>
                        <div className="text-sm text-muted-foreground">14-21 день в зависимости от сложности</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Получить консультацию</CardTitle>
                    <CardDescription>
                      Заполните форму и мы перезвоним в течение 15 минут
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
                          value={formData.service}
                          onChange={(e) => handleInputChange('service', e.target.value)}
                        >
                          <option value="">Выберите услугу</option>
                          <option value="monument">Изготовление памятника</option>
                          <option value="improvement">Благоустройство участка</option>
                          <option value="decoration">Художественное оформление</option>
                          <option value="consultation">Консультация</option>
                        </select>
                      </div>
                      
                      <div>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Дополнительная информация (размеры участка, пожелания...)"
                          rows={3}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" className="mr-2" size={18} />
                        Отправить заявку
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая "Отправить заявку", вы соглашаетесь с обработкой персональных данных
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
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Почему выбирают нас
                </h2>
                <p className="text-lg text-muted-foreground">
                  13 лет работаем с Троекуровским кладбищем
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: 'Award',
                    title: '13 лет опыта',
                    description: 'Работаем с Троекуровским кладбищем с 2010 года'
                  },
                  {
                    icon: 'Shield',
                    title: 'Гарантия 10 лет',
                    description: 'На все виды работ и материалы'
                  },
                  {
                    icon: 'Truck',
                    title: 'Бесплатная доставка',
                    description: 'И установка по всей Москве'
                  },
                  {
                    icon: 'Users',
                    title: 'Собственная бригада',
                    description: 'Опытные мастера-установщики'
                  },
                  {
                    icon: 'Clock',
                    title: 'Срок 14-21 день',
                    description: 'Гарантированное соблюдение сроков'
                  },
                  {
                    icon: 'Star',
                    title: '500+ отзывов',
                    description: 'Довольных клиентов на Яндекс.Картах'
                  }
                ].map((advantage, index) => (
                  <Card key={index} className="text-center">
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

      </div>
    </Layout>
  );
}