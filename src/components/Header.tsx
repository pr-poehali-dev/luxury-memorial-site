import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
      { title: 'Вертикальные памятники', href: '/vertical-monuments' },
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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { state, getCartCount } = useApp();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left side - Communication */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/74952013227" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors"
                title="WhatsApp"
              >
                <Icon name="MessageCircle" size={16} />
                <span className="hidden sm:inline text-sm">WhatsApp</span>
              </a>

              {/* Email */}
              <a 
                href="mailto:info@postament.ru" 
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                title="Почта"
              >
                <Icon name="Mail" size={16} />
                <span className="hidden md:inline text-sm">Почта</span>
              </a>

              {/* User actions */}
              <div className="flex items-center space-x-2 ml-4">
                {/* Cart */}
                <Button variant="ghost" size="icon" className="relative h-9 w-9 text-gray-600 hover:text-gray-900 hover:bg-gray-50" asChild>
                  <Link to="/cart">
                    <Icon name="ShoppingCart" size={18} />
                    {getCartCount() > 0 && (
                      <Badge 
                        variant="default" 
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white"
                      >
                        {getCartCount()}
                      </Badge>
                    )}
                  </Link>
                </Button>

                {/* Comparison */}
                <Button variant="ghost" size="icon" className="relative h-9 w-9 text-gray-600 hover:text-gray-900 hover:bg-gray-50" asChild>
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

                {/* Favorites */}
                <Button variant="ghost" size="icon" className="relative h-9 w-9 text-gray-600 hover:text-gray-900 hover:bg-gray-50" asChild>
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
              {/* Call request button */}
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-600 transition-colors"
                title="Заказать звонок"
              >
                <Icon name="PhoneCall" size={16} />
                <span className="hidden lg:inline text-sm">Заказать звонок</span>
              </button>

              {/* Phone number */}
              <a 
                href="tel:+74952013227" 
                className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 font-medium"
              >
                <Icon name="Phone" size={16} />
                <span>+7 (495) 201-32-27</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="border-b">
        <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <Icon name="Mountain" size={20} className="text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Вечная Память</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="h-10">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {item.title}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Посмотреть все товары в категории "{item.title}"
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        href={subItem.href}
                        title={subItem.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            {/* Contacts as Navigation Item */}
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                <Link to="/contacts" className="h-10">
                  Контакты
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Header Actions */}
        <div className="flex items-center space-x-2">

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Меню</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-2">
                {menuItems.map((item) => (
                  <Collapsible key={item.title}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-between h-auto p-3"
                      >
                        <span className="text-left">{item.title}</span>
                        <Icon name="ChevronDown" size={16} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-1">
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Все {item.title.toLowerCase()}
                      </Link>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}

                {/* Contacts Link */}
                <Link
                  to="/contacts"
                  className="block px-3 py-2 text-sm hover:text-foreground rounded-md hover:bg-accent font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </Link>
                
                {/* Mobile Functional Links */}
                <div className="pt-4 border-t space-y-2">
                  <div className="px-3 py-1 text-xs text-muted-foreground font-medium">Функции</div>
                  
                  <Link
                    to="/favorites"
                    className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name="Heart" size={16} />
                      <span>Избранное</span>
                    </div>
                    {state.favorites.length > 0 && (
                      <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {state.favorites.length}
                      </Badge>
                    )}
                  </Link>

                  <Link
                    to="/comparison"
                    className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name="BarChart3" size={16} />
                      <span>Сравнение</span>
                    </div>
                    {state.comparison.length > 0 && (
                      <Badge variant="secondary" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {state.comparison.length}
                      </Badge>
                    )}
                  </Link>

                  <Link
                    to="/recently-viewed"
                    className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name="Eye" size={16} />
                      <span>Просмотренные</span>
                    </div>
                    {state.recentlyViewed.length > 0 && (
                      <Badge variant="outline" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {state.recentlyViewed.length}
                      </Badge>
                    )}
                  </Link>

                  <Link
                    to="/cart"
                    className="flex items-center justify-between px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon name="ShoppingCart" size={16} />
                      <span>Корзина</span>
                    </div>
                    {getCartCount() > 0 && (
                      <Badge variant="default" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {getCartCount()}
                      </Badge>
                    )}
                  </Link>
                </div>

                {/* Mobile Contact */}
                <div className="pt-4 border-t">
                  <div className="px-3 py-1 text-xs text-muted-foreground font-medium">Контакты</div>
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <Icon name="Phone" size={16} />
                    <span className="text-sm font-medium">+7 (495) 201-32-27</span>
                  </div>
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <Icon name="Mail" size={16} />
                    <span className="text-sm">info@postament.ru</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      </div>
    </header>
  );
}