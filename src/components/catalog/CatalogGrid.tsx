import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import MonumentCard from './MonumentCard';
import { Monument } from './CatalogData';

interface CatalogGridProps {
  monuments: Monument[];
  onAddToFavorites: (monument: Monument) => void;
  onAddToComparison: (monument: Monument) => void;
  onReset: () => void;
  isInFavorites: (id: number) => boolean;
  isInComparison: (id: number) => boolean;
}

export default function CatalogGrid({
  monuments,
  onAddToFavorites,
  onAddToComparison,
  onReset,
  isInFavorites,
  isInComparison
}: CatalogGridProps) {
  return (
    <section className="pb-16 px-4">
      <div className="container mx-auto">
        <div>
          {/* Results header */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <h2 className="font-heading text-2xl font-semibold">
                Найдено: {monuments.length} памятников
              </h2>
            </div>
            <Select defaultValue="popular">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                <SelectItem value="newest">Сначала новые</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {monuments.map(monument => (
              <MonumentCard
                key={monument.id}
                monument={monument}
                onAddToFavorites={onAddToFavorites}
                onAddToComparison={onAddToComparison}
                isInFavorites={isInFavorites}
                isInComparison={isInComparison}
              />
            ))}
          </div>

          {/* No results */}
          {monuments.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-semibold mb-2">
                Не найдено памятников по выбранным фильтрам
              </h3>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить параметры поиска или сбросить фильтры
              </p>
              <Button onClick={onReset}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}