import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { categories, priceRanges } from './CatalogData';

interface CatalogFiltersProps {
  selectedCategory: string;
  selectedPrice: string;
  onCategoryChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onReset: () => void;
}

export default function CatalogFilters({
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
  onReset
}: CatalogFiltersProps) {
  return (
    <section className="pb-4 md:pb-6 px-4">
      <div className="container mx-auto">
        <div className="bg-muted/30 rounded-lg p-3 md:p-4">
          <div className="flex flex-wrap gap-2 md:gap-3 items-end">
            {/* Categories dropdown */}
            <div className="flex-1 min-w-[120px] md:min-w-[160px]">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Категория</label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="h-10 bg-white border-2 border-gray-200 rounded-xl hover:border-primary transition-colors shadow-sm">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-100 rounded-xl shadow-lg">
                  {categories.map(category => (
                    <SelectItem 
                      key={category.id} 
                      value={category.id}
                      className="hover:bg-primary/5 rounded-lg mx-1 my-0.5 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{category.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">({category.count})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price dropdown */}
            <div className="flex-1 min-w-[120px] md:min-w-[160px]">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Цена</label>
              <Select value={selectedPrice} onValueChange={onPriceChange}>
                <SelectTrigger className="h-10 bg-white border-2 border-gray-200 rounded-xl hover:border-primary transition-colors shadow-sm">
                  <SelectValue placeholder="Выберите цену" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-gray-100 rounded-xl shadow-lg">
                  {priceRanges.map(range => (
                    <SelectItem 
                      key={range.id} 
                      value={range.id}
                      className="hover:bg-primary/5 rounded-lg mx-1 my-0.5 cursor-pointer transition-colors"
                    >
                      {range.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reset button */}
            <div className="flex-shrink-0">
              <Button 
                variant="outline" 
                size="sm"
                onClick={onReset}
                className="h-10 bg-white border-2 border-gray-200 rounded-xl hover:border-red-400 hover:text-red-500 hover:bg-red-50 transition-all shadow-sm"
              >
                <Icon name="RotateCcw" size={14} className="mr-2" />
                <span className="hidden sm:inline">Сбросить</span>
                <span className="sm:hidden">Сброс</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}