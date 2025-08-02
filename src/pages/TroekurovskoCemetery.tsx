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
import { useApp } from '@/contexts/AppContext';

export default function TroekurovskoCemetery() {
  const { addToCart, addToFavorites, isInFavorites } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    monument_type: '',
    message: ''
  });

  const cemeteryInfo = {
    name: 'Троекуровское кладбище',
    location: 'Западный административный округ Москвы',
    founded: '1957 год',
    area: '97 гектаров',
    status: 'Действующее городское кладбище',
    access: 'Метро Сокольники, автобус №144',
    workingHours: 'Ежедневно с 9:00 до 17:00'
  };

  const monuments = [
    {
      id: 101,
      title: 'Классический вертикальный для Троекуровского',
      subtitle: 'Габбро-диабаз, установка включена',
      price: 48000,
      originalPrice: 55000,
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      category: 'vertical',
      material: 'Гранит габбро-диабаз',
      dimensions: '100x50x8 см',
      isPopular: true,
      features: ['Соответствует требованиям кладбища', 'Профессиональная установка', 'Гравировка портрета']
    },
    {
      id: 102,
      title: 'Горизонтальный комплекс Троекуровский',
      subtitle: 'С цветником и оградой',
      price: 85000,
      originalPrice: 95000,
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      category: 'horizontal',
      material: 'Гранит красный',
      dimensions: '120x80x15 см',
      isNew: true,
      features: ['Полный комплекс', 'Цветник входит в стоимость', 'Ограда и стол']
    },
    {
      id: 103,
      title: 'Семейный мемориальный комплекс',
      subtitle: 'Для двух захоронений',
      price: 125000,
      image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
      category: 'complex',
      material: 'Гранит серый',
      dimensions: '150x100x20 см',
      isPopular: true,
      features: ['Для семейного захоронения', 'Два портрета', 'Художественное оформление']
    },
    {
      id: 104,
      title: 'Элитный памятник с барельефом',
      subtitle: 'Эксклюзивная работа мастеров',
      price: 180000,
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      category: 'vertical',
      material: 'Гранит черный полированный',
      dimensions: '120x60x10 см',
      features: ['Ручная резьба', 'Барельеф по фото', 'Премиум материалы']
    }
  ];

  const services = [
    {
      icon: 'Palette',
      title: 'Разработка макета',
      description: 'Создаем 3D-визуализацию памятника с учетом особенностей Троекуровского кладбища',
      price: 'Бесплатно',
      features: ['3D-моделирование', 'Согласование дизайна', 'Неограниченные правки']
    },
    {
      icon: 'Hammer',
      title: 'Изготовление памятника',
      description: 'Работаем только с качественным гранитом, соблюдаем все требования кладбища',
      price: 'От 35 000 ₽',
      features: ['Карельский гранит', 'Ручная полировка', 'Контроль качества']
    },
    {
      icon: 'Truck',
      title: 'Доставка и установка',
      description: 'Доставляем и устанавливаем памятники на Троекуровском кладбище под ключ',
      price: 'От 8 000 ₽',
      features: ['Доставка в срок', 'Профессиональная установка', 'Уборка территории']
    },
    {
      icon: 'FileText',
      title: 'Документооборот',
      description: 'Помогаем с оформлением всех необходимых документов и разрешений',
      price: 'От 3 000 ₽',
      features: ['Разрешение администрации', 'Схема участка', 'Согласование проекта']
    }
  ];

  const requirements = [
    {
      category: 'Размеры памятников',
      rules: [
        'Максимальная высота вертикального памятника — 120 см',
        'Ширина стелы не должна превышать 80 см',
        'Толщина плиты — от 6 до 12 см',
        'Цоколь обязателен для вертикальных памятников'
      ]
    },
    {
      category: 'Материалы',
      rules: [
        'Разрешены: гранит, базальт, диабаз',
        'Запрещены: мрамор, искусственный камень',
        'Обязательная полировка лицевой поверхности',
        'Цвет камня — любой натуральный'
      ]
    },
    {
      category: 'Установка',
      rules: [
        'Установка только на бетонное основание',
        'Обязательно согласование с администрацией',
        'Установка в рабочие дни с 9:00 до 16:00',
        'Уборка территории после работ'
      ]
    },
    {
      category: 'Документы',
      rules: [
        'Справка о захоронении',
        'Паспорт заказчика',
        'Эскиз памятника для согласования',
        'Договор на изготовление и установку'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Наш специалист по Троекуровскому кладбищу свяжется с вами в течение часа.');
    setFormData({ name: '', phone: '', email: '', monument_type: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddToCart = (monument: any) => {
    addToCart({
      id: monument.id,
      title: monument.title,
      price: monument.price,
      image: monument.image,
      category: monument.category,
      quantity: 1,
      selectedMaterial: monument.material
    });
  };

  return (
    <Layout>
      <div className="bg-background">
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h2v4h4v2h-4v4h-2V6h-4V4h4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0h2v4h4v2H8v4H6V6H2V4h4z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2">
                Специализация: Троекуровское кладбище
              </Badge>
              
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Памятники на Троекуровском кладбище
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Изготавливаем и устанавливаем памятники на Троекуровском кладбище более 15 лет. 
                Знаем все требования администрации, работаем быстро и качественно.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Установленных памятников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">7</div>
                  <div className="text-sm text-muted-foreground">Дней средний срок</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8 py-3">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3">
                  <Icon name="MapPin" className="mr-2" size={20} />
                  Схема проезда
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cemetery Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  О Троекуровском кладбище
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Одно из старейших и наиболее престижных кладбищ Москвы
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Основано</div>
                          <div className="font-semibold">{cemeteryInfo.founded}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Площадь</div>
                          <div className="font-semibold">{cemeteryInfo.area}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Режим работы</div>
                          <div className="font-semibold">{cemeteryInfo.workingHours}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Проезд</div>
                          <div className="font-semibold">{cemeteryInfo.access}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed">
                      Троекуровское кладбище — одно из крупнейших кладбищ Москвы, расположенное в Западном 
                      административном округе. Здесь покоятся многие известные деятели культуры, науки и искусства. 
                      Кладбище известно своими строгими требованиями к оформлению захоронений и высокими стандартами 
                      благоустройства территории.
                    </p>
                  </div>
                </div>

                <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                  <img 
                    src="/img/2ca07e2a-3aa0-4c4a-bb13-ef66b036081d.jpg"
                    alt="Троекуровское кладбище"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Наши услуги
                </h2>
                <p className="text-lg text-muted-foreground">
                  Полный комплекс услуг по изготовлению и установке памятников
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <Card key={service.title} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={service.icon as any} size={28} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                      <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                      <ul className="text-xs space-y-1 text-left">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Icon name="Check" className="text-primary mt-0.5" size={12} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Monument Catalog */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Каталог памятников для Троекуровского кладбища
                </h2>
                <p className="text-lg text-muted-foreground">
                  Все памятники соответствуют требованиям администрации кладбища
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {monuments.map((monument) => (
                  <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="relative">
                      <div className="aspect-[3/4] bg-muted">
                        <img 
                          src={monument.image}
                          alt={monument.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-2 left-2 flex gap-2">
                        {monument.isNew && <Badge className="bg-green-500">Новинка</Badge>}
                        {monument.isPopular && <Badge className="bg-orange-500">Популярный</Badge>}
                      </div>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                        onClick={() => addToFavorites(monument)}
                      >
                        <Icon 
                          name="Heart" 
                          size={16} 
                          className={isInFavorites(monument.id) ? "fill-red-500 text-red-500" : ""} 
                        />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{monument.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{monument.subtitle}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Материал:</span>
                          <span className="font-medium">{monument.material}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Размеры:</span>
                          <span className="font-medium">{monument.dimensions}</span>
                        </div>
                      </div>

                      <div className="space-y-1 mb-4">
                        {monument.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs">
                            <Icon name="Check" className="text-primary mt-0.5" size={12} />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="font-bold text-lg">{monument.price.toLocaleString()} ₽</span>
                        {monument.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {monument.originalPrice.toLocaleString()} ₽
                          </span>
                        )}
                      </div>
                      
                      <Button 
                        onClick={() => handleAddToCart(monument)}
                        size="sm" 
                        className="w-full"
                      >
                        <Icon name="ShoppingCart" className="mr-2" size={14} />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  <Icon name="ExternalLink" className="mr-2" size={18} />
                  Смотреть весь каталог
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Требования Троекуровского кладбища
                </h2>
                <p className="text-lg text-muted-foreground">
                  Мы знаем все требования и поможем их соблюсти
                </p>
              </div>

              <Tabs defaultValue="sizes" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="sizes">Размеры</TabsTrigger>
                  <TabsTrigger value="materials">Материалы</TabsTrigger>
                  <TabsTrigger value="installation">Установка</TabsTrigger>
                  <TabsTrigger value="documents">Документы</TabsTrigger>
                </TabsList>
                
                {requirements.map((req, index) => (
                  <TabsContent key={index} value={['sizes', 'materials', 'installation', 'documents'][index]}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{req.category}</CardTitle>
                        <CardDescription>
                          Требования администрации кладбища по категории "{req.category.toLowerCase()}"
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {req.rules.map((rule, ruleIndex) => (
                            <li key={ruleIndex} className="flex items-start gap-3">
                              <Icon name="CheckCircle" className="text-primary mt-0.5" size={16} />
                              <span className="text-sm">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-6">
                    Заказать памятник на Троекуровское кладбище
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Оставьте заявку, и наш специалист приедет на кладбище для замеров и консультации
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-1">
                        <Icon name="MapPin" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Выезд мастера на кладбище</h3>
                        <p className="text-sm text-muted-foreground">
                          Бесплатный выезд для замеров и консультации на месте
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-1">
                        <Icon name="Clock" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Быстрые сроки</h3>
                        <p className="text-sm text-muted-foreground">
                          Изготовление стандартного памятника за 7-10 дней
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mt-1">
                        <Icon name="Shield" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Гарантия качества</h3>
                        <p className="text-sm text-muted-foreground">
                          Гарантия на материалы и работу — 10 лет
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Оставить заявку</CardTitle>
                    <CardDescription>
                      Мы свяжемся с вами в течение 30 минут
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Ваше имя *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Как к вам обращаться"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Телефон *
                        </label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+7 (999) 123-45-67"
                          type="tel"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          type="email"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Тип памятника
                        </label>
                        <Input
                          value={formData.monument_type}
                          onChange={(e) => handleInputChange('monument_type', e.target.value)}
                          placeholder="Вертикальный, горизонтальный, комплекс..."
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Дополнительная информация
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Размеры участка, пожелания к дизайну, сроки..."
                          rows={3}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex flex-col gap-3">
                        <Button type="submit" size="lg" className="w-full">
                          <Icon name="Send" className="mr-2" size={18} />
                          Отправить заявку
                        </Button>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <Button type="button" size="sm" variant="outline">
                            <Icon name="Phone" className="mr-2" size={16} />
                            Позвонить
                          </Button>
                          <Button type="button" size="sm" variant="outline">
                            <Icon name="MessageCircle" className="mr-2" size={16} />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                      
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
      </main>

      </div>
    </Layout>
  );
}