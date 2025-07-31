import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
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
  const [selectedServices, setSelectedServices] = useState<string[]>(['portrait-gravir']);
  const [customSize, setCustomSize] = useState({ width: 80, height: 100, thickness: 8 });
  const [showPreview, setShowPreview] = useState(false);

  const product = {
    id: 1,
    title: 'Классический вертикальный памятник',
    subtitle: 'Традиция • Модель VT-001',
    code: 'МНТ-VT-001-2024',
    basePrice: 0,
    originalPrice: 52000,
    isNew: true,
    isPopular: true,
    discount: 15,
    rating: 4.9,
    reviewsCount: 147,
    images: [
      'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg'
    ],
    description: 'Элегантный классический памятник в современной интерпретации. Сочетает традиционные пропорции с инновационными технологиями обработки камня.',
    tags: ['Классика', 'Вертикальный', 'Полировка', 'Гарантия 10 лет'],
    features: [
      { icon: 'Sparkles', text: 'Зеркальная полировка' },
      { icon: 'Image', text: 'Фотогравировка HD' },
      { icon: 'Truck', text: 'Доставка + установка' },
      { icon: 'Shield', text: 'Пожизненная гарантия' }
    ],
    specifications: {
      'Размеры': '100×50×8 см',
      'Вес': '120 кг',
      'Материал': 'Гранит габбро-диабаз',
      'Происхождение': 'Карелия, Россия',
      'Обработка': 'Полировка + термо',
      'Плотность': '3.2 г/см³'
    }
  };

  const materials = [
    { 
      id: 'granite-black', 
      name: 'Габбро-диабаз', 
      fullName: 'Гранит чёрный (габбро-диабаз)',
      price: 0, 
      pricePerM2: 14500,
      color: '#1a1a1a',
      pattern: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)',
      description: 'Премиальный чёрный гранит',
      origin: 'Карелия'
    },
    { 
      id: 'granite-red', 
      name: 'Лезники', 
      fullName: 'Гранит красный (Лезники)',
      price: 4500,
      pricePerM2: 18200, 
      color: '#8B4513',
      pattern: 'linear-gradient(45deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
      description: 'Благородный красный гранит',
      origin: 'Украина'
    },
    { 
      id: 'granite-gray', 
      name: 'Возрождение', 
      fullName: 'Гранит серый (Возрождение)',
      price: 3200,
      pricePerM2: 16800, 
      color: '#696969',
      pattern: 'linear-gradient(45deg, #696969 0%, #808080 50%, #A9A9A9 100%)',
      description: 'Элегантный серый гранит',
      origin: 'Украина'
    },
    { 
      id: 'marble', 
      name: 'Каррара', 
      fullName: 'Мрамор белый (Каррара)',
      price: 12000,
      pricePerM2: 28500, 
      color: '#F8F8FF',
      pattern: 'linear-gradient(45deg, #F8F8FF 0%, #F5F5F5 50%, #E6E6FA 100%)',
      description: 'Итальянский мрамор люкс',
      origin: 'Италия'
    }
  ];

  const monumentElements = {
    stela: {
      name: 'Стела',
      icon: 'Square',
      description: 'Основная часть с портретом',
      required: true,
      sizes: [
        { id: 'compact', name: '70×35×4', price: 18500, dimensions: '70×35×4 см' },
        { id: 'standard', name: '80×40×5', price: 22000, dimensions: '80×40×5 см' },
        { id: 'premium', name: '90×45×6', price: 26500, dimensions: '90×45×6 см' },
        { id: 'luxury', name: '100×50×8', price: 32000, dimensions: '100×50×8 см' }
      ]
    },
    tumba: {
      name: 'Тумба',
      icon: 'Rectangle',
      description: 'Подставка для устойчивости',
      required: false,
      sizes: [
        { id: 'mini', name: '40×15×12', price: 4800, dimensions: '40×15×12 см' },
        { id: 'standard', name: '50×20×15', price: 6200, dimensions: '50×20×15 см' },
        { id: 'wide', name: '60×25×18', price: 8500, dimensions: '60×25×18 см' }
      ]
    },
    cvetnik: {
      name: 'Цветник',
      icon: 'Flower',
      description: 'Ограждение с декором',
      required: false,
      sizes: [
        { id: 'compact', name: '80×40', price: 7200, dimensions: '80×40 см' },
        { id: 'standard', name: '100×50', price: 9800, dimensions: '100×50 см' },
        { id: 'extended', name: '120×60', price: 12800, dimensions: '120×60 см' },
        { id: 'family', name: '150×70', price: 16500, dimensions: '150×70 см' }
      ]
    }
  };

  const services = [
    { id: 'portrait-gravir', name: 'Портрет гравировка', price: 6500, category: 'Портрет', icon: 'User' },
    { id: 'portrait-hand', name: 'Портрет ручная работа', price: 14500, category: 'Портрет', icon: 'Palette' },
    { id: 'fio-gravir', name: 'ФИО гравировка', price: 1800, category: 'Текст', icon: 'Type' },
    { id: 'fio-gold', name: 'ФИО золочение', price: 5200, category: 'Текст', icon: 'Crown' },
    { id: 'gravir-cross', name: 'Крест', price: 2800, category: 'Символы', icon: 'Plus' },
    { id: 'gravir-flowers', name: 'Цветы', price: 0, category: 'Декор', icon: 'Flower2' },
    { id: 'epitaph', name: 'Эпитафия', price: 0, category: 'Текст', icon: 'Quote' },
    { id: 'ornament', name: 'Орнамент', price: 3200, category: 'Декор', icon: 'Sparkles' },
    { id: 'protection', name: 'Защитное покрытие', price: 3800, category: 'Обработка', icon: 'Shield' }
  ];

  const calculatePrice = () => {
    const selectedMaterialData = materials.find(m => m.id === selectedMaterial);
    const materialMultiplier = selectedMaterialData?.pricePerM2 || 14500;
    
    // Площадь стелы
    const area = (customSize.width * customSize.height) / 10000;
    const materialCost = Math.round(area * materialMultiplier);
    
    // Элементы
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
    
    // Услуги
    const servicesPrice = services
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.price, 0);
    
    return materialCost + elementsPrice + servicesPrice;
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: calculatePrice(),
      image: product.images[0],
      category: 'vertical',
      quantity: 1,
      selectedMaterial: materials.find(m => m.id === selectedMaterial)?.name,
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

  const getCompletionPercentage = () => {
    const totalSteps = 4; // Материал, размеры, элементы, услуги
    let completedSteps = 0;
    
    if (selectedMaterial) completedSteps++;
    if (customSize.width && customSize.height) completedSteps++;
    if (Object.values(selectedElements).some(el => el.enabled)) completedSteps++;
    if (selectedServices.length > 0) completedSteps++;
    
    return (completedSteps / totalSteps) * 100;
  };

  const relatedProducts = [
    { 
      id: 2, 
      title: 'Горизонтальный комплекс', 
      price: 42000, 
      originalPrice: 48000,
      image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
      rating: 4.7,
      isNew: false
    },
    { 
      id: 3, 
      title: 'Семейный мемориал', 
      price: 89000, 
      originalPrice: 105000,
      image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png',
      rating: 4.9,
      isNew: true
    },
    { 
      id: 4, 
      title: 'Мемориальная плита', 
      price: 28000, 
      originalPrice: 32000,
      image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
      rating: 4.6,
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-slate-50 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
            <Icon name="Home" size={16} />
            <span>/</span>
            <span>Каталог</span>
            <span>/</span>
            <span>Вертикальные</span>
            <span>/</span>
            <span className="text-slate-900 font-medium">{product.title}</span>
          </div>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                {product.isNew && <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Новинка</Badge>}
                {product.isPopular && <Badge className="bg-orange-100 text-orange-800 border-orange-200">Хит продаж</Badge>}
                {product.discount && <Badge className="bg-red-100 text-red-800 border-red-200">-{product.discount}%</Badge>}
              </div>
              <h1 className="text-4xl font-light text-slate-900 mb-2">{product.title}</h1>
              <p className="text-lg text-slate-600 mb-2">{product.subtitle}</p>
              <p className="text-sm text-slate-500 font-mono">Артикул: {product.code}</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Icon 
                      key={star}
                      name="Star" 
                      size={16} 
                      className={star <= Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-slate-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600">{product.rating}</span>
              </div>
              <p className="text-xs text-slate-500">{product.reviewsCount} отзывов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Images Column */}
            <div className="lg:col-span-6">
              <div className="sticky top-24">
                <div className="relative mb-6">
                  <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                    <img 
                      src={product.images[selectedImage]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Image overlay info */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-xs text-slate-600 mb-1">Размер на фото</div>
                      <div className="font-medium text-slate-900">100×50×8 см</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Button variant="outline" size="icon" className="bg-white/90 backdrop-blur-sm border-white/50">
                      <Icon name="ZoomIn" size={18} />
                    </Button>
                  </div>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-slate-900 scale-105' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                
                {/* Material Preview */}
                <div className="mt-6 p-4 bg-slate-50 rounded-xl">
                  <div className="text-sm font-medium text-slate-900 mb-3">Материал: {materials.find(m => m.id === selectedMaterial)?.name}</div>
                  <div className="flex gap-2">
                    {materials.map(material => (
                      <button
                        key={material.id}
                        className={`w-12 h-12 rounded-lg border-2 transition-all ${
                          selectedMaterial === material.id 
                            ? 'border-slate-900 scale-110' 
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                        style={{ background: material.pattern }}
                        onClick={() => setSelectedMaterial(material.id)}
                        title={material.fullName}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Configuration Column */}
            <div className="lg:col-span-6">
              <div className="space-y-8">
                
                {/* Progress Indicator */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-900">Прогресс конфигурации</span>
                    <span className="text-sm text-slate-600">{Math.round(getCompletionPercentage())}%</span>
                  </div>
                  <Progress value={getCompletionPercentage()} className="h-2" />
                </div>
                
                {/* Price Section */}
                <div className="bg-slate-900 text-white rounded-2xl p-6">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-3xl font-light mb-1">
                        {calculatePrice().toLocaleString()} ₽
                      </div>
                      {product.originalPrice && (
                        <div className="text-slate-400 line-through">
                          {product.originalPrice.toLocaleString()} ₽
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400">Экономия</div>
                      <div className="text-lg text-emerald-400">
                        {product.originalPrice ? (product.originalPrice - calculatePrice()).toLocaleString() : 0} ₽
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-300">
                    Финальная стоимость • Без скрытых доплат
                  </div>
                </div>

                {/* Size Calculator */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-slate-900">Размеры стелы</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label className="text-xs text-slate-600 mb-2 block">Ширина</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={customSize.width}
                          onChange={(e) => setCustomSize(prev => ({ ...prev, width: Number(e.target.value) }))}
                          className="pr-8"
                          min="30"
                          max="150"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">см</span>
                      </div>
                      <Slider
                        value={[customSize.width]}
                        onValueChange={([value]) => setCustomSize(prev => ({ ...prev, width: value }))}
                        max={150}
                        min={30}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-xs text-slate-600 mb-2 block">Высота</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={customSize.height}
                          onChange={(e) => setCustomSize(prev => ({ ...prev, height: Number(e.target.value) }))}
                          className="pr-8"
                          min="60"
                          max="200"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">см</span>
                      </div>
                      <Slider
                        value={[customSize.height]}
                        onValueChange={([value]) => setCustomSize(prev => ({ ...prev, height: value }))}
                        max={200}
                        min={60}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-xs text-slate-600 mb-2 block">Толщина</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={customSize.thickness}
                          onChange={(e) => setCustomSize(prev => ({ ...prev, thickness: Number(e.target.value) }))}
                          className="pr-8"
                          min="4"
                          max="12"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500">см</span>
                      </div>
                      <Slider
                        value={[customSize.thickness]}
                        onValueChange={([value]) => setCustomSize(prev => ({ ...prev, thickness: value }))}
                        max={12}
                        min={4}
                        step={1}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-3 text-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-600">Площадь:</span>
                      <span className="font-medium">{((customSize.width * customSize.height) / 10000).toFixed(2)} м²</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Стоимость материала:</span>
                      <span className="font-medium text-slate-900">
                        {Math.round(((customSize.width * customSize.height) / 10000) * (materials.find(m => m.id === selectedMaterial)?.pricePerM2 || 14500)).toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </div>

                {/* Material Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-slate-900">Материал</h3>
                  
                  <div className="grid gap-3">
                    {materials.map(material => (
                      <label
                        key={material.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedMaterial === material.id 
                            ? 'border-slate-900 bg-slate-50' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="material"
                          value={material.id}
                          checked={selectedMaterial === material.id}
                          onChange={() => setSelectedMaterial(material.id)}
                          className="sr-only"
                        />
                        
                        <div 
                          className="w-12 h-12 rounded-lg border border-slate-300"
                          style={{ background: material.pattern }}
                        />
                        
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">{material.name}</div>
                          <div className="text-sm text-slate-600">{material.description}</div>
                          <div className="text-xs text-slate-500">{material.origin}</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-medium text-slate-900">
                            {material.price > 0 ? `+${material.price.toLocaleString()} ₽` : 'База'}
                          </div>
                          <div className="text-xs text-slate-500">
                            {material.pricePerM2.toLocaleString()} ₽/м²
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Monument Configuration - NEW DESIGN */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-slate-900">Конфигуратор памятника</h3>
                  
                  {/* Visual Monument Builder */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
                    <div className="relative">
                      {/* Monument Visual Preview */}
                      <div className="flex items-end justify-center gap-2 mb-6 min-h-[200px]">
                        {/* Стела - всегда видна */}
                        <div className="relative">
                          <div 
                            className="bg-gradient-to-b from-slate-300 to-slate-400 rounded-t-lg shadow-lg border-2 border-slate-500"
                            style={{
                              width: Math.max(60, customSize.width * 0.8) + 'px',
                              height: Math.max(80, customSize.height * 0.8) + 'px'
                            }}
                          >
                            <div className="absolute inset-2 bg-slate-200 rounded opacity-50"></div>
                            <div className="absolute top-2 left-2 right-2 h-8 bg-slate-400 rounded opacity-30"></div>
                          </div>
                          <div className="text-center mt-2">
                            <div className="text-xs font-medium text-slate-700">СТЕЛА</div>
                            <div className="text-xs text-slate-500">{customSize.width}×{customSize.height} см</div>
                          </div>
                        </div>

                        {/* Тумба - показывается если выбрана */}
                        {selectedElements.tumba.enabled && (
                          <div className="relative">
                            <div 
                              className="bg-gradient-to-b from-slate-400 to-slate-500 rounded shadow-lg border-2 border-slate-600"
                              style={{
                                width: Math.max(50, customSize.width * 0.7) + 'px',
                                height: '30px'
                              }}
                            >
                              <div className="absolute inset-1 bg-slate-300 rounded opacity-40"></div>
                            </div>
                            <div className="text-center mt-2">
                              <div className="text-xs font-medium text-slate-700">ТУМБА</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Цветник - показывается снизу если выбран */}
                      {selectedElements.cvetnik.enabled && (
                        <div className="flex justify-center mb-4">
                          <div className="relative">
                            <div 
                              className="bg-gradient-to-r from-green-200 to-green-300 rounded-lg border-2 border-green-400 shadow-lg"
                              style={{
                                width: Math.max(100, customSize.width * 1.2) + 'px',
                                height: '20px'
                              }}
                            >
                              <div className="absolute inset-1 bg-green-100 rounded opacity-60"></div>
                              <div className="absolute top-1 left-2 w-2 h-2 bg-red-400 rounded-full opacity-80"></div>
                              <div className="absolute top-1 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-80"></div>
                            </div>
                            <div className="text-center mt-2">
                              <div className="text-xs font-medium text-slate-700">ЦВЕТНИК</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Preview Toggle */}
                      <div className="text-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setShowPreview(!showPreview)}
                          className="text-xs"
                        >
                          <Icon name="Eye" size={14} className="mr-1" />
                          {showPreview ? 'Скрыть детали' : 'Показать детали'}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Element Selector */}
                  <div className="space-y-3">
                    {Object.entries(monumentElements).map(([elementId, element]) => {
                      const isEnabled = selectedElements[elementId as keyof typeof selectedElements].enabled;
                      const currentSize = selectedElements[elementId as keyof typeof selectedElements].size;
                      const currentSizeData = element.sizes.find(s => s.id === currentSize);
                      
                      return (
                        <div key={elementId} className="group">
                          {/* Main Element Card */}
                          <div 
                            className={`relative overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                              isEnabled 
                                ? 'border-slate-900 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg scale-[1.02]' 
                                : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                            }`}
                          >
                            <div className="flex items-center gap-4 p-4">
                              {/* Toggle Switch */}
                              <div 
                                className={`relative w-12 h-6 rounded-full cursor-pointer transition-all ${
                                  isEnabled ? 'bg-emerald-500' : 'bg-slate-300'
                                } ${element.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => !element.required && toggleElement(elementId)}
                              >
                                <div 
                                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                                    isEnabled ? 'translate-x-6' : 'translate-x-1'
                                  }`}
                                />
                              </div>
                              
                              {/* Element Icon */}
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                isEnabled ? 'bg-white/20' : 'bg-slate-100'
                              }`}>
                                <Icon 
                                  name={element.icon as any} 
                                  size={20} 
                                  className={isEnabled ? 'text-white' : 'text-slate-600'}
                                />
                              </div>
                              
                              {/* Element Info */}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className={`font-semibold ${isEnabled ? 'text-white' : 'text-slate-900'}`}>
                                    {element.name}
                                  </h4>
                                  {element.required && (
                                    <Badge 
                                      variant="outline" 
                                      className={`text-xs ${isEnabled ? 'border-white/30 text-white/80' : 'border-slate-300 text-slate-600'}`}
                                    >
                                      Обязательно
                                    </Badge>
                                  )}
                                </div>
                                <p className={`text-sm ${isEnabled ? 'text-white/80' : 'text-slate-600'}`}>
                                  {element.description}
                                </p>
                              </div>
                              
                              {/* Price Display */}
                              {isEnabled && currentSizeData && (
                                <div className="text-right">
                                  <div className="text-xl font-bold text-white">
                                    {currentSizeData.price.toLocaleString()} ₽
                                  </div>
                                  <div className="text-xs text-white/60">
                                    {currentSizeData.dimensions}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {/* Animated Background Pattern */}
                            {isEnabled && (
                              <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                              </div>
                            )}
                          </div>
                          
                          {/* Size Selection Dropdown */}
                          {isEnabled && (
                            <div className="mt-2 ml-16 mr-4">
                              <Select 
                                value={currentSize} 
                                onValueChange={(value) => updateElementSize(elementId, value)}
                              >
                                <SelectTrigger className="bg-white border-slate-300 hover:border-slate-400">
                                  <div className="flex items-center gap-2">
                                    <Icon name="Ruler" size={14} className="text-slate-500" />
                                    <SelectValue />
                                  </div>
                                </SelectTrigger>
                                <SelectContent>
                                  {element.sizes.map(size => (
                                    <SelectItem key={size.id} value={size.id}>
                                      <div className="flex justify-between items-center w-full min-w-[200px]">
                                        <span className="font-medium">{size.dimensions}</span>
                                        <span className="text-slate-600 font-semibold ml-4">
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
                  </div>
                  
                  {/* Configuration Summary */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        <Icon name="Package" size={16} />
                        Итого за комплектацию
                      </h4>
                      <div className="text-lg font-bold text-slate-900">
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
                    
                    <div className="space-y-1">
                      {Object.entries(selectedElements)
                        .filter(([, config]) => config.enabled)
                        .map(([elementId, config]) => {
                          const element = monumentElements[elementId as keyof typeof monumentElements];
                          const size = element.sizes.find(s => s.id === config.size);
                          return (
                            <div key={elementId} className="flex justify-between items-center text-sm">
                              <span className="text-slate-600">
                                {element.name} ({size?.dimensions})
                              </span>
                              <span className="font-medium text-slate-900">
                                {size?.price.toLocaleString()} ₽
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-slate-900">Услуги по оформлению</h3>
                  
                  <div className="grid gap-2">
                    {services.map((service) => {
                      const isSelected = selectedServices.includes(service.id);
                      
                      return (
                        <label
                          key={service.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            isSelected ? 'border-slate-900 bg-slate-50' : 'border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {
                              setSelectedServices(prev => 
                                prev.includes(service.id) 
                                  ? prev.filter(id => id !== service.id)
                                  : [...prev, service.id]
                              );
                            }}
                            className="sr-only"
                          />
                          
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                            isSelected ? 'border-slate-900 bg-slate-900' : 'border-slate-300'
                          }`}>
                            {isSelected && <Icon name="Check" size={10} className="text-white" />}
                          </div>
                          
                          <Icon name={service.icon as any} size={16} className={isSelected ? 'text-slate-700' : 'text-slate-400'} />
                          
                          <div className="flex-1">
                            <div className="font-medium text-slate-900">{service.name}</div>
                            <div className="text-xs text-slate-500">{service.category}</div>
                          </div>
                          
                          <div className="font-medium">
                            {service.price === 0 ? (
                              <span className="text-emerald-600">Бесплатно</span>
                            ) : (
                              <span className="text-slate-900">{service.price.toLocaleString()} ₽</span>
                            )}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-4 pt-6 border-t">
                  <Button 
                    onClick={handleAddToCart}
                    className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium"
                  >
                    <Icon name="ShoppingCart" className="mr-3" size={20} />
                    Добавить в корзину • {calculatePrice().toLocaleString()} ₽
                  </Button>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="border-slate-300">
                      <Icon name="Heart" className="mr-2" size={16} />
                      В избранное
                    </Button>
                    <Button variant="outline" className="border-slate-300">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Звонок
                    </Button>
                    <Button variant="outline" className="border-slate-300">
                      <Icon name="Share" className="mr-2" size={16} />
                      Поделиться
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="bg-slate-50 rounded-xl p-6">
                  <h4 className="font-medium text-slate-900 mb-4">Включено в стоимость</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name={feature.icon as any} size={16} className="text-slate-600" />
                        <span className="text-sm text-slate-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-slate-100 h-12">
                <TabsTrigger value="specifications" className="font-medium">Характеристики</TabsTrigger>
                <TabsTrigger value="description" className="font-medium">Описание</TabsTrigger>
                <TabsTrigger value="reviews" className="font-medium">Отзывы ({product.reviewsCount})</TabsTrigger>
                <TabsTrigger value="delivery" className="font-medium">Доставка</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-8">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  {Object.entries(product.specifications).map(([key, value], index, array) => (
                    <div 
                      key={key} 
                      className={`flex justify-between items-center px-6 py-4 ${
                        index !== array.length - 1 ? 'border-b border-slate-100' : ''
                      }`}
                    >
                      <span className="font-medium text-slate-900">{key}</span>
                      <span className="text-slate-600">{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="description" className="mt-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-slate-300 text-slate-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Памятник изготавливается из высококачественного карельского гранита, который отличается 
                    исключительной прочностью и долговечностью. Поверхность обрабатывается до зеркального 
                    блеска современными технологиями полировки.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    В стоимость включена художественная гравировка портрета высокого разрешения, выполненная 
                    на профессиональном оборудовании. Каждый памятник проходит тщательный контроль качества 
                    перед отгрузкой.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="bg-slate-50 rounded-xl p-6 text-center">
                    <div className="text-4xl font-light text-slate-900 mb-2">{product.rating}</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((star) => (
                        <Icon 
                          key={star}
                          name="Star" 
                          size={18} 
                          className={star <= Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-slate-300"}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-slate-600">{product.reviewsCount} отзывов</p>
                  </div>
                  
                  <div className="lg:col-span-3 space-y-6">
                    {[1,2,3].map((review) => (
                      <div key={review} className="border border-slate-200 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                              <Icon name="User" size={18} />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">Мария Петрова</p>
                              <div className="flex gap-1">
                                {[1,2,3,4,5].map((star) => (
                                  <Icon key={star} name="Star" size={14} className="text-amber-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-500">15 дней назад</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          Отличное качество исполнения. Памятник установили точно в срок, мастера работали 
                          очень аккуратно. Портрет получился очень похожим, семья довольна результатом.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="mt-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Clock" size={24} className="text-slate-600" />
                    </div>
                    <h4 className="font-medium text-slate-900 mb-2">Изготовление</h4>
                    <p className="text-slate-600 text-sm">15-20 рабочих дней</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Truck" size={24} className="text-slate-600" />
                    </div>
                    <h4 className="font-medium text-slate-900 mb-2">Доставка</h4>
                    <p className="text-slate-600 text-sm">По Москве и МО</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" size={24} className="text-slate-600" />
                    </div>
                    <h4 className="font-medium text-slate-900 mb-2">Гарантия</h4>
                    <p className="text-slate-600 text-sm">Пожизненная</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h3 className="text-2xl font-light text-slate-900 mb-8 text-center">Рекомендуем также</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map(product => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-3 left-3 bg-emerald-100 text-emerald-800 border-emerald-200">
                        Новинка
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                      {product.title}
                    </h4>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1,2,3,4,5].map((star) => (
                          <Icon 
                            key={star}
                            name="Star" 
                            size={14} 
                            className={star <= Math.floor(product.rating) ? "text-amber-400 fill-current" : "text-slate-300"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">{product.rating}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium text-slate-900">{product.price.toLocaleString()} ₽</span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">{product.originalPrice.toLocaleString()} ₽</span>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full mt-3 border-slate-300 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}