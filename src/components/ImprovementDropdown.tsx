import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const improvementItems = [
  'Цветники',
  'Гранитная плитка',
  'Столики и лавочки',
  'Кованые ограды',
  'Тротуарная плитка',
  'Щебень',
  'Газон',
  'Бордюр бетонный',
  'Мозаика',
  'Мемориальные доски',
  'Надгробные плиты',
  'Вазы и лампады',
  'Цоколи из гранита',
  'Шары и балясины',
  'Брусчатка'
];

const ImprovementDropdown = () => {
  const [isImprovementOpen, setIsImprovementOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsImprovementOpen(false);
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
      setIsImprovementOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsImprovementOpen(false);
      }, 150);
    }
  };

  const toggleImprovement = () => {
    setIsImprovementOpen(!isImprovementOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            Благоустройство
            <Icon name="ChevronDown" size={16} className="ml-1" />
          </Button>

          {/* Desktop Dropdown */}
          {isImprovementOpen && (
            <div className="absolute left-0 top-full mt-1 w-[320px] bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
              <div className="p-4">
                <div className="grid grid-cols-2 gap-1">
                  {improvementItems.map((item, index) => (
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
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 mt-1 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <div className="p-4 space-y-2">
            <div>
              <Button
                variant="ghost"
                onClick={toggleImprovement}
                className="w-full justify-between text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium"
              >
                Благоустройство
                <Icon 
                  name="ChevronDown" 
                  size={16} 
                  className={`transition-transform ${isImprovementOpen ? 'rotate-180' : ''}`} 
                />
              </Button>

              {/* Mobile Submenu */}
              {isImprovementOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {improvementItems.map((item, index) => (
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ImprovementDropdown;