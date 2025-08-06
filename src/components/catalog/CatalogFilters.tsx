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
        <div className="bg-muted/30 rounded-lg p-2 md:p-3">
          <div className="flex gap-2 items-center justify-start">
            {/* Categories dropdown */}
            <div className="w-auto">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Категория</label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="h-8 w-32 bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors text-sm">
                  <SelectValue placeholder="Выберите" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-lg">
                  {categories.map(category => (
                    <SelectItem 
                      key={category.id} 
                      value={category.id}
                      className="hover:bg-primary/5 rounded cursor-pointer transition-colors text-sm"
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
            <div className="w-auto">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Цена</label>
              <Select value={selectedPrice} onValueChange={onPriceChange}>
                <SelectTrigger className="h-8 w-28 bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors text-sm">
                  <SelectValue placeholder="Любая" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-lg">
                  {priceRanges.map(range => (
                    <SelectItem 
                      key={range.id} 
                      value={range.id}
                      className="hover:bg-primary/5 rounded cursor-pointer transition-colors text-sm"
                    >
                      {range.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}