import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MainSection, MenuSection } from './MenuTypes';

interface DropdownMenuProps {
  activeSection: string | null;
  onMouseLeave: () => void;
  mainSections: MainSection[];
}

export default function DropdownMenu({ 
  activeSection, 
  onMouseLeave, 
  mainSections 
}: DropdownMenuProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(t => t !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const getVisibleItems = (category: MenuSection) => {
    if (!category.expandable) return category.items;
    
    const isExpanded = expandedCategories.includes(category.title);
    return isExpanded ? category.items : category.items.slice(0, 6);
  };

  const hasMoreItems = (category: MenuSection) => {
    return category.expandable && category.items.length > 6;
  };

  if (!activeSection) return null;

  const section = mainSections.find(s => s.id === activeSection);
  if (!section || section.categories.length === 0) return null;

  return (
    <div 
      className="absolute top-full left-0 right-0 bg-white border border-slate-200 shadow-lg z-50 animate-in fade-in-0 slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto"
      onMouseEnter={() => {}}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-4">
        {/* Основная сетка с изображением справа */}
        <div className="grid grid-cols-4 gap-6">
          {/* Первые 3 столбца для категорий */}
          <div className="col-span-3">
            <div className={cn(
              "grid gap-4",
              section.categories.length <= 2 ? "grid-cols-2" :
              section.categories.length === 3 ? "grid-cols-3" :
              "grid-cols-3"
            )}>
              {section.categories.map((category) => (
                <div 
                  key={category.title} 
                  className="space-y-2"
                  onMouseEnter={() => setHoveredCategory(category.title)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Заголовок категории */}
                  <div className="border-b border-slate-200 pb-1">
                    <h4 className="font-semibold text-sm text-primary uppercase tracking-wide">
                      {category.title}
                    </h4>
                  </div>

                  {/* Список элементов категории */}
                  <div className="space-y-1">
                    {getVisibleItems(category).map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block text-sm text-slate-600 hover:text-primary transition-colors duration-200 py-0.5 px-1 rounded hover:bg-slate-50"
                      >
                        <span>{item.title}</span>
                        {item.description && (
                          <p className="text-xs text-slate-500 mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    ))}
                  </div>

                  {/* Кнопка "Развернуть" */}
                  {hasMoreItems(category) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCategory(category.title)}
                      className="w-full justify-between text-xs text-slate-500 hover:text-slate-700"
                    >
                      <span>
                        {expandedCategories.includes(category.title) 
                          ? 'Свернуть' 
                          : `Показать ещё ${category.items.length - 6}`
                        }
                      </span>
                      {expandedCategories.includes(category.title) ? (
                        <ChevronDown className="h-3 w-3" />
                      ) : (
                        <ChevronRight className="h-3 w-3" />
                      )}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4-й столбец для изображения предпросмотра */}
          <div className="col-span-1">
            {section.previewImage && (
              <div className="sticky top-4">
                <div className="aspect-square overflow-hidden rounded-lg bg-white border border-slate-200">
                  <img 
                    src={section.previewImage} 
                    alt={`Предпросмотр ${section.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}