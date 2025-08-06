import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MainSection } from './MenuTypes';

interface DesktopNavigationProps {
  mainSections: MainSection[];
  activeSection: string | null;
  onMouseEnter: (sectionId: string) => void;
}

export default function DesktopNavigation({ 
  mainSections, 
  activeSection, 
  onMouseEnter 
}: DesktopNavigationProps) {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {mainSections.map((section) => (
        <div key={section.id} className="relative">
          <Button
            variant="ghost"
            className={cn(
              "text-slate-700 hover:text-primary hover:bg-primary/5 px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-1",
              activeSection === section.id && "bg-primary/5 text-primary shadow-sm"
            )}
            onMouseEnter={() => onMouseEnter(section.id)}
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
  );
}