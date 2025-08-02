import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuSection {
  title: string;
  items: MenuItem[];
  expandable?: boolean;
  showMore?: boolean;
}

interface MenuItem {
  title: string;
  href: string;
  isPopular?: boolean;
  description?: string;
}

const catalogSections: MenuSection[] = [
  {
    title: 'По форме',
    expandable: true,
    items: [
      { title: 'Прямые', href: '/catalog?form=straight', isPopular: true },
      { title: 'Вертикальные', href: '/catalog?form=vertical', isPopular: true },
      { title: 'Горизонтальные', href: '/catalog?form=horizontal', isPopular: true },
      { title: 'Резные', href: '/catalog?form=carved' },
      { title: 'Фигурные', href: '/catalog?form=figured' },
      { title: 'Двойные', href: '/catalog?form=double' },
      { title: 'Эксклюзивные', href: '/catalog?form=exclusive' },
      { title: 'Сердце', href: '/catalog?form=heart' },
      { title: 'С Крестом', href: '/catalog?form=cross' },
      { title: 'Кресты из гранита', href: '/catalog?form=granite-cross' },
      { title: 'Цветы', href: '/catalog?form=flowers' },
      { title: 'Деревья (Берёза)', href: '/catalog?form=trees' },
      { title: 'Ангел', href: '/catalog?form=angel' },
      { title: 'Птицы (Лебеди, голуби)', href: '/catalog?form=birds' },
      { title: 'Скорбящая', href: '/catalog?form=mourning' },
      { title: 'Свеча', href: '/catalog?form=candle' },
      { title: 'Арка', href: '/catalog?form=arch' },
      { title: 'Составные', href: '/catalog?form=composite' },
    ]
  },
  {
    title: 'С элементами',
    items: [
      { title: 'С портретом', href: '/catalog?elements=portrait', isPopular: true, description: 'Памятники с качественными портретами' },
      { title: 'С гравировкой', href: '/catalog?elements=engraving', description: 'Художественная гравировка текста' },
      { title: 'С фотокерамикой', href: '/catalog?elements=photo-ceramic', description: 'Долговечные фотопортреты' },
      { title: 'С бронзовыми элементами', href: '/catalog?elements=bronze', description: 'Элементы из качественной бронзы' },
      { title: 'С позолотой', href: '/catalog?elements=gilding', description: 'Золочение букв и элементов' },
      { title: 'С цветным портретом', href: '/catalog?elements=color-portrait', description: 'Цветные художественные портреты' },
      { title: 'С эпитафией', href: '/catalog?elements=epitaph', description: 'Памятные надписи и цитаты' },
      { title: 'С датами жизни', href: '/catalog?elements=dates', description: 'Красивое оформление дат' },
    ]
  },
  {
    title: 'Для кого',
    items: [
      { title: 'Мужские', href: '/catalog?for=men', isPopular: true, description: 'Памятники для мужчин' },
      { title: 'Женские', href: '/catalog?for=women', isPopular: true, description: 'Памятники для женщин' },
      { title: 'Детские', href: '/catalog?for=children', description: 'Особые памятники для детей' },
      { title: 'Семейные', href: '/catalog?for=family', description: 'Памятники для супругов и семей' },
      { title: 'Военные', href: '/catalog?for=military', description: 'Памятники для военнослужащих' },
      { title: 'Религиозные', href: '/catalog?for=religious', description: 'С религиозной символикой' },
      { title: 'Двойные памятники', href: '/catalog?for=double', description: 'Для двух человек' },
    ]
  },
  {
    title: 'По материалу',
    expandable: true,
    items: [
      { title: 'Гранит чёрный', href: '/catalog?material=black-granite', isPopular: true, description: 'Классический чёрный гранит' },
      { title: 'Гранит красный', href: '/catalog?material=red-granite', description: 'Элегантный красный гранит' },
      { title: 'Гранит серый', href: '/catalog?material=gray-granite', description: 'Универсальный серый гранит' },
      { title: 'Гранит зелёный', href: '/catalog?material=green-granite', description: 'Изысканный зелёный гранит' },
      { title: 'Мрамор белый', href: '/catalog?material=white-marble', description: 'Благородный белый мрамор' },
      { title: 'Мрамор чёрный', href: '/catalog?material=black-marble', description: 'Роскошный чёрный мрамор' },
      { title: 'Лабрадорит', href: '/catalog?material=labradorite', description: 'Уникальный блестящий камень' },
      { title: 'Габбро-диабаз', href: '/catalog?material=gabbro', description: 'Прочный тёмный камень' },
      { title: 'Базальт', href: '/catalog?material=basalt', description: 'Вулканический камень' },
      { title: 'Кварцит', href: '/catalog?material=quartzite', description: 'Долговечный натуральный камень' },
    ]
  },
  {
    title: 'По стоимости',
    items: [
      { title: 'До 30 000 ₽', href: '/catalog?price=0-30000', description: 'Доступные памятники' },
      { title: '30 000 - 50 000 ₽', href: '/catalog?price=30000-50000', isPopular: true, description: 'Оптимальное соотношение цена-качество' },
      { title: '50 000 - 100 000 ₽', href: '/catalog?price=50000-100000', isPopular: true, description: 'Качественные памятники' },
      { title: '100 000 - 200 000 ₽', href: '/catalog?price=100000-200000', description: 'Премиальные памятники' },
      { title: 'От 200 000 ₽', href: '/catalog?price=200000+', description: 'Эксклюзивные памятники' },
      { title: 'Эконом класс', href: '/catalog?class=economy', description: 'Простые качественные памятники' },
      { title: 'Премиум класс', href: '/catalog?class=premium', description: 'Памятники повышенного качества' },
      { title: 'Элит класс', href: '/catalog?class=elite', description: 'Роскошные эксклюзивные памятники' },
    ]
  }
];

