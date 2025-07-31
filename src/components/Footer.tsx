import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { title: 'Каталог', href: '/catalog', icon: 'Mountain' },
    { title: 'Портфолио', href: '/portfolio', icon: 'Image' },
    { title: 'О нас', href: '/about', icon: 'Info' },
    { title: 'Контакты', href: '/contacts', icon: 'MapPin' },
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageCircle', href: 'https://wa.me/+74952013227' },
    { name: 'Telegram', icon: 'Send', href: 'https://t.me/memorial_studio' },
    { name: 'VKontakte', icon: 'Users', href: 'https://vk.com/memorial_studio' },
    { name: 'Instagram', icon: 'Camera', href: 'https://instagram.com/memorial_studio' },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                <Icon name="Mountain" size={28} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Вечная Память</h3>
                <p className="text-slate-400 text-sm">Памятники с 2009 года</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Изготавливаем памятники из премиального гранита и мрамора в собственной мастерской
            </p>

            {/* Contact Cards */}
            <div className="space-y-3">
              <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={18} className="text-primary" />
                </div>
                <div>
                  <a href="tel:+74952013227" className="font-semibold hover:text-primary transition-colors">
                    +7 (495) 201-32-27
                  </a>
                  <p className="text-xs text-slate-400">Звоните с 9:00 до 18:00</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium">Москва, ул. Мастерская, 15</p>
                  <p className="text-xs text-slate-400">Работаем без выходных</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg">Быстрые ссылки</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="flex items-center space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800 hover:border-primary/50 hover:bg-slate-800 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name={link.icon as any} size={16} className="text-primary" />
                  </div>
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-2xl border border-primary/20">
              <h4 className="font-bold mb-2">Бесплатная консультация</h4>
              <p className="text-sm text-slate-300 mb-4">Поможем выбрать памятник и рассчитаем точную стоимость</p>
              <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 rounded-xl">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>

          {/* Social & Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <Icon 
                        name={social.icon as any} 
                        size={16} 
                        className="text-slate-400 group-hover:text-white transition-colors" 
                      />
                    </div>
                    <span className="text-sm font-medium group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                <Icon name="Award" size={18} className="text-green-400" />
                <div>
                  <p className="font-medium text-sm">15+ лет опыта</p>
                  <p className="text-xs text-slate-400">2000+ памятников</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                <Icon name="Shield" size={18} className="text-blue-400" />
                <div>
                  <p className="font-medium text-sm">Пожизненная гарантия</p>
                  <p className="text-xs text-slate-400">На все виды работ</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-slate-900 rounded-xl border border-slate-800">
                <Icon name="Truck" size={18} className="text-purple-400" />
                <div>
                  <p className="font-medium text-sm">Доставка и установка</p>
                  <p className="text-xs text-slate-400">Включены в стоимость</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              © 2024 Вечная Память — изготовление памятников в Москве
            </p>
            
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <Link to="/offer-agreement" className="hover:text-slate-400 transition-colors">
                Договор оферты
              </Link>
              <Link to="/sitemap" className="hover:text-slate-400 transition-colors">
                Карта сайта
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}