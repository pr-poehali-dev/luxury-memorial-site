import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const MonumentDesignPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const designServices = [
    {
      id: 1,
      title: 'Классический дизайн',
      description: 'Традиционные формы и орнаменты, проверенные временем',
      features: ['Строгие геометрические формы', 'Классическая гравировка', 'Традиционные символы'],
      price: 'от 15 000 ₽',
      category: 'classic'
    },
    {
      id: 2,
      title: 'Современный дизайн',
      description: 'Инновационные решения и современные технологии',
      features: ['Необычные формы', 'Фотогравировка', 'LED-подсветка'],
      price: 'от 25 000 ₽',
      category: 'modern'
    },
    {
      id: 3,
      title: 'Индивидуальный проект',
      description: 'Уникальный дизайн по вашим пожеланиям',
      features: ['Персональный подход', '3D-визуализация', 'Неограниченные правки'],
      price: 'от 35 000 ₽',
      category: 'individual'
    }
  ];

  const designSteps = [
    {
      step: 1,
      title: 'Консультация',
      description: 'Обсуждаем ваши пожелания и бюджет',
      icon: 'MessageCircle'
    },
    {
      step: 2,
      title: 'Эскиз',
      description: 'Создаем первичный эскиз памятника',
      icon: 'PenTool'
    },
    {
      step: 3,
      title: '3D-модель',
      description: 'Разрабатываем детальную 3D-визуализацию',
      icon: 'Box'
    },
    {
      step: 4,
      title: 'Согласование',
      description: 'Вносим правки и утверждаем финальный вариант',
      icon: 'CheckCircle'
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: 'Памятник из черного гранита',
      category: 'classic',
      image: '/api/placeholder/300/400'
    },
    {
      id: 2,
      title: 'Современный семейный памятник',
      category: 'modern',
      image: '/api/placeholder/300/400'
    },
    {
      id: 3,
      title: 'Индивидуальный дизайн с ангелом',
      category: 'individual',
      image: '/api/placeholder/300/400'
    },
    {
      id: 4,
      title: 'Классический памятник с крестом',
      category: 'classic',
      image: '/api/placeholder/300/400'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'classic', name: 'Классические' },
    { id: 'modern', name: 'Современные' },
    { id: 'individual', name: 'Индивидуальные' }
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Дизайн памятников
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создаем уникальные проекты памятников, сочетающие традиции и современные технологии. 
            Каждый памятник - это история жизни, воплощенная в камне.
          </p>
        </div>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Услуги дизайна</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Процесс создания</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={step.icon as any} size={24} className="text-white" />
                </div>
                <div className="mb-2">
                  <span className="text-sm text-primary font-semibold">Шаг {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Наши работы</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-gray-200 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Готовы создать уникальный памятник?</h2>
          <p className="text-xl mb-6 opacity-90">
            Свяжитесь с нами для бесплатной консультации и создания эскиза
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MonumentDesignPage;