export default function HeaderBottomMenu() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const getVisibleItems = (section: MenuSection) => {
    if (!section.expandable) return section.items;
    
    const isExpanded = expandedSections.includes(section.title);
    return isExpanded ? section.items : section.items.slice(0, 6);
  };

  const hasMoreItems = (section: MenuSection) => {
    return section.expandable && section.items.length > 6;
  };

  const handleMouseEnter = (sectionTitle: string) => {
    setActiveSection(sectionTitle);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

  return (
    <div className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Основные кнопки меню */}
          <div 
            className="flex items-center justify-center py-3 space-x-6"
            onMouseLeave={handleMouseLeave}
          >
            {catalogSections.map((section) => (
              <div key={section.title} className="relative">
                <Button
                  variant="ghost"
                  className={cn(
                    "text-slate-700 hover:text-slate-900 hover:bg-white px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-1",
                    activeSection === section.title && "bg-white text-slate-900 shadow-sm"
                  )}
                  onMouseEnter={() => handleMouseEnter(section.title)}
                >
                  <span>{section.title}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>

          {/* Выпадающее меню */}
          {activeSection && (
            <div 
              className="absolute top-full left-0 right-0 bg-white border border-slate-200 shadow-lg z-50 animate-in fade-in-0 slide-in-from-top-2 duration-300"
              onMouseEnter={() => setActiveSection(activeSection)}
              onMouseLeave={handleMouseLeave}
            >
              {(() => {
                const section = catalogSections.find(s => s.title === activeSection);
                if (!section) return null;

                return (
                  <div className="p-6">
                    {/* Заголовок секции */}
                    <div className="mb-6 text-center">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Выберите подходящий вариант из нашего каталога
                      </p>
                    </div>

                    {/* Сетка элементов */}
                    <div className={cn(
                      "grid gap-3",
                      section.title === 'По форме' ? "grid-cols-6" : "grid-cols-4"
                    )}>
                      {getVisibleItems(section).map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className={cn(
                            "group block p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-transparent hover:border-slate-200",
                            item.isPopular && "bg-primary/5 border-primary/20"
                          )}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className={cn(
                                "text-sm font-medium group-hover:text-primary transition-colors",
                                item.isPopular ? "text-primary" : "text-slate-700"
                              )}>
                                {item.title}
                              </div>
                              {item.description && (
                                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            {item.isPopular && (
                              <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                ТОП
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Кнопка "Развернуть" */}
                    {hasMoreItems(section) && (
                      <div className="mt-6 text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleSection(section.title)}
                          className="text-slate-600 hover:text-slate-900"
                        >
                          <span>
                            {expandedSections.includes(section.title) 
                              ? 'Свернуть' 
                              : `Показать ещё ${section.items.length - 6} товаров`
                            }
                          </span>
                          {expandedSections.includes(section.title) ? (
                            <ChevronDown className="ml-2 h-3 w-3" />
                          ) : (
                            <ChevronRight className="ml-2 h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    )}

                    {/* Быстрые ссылки внизу */}
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-center space-x-6 text-sm">
                        <Link 
                          to="/catalog" 
                          className="text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Весь каталог
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link 
                          to="/new" 
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          Новинки
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link 
                          to="/popular" 
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          Популярные
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link 
                          to="/sale" 
                          className="text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          Скидки
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}