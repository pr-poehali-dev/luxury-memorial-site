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
  const [selectedServices, setSelectedServices] = useState<string[]>(['gravir-epitafiya', 'gravir-cvety']);
  const [quantity, setQuantity] = useState(1);

  const getTotalPrice = () => {
    const selectedMaterialData = materials.find(m => m.id === selectedMaterial);
    const materialPrice = selectedMaterialData?.price || 0;
    
    const elementsPrice = Object.entries(selectedElements)
      .filter(([, config]) => config.enabled)
      .reduce((total, [elementId, config]) => {
        const element = monumentElements[elementId as keyof typeof monumentElements];
        const size = element.sizes.find(s => s.id === config.size);
        return total + (size?.price || 0);
      }, 0);
    
    const servicesPrice = [
      { id: 'portrait-gravir', price: 8000 },
      { id: 'portrait-hand', price: 15000 },
      { id: 'fio-gravir', price: 2000 },
      { id: 'fio-skarpel', price: 4000 },
      { id: 'fio-gold', price: 6000 },
      { id: 'gravir-cross', price: 3000 },
      { id: 'gravir-cvety', price: 0 },
      { id: 'gravir-epitafiya', price: 0 },
      { id: 'gravir-vinetka', price: 2500 },
      { id: 'gravir-svechi', price: 1500 },
      { id: 'gravir-ikona', price: 5000 },
      { id: 'gravir-kartinka', price: 3500 },
      { id: 'retush-photo', price: 1000 },
      { id: 'protection', price: 4000 },
      { id: 'storage', price: 500 }
    ]
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.price, 0);
    
    return product.basePrice + materialPrice + elementsPrice + servicesPrice;
  };

  const handleAddToCart = () => {
    const selectedMaterialData = materials.find(m => m.id === selectedMaterial);
    
    addToCart({
      id: product.id,
      title: product.title,
      price: getTotalPrice(),
      image: product.images[0],
      category: 'vertical',
      quantity: quantity,
      selectedMaterial: selectedMaterialData?.name,
      selectedSize: 'standard'
    });
  };

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

  const monumentElements = {
    stela: {
      name: 'Стела',
      description: 'Основная часть памятника с портретом и надписями',
      required: true,
      sizes: [
        { id: 'small', name: '70×35×4 см', price: 22000 },
        { id: 'standard', name: '80×40×5 см', price: 25000 },
        { id: 'large', name: '90×45×6 см', price: 28000 },
        { id: 'xl', name: '100×50×8 см', price: 32000 }
      ]
    },
    tumba: {
      name: 'Тумба',
      description: 'Подставка под стелу для большей устойчивости',
      required: false,
      sizes: [
        { id: 'compact', name: '40×15×12 см', price: 6000 },
        { id: 'standard', name: '50×20×15 см', price: 8000 },
        { id: 'wide', name: '60×25×18 см', price: 10000 }
      ]
    },
    cvetnik: {
      name: 'Цветник',
      description: 'Ограждение для цветов и декоративных элементов',
      required: false,
      sizes: [
        { id: 'small', name: '80×6×8×40 см', price: 9000 },
        { id: 'standard', name: '100×8×10×50 см', price: 12000 },
        { id: 'large', name: '120×10×12×60 см', price: 15000 },
        { id: 'family', name: '150×12×15×70 см', price: 20000 }
      ]
    }
  };

  const getCurrentPrice = () => {
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
    
    const servicesPrice = [
      { id: 'portrait-gravir', price: 8000 },
      { id: 'portrait-hand', price: 15000 },
      { id: 'fio-gravir', price: 2000 },
      { id: 'fio-skarpel', price: 4000 },
      { id: 'fio-gold', price: 6000 },
      { id: 'gravir-cross', price: 3000 },
      { id: 'gravir-cvety', price: 0 },
      { id: 'gravir-epitafiya', price: 0 },
      { id: 'gravir-vinetka', price: 2500 },
      { id: 'gravir-svechi', price: 1500 },
      { id: 'gravir-ikona', price: 5000 },
      { id: 'gravir-kartinka', price: 3500 },
      { id: 'retush-photo', price: 1000 },
      { id: 'protection', price: 4000 },
      { id: 'storage', price: 500 }
    ]
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.price, 0);
    
    return elementsPrice + materialPrice + servicesPrice;
  };

  const toggleElement = (elementId: string) => {
    if (elementId === 'stela') return; // Стела обязательна
    
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
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <section className="pt-6 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative group">
                <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden border shadow-lg">
                  <img 
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Image Navigation */}
                <div className="flex justify-center gap-2 mt-4">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        selectedImage === index 
                          ? 'bg-primary scale-125 shadow-lg' 
                          : 'bg-muted hover:bg-muted-foreground/30'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Additional Services */}
              <div className="bg-gradient-to-br from-slate-50 to-white border rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon name="Palette" size={16} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-base">Дополнительное оформление</h3>
                </div>
                <div className="space-y-2 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
                  {[
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
                  ].map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    const isFree = service.price === 0;
                    
                    return (
                      <div 
                        key={service.id}
                        className={`group flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md ${
                          isSelected 
                            ? 'border-primary bg-gradient-to-r from-primary/5 to-blue-50 shadow-sm' 
                            : 'border-slate-200 hover:border-primary/30 hover:bg-slate-50'
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
                          <div className={`relative w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? 'border-primary bg-primary shadow-lg scale-110'
                              : 'border-slate-300 group-hover:border-primary/50'
                          }`}>
                            {isSelected && (
                              <Icon name="Check" size={12} className="text-white" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-800">{service.name}</div>
                            <div className="text-xs text-slate-500">{service.category}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          {isFree ? (
                            <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                              Бесплатно
                            </div>
                          ) : (
                            <div className={`text-sm font-bold transition-colors ${
                              isSelected ? 'text-primary' : 'text-slate-700'
                            }`}>
                              {service.price.toLocaleString()} ₽
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Icon name="Calculator" size={16} className="text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">Итого за оформление:</span>
                    </div>
                    <div className="text-lg font-bold text-primary bg-white px-3 py-1 rounded-lg shadow-sm">
                      {[
                        { id: 'portrait-gravir', price: 8000 },
                        { id: 'portrait-hand', price: 15000 },
                        { id: 'fio-gravir', price: 2000 },
                        { id: 'fio-skarpel', price: 4000 },
                        { id: 'fio-gold', price: 6000 },
                        { id: 'gravir-cross', price: 3000 },
                        { id: 'gravir-cvety', price: 0 },
                        { id: 'gravir-epitafiya', price: 0 },
                        { id: 'gravir-vinetka', price: 2500 },
                        { id: 'gravir-svechi', price: 1500 },
                        { id: 'gravir-ikona', price: 5000 },
                        { id: 'gravir-kartinka', price: 3500 },
                        { id: 'retush-photo', price: 1000 },
                        { id: 'protection', price: 4000 },
                        { id: 'storage', price: 500 }
                      ]
                        .filter(service => selectedServices.includes(service.id))
                        .reduce((total, service) => total + service.price, 0)
                        .toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Product Header */}
              <div className="bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  {product.isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 shadow-md">
                      <Icon name="Sparkles" size={12} className="mr-1" />
                      Новинка
                    </Badge>
                  )}
                  {product.isPopular && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 shadow-md">
                      <Icon name="TrendingUp" size={12} className="mr-1" />
                      Популярный
                    </Badge>
                  )}
                </div>
                
                <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  {product.title}
                </h1>
                <p className="text-xl text-slate-600 mb-4 font-medium">{product.subtitle}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Icon 
                          key={star}
                          name="Star" 
                          size={18} 
                          className={star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 font-medium">
                      {product.rating} ({product.reviewsCount} отзывов)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon name="Shield" size={16} className="text-green-500" />
                    Гарантия 10 лет
                  </div>
                </div>
              </div>

              {/* Price Calculator */}
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 border border-primary/20 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <Icon name="Calculator" size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">Калькулятор стоимости</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200">
                    <div>
                      <div className="text-sm text-slate-600">Итоговая стоимость</div>
                      <div className="text-xs text-slate-500">включает изготовление, гравировку и установку</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">
                        {getCurrentPrice().toLocaleString()} ₽
                      </div>
                      {product.originalPrice && (
                        <div className="text-lg line-through text-slate-400">
                          {product.originalPrice.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                      <span className="text-slate-600">Базовая стоимость</span>
                      <span className="font-medium">{product.basePrice.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                      <span className="text-slate-600">Комплектация</span>
                      <span className="font-medium text-primary">
                        +{Object.entries(selectedElements)
                          .filter(([, config]) => config.enabled)
                          .reduce((total, [elementId, config]) => {
                            const element = monumentElements[elementId as keyof typeof monumentElements];
                            const size = element.sizes.find(s => s.id === config.size);
                            return total + (size?.price || 0);
                          }, 0)
                          .toLocaleString()} ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                      <span className="text-slate-600">Материал</span>
                      <span className="font-medium text-primary">
                        +{materials.find(m => m.id === selectedMaterial)?.price.toLocaleString() || 0} ₽
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white/50 rounded-lg">
                      <span className="text-slate-600">Доп. оформление</span>
                      <span className="font-medium text-primary">
                        +{[
                          { id: 'portrait-gravir', price: 8000 },
                          { id: 'portrait-hand', price: 15000 },
                          { id: 'fio-gravir', price: 2000 },
                          { id: 'fio-skarpel', price: 4000 },
                          { id: 'fio-gold', price: 6000 },
                          { id: 'gravir-cross', price: 3000 },
                          { id: 'gravir-cvety', price: 0 },
                          { id: 'gravir-epitafiya', price: 0 },
                          { id: 'gravir-vinetka', price: 2500 },
                          { id: 'gravir-svechi', price: 1500 },
                          { id: 'gravir-ikona', price: 5000 },
                          { id: 'gravir-kartinka', price: 3500 },
                          { id: 'retush-photo', price: 1000 },
                          { id: 'protection', price: 4000 },
                          { id: 'storage', price: 500 }
                        ]
                          .filter(service => selectedServices.includes(service.id))
                          .reduce((total, service) => total + service.price, 0)
                          .toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-primary/20">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Icon name="Info" size={16} className="text-blue-500" />
                      <span>Цена может изменяться в зависимости от сложности работ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Material Selection */}
              <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Gem" size={18} className="text-slate-600" />
                    <label className="text-sm font-semibold text-slate-800">Выбор материала</label>
                  </div>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger className="h-auto p-4 border-2 hover:border-primary/50 transition-colors">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="w-full">
                      {materials.map(material => (
                        <SelectItem key={material.id} value={material.id} className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div 
                                className="w-8 h-8 rounded-full border-2 border-white shadow-md" 
                                style={{ backgroundColor: material.color }}
                              />
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-slate-800">{material.name}</div>
                              <div className="text-sm text-slate-600">{material.description}</div>
                              {material.price > 0 && (
                                <div className="text-sm font-bold text-primary">+{material.price.toLocaleString()} ₽</div>
                              )}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Package" size={18} className="text-slate-600" />
                    <label className="text-sm font-semibold text-slate-800">Комплектация памятника</label>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(monumentElements).map(([elementId, element]) => {
                      const isEnabled = selectedElements[elementId as keyof typeof selectedElements].enabled;
                      const currentSize = selectedElements[elementId as keyof typeof selectedElements].size;
                      const currentSizeData = element.sizes.find(s => s.id === currentSize);
                      
                      return (
                        <div 
                          key={elementId} 
                          className={`group border-2 rounded-xl p-4 transition-all duration-200 ${
                            isEnabled 
                              ? 'border-primary bg-gradient-to-r from-primary/5 to-blue-50 shadow-md' 
                              : 'border-slate-200 hover:border-primary/30 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <div 
                              className={`relative w-6 h-6 rounded-xl border-2 flex items-center justify-center cursor-pointer transition-all ${
                                isEnabled
                                  ? 'border-primary bg-primary shadow-lg scale-110'
                                  : 'border-slate-300 group-hover:border-primary/50'
                              } ${element.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                              onClick={() => !element.required && toggleElement(elementId)}
                            >
                              {isEnabled && (
                                <Icon name="Check" size={14} className="text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <span className="font-semibold text-sm text-slate-800">{element.name}</span>
                                {element.required && (
                                  <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1">
                                    <Icon name="Star" size={10} className="mr-1" />
                                    Обязательно
                                  </Badge>
                                )}
                              </div>
                              <div className="text-xs text-slate-600 mt-1">{element.description}</div>
                            </div>
                            {isEnabled && currentSizeData && (
                              <div className="text-right">
                                <div className="text-lg font-bold text-primary">
                                  {currentSizeData.price.toLocaleString()} ₽
                                </div>
                                <div className="text-xs text-slate-500">{currentSizeData.name}</div>
                              </div>
                            )}
                          </div>
                          
                          {isEnabled && (
                            <div className="ml-10">
                              <Select 
                                value={currentSize} 
                                onValueChange={(value) => updateElementSize(elementId, value)}
                              >
                                <SelectTrigger className="h-12 border-2 hover:border-primary/50 transition-colors">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {element.sizes.map(size => (
                                    <SelectItem key={size.id} value={size.id} className="p-3">
                                      <div className="flex justify-between items-center w-full min-w-[220px]">
                                        <div>
                                          <div className="font-medium">{size.name}</div>
                                          <div className="text-xs text-slate-500">размер</div>
                                        </div>
                                        <div className="text-primary font-bold text-lg">
                                          {size.price.toLocaleString()} ₽
                                        </div>
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
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl">
                      <div className="flex items-center gap-2">
                        <Icon name="Package" size={16} className="text-slate-600" />
                        <span className="text-sm font-semibold text-slate-700">Итого за комплектацию:</span>
                      </div>
                      <div className="text-xl font-bold text-primary bg-white px-3 py-1 rounded-lg shadow-sm">
                        {Object.entries(selectedElements)
                          .filter(([, config]) => config.enabled)
                          .reduce((total, [elementId, config]) => {
                            const element = monumentElements[elementId as keyof typeof monumentElements];
                            const size = element.sizes.find(s => s.id === config.size);
                            return total + (size?.price || 0);
                          }, 0)
                          .toLocaleString()} ₽
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Actions & Features Sidebar */}
            <div className="space-y-6">
              {/* Main Actions */}
              <div className="bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-sm">
                <div className="space-y-4">
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full h-14 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Добавить в корзину
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-12 border-2 hover:border-primary/50">
                      <Icon name="Heart" className="mr-2" size={18} />
                      В избранное
                    </Button>
                    <Button variant="outline" className="h-12 border-2 hover:border-primary/50">
                      <Icon name="Share2" className="mr-2" size={18} />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </div>
                
              {/* Additional Tools */}
              <div className="bg-gradient-to-br from-slate-50 to-white border rounded-2xl p-5 shadow-sm">
                <h3 className="font-semibold text-base mb-4 flex items-center gap-2">
                  <Icon name="Wrench" size={18} className="text-slate-600" />
                  Дополнительные инструменты
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full h-12 justify-start border-2 hover:border-primary/50 hover:bg-primary/5">
                    <Icon name="Phone" className="mr-3" size={18} />
                    <div className="text-left">
                      <div className="font-medium">Бесплатная консультация</div>
                      <div className="text-xs text-slate-500">Звонок менеджера за 5 минут</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full h-12 justify-start border-2 hover:border-primary/50 hover:bg-primary/5">
                    <Icon name="Download" className="mr-3" size={18} />
                    <div className="text-left">
                      <div className="font-medium">3D-модель памятника</div>
                      <div className="text-xs text-slate-500">Посмотреть в объёме</div>
                    </div>
                  </Button>
                  <Button variant="outline" className="w-full h-12 justify-start border-2 hover:border-primary/50 hover:bg-primary/5">
                    <Icon name="MapPin" className="mr-3" size={18} />
                    <div className="text-left">
                      <div className="font-medium">Доставка и установка</div>
                      <div className="text-xs text-slate-500">Расчёт по адресу</div>
                    </div>
                  </Button>
                </div>
              </div>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                  <h3 className="font-bold text-base text-slate-800">Что входит в стоимость</h3>
                </div>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-white/60 rounded-lg">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                  <Icon name="Shield" size={18} className="text-blue-600" />
                  Гарантии качества
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 bg-white/60 rounded-lg">
                    <Icon name="Award" size={16} className="text-amber-500" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">15+ лет опыта</div>
                      <div className="text-xs text-slate-500">Более 2000 памятников</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/60 rounded-lg">
                    <Icon name="Shield" size={16} className="text-green-500" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Пожизненная гарантия</div>
                      <div className="text-xs text-slate-500">На все виды работ</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white/60 rounded-lg">
                    <Icon name="Truck" size={16} className="text-blue-500" />
                    <div>
                      <div className="text-sm font-medium text-slate-700">Бесплатная доставка</div>
                      <div className="text-xs text-slate-500">По Москве и области</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details */}
          <div className="mt-16 lg:col-span-3">
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
          <div className="mt-16 lg:col-span-3">
            <div className="text-center mb-10">
              <h3 className="font-heading text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Похожие товары</h3>
              <p className="text-lg text-slate-600">Другие памятники, которые могут вам понравиться</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map(product => (
                <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 bg-gradient-to-br from-white to-slate-50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader className="p-6">
                    <CardTitle className="font-heading text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{product.title}</CardTitle>
                    <CardDescription className="text-xl font-bold text-primary">
                      {product.price}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <Button className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 font-semibold shadow-lg group-hover:shadow-xl transition-all duration-200">
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