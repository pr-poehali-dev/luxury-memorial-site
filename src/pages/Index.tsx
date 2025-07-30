import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {
  const primaryKeywords = [
    'изготовление памятников в Москве', 'памятники на заказ Москва', 'заказать памятник в Москве',
    'памятники из гранита Москва', 'мемориальная мастерская Москва', 'изготовление надгробий Москва'
  ];

  const manufacturingSteps = [
    {
      step: '01',
      title: 'Консультация и эскиз',
      description: 'Обсуждаем ваши пожелания, создаем индивидуальный эскиз памятника',
      time: '1-2 дня',
      icon: 'PenTool'
    },
    {
      step: '02', 
      title: 'Изготовление в мастерской',
      description: 'Обработка камня, гравировка портрета и надписей в нашей мастерской',
      time: '7-14 дней',
      icon: 'Hammer'
    },
    {
      step: '03',
      title: 'Доставка и установка',
      description: 'Доставляем готовый памятник и профессионально устанавливаем на кладбище',
      time: '1 день',
      icon: 'Truck'
    }
  ];

  const manufacturingServices = [
    {
      title: 'Изготовление гранитных памятников',
      description: 'Полный цикл изготовления памятников из карельского гранита в собственной мастерской',
      features: ['Габбро-диабаз', 'Shanxi Black', 'Absolute Black', 'Дымовский гранит'],
      price: 'от 35 000 ₽',
      popular: true,
      icon: 'Mountain'
    },
    {
      title: 'Изготовление мраморных памятников',
      description: 'Эксклюзивные памятники из итальянского и уральского мрамора с художественной обработкой',
      features: ['Каррарский мрамор', 'Коелгинский мрамор', 'Газганский мрамор', 'Уфалейский мрамор'],
      price: 'от 45 000 ₽',
      popular: false,
      icon: 'Gem'
    },
    {
      title: 'Изготовление комплексов',
      description: 'Мемориальные комплексы любой сложности: от семейных до элитных захоронений',
      features: ['Семейные комплексы', 'Элитные мемориалы', 'Склепы', 'Колумбарии'],
      price: 'от 120 000 ₽',
      popular: false,
      icon: 'Building'
    }
  ];

  const moscowDistricts = [
    { name: 'ЦАО', cemeteries: 'Ваганьковское, Новодевичье', orders: '240/мес' },
    { name: 'САО', cemeteries: 'Троекуровское, Митинское', orders: '180/мес' },
    { name: 'СВАО', cemeteries: 'Преображенское, Бабушкинское', orders: '160/мес' },
    { name: 'ВАО', cemeteries: 'Лефортовское, Введенское', orders: '140/мес' },
    { name: 'ЮВАО', cemeteries: 'Карачаровское, Люберецкое', orders: '130/мес' },
    { name: 'ЮАО', cemeteries: 'Донское, Калитниковское', orders: '120/мес' },
    { name: 'ЮЗАО', cemeteries: 'Троицкое, Ясеневское', orders: '110/мес' },
    { name: 'ЗАО', cemeteries: 'Кунцевское, Востряковское', orders: '150/мес' },
    { name: 'СЗАО', cemeteries: 'Хованское, Северное', orders: '170/мес' }
  ];

  const qualityGuarantee = [
    { title: 'Собственное производство', description: 'Изготавливаем памятники в собственной мастерской в Москве', icon: 'Factory' },
    { title: 'Качественные материалы', description: 'Используем только премиальный гранит и мрамор от проверенных поставщиков', icon: 'Award' },
    { title: 'Опытные мастера', description: '15+ лет опыта в изготовлении памятников, художественной гравировке', icon: 'Users' },
    { title: 'Современное оборудование', description: 'Новейшие станки ЧПУ для точной обработки камня и гравировки', icon: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-primary/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 text-sm bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Award" size={16} className="mr-2" />
              #1 по изготовлению памятников в Москве
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 to-primary bg-clip-text text-transparent">
                Изготовление памятников
              </span>
              <br />
              <span className="text-slate-700">
                в Москве
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Собственная мастерская • Изготовление за 7-14 дней • Гарантия качества • 
              Установка на любом кладбище Москвы • 2000+ изготовленных памятников
            </p>

            {/* Primary Keywords */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {primaryKeywords.slice(0, 4).map((keyword) => (
                <Badge key={keyword} variant="secondary" className="text-sm px-3 py-1">
                  {keyword}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">7-14</div>
                <div className="text-sm text-muted-foreground">дней изготовление</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">изготовлено памятников</div>
              </div>
              <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">кладбищ Москвы</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Заказать изготовление
              </Button>
              <Button size="lg" variant="outline" className="group text-lg px-8 py-4">
                <Icon name="Eye" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Посмотреть мастерскую
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Процесс изготовления памятников в Москве
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный цикл изготовления от эскиза до установки в нашей собственной мастерской
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {manufacturingSteps.map((step, index) => (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={step.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-primary transition-colors">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-primary border-primary">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {step.time}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Виды изготавливаемых памятников в Москве
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Изготавливаем памятники любой сложности из премиальных материалов в собственной мастерской
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {manufacturingServices.map((service, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-primary ring-opacity-50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярное
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon as any} className="text-primary" size={28} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-xs text-muted-foreground">под ключ</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="text-sm font-medium text-muted-foreground">Материалы:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <Icon name="Check" size={14} className="text-green-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full group/btn">
                    Заказать изготовление
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moscow Districts Coverage */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Изготовление памятников во всех округах Москвы
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Доставляем и устанавливаем изготовленные памятники на кладбищах всех районов Москвы
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {moscowDistricts.map((district, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg text-primary group-hover:text-primary/80 transition-colors">
                      {district.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {district.cemeteries}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      {district.orders}
                    </Badge>
                  </div>
                  <Icon name="MapPin" className="text-primary group-hover:scale-110 transition-transform" size={24} />
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="group">
              <Icon name="Map" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Посмотреть все кладбища Москвы
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Гарантии качества изготовления
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Что делает наше изготовление памятников в Москве лучшим на рынке
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityGuarantee.map((guarantee, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={guarantee.icon as any} className="text-primary group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                    {guarantee.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {guarantee.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Заказать изготовление памятника в Москве
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-6">
                  Получите бесплатную консультацию и расчет стоимости изготовления:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-3 text-green-300 flex-shrink-0 mt-1" />
                    <span>Бесплатный выезд мастера для замеров и консультации</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-3 text-green-300 flex-shrink-0 mt-1" />
                    <span>3D-визуализация памятника перед началом изготовления</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-3 text-green-300 flex-shrink-0 mt-1" />
                    <span>Договор с фиксированной стоимостью и сроками</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={20} className="mr-3 text-green-300 flex-shrink-0 mt-1" />
                    <span>Доставка и установка включены в стоимость</span>
                  </li>
                </ul>
                
                <div className="grid grid-cols-2 gap-4 text-primary-foreground/80">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="text-sm">Ответ в течение 5 минут</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={16} className="mr-2" />
                    <span className="text-sm">Конфиденциальность данных</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Award" size={16} className="mr-2" />
                    <span className="text-sm">Гарантия качества</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    <span className="text-sm">Рассрочка 0%</span>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white/10 border-primary-foreground/20 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Рассчитать стоимость изготовления</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя *</label>
                    <Input placeholder="Как к вам обращаться?" className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
                    <Input placeholder="+7 (___) ___-__-__" className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Кладбище в Москве</label>
                    <Input placeholder="На каком кладбище планируете установку?" className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Пожелания к памятнику</label>
                    <Textarea placeholder="Материал, размер, тип памятника, особые пожелания..." className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" rows={3} />
                  </div>
                  <Button size="lg" variant="secondary" className="w-full group">
                    <Icon name="Calculator" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                    Рассчитать стоимость изготовления
                  </Button>
                  <p className="text-xs text-primary-foreground/60 text-center">
                    * Обязательные поля. Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacy-policy" className="underline hover:no-underline">политикой конфиденциальности</a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Trust Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Лидер по изготовлению памятников в Москве
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Цифры, которые говорят о нашем профессионализме и качестве изготовления
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { number: '15', label: 'лет изготавливаем', suffix: '+' },
              { number: '2000', label: 'изготовленных памятников', suffix: '+' },
              { number: '50', label: 'кладбищ Москвы', suffix: '+' },
              { number: '7', label: 'дней минимальный срок', suffix: '' },
              { number: '100', label: 'гарантия качества', suffix: '%' },
              { number: '24', label: 'часа консультации', suffix: '/7' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}