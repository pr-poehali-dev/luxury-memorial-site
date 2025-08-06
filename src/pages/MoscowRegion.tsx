import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface City {
  name: string;
  slug: string;
  population?: number;
  isPopular?: boolean;
}

const moscowRegionCities: City[] = [
  // Крупные города (популярные)
  { name: 'Балашиха', slug: 'balashiha', population: 507366, isPopular: true },
  { name: 'Подольск', slug: 'podolsk', population: 297948, isPopular: true },
  { name: 'Химки', slug: 'khimki', population: 259550, isPopular: true },
  { name: 'Королёв', slug: 'korolev', population: 225796, isPopular: true },
  { name: 'Мытищи', slug: 'mytishchi', population: 222924, isPopular: true },
  { name: 'Люберцы', slug: 'lyubertsy', population: 209781, isPopular: true },
  { name: 'Электросталь', slug: 'elektrostal', population: 158652, isPopular: true },
  { name: 'Красногорск', slug: 'krasnogorsk', population: 177426, isPopular: true },
  { name: 'Одинцово', slug: 'odintsovo', population: 141135, isPopular: true },
  { name: 'Серпухов', slug: 'serpukhov', population: 125994, isPopular: true },
  
  // Остальные города по алфавиту
  { name: 'Апрелевка', slug: 'apelevka' },
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
  { name: 'Дубна', slug: 'dubna' },
  { name: 'Егорьевск', slug: 'egorievsk' },
  { name: 'Жуковский', slug: 'zhukovsky' },
  { name: 'Зарайск', slug: 'zaraysk' },
  { name: 'Звенигород', slug: 'zvenigorod' },
  { name: 'Ивантеевка', slug: 'ivanteevka' },
  { name: 'Истра', slug: 'istra' },
  { name: 'Кашира', slug: 'kashira' },
  { name: 'Климовск', slug: 'klimovsk' },
  { name: 'Клин', slug: 'klin' },
  { name: 'Коломна', slug: 'kolomna' },
  { name: 'Котельники', slug: 'kotelniki' },
  { name: 'Красноармейск', slug: 'krasnoarmeysk' },
  { name: 'Краснознаменск', slug: 'krasnoznamensk' },
  { name: 'Лобня', slug: 'lobnya' },
  { name: 'Лосино-Петровский', slug: 'losino-petrovsky' },
  { name: 'Луховицы', slug: 'lukhovitsy' },
  { name: 'Лыткарино', slug: 'lytkarino' },
  { name: 'Малаховка', slug: 'malakhovka' },
  { name: 'Можайск', slug: 'mozhaysk' },
  { name: 'Наро-Фоминск', slug: 'naro-fominsk' },
  { name: 'Ногинск', slug: 'noginsk' },
  { name: 'Орехово-Зуево', slug: 'orekhovo-zuevo' },
  { name: 'Озёры', slug: 'ozery' },
  { name: 'Павловский Посад', slug: 'pavlovsky-posad' },
  { name: 'Пересвет', slug: 'peresvet' },
  { name: 'Протвино', slug: 'protvino' },
  { name: 'Пушкино', slug: 'pushkino' },
  { name: 'Пущино', slug: 'pushchino' },
  { name: 'Раменское', slug: 'ramenskoye' },
  { name: 'Реутов', slug: 'reutov' },
  { name: 'Рошаль', slug: 'roshal' },
  { name: 'Руза', slug: 'ruza' },
  { name: 'Сергиев Посад', slug: 'sergiev-posad' },
  { name: 'Солнечногорск', slug: 'solnechnogorsk' },
  { name: 'Ступино', slug: 'stupino' },
  { name: 'Талдом', slug: 'taldom' },
  { name: 'Фрязино', slug: 'fryazino' },
  { name: 'Хотьково', slug: 'hotkovo' },
  { name: 'Черноголовка', slug: 'chernogolovka' },
  { name: 'Чехов', slug: 'chekhov' },
  { name: 'Шатура', slug: 'shatura' },
  { name: 'Щёлково', slug: 'shchelkovo' },
  { name: 'Электрогорск', slug: 'elektrogorsk' },
  { name: 'Юбилейный', slug: 'yubileyny' },
  { name: 'Яхрома', slug: 'yakhroma' }
];

const popularCities = moscowRegionCities.filter(city => city.isPopular);
const otherCities = moscowRegionCities.filter(city => !city.isPopular);

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
              Профессиональные услуги по изготовлению памятников из гранита и мрамора во всех городах Подмосковья. 
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Icon name="Hammer" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Изготовление</h3>
              <p className="text-sm text-slate-600">Памятники из гранита, мрамора и других материалов</p>
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
              <p className="text-sm text-slate-600">Профессиональный монтаж и благоустройство</p>
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

      {/* Popular Cities */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Популярные направления</h2>
            <p className="text-slate-600">
              Крупные города Московской области, где мы чаще всего выполняем заказы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                to={`/regions/moscow-region/${city.slug}`}
                className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {city.name}
                  </h3>
                  <Badge variant="secondary">Популярно</Badge>
                </div>
                {city.population && (
                  <p className="text-sm text-slate-500">
                    Население: {city.population.toLocaleString('ru-RU')}
                  </p>
                )}
                <div className="flex items-center mt-3 text-xs text-slate-400">
                  <Icon name="ArrowRight" size={12} className="mr-1" />
                  <span>Памятники в г. {city.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Все города Московской области</h2>
            <p className="text-slate-600">
              Полный список городов, где мы изготавливаем и устанавливаем памятники
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                to={`/regions/moscow-region/${city.slug}`}
                className="bg-white p-4 rounded-lg border hover:border-primary hover:shadow-sm transition-all group"
              >
                <h3 className="font-medium group-hover:text-primary transition-colors mb-1">
                  {city.name}
                </h3>
                <div className="flex items-center text-xs text-slate-400">
                  <Icon name="MapPin" size={12} className="mr-1" />
                  <span>Подробнее</span>
                </div>
              </Link>
            ))}
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
              Позвонить сейчас
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
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-primary-foreground/90">+7 (495) 201-32-27</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-primary-foreground/90">info@postament.ru</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Режим работы</h4>
                <p className="text-primary-foreground/90">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}