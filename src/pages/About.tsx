import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function About() {
  const stats = [
    { icon: 'Calendar', value: '15+', label: 'Лет на рынке' },
    { icon: 'Users', value: '2000+', label: 'Довольных клиентов' },
    { icon: 'Award', value: '500+', label: 'Изготовленных памятников' },
    { icon: 'MapPin', value: '50+', label: 'Кладбищ Москвы и области' }
  ];

  const advantages = [
    {
      icon: 'Gem',
      title: 'Собственное производство',
      description: 'Полный цикл изготовления памятников от эскиза до установки в собственной мастерской'
    },
    {
      icon: 'Clock',
      title: 'Быстрые сроки',
      description: 'Изготовление памятников от 7 рабочих дней. Срочные заказы — за 3 дня'
    },
    {
      icon: 'Shield',
      title: 'Пожизненная гарантия',
      description: 'На все изделия предоставляем пожизненную гарантию качества и долговечности'
    },
    {
      icon: 'Truck',
      title: 'Доставка и установка',
      description: 'Бесплатная доставка по Москве и области. Профессиональная установка включена'
    },
    {
      icon: 'CreditCard',
      title: 'Удобная оплата',
      description: 'Рассрочка без переплат, оплата картой, наличными или безналичный расчет'
    },
    {
      icon: 'HeartHandshake',
      title: 'Индивидуальный подход',
      description: 'Каждый заказ уникален. Работаем с эскизами клиентов и создаем авторские проекты'
    }
  ];

  const testimonials = [
    {
      name: 'Елена Михайловна Соколова',
      location: 'Троекуровское кладбище',
      rating: 5,
      text: 'Огромная благодарность мастерам за прекрасную работу! Памятник получился именно таким, как мы хотели. Качество на высшем уровне, все сделано с душой.',
      image: '/img/e22c82bc-c4cd-4c1a-9a77-7a176922a98c.jpg'
    },
    {
      name: 'Владимир Александрович Петров',
      location: 'Кунцевское кладбище',
      rating: 5,
      text: 'Заказывали семейный мемориальный комплекс. Работу выполнили быстро и качественно. Особенно понравилось отношение сотрудников — очень внимательные и деликатные.',
      image: '/img/e22c82bc-c4cd-4c1a-9a77-7a176922a98c.jpg'
    },
    {
      name: 'Анна Сергеевна Волкова',
      location: 'Хованское кладбище',
      rating: 5,
      text: 'Спасибо за профессионализм! Помогли с выбором, подсказали лучшие варианты. Гравировка портрета выполнена безупречно. Рекомендую всем знакомым.',
      image: '/img/e22c82bc-c4cd-4c1a-9a77-7a176922a98c.jpg'
    }
  ];

  const team = [
    {
      name: 'Андрей Викторович',
      position: 'Мастер-камнерез',
      experience: '12 лет опыта',
      image: '/img/accdaa50-6380-4bf5-bcb3-4dbec2ad7242.jpg'
    },
    {
      name: 'Михаил Петрович',
      position: 'Художник-гравер',
      experience: '8 лет опыта',
      image: '/img/accdaa50-6380-4bf5-bcb3-4dbec2ad7242.jpg'
    },
    {
      name: 'Сергей Николаевич',
      position: 'Монтажник',
      experience: '15 лет опыта',
      image: '/img/accdaa50-6380-4bf5-bcb3-4dbec2ad7242.jpg'
    }
  ];

  return (
    <Layout>
      <div className="bg-background">
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="outline">
              <Icon name="Info" size={16} className="mr-2" />
              О нашей компании
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Вечная Память
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Более 15 лет мы создаем памятники, которые хранят память о ваших близких. 
              Наша гранитная мастерская — это место, где рождается искусство из камня.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon name={stat.icon as any} className="text-primary" size={28} />
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group">
                <Icon name="Phone" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Позвонить нам
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Icon name="MapPin" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                Посетить мастерскую
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Наша история</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Компания "Вечная Память" была основана в 2009 году мастером-камнерезом Андреем Викторовичем. 
                  Начинав с небольшой мастерской, мы постепенно выросли в одну из ведущих компаний 
                  по изготовлению памятников в Москве и Московской области.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Наша миссия</h3>
                <p className="text-muted-foreground">
                  Мы создаем не просто памятники — мы воплощаем в камне память о людях, 
                  которые были дороги нашим клиентам. Каждая работа выполняется с особым 
                  вниманием к деталям и уважением к памяти усопших.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-1">2009</div>
                  <div className="text-sm text-muted-foreground">Год основания</div>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <div className="text-2xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/684b142a-63a8-498d-b870-913128072d73.jpg" 
                alt="Наша гранитная мастерская"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Наши преимущества — это результат многолетнего опыта и стремления к совершенству
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name={advantage.icon as any} className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Опытные мастера, которые вкладывают душу в каждую работу
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Что говорят о нас люди, которые доверили нам сохранение памяти о своих близких
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground text-sm leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      </div>
    </Layout>
  );
}