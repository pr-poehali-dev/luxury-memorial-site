import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { categories, materials, priceRanges } from './CatalogData';

interface CatalogFiltersProps {
  selectedCategory: string;
  selectedMaterial: string;
  selectedPrice: string;
  onCategoryChange: (value: string) => void;
  onMaterialChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onReset: () => void;
}

export default function CatalogFilters({
  selectedCategory,
  selectedMaterial,
  selectedPrice,
  onCategoryChange,
  onMaterialChange,
  onPriceChange,
  onReset
}: CatalogFiltersProps) {
  return (
    <section className="pb-6 px-4">
      <div className="container mx-auto">
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex flex-wrap gap-3 items-end">
            {/* Categories dropdown */}
            <div className="flex-1 min-w-[160px]">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Категория</label>
              <Select value={selectedCategory} onValueChange={onCategoryChange}>
                <SelectTrigger className="h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Material dropdown */}
            <div className="flex-1 min-w-[160px]">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Материал</label>
              <Select value={selectedMaterial} onValueChange={onMaterialChange}>
                <SelectTrigger className="h-9">
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

            {/* Price dropdown */}
            <div className="flex-1 min-w-[160px]">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Цена</label>
              <Select value={selectedPrice} onValueChange={onPriceChange}>
                <SelectTrigger className="h-9">
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

            {/* Reset button */}
            <div className="flex-shrink-0">
              <Button 
                variant="outline" 
                size="sm"
                onClick={onReset}
                className="h-9"
              >
                <Icon name="RotateCcw" size={14} className="mr-1" />
                Сбросить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}