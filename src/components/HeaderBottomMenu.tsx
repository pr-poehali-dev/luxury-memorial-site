import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { mainSections } from './header/MenuData';
import DesktopNavigation from './header/DesktopNavigation';
import DropdownMenu from './header/DropdownMenu';
import MobileMenu from './header/MobileMenu';

export default function HeaderBottomMenu() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const handleMouseLeave = () => {
    setActiveSection(null);
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
            <DesktopNavigation 
              mainSections={mainSections}
              activeSection={activeSection}
              onMouseEnter={handleMouseEnter}
            />

            {/* Мобильное меню */}
            <div className="lg:hidden">
              <MobileMenu 
                mainSections={mainSections}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
              />
            </div>
          </div>

          {/* Выпадающее меню */}
          <DropdownMenu 
            activeSection={activeSection}
            onMouseLeave={handleMouseLeave}
            mainSections={mainSections}
          />
        </div>
      </div>
    </div>
  );
}