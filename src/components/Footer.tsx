import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: 'MessageCircle', 
      href: 'https://wa.me/78001234567', 
      color: 'from-green-600 to-green-700',
      bg: 'bg-green-500/15 hover:bg-green-500/25 border-green-500/30'
    },
    { 
      name: 'Telegram', 
      icon: 'Send', 
      href: 'https://t.me/memorial_studio', 
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-400/15 hover:bg-green-400/25 border-green-400/30'
    },
    { 
      name: 'VKontakte', 
      icon: 'Users', 
      href: 'https://vk.com/memorial_studio', 
      color: 'from-green-600 to-green-700',
      bg: 'bg-green-600/15 hover:bg-green-600/25 border-green-600/30'
    },
    { 
      name: 'Instagram', 
      icon: 'Instagram', 
      href: 'https://instagram.com/memorial_studio', 
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-500/15 hover:bg-green-500/25 border-green-500/30'
    }
  ];

  const catalogLinks = [
    { title: 'Каталог памятников', href: '/catalog', icon: 'Mountain' },
    { title: 'Памятники на могилу', href: '/catalog?category=monuments', icon: 'Square' },
    { title: 'Ограды на могилу', href: '/catalog?category=fences', icon: 'Grid3x3' },
    { title: 'Гранитная мастерская', href: '/workshop', icon: 'Hammer' },
    { title: 'Установка памятников', href: '/installation', icon: 'Wrench' },
    { title: 'Реставрация', href: '/restoration', icon: 'RefreshCw' }
  ];

  const infoLinks = [
    { title: 'О компании', href: '/about', icon: 'Info' },
    { title: 'Как заказать?', href: '/how-to-order', icon: 'HelpCircle' },
    { title: 'Галерея работ', href: '/gallery', icon: 'Image' },
    { title: 'Технологии', href: '/manufacturing', icon: 'Settings' },
    { title: 'Наши города', href: '/cities', icon: 'MapPin' },
    { title: 'Кладбища', href: '/cemeteries', icon: 'Map' }
  ];

  const quickActions = [
    { title: 'Бесплатный расчёт', href: '/calculator', icon: 'Calculator', accent: true },
    { title: 'Заказать звонок', href: '/callback', icon: 'Phone', accent: false },
    { title: 'Портфолио работ', href: '/portfolio', icon: 'Eye', accent: false },
    { title: 'Консультация', href: '/consultation', icon: 'MessageSquare', accent: false }
  ];

  const achievements = [
    { number: '14', label: 'лет опыта', icon: 'Calendar' },
    { number: '5000+', label: 'памятников', icon: 'Award' },
    { number: '50+', label: 'городов', icon: 'MapPin' },
    { number: '98%', label: 'довольных клиентов', icon: 'Heart' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Dark & Green Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-transparent to-slate-800/80"></div>
      </div>

      <div className="relative z-10 text-white">
        {/* Newsletter Section */}
        <div className="border-b border-green-500/20 bg-slate-800/40 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-500/30">
                <Icon name="Mail" size={16} />
                Подписка на новости
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
                Будьте в курсе новых памятников и акций
              </h3>
              <p className="text-gray-300 mb-6">
                Получайте эксклюзивные предложения и полезные советы по уходу за памятниками
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Ваш email адрес"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-700/60 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400/80 focus:bg-slate-700/80"
                    required
                  />
                  <Icon name="Mail" size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Button 
                  type="submit"
                  className={`px-6 transition-all duration-300 ${
                    isSubscribed 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/25 text-white'
                  }`}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Icon name="Check" size={16} className="mr-2" />
                      Подписка оформлена!
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={16} className="mr-2" />
                      Подписаться
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Icon name="Mountain" size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-2xl bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                      Вечная Память
                    </span>
                    <p className="text-xs text-gray-400 mt-1">Мемориальная мастерская</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Создаём памятники, которые хранят память поколений. Работаем с натуральным гранитом 
                  и мрамором, используя современные технологии гравировки и обработки камня.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.label}
                    className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={achievement.icon as any} size={16} className="text-green-600" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{achievement.number}</div>
                        <div className="text-xs text-gray-400">{achievement.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group hover:bg-slate-800/30 rounded-lg p-3 -mx-3 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Icon name="Phone" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <a href="tel:+78001234567" className="font-medium text-lg hover:text-green-400 transition-colors text-white">
                      +7 (800) 123-45-67
                    </a>
                    <p className="text-xs text-gray-500">Бесплатно по России • 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group hover:bg-slate-800/30 rounded-lg p-3 -mx-3 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Icon name="Mail" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <a href="mailto:info@memorial.ru" className="hover:text-green-400 transition-colors text-white">
                      info@memorial.ru
                    </a>
                    <p className="text-xs text-gray-400">Ответим в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group hover:bg-slate-700/30 rounded-lg p-3 -mx-3 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Icon name="MapPin" size={18} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-white">г. Москва, ул. Мемориальная, 15</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Пн-Пт: 9:00-18:00 • Сб-Вс: 10:00-16:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-white">
                  <Icon name="Users" size={18} className="text-green-600" />
                  Мы в социальных сетях
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative w-12 h-12 rounded-xl border transition-all duration-300 flex items-center justify-center group ${social.bg}`}
                      title={social.name}
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <Icon 
                        name={social.icon as any} 
                        size={20} 
                        className={`bg-gradient-to-r ${social.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} 
                      />
                      
                      {/* Tooltip */}
                      {hoveredSocial === social.name && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded border border-gray-700 animate-fadeIn">
                          {social.name}
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Catalog Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2 text-gray-900">
                <Icon name="Grid3x3" size={18} className="text-green-600" />
                Каталог
              </h3>
              <ul className="space-y-3">
                {catalogLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-700/60 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Icon name={link.icon as any} size={14} className="text-gray-400 group-hover:text-green-400" />
                      </div>
                      <span className="text-sm">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2 text-white">
                <Icon name="Info" size={18} className="text-green-600" />
                Информация
              </h3>
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center gap-3 text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <Icon name={link.icon as any} size={14} className="text-slate-400 group-hover:text-green-400" />
                      </div>
                      <span className="text-sm">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2 text-white">
                <Icon name="Zap" size={18} className="text-green-600" />
                Быстрые действия
              </h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Button 
                    key={action.href}
                    variant={action.accent ? "default" : "outline"} 
                    className={`w-full justify-start h-auto p-3 ${
                      action.accent 
                        ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl text-white' 
                        : 'border-green-500/30 text-gray-300 hover:text-white hover:bg-slate-700/50 hover:border-green-400/60'
                    }`} 
                    asChild
                  >
                    <Link to={action.href}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          action.accent ? 'bg-white/20' : 'bg-slate-700/60'
                        }`}>
                          <Icon name={action.icon as any} size={16} className={action.accent ? 'text-white' : 'text-green-400'} />
                        </div>
                        <span className="font-medium">{action.title}</span>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Certificates & Trust Badges */}
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-white">Сертификаты и гарантии</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-green-500/30 text-center group hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                    <Icon name="Shield" size={20} className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">ISO 9001</span>
                    <span className="text-xs text-gray-400">Качество</span>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-green-500/30 text-center group hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                    <Icon name="Award" size={20} className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">Лицензия</span>
                    <span className="text-xs text-gray-400">№ 12345</span>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-green-500/30 text-center group hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                    <Icon name="Clock" size={20} className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">Гарантия</span>
                    <span className="text-xs text-gray-400">10 лет</span>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 border border-green-500/30 text-center group hover:border-green-400/50 transition-all hover:shadow-lg hover:shadow-green-500/10">
                    <Icon name="Truck" size={20} className="text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">Доставка</span>
                    <span className="text-xs text-gray-400">Бесплатно</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

        {/* Bottom Footer */}
        <div className="bg-slate-900/60 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <Icon name="Copyright" size={16} />
                  © 2024 Вечная Память. Все права защищены.
                </p>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Icon name="Building" size={14} />
                    ИНН: 7701234567
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="FileText" size={14} />
                    ОГРН: 1037701234567
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <Icon name="Shield" size={16} />
                  <span>SSL защита</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Icon name="Lock" size={16} />
                  <span>Безопасные платежи</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Icon name="Headphones" size={16} />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-green-500/30">
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
                <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link to="/personal-data" className="hover:text-green-400 transition-colors">
                  Обработка персональных данных
                </Link>
                <Link to="/offer-agreement" className="hover:text-green-400 transition-colors">
                  Договор оферты
                </Link>
                <Link to="/sitemap" className="hover:text-green-400 transition-colors">
                  Карта сайта
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}