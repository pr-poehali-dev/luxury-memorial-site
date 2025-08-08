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
      title: 'Памятники - Форма',
      icon: 'Mountain',
      links: [
        { title: 'Прямые памятники', href: '/catalog?form=straight', description: 'Классические прямоугольные памятники' },
        { title: 'Вертикальные памятники', href: '/catalog?form=vertical', description: 'Вытянутые по вертикали монументы' },
        { title: 'Горизонтальные памятники', href: '/catalog?form=horizontal', description: 'Широкие горизонтальные плиты' },
        { title: 'Резные памятники', href: '/catalog?form=carved', description: 'Художественная резка по камню' },
        { title: 'Фигурные памятники', href: '/catalog?form=figured', description: 'Необычные авторские формы' },
        { title: 'Двойные памятники', href: '/catalog?form=double', description: 'Памятники для двух человек' },
        { title: 'Эксклюзивные памятники', href: '/catalog?form=exclusive', description: 'Уникальные дизайнерские решения' },
        { title: 'Памятники-сердце', href: '/catalog?form=heart', description: 'Романтичная форма сердца' },
        { title: 'Памятники-крест', href: '/catalog?form=cross', description: 'Христианская символика' },
        { title: 'Памятники-арка', href: '/catalog?form=arch', description: 'Элегантная арочная форма' },
        { title: 'Составные памятники', href: '/catalog?form=composite', description: 'Многоэлементные композиции' },
      ]
    },
    {
      title: 'Памятники - Материал',
      icon: 'Gem',
      links: [
        { title: 'Гранитные памятники', href: '/catalog?material=granite', description: 'Прочный и долговечный гранит' },
        { title: 'Мраморные памятники', href: '/catalog?material=marble', description: 'Элегантный натуральный мрамор' },
        { title: 'Памятники из габбро', href: '/catalog?material=gabbro', description: 'Черный прочный габбро-диабаз' },
        { title: 'Базальтовые памятники', href: '/catalog?material=basalt', description: 'Темный вулканический базальт' },
        { title: 'Лабрадоритовые памятники', href: '/catalog?material=labradorite', description: 'Благородный лабрадорит с переливами' },
      ]
    },
    {
      title: 'Памятники - Цвет',
      icon: 'Palette',
      links: [
        { title: 'Черные памятники', href: '/catalog?color=black', description: 'Классический черный цвет' },
        { title: 'Серые памятники', href: '/catalog?color=gray', description: 'Благородные оттенки серого' },
        { title: 'Красные памятники', href: '/catalog?color=red', description: 'Красный гранит и мрамор' },
        { title: 'Зеленые памятники', href: '/catalog?color=green', description: 'Природные зеленые оттенки' },
        { title: 'Коричневые памятники', href: '/catalog?color=brown', description: 'Теплые коричневые тона' },
        { title: 'Белые памятники', href: '/catalog?color=white', description: 'Белый мрамор и светлый гранит' },
      ]
    },
    {
      title: 'Памятники - Размер',
      icon: 'Ruler',
      links: [
        { title: 'Малые памятники', href: '/catalog?size=small', description: 'Компактные памятники до 80 см' },
        { title: 'Средние памятники', href: '/catalog?size=medium', description: 'Стандартные размеры 80-120 см' },
        { title: 'Большие памятники', href: '/catalog?size=large', description: 'Крупные памятники свыше 120 см' },
        { title: 'Памятники нестандартных размеров', href: '/catalog?size=custom', description: 'Индивидуальные размеры на заказ' },
      ]
    },
    {
      title: 'Оформление - Портреты',
      icon: 'User',
      links: [
        { title: 'Фотокерамика', href: '/catalog?type=photo-ceramics', description: 'Керамические портреты на памятнике' },
        { title: 'Лазерная гравировка портрета', href: '/catalog?type=laser-portrait', description: 'Высокоточная лазерная гравировка' },
        { title: 'Цветные портреты', href: '/catalog?type=color-portraits', description: 'Яркие цветные изображения' },
        { title: 'Ручная гравировка портрета', href: '/catalog?type=hand-engraved-portrait', description: 'Художественная ручная работа' },
      ]
    },
    {
      title: 'Оформление - Надписи',
      icon: 'Type',
      links: [
        { title: 'Имена и даты', href: '/catalog?type=names-dates', description: 'Основная информация о покойном' },
        { title: 'Эпитафии', href: '/catalog?type=epitaphs-text', description: 'Памятные тексты и стихи' },
        { title: 'Шрифты', href: '/catalog?type=fonts', description: 'Различные варианты шрифтов' },
      ]
    },
    {
      title: 'Дополнительные элементы',
      icon: 'Plus',
      links: [
        { title: 'Цветники из гранита', href: '/catalog?type=granite-flowerbeds', description: 'Места для цветов из камня' },
        { title: 'Столы и скамейки', href: '/catalog?type=tables-benches', description: 'Мемориальная мебель из камня' },
        { title: 'Вазы для цветов', href: '/catalog?type=vases', description: 'Гранитные и мраморные вазы' },
        { title: 'Фонари памятные', href: '/catalog?type=memorial-lamps', description: 'Освещение для могилы' },
        { title: 'Кресты', href: '/catalog?type=crosses', description: 'Религиозные символы' },
      ]
    },
    {
      title: 'Благоустройство',
      icon: 'Wrench',
      links: [
        { title: 'Тротуарная плитка', href: '/catalog?type=paving-stones', description: 'Мощение дорожек на могиле' },
        { title: 'Мраморная крошка', href: '/catalog?type=marble-chips', description: 'Декоративная отсыпка' },
        { title: 'Искусственная трава', href: '/catalog?type=artificial-grass', description: 'Всесезонное озеленение' },
        { title: 'Ограды кованые', href: '/catalog?type=forged-fences', description: 'Художественная ковка' },
        { title: 'Ограды сварные', href: '/catalog?type=welded-fences', description: 'Прочные металлические ограды' },
        { title: 'Цоколи', href: '/catalog?type=plinths', description: 'Основания для памятников' },
      ]
    },
    {
      title: 'Услуги',
      icon: 'Settings',
      links: [
        { title: 'Как заказать памятник', href: '/how-to-order', description: 'Пошаговое руководство по заказу' },
        { title: 'Вызов менеджера', href: '/manager-call', description: 'Консультация на дому или кладбище' },
        { title: 'Дизайн памятников', href: '/monument-design', description: 'Создание индивидуального дизайна' },
        { title: 'Доставка', href: '/delivery', description: 'Условия доставки по регионам' },
        { title: 'Установка', href: '/installation', description: 'Профессиональная установка памятников' },
        { title: 'Оплата', href: '/payment', description: 'Способы оплаты и рассрочка' },
      ]
    },
    {
      title: 'О нас',
      icon: 'Info',
      links: [
        { title: 'О компании', href: '/about', description: 'История и философия компании' },
        { title: 'Гранитная мастерская', href: '/granite-workshop', description: 'Наше производство и технологии' },
        { title: 'Сертификаты', href: '/certificates', description: 'Документы о качестве и лицензии' },
        { title: 'Гарантии', href: '/warranty', description: 'Условия гарантийного обслуживания' },
        { title: 'Отзывы клиентов', href: '/reviews', description: 'Мнения наших клиентов' },
      ]
    },
    {
      title: 'Полезная информация',
      icon: 'BookOpen',
      links: [
        { title: 'Часто задаваемые вопросы', href: '/faq', description: 'Ответы на популярные вопросы' },
        { title: 'Фото наших работ', href: '/portfolio', description: 'Портфолио выполненных проектов' },
        { title: 'Кладбища Москвы и МО', href: '/cemeteries', description: 'Справочник кладбищ региона' },
        { title: 'Памятники в городах МО', href: '/regions/moscow-region', description: 'Установка в городах области' },
        { title: 'Сроки изготовления', href: '/production-times', description: 'Временные рамки изготовления' },
      ]
    },
    {
      title: 'Блог',
      icon: 'FileText',
      links: [
        { title: 'О благоустройстве могил', href: '/blog/grave-improvement', description: 'Советы по оформлению захоронений' },
        { title: 'О материалах', href: '/blog/materials', description: 'Информация о камне и других материалах' },
        { title: 'Нормативные документы', href: '/blog/regulations', description: 'Правила и требования кладбищ' },
        { title: 'О кладбищах', href: '/blog/cemeteries', description: 'История и особенности кладбищ' },
        { title: 'Уход за памятниками', href: '/care-guide', description: 'Как поддерживать памятник в хорошем состоянии' },
      ]
    },
    {
      title: 'Специальные страницы',
      icon: 'Star',
      links: [
        { title: 'Золочение надписей', href: '/gold-leaf', description: 'Золотое покрытие букв и рисунков' },
        { title: 'Скальпельная гравировка', href: '/scalpel-lettering', description: 'Точная ручная гравировка' },
        { title: 'Троекуровское кладбище', href: '/troekurovskoye-cemetery', description: 'Подробная информация о кладбище' },
      ]
    },
    {
      title: 'Правовая информация',
      icon: 'Shield',
      links: [
        { title: 'Политика конфиденциальности', href: '/privacy-policy', description: 'Обработка персональных данных' },
        { title: 'Публичная оферта', href: '/offer-agreement', description: 'Условия сотрудничества' },
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
              <div className="text-2xl font-bold text-primary mb-2">80+</div>
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
              <div className="text-2xl font-bold text-primary mb-2">16</div>
              <p className="text-sm text-muted-foreground">Кладбищ в справочнике</p>
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