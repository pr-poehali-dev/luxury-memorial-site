import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    serviceType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет отправка формы
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Позвоните нам',
      primary: '+7 (123) 456-78-90',
      secondary: 'Ежедневно с 9:00 до 21:00',
      action: 'Позвонить',
      href: 'tel:+71234567890',
      color: 'text-green-600'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      primary: '+7 (123) 456-78-90',
      secondary: 'Быстрые ответы 24/7',
      action: 'Написать',
      href: 'https://wa.me/71234567890',
      color: 'text-green-600'
    },
    {
      icon: 'Send',
      title: 'Telegram',
      primary: '@memorial_studio',
      secondary: 'Консультации онлайн',
      action: 'Открыть',
      href: 'https://t.me/memorial_studio',
      color: 'text-blue-500'
    },
    {
      icon: 'Mail',
      title: 'Email',
      primary: 'info@memorial.ru',
      secondary: 'Ответим в течение часа',
      action: 'Написать',
      href: 'mailto:info@memorial.ru',
      color: 'text-purple-600'
    }
  ];

  const officeInfo = [
    {
      icon: 'MapPin',
      title: 'Наш офис',
      content: [
        'г. Москва, ул. Мемориальная, 15',
        'БЦ "Гранит", 2 этаж, офис 205',
        'Рядом с метро "Красные ворота"'
      ]
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: [
        'Понедельник - Пятница: 9:00 - 18:00',
        'Суббота - Воскресенье: 10:00 - 16:00',
        'Консультации по звонку: круглосуточно'
      ]
    },
    {
      icon: 'Car',
      title: 'Как добраться',
      content: [
        'М. Красные ворота - 3 мин пешком',
        'Бесплатная парковка у здания',
        'Выезд специалиста на дом бесплатно'
      ]
    }
  ];

  const services = [
    'Консультация по выбору памятника',
    'Изготовление памятников',
    'Установка и благоустройство',
    'Реставрация памятников',
    'Изготовление оград',
    'Гравировка и портреты',
    'Другое'
  ];

  return (
    <Layout>
      <div className="bg-background">
        
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-muted/20">
          <div className="container mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Связаться с нами
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Контакты
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мы всегда готовы помочь вам в создании достойного памятника. 
              Выберите удобный способ связи или приезжайте к нам в офис.
            </p>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-muted-foreground text-lg">
                Выберите удобный способ связи
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon name={method.icon as any} size={28} className={method.color} />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="font-semibold text-lg mb-1">{method.primary}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.secondary}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">
                    Оставьте заявку
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Заполните форму, и наш специалист свяжется с вами в течение 15 минут
                  </p>
                </div>

                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-base font-medium">Ваше имя *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Введите имя"
                            className="mt-2 h-12"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-base font-medium">Телефон *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+7 (___) ___-__-__"
                            className="mt-2 h-12"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base font-medium">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="mt-2 h-12"
                        />
                      </div>

                      <div>
                        <Label htmlFor="serviceType" className="text-base font-medium">Тип услуги</Label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="mt-2 w-full h-12 px-3 rounded-md border border-input bg-background text-foreground"
                        >
                          <option value="">Выберите услугу</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-base font-medium">Сообщение *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Расскажите о ваших пожеланиях, бюджете, сроках..."
                          rows={5}
                          className="mt-2"
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-12 text-base">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Обязательные поля. Нажимая кнопку, вы соглашаетесь с{' '}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          обработкой персональных данных
                        </a>
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-3xl font-bold mb-4">
                    Наш офис
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Приходите к нам в офис для личной консультации. 
                    У нас есть образцы материалов и готовые проекты памятников.
                  </p>
                </div>

                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icon name={info.icon as any} size={24} className="text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                            <div className="space-y-1">
                              {info.content.map((line, lineIndex) => (
                                <p key={lineIndex} className="text-muted-foreground">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Benefits */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Star" size={20} className="text-primary" />
                      Преимущества визита в офис
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Посмотрите образцы камня и готовые работы',
                        'Получите персональную консультацию специалиста',
                        'Обсудите индивидуальный проект памятника',
                        'Оформите договор и получите скидку 5%'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Как нас найти
              </h2>
              <p className="text-muted-foreground text-lg">
                Мы находимся в центре Москвы, рядом с метро
              </p>
            </div>
            
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Icon name="MapPin" size={32} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">Интерактивная карта</h3>
                      <p className="text-muted-foreground mb-1">г. Москва, ул. Мемориальная, 15</p>
                      <p className="text-muted-foreground mb-4">БЦ "Гранит", офис 205</p>
                      <Button variant="outline">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Построить маршрут
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transportation Options */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Train" size={28} className="text-blue-600" />
                  </div>
                  <CardTitle>На метро</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Красная линия, станция "Красные ворота"<br />
                    5 минут пешком от выхода №2
                  </p>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Самый быстрый способ
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Car" size={28} className="text-green-600" />
                  </div>
                  <CardTitle>На автомобиле</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Удобный заезд с Садового кольца<br />
                    Бесплатная парковка на 20 мест
                  </p>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Бесплатная парковка
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Home" size={28} className="text-purple-600" />
                  </div>
                  <CardTitle>Выезд к вам</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Наш специалист приедет к вам<br />
                    с каталогом и образцами
                  </p>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    Бесплатно
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Icon name="Phone" size={48} className="mx-auto mb-6 opacity-90" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  Экстренная связь 24/7
                </h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  В случае срочной необходимости вы можете связаться с нами в любое время
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="tel:+71234567890">
                      <Icon name="Phone" size={18} className="mr-2" />
                      +7 (123) 456-78-90
                    </a>
                  </Button>
                  <Separator orientation="vertical" className="h-8 hidden sm:block bg-primary-foreground/20" />
                  <Button 
                    size="lg" 
                    variant="secondary" 
                    className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="https://wa.me/71234567890" target="_blank" rel="noopener noreferrer">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </Layout>
  );
}