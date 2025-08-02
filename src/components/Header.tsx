import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HeaderBottomMenu from '@/components/HeaderBottomMenu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';

const menuItems = [
  {
    title: 'Памятники',
    href: '/catalog?category=monuments',
    items: [
      { title: 'Гранитные памятники', href: '/catalog?category=monuments&type=granite' },
      { title: 'Мраморные памятники', href: '/catalog?category=monuments&type=marble' },
      { title: 'Детские памятники', href: '/catalog?category=monuments&type=children' },
      { title: 'Семейные памятники', href: '/catalog?category=monuments&type=family' },
      { title: 'Эксклюзивные памятники', href: '/catalog?category=monuments&type=exclusive' },
    ],
  },
  {
    title: 'Комплексы',
    href: '/catalog?category=complexes',
    items: [
      { title: 'Мемориальные комплексы', href: '/catalog?category=complexes&type=memorial' },
      { title: 'Семейные захоронения', href: '/catalog?category=complexes&type=family' },
      { title: 'Элитные комплексы', href: '/catalog?category=complexes&type=elite' },
      { title: 'Склепы и усыпальницы', href: '/catalog?category=complexes&type=crypts' },
    ],
  },
  {
    title: 'Благоустройство',
    href: '/catalog?category=improvement',
    items: [
      { title: 'Облицовка могил', href: '/catalog?category=improvement&type=tiling' },
      { title: 'Цветники и вазы', href: '/catalog?category=improvement&type=flowers' },
      { title: 'Ограды и заборы', href: '/catalog?category=improvement&type=fences' },
      { title: 'Скамейки и столы', href: '/catalog?category=improvement&type=furniture' },
      { title: 'Дорожки и ступени', href: '/catalog?category=improvement&type=paths' },
    ],
  },
  {
    title: 'Оформление',
    href: '/catalog?category=decoration',
    items: [
      { title: 'Портреты на камне', href: '/catalog?category=decoration&type=portraits' },
      { title: 'Гравировка текста', href: '/catalog?category=decoration&type=engraving' },
      { title: 'Художественная резьба', href: '/catalog?category=decoration&type=carving' },
      { title: 'Золочение букв', href: '/catalog?category=decoration&type=gilding' },
      { title: 'Фотокерамика', href: '/catalog?category=decoration&type=photo-ceramics' },
    ],
  },
  {
    title: 'Информация',
    href: '/info',
    items: [
      { title: 'Как заказать памятник', href: '/how-to-order' },
      { title: 'Троекуровское кладбище', href: '/troekurovskoye-cemetery' },
      { title: 'Памятники в Балашихе', href: '/balashiha-monuments' },
      { title: 'Фото наших работ', href: '/portfolio' },
      { title: 'О компании', href: '/about' },
      { title: 'Доставка и установка', href: '/delivery' },
      { title: 'Гарантии', href: '/warranty' },
      { title: 'Контакты', href: '/contacts' },
      { title: 'Часто задаваемые вопросы', href: '/faq' },
    ],
  },
];

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white',
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state, getCartCount } = useApp();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left side - User actions */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 ml-4">
                {/* Cart */}
                <Button variant="ghost" className="relative h-auto px-3 py-2 text-green-600 hover:text-green-700 hover:bg-green-50" asChild>
                  <Link to="/cart" className="flex items-center space-x-2">
                    <Icon name="ShoppingBasket" size={18} />
                    <span className="text-sm font-medium">Корзина</span>
                    {getCartCount() > 0 && (
                      <Badge 
                        variant="default" 
                        className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-green-500 text-white animate-pulse"
                      >
                        {getCartCount()}
                      </Badge>
                    )}
                  </Link>
                </Button>

                {/* Comparison - скрыт на мобильных */}
                <Button variant="ghost" size="icon" className="relative h-9 w-9 text-gray-600 hover:text-gray-900 hover:bg-gray-50 hidden sm:inline-flex" asChild>
                  <Link to="/comparison">
                    <Icon name="BarChart3" size={18} />
                    {state.comparison.length > 0 && (
                      <Badge 
                        variant="default" 
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-blue-500 text-white"
                      >
                        {state.comparison.length}
                      </Badge>
                    )}
                  </Link>
                </Button>

                {/* Favorites - скрыт на мобильных */}
                <Button variant="ghost" size="icon" className="relative h-9 w-9 text-gray-600 hover:text-gray-900 hover:bg-gray-50 hidden sm:inline-flex" asChild>
                  <Link to="/favorites">
                    <Icon name="Heart" size={18} />
                    {state.favorites.length > 0 && (
                      <Badge 
                        variant="default" 
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-pink-500 text-white"
                      >
                        {state.favorites.length}
                      </Badge>
                    )}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Phone and call request */}
            <div className="flex items-center space-x-3">
              {/* Call request button - скрыт на мобильных */}
              <button 
                className="hidden sm:flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors"
                title="Заказать звонок"
              >
                <Icon name="PhoneCall" size={16} />
                <span className="hidden lg:inline text-sm">Заказать звонок</span>
              </button>

              {/* Phone number */}
              <a 
                href="tel:+74952013227" 
                className="text-gray-800 hover:text-green-600 font-medium transition-colors"
              >
                +7 (495) 201-32-27
              </a>
            </div>
          </div>
        </div>
      </div>

      
      {/* Нижнее меню навигации */}
      <HeaderBottomMenu />
    </header>
  );
}