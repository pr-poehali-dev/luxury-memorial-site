import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MenuCategory {
  id: string;
  name: string;
  items: string[];
}

const monumentCategories: MenuCategory[] = [
  {
    id: 'forms',
    name: 'Формы',
    items: [
      'Вертикальные', 'Горизонтальные', 'Бюджетные', 'Резные', 'Фигурные',
      'Комбинированные', 'Двойные', 'Эксклюзивные', 'Барельеф', 'Красивые',
      'Часовни', 'Голгофы', 'С сердцем', 'С цветами', 'С березой', 'С ангелом',
      'С лебедем', 'Кресты', 'Скорбящая', 'Арка', 'С плащаницей', 'Церковь',
      'С розами', 'С голубем', 'С крестом', 'Со свечой', 'С деревом'
    ]
  },
  {
    id: 'colors',
    name: 'Цвет',
    items: [
      'Чёрные', 'Белые', 'Красные', 'Розовые', 'Голубые', 'Синие', 'Зелёные', 'Коричневые'
    ]
  },
  {
    id: 'materials',
    name: 'Материалы',
    items: [
      'Памятники из гранита', 'Визаж Блю', 'Памятники из мрамора', 'Куру Грей',
      'Индиан Аврора', 'Сопка Бунтина', 'Змеевик', 'Сюскюянсаари', 'Балтик Грин',
      'Блю Пёрл', 'Дымовский', 'Гранатовый Амфиболит', 'Мансуровский', 'Кулгавара'
    ]
  },
  {
    id: 'types',
    name: 'Типы',
    items: [
      'Европейские', 'Прямоугольные', 'На троих', 'Гранитные', 'Колумбарии',
      'Современные', 'Простые', 'Скульптуры', 'Оригинальные', 'Ритуальные',
      'Детские', 'Угловые', 'Флаг', 'Камень на могилу', 'Надгробные'
    ]
  },
  {
    id: 'religion',
    name: 'Вера',
    items: ['Католические', 'Мусульманские', 'Армянские', 'Православные']
  },
  {
    id: 'for-whom',
    name: 'Кому',
    items: [
      'Отцу', 'Военным', 'Маме', 'Дедушке', 'Женский', 'Мужской', 'Семейные',
      'Бабушке', 'Брату', 'Дочери', 'Сестре', 'Лётчику', 'Мужу', 'Рыбаку',
      'Жене', 'Водителю', 'Родителям', 'Охотнику', 'Умершему', 'Младенцу',
      'Сыну', 'Ветеранам'
    ]
  },
  {
    id: 'price',
    name: 'Цена',
    items: ['Недорогие', 'Дешёвые', 'Дорогие', 'Элитные']
  }
];

const MonumentsDropdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMonumentsOpen, setIsMonumentsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('forms');
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMonumentsOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setIsMonumentsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsMonumentsOpen(false);
      }, 150);
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMonuments = () => {
    if (isMobile) {
      setIsMonumentsOpen(!isMonumentsOpen);
    }
  };

  const activeCategory = monumentCategories.find(cat => cat.id === activeTab);

  return (
    <div className="relative" ref={menuRef}>
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center h-10"
          >
            Памятники
            <Icon name="ChevronDown" size={16} className="ml-1" />
          </Button>

          {/* Desktop Dropdown */}
          {isMonumentsOpen && (
            <div className="absolute left-0 top-full mt-1 w-[90vw] max-w-[800px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <div className="p-6">
                {/* Tabs */}
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

                {/* Tab Content */}
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
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          onClick={toggleMobileMenu}
          className="text-gray-700 hover:text-gray-900 h-10 px-3"
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1">
          <div className="p-4 space-y-2">
            <div>
              <Button
                variant="ghost"
                onClick={toggleMonuments}
                className="w-full justify-between text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              >
                Памятники
                <Icon 
                  name="ChevronDown" 
                  size={16} 
                  className={`transition-transform ${isMonumentsOpen ? 'rotate-180' : ''}`} 
                />
              </Button>

              {/* Mobile Submenu */}
              {isMonumentsOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg">
                  {/* Mobile Tabs */}
                  <div className="flex overflow-x-auto p-3 gap-2">
                    {monumentCategories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveTab(category.id)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                          activeTab === category.id
                            ? 'text-blue-600 bg-blue-100'
                            : 'text-gray-600 bg-white hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Tab Content */}
                  {activeCategory && (
                    <div className="p-3 pt-0">
                      <div className="grid grid-cols-2 gap-2">
                        {activeCategory.items.map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className="text-sm text-gray-700 hover:text-gray-900 hover:bg-white px-3 py-2 rounded-md transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonumentsDropdown;