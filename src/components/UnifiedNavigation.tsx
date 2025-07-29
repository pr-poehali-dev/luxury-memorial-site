import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { useDropdown } from '@/contexts/DropdownContext';

// Данные для разделов
const monumentCategories = [
  {
    id: 'forms',
    name: 'Формы',
    items: [
      'Вертикальные', 'Горизонтальные', 'Фигурные', 'Книжка', 'Арка', 'Крест',
      'Сердце', 'Двойные', 'Тройные', 'Детские', 'Мусульманские', 'Еврейские'
    ]
  },
  {
    id: 'materials',
    name: 'Материалы', 
    items: [
      'Гранит черный', 'Гранит серый', 'Гранит красный', 'Гранит зеленый',
      'Мрамор белый', 'Мрамор черный', 'Габбро', 'Лабрадорит', 'Базальт'
    ]
  },
  {
    id: 'recipient',
    name: 'Кому',
    items: [
      'Отцу', 'Военным', 'Маме', 'Дедушке', 'Женский', 'Мужской', 'Семейные',
      'Бабушке', 'Брату', 'Дочери', 'Сестре', 'Лётчику', 'Мужу', 'Рыбаку',
      'Жене', 'Водителю', 'Родителям', 'Охотнику', 'Умершему', 'Младенцу'
    ]
  }
];

const complexItems = [
  'Все комплексы', 'Комбинированный гранит', 'С оградой', 'Со стеклом',
  'На одного', 'С лавочкой', 'Угловые', 'На двоих', 'Семейные',
  'Православные', 'Детские', 'Европейские'
];

const improvementItems = [
  'Цветники', 'Гранитная плитка', 'Столики и лавочки', 'Кованые ограды',
  'Тротуарная плитка', 'Щебень', 'Газон', 'Бордюр бетонный', 'Мозаика',
  'Мемориальные доски', 'Надгробные плиты', 'Вазы и лампады',
  'Цоколи из гранита', 'Шары и балясины', 'Брусчатка'
];

const decorationItems = [
  { title: 'Портреты на камне', href: '/catalog?category=decoration&type=portraits' },
  { title: 'Гравировка текста', href: '/catalog?category=decoration&type=engraving' },
  { title: 'Художественная резьба', href: '/catalog?category=decoration&type=carving' },
  { title: 'Золочение букв', href: '/catalog?category=decoration&type=gilding' },
  { title: 'Фотокерамика', href: '/catalog?category=decoration&type=photo-ceramics' },
];

const infoItems = [
  { title: 'О компании', href: '/about' },
  { title: 'Доставка и установка', href: '/delivery' },
  { title: 'Гарантии', href: '/warranty' },
  { title: 'Контакты', href: '/contacts' },
  { title: 'Часто задаваемые вопросы', href: '/faq' },
];

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const UnifiedNavigation = () => {
  const { activeDropdown, setActiveDropdown } = useDropdown();
  const [activeTab, setActiveTab] = useState('forms');
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setActiveDropdown]);

  const handleMouseEnter = (section: string) => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActiveDropdown(section);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150);
    }
  };

  const buttonClass = "text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium border border-transparent hover:border-gray-200 rounded-md transition-all duration-200";
  const activeButtonClass = "text-gray-900 bg-gray-100 border-gray-200";

  const renderMonumentsContent = () => {
    const activeCategory = monumentCategories.find(cat => cat.id === activeTab);
    return (
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
          {monumentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === category.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {activeCategory && (
          <div className="grid grid-cols-4 gap-4">
            {activeCategory.items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderSimpleList = (items: string[]) => (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-1">
        {items.map((item, index) => (
          <a
            key={index}
            href="#"
            className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );

  const renderNavigationContent = (items: any[], title: string) => (
    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
      <li className="row-span-3">
        <NavigationMenuLink asChild>
          <Link
            to={`/catalog?category=${title.toLowerCase()}`}
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          >
            <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
            <p className="text-sm leading-tight text-muted-foreground">
              Посмотреть все товары в категории "{title}"
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
      {items.map((subItem) => (
        <ListItem
          key={subItem.title}
          href={subItem.href}
          title={subItem.title}
        />
      ))}
    </ul>
  );

  const renderDropdownContent = () => {
    switch (activeDropdown) {
      case 'monuments':
        return renderMonumentsContent();
      case 'complexes':
        return renderSimpleList(complexItems);
      case 'improvement':
        return renderSimpleList(improvementItems);
      case 'decoration':
        return renderNavigationContent(decorationItems, 'Оформление');
      case 'information':
        return renderNavigationContent(infoItems, 'Информация');
      default:
        return null;
    }
  };

  if (isMobile) {
    return null; // Mobile menu handled separately
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Navigation Buttons */}
      <div 
        className="flex items-center space-x-2"
        onMouseLeave={handleMouseLeave}
      >
        <Button
          variant="ghost"
          className={cn(buttonClass, activeDropdown === 'monuments' && activeButtonClass)}
          onMouseEnter={() => handleMouseEnter('monuments')}
        >
          Памятники
          <Icon name="ChevronDown" size={16} className="ml-1" />
        </Button>

        <Button
          variant="ghost"
          className={cn(buttonClass, activeDropdown === 'complexes' && activeButtonClass)}
          onMouseEnter={() => handleMouseEnter('complexes')}
        >
          Комплексы
          <Icon name="ChevronDown" size={16} className="ml-1" />
        </Button>

        <Button
          variant="ghost"
          className={cn(buttonClass, activeDropdown === 'improvement' && activeButtonClass)}
          onMouseEnter={() => handleMouseEnter('improvement')}
        >
          Благоустройство
          <Icon name="ChevronDown" size={16} className="ml-1" />
        </Button>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={cn(buttonClass, "h-auto")}
                onMouseEnter={() => handleMouseEnter('decoration')}
              >
                Оформление
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {renderNavigationContent(decorationItems, 'Оформление')}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className={cn(buttonClass, "h-auto")}
                onMouseEnter={() => handleMouseEnter('information')}
              >
                Информация
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {renderNavigationContent(infoItems, 'Информация')}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={buttonClass} asChild>
                <Link to="/contacts">
                  Контакты
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Unified Dropdown Area */}
      {activeDropdown && ['monuments', 'complexes', 'improvement'].includes(activeDropdown) && (
        <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
          {renderDropdownContent()}
        </div>
      )}
    </div>
  );
};

export default UnifiedNavigation;