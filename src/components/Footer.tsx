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
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-500/10 hover:bg-green-500/20 border-green-500/20'
    },
    { 
      name: 'Telegram', 
      icon: 'Send', 
      href: 'https://t.me/memorial_studio', 
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20'
    },
    { 
      name: 'VKontakte', 
      icon: 'Users', 
      href: 'https://vk.com/memorial_studio', 
      color: 'from-blue-600 to-blue-700',
      bg: 'bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/20'
    },
    { 
      name: 'Instagram', 
      icon: 'Instagram', 
      href: 'https://instagram.com/memorial_studio', 
      color: 'from-pink-500 to-purple-600',
      bg: 'bg-gradient-to-r from-pink-500/10 to-purple-600/10 hover:from-pink-500/20 hover:to-purple-600/20 border-pink-500/20'
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      </div>

      <div className="relative z-10 text-white">
        {/* Newsletter Section */}
        <div className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/20">
                <Icon name="Mail" size={16} />
                Подписка на новости
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Будьте в курсе новых памятников и акций
              </h3>
              <p className="text-slate-400 mb-6">
                Получайте эксклюзивные предложения и полезные советы по уходу за памятниками
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="Ваш email адрес"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-500/50 focus:bg-slate-700/70"
                    required
                  />
                  <Icon name="Mail" size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                </div>
                <Button 
                  type="submit"
                  className={`px-6 transition-all duration-300 ${
                    isSubscribed 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25'
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
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Icon name="Mountain" size={24} className="text-white" />
                  </div>
                  <div>
                    <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Вечная Память
                    </span>
                    <p className="text-xs text-slate-400 mt-1">Мемориальная мастерская</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Создаём памятники, которые хранят память поколений. Работаем с натуральным гранитом 
                  и мрамором, используя современные технологии гравировки и обработки камня.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.label}
                    className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={achievement.icon as any} size={16} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{achievement.number}</div>
                        <div className="text-xs text-slate-400">{achievement.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group hover:bg-slate-800/30 rounded-lg p-3 -mx-3 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                    <Icon name="Phone" size={18} className="text-green-400" />
                  </div>
                  <div>
                    <a href="tel:+78001234567" className="font-medium text-lg hover:text-green-400 transition-colors">
                      +7 (800) 123-45-67
                    </a>
                    <p className="text-xs text-slate-400">Бесплатно по России • 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 group hover:bg-slate-800/30 rounded-lg p-3 -mx-3 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <Icon name="Mail" size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <a href="mailto:info@memorial.ru" className="hover:text-blue-400 transition-colors">
                      info@memorial.ru
                    </a>
                    <p className="text-xs text-slate-400">Ответим в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group hover:bg-slate-800/30 rounded-lg p-3 -mx-3 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <Icon name="MapPin" size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">г. Москва, ул. Мемориальная, 15</p>
                    <p className="text-sm text-slate-400 mt-1">
                      Пн-Пт: 9:00-18:00 • Сб-Вс: 10:00-16:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-blue-400" />
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
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded border border-slate-700 animate-fadeIn">
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
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Icon name="Grid3x3" size={18} className="text-blue-400" />
                Каталог
              </h3>
              <ul className="space-y-3">
                {catalogLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                        <Icon name={link.icon as any} size={14} className="text-slate-400 group-hover:text-blue-400" />
                      </div>
                      <span className="text-sm">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Icon name="Info" size={18} className="text-green-400" />
                Информация
              </h3>
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="group flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-200 hover:translate-x-1"
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
              <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Icon name="Zap" size={18} className="text-yellow-400" />
                Быстрые действия
              </h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Button 
                    key={action.href}
                    variant={action.accent ? "default" : "outline"} 
                    className={`w-full justify-start h-auto p-3 ${
                      action.accent 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl' 
                        : 'border-slate-600/50 text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-500/50'
                    }`} 
                    asChild
                  >
                    <Link to={action.href}>
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          action.accent ? 'bg-white/20' : 'bg-slate-700/50'
                        }`}>
                          <Icon name={action.icon as any} size={16} />
                        </div>
                        <span className="font-medium">{action.title}</span>
                      </div>
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Certificates & Trust Badges */}
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-slate-300">Сертификаты и гарантии</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50 text-center group hover:border-slate-600/50 transition-all">
                    <Icon name="Shield" size={20} className="text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">ISO 9001</span>
                    <span className="text-xs text-slate-400">Качество</span>
                  </div>
                  <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50 text-center group hover:border-slate-600/50 transition-all">
                    <Icon name="Award" size={20} className="text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">Лицензия</span>
                    <span className="text-xs text-slate-400">№ 12345</span>
                  </div>
                  <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50 text-center group hover:border-slate-600/50 transition-all">
                    <Icon name="Clock" size={20} className="text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">Гарантия</span>
                    <span className="text-xs text-slate-400">10 лет</span>
                  </div>
                  <div className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-3 border border-slate-700/50 text-center group hover:border-slate-600/50 transition-all">
                    <Icon name="Truck" size={20} className="text-orange-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-white block">Доставка</span>
                    <span className="text-xs text-slate-400">Бесплатно</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

        {/* Bottom Footer */}
        <div className="bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-400">
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
                <div className="flex items-center gap-2 text-blue-400">
                  <Icon name="Lock" size={16} />
                  <span>Безопасные платежи</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Icon name="Headphones" size={16} />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-slate-800/50">
              <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
                <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link to="/personal-data" className="hover:text-slate-300 transition-colors">
                  Обработка персональных данных
                </Link>
                <Link to="/offer-agreement" className="hover:text-slate-300 transition-colors">
                  Договор оферты
                </Link>
                <Link to="/sitemap" className="hover:text-slate-300 transition-colors">
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