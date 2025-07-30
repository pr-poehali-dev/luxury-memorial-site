import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Index() {
  const services = [
    {
      icon: 'Mountain',
      title: 'Гранитные памятники',
      description: 'Изготовление из премиального карельского гранита с художественной обработкой',
      price: 'от 35 000 ₽',
      features: ['Габбро-диабаз', 'Shanxi Black', 'Absolute Black'],
      gradient: 'from-slate-600 to-slate-800'
    },
    {
      icon: 'Gem',
      title: 'Мраморные памятники',
      description: 'Эксклюзивные памятники из итальянского мрамора с индивидуальным дизайном',
      price: 'от 45 000 ₽',
      features: ['Каррарский мрамор', 'Коелгинский мрамор', 'Газганский мрамор'],
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: 'Building',
      title: 'Мемориальные комплексы',
      description: 'Полные мемориальные комплексы с благоустройством территории',
      price: 'от 120 000 ₽',
      features: ['Семейные комплексы', 'Элитные мемориалы', 'Склепы'],
      gradient: 'from-emerald-600 to-emerald-800'
    }
  ];

  const stats = [
    { value: '2000+', label: 'Памятников изготовлено', icon: 'Award' },
    { value: '15+', label: 'Лет опыта работы', icon: 'Calendar' },
    { value: '50+', label: 'Кладбищ Москвы', icon: 'MapPin' },
    { value: '7-14', label: 'Дней изготовление', icon: 'Clock' }
  ];

  const features = [
    {
      icon: 'Factory',
      title: 'Собственное производство',
      description: 'Мастерская полного цикла в Москве с современным оборудованием'
    },
    {
      icon: 'Palette',
      title: '3D-визуализация',
      description: 'Увидите будущий памятник еще до начала изготовления'
    },
    {
      icon: 'Shield',
      title: 'Пожизненная гарантия',
      description: 'Гарантируем качество материалов и работы на весь срок службы'
    },
    {
      icon: 'Truck',
      title: 'Установка включена',
      description: 'Доставка и профессиональная установка входят в стоимость'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Михайловна',
      location: 'Троекуровское кладбище',
      text: 'Огромная благодарность за прекрасную работу! Памятник получился именно таким, как мы хотели.',
      rating: 5,
      avatar: 'ЕМ'
    },
    {
      name: 'Владимир Александрович',
      location: 'Кунцевское кладбище',
      text: 'Заказывали семейный комплекс. Работу выполнили быстро и качественно. Очень довольны.',
      rating: 5,
      avatar: 'ВА'
    },
    {
      name: 'Анна Сергеевна',
      location: 'Хованское кладбище',
      text: 'Профессиональный подход на всех этапах. Гравировка портрета выполнена безупречно.',
      rating: 5,
      avatar: 'АС'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Modern Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20" />
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700">#1 в Москве по изготовлению памятников</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-none">
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Изготовление
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                памятников
              </span>
              <br />
              <span className="text-slate-600 text-4xl md:text-5xl lg:text-6xl">
                в Москве
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Собственная мастерская с 15-летним опытом. Изготавливаем памятники из премиального гранита и мрамора. 
              <span className="font-medium text-slate-800"> От эскиза до установки — всего за 7-14 дней.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button size="lg" className="h-14 px-8 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Icon name="Phone" size={24} className="mr-3" />
                Заказать памятник
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-medium rounded-xl border-2 hover:bg-slate-50 transition-all duration-300">
                <Icon name="Play" size={24} className="mr-3" />
                Посмотреть процесс
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Виды памятников
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Изготавливаем памятники любой сложности из премиальных материалов в собственной мастерской
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-3xl">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                      <Icon name={service.icon as any} className="text-white" size={32} />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-slate-800">{service.price}</div>
                      <div className="text-sm text-slate-500 font-medium">под ключ</div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-slate-600 leading-relaxed font-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm font-medium text-slate-700">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full h-12 rounded-xl font-medium group/btn hover:shadow-lg transition-all duration-300">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Современные технологии и многолетний опыт для создания качественных памятников
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-300">
                  <Icon name={feature.icon as any} className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Что говорят люди, которые доверили нам создание памяти о своих близких
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      <p className="text-slate-600 text-sm font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={18} />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-700 font-light leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Заказать изготовление
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> памятника</span>
                </h2>
                <p className="text-xl text-slate-300 mb-8 font-light leading-relaxed">
                  Получите бесплатную консультацию и точный расчет стоимости за 15 минут
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Бесплатная консультация и замеры',
                    '3D-визуализация будущего памятника',
                    'Договор с фиксированной стоимостью',
                    'Доставка и установка включены'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon name="Check" size={16} className="text-white" />
                      </div>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-slate-400">
                  <div className="flex items-center">
                    <Icon name="Clock" size={18} className="mr-2" />
                    <span className="text-sm">Ответ через 5 минут</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={18} className="mr-2" />
                    <span className="text-sm">Данные защищены</span>
                  </div>
                </div>
              </div>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl shadow-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-2xl font-bold">Рассчитать стоимость</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm" 
                    />
                    <Input 
                      placeholder="+7 (___) ___-__-__" 
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm" 
                    />
                    <Input 
                      placeholder="Кладбище в Москве" 
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm" 
                    />
                    <Textarea 
                      placeholder="Ваши пожелания к памятнику..." 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl backdrop-blur-sm resize-none" 
                      rows={3} 
                    />
                  </div>
                  
                  <Button size="lg" variant="secondary" className="w-full h-12 rounded-xl font-medium text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                  
                  <p className="text-xs text-white/60 text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacy-policy" className="underline hover:no-underline text-white/80">
                      политикой конфиденциальности
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}