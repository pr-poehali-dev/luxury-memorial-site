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
    slug: 'aprelevka', 
    population: 29218,
    description: 'Современный город в Наро-Фоминском районе. Качественные памятники по доступным ценам.'
  },
  { 
    name: 'Балашиха', 
    slug: 'balashikha', 
    population: 507366,
    description: 'Крупнейший город области после Подольска. Полный спектр ритуальных услуг высочайшего качества.'
  },
  { 
    name: 'Бронницы', 
    slug: 'bronnitsy', 
    population: 22930,
    description: 'Уютный город на Москве-реке. Индивидуальный подход к каждому заказу.'
  },
  { 
    name: 'Верея', 
    slug: 'vereya', 
    population: 5847,
    description: 'Самый маленький город области с богатой историей. Уникальные памятники ручной работы.'
  },
  { 
    name: 'Видное', 
    slug: 'vidnoe', 
    population: 59917,
    description: 'Быстроразвивающийся город рядом с Москвой. Современные технологии изготовления памятников.'
  },
  { 
    name: 'Волоколамск', 
    slug: 'volokolamsk', 
    population: 18770,
    description: 'Древний город-герой. Памятники военной славы и мемориальные комплексы.'
  },
  { 
    name: 'Воскресенск', 
    slug: 'voskresensk', 
    population: 94661,
    description: 'Промышленный центр на юго-востоке области. Надёжные материалы и проверенные технологии.'
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
    name: 'Королёв', 
    slug: 'korolev', 
    population: 225993,
    description: 'Космическая столица России. Высокотехнологичное производство памятников с элементами космической символики.'
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
    name: 'Мытищи', 
    slug: 'mytishchi', 
    population: 222924,
    description: 'Старинный промышленный город. Традиционные и современные решения в мемориальном искусстве.'
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
  },
  { 
    name: 'Химки', 
    slug: 'khimki', 
    population: 259550,
    description: 'Промышленный и научный центр. Современные технологии изготовления памятников и благоустройства.'
  },
  { 
    name: 'Хотьково', 
    slug: 'hotkovo', 
    population: 22313,
    description: 'Город у Покровского Хотькова монастыря. Православные традиции и церковная символика.'
  },
  { 
    name: 'Черноголовка', 
    slug: 'chernogolovka', 
    population: 20684,
    description: 'Наукоград Российской академии наук. Передовые технологии и научный подход.'
  },
  { 
    name: 'Чехов', 
    slug: 'chekhov', 
    population: 75564,
    description: 'Литературный город писателя А.П. Чехова. Памятники с культурными и литературными мотивами.'
  },
  { 
    name: 'Шатура', 
    slug: 'shatura', 
    population: 32062,
    description: 'Энергетический центр области. Надёжные и долговечные конструкции памятников.'
  },
  { 
    name: 'Щёлково', 
    slug: 'shchelkovo', 
    population: 128824,
    description: 'Крупный промышленный и культурный центр. Современные технологии и традиционные формы.'
  },
  { 
    name: 'Электрогорск', 
    slug: 'elektrogorsk', 
    population: 20633,
    description: 'Энергетический город в лесной зоне. Экологичные материалы и природная гармония.'
  },
  { 
    name: 'Электросталь', 
    slug: 'elektrostal', 
    population: 158652,
    description: 'Крупный металлургический центр. Высококачественные материалы и долговечность.'
  },
  { 
    name: 'Электроугли', 
    slug: 'elektrougli', 
    population: 22589,
    description: 'Промышленный посёлок городского типа. Доступные цены и быстрые сроки.'
  },
  { 
    name: 'Яхрома', 
    slug: 'yakhroma', 
    population: 13708,
    description: 'Северный город на канале Москва-Волга. Памятники с учётом водного ландшафта.'
  }
];

export default function MoscowRegion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Hero Section */}
      <div className="relative py-24 px-4 text-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Icon name="MapPin" className="w-12 h-12 text-amber-400 mr-4" />
            <h1 className="text-5xl font-bold text-white">
              Памятники в Московской области
            </h1>
          </div>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Изготовление и установка памятников, надгробий и мемориальных комплексов 
            во всех городах Московской области. Профессиональный подход, качественные материалы, 
            доступные цены.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-amber-400">{featuredCities.length}</div>
              <div className="text-sm text-slate-300">городов области</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-amber-400">24/7</div>
              <div className="text-sm text-slate-300">консультации</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-amber-400">15+</div>
              <div className="text-sm text-slate-300">лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Города Московской области
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Выберите ваш город для получения информации о наших услугах, ценах и условиях работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                to={`/regions/moscow-region/${city.slug}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 
                         hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 
                         hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {city.population.toLocaleString('ru-RU')} чел.
                    </p>
                  </div>
                  <Icon 
                    name="ArrowRight" 
                    className="w-5 h-5 text-slate-400 group-hover:text-amber-400 transform 
                             group-hover:translate-x-1 transition-all duration-300" 
                  />
                </div>
                <p className="text-sm text-slate-300 line-clamp-3">
                  {city.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Нужна консультация?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Наши специалисты помогут выбрать подходящий памятник и ответят на все вопросы
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3">
              <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}