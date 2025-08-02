import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageCircle', href: 'https://wa.me/71234567890', color: 'text-green-600' },
    { name: 'Telegram', icon: 'Send', href: 'https://t.me/memorial_studio', color: 'text-blue-500' },
    { name: 'VKontakte', icon: 'Users', href: 'https://vk.com/memorial_studio', color: 'text-blue-600' },
    { name: 'Одноклассники', icon: 'Globe', href: 'https://ok.ru/memorial_studio', color: 'text-orange-500' },
  ];

  const catalogLinks = [
    { title: 'Каталог памятников', href: '/catalog' },
    { title: 'Памятники на могилу', href: '/catalog?category=monuments' },
    { title: 'Ограды на могилу', href: '/catalog?category=fences' },
    { title: 'Гранитная мастерская', href: '/workshop' },
    { title: 'Установка', href: '/installation' },
    { title: 'Купить памятник', href: '/catalog' },
  ];

  const infoLinks = [
    { title: 'О нас', href: '/about' },
    { title: 'Как заказать памятник?', href: '/how-to-order' },
    { title: 'Фотографии работ', href: '/gallery' },
    { title: 'Изготовление', href: '/manufacturing' },
    { title: 'Города', href: '/cities' },
    { title: 'Кладбища', href: '/cemeteries' },
  ];

  const legalLinks = [
    { title: 'Политика конфиденциальности', href: '/privacy-policy' },
    { title: 'Обработка персональных данных', href: '/personal-data' },
    { title: 'Договор оферты', href: '/offer-agreement' },
    { title: 'Карта сайта', href: '/sitemap' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info & Contact */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                  <Icon name="Mountain" size={20} className="text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Вечная Память</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Мемориальная мастерская полного цикла. Изготавливаем и устанавливаем 
                памятники, ограды, надгробия из гранита и мрамора с 2010 года.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+71234567890" className="font-medium hover:text-primary transition-colors">
                    +7 (123) 456-78-90
                  </a>
                  <p className="text-xs text-slate-400">Бесплатно по России</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@memorial.ru" className="hover:text-primary transition-colors">
                  info@memorial.ru
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="MapPin" size={18} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <p>г. Москва, ул. Мемориальная, 15</p>
                  <p className="text-slate-400 mt-1">
                    Пн-Пт: 9:00-18:00<br />
                    Сб-Вс: 10:00-16:00
                  </p>
                </div>
              </div>
            </div>

            {/* Call Manager Button */}
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать менеджера
            </Button>

            {/* Social Networks */}
            <div>
              <h4 className="font-medium mb-3">Мы в социальных сетях</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors group"
                    title={social.name}
                  >
                    <Icon 
                      name={social.icon as any} 
                      size={18} 
                      className={`${social.color} group-hover:scale-110 transition-transform`} 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Каталог и услуги</h3>
            <ul className="space-y-2">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-slate-300 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-slate-300 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions & Legal */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4">Быстрые действия</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800" asChild>
                  <Link to="/catalog">
                    <Icon name="Search" size={16} className="mr-2" />
                    Подобрать памятник
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800" asChild>
                  <Link to="/calculator">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Рассчитать стоимость
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800" asChild>
                  <Link to="/gallery">
                    <Icon name="Image" size={16} className="mr-2" />
                    Смотреть работы
                  </Link>
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-medium mb-3">Правовая информация</h4>
              <ul className="space-y-1">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-slate-400 hover:text-slate-300 text-xs transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificates */}
            <div>
              <h4 className="font-medium mb-3">Сертификаты</h4>
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-slate-800 rounded border border-slate-600 flex items-center justify-center">
                  <span className="text-xs font-bold">ISO</span>
                </div>
                <div className="w-12 h-8 bg-slate-800 rounded border border-slate-600 flex items-center justify-center">
                  <span className="text-xs font-bold">РСТ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-400">
            <p>© 2024 Вечная Память. Все права защищены.</p>
            <div className="flex items-center space-x-4">
              <span>ИНН: 7701234567</span>
              <span>ОГРН: 1037701234567</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-green-500" />
              <span>Данные защищены SSL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} className="text-blue-500" />
              <span>Лицензия № 12345</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}