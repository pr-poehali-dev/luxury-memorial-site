import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useApp } from '@/contexts/AppContext';

export default function VerticalMonuments() {
  const { state, dispatch } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const monuments = [
    { id: 1, title: 'Классический вертикальный габбро', price: 45000, category: 'granite', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Габбро-диабаз', size: '100x50x8 см' },
    { id: 2, title: 'Элегант с крестом', price: 52000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Красный гранит', size: '110x55x8 см' },
    { id: 3, title: 'Строгий вертикальный', price: 38000, category: 'granite', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Серый гранit', size: '95x45x8 см' },
    { id: 4, title: 'Премиум с розами', price: 68000, category: 'granite', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Габбро-диабаз', size: '120x60x10 см' },
    { id: 5, title: 'Семейный высокий', price: 75000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Красный гранит', size: '130x65x10 см' },
    { id: 6, title: 'Мраморная классика', price: 85000, category: 'marble', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Белый мрамор', size: '105x50x8 см' },
    { id: 7, title: 'Габбро с ангелом', price: 92000, category: 'granite', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Габбро-диабаз', size: '125x60x10 см' },
    { id: 8, title: 'Эконом вертикальный', price: 32000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Серый гранит', size: '90x40x8 см' },
    { id: 9, title: 'Мраморный с цветами', price: 95000, category: 'marble', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Каррарский мрамор', size: '115x55x10 см' },
    { id: 10, title: 'Красный элитный', price: 78000, category: 'granite', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Красный гранит', size: '115x55x10 см' },
    { id: 11, title: 'Габбро стандарт', price: 42000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Габбро-диабаз', size: '100x50x8 см' },
    { id: 12, title: 'Мрамор с орнаментом', price: 105000, category: 'marble', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Белый мрамор', size: '120x55x10 см' },
    { id: 13, title: 'Серый классический', price: 39000, category: 'granite', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Серый гранит', size: '95x45x8 см' },
    { id: 14, title: 'Красный с крестом', price: 58000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Красный гранит', size: '110x55x8 см' },
    { id: 15, title: 'Габбро премиум', price: 85000, category: 'granite', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Габбро-диабаз', size: '125x65x10 см' },
    { id: 16, title: 'Мраморный строгий', price: 72000, category: 'marble', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Серый мрамор', size: '100x50x8 см' },
    { id: 17, title: 'Эконом серый', price: 35000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Серый гранит', size: '90x40x6 см' },
    { id: 18, title: 'Красный с розами', price: 82000, category: 'granite', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Красный гранит', size: '120x60x10 см' },
    { id: 19, title: 'Мрамор элитный', price: 125000, category: 'marble', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Каррарский мрамор', size: '130x65x12 см' },
    { id: 20, title: 'Габбро с орнаментом', price: 65000, category: 'granite', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Габбро-диабаз', size: '115x55x8 см' },
    { id: 21, title: 'Серый средний', price: 48000, category: 'granite', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Серый гранит', size: '105x50x8 см' },
    { id: 22, title: 'Красный семейный', price: 88000, category: 'granite', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg', material: 'Красный гранит', size: '125x65x10 см' },
    { id: 23, title: 'Мраморный с ангелом', price: 115000, category: 'marble', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg', material: 'Белый мрамор', size: '125x60x10 см' },
    { id: 24, title: 'Габбро бюджетный', price: 36000, category: 'granite', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg', material: 'Габбро-диабаз', size: '90x45x8 см' }
  ];

  const categories = [
    { id: 'all', name: 'Все памятники', count: monuments.length },
    { id: 'granite', name: 'Гранитные', count: monuments.filter(m => m.category === 'granite').length },
    { id: 'marble', name: 'Мраморные', count: monuments.filter(m => m.category === 'marble').length }
  ];

  const filteredMonuments = selectedCategory === 'all' 
    ? monuments 
    : monuments.filter(monument => monument.category === selectedCategory);

  const addToFavorites = (monumentId: number) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: monumentId });
  };

  const addToComparison = (monumentId: number) => {
    dispatch({ type: 'ADD_TO_COMPARISON', payload: monumentId });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-12 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">
              Вертикальные памятники
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Классические вертикальные памятники из гранита и мрамора. 
              Широкий выбор размеров и дизайнов для достойной памяти о ваших близких.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Модели</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Материала</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">от 32₽</div>
              <div className="text-sm text-muted-foreground">Тыс. руб.</div>
            </div>
            <div className="text-center bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">10</div>
              <div className="text-sm text-muted-foreground">Лет гарантии</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="relative"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMonuments.map(monument => (
              <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={monument.image}
                    alt={monument.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-heading text-lg leading-tight">
                      {monument.title}
                    </CardTitle>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => addToFavorites(monument.id)}
                      >
                        <Icon 
                          name="Heart" 
                          size={16} 
                          className={state.favorites.includes(monument.id) ? 'text-red-500 fill-current' : 'text-gray-400'} 
                        />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => addToComparison(monument.id)}
                      >
                        <Icon 
                          name="BarChart3" 
                          size={16} 
                          className={state.comparison.includes(monument.id) ? 'text-blue-500' : 'text-gray-400'} 
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {monument.material} • {monument.size}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {monument.price.toLocaleString()} ₽
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" className="w-full text-sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Получите персональное предложение
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы рассчитаем стоимость памятника с учётом ваших пожеланий
            </p>
          </div>

          <Card className="p-6 lg:p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя *</label>
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон *</label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="your@email.ru"
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Интересующий памятник</label>
                <select className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Выберите из каталога</option>
                  <option value="granite">Гранитные памятники</option>
                  <option value="marble">Мраморные памятники</option>
                  <option value="custom">Индивидуальный проект</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Дополнительные пожелания</label>
                <textarea
                  placeholder="Опишите ваши пожелания: размер, материал, дизайн, бюджет..."
                  rows={4}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="agreement" className="mt-1" required />
                <label htmlFor="agreement" className="text-sm text-muted-foreground">
                  Я согласен на обработку персональных данных и получение коммерческих предложений
                </label>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-medium">
                <Icon name="Send" size={18} className="mr-2" />
                Получить предложение
              </Button>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon name="Clock" size={16} className="text-green-600" />
                  <span className="font-semibold text-green-800">Ответим в течение часа</span>
                </div>
                <p className="text-sm text-green-700">
                  Бесплатная консультация • Расчёт стоимости • Примеры работ
                </p>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о вертикальных памятниках
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="materials" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Mountain" size={20} className="text-primary" />
                  Какой материал лучше выбрать для вертикального памятника?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Выбор материала зависит от ваших предпочтений и бюджета:</p>
                <div className="space-y-3">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Габбро-диабаз</h4>
                    <p className="text-sm">Самый прочный и популярный материал. Глубокий чёрный цвет, отлично подходит для портретов. Цена: от 32 000 ₽</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Красный гранит</h4>
                    <p className="text-sm">Благородный материал с естественным рисунком. Символизирует тепло и любовь. Цена: от 52 000 ₽</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Мрамор</h4>
                    <p className="text-sm">Элитный материал для эксклюзивных памятников. Белый или серый цвет. Цена: от 72 000 ₽</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sizes" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Ruler" size={20} className="text-primary" />
                  Какие размеры вертикальных памятников доступны?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Мы предлагаем стандартные и индивидуальные размеры:</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-foreground mb-2">Эконом</h4>
                    <p className="text-sm mb-2">90x40x6 см</p>
                    <p className="text-xs text-green-600">от 32 000 ₽</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-foreground mb-2">Стандарт</h4>
                    <p className="text-sm mb-2">100x50x8 см</p>
                    <p className="text-xs text-blue-600">от 45 000 ₽</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4 text-center">
                    <h4 className="font-semibold text-foreground mb-2">Премиум</h4>
                    <p className="text-sm mb-2">130x65x12 см</p>
                    <p className="text-xs text-purple-600">от 125 000 ₽</p>
                  </div>
                </div>
                <p className="mt-4 text-sm">Также изготавливаем памятники по индивидуальным размерам</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="engraving" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Camera" size={20} className="text-primary" />
                  Что включено в стоимость вертикального памятника?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">В базовую стоимость включено:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Стела из выбранного материала
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Тумба (подставка)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Гравировка ФИО и дат
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Простой орнамент
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Доставка и установка
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Фундамент и монтаж
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      Гарантия 10 лет
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Plus" size={16} className="text-blue-500" />
                      Портрет: +15 000 ₽
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delivery" className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                <div className="flex items-center gap-3">
                  <Icon name="Truck" size={20} className="text-primary" />
                  Как происходит доставка и установка?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                <p className="mb-4">Полный цикл от изготовления до установки:</p>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Изготовление', desc: '14-21 рабочий день в нашем цеху', icon: 'Hammer' },
                    { step: 2, title: 'Согласование', desc: 'Отправляем фото готового памятника', icon: 'Camera' },
                    { step: 3, title: 'Доставка', desc: 'Бесплатная доставка по Москве и области', icon: 'Truck' },
                    { step: 4, title: 'Установка', desc: 'Профессиональный монтаж за 1 день', icon: 'Settings' }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 p-3 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm">{item.desc}</p>
                      </div>
                      <Icon name={item.icon as any} size={20} className="text-primary mt-1" />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary/5 rounded-2xl p-6">
              <div className="text-center sm:text-left">
                <h4 className="font-heading text-xl font-semibold mb-2">Нужна консультация?</h4>
                <p className="text-muted-foreground">Поможем выбрать подходящий вертикальный памятник</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                <Icon name="Phone" size={16} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}