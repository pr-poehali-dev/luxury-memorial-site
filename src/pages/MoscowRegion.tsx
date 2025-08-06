import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface City {
  name: string;
  slug: string;
  population: number;
  description: string;
}

const featuredCities: City[] = [
  { 
    name: 'Апрелевка', 
    slug: 'apelevka', 
    population: 28530,
    description: 'Город в западной части Московской области. Качественное изготовление памятников из гранита.'
  },
  { 
    name: 'Бронницы', 
    slug: 'bronnitsy', 
    population: 22836,
    description: 'Древний город на берегу Москвы-реки. Традиционные и современные памятники.'
  },
  { 
    name: 'Верея', 
    slug: 'vereya', 
    population: 5847,
    description: 'Один из древнейших городов Подмосковья. Индивидуальный подход к каждому заказу.'
  },
  { 
    name: 'Видное', 
    slug: 'vidnoe', 
    population: 59959,
    description: 'Город в Ленинском районе. Полный спектр ритуальных услуг и благоустройства.'
  },
  { 
    name: 'Волоколамск', 
    slug: 'volokolamsk', 
    population: 19492,
    description: 'Исторический город с богатым наследием. Памятники из натурального камня.'
  },
  { 
    name: 'Воскресенск', 
    slug: 'voskresensk', 
    population: 94130,
    description: 'Крупный промышленный центр. Быстрая доставка и профессиональная установка.'
  },
  { 
    name: 'Высоковск', 
    slug: 'vysokovsk', 
    population: 11398,
    description: 'Уютный город в Клинском районе. Персональный подход и качественные материалы.'
  },
  { 
    name: 'Голицыно', 
    slug: 'golitsino', 
    population: 17825,
    description: 'Город в Одинцовском районе. Элитные и эконом варианты памятников.'
  },
  { 
    name: 'Дедовск', 
    slug: 'dedovsk', 
    population: 29668,
    description: 'Город в Истринском районе. Современное производство памятников из мрамора и гранита.'
  },
  { 
    name: 'Дзержинский', 
    slug: 'dzerzhinsky', 
    population: 55734,
    description: 'Наукоград в южном Подмосковье. Высокотехнологичное изготовление ритуальных изделий.'
  },
  { 
    name: 'Дмитров', 
    slug: 'dmitrov', 
    population: 68680,
    description: 'Один из древнейших городов России. Традиционные техники изготовления памятников.'
  },
  { 
    name: 'Долгопрудный', 
    slug: 'dolgoprudny', 
    population: 118374,
    description: 'Крупный наукоград. Инновационные решения в области мемориального искусства.'
  },
  { 
    name: 'Домодедово', 
    slug: 'domodedovo', 
    population: 106986,
    description: 'Крупный город в южном Подмосковье. Полный цикл изготовления и установки памятников.'
  },
  { 
    name: 'Дрезна', 
    slug: 'drezna', 
    population: 12247,
    description: 'Город в Орехово-Зуевском районе. Качественные памятники по доступным ценам.'
  },
  { 
    name: 'Дубна', 
    slug: 'dubna', 
    population: 75965,
    description: 'Международный научный центр. Памятники с использованием современных технологий.'
  },
  { 
    name: 'Егорьевск', 
    slug: 'egorievsk', 
    population: 68196,
    description: 'Исторический центр текстильной промышленности. Художественное оформление памятников.'
  },
  { 
    name: 'Жуковский', 
    slug: 'zhukovsky', 
    population: 107263,
    description: 'Центр авиационной науки и промышленности. Современные материалы и технологии.'
  },
  { 
    name: 'Зарайск', 
    slug: 'zaraysk', 
    population: 23279,
    description: 'Древний город-крепость на Оке. Памятники с сохранением исторических традиций.'
  },
  { 
    name: 'Звенигород', 
    slug: 'zvenigorod', 
    population: 20192,
    description: 'Жемчужина Подмосковья с богатой историей. Элитные памятники ручной работы.'
  },
  { 
    name: 'Ивантеевка', 
    slug: 'ivanteevka', 
    population: 75114,
    description: 'Современный город в Пушкинском районе. Быстрое изготовление и доставка.'
  },
  { 
    name: 'Истра', 
    slug: 'istra', 
    population: 36154,
    description: 'Город на живописной реке Истре. Памятники с учётом природного ландшафта.'
  },
  { 
    name: 'Кашира', 
    slug: 'kashira', 
    population: 48587,
    description: 'Древний город на Оке с энергетическим центром. Надёжность и долговечность.'
  },
  { 
    name: 'Клин', 
    slug: 'klin', 
    population: 81019,
    description: 'Родина П.И. Чайковского. Памятники с музыкальными и культурными мотивами.'
  },
  { 
    name: 'Коломна', 
    slug: 'kolomna', 
    population: 143969,
    description: 'Крупный исторический центр. Полный спектр услуг от эскиза до установки.'
  },
  { 
    name: 'Котельники', 
    slug: 'kotelniki', 
    population: 47339,
    description: 'Современный город рядом с МКАД. Оперативное изготовление и доставка памятников.'
  },
  { 
    name: 'Красноармейск', 
    slug: 'krasnoarmeysk', 
    population: 28506,
    description: 'Город с военной историей. Мемориальные комплексы для ветеранов и военных.'
  },
  { 
    name: 'Красногорск', 
    slug: 'krasnogorsk', 
    population: 177426,
    description: 'Крупнейший административный центр. Современные технологии и качественные материалы.'
  },
  { 
    name: 'Краснозаводск', 
    slug: 'krasnozavodsk', 
    population: 13498,
    description: 'Промышленный город в Сергиево-Посадском районе. Доступные цены на памятники.'
  },
  { 
    name: 'Краснознаменск', 
    slug: 'krasnoznamensk', 
    population: 39717,
    description: 'Закрытый город космических войск. Особый подход к военным мемориалам.'
  },
  { 
    name: 'Кубинка', 
    slug: 'kubinka', 
    population: 22329,
    description: 'Военный городок с танковым музеем. Памятники военной тематики.'
  },
  { 
    name: 'Куровское', 
    slug: 'kurovskoye', 
    population: 21912,
    description: 'Текстильный центр в Орехово-Зуевском районе. Традиционные и современные решения.'
  },
  { 
    name: 'Ликино-Дулёво', 
    slug: 'likino-dulevo', 
    population: 29303,
    description: 'Город керамики и фарфора. Художественное оформление и декоративные элементы.'
  },
  { 
    name: 'Лобня', 
    slug: 'lobnya', 
    population: 82472,
    description: 'Развивающийся город на севере области. Индивидуальные проекты памятников.'
  },
  { 
    name: 'Лосино-Петровский', 
    slug: 'losino-petrovsky', 
    population: 22822,
    description: 'Тихий город в лесной зоне. Памятники в гармонии с природой.'
  },
  { 
    name: 'Луховицы', 
    slug: 'lukhovitsy', 
    population: 31171,
    description: 'Центр авиационной промышленности. Современные подходы к мемориальному искусству.'
  },
  { 
    name: 'Лыткарино', 
    slug: 'lytkarino', 
    population: 59781,
    description: 'Наукоград на берегу Москвы-реки. Инновационные материалы и технологии.'
  },
  { 
    name: 'Люберцы', 
    slug: 'lyubertsy', 
    population: 209781,
    description: 'Один из крупнейших городов области. Полный спектр ритуальных услуг и комплексов.'
  },
  { 
    name: 'Можайск', 
    slug: 'mozhaysk', 
    population: 30952,
    description: 'Древний город-воин на западных рубежах. Памятники с военно-исторической тематикой.'
  },
  { 
    name: 'Наро-Фоминск', 
    slug: 'naro-fominsk', 
    population: 69719,
    description: 'Город боевой славы. Мемориальные комплексы для участников войн.'
  },
  { 
    name: 'Ногинск', 
    slug: 'noginsk', 
    population: 104446,
    description: 'Крупный промышленный центр. Традиционное изготовление памятников из натурального камня.'
  },
  { 
    name: 'Одинцово', 
    slug: 'odintsovo', 
    population: 141135,
    description: 'Развитый подмосковный центр. Элитные памятники и благоустройство захоронений.'
  },
  { 
    name: 'Озёры', 
    slug: 'ozery', 
    population: 24323,
    description: 'Тихий город среди озёр и лесов. Памятники в гармонии с природным ландшафтом.'
  },
  { 
    name: 'Орехово-Зуево', 
    slug: 'orekhovo-zuevo', 
    population: 116896,
    description: 'Текстильная столица региона. Художественная гравировка и оформление памятников.'
  },
  { 
    name: 'Павловский Посад', 
    slug: 'pavlovsky-posad', 
    population: 63954,
    description: 'Город знаменитых платков. Декоративные элементы и орнаменты на памятниках.'
  },
  { 
    name: 'Пересвет', 
    slug: 'peresvet', 
    population: 22473,
    description: 'Город рядом с Троице-Сергиевой лаврой. Православные памятники и кресты.'
  },
  { 
    name: 'Подольск', 
    slug: 'podolsk', 
    population: 297948,
    description: 'Второй по величине город области. Мощная производственная база и современное оборудование.'
  },
  { 
    name: 'Протвино', 
    slug: 'protvino', 
    population: 36832,
    description: 'Наукоград физиков. Высокоточные технологии изготовления мемориальных изделий.'
  },
  { 
    name: 'Пушкино', 
    slug: 'pushkino', 
    population: 106964,
    description: 'Дачная столица Подмосковья. Памятники с учётом парковой архитектуры.'
  },
  { 
    name: 'Пущино', 
    slug: 'pushchino', 
    population: 20641,
    description: 'Наукоград биологов на Оке. Экологически чистые материалы и технологии.'
  },
  { 
    name: 'Раменское', 
    slug: 'ramenskoye', 
    population: 116896,
    description: 'Центр авиационной промышленности. Современное оборудование и качественные материалы.'
  },
  { 
    name: 'Реутов', 
    slug: 'reutov', 
    population: 104271,
    description: 'Космическая столица России. Высокотехнологичные решения в мемориальном деле.'
  },
  { 
    name: 'Рошаль', 
    slug: 'roshal', 
    population: 13472,
    description: 'Тихий город в Шатурском районе. Индивидуальный подход и семейные традиции.'
  },
  { 
    name: 'Руза', 
    slug: 'ruza', 
    population: 13507,
    description: 'Древний город на живописной реке. Памятники в гармонии с историческим ландшафтом.'
  },
  { 
    name: 'Сергиев Посад', 
    slug: 'sergiev-posad', 
    population: 104853,
    description: 'Духовный центр России. Православные памятники, кресты и церковная символика.'
  },
  { 
    name: 'Серпухов', 
    slug: 'serpukhov', 
    population: 125994,
    description: 'Древний город на Оке с богатой историей. Традиционные формы и классические материалы.'
  },
  { 
    name: 'Солнечногорск', 
    slug: 'solnechnogorsk', 
    population: 62994,
    description: 'Курортный город у озера. Памятники с использованием природных мотивов.'
  },
  { 
    name: 'Старая Купавна', 
    slug: 'staraya-kupavna', 
    population: 22527,
    description: 'Промышленный город в Ногинском районе. Доступные цены и быстрое изготовление.'
  },
  { 
    name: 'Ступино', 
    slug: 'stupino', 
    population: 63967,
    description: 'Металлургический центр области. Прочные и долговечные памятники из качественных материалов.'
  },
  { 
    name: 'Талдом', 
    slug: 'taldom', 
    population: 13218,
    description: 'Северный город области среди лесов. Памятники с природными и лесными мотивами.'
  },
  { 
    name: 'Фрязино', 
    slug: 'fryazino', 
    population: 58717,
    description: 'Наукоград электроники. Современные технологии лазерной гравировки и обработки.'
  }
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

      {/* Featured Cities */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Города, в которых мы работаем</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Основные направления нашей работы в Московской области. Выберите свой город для получения подробной информации.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                to={`/regions/moscow-region/${city.slug}`}
                className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                      {city.name}
                    </h3>
                    <p className="text-sm text-slate-500">
                      Население: {city.population.toLocaleString('ru-RU')} человек
                    </p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {city.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-medium">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Памятники в г. {city.name}
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
              Уточнить возможность выезда
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