import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {
  const topKeywords = [
    'памятники в Москве', 'изготовление памятников', 'гранитные памятники', 
    'памятники из гранита', 'установка памятников', 'заказать памятник'
  ];

  const seoStats = [
    { number: '#1', label: 'в Яндексе по запросу "памятники Москва"', icon: 'TrendingUp' },
    { number: '#2', label: 'в Google по "изготовление памятников"', icon: 'Award' },
    { number: '95%', label: 'клиентов находят нас через поиск', icon: 'Search' },
    { number: '24/7', label: 'высокие позиции в поисковиках', icon: 'Clock' }
  ];

  const popularServices = [
    {
      title: 'Памятники из гранита',
      description: 'Изготовление гранитных памятников любой сложности. Доставка по Москве и области.',
      price: 'от 35 000 ₽',
      searches: '2,400 запросов/мес',
      icon: 'Mountain',
      keywords: ['гранитные памятники', 'памятники из гранита', 'гранит на могилу']
    },
    {
      title: 'Установка памятников',
      description: 'Профессиональная установка памятников на кладбищах Москвы. Гарантия 10 лет.',
      price: 'от 8 000 ₽',
      searches: '1,800 запросов/мес',
      icon: 'Settings',
      keywords: ['установка памятников', 'монтаж памятников', 'установить памятник']
    },
    {
      title: 'Памятники недорого',
      description: 'Доступные памятники без потери качества. Рассрочка 0%. Скидки пенсионерам.',
      price: 'от 25 000 ₽',
      searches: '3,200 запросов/мес',
      icon: 'DollarSign',
      keywords: ['памятники недорого', 'дешевые памятники', 'памятники цена']
    }
  ];

  const topCemeteries = [
    { name: 'Троекуровское кладбище', searches: '1,200/мес', href: '/troekurovskoye-cemetery' },
    { name: 'Новодевичье кладбище', searches: '900/мес', href: '/novodevichye-cemetery' },
    { name: 'Кунцевское кладбище', searches: '800/мес', href: '/kuntsevskoe-cemetery' },
    { name: 'Ваганьковское кладбище', searches: '600/мес', href: '/vagankovskoe-cemetery' }
  ];

  const seoAdvantages = [
    {
      title: 'Найдут в поиске',
      description: 'Оптимизация под топовые запросы: "памятники Москва", "изготовление памятников"',
      icon: 'Search'
    },
    {
      title: 'Быстрая индексация',
      description: 'Новые памятники попадают в поиск Яндекса и Google за 2-3 дня',
      icon: 'Zap'
    },
    {
      title: 'Локальный SEO',
      description: 'Показываемся в топе по запросам для каждого кладбища Москвы',
      icon: 'MapPin'
    },
    {
      title: 'Отзывы в поиске',
      description: 'Положительные отзывы клиентов отображаются прямо в результатах поиска',
      icon: 'Star'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SEO Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-50/30" />
        
        {/* Floating Keywords Background */}
        <div className="absolute inset-0 opacity-5">
          {topKeywords.map((keyword, index) => (
            <div 
              key={keyword}
              className={`absolute text-sm font-medium text-primary animate-pulse`}
              style={{
                top: `${20 + (index * 15)}%`,
                left: `${10 + (index * 12)}%`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {keyword}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              #1 в Яндексе и Google
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-primary to-blue-700 bg-clip-text text-transparent">
                Памятники в Москве
              </span>
              <br />
              <span className="text-slate-700">
                Изготовление и установка
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ⭐ Топ-1 в поиске по запросу "памятники Москва" • 15+ лет опыта • 2000+ довольных клиентов • 
              Гарантия качества • Доставка по Московской области
            </p>

            {/* Search Keywords Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {topKeywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="group text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Заказать памятник
              </Button>
              <Button size="lg" variant="outline" className="group text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Рассчитать стоимость
              </Button>
            </div>

            {/* SEO Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {seoStats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/80 backdrop-blur rounded-lg shadow-sm">
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-2" size={24} />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services (High-Traffic Keywords) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Топовые услуги в поиске</h2>
            <p className="text-muted-foreground text-lg">
              Услуги с наибольшим количеством поисковых запросов в Москве
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {popularServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Search" size={12} className="mr-1" />
                      {service.searches}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button size="sm" className="group/btn">
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      Заказать
                    </Button>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground mb-2">Популярные запросы:</div>
                    <div className="flex flex-wrap gap-1">
                      {service.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Cemeteries (Local SEO) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Работаем на топовых кладбищах Москвы</h2>
            <p className="text-muted-foreground text-lg">
              Самые популярные кладбища в поисковых запросах москвичей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topCemeteries.map((cemetery, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Icon name="MapPin" className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cemetery.name}
                  </h3>
                  <Badge variant="outline" className="mb-3">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    {cemetery.searches}
                  </Badge>
                  <Button size="sm" variant="outline" className="w-full group/btn">
                    Памятники здесь
                    <Icon name="ExternalLink" size={14} className="ml-2 group-hover/btn:scale-110 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Advantages */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему мы в топе поиска</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональная SEO-оптимизация помогает клиентам легко находить нас в интернете
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoAdvantages.map((advantage, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={advantage.icon as any} className="text-primary group-hover:scale-110 transition-transform" size={28} />
                  </div>
                  <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                    {advantage.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Order Form */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Быстрый заказ памятника</h2>
                <p className="text-primary-foreground/80 text-lg mb-6">
                  Оставьте заявку прямо сейчас и получите:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="mr-3 text-green-300" />
                    <span>Бесплатную консультацию мастера</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="mr-3 text-green-300" />
                    <span>3D-визуализацию будущего памятника</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="mr-3 text-green-300" />
                    <span>Скидку 10% на первый заказ</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={20} className="mr-3 text-green-300" />
                    <span>Рассрочку 0% на 12 месяцев</span>
                  </li>
                </ul>
                
                <div className="flex items-center space-x-4 text-primary-foreground/80">
                  <div className="flex items-center">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="text-sm">Ответим через 5 минут</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={16} className="mr-2" />
                    <span className="text-sm">Данные защищены</span>
                  </div>
                </div>
              </div>
              
              <Card className="bg-white/10 border-primary-foreground/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input placeholder="Как к вам обращаться?" className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Кладбище</label>
                      <Input placeholder="На каком кладбище планируете установку?" className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Комментарий</label>
                      <Textarea placeholder="Опишите ваши пожелания к памятнику..." className="bg-white/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" rows={3} />
                    </div>
                    <Button size="lg" variant="secondary" className="w-full group">
                      <Icon name="Send" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                      Получить консультацию бесплатно
                    </Button>
                    <p className="text-xs text-primary-foreground/60 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Нам доверяют</h2>
            <p className="text-muted-foreground text-lg">
              Показатели, которые подтверждают наше лидерство в отрасли
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { number: '15+', label: 'лет опыта' },
              { number: '2000+', label: 'клиентов' },
              { number: '50+', label: 'кладбищ' },
              { number: '4.9', label: 'рейтинг' },
              { number: '100%', label: 'гарантия' },
              { number: '24/7', label: 'поддержка' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}