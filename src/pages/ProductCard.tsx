import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useApp } from '@/contexts/AppContext';

export default function ProductCard() {
  const { addToCart } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState('granite-black');
  const [selectedElements, setSelectedElements] = useState({
    stela: { enabled: true, size: 'standard' },
    tumba: { enabled: false, size: 'standard' },
    cvetnik: { enabled: false, size: 'standard' }
  });
  const [selectedServices, setSelectedServices] = useState<string[]>(['portrait-gravir', 'gravir-cvety']);
  const [quantity, setQuantity] = useState(1);
  const [customSize, setCustomSize] = useState({ width: 50, height: 100, thickness: 8 });
  const [showCalculator, setShowCalculator] = useState(false);

  const product = {
    id: 1,
    title: 'Классический вертикальный памятник',
    subtitle: 'Модель "Традиция"',
    basePrice: 0,
    originalPrice: 52000,
    isNew: false,
    isPopular: true,
    rating: 4.8,
    reviewsCount: 24,
    images: [
      'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
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
      pricePerM2: 12000,
      color: '#2c2c2c',
      description: 'Классический чёрный гранит высочайшего качества'
    },
    { 
      id: 'granite-red', 
      name: 'Гранит красный (Лезники)', 
      price: 3000,
      pricePerM2: 15000, 
      color: '#8b4513',
      description: 'Благородный красный гранит с натуральным рисунком'
    },
    { 
      id: 'granite-gray', 
      name: 'Гранит серый (Возрождение)', 
      price: 2000,
      pricePerM2: 13500, 
      color: '#708090',
      description: 'Элегантный серый гранит с равномерной текстурой'
    },
    { 
      id: 'marble', 
      name: 'Мрамор белый (Каррара)', 
      price: 8000,
      pricePerM2: 25000, 
      color: '#f5f5f5',
      description: 'Итальянский мрамор премиум-класса'
    }
  ];

  const monumentElements = {
    stela: {
      name: 'Стела',
      description: 'Основная часть памятника с портретом и надписями',
      required: true,
      sizes: [
        { id: 'small', name: '70×35×4 см', price: 22000, width: 70, height: 35, thickness: 4 },
        { id: 'standard', name: '80×40×5 см', price: 25000, width: 80, height: 40, thickness: 5 },
        { id: 'large', name: '90×45×6 см', price: 28000, width: 90, height: 45, thickness: 6 },
        { id: 'xl', name: '100×50×8 см', price: 32000, width: 100, height: 50, thickness: 8 }
      ]
    },
    tumba: {
      name: 'Тумба',
      description: 'Подставка под стелу для большей устойчивости',
      required: false,
      sizes: [
        { id: 'compact', name: '40×15×12 см', price: 6000, width: 40, height: 15, thickness: 12 },
        { id: 'standard', name: '50×20×15 см', price: 8000, width: 50, height: 20, thickness: 15 },
        { id: 'wide', name: '60×25×18 см', price: 10000, width: 60, height: 25, thickness: 18 }
      ]
    },
    cvetnik: {
      name: 'Цветник',
      description: 'Ограждение для цветов и декоративных элементов',
      required: false,
      sizes: [
        { id: 'small', name: '80×6×8×40 см', price: 9000, width: 80, height: 6, thickness: 8 },
        { id: 'standard', name: '100×8×10×50 см', price: 12000, width: 100, height: 8, thickness: 10 },
        { id: 'large', name: '120×10×12×60 см', price: 15000, width: 120, height: 10, thickness: 12 },
        { id: 'family', name: '150×12×15×70 см', price: 20000, width: 150, height: 12, thickness: 15 }
      ]
    }
  };

  const services = [
    { id: 'portrait-gravir', name: 'Портрет гравировка', price: 8000, category: 'Портрет' },
    { id: 'portrait-hand', name: 'Портрет ручной', price: 15000, category: 'Портрет' },
    { id: 'fio-gravir', name: 'ФИО гравировка', price: 2000, category: 'Текст' },
    { id: 'fio-skarpel', name: 'ФИО скарпель', price: 4000, category: 'Текст' },
    { id: 'fio-gold', name: 'ФИО сусальное золото', price: 6000, category: 'Текст' },
    { id: 'gravir-cross', name: 'Гравировка креста', price: 3000, category: 'Символы' },
    { id: 'gravir-cvety', name: 'Гравировка цветы', price: 0, category: 'Декор' },
    { id: 'gravir-epitafiya', name: 'Гравировка эпитафия', price: 0, category: 'Текст' },
    { id: 'gravir-vinetka', name: 'Гравировка виньетки', price: 2500, category: 'Декор' },
    { id: 'gravir-svechi', name: 'Гравировка свечи', price: 1500, category: 'Декор' },
    { id: 'gravir-ikona', name: 'Гравировка иконы', price: 5000, category: 'Символы' },
    { id: 'gravir-kartinka', name: 'Гравировка картинки', price: 3500, category: 'Декор' },
    { id: 'retush-photo', name: 'Ретушь фотографии', price: 1000, category: 'Обработка' },
    { id: 'protection', name: 'Защитное покрытие', price: 4000, category: 'Обработка' },
    { id: 'storage', name: 'Хранение на складе', price: 500, category: 'Услуги' }
  ];

  const calculateCustomPrice = () => {
    const selectedMaterialData = materials.find(m => m.id === selectedMaterial);
    const pricePerM2 = selectedMaterialData?.pricePerM2 || 12000;
    
    // Площадь в м²
    const area = (customSize.width * customSize.height) / 10000;
    const materialCost = Math.round(area * pricePerM2);
    
    // Базовая стоимость обработки
    const processingCost = Math.round(area * 8000);
    
    return materialCost + processingCost;
  };

  const getCurrentPrice = () => {
    if (showCalculator && customSize.width && customSize.height) {
      return calculateCustomPrice() + getServicesPrice();
    }

    const materialPrice = materials.find(m => m.id === selectedMaterial)?.price || 0;
    
    let elementsPrice = 0;
    Object.entries(selectedElements).forEach(([elementId, config]) => {
      if (config.enabled) {
        const element = monumentElements[elementId as keyof typeof monumentElements];
        const size = element.sizes.find(s => s.id === config.size);
        if (size) {
          elementsPrice += size.price;
        }
      }
    });
    
    return elementsPrice + materialPrice + getServicesPrice();
  };

  const getServicesPrice = () => {
    return services
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.price, 0);
  };

  const handleAddToCart = () => {
    const selectedMaterialData = materials.find(m => m.id === selectedMaterial);
    
    addToCart({
      id: product.id,
      title: product.title,
      price: getCurrentPrice(),
      image: product.images[0],
      category: 'vertical',
      quantity: quantity,
      selectedMaterial: selectedMaterialData?.name,
      selectedSize: 'custom'
    });
  };

  const toggleElement = (elementId: string) => {
    if (elementId === 'stela') return;
    
    setSelectedElements(prev => ({
      ...prev,
      [elementId]: {
        ...prev[elementId as keyof typeof prev],
        enabled: !prev[elementId as keyof typeof prev].enabled
      }
    }));
  };

  const updateElementSize = (elementId: string, sizeId: string) => {
    setSelectedElements(prev => ({
      ...prev,
      [elementId]: {
        ...prev[elementId as keyof typeof prev],
        size: sizeId
      }
    }));
  };

  const relatedProducts = [
    { id: 2, title: 'Горизонтальный элегант', price: '38 000 ₽', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg' },
    { id: 3, title: 'Семейный комплекс', price: '85 000 ₽', image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png' },
    { id: 4, title: 'Мемориальная плита', price: '25 000 ₽', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      <section className="pt-6 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-white to-slate-100 rounded-3xl overflow-hidden border-2 border-slate-200/50 shadow-2xl">
                  <img 
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Image Navigation */}
                <div className="flex justify-center gap-3 mt-6">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index 
                          ? 'border-primary shadow-lg scale-110' 
                          : 'border-slate-200 hover:border-slate-300 hover:scale-105'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={product.images[index]} 
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculator Toggle */}
              <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-blue-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-heading text-lg flex items-center gap-2">
                        <Icon name="Calculator" size={20} className="text-primary" />
                        Калькулятор размеров
                      </CardTitle>
                      <CardDescription>Рассчитайте стоимость индивидуальных размеров</CardDescription>
                    </div>
                    <Switch
                      checked={showCalculator}
                      onCheckedChange={setShowCalculator}
                    />
                  </div>
                </CardHeader>
                
                {showCalculator && (
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="width" className="text-sm font-medium">Ширина (см)</Label>
                          <Input
                            id="width"
                            type="number"
                            value={customSize.width}
                            onChange={(e) => setCustomSize(prev => ({ ...prev, width: Number(e.target.value) }))}
                            className="mt-1"
                            min="30"
                            max="200"
                          />
                        </div>
                        <div>
                          <Label htmlFor="height" className="text-sm font-medium">Высота (см)</Label>
                          <Input
                            id="height"
                            type="number"
                            value={customSize.height}
                            onChange={(e) => setCustomSize(prev => ({ ...prev, height: Number(e.target.value) }))}
                            className="mt-1"
                            min="50"
                            max="250"
                          />
                        </div>
                        <div>
                          <Label htmlFor="thickness" className="text-sm font-medium">Толщина (см)</Label>
                          <Input
                            id="thickness"
                            type="number"
                            value={customSize.thickness}
                            onChange={(e) => setCustomSize(prev => ({ ...prev, thickness: Number(e.target.value) }))}
                            className="mt-1"
                            min="4"
                            max="15"
                          />
                        </div>
                      </div>
                      
                      <div className="bg-white/80 rounded-xl p-4 border border-slate-200">
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span>Площадь:</span>
                          <span className="font-semibold">{((customSize.width * customSize.height) / 10000).toFixed(2)} м²</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span>Объем:</span>
                          <span className="font-semibold">{((customSize.width * customSize.height * customSize.thickness) / 1000000).toFixed(3)} м³</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between items-center font-bold text-primary">
                          <span>Стоимость по размерам:</span>
                          <span>{calculateCustomPrice().toLocaleString()} ₽</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {product.isNew && <Badge className="bg-gradient-to-r from-green-500 to-green-600 shadow-lg">Новинка</Badge>}
                  {product.isPopular && <Badge className="bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">Популярный</Badge>}
                </div>
                <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {product.title}
                </h1>
                <p className="text-xl text-slate-600 mb-4">{product.subtitle}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Icon 
                        key={star}
                        name="Star" 
                        size={20} 
                        className={star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"}
                      />
                    ))}
                    <span className="text-sm text-slate-600 ml-2">
                      {product.rating} ({product.reviewsCount} отзывов)
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Display */}
              <Card className="bg-gradient-to-r from-primary/5 via-blue-50 to-primary/5 border-2 border-primary/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-1">
                        {getCurrentPrice().toLocaleString()} ₽
                      </div>
                      {product.originalPrice && (
                        <div className="text-lg line-through text-slate-500">
                          {product.originalPrice.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600">Экономия</div>
                      <div className="text-lg font-semibold text-green-600">
                        {product.originalPrice ? (product.originalPrice - getCurrentPrice()).toLocaleString() : 0} ₽
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    ✓ Изготовление ✓ Гравировка портрета ✓ Установка ✓ Гарантия 10 лет
                  </p>
                </CardContent>
              </Card>

              {/* Material Selection */}
              <Card className="shadow-lg border-slate-200">
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-lg">Выбор материала</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger className="h-auto p-4 border-2 hover:border-primary/30 transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materials.map(material => (
                        <SelectItem key={material.id} value={material.id} className="p-4">
                          <div className="flex items-center gap-4">
                            <div 
                              className="w-8 h-8 rounded-full border-2 border-slate-300 shadow-inner" 
                              style={{ backgroundColor: material.color }}
                            />
                            <div className="flex-1">
                              <div className="font-semibold">{material.name}</div>
                              <div className="text-sm text-slate-600">{material.description}</div>
                              <div className="text-sm text-primary font-medium">
                                {showCalculator 
                                  ? `${material.pricePerM2.toLocaleString()} ₽/м²` 
                                  : material.price > 0 
                                    ? `+${material.price.toLocaleString()} ₽` 
                                    : 'Базовая стоимость'
                                }
                              </div>
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Elements Configuration */}
              {!showCalculator && (
                <Card className="shadow-lg border-slate-200">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-heading text-lg">Комплектация памятника</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(monumentElements).map(([elementId, element]) => {
                      const isEnabled = selectedElements[elementId as keyof typeof selectedElements].enabled;
                      const currentSize = selectedElements[elementId as keyof typeof selectedElements].size;
                      const currentSizeData = element.sizes.find(s => s.id === currentSize);
                      
                      return (
                        <div 
                          key={elementId} 
                          className={`border-2 rounded-xl p-4 transition-all duration-300 ${
                            isEnabled 
                              ? 'border-primary bg-gradient-to-r from-primary/5 to-blue-50 shadow-md' 
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <div 
                              className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all ${
                                isEnabled
                                  ? 'border-primary bg-primary shadow-lg'
                                  : 'border-slate-400 hover:border-slate-500'
                              } ${element.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                              onClick={() => !element.required && toggleElement(elementId)}
                            >
                              {isEnabled && (
                                <Icon name="Check" size={12} className="text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold flex items-center gap-2">
                                {element.name}
                                {element.required && (
                                  <Badge variant="secondary" className="text-xs">Обязательно</Badge>
                                )}
                              </div>
                              <div className="text-sm text-slate-600">{element.description}</div>
                            </div>
                            {isEnabled && currentSizeData && (
                              <div className="text-lg font-bold text-primary">
                                {currentSizeData.price.toLocaleString()} ₽
                              </div>
                            )}
                          </div>
                          
                          {isEnabled && (
                            <div className="ml-9">
                              <Select 
                                value={currentSize} 
                                onValueChange={(value) => updateElementSize(elementId, value)}
                              >
                                <SelectTrigger className="border-slate-300">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {element.sizes.map(size => (
                                    <SelectItem key={size.id} value={size.id}>
                                      <div className="flex justify-between items-center w-full min-w-[200px]">
                                        <span>{size.name}</span>
                                        <span className="text-primary font-semibold ml-4">
                                          {size.price.toLocaleString()} ₽
                                        </span>
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              )}

              {/* Services */}
              <Card className="shadow-lg border-slate-200">
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-lg">Дополнительные услуги</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2 max-h-60 overflow-y-auto pr-2">
                    {services.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      const isFree = service.price === 0;
                      
                      return (
                        <div 
                          key={service.id}
                          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                            isSelected ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                          }`}
                          onClick={() => {
                            setSelectedServices(prev => 
                              prev.includes(service.id) 
                                ? prev.filter(id => id !== service.id)
                                : [...prev, service.id]
                            );
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                              isSelected
                                ? 'border-primary bg-primary'
                                : 'border-slate-400'
                            }`}>
                              {isSelected && (
                                <Icon name="Check" size={10} className="text-white" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-slate-500">{service.category}</div>
                            </div>
                          </div>
                          <div className="font-semibold">
                            {isFree ? (
                              <span className="text-green-600">Бесплатно</span>
                            ) : (
                              <span className="text-primary">{service.price.toLocaleString()} ₽</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Separator className="my-4" />
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-600">Итого за услуги:</span>
                    <span className="font-bold text-lg text-primary">
                      {getServicesPrice().toLocaleString()} ₽
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 h-14 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    В корзину • {getCurrentPrice().toLocaleString()} ₽
                  </Button>
                  <Button variant="outline" size="icon" className="h-14 w-14 border-2 hover:border-primary/50">
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="border-2 hover:border-primary/50">
                    <Icon name="Phone" className="mr-2" size={16} />
                    Консультация
                  </Button>
                  <Button variant="outline" className="border-2 hover:border-primary/50">
                    <Icon name="Download" className="mr-2" size={16} />
                    3D-модель
                  </Button>
                </div>
              </div>

              {/* Features */}
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold mb-4 text-green-800">Что входит в стоимость</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name="CheckCircle" size={16} className="text-green-600" />
                        <span className="text-green-800">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4 h-12 bg-slate-100 border border-slate-200">
                <TabsTrigger value="description" className="font-medium">Описание</TabsTrigger>
                <TabsTrigger value="specifications" className="font-medium">Характеристики</TabsTrigger>
                <TabsTrigger value="reviews" className="font-medium">Отзывы</TabsTrigger>
                <TabsTrigger value="delivery" className="font-medium">Доставка</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Описание товара</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-slate-700 leading-relaxed text-lg mb-4">
                      {product.description}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Памятник изготавливается из высококачественного карельского гранита, который отличается 
                      исключительной прочностью и долговечностью. Поверхность обрабатывается до зеркального блеска, 
                      что обеспечивает превосходный внешний вид на долгие годы.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      В стоимость включена художественная гравировка портрета, выполненная нашими мастерами 
                      с многолетним опытом. Мы используем современное оборудование для создания 
                      фотореалистичных изображений высочайшего качества.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specifications" className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Технические характеристики</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-3 border-b border-slate-200">
                          <span className="font-semibold text-slate-700">{key}</span>
                          <span className="text-slate-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-heading text-xl">Общая оценка</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-5xl font-bold text-primary mb-4">{product.rating}</div>
                      <div className="flex justify-center gap-1 mb-4">
                        {[1,2,3,4,5].map((star) => (
                          <Icon 
                            key={star}
                            name="Star" 
                            size={24} 
                            className={star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"}
                          />
                        ))}
                      </div>
                      <p className="text-slate-600">{product.reviewsCount} отзывов</p>
                    </CardContent>
                  </Card>
                  
                  <div className="lg:col-span-2 space-y-6">
                    {[1,2,3].map((review) => (
                      <Card key={review} className="shadow-lg">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-100 rounded-full flex items-center justify-center">
                                <Icon name="User" size={24} />
                              </div>
                              <div>
                                <p className="font-semibold">Анна М.</p>
                                <div className="flex gap-1">
                                  {[1,2,3,4,5].map((star) => (
                                    <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-sm text-slate-500">2 недели назад</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-700 leading-relaxed">
                            Очень довольны качеством памятника. Мастера выполнили работу на высоком уровне, 
                            портрет получился очень похожим. Установили быстро и аккуратно.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">Доставка и установка</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                        <Icon name="Clock" size={32} className="text-blue-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-blue-900 mb-2">Сроки изготовления</h4>
                        <p className="text-blue-700 text-sm">14-21 рабочий день</p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                        <Icon name="Truck" size={32} className="text-green-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-green-900 mb-2">Доставка</h4>
                        <p className="text-green-700 text-sm">По Москве и МО</p>
                      </div>
                      <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                        <Icon name="Shield" size={32} className="text-purple-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-purple-900 mb-2">Гарантия</h4>
                        <p className="text-purple-700 text-sm">10 лет на все работы</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="font-heading text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Похожие товары
              </h3>
              <p className="text-lg text-slate-600">Другие памятники, которые могут вам понравиться</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 bg-gradient-to-br from-white to-slate-50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="font-heading text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{product.title}</CardTitle>
                    <CardDescription className="text-xl font-bold text-primary">
                      {product.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Icon name="Eye" className="mr-2" size={18} />
                      Подробнее
                    </Button>
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