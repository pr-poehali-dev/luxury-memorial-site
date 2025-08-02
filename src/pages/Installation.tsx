import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function Installation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: '',
    service: 'consultation'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет обработка формы
  };

  const installationSteps = [
    {
      step: 1,
      title: 'Консультация и замер',
      description: 'Наш специалист приезжает на место установки, проводит замеры и консультирует по выбору памятника',
      duration: '1-2 дня',
      icon: 'Ruler'
    },
    {
      step: 2,
      title: 'Изготовление памятника',
      description: 'Производство памятника по индивидуальным размерам с учетом всех пожеланий',
      duration: '14-21 день',
      icon: 'Hammer'
    },
    {
      step: 3,
      title: 'Подготовка места',
      description: 'Подготовка фундамента, выравнивание площадки для установки памятника',
      duration: '1 день',
      icon: 'Construction'
    },
    {
      step: 4,
      title: 'Доставка и установка',
      description: 'Доставка памятника на место и профессиональная установка нашими мастерами',
      duration: '1 день',
      icon: 'Truck'
    },
    {
      step: 5,
      title: 'Гарантийное обслуживание',
      description: 'Предоставляем гарантию на работы и консультации по уходу за памятником',
      duration: '5 лет',
      icon: 'Shield'
    }
  ];

  const faq = [
    {
      question: 'Сколько времени занимает изготовление и установка памятника?',
      answer: 'Полный цикл от заказа до установки занимает 16-25 дней: 14-21 день на изготовление и 2-4 дня на доставку и установку.'
    },
    {
      question: 'В какое время года можно устанавливать памятники?',
      answer: 'Установка памятников возможна круглый год. Однако в зимнее время могут быть ограничения из-за промерзания грунта. Оптимальное время - весна, лето и осень.'
    },
    {
      question: 'Нужно ли получать разрешение на установку памятника?',
      answer: 'Обычно разрешения не требуется, но в некоторых регионах могут быть особые требования. Мы поможем уточнить все формальности для вашего региона.'
    },
    {
      question: 'Какая гарантия предоставляется на установленный памятник?',
      answer: 'Мы предоставляем 5 лет гарантии на качество работ по установке и 10 лет гарантии на сам памятник от производственных дефектов.'
    },
    {
      question: 'Входит ли доставка в стоимость памятника?',
      answer: 'Доставка в пределах 50 км от нашего производства входит в стоимость. За пределами этого расстояния доставка рассчитывается отдельно - 50 рублей за километр.'
    },
    {
      question: 'Можно ли установить памятник на существующий фундамент?',
      answer: 'Да, возможно, если фундамент соответствует размерам и находится в хорошем состоянии. Наш мастер оценит возможность установки при замере.'
    },
    {
      question: 'Что делать, если памятник повредился при транспортировке?',
      answer: 'Все наши памятники застрахованы при транспортировке. В случае повреждения мы изготовим новый памятник без дополнительной оплаты.'
    },
    {
      question: 'Можно ли внести изменения в заказ после начала изготовления?',
      answer: 'Небольшие изменения возможны в первые 3 дня после начала работ. Кардинальные изменения могут потребовать доплаты и увеличения сроков.'
    }
  ];

  return (
    <Layout>
      <div className="bg-background">

      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
              Установка памятников
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональная установка памятников с гарантией качества. 
              Полное сопровождение от консультации до установки.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Связаться с нами</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобный способ связи или оставьте заявку
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={20} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">
                    +7 (495) 201-32-27
                  </div>
                  <p className="text-muted-foreground">
                    Ежедневно с 9:00 до 21:00
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/74952013227', '_blank')}
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" size={20} />
                    Электронная почта
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-medium mb-2">
                    info@postament.ru
                  </div>
                  <p className="text-muted-foreground">
                    Ответим в течение 2 часов
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Услуга
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-lg bg-background"
                    >
                      <option value="consultation">Консультация</option>
                      <option value="measurement">Выезд на замер</option>
                      <option value="installation">Установка памятника</option>
                      <option value="maintenance">Обслуживание</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium mb-2">
                      Адрес (для выезда мастера)
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-border rounded-lg bg-background"
                      placeholder="Укажите адрес кладбища"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full p-3 border border-border rounded-lg bg-background resize-none"
                      placeholder="Дополнительная информация..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Процесс установки памятника</h2>
            <p className="text-lg text-muted-foreground">
              Пошаговое описание всех этапов от заказа до установки
            </p>
          </div>

          <div className="grid gap-8">
            {installationSteps.map((step, index) => (
              <div key={step.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                
                <div className="flex-1">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon name={step.icon as any} size={24} className="text-primary" />
                        <h3 className="font-heading text-xl font-bold">{step.title}</h3>
                        <span className="ml-auto text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {index < installationSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 mt-20 w-0.5 h-12 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы об установке и доставке памятников
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-medium pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Готовы заказать установку памятника?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами для консультации и выезда мастера на замер
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      </div>
    </Layout>
  );
}