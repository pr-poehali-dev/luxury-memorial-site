import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function HowToOrder() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const steps = [
    {
      number: 1,
      title: 'Выберите памятник',
      description: 'Просмотрите наш каталог и выберите подходящий памятник. Учтите размеры участка и требования кладбища.',
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      details: [
        'Определитесь с типом памятника (вертикальный, горизонтальный, комплекс)',
        'Выберите материал (гранит, мрамор)',
        'Учтите размеры и правила кладбища',
        'Посмотрите примеры работ в портфолио'
      ]
    },
    {
      number: 2,
      title: 'Свяжитесь с нами',
      description: 'Обратитесь к нашим специалистам для консультации и уточнения деталей заказа.',
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      details: [
        'Позвоните по телефону +7 (495) 123-45-67',
        'Напишите в WhatsApp или Telegram',
        'Заполните форму обратной связи',
        'Приезжайте в наш офис на консультацию'
      ]
    },
    {
      number: 3,
      title: 'Создание макета',
      description: 'Наши дизайнеры создадут 3D-макет памятника с учетом всех ваших пожеланий.',
      image: '/img/9b9a4a6a-509a-455c-b99f-4938bb1485e5.jpg',
      details: [
        'Предоставьте фотографии для портрета',
        'Выберите текст эпитафии и дизайн',
        'Согласуйте все элементы оформления',
        'Получите 3D-визуализацию проекта'
      ]
    },
    {
      number: 4,
      title: 'Заключение договора',
      description: 'После согласования макета заключаем договор и определяем сроки изготовления.',
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      details: [
        'Подписание договора на изготовление',
        'Внесение предоплаты (обычно 50%)',
        'Фиксация сроков изготовления',
        'Получение всех необходимых документов'
      ]
    },
    {
      number: 5,
      title: 'Изготовление',
      description: 'Мастера приступают к изготовлению памятника в соответствии с утвержденным макетом.',
      image: '/img/eb1d44c1-99b8-4397-88bb-fb4436f2d9c7.jpg',
      details: [
        'Обработка камня по заданным размерам',
        'Нанесение портрета и текста',
        'Полировка и финишная обработка',
        'Контроль качества на каждом этапе'
      ]
    },
    {
      number: 6,
      title: 'Доставка и установка',
      description: 'Готовый памятник доставляется на кладбище и профессионально устанавливается.',
      image: '/img/f6603dc6-7fa6-41ad-a5ab-5dc901738354.jpg',
      details: [
        'Согласование даты доставки',
        'Получение разрешений кладбища',
        'Профессиональная установка',
        'Окончательная приемка работ'
      ]
    }
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Звоните с 9:00 до 18:00',
      action: 'Позвонить'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+7 (495) 123-45-67',
      description: 'Быстрые ответы 24/7',
      action: 'Написать'
    },
    {
      icon: 'Send',
      title: 'Telegram',
      value: '@monument_master',
      description: 'Онлайн консультации',
      action: 'Написать'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@memorial.ru',
      description: 'Подробные консультации',
      action: 'Написать'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
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
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Пошаговая инструкция
              </Badge>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                Как заказать памятник
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Подробное руководство по заказу памятника — от выбора до установки. 
                Мы проведем вас через каждый этап процесса.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  6 простых шагов к готовому памятнику
                </h2>
                <p className="text-lg text-muted-foreground">
                  Средний срок изготовления — 14-21 день
                </p>
              </div>

              <div className="space-y-16">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative">
                    {/* Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 lg:left-1/2 top-32 lg:top-24 w-0.5 h-16 bg-primary/20 transform lg:-translate-x-px"></div>
                    )}
                    
                    <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                        
                        <Card>
                          <CardContent className="pt-6">
                            <ul className="space-y-3">
                              {step.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <Icon name="Check" className="text-primary mt-0.5" size={16} />
                                  <span className="text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Image */}
                      <div className="flex-1 max-w-md">
                        <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                          <img 
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Способы связи с нами
                </h2>
                <p className="text-lg text-muted-foreground">
                  Выберите удобный способ для консультации
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactMethods.map((method) => (
                  <Card key={method.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={method.icon as any} size={24} />
                      </div>
                      <h3 className="font-semibold mb-2">{method.title}</h3>
                      <p className="font-mono text-sm mb-2">{method.value}</p>
                      <p className="text-xs text-muted-foreground mb-4">{method.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        {method.action}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">
                    Получить консультацию
                  </CardTitle>
                  <CardDescription>
                    Оставьте заявку и наш специалист свяжется с вами для подробной консультации
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        Сообщение
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Расскажите о ваших пожеланиях, размерах участка, сроках..."
                        rows={4}
                      />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" size="lg" className="flex-1">
                        <Icon name="Send" className="mr-2" size={18} />
                        Отправить заявку
                      </Button>
                      <Button type="button" size="lg" variant="outline" className="flex-1">
                        <Icon name="Phone" className="mr-2" size={18} />
                        Позвонить сейчас
                      </Button>
                    </div>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая "Отправить заявку", вы соглашаетесь с обработкой персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Quick */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl font-bold text-center mb-12">
                Часто задаваемые вопросы
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: 'Сколько времени занимает изготовление?',
                    answer: 'Стандартный срок изготовления — 14-21 день. Сложные проекты могут занять до 30 дней.'
                  },
                  {
                    question: 'Можно ли внести изменения в макет?',
                    answer: 'Да, вы можете вносить изменения в макет до подписания договора бесплатно.'
                  },
                  {
                    question: 'Какая гарантия на памятник?',
                    answer: 'Мы даем гарантию 10 лет на качество материала и работы.'
                  },
                  {
                    question: 'Входит ли установка в стоимость?',
                    answer: 'Да, профессиональная установка входит в стоимость памятника.'
                  }
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
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