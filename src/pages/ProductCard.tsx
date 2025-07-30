import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductCard() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('granite-black');
  const [selectedElements, setSelectedElements] = useState(['stela']);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    title: 'Классический вертикальный памятник',
    subtitle: 'Модель "Традиция"',
    basePrice: 45000,
    originalPrice: 52000,
    isNew: false,
    isPopular: true,
    rating: 4.8,
    reviewsCount: 24,
    images: [
      '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
      '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg'
    ],
    description: 'Элегантный классический памятник, выполненный в традиционных пропорциях. Идеально подходит для установки на любом кладбище.',
    features: [
      'Полированная поверхность',
      'Гравировка портрета включена',
      'Установка в стоимости',
      'Гарантия 10 лет'
    ],
    specifications: {
      'Высота': '100 см',
      'Ширина': '50 см',
      'Толщина': '8 см',
      'Вес': '120 кг',
      'Материал': 'Гранит габбро-диабаз',
      'Страна происхождения': 'Карелия, Россия',
      'Способ обработки': 'Полировка + термообработка'
    }
  };

  const materials = [
    { 
      id: 'granite-black', 
      name: 'Гранит чёрный (габбро-диабаз)', 
      price: 0, 
      color: '#2c2c2c',
      description: 'Классический чёрный гранит высочайшего качества'
    },
    { 
      id: 'granite-red', 
      name: 'Гранит красный (Лезники)', 
      price: 3000, 
      color: '#8b4513',
      description: 'Благородный красный гранит с натуральным рисунком'
    },
    { 
      id: 'granite-gray', 
      name: 'Гранит серый (Возрождение)', 
      price: 2000, 
      color: '#708090',
      description: 'Элегантный серый гранит с равномерной текстурой'
    },
    { 
      id: 'marble', 
      name: 'Мрамор белый (Каррара)', 
      price: 8000, 
      color: '#f5f5f5',
      description: 'Итальянский мрамор премиум-класса'
    }
  ];

  const monumentElements = [
    { 
      id: 'stela', 
      name: 'Стела', 
      size: '80×40×5 см',
      price: 25000,
      included: true,
      description: 'Основная часть памятника с портретом и надписями'
    },
    { 
      id: 'tumba', 
      name: 'Тумба', 
      size: '50×20×15 см',
      price: 8000,
      included: false,
      description: 'Подставка под стелу для большей устойчивости'
    },
    { 
      id: 'cvetnik', 
      name: 'Цветник', 
      size: '100×8×10×50 см',
      price: 12000,
      included: false,
      description: 'Ограждение для цветов и декоративных элементов'
    }
  ];

  const getCurrentPrice = () => {
    const materialPrice = materials.find(m => m.id === selectedMaterial)?.price || 0;
    const elementsPrice = monumentElements
      .filter(element => selectedElements.includes(element.id))
      .reduce((total, element) => total + element.price, 0);
    return elementsPrice + materialPrice;
  };

  const toggleElement = (elementId: string) => {
    if (elementId === 'stela') return; // Стела обязательна
    
    setSelectedElements(prev => 
      prev.includes(elementId) 
        ? prev.filter(id => id !== elementId)
        : [...prev, elementId]
    );
  };

  const relatedProducts = [
    { id: 2, title: 'Горизонтальный элегант', price: '38 000 ₽', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg' },
    { id: 3, title: 'Семейный комплекс', price: '85 000 ₽', image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg' },
    { id: 4, title: 'Мемориальная плита', price: '25 000 ₽', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <section className="pt-4 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img 
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {product.isNew && <Badge className="bg-green-500">Новинка</Badge>}
                  {product.isPopular && <Badge className="bg-orange-500">Популярный</Badge>}
                </div>
                <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">{product.subtitle}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon 
                        key={star}
                        name="Star" 
                        size={20} 
                        className={star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-muted-foreground"}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviewsCount} отзывов)
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-muted/50 p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {getCurrentPrice().toLocaleString()} ₽
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl line-through text-muted-foreground">
                      {product.originalPrice.toLocaleString()} ₽
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Цена включает изготовление, гравировку портрета и установку
                </p>
              </div>

              {/* Material Selection */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">Материал</label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger className="h-auto p-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map(material => (
                        <SelectItem key={material.id} value={material.id} className="p-3">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-6 h-6 rounded-full border-2 border-muted" 
                              style={{ backgroundColor: material.color }}
                            />
                            <div>
                              <div className="font-medium">{material.name}</div>
                              <div className="text-sm text-muted-foreground">{material.description}</div>
                              {material.price > 0 && (
                                <div className="text-sm font-medium text-primary">+{material.price.toLocaleString()} ₽</div>
                              )}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-3 block">Комплектация памятника</label>
                  <div className="space-y-3">
                    {monumentElements.map(element => (
                      <div 
                        key={element.id} 
                        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                          selectedElements.includes(element.id) 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-muted-foreground'
                        } ${element.id === 'stela' ? 'opacity-100' : ''}`}
                        onClick={() => toggleElement(element.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              selectedElements.includes(element.id)
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground'
                            }`}>
                              {selectedElements.includes(element.id) && (
                                <Icon name="Check" size={12} className="text-primary-foreground" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium flex items-center gap-2">
                                {element.name}
                                <span className="text-sm text-muted-foreground">({element.size})</span>
                                {element.id === 'stela' && (
                                  <Badge variant="secondary" className="text-xs">Обязательно</Badge>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">{element.description}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-primary">
                              {element.price.toLocaleString()} ₽
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Итого за комплектацию:</div>
                    <div className="font-semibold text-lg text-primary">
                      {monumentElements
                        .filter(element => selectedElements.includes(element.id))
                        .reduce((total, element) => total + element.price, 0)
                        .toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-lg">
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Заказать памятник
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">
                    <Icon name="Calculator" className="mr-2" size={18} />
                    Калькулятор стоимости
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Icon name="Download" className="mr-2" size={18} />
                    3D-модель
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-card border rounded-xl p-6">
                <h3 className="font-heading text-lg font-semibold mb-4">Что входит в стоимость</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Описание</TabsTrigger>
                <TabsTrigger value="specifications">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Описание товара</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Памятник изготавливается из высококачественного карельского гранита, который отличается 
                      исключительной прочностью и долговечностью. Поверхность обрабатывается до зеркального блеска, 
                      что обеспечивает превосходный внешний вид на долгие годы.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      В стоимость включена художественная гравировка портрета, выполненная нашими мастерами 
                      с многолетним опытом. Мы используем современное оборудование для создания 
                      фотореалистичных изображений высочайшего качества.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Технические характеристики</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-muted">
                          <span className="font-medium">{key}</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="font-heading">Общая оценка</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{product.rating}</div>
                        <div className="flex justify-center gap-1 mb-2">
                          {[1,2,3,4,5].map((star) => (
                            <Icon 
                              key={star}
                              name="Star" 
                              size={20} 
                              className={star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-muted-foreground"}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{product.reviewsCount} отзывов</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-6">
                    {[1,2,3].map((review) => (
                      <Card key={review}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                <Icon name="User" size={20} />
                              </div>
                              <div>
                                <p className="font-medium">Анна М.</p>
                                <div className="flex gap-1">
                                  {[1,2,3,4,5].map((star) => (
                                    <Icon key={star} name="Star" size={14} className="text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">2 недели назад</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">
                            Очень довольны качеством памятника. Мастера выполнили работу на высоком уровне, 
                            портрет получился очень похожим. Установили быстро и аккуратно.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Доставка и установка</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="production">
                        <AccordionTrigger>Сроки изготовления</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Стандартный срок изготовления памятника составляет 14-21 рабочий день с момента 
                            подтверждения заказа и получения предоплаты. В сезон высокой загруженности 
                            (весна-лето) сроки могут увеличиваться до 30 дней.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="delivery">
                        <AccordionTrigger>Доставка</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground mb-3">
                            Доставка осуществляется нашим транспортом по Москве и Московской области. 
                            Стоимость доставки зависит от удаленности кладбища:
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            <li>В пределах МКАД - бесплатно</li>
                            <li>До 30 км от МКАД - 3 000 ₽</li>
                            <li>До 50 км от МКАД - 5 000 ₽</li>
                            <li>Свыше 50 км - по договоренности</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="installation">
                        <AccordionTrigger>Установка</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Установка памятника включена в стоимость и выполняется нашими специалистами. 
                            Мы подготавливаем фундамент, устанавливаем памятник и проводим финальную обработку. 
                            На все работы предоставляется гарантия 10 лет.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h3 className="font-heading text-3xl font-bold mb-8 text-center">Похожие товары</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-lg">{product.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {product.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}