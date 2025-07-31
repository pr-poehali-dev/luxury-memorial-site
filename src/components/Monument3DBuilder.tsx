import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Monument3DBuilderProps {
  selectedElements: {
    stela: { enabled: boolean; size: string };
    tumba: { enabled: boolean; size: string };
    cvetnik: { enabled: boolean; size: string };
  };
  selectedMaterial: string;
  selectedServices: string[];
  customSize: { width: number; height: number; thickness: number };
  materials: Array<{
    id: string;
    name: string;
    pattern: string;
    pricePerM2: number;
  }>;
  monumentElements: any;
  toggleElement: (elementId: string) => void;
  updateElementSize: (elementId: string, sizeId: string) => void;
}

export default function Monument3DBuilder({
  selectedElements,
  selectedMaterial,
  selectedServices,
  customSize,
  materials,
  monumentElements,
  toggleElement,
  updateElementSize
}: Monument3DBuilderProps) {
  const [viewMode, setViewMode] = useState<'front' | 'side' | '3d'>('3d');
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Icon name="Box" size={18} className="text-white" />
          </div>
          3D Конструктор памятника
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Интерактивный режим
        </div>
      </div>
      
      {/* Main 3D Constructor */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 relative overflow-hidden border border-slate-700">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          {/* View Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-2">
              {(['3d', 'front', 'side'] as const).map((mode) => (
                <Button
                  key={mode}
                  size="sm"
                  variant={viewMode === mode ? "default" : "outline"}
                  onClick={() => setViewMode(mode)}
                  className={viewMode === mode ? "bg-blue-500 hover:bg-blue-600" : "border-slate-500 text-slate-300 hover:bg-slate-600"}
                >
                  <Icon name={mode === '3d' ? 'Box' : mode === 'front' ? 'Square' : 'Rectangle'} size={14} className="mr-1" />
                  {mode === '3d' ? '3D' : mode === 'front' ? 'Фронт' : 'Бок'}
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-600" onClick={triggerAnimation}>
                <Icon name="RotateCcw" size={14} className="mr-1" />
                Повернуть
              </Button>
              <Button size="sm" variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-600">
                <Icon name="ZoomIn" size={14} className="mr-1" />
                Увеличить
              </Button>
            </div>
          </div>

          {/* 3D Preview Area */}
          <div className="bg-gradient-to-b from-slate-700/50 to-slate-800/50 rounded-2xl p-8 mb-6 border border-slate-600/50 backdrop-blur-sm">
            <div className="text-white mb-6">
              <h4 className="text-lg font-semibold mb-1">Предпросмотр памятника</h4>
              <p className="text-slate-300 text-sm">Интерактивная 3D модель</p>
            </div>
            
            {/* Enhanced 3D Monument Visualization */}
            <div className={`relative min-h-[350px] flex items-end justify-center perspective-1000 ${isAnimating ? 'animate-pulse' : ''}`}>
              {/* Ground/Platform */}
              <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-slate-600/40 to-transparent rounded-full transform perspective-500 rotate-x-60"></div>
              
              {/* Monument Elements Stack */}
              <div className={`relative flex items-end gap-4 transform-gpu transition-all duration-1000 hover:scale-105 ${isAnimating ? 'animate-bounce' : ''}`}>
                
                {/* Цветник (background/ground level) */}
                {selectedElements.cvetnik.enabled && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-700 animate-fadeIn">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 rounded-2xl shadow-2xl border-2 border-emerald-300/50 relative overflow-hidden"
                      style={{
                        width: Math.max(140, customSize.width * 1.6) + 'px',
                        height: '32px',
                        transform: 'perspective(600px) rotateX(75deg)'
                      }}
                    >
                      {/* Animated flowers */}
                      <div className="absolute inset-0 flex items-center justify-around">
                        <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300 shadow-lg"></div>
                        <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-700 shadow-lg"></div>
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                        <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse delay-1300 shadow-lg"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent"></div>
                      
                      {/* Grass texture simulation */}
                      <div className="absolute inset-0 opacity-30">
                        {[...Array(12)].map((_, i) => (
                          <div 
                            key={i} 
                            className="absolute bottom-0 w-0.5 bg-green-600 animate-pulse"
                            style={{
                              left: `${(i + 1) * 8}%`,
                              height: '8px',
                              animationDelay: `${i * 100}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <div className="text-xs font-semibold text-white/90 tracking-wide">ЦВЕТНИК</div>
                      <div className="text-xs text-slate-300">
                        {monumentElements.cvetnik.sizes.find((s: any) => s.id === selectedElements.cvetnik.size)?.dimensions}
                      </div>
                    </div>
                  </div>
                )}

                {/* Тумба (base level) */}
                {selectedElements.tumba.enabled && (
                  <div className="relative z-10 transition-all duration-700 animate-slideUp">
                    <div 
                      className="bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 rounded-lg shadow-2xl border-2 border-slate-400/50 relative overflow-hidden group"
                      style={{
                        width: Math.max(70, customSize.width * 0.8) + 'px',
                        height: '50px'
                      }}
                    >
                      <div className="absolute inset-1 bg-gradient-to-b from-slate-300/40 to-transparent rounded"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-700/60 rounded-b-lg"></div>
                      
                      {/* Material texture overlay */}
                      <div 
                        className="absolute inset-0 opacity-40 rounded-lg"
                        style={{ 
                          background: materials.find(m => m.id === selectedMaterial)?.pattern || 'none'
                        }}
                      ></div>
                      
                      {/* Geometric details */}
                      <div className="absolute top-2 left-2 right-2 h-1 bg-slate-300/30 rounded"></div>
                      <div className="absolute bottom-2 left-2 right-2 h-1 bg-slate-700/40 rounded"></div>
                      
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center mt-3">
                      <div className="text-xs font-semibold text-white/90 tracking-wide">ТУМБА</div>
                      <div className="text-xs text-slate-300">
                        {monumentElements.tumba.sizes.find((s: any) => s.id === selectedElements.tumba.size)?.dimensions}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Стела (main monument) */}
                <div className="relative z-20 transition-all duration-1000 animate-slideUp delay-200">
                  <div 
                    className="bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 rounded-t-3xl rounded-b-lg shadow-2xl border-3 border-slate-400/70 relative overflow-hidden group"
                    style={{
                      width: Math.max(90, customSize.width * 0.95) + 'px',
                      height: Math.max(140, customSize.height * 0.95) + 'px'
                    }}
                  >
                    {/* Material pattern overlay */}
                    <div 
                      className="absolute inset-0 opacity-80 rounded-t-3xl rounded-b-lg"
                      style={{ 
                        background: materials.find(m => m.id === selectedMaterial)?.pattern || 'none'
                      }}
                    ></div>
                    
                    {/* Portrait area with enhanced simulation */}
                    <div className="absolute top-6 left-4 right-4 h-20 bg-slate-200/30 rounded-xl border-2 border-slate-300/40 flex items-center justify-center group backdrop-blur-sm">
                      <div className="relative">
                        <Icon name="User" size={28} className="text-slate-300/70" />
                        {selectedServices.includes('portrait-gravir') && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg border border-white/50"></div>
                        )}
                      </div>
                    </div>
                    
                    {/* Text/Name area simulation */}
                    <div className="absolute bottom-8 left-4 right-4 space-y-2">
                      <div className="h-2 bg-slate-300/50 rounded w-4/5 shadow-sm"></div>
                      <div className="h-2 bg-slate-300/40 rounded w-3/5 shadow-sm"></div>
                      <div className="h-1 bg-slate-300/30 rounded w-2/3 shadow-sm"></div>
                      {selectedServices.includes('fio-gravir') && (
                        <div className="absolute -right-1 top-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                      )}
                    </div>
                    
                    {/* Cross or religious symbol area */}
                    {selectedServices.includes('gravir-cross') && (
                      <div className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center">
                        <Icon name="Plus" size={12} className="text-slate-300/60" />
                        <div className="absolute inset-0 bg-yellow-400/30 rounded-full animate-pulse"></div>
                      </div>
                    )}
                    
                    {/* Decorative elements */}
                    {selectedServices.includes('gravir-flowers') && (
                      <div className="absolute bottom-2 left-2 flex gap-1">
                        <div className="w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-yellow-400/60 rounded-full animate-pulse delay-300"></div>
                      </div>
                    )}
                    
                    {/* Premium shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-t-3xl rounded-b-lg group-hover:from-white/40 transition-all duration-700"></div>
                    
                    {/* Quality indicators */}
                    <div className="absolute top-2 left-2 flex gap-1">
                      {selectedServices.includes('protection') && (
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg" title="Защитное покрытие"></div>
                      )}
                      {selectedServices.length > 3 && (
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg" title="Премиум услуги"></div>
                      )}
                    </div>
                    
                    {/* 3D depth effect */}
                    <div className="absolute -right-1 top-2 bottom-2 w-1 bg-slate-600/60 rounded-r-lg"></div>
                    <div className="absolute -bottom-1 left-2 right-2 h-1 bg-slate-600/60 rounded-b-lg"></div>
                  </div>
                  
                  <div className="text-center mt-4">
                    <div className="text-sm font-bold text-white tracking-wide">СТЕЛА</div>
                    <div className="text-xs text-slate-300">{customSize.width}×{customSize.height}×{customSize.thickness} см</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {materials.find(m => m.id === selectedMaterial)?.name}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interactive hotspots with enhanced animations */}
              <div className="absolute top-8 left-8">
                <div className="relative cursor-pointer group" title="Портрет">
                  <div className="w-5 h-5 bg-blue-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-5 h-5 bg-blue-500 rounded-full animate-pulse relative flex items-center justify-center">
                    <Icon name="User" size={10} className="text-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Портрет
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-24 right-12">
                <div className="relative cursor-pointer group" title="Текст">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse relative flex items-center justify-center">
                    <Icon name="Type" size={8} className="text-white" />
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Текст
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced stats bar */}
            <div className="mt-8 grid grid-cols-4 gap-4 text-center">
              <div className="bg-gradient-to-r from-slate-600/40 to-slate-700/40 rounded-xl p-4 border border-slate-500/30 backdrop-blur-sm group hover:from-blue-600/40 hover:to-blue-700/40 transition-all">
                <Icon name="Maximize" size={18} className="text-slate-300 mx-auto mb-2 group-hover:text-blue-300" />
                <div className="text-white font-semibold">{((customSize.width * customSize.height) / 10000).toFixed(2)} м²</div>
                <div className="text-slate-300 text-xs">Площадь</div>
              </div>
              <div className="bg-gradient-to-r from-slate-600/40 to-slate-700/40 rounded-xl p-4 border border-slate-500/30 backdrop-blur-sm group hover:from-purple-600/40 hover:to-purple-700/40 transition-all">
                <Icon name="Weight" size={18} className="text-slate-300 mx-auto mb-2 group-hover:text-purple-300" />
                <div className="text-white font-semibold">~{Math.round(customSize.width * customSize.height * customSize.thickness * 2.7 / 1000)} кг</div>
                <div className="text-slate-300 text-xs">Вес</div>
              </div>
              <div className="bg-gradient-to-r from-slate-600/40 to-slate-700/40 rounded-xl p-4 border border-slate-500/30 backdrop-blur-sm group hover:from-green-600/40 hover:to-green-700/40 transition-all">
                <Icon name="Package" size={18} className="text-slate-300 mx-auto mb-2 group-hover:text-green-300" />
                <div className="text-white font-semibold">{Object.values(selectedElements).filter(el => el.enabled).length} шт</div>
                <div className="text-slate-300 text-xs">Элементов</div>
              </div>
              <div className="bg-gradient-to-r from-slate-600/40 to-slate-700/40 rounded-xl p-4 border border-slate-500/30 backdrop-blur-sm group hover:from-yellow-600/40 hover:to-yellow-700/40 transition-all">
                <Icon name="Settings" size={18} className="text-slate-300 mx-auto mb-2 group-hover:text-yellow-300" />
                <div className="text-white font-semibold">{selectedServices.length} шт</div>
                <div className="text-slate-300 text-xs">Услуг</div>
              </div>
            </div>
          </div>

          {/* Element Configurator Cards */}
          <div className="grid gap-4">
            {Object.entries(monumentElements).map(([elementId, element]: [string, any], index) => {
              const isEnabled = selectedElements[elementId as keyof typeof selectedElements].enabled;
              const currentSize = selectedElements[elementId as keyof typeof selectedElements].size;
              const currentSizeData = element.sizes.find((s: any) => s.id === currentSize);
              
              return (
                <div 
                  key={elementId} 
                  className={`group relative transition-all duration-500 ${
                    isEnabled ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Enhanced Card */}
                  <div 
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isEnabled 
                        ? 'border-blue-500/50 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 shadow-xl shadow-blue-500/20' 
                        : 'border-slate-600/50 bg-slate-700/30 hover:border-slate-500/70 hover:bg-slate-700/50'
                    }`}
                  >
                    {/* Animated background for active elements */}
                    {isEnabled && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
                    )}
                    
                    <div className="relative p-6">
                      <div className="flex items-center gap-4">
                        {/* Enhanced Toggle Switch */}
                        <div 
                          className={`relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner ${
                            isEnabled 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30' 
                              : 'bg-slate-600 hover:bg-slate-500'
                          } ${element.required ? 'opacity-50 cursor-not-allowed' : ''}`}
                          onClick={() => !element.required && toggleElement(elementId)}
                        >
                          <div 
                            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-lg flex items-center justify-center ${
                              isEnabled ? 'translate-x-8' : 'translate-x-1'
                            }`}
                          >
                            <Icon 
                              name={isEnabled ? "Check" : element.icon} 
                              size={12} 
                              className={isEnabled ? 'text-blue-500' : 'text-slate-400'}
                            />
                          </div>
                          {/* Glow effect */}
                          {isEnabled && (
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse opacity-50 blur-sm"></div>
                          )}
                        </div>
                        
                        {/* Element Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              isEnabled 
                                ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30' 
                                : 'bg-slate-600/50'
                            }`}>
                              <Icon 
                                name={element.icon} 
                                size={20} 
                                className={isEnabled ? 'text-white' : 'text-slate-300'}
                              />
                            </div>
                            
                            <div>
                              <h4 className={`text-lg font-bold transition-colors ${
                                isEnabled ? 'text-white' : 'text-slate-200'
                              }`}>
                                {element.name}
                              </h4>
                              <p className={`text-sm transition-colors ${
                                isEnabled ? 'text-slate-200' : 'text-slate-400'
                              }`}>
                                {element.description}
                              </p>
                            </div>
                            
                            {element.required && (
                              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                                Обязательно
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        {/* Price & Size Display */}
                        {isEnabled && currentSizeData && (
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white mb-1">
                              {currentSizeData.price.toLocaleString()} ₽
                            </div>
                            <div className="text-sm text-slate-300">
                              {currentSizeData.dimensions}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced Size Selection */}
                      {isEnabled && (
                        <div className="mt-6 animate-slideDown">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {element.sizes.map((size: any) => (
                              <button
                                key={size.id}
                                className={`p-4 rounded-xl border transition-all duration-300 text-left hover:scale-105 hover:shadow-lg ${
                                  currentSize === size.id
                                    ? 'border-blue-400/70 bg-blue-500/20 shadow-lg shadow-blue-500/20 scale-105'
                                    : 'border-slate-600/50 bg-slate-700/30 hover:border-slate-500/70'
                                }`}
                                onClick={() => updateElementSize(elementId, size.id)}
                              >
                                <div className={`text-sm font-semibold mb-2 ${
                                  currentSize === size.id ? 'text-white' : 'text-slate-200'
                                }`}>
                                  {size.dimensions}
                                </div>
                                <div className={`text-xs ${
                                  currentSize === size.id ? 'text-blue-200' : 'text-slate-400'
                                }`}>
                                  {size.price.toLocaleString()} ₽
                                </div>
                                {currentSize === size.id && (
                                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Sparkle effects for active elements */}
                    {isEnabled && (
                      <>
                        <div className="absolute top-3 right-3 w-1 h-1 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-6 right-12 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
                        <div className="absolute bottom-3 left-3 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-1000"></div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Summary with Glassmorphism */}
          <div className="mt-8 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl p-6 border border-slate-500/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Icon name="Calculator" size={18} className="text-white" />
                </div>
                Итого за комплектацию
              </h4>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {Object.entries(selectedElements)
                  .filter(([, config]) => config.enabled)
                  .reduce((total, [elementId, config]) => {
                    const element = monumentElements[elementId as keyof typeof monumentElements];
                    const size = element.sizes.find((s: any) => s.id === config.size);
                    return total + (size?.price || 0);
                  }, 0)
                  .toLocaleString()} ₽
              </div>
            </div>
            
            <div className="grid gap-3">
              {Object.entries(selectedElements)
                .filter(([, config]) => config.enabled)
                .map(([elementId, config]) => {
                  const element = monumentElements[elementId as keyof typeof monumentElements];
                  const size = element.sizes.find((s: any) => s.id === config.size);
                  return (
                    <div key={elementId} className="flex justify-between items-center bg-slate-600/20 rounded-lg p-4 border border-slate-500/20 backdrop-blur-sm hover:bg-slate-500/30 transition-all">
                      <div className="flex items-center gap-3">
                        <Icon name={element.icon} size={16} className="text-slate-300" />
                        <span className="text-slate-200 font-medium">
                          {element.name}
                        </span>
                        <span className="text-slate-400 text-sm">
                          ({size?.dimensions})
                        </span>
                      </div>
                      <span className="font-bold text-white">
                        {size?.price.toLocaleString()} ₽
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}