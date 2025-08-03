import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function ScalpelLettering() {
  const services = [
    {
      name: 'Рубленые буквы скарпелем',
      description: 'Традиционная техника гравировки с глубокой прорезкой',
      price: 'от 150 ₽/см',
      features: ['Глубина до 3-4 мм', 'Долговечность', 'Классический вид', 'Ручная работа']
    },
    {
      name: 'Рубленые буквы с покраской',
      description: 'Гравировка с последующим заполнением краской',
      price: 'от 200 ₽/см',
      features: ['Контрастность', 'Читаемость', 'Защита от выветривания', 'Любой цвет']
    },
    {
      name: 'Рубленые буквы с позолотой',
      description: 'Премиальное оформление с золотым покрытием',
      price: 'от 350 ₽/см',
      features: ['Эксклюзивность', 'Долговечность покрытия', 'Благородный вид', 'Устойчивость к погоде']
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Подготовка макета',
      description: 'Создание шаблона надписи с учетом размеров памятника'
    },
    {
      step: 2,
      title: 'Разметка на камне',
      description: 'Точный перенос макета на поверхность гранита'
    },
    {
      step: 3,
      title: 'Рубка скарпелем',
      description: 'Ручная гравировка каждой буквы с соблюдением глубины'
    },
    {
      step: 4,
      title: 'Обработка и покрытие',
      description: 'Шлифовка букв и нанесение защитного покрытия'
    }
  ];

  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background pt-8 pb-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-[rgb(46,184,46)]/10 text-[rgb(46,184,46)] border-[rgb(46,184,46)]/20">
                  Премиум оформление
                </Badge>
                <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                  Скарпель рубленые буквы на памятник
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Классическая техника ручной гравировки, обеспечивающая долговечность 
                  и благородный внешний вид надписей на граните
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#services">Узнать цены</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+7XXXXXXXXXX">Заказать консультацию</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/img/c515e426-e59f-40ad-9bc8-751e82ea39fb.jpg"
                  alt="Рубленые буквы скарпелем на граните"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-slate-900">Преимущества рубленых букв</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Традиционная техника скарпель обеспечивает максимальную долговечность и эстетичность
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Долговечность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Глубокая прорезка обеспечивает сохранность надписи на десятилетия
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Palette" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Эстетичность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Классический благородный вид, подчеркивающий важность памяти
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Hand" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Ручная работа</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Каждая буква вырезается мастером вручную с особой тщательностью
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">Устойчивость</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Не боится погодных условий, сохраняет четкость контуров
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-slate-900">Виды услуг и цены</h2>
              <p className="text-muted-foreground">
                Различные варианты оформления рубленых букв для любых требований
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-slate-900">Процесс изготовления</h2>
                <p className="text-muted-foreground mb-8">
                  Каждый этап выполняется опытными мастерами с соблюдением 
                  традиционных технологий гравировки
                </p>

                <div className="space-y-6">
                  {process.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="/img/530f4fb6-1249-47ea-a614-8d31efc2d74a.jpg"
                  alt="Процесс гравировки букв скарпелем"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4 text-slate-900">Примеры работ</h2>
              <p className="text-muted-foreground">
                Различные стили шрифтов и варианты оформления
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-square">
                  <img
                    src="/img/49b6a92e-202b-4383-a454-b42ea5c697ae.jpg"
                    alt="Пример рубленых букв на граните"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Классический стиль</h3>
                  <p className="text-sm text-muted-foreground">
                    Традиционный шрифт с равномерной глубиной прорезки
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted/50 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">С позолотой</h3>
                  <p className="text-sm text-muted-foreground">
                    Буквы с золотым покрытием для торжественного вида
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted/50 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-muted-foreground" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">С покраской</h3>
                  <p className="text-sm text-muted-foreground">
                    Контрастное оформление для лучшей читаемости
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold mb-6 text-slate-900">Заказать рубленые буквы</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обратитесь к нам для консультации и расчета стоимости. 
              Наши мастера помогут выбрать оптимальный вариант оформления
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" size={20} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">+7 (XXX) XXX-XX-XX</p>
                  <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 18:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" size={20} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold">info@example.com</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}