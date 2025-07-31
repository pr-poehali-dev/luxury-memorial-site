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
    const selectedMaterialData = materials.find(m => m.id === selectedMaterial);
    
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

  const relatedProducts = [
    { id: 2, title: 'Горизонтальный элегант', price: '38 000 ₽', image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg' },
    { id: 3, title: 'Семейный комплекс', price: '85 000 ₽', image: 'https://cdn.poehali.dev/files/f8c87ddf-cfee-41b9-a522-244254aebd83.png' },
    { id: 4, title: 'Мемориальная плита', price: '25 000 ₽', image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg' }
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
              </div>
              <h1 className="text-4xl font-light text-slate-900 mb-2">{product.title}</h1>
              <p className="text-lg text-slate-600 mb-2">{product.subtitle}</p>
              <p className="text-sm text-slate-500 font-mono">Артикул: МНТ-VT-001-2024</p>
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
              <div className="relative group">
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
                        style={{ background: material.pattern || material.color }}
                        onClick={() => setSelectedMaterial(material.id)}
                        title={material.fullName}
                      />
                    ))}
                  </div>
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

            {/* Configuration Column */}
            <div className="lg:col-span-6">
              <div className="space-y-8">
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