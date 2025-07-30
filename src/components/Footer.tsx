import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { name: 'WhatsApp', icon: 'MessageCircle', href: 'https://wa.me/+74952013227', color: 'hover:text-green-400' },
    { name: 'Telegram', icon: 'Send', href: 'https://t.me/memorial_studio', color: 'hover:text-blue-400' },
    { name: 'VKontakte', icon: 'Users', href: 'https://vk.com/memorial_studio', color: 'hover:text-blue-500' },
    { name: 'Одноклассники', icon: 'Globe', href: 'https://ok.ru/memorial_studio', color: 'hover:text-orange-400' },
  ];

  const catalogLinks = [
    { title: 'Памятники из гранита', href: '/catalog?category=monuments&type=granite' },
    { title: 'Памятники из мрамора', href: '/catalog?category=monuments&type=marble' },
    { title: 'Мемориальные комплексы', href: '/catalog?category=complexes' },
    { title: 'Благоустройство могил', href: '/catalog?category=improvement' },
  ];

  const infoLinks = [
    { title: 'О компании', href: '/about' },
    { title: 'Портфолио работ', href: '/portfolio' },
    { title: 'Как заказать', href: '/how-to-order' },
    { title: 'Контакты', href: '/contacts' },
  ];

  const legalLinks = [
    { title: 'Договор оферты', href: '/offer-agreement' },
    { title: 'Карта сайта', href: '/sitemap' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Company Info & Contact */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <Icon name="Mountain" size={24} className="text-white" />
                </div>
                <span className="font-bold text-2xl">Вечная Память</span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                Изготавливаем памятники из премиального гранита и мрамора в собственной мастерской с 2009 года
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <a href="tel:+74952013227" className="font-semibold text-lg hover:text-primary transition-colors">
                      +7 (495) 201-32-27
                    </a>
                    <p className="text-sm text-slate-400">Бесплатная консультация</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <a href="mailto:info@postament.ru" className="font-medium hover:text-primary transition-colors">
                      info@postament.ru
                    </a>
                    <p className="text-sm text-slate-400">Ответим в течение часа</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Москва, ул. Мастерская, 15</p>
                    <p className="text-sm text-slate-400 mt-1">
                      Пн-Вс: 9:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Работаем без выходных</p>
                    <p className="text-sm text-slate-400">Срочные заказы — 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button & Social */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-medium px-8 rounded-xl shadow-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              
              <div>
                <p className="text-sm text-slate-400 mb-3">Мы в соцсетях:</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.color}`}
                      title={social.name}
                    >
                      <Icon 
                        name={social.icon as any} 
                        size={20} 
                        className="text-slate-300 group-hover:scale-110 transition-transform" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Catalog Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Каталог</h3>
            <ul className="space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
                  >
                    <Icon name="ArrowRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Информация</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center group"
                  >
                    <Icon name="ArrowRight" size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-slate-500 hover:text-slate-400 text-sm transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm text-center md:text-left">
              © 2024 Вечная Память. Изготовление памятников в Москве
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-400" />
                <span>SSL защита</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-blue-400" />
                <span>Лицензия</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}