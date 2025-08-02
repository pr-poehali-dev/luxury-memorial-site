import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

interface MenuSection {
  title: string;
  items: MenuItem[];
  expandable?: boolean;
}

interface MenuItem {
  title: string;
  href: string;
  isPopular?: boolean;
  description?: string;
}

interface MainSection {
  id: string;
  title: string;
  href: string;
  categories: MenuSection[];
  previewImage?: string;
}

// Данные для всех разделов
const mainSections: MainSection[] = [
  {
    id: 'monuments',
    title: 'Памятники',
    href: '/catalog?category=monuments',
    previewImage: '/img/059d1a18-d96e-4d91-b532-10c19982dfb5.jpg',
    categories: [
      {
        title: 'Форма',
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
        title: 'Материал',
        expandable: true,
        items: [
          { title: 'Памятники из гранита', href: '/catalog?material=granite', isPopular: true },
          { title: 'Памятники из мрамора', href: '/catalog?material=marble', isPopular: true },
          { title: 'Габбро Диабаз', href: '/catalog?material=gabbro-diabaz' },
          { title: 'Мрамор Коелга', href: '/catalog?material=marble-koelga' },
          { title: 'Капустянский', href: '/catalog?material=kapustyansky' },
          { title: 'Дымовский', href: '/catalog?material=dymovsky' },
          { title: 'Мансуровский', href: '/catalog?material=mansurovsky' },
          { title: 'Сопка Бунтина', href: '/catalog?material=sopka-buntina' },
          { title: 'Балтик Грин', href: '/catalog?material=baltic-green' },
          { title: 'Гранатовый амфиболит', href: '/catalog?material=garnet-amphibolite' },
          { title: 'Змеевик', href: '/catalog?material=serpentine' },
          { title: 'Лабрадорит', href: '/catalog?material=labradorite' },
          { title: 'Лезниковский', href: '/catalog?material=leznikovsky' },
          { title: 'Блю пёрл', href: '/catalog?material=blue-pearl' },
          { title: 'Визаж Блю', href: '/catalog?material=visage-blue' },
          { title: 'Куру Грей', href: '/catalog?material=kuru-grey' },
          { title: 'Индиан Аврора', href: '/catalog?material=indian-aurora' },
          { title: 'Сюскюянсаари', href: '/catalog?material=syuskyuansaari' },
        ]
      },
      {
        title: 'Кому',
        expandable: true,
        items: [
          { title: 'Военный (СВО)', href: '/catalog?for=military-svo', isPopular: true },
          { title: 'Семейный', href: '/catalog?for=family', isPopular: true },
          { title: 'Европейские', href: '/catalog?for=european' },
          { title: 'Женский', href: '/catalog?for=women' },
          { title: 'Православный', href: '/catalog?for=orthodox' },
          { title: 'Мужской', href: '/catalog?for=men' },
          { title: 'Мусульманский', href: '/catalog?for=muslim' },
          { title: 'Родителям', href: '/catalog?for=parents' },
          { title: 'Маме', href: '/catalog?for=mother' },
          { title: 'Католический', href: '/catalog?for=catholic' },
          { title: 'Отцу', href: '/catalog?for=father' },
          { title: 'Детский', href: '/catalog?for=children' },
          { title: 'Армянские', href: '/catalog?for=armenian' },
          { title: 'Двойной', href: '/catalog?for=double' },
          { title: 'Еврейские', href: '/catalog?for=jewish' },
        ]
      },
      {
        title: 'Цвет',
        expandable: true,
        items: [
          { title: 'Чёрные', href: '/catalog?color=black', isPopular: true },
          { title: 'Белые', href: '/catalog?color=white', isPopular: true },
          { title: 'Зелёные', href: '/catalog?color=green' },
          { title: 'Красные', href: '/catalog?color=red' },
          { title: 'Серые', href: '/catalog?color=gray' },
          { title: 'Коричневые', href: '/catalog?color=brown' },
          { title: 'Синие', href: '/catalog?color=blue' },
          { title: 'Комбинированные', href: '/catalog?color=combined' },
        ]
      },
      {
        title: 'Цена',
        items: [
          { title: 'Недорогие', href: '/catalog?price=budget', isPopular: true },
          { title: 'Элитные', href: '/catalog?price=elite', isPopular: true },
        ]
      }
    ]
  },
  {
    id: 'complexes',
    title: 'Комплексы',
    href: '/catalog?category=complexes',
    previewImage: '/img/5964ad83-e43f-4005-a721-8f16011459d7.jpg',
    categories: [
      {
        title: 'Типы комплексов',
        items: [
          { title: 'Мемориальные комплексы', href: '/catalog?type=memorial', isPopular: true },
          { title: 'Семейные захоронения', href: '/catalog?type=family' },
          { title: 'Элитные комплексы', href: '/catalog?type=elite' },
          { title: 'Комбинированный гранит', href: '/catalog?type=combined-granite' },
          { title: 'С оградой', href: '/catalog?type=with-fence' },
          { title: 'Со стеклом', href: '/catalog?type=with-glass' },
          { title: 'С лавочкой', href: '/catalog?type=with-bench' },
          { title: 'Православные', href: '/catalog?type=orthodox' },
          { title: 'Европейские', href: '/catalog?type=european' },
        ]
      },
      {
        title: 'По размеру',
        items: [
          { title: 'На одного человека', href: '/catalog?size=single' },
          { title: 'На двоих', href: '/catalog?size=double', isPopular: true },
          { title: 'Семейные', href: '/catalog?size=family' },
          { title: 'Угловые', href: '/catalog?size=corner' },
        ]
      }
    ]
  },
  {
    id: 'improvement',
    title: 'Благоустройство',
    href: '/catalog?category=improvement',
    previewImage: '/img/57fe978f-1872-48be-a19d-a644801ee280.jpg',
    categories: [
      {
        title: 'Облицовка',
        items: [
          { title: 'Гранитная плитка', href: '/catalog?type=granite-tiles', isPopular: true },
          { title: 'Тротуарная плитка', href: '/catalog?type=paving-stones' },
          { title: 'Брусчатка', href: '/catalog?type=cobblestone' },
          { title: 'Мозаика', href: '/catalog?type=mosaic' },
          { title: 'Надгробные плиты', href: '/catalog?type=grave-slabs' },
        ]
      },
      {
        title: 'Ограждения',
        items: [
          { title: 'Кованые ограды', href: '/catalog?type=wrought-fences', isPopular: true },
          { title: 'Гранитные ограды', href: '/catalog?type=granite-fences' },
          { title: 'Бетонные ограды', href: '/catalog?type=concrete-fences' },
          { title: 'Металлические ограды', href: '/catalog?type=metal-fences' },
        ]
      },
      {
        title: 'Мебель и декор',
        items: [
          { title: 'Столики и лавочки', href: '/catalog?type=furniture' },
          { title: 'Цветники и вазы', href: '/catalog?type=planters' },
          { title: 'Вазы и лампады', href: '/catalog?type=vases' },
          { title: 'Шары и балясины', href: '/catalog?type=spheres' },
        ]
      }
    ]
  },
  {
    id: 'decoration',
    title: 'Оформление',
    href: '/catalog?category=decoration',
    previewImage: '/img/9eb6e1bb-9f90-48ad-ae6f-c2aa33ffae1e.jpg',
    categories: [
      {
        title: 'Портреты',
        items: [
          { title: 'Портреты на камне', href: '/catalog?type=stone-portraits', isPopular: true },
          { title: 'Фотокерамика', href: '/catalog?type=photo-ceramics', isPopular: true },
          { title: 'Цветные портреты', href: '/catalog?type=color-portraits' },
          { title: 'Чёрно-белые портреты', href: '/catalog?type=bw-portraits' },
        ]
      },
      {
        title: 'Гравировка',
        items: [
          { title: 'Гравировка текста', href: '/catalog?type=text-engraving' },
          { title: 'Художественная резьба', href: '/catalog?type=artistic-carving' },
          { title: 'Эпитафии', href: '/catalog?type=epitaphs' },
          { title: 'Даты жизни', href: '/catalog?type=life-dates' },
        ]
      },
      {
        title: 'Декоративные элементы',
        items: [
          { title: 'Золочение букв', href: '/catalog?type=letter-gilding' },
          { title: 'Бронзовые элементы', href: '/catalog?type=bronze-elements' },
          { title: 'Цветы и растения', href: '/catalog?type=floral-elements' },
          { title: 'Религиозные символы', href: '/catalog?type=religious-symbols' },
        ]
      }
    ]
  },
  {
    id: 'information',
    title: 'Информация',
    href: '/info',
    categories: [
      {
        title: 'Услуги',
        items: [
          { title: 'Как заказать памятник', href: '/how-to-order' },
          { title: 'Доставка и установка', href: '/delivery' },
          { title: 'Гарантии', href: '/warranty' },
          { title: 'Фото наших работ', href: '/portfolio' },
        ]
      },
      {
        title: 'О компании',
        items: [
          { title: 'О нас', href: '/about' },
          { title: 'Наши мастера', href: '/masters' },
          { title: 'Сертификаты', href: '/certificates' },
          { title: 'Отзывы клиентов', href: '/reviews' },
        ]
      },
      {
        title: 'Полезная информация',
        items: [
          { title: 'Троекуровское кладбище', href: '/troekurovskoye-cemetery' },
          { title: 'Памятники в Балашихе', href: '/balashiha-monuments' },
          { title: 'Часто задаваемые вопросы', href: '/faq' },
          { title: 'Уход за памятниками', href: '/care-guide' },
        ]
      }
    ]
  }
];

