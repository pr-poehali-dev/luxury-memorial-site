import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Icon from '@/components/ui/icon';
import { useApp } from '@/contexts/AppContext';
import { MainSection } from './MenuTypes';

interface MobileMenuProps {
  mainSections: MainSection[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({ 
  mainSections, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}: MobileMenuProps) {
  const [mobileExpandedSections, setMobileExpandedSections] = useState<string[]>([]);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<string[]>([]);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { state, getCartCount } = useApp();

  const toggleMobileSection = (sectionId: string) => {
    setMobileExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleMobileCategory = (categoryTitle: string) => {
    setMobileExpandedCategories(prev => 
      prev.includes(categoryTitle)
        ? prev.filter(title => title !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  return (
    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icon name="Menu" size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[320px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-left">Каталог товаров</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-4">
          {/* Поиск */}
          <div className="bg-slate-50 rounded-lg p-3">
            {!mobileSearchOpen && (
              <Button
                variant="ghost"
                className="w-full justify-start p-2 h-auto"
                onClick={() => setMobileSearchOpen(true)}
              >
                <Icon name="Search" size={18} className="mr-3 text-slate-500" />
                <span className="text-slate-600">Поиск товаров...</span>
              </Button>
            )}
            {mobileSearchOpen && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Введите запрос для поиска..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => setMobileSearchOpen(false)}
                  >
                    <Icon name="X" size={16} />
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1">
                    <Icon name="Search" size={14} className="mr-1" />
                    Найти
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setMobileSearchOpen(false)}>
                    Отмена
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Основные разделы */}
          {mainSections.map((section) => (
            <Collapsible key={section.id}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-4 h-auto text-left border rounded-lg hover:bg-slate-50"
                  onClick={() => toggleMobileSection(section.id)}
                >
                  <div className="font-semibold text-slate-900">{section.title}</div>
                  <Icon 
                    name={mobileExpandedSections.includes(section.id) ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                  />
                </Button>
              </CollapsibleTrigger>
              
              {mobileExpandedSections.includes(section.id) && (
                <CollapsibleContent className="mt-2 ml-4 space-y-3">
                  {/* Ссылка на весь раздел */}
                  <Link
                    to={section.href}
                    className="block p-2 text-sm font-medium text-primary hover:bg-primary/5 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Все {section.title.toLowerCase()}
                  </Link>
                  
                  {/* Категории раздела */}
                  {section.categories.map((category) => (
                    <Collapsible key={category.title}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between p-2 h-auto text-left text-sm"
                          onClick={() => toggleMobileCategory(category.title)}
                        >
                          <span className="font-medium text-primary">{category.title}</span>
                          <Icon 
                            name={mobileExpandedCategories.includes(category.title) ? "ChevronUp" : "ChevronDown"} 
                            size={14} 
                          />
                        </Button>
                      </CollapsibleTrigger>
                      
                      {mobileExpandedCategories.includes(category.title) && (
                        <CollapsibleContent className="ml-2 mt-2 space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="block p-2 text-xs rounded hover:bg-slate-50 transition-colors text-slate-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span>{item.title}</span>
                            </Link>
                          ))}
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ))}
                </CollapsibleContent>
              )}
            </Collapsible>
          ))}

          {/* Контакты */}
          <Link
            to="/contacts"
            className="block p-4 border rounded-lg font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Контакты
          </Link>

          {/* Функциональные ссылки */}
          <div className="pt-4 border-t space-y-3">
            <div className="text-xs font-medium text-slate-500 px-2">ФУНКЦИИ</div>
            
            <Link
              to="/favorites"
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <Icon name="Heart" size={18} className="text-red-500" />
                <span className="font-medium">Избранное</span>
              </div>
              {state.favorites.length > 0 && (
                <Badge variant="destructive" className="rounded-full">
                  {state.favorites.length}
                </Badge>
              )}
            </Link>

            <Link
              to="/comparison"
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <Icon name="BarChart3" size={18} className="text-blue-500" />
                <span className="font-medium">Сравнение</span>
              </div>
              {state.comparison.length > 0 && (
                <Badge variant="secondary" className="rounded-full">
                  {state.comparison.length}
                </Badge>
              )}
            </Link>

            <Link
              to="/recently-viewed"
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <Icon name="Eye" size={18} className="text-slate-500" />
                <span className="font-medium">Просмотренные</span>
              </div>
              {state.recentlyViewed.length > 0 && (
                <Badge variant="outline" className="rounded-full">
                  {state.recentlyViewed.length}
                </Badge>
              )}
            </Link>

            <Link
              to="/cart"
              className="flex items-center justify-between p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-3">
                <Icon name="ShoppingCart" size={18} className="text-primary" />
                <span className="font-medium text-primary">Корзина</span>
              </div>
              {getCartCount() > 0 && (
                <Badge className="rounded-full bg-primary">
                  {getCartCount()}
                </Badge>
              )}
            </Link>
          </div>

          {/* Контактная информация */}
          <div className="pt-4 border-t space-y-3">
            <div className="text-xs font-medium text-slate-500 px-2">КОНТАКТЫ</div>
            
            <div className="space-y-3 px-2">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-green-500" />
                <div>
                  <div className="font-medium text-sm">+7 (495) 201-32-27</div>
                  <div className="text-xs text-slate-500">Звонки с 9:00 до 21:00</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-blue-500" />
                <div>
                  <div className="font-medium text-sm">info@postament.ru</div>
                  <div className="text-xs text-slate-500">Ответим в течение часа</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-red-500" />
                <div>
                  <div className="font-medium text-sm">Москва и область</div>
                  <div className="text-xs text-slate-500">Выезд мастера бесплатно</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}