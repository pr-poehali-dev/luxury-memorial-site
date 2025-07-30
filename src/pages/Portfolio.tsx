import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Классический вертикальный памятник',
      category: 'vertical',
      location: 'Троекуровское кладбище',
      year: '2024',
      material: 'Габбро-диабаз',
      price: '45 000 ₽',
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      description: 'Элегантный памятник с портретом и эпитафией',
      features: ['Портрет гравировка', 'Эпитафия', 'Цветы декор']
    },
    {
      id: 2,
      title: 'Горизонтальный мемориал',
      category: 'horizontal',
      location: 'Балашихинское кладбище',
      year: '2024',
      material: 'Карельский гранит',
      price: '85 000 ₽',
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      description: 'Представительный горизонтальный памятник',
      features: ['Большая площадь', 'Золочение', 'Цветник']
    },
    {
      id: 3,
      title: 'Семейный мемориальный комплекс',
      category: 'complex',
      location: 'Кунцевское кладбище',
      year: '2023',
      material: 'Гранит Возрождение',
      price: '180 000 ₽',
      image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
      description: 'Масштабный семейный комплекс с благоустройством',
      features: ['Двойной памятник', 'Ограда', 'Скамейка', 'Плитка']
    },
    {
      id: 4,
      title: 'Эксклюзивный художественный памятник',
      category: 'exclusive',
      location: 'Новодевичье кладбище',
      year: '2023',
      material: 'Импортный гранит',
      price: '320 000 ₽',
      image: '/img/eb1d44c1-99b8-4397-88bb-fb4436f2d9c7.jpg',
      description: 'Уникальный проект с художественной резьбой',
      features: ['Авторский дизайн', 'Резьба по камню', 'Позолота']
    },
    {
      id: 5,
      title: 'Детский памятник с ангелом',
      category: 'children',
      location: 'Троекуровское кладбище',
      year: '2024',
      material: 'Белый мрамор',
      price: '65 000 ₽',
      image: '/img/9b9a4a6a-509a-455c-b99f-4938bb1485e5.jpg',
      description: 'Нежный детский памятник из белого мрамора',
      features: ['Фигура ангела', 'Мягкие формы', 'Деликатная гравировка']
    },
    {
      id: 6,
      title: 'Благоустройство участка',
      category: 'improvement',
      location: 'Хованское кладбище',
      year: '2024',
      material: 'Гранитная плитка',
      price: '120 000 ₽',
      image: '/img/f6603dc6-7fa6-41ad-a5ab-5dc901738354.jpg',
      description: 'Полное благоустройство с плиткой и оградой',
      features: ['Гранитная плитка', 'Металлическая ограда', 'Цветники']
    },
    {
      id: 7,
      title: 'Двойной гранитный памятник',
      category: 'double',
      location: 'Митинское кладбище',
      year: '2023',
      material: 'Габбро-диабаз',
      price: '95 000 ₽',
      image: '/img/45084074-cadb-4ec1-9ec4-2cca82071a68.jpg',
      description: 'Памятник для супружеской пары',
      features: ['Два портрета', 'Общая эпитафия', 'Цветочный орнамент']
    },
    {
      id: 8,
      title: 'Современный минималистичный памятник',
      category: 'vertical',
      location: 'Ваганьковское кладбище',
      year: '2024',
      material: 'Черный гранит',
      price: '38 000 ₽',
      image: '/img/e2d37bd6-585d-4c07-8f3c-5fcb8d1b9831.jpg',
      description: 'Лаконичный дизайн в современном стиле',
      features: ['Минимализм', 'Четкие линии', 'Качественная полировка']
    },
    {
      id: 9,
      title: 'Мемориал с колоннами',
      category: 'exclusive',
      location: 'Донское кладбище',
      year: '2023',
      material: 'Мрамор Каррара',
      price: '450 000 ₽',
      image: '/img/9111b21b-5c7b-4972-8b93-b5d287b07220.jpg',
      description: 'Величественный мемориал в классическом стиле',
      features: ['Колонны', 'Барельефы', 'Мраморная скульптура']
    }
  ];

  const categories = [
    { id: 'all', name: 'Все работы', count: portfolioItems.length },
    { id: 'vertical', name: 'Вертикальные', count: portfolioItems.filter(item => item.category === 'vertical').length },
    { id: 'horizontal', name: 'Горизонтальные', count: portfolioItems.filter(item => item.category === 'horizontal').length },
    { id: 'complex', name: 'Комплексы', count: portfolioItems.filter(item => item.category === 'complex').length },
    { id: 'exclusive', name: 'Эксклюзив', count: portfolioItems.filter(item => item.category === 'exclusive').length },
    { id: 'children', name: 'Детские', count: portfolioItems.filter(item => item.category === 'children').length },
    { id: 'double', name: 'Двойные', count: portfolioItems.filter(item => item.category === 'double').length },
    { id: 'improvement', name: 'Благоустройство', count: portfolioItems.filter(item => item.category === 'improvement').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [selectedImage]);

  const stats = [
    { icon: 'Camera', value: '500+', label: 'Выполненных работ' },
    { icon: 'Calendar', value: '15+', label: 'Лет опыта' },
    { icon: 'MapPin', value: '50+', label: 'Кладбищ Москвы' },
    { icon: 'Users', value: '1000+', label: 'Довольных клиентов' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Портфолио наших работ
              </Badge>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
                Фото наших работ
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Более 500 выполненных проектов на кладбищах Москвы и области. 
                Каждая работа — это уникальный памятник, созданный с любовью и профессионализмом.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon name={stat.icon as any} className="text-primary" size={24} />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать консультацию
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {/* Category Filter */}
              <div className="mb-12">
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full h-auto p-1 bg-muted/50">
                    {categories.map((category) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="flex flex-col gap-1 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        <span className="text-xs font-medium truncate">{category.name}</span>
                        <Badge variant="secondary" className="text-xs px-1 py-0">
                          {category.count}
                        </Badge>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-zoom-in"
                        onClick={() => openModal(item.image)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="MapPin" size={14} />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={14} />
                          <span className="text-sm">{item.year}</span>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                        onClick={() => openModal(item.image)}
                      >
                        <Icon name="Maximize2" size={16} />
                      </Button>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading text-lg font-semibold leading-tight pr-2">
                          {item.title}
                        </h3>
                        <Badge 
                          variant={item.category === 'exclusive' ? 'default' : 'secondary'}
                          className="text-xs shrink-0"
                        >
                          {item.category === 'exclusive' ? 'Эксклюзив' : 
                           item.category === 'children' ? 'Детский' :
                           item.category === 'double' ? 'Двойной' :
                           item.category === 'complex' ? 'Комплекс' :
                           item.category === 'improvement' ? 'Благоустройство' :
                           'Стандарт'}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Материал:</span>
                          <span className="font-medium">{item.material}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Стоимость:</span>
                          <span className="font-bold text-primary">{item.price}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button 
                        className="w-full group/btn"
                        onClick={() => openModal(item.image)}
                      >
                        <Icon name="Eye" className="mr-2 group-hover/btn:scale-110 transition-transform" size={16} />
                        Посмотреть детально
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-6">
                Хотите такой же памятник?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Каждая наша работа уникальна. Мы создадим для вас памятник, 
                который будет достойно хранить память о близком человеке.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Обсудить проект
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать каталог
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage}
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain animate-in zoom-in-75 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 right-4 z-10"
              onClick={closeModal}
            >
              <Icon name="X" size={20} />
            </Button>
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <p className="text-sm opacity-75">
                Нажмите ESC или кликните вне изображения, чтобы закрыть
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}