export default function HeaderBottomMenu() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSections, setMobileExpandedSections] = useState<string[]>([]);
  const [mobileExpandedCategories, setMobileExpandedCategories] = useState<string[]>([]);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const { state, getCartCount } = useApp();

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

  const handleMouseEnter = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
  };

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
    <div className="bg-slate-50 border-t border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Основная навигация */}
          <div 
            className="flex items-center justify-between py-3"
            onMouseLeave={handleMouseLeave}
          >
            {/* Логотип слева */}
            <Link to="/" className="flex items-center space-x-2 mr-8">
              <div className="h-7 w-7 rounded bg-primary flex items-center justify-center">
                <Icon name="Mountain" size={16} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-slate-900">Вечная Память</span>
            </Link>

            {/* Навигационные разделы - скрыто на мобильных */}
            <div className="hidden lg:flex items-center space-x-6">
              {mainSections.map((section) => (
                <div key={section.id} className="relative">
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-slate-700 hover:text-primary hover:bg-primary/5 px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-1",
                      activeSection === section.id && "bg-primary/5 text-primary shadow-sm"
                    )}
                    onMouseEnter={() => handleMouseEnter(section.id)}
                    asChild
                  >
                    <Link to={section.href}>
                      <span>{section.title}</span>
                      {section.categories.length > 0 && <ChevronDown className="h-3 w-3" />}
                    </Link>
                  </Button>
                </div>
              ))}

              {/* Контакты без выпадающего меню */}
              <Button
                variant="ghost"
                className="text-slate-700 hover:text-primary hover:bg-primary/5 px-4 py-2 text-sm font-medium transition-all duration-200"
                asChild
              >
                <Link to="/contacts">Контакты</Link>
              </Button>
            </div>

            {/* Мобильное меню */}
            <div className="lg:hidden">
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
            </div>
          </div>

          {/* Выпадающее меню */}
          {activeSection && (
            <div 
              className="absolute top-full left-0 right-0 bg-white border border-slate-200 shadow-lg z-50 animate-in fade-in-0 slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto"
              onMouseEnter={() => setActiveSection(activeSection)}
              onMouseLeave={handleMouseLeave}
            >
              {(() => {
                const section = mainSections.find(s => s.id === activeSection);
                if (!section || section.categories.length === 0) return null;

                return (
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
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                              <div className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
                                Предпросмотр
                              </div>
                              <div className="aspect-square overflow-hidden rounded-lg bg-white">
                                <img 
                                  src={section.previewImage} 
                                  alt={`Предпросмотр ${section.title}`}
                                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                              </div>
                              <div className="mt-2 text-xs text-slate-600 text-center">
                                {section.title}
                              </div>
                            </div>
                          </div>
                        )}
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