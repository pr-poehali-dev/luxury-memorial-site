import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MenuSection {
  title: string;
  items: MenuItem[];
  showMore?: boolean;
  expandable?: boolean;
}

interface MenuItem {
  title: string;
  href: string;
  isPopular?: boolean;
}

const catalogData: MenuSection[] = [
  {
    title: 'По форме',
    expandable: true,
    items: [
      { title: 'Прямые', href: '/catalog?form=straight' },
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
      { title: 'С портретом', href: '/catalog?elements=portrait', isPopular: true },
      { title: 'С гравировкой', href: '/catalog?elements=engraving' },
      { title: 'С фотокерамикой', href: '/catalog?elements=photo-ceramic' },
      { title: 'С бронзовыми элементами', href: '/catalog?elements=bronze' },
      { title: 'С позолотой', href: '/catalog?elements=gilding' },
      { title: 'С цветным портретом', href: '/catalog?elements=color-portrait' },
      { title: 'С эпитафией', href: '/catalog?elements=epitaph' },
      { title: 'С датами жизни', href: '/catalog?elements=dates' },
    ]
  },
  {
    title: 'Для кого',
    items: [
      { title: 'Мужские', href: '/catalog?for=men', isPopular: true },
      { title: 'Женские', href: '/catalog?for=women', isPopular: true },
      { title: 'Детские', href: '/catalog?for=children' },
      { title: 'Семейные', href: '/catalog?for=family' },
      { title: 'Военные', href: '/catalog?for=military' },
      { title: 'Религиозные', href: '/catalog?for=religious' },
      { title: 'Двойные памятники', href: '/catalog?for=double' },
    ]
  },
  {
    title: 'По материалу',
    expandable: true,
    items: [
      { title: 'Гранит чёрный', href: '/catalog?material=black-granite', isPopular: true },
      { title: 'Гранит красный', href: '/catalog?material=red-granite' },
      { title: 'Гранит серый', href: '/catalog?material=gray-granite' },
      { title: 'Гранит зелёный', href: '/catalog?material=green-granite' },
      { title: 'Мрамор белый', href: '/catalog?material=white-marble' },
      { title: 'Мрамор чёрный', href: '/catalog?material=black-marble' },
      { title: 'Лабрадорит', href: '/catalog?material=labradorite' },
      { title: 'Габбро-диабаз', href: '/catalog?material=gabbro' },
      { title: 'Базальт', href: '/catalog?material=basalt' },
      { title: 'Кварцит', href: '/catalog?material=quartzite' },
    ]
  },
  {
    title: 'По стоимости',
    items: [
      { title: 'До 30 000 ₽', href: '/catalog?price=0-30000' },
      { title: '30 000 - 50 000 ₽', href: '/catalog?price=30000-50000', isPopular: true },
      { title: '50 000 - 100 000 ₽', href: '/catalog?price=50000-100000', isPopular: true },
      { title: '100 000 - 200 000 ₽', href: '/catalog?price=100000-200000' },
      { title: 'От 200 000 ₽', href: '/catalog?price=200000+' },
      { title: 'Эконом класс', href: '/catalog?class=economy' },
      { title: 'Премиум класс', href: '/catalog?class=premium' },
      { title: 'Элит класс', href: '/catalog?class=elite' },
    ]
  }
];

export default function CatalogMenu() {
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

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary text-primary-foreground hover:bg-primary/90 data-[state=open]:bg-primary/90">
            Каталог памятников
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-screen max-w-6xl p-6 bg-background border rounded-lg shadow-lg">
              {/* Заголовок */}
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Каталог памятников и надгробий
                </h3>
                <p className="text-muted-foreground text-sm">
                  Выберите подходящий памятник из более чем 500 моделей
                </p>
              </div>

              {/* Основная сетка категорий */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {catalogData.map((section, index) => (
                  <div 
                    key={section.title} 
                    className={cn(
                      "space-y-3",
                      index === 0 && "md:col-span-2 lg:col-span-2 xl:col-span-2" // Делаем первую секцию шире
                    )}
                  >
                    {/* Заголовок секции */}
                    <div className="border-b border-border pb-2">
                      <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">
                        {section.title}
                      </h4>
                    </div>

                    {/* Список элементов */}
                    <ul className="space-y-2">
                      {getVisibleItems(section).map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.href}
                            className={cn(
                              "block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1 px-2 rounded hover:bg-muted/50",
                              item.isPopular && "text-primary font-medium"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <span>{item.title}</span>
                              {item.isPopular && (
                                <span className="text-xs bg-primary/10 text-primary px-1 py-0.5 rounded">
                                  Популярный
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Кнопка "Развернуть" */}
                    {hasMoreItems(section) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(section.title)}
                        className="w-full justify-between text-xs text-muted-foreground hover:text-primary"
                      >
                        <span>
                          {expandedSections.includes(section.title) 
                            ? 'Свернуть' 
                            : `Показать ещё ${section.items.length - 6}`
                          }
                        </span>
                        {expandedSections.includes(section.title) ? (
                          <ChevronDown className="h-3 w-3" />
                        ) : (
                          <ChevronRight className="h-3 w-3" />
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Нижняя панель с основными ссылками */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link 
                    to="/catalog" 
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Посмотреть весь каталог
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link 
                    to="/new" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Новинки
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link 
                    to="/popular" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Популярные
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link 
                    to="/sale" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Скидки
                  </Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}