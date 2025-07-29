import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import { useApp } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  
  const { addToCart, addToFavorites, addToComparison, isInFavorites, isInComparison } = useApp();

  const categories = [
    { id: 'all', name: 'Все категории', count: 45 },
    { id: 'vertical', name: 'Вертикальные', count: 18 },
    { id: 'horizontal', name: 'Горизонтальные', count: 12 },
    { id: 'complex', name: 'Комплексы', count: 8 },
    { id: 'plaques', name: 'Мемориальные плиты', count: 7 }
  ];

  const materials = [
    { id: 'all', name: 'Все материалы' },
    { id: 'granite-black', name: 'Гранит чёрный' },
    { id: 'granite-red', name: 'Гранит красный' },
    { id: 'granite-gray', name: 'Гранит серый' },
    { id: 'marble', name: 'Мрамор' },
    { id: 'bronze', name: 'Бронза' }
  ];

  const priceRanges = [
    { id: 'all', name: 'Любая цена' },
    { id: 'budget', name: 'До 30 000 ₽' },
    { id: 'medium', name: '30 000 - 60 000 ₽' },
    { id: 'premium', name: '60 000 - 100 000 ₽' },
    { id: 'luxury', name: 'Свыше 100 000 ₽' }
  ];

  const monuments = [
    {
      id: 1,
      title: 'Классический вертикальный №1',
      subtitle: 'Гранит габбро-диабаз',
      price: '45 000 ₽',
      originalPrice: '52 000 ₽',
      image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
      material: 'granite-black',
      category: 'vertical',
      dimensions: '100×50×8 см',
      isPopular: true,
      isNew: false
    },
    {
      id: 2,
      title: 'Элегант горизонтальный',
      subtitle: 'Белый мрамор Каррара',
      price: '38 000 ₽',
      originalPrice: null,
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      material: 'marble',
      category: 'horizontal',
      dimensions: '80×40×6 см',
      isPopular: false,
      isNew: true
    },
    {
      id: 3,
      title: 'Мемориальная бронзовая плита',
      subtitle: 'Художественная бронза',
      price: '25 000 ₽',
      originalPrice: null,
      image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
      material: 'bronze',
      category: 'plaques',
      dimensions: '60×40×3 см',
      isPopular: false,
      isNew: false
    },
    {
      id: 4,
      title: 'Классический вертикальный №2',
      subtitle: 'Красный гранит Лезники',
      price: '48 000 ₽',
      originalPrice: null,
      image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
      material: 'granite-red',
      category: 'vertical',
      dimensions: '110×55×10 см',
      isPopular: true,
      isNew: false
    },
    {
      id: 5,
      title: 'Семейный комплекс "Единство"',
      subtitle: 'Серый гранит Возрождение',
      price: '85 000 ₽',
      originalPrice: '95 000 ₽',
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      material: 'granite-gray',
      category: 'complex',
      dimensions: '150×80×12 см',
      isPopular: false,
      isNew: true
    },
    {
      id: 6,
      title: 'Стандартный горизонтальный',
      subtitle: 'Гранит габбро-диабаз',
      price: '32 000 ₽',
      originalPrice: null,
      image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
      material: 'granite-black',
      category: 'horizontal',
      dimensions: '70×35×5 см',
      isPopular: false,
      isNew: false
    }
  ];

  const filteredMonuments = monuments.filter(monument => {
    const categoryMatch = selectedCategory === 'all' || monument.category === selectedCategory;
    const materialMatch = selectedMaterial === 'all' || monument.material === selectedMaterial;
    
    let priceMatch = true;
    if (selectedPrice !== 'all') {
      const price = parseInt(monument.price.replace(/[^\d]/g, ''));
      switch (selectedPrice) {
        case 'budget':
          priceMatch = price <= 30000;
          break;
        case 'medium':
          priceMatch = price > 30000 && price <= 60000;
          break;
        case 'premium':
          priceMatch = price > 60000 && price <= 100000;
          break;
        case 'luxury':
          priceMatch = price > 100000;
          break;
      }
    }
    
    return categoryMatch && materialMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="pt-4 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Каталог памятников
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 45 готовых моделей памятников из премиальных материалов. 
              Возможность индивидуального изготовления по вашему проекту.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Content */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar with filters */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Категории</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {categories.map(category => (
                    <div
                      key={category.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="font-medium">{category.name}</span>
                      <Badge variant={selectedCategory === category.id ? "secondary" : "outline"}>
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Материал</label>
                    <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {materials.map(material => (
                          <SelectItem key={material.id} value={material.id}>
                            {material.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Цена</label>
                    <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {priceRanges.map(range => (
                          <SelectItem key={range.id} value={range.id}>
                            {range.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedMaterial('all');
                      setSelectedPrice('all');
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </CardContent>
              </Card>

              {/* Help Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center gap-2">
                    <Icon name="HelpCircle" size={24} className="text-primary" />
                    Нужна помощь?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Наши специалисты помогут подобрать подходящий памятник и рассчитают стоимость
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Получить консультацию
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Results header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h2 className="font-heading text-2xl font-semibold">
                    Найдено: {filteredMonuments.length} памятников
                  </h2>
                </div>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    <SelectItem value="newest">Сначала новые</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredMonuments.map(monument => (
                  <Card key={monument.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={monument.image}
                        alt={monument.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        {monument.isNew && (
                          <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
                        )}
                        {monument.isPopular && (
                          <Badge className="bg-orange-500 hover:bg-orange-600">Популярный</Badge>
                        )}
                      </div>
                      {monument.originalPrice && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="destructive">Скидка</Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="font-heading text-lg line-clamp-1">
                        {monument.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {monument.subtitle}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Размеры:</span>
                        <span className="font-medium">{monument.dimensions}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-primary">{monument.price}</span>
                          {monument.originalPrice && (
                            <span className="text-lg line-through text-muted-foreground">
                              {monument.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary/90"
                          onClick={() => addToCart({
                            ...monument,
                            quantity: 1,
                            selectedMaterial: 'granite',
                            selectedSize: 'standard'
                          })}
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => addToFavorites(monument)}
                          className={isInFavorites(monument.id) ? "text-red-500" : ""}
                        >
                          <Icon 
                            name="Heart" 
                            size={18} 
                            className={isInFavorites(monument.id) ? "fill-current" : ""} 
                          />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon"
                          onClick={() => addToComparison(monument)}
                          className={isInComparison(monument.id) ? "text-blue-500" : ""}
                        >
                          <Icon name="BarChart3" size={18} />
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <Link to={`/product/${monument.id}`}>
                            <Icon name="Eye" size={18} />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No results */}
              {filteredMonuments.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    Не найдено памятников по выбранным фильтрам
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Попробуйте изменить параметры поиска или сбросить фильтры
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedMaterial('all');
                      setSelectedPrice('all');
                    }}
                  >
                    Сбросить фильтры
                  </Button>
                </div>
              )}

              {/* Custom order banner */}
              <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-2xl">
                    Не нашли подходящий памятник?
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Мы изготовим памятник по вашему индивидуальному проекту
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex flex-col items-center">
                      <Icon name="PenTool" size={32} className="text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Индивидуальный дизайн</h4>
                      <p className="text-sm text-muted-foreground">Создадим уникальный проект специально для вас</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Icon name="Gem" size={32} className="text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Премиальные материалы</h4>
                      <p className="text-sm text-muted-foreground">Используем только лучшие сорта гранита и мрамора</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Icon name="Clock" size={32} className="text-primary mb-3" />
                      <h4 className="font-semibold mb-2">Быстрое изготовление</h4>
                      <p className="text-sm text-muted-foreground">Выполним заказ в течение 14-21 дня</p>
                    </div>
                  </div>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                    Заказать индивидуальный памятник
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Мемориальная студия. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}