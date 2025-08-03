import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function GoldLeaf() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    text: '',
    material: '',
    size: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: 'Crown',
      title: 'Благородство',
      description: 'Золото придает надписи особую торжественность и значимость'
    },
    {
      icon: 'Shield',
      title: 'Долговечность',
      description: 'Сусальное золото не тускнеет и не окисляется десятилетиями'
    },
    {
      icon: 'Eye',
      title: 'Видимость',
      description: 'Золотые буквы хорошо читаются при любом освещении'
    },
    {
      icon: 'Sparkles',
      title: 'Эстетика',
      description: 'Создает эффект дорогого и качественного оформления'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Подготовка поверхности',
      description: 'Тщательная очистка и обезжиривание камня, создание идеально гладкой поверхности для нанесения золота'
    },
    {
      step: '02', 
      title: 'Гравировка текста',
      description: 'Точная гравировка букв и символов с соблюдением глубины и пропорций для качественного нанесения золота'
    },
    {
      step: '03',
      title: 'Нанесение клеевой основы',
      description: 'Специальный клей-мордан наносится только на углубления букв с высокой точностью'
    },
    {
      step: '04',
      title: 'Золочение',
      description: 'Листы сусального золота аккуратно накладываются и прижимаются специальными инструментами'
    },
    {
      step: '05',
      title: 'Полировка',
      description: 'Удаление излишков и полировка до идеального блеска, защитное покрытие'
    }
  ];

  const materials = [
    {
      type: 'Гранит',
      description: 'Идеально подходит для золочения, долговечность более 50 лет',
      price: 'от 800 руб/буква'
    },
    {
      type: 'Мрамор',
      description: 'Классическое сочетание, элегантный внешний вид',
      price: 'от 900 руб/буква'
    },
    {
      type: 'Габбро',
      description: 'Черный камень создает максимальный контраст с золотом',
      price: 'от 850 руб/буква'
    }
  ];

  const examples = [
    {
      title: 'Имена и даты',
      description: 'Классическое оформление основной информации',
      image: '/img/c43543a5-4dbf-44af-a2fd-3de0db6e73f6.jpg'
    },
    {
      title: 'Эпитафии',
      description: 'Памятные слова, стихи, цитаты',
      image: '/img/5b4b5aad-5390-489a-ada4-b77bd66a5f2f.jpg'
    },
    {
      title: 'Декоративные элементы',
      description: 'Кресты, орнаменты, символы',
      image: '/img/61da5075-ff15-4bdf-b2b3-d0d2cadc15c1.jpg'
    }
  ];

  return (
    <Layout>
      <div className="bg-background">
        
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-yellow-50 via-background to-amber-50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">
                  Премиум оформление
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Сусальное золото на памятник
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Придайте памятнику особую торжественность и благородство. 
                  Золотые надписи создают эффект дорогого оформления и подчеркивают значимость памяти.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white">
                    <Icon name="Sparkles" size={18} className="mr-2" />
                    Заказать золочение
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Calculator" size={18} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/img/5b4b5aad-5390-489a-ada4-b77bd66a5f2f.jpg" 
                  alt="Сусальное золото на памятнике"
                  className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Преимущества сусального золота
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Почему золочение — это лучший выбор для оформления памятника
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-amber-100">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon as any} size={28} className="text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Технология золочения
              </h2>
              <p className="text-muted-foreground text-lg">
                Профессиональный процесс нанесения сусального золота
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/img/61da5075-ff15-4bdf-b2b3-d0d2cadc15c1.jpg" 
                  alt="Процесс нанесения сусального золота"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 text-white font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Примеры работ
              </h2>
              <p className="text-muted-foreground text-lg">
                Варианты использования сусального золота в оформлении памятников
              </p>
            </div>

            <Tabs defaultValue="names" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="names">Имена и даты</TabsTrigger>
                <TabsTrigger value="epitaphs">Эпитафии</TabsTrigger>
                <TabsTrigger value="decorative">Декор</TabsTrigger>
              </TabsList>
              
              <TabsContent value="names" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/img/c43543a5-4dbf-44af-a2fd-3de0db6e73f6.jpg" 
                      alt="Золотые имена на памятнике"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Имена и даты жизни</h3>
                    <p className="text-muted-foreground mb-6">
                      Классическое оформление основной информации золотом создает торжественный и уважительный вид. 
                      Золотые буквы хорошо читаются и не теряют яркость со временем.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Шрифты любого размера и стиля</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Цифры и специальные символы</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Гарантия на 25 лет</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="epitaphs" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/img/5b4b5aad-5390-489a-ada4-b77bd66a5f2f.jpg" 
                      alt="Золотые эпитафии"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Эпитафии и цитаты</h3>
                    <p className="text-muted-foreground mb-6">
                      Памятные слова, стихи, религиозные тексты, выполненные золотом, 
                      приобретают особую глубину и торжественность. Идеально для значимых текстов.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Поэтические тексты</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Религиозные надписи</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Личные послания</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="decorative" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="/img/61da5075-ff15-4bdf-b2b3-d0d2cadc15c1.jpg" 
                      alt="Декоративные элементы золотом"
                      className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">Декоративные элементы</h3>
                    <p className="text-muted-foreground mb-6">
                      Кресты, орнаменты, рамки и другие декоративные элементы, выполненные золотом, 
                      создают роскошный и завершенный вид памятника.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Православные кресты</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Растительные орнаменты</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Геометрические узоры</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Materials & Pricing */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Материалы и цены
              </h2>
              <p className="text-muted-foreground text-lg">
                Стоимость золочения зависит от типа камня и сложности работы
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {materials.map((material, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-amber-100">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{material.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{material.description}</p>
                    <div className="text-2xl font-bold text-amber-600 mb-4">{material.price}</div>
                    <Button variant="outline" className="w-full border-amber-200 hover:bg-amber-50">
                      Подробнее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">
                      Факторы, влияющие на стоимость:
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Количество букв и символов',
                        'Размер и сложность шрифта',
                        'Тип камня и его обработка',
                        'Наличие декоративных элементов',
                        'Срочность выполнения заказа'
                      ].map((factor, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Icon name="ArrowRight" size={16} className="text-amber-600" />
                          <span>{factor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <Icon name="Calculator" size={48} className="text-amber-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-lg mb-2">Точный расчет</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Получите точную стоимость золочения для вашего памятника
                      </p>
                      <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600">
                        Рассчитать стоимость
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Order Form */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Form */}
              <div>
                <div className="mb-8">
                  <h2 className="font-heading text-3xl font-bold mb-4">
                    Заказать золочение
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Оставьте заявку, и мы рассчитаем точную стоимость работ
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

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="material" className="text-base font-medium">Материал памятника</Label>
                          <select
                            id="material"
                            name="material"
                            value={formData.material}
                            onChange={handleChange}
                            className="mt-2 w-full h-12 px-3 rounded-md border border-input bg-background"
                          >
                            <option value="">Выберите материал</option>
                            <option value="granite">Гранит</option>
                            <option value="marble">Мрамор</option>
                            <option value="gabbro">Габбро</option>
                            <option value="other">Другой</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="size" className="text-base font-medium">Размер памятника</Label>
                          <Input
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            placeholder="100x50 см"
                            className="mt-2 h-12"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="text" className="text-base font-medium">Текст для золочения *</Label>
                        <Textarea
                          id="text"
                          name="text"
                          value={formData.text}
                          onChange={handleChange}
                          placeholder="Укажите текст, который нужно выполнить золотом (имена, даты, эпитафии)..."
                          rows={4}
                          className="mt-2"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-base font-medium">Дополнительные пожелания</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Укажите размер шрифта, стиль оформления, сроки выполнения..."
                          rows={3}
                          className="mt-2"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full h-12 text-base bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600">
                        <Icon name="Sparkles" size={18} className="mr-2" />
                        Заказать золочение
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Обязательные поля. Менеджер свяжется с вами для уточнения деталей
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Clock" size={20} className="text-amber-600" />
                      Сроки выполнения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Стандартные работы</span>
                        <Badge variant="outline" className="border-amber-200 text-amber-700">3-5 дней</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span>Сложные проекты</span>
                        <Badge variant="outline" className="border-amber-200 text-amber-700">7-10 дней</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span>Срочное выполнение</span>
                        <Badge variant="outline" className="border-amber-200 text-amber-700">1-2 дня</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Shield" size={20} className="text-primary" />
                      Гарантии качества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Гарантия на золочение 25 лет</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Настоящее сусальное золото</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Профессиональные мастера</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span>Бесплатные исправления</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <Icon name="Phone" size={32} className="mx-auto mb-4 opacity-90" />
                    <h3 className="font-semibold text-lg mb-2">Консультация бесплатно</h3>
                    <p className="opacity-90 mb-4">Звоните ежедневно с 9:00 до 21:00</p>
                    <Button 
                      variant="secondary" 
                      className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
                      asChild
                    >
                      <a href="tel:+71234567890">
                        +7 (123) 456-78-90
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}