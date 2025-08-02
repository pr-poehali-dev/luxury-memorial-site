import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useApp } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

// Типы для размеров памятников
type MonumentSize = 'стела' | 'тумба' | 'цветник';

interface SizeVariant {
  id: string;
  dimensions: string;
  priceModifier: number;
}

interface SizeOption {
  value: MonumentSize;
  label: string;
  variants: SizeVariant[];
}

interface Monument {
  id: number;
  title: string;
  subtitle?: string;
  price: string;
  originalPrice?: string | null;
  image: string;
  material: string;
  category: string;
  dimensions?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

interface ProductCardProps {
  monument: Monument;
  sizeOptions: SizeOption[];
  selectedSize: MonumentSize;
  selectedVariant: string;
  currentPrice: number;
  onSizeChange: (size: MonumentSize) => void;
  onVariantChange: (variantId: string) => void;
}

export default function ProductCard({
  monument,
  sizeOptions,
  selectedSize,
  selectedVariant,
  currentPrice,
  onSizeChange,
  onVariantChange
}: ProductCardProps) {
  const { addToFavorites, addToComparison, isInFavorites, isInComparison } = useApp();

  const getCurrentOriginalPrice = () => {
    if (!monument.originalPrice) return null;
    
    const basePrice = parseInt(monument.originalPrice.replace(/[^\d]/g, ''));
    
    for (const sizeOption of sizeOptions) {
      const variant = sizeOption.variants.find(v => v.id === selectedVariant);
      if (variant) {
        return Math.round(basePrice * variant.priceModifier);
      }
    }
    return basePrice;
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-square overflow-hidden">
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
      </CardHeader>
      
      <CardContent className="space-y-3">
        {/* Кнопки выбора типа размера */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Тип:</div>
          <div className="grid grid-cols-3 gap-1">
            {sizeOptions.map(option => {
              const isSelected = selectedSize === option.value;
              return (
                <Button
                  key={option.value}
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  className={`text-xs ${
                    isSelected 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-muted"
                  }`}
                  onClick={() => onSizeChange(option.value)}
                >
                  {option.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Выпадающий список размеров */}
        <div className="space-y-2">
          <div className="text-sm font-medium text-muted-foreground">Размер:</div>
          <Select 
            value={selectedVariant} 
            onValueChange={onVariantChange}
          >
            <SelectTrigger className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(() => {
                const selectedSizeOption = sizeOptions.find(opt => opt.value === selectedSize);
                return selectedSizeOption?.variants.map(variant => {
                  const basePrice = parseInt(monument.price.replace(/[^\d]/g, ''));
                  const price = Math.round(basePrice * variant.priceModifier);
                  return (
                    <SelectItem key={variant.id} value={variant.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{variant.dimensions}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {price.toLocaleString()} ₽
                        </span>
                      </div>
                    </SelectItem>
                  );
                });
              })()}
            </SelectContent>
          </Select>
        </div>
        
        {/* Цена выбранного размера */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              {currentPrice.toLocaleString()} ₽
            </span>
            {monument.originalPrice && (
              <span className="text-sm line-through text-muted-foreground">
                {getCurrentOriginalPrice()?.toLocaleString()} ₽
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to={`/product/${monument.id}`}>
              Подробнее
            </Link>
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
        </div>
      </CardContent>
    </Card>
  );
}