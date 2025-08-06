import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface City {
  name: string;
  slug: string;
}

const moscowRegionCities: City[] = [
  { name: 'Апрелевка', slug: 'apelevka' },
  { name: 'Балашиха', slug: 'balashiha' },
  { name: 'Бронницы', slug: 'bronnitsy' },
  { name: 'Верея', slug: 'vereya' },
  { name: 'Видное', slug: 'vidnoe' },
  { name: 'Волоколамск', slug: 'volokolamsk' },
  { name: 'Воскресенск', slug: 'voskresensk' },
  { name: 'Высоковск', slug: 'vysokovsk' },
  { name: 'Голицыно', slug: 'golitsino' },
  { name: 'Дедовск', slug: 'dedovsk' },
  { name: 'Дзержинский', slug: 'dzerzhinsky' },
  { name: 'Дмитров', slug: 'dmitrov' },
  { name: 'Долгопрудный', slug: 'dolgoprudny' },
  { name: 'Домодедово', slug: 'domodedovo' },
  { name: 'Дрезна', slug: 'drezna' }
];

export default function MoscowRegion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Изготовление и установка памятников в Московской области
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Профессиональные услуги по изготовлению памятников из гранита и мрамора в крупных городах Подмосковья. 
              Бесплатный выезд мастера, гарантия качества, доставка и установка.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-green-400" />
                <span>Бесплатный выезд мастера</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Truck" size={16} className="text-blue-400" />
                <span>Доставка по всей области</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-yellow-400" />
                <span>Гарантия качества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-purple-400" />
                <span>Работаем 15+ лет</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Полный комплекс услуг по изготовлению и установке памятников в Московской области
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Icon name="Hammer" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Изготовление</h3>
              <p className="text-sm text-slate-600">Памятники из гранита, мрамора и других натуральных материалов</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Icon name="Truck" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Доставка</h3>
              <p className="text-sm text-slate-600">Бесплатная доставка по Московской области</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Icon name="Settings" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Установка</h3>
              <p className="text-sm text-slate-600">Профессиональный монтаж и благоустройство места захоронения</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Icon name="Palette" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Оформление</h3>
              <p className="text-sm text-slate-600">Портреты, гравировка, художественное оформление</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Города Московской области</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Изготовление и установка памятников в городах Подмосковья. Выберите свой город для получения подробной информации.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {moscowRegionCities.map((city) => (
              <Link
                key={city.slug}
                to={`/regions/moscow-region/${city.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 group text-center"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors mb-3">
                  {city.name}
                </h3>
                
                <div className="flex items-center justify-center text-primary text-sm">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Подробнее</span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">
              Работаем и в других городах Московской области. Уточните возможность выезда по телефону.
            </p>
            <Button size="lg">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 201-32-27
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Users" size={32} className="text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">15+ лет опыта</h3>
              <p className="text-slate-600">Тысячи выполненных заказов в Московской области</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-slate-600">Все работы выполняются с гарантией на 5 лет</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
              <p className="text-slate-600">Учитываем все ваши пожелания и особенности</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Нужна консультация по изготовлению памятника?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Наши мастера бесплатно выедут к вам на участок, проведут замеры и составят смету
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-primary"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 201-32-27
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-primary"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <div className="grid md:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Режим работы</h4>
                <p className="text-primary-foreground/90">Ежедневно с 9:00 до 21:00</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-primary-foreground/90">info@postament.ru</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Выезд мастера</h4>
                <p className="text-primary-foreground/90">Бесплатно по МО</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}