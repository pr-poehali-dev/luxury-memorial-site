import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Sitemap() {
  const sitemapSections = [
    {
      title: 'Основные страницы',
      icon: 'Home',
      links: [
        { title: 'Главная страница', href: '/', description: 'Добро пожаловать в мемориальную мастерскую' },
        { title: 'Каталог памятников', href: '/catalog', description: 'Полный каталог мемориальных изделий' },
        { title: 'О нас', href: '/about', description: 'История и философия компании' },
        { title: 'Контакты', href: '/contacts', description: 'Адреса, телефоны, режим работы' },
      ]
    },
    {
      title: 'Каталог и товары',
      icon: 'Package',
      links: [
        { title: 'Памятники на могилу', href: '/catalog?category=monuments', description: 'Гранитные и мраморные памятники' },
        { title: 'Ограды на могилу', href: '/catalog?category=fences', description: 'Металлические и каменные ограды' },
        { title: 'Мемориальные комплексы', href: '/catalog?category=complexes', description: 'Комплексное оформление захоронений' },
        { title: 'Благоустройство', href: '/catalog?category=improvement', description: 'Облицовка, цветники, дорожки' },
        { title: 'Карточка товара', href: '/product/1', description: 'Детальная информация о памятнике' },
      ]
    },
    {
      title: 'Услуги',
      icon: 'Settings',
      links: [
        { title: 'Изготовление', href: '/manufacturing', description: 'Процесс изготовления памятников' },
        { title: 'Установка', href: '/installation', description: 'Профессиональная установка памятников' },
        { title: 'Гранитная мастерская', href: '/workshop', description: 'Наше производство и технологии' },
        { title: 'Как заказать памятник?', href: '/how-to-order', description: 'Пошаговое руководство по заказу' },
        { title: 'Калькулятор стоимости', href: '/calculator', description: 'Рассчитайте стоимость памятника онлайн' },
      ]
    },
    {
      title: 'Галерея и портфолио',
      icon: 'Image',
      links: [
        { title: 'Фотографии работ', href: '/gallery', description: 'Примеры выполненных проектов' },
        { title: 'Портфолио памятников', href: '/portfolio/monuments', description: 'Наши лучшие памятники' },
        { title: 'Портфолио оград', href: '/portfolio/fences', description: 'Установленные ограды' },
        { title: 'До и после', href: '/before-after', description: 'Преображение мест захоронения' },
      ]
    },
    {
      title: 'Личный кабинет',
      icon: 'User',
      links: [
        { title: 'Корзина', href: '/cart', description: 'Товары, добавленные в корзину' },
        { title: 'Избранное', href: '/favorites', description: 'Понравившиеся товары' },
        { title: 'Сравнение', href: '/comparison', description: 'Сравнение характеристик товаров' },
        { title: 'Недавно просмотренное', href: '/recently-viewed', description: 'История просмотров товаров' },
      ]
    },
    {
      title: 'География',
      icon: 'MapPin',
      links: [
        { title: 'Города', href: '/cities', description: 'Города, где мы работаем' },
        { title: 'Кладбища', href: '/cemeteries', description: 'Кладбища, где мы устанавливаем памятники' },
        { title: 'Доставка', href: '/delivery', description: 'Условия доставки по регионам' },
      ]
    },
    {
      title: 'Правовая информация',
      icon: 'FileText',
      links: [
        { title: 'Политика конфиденциальности', href: '/privacy-policy', description: 'Обработка персональных данных' },
        { title: 'Согласие на обработку данных', href: '/personal-data', description: 'Согласие пользователя' },
        { title: 'Договор оферты', href: '/offer-agreement', description: 'Условия сотрудничества' },
        { title: 'Карта сайта', href: '/sitemap', description: 'Все страницы сайта' },
      ]
    },
  ];

  return (
    <Layout>
      <div className="bg-background">
      
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Карта сайта</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полная навигация по всем разделам сайта мемориальной мастерской "Вечная Память". 
              Найдите нужную информацию быстро и удобно.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sitemapSections.map((section) => (
              <Card key={section.title} className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={section.icon as any} size={20} className="text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.links.map((link) => (
                      <div key={link.href} className="border-l-2 border-muted pl-4 hover:border-primary transition-colors">
                        <Link 
                          to={link.href}
                          className="block group"
                        >
                          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                            {link.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {link.description}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Страниц сайта</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Товаров в каталоге</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Фотографий работ</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Городов присутствия</p>
            </div>
          </div>

          {/* Search and Contact */}
          <div className="mt-16 text-center bg-muted rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Не нашли нужную информацию?</h2>
            <p className="text-muted-foreground mb-6">
              Используйте поиск по сайту или свяжитесь с нами напрямую
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacts"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Связаться с нами
              </Link>
              <Link 
                to="/catalog"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
              >
                <Icon name="Search" size={18} className="mr-2" />
                Поиск по каталогу
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      </div>
    </Layout>
  );
}