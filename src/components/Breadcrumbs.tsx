import { useLocation, Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

interface BreadcrumbItem {
  path: string;
  label: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Маппинг путей к читаемым названиям
  const pathLabels: Record<string, string> = {
    'catalog': 'Каталог',
    'product': 'Товар',
    'cart': 'Корзина',
    'favorites': 'Избранное',
    'comparison': 'Сравнение',
    'recently-viewed': 'Просмотренные',
    'how-to-order': 'Как заказать',
    'troekurovskoye-cemetery': 'Троекуровское кладбище',
    'balashiha-monuments': 'Памятники Балашиха',
    'portfolio': 'Портфолио',
    'about': 'О компании',
    'contacts': 'Контакты',
    'privacy-policy': 'Политика конфиденциальности',
    'personal-data': 'Персональные данные',
    'offer-agreement': 'Договор оферты',
    'sitemap': 'Карта сайта'
  };

  // Если находимся на главной странице, не показываем хлебные крошки
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { path: '/', label: 'Главная' }
  ];

  let currentPath = '';
  pathnames.forEach((name, index) => {
    currentPath += `/${name}`;
    const label = pathLabels[name] || name;
    breadcrumbs.push({
      path: currentPath,
      label: label
    });
  });

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <Icon 
                  name="ChevronRight" 
                  size={16} 
                  className="mx-2 text-muted-foreground" 
                />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-foreground">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.path}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;