import { MainSection } from './MenuTypes';

// Данные для всех разделов
export const mainSections: MainSection[] = [
  {
    id: 'monuments',
    title: 'Памятники',
    href: '/catalog?category=monuments',
    previewImage: 'https://cdn.poehali.dev/files/5433cf05-89d5-4a4d-af20-60160b7eb60e.png',
    categories: [
      {
        title: 'Форма',
        expandable: true,
        items: [
          { title: 'Прямые', href: '/catalog?form=straight', isPopular: true },
          { title: 'Вертикальные', href: '/catalog?form=vertical', isPopular: true },
          { title: 'Горизонтальные', href: '/catalog?form=horizontal', isPopular: true },
          { title: 'Резные', href: '/catalog?form=carved' },
          { title: 'Фигурные', href: '/catalog?form=figured' },
          { title: 'Двойные', href: '/catalog?form=double' },
          { title: 'Эксклюзивные', href: '/catalog?form=exclusive' },
          { title: 'Сердце', href: '/catalog?form=heart' },
          { title: 'С Крестом', href: '/catalog?form=cross' },
          { title: 'Кресты из гранита', href: '/catalog?form=granite-cross' },
          { title: 'Цветы', href: '/catalog?form=flowers' },
          { title: 'Деревья (Берёза)', href: '/catalog?form=trees' },
          { title: 'Ангел', href: '/catalog?form=angel' },
          { title: 'Птицы (Лебеди, голуби)', href: '/catalog?form=birds' },
          { title: 'Скорбящая', href: '/catalog?form=mourning' },
          { title: 'Свеча', href: '/catalog?form=candle' },
          { title: 'Арка', href: '/catalog?form=arch' },
          { title: 'Составные', href: '/catalog?form=composite' },
        ]
      },
      {
        title: 'Материал',
        expandable: true,
        items: [
          { title: 'Памятники из гранита', href: '/catalog?material=granite', isPopular: true },
          { title: 'Памятники из мрамора', href: '/catalog?material=marble', isPopular: true },
          { title: 'Габбро Диабаз', href: '/catalog?material=gabbro-diabaz' },
          { title: 'Мрамор Коелга', href: '/catalog?material=marble-koelga' },
          { title: 'Капустянский', href: '/catalog?material=kapustyansky' },
          { title: 'Дымовский', href: '/catalog?material=dymovsky' },
          { title: 'Мансуровский', href: '/catalog?material=mansurovsky' },
          { title: 'Сопка Бунтина', href: '/catalog?material=sopka-buntina' },
          { title: 'Балтик Грин', href: '/catalog?material=baltic-green' },
          { title: 'Гранатовый амфиболит', href: '/catalog?material=garnet-amphibolite' },
          { title: 'Змеевик', href: '/catalog?material=serpentine' },
          { title: 'Лабрадорит', href: '/catalog?material=labradorite' },
          { title: 'Лезниковский', href: '/catalog?material=leznikovsky' },
          { title: 'Блю пёрл', href: '/catalog?material=blue-pearl' },
          { title: 'Визаж Блю', href: '/catalog?material=visage-blue' },
          { title: 'Куру Грей', href: '/catalog?material=kuru-grey' },
          { title: 'Индиан Аврора', href: '/catalog?material=indian-aurora' },
          { title: 'Сюскюянсаари', href: '/catalog?material=syuskyuansaari' },
        ]
      },
      {
        title: 'Кому',
        expandable: true,
        items: [
          { title: 'Военный (СВО)', href: '/catalog?for=military-svo', isPopular: true },
          { title: 'Семейный', href: '/catalog?for=family', isPopular: true },
          { title: 'Европейские', href: '/catalog?for=european' },
          { title: 'Женский', href: '/catalog?for=women' },
          { title: 'Православный', href: '/catalog?for=orthodox' },
          { title: 'Мужской', href: '/catalog?for=men' },
          { title: 'Мусульманский', href: '/catalog?for=muslim' },
          { title: 'Родителям', href: '/catalog?for=parents' },
          { title: 'Маме', href: '/catalog?for=mother' },
          { title: 'Католический', href: '/catalog?for=catholic' },
          { title: 'Отцу', href: '/catalog?for=father' },
          { title: 'Детский', href: '/catalog?for=children' },
          { title: 'Армянские', href: '/catalog?for=armenian' },
          { title: 'Двойной', href: '/catalog?for=double' },
          { title: 'Еврейские', href: '/catalog?for=jewish' },
        ]
      },
      {
        title: 'Цвет',
        expandable: true,
        items: [
          { title: 'Чёрные', href: '/catalog?color=black', isPopular: true },
          { title: 'Белые', href: '/catalog?color=white', isPopular: true },
          { title: 'Зелёные', href: '/catalog?color=green' },
          { title: 'Красные', href: '/catalog?color=red' },
          { title: 'Серые', href: '/catalog?color=gray' },
          { title: 'Коричневые', href: '/catalog?color=brown' },
          { title: 'Синие', href: '/catalog?color=blue' },
          { title: 'Комбинированные', href: '/catalog?color=combined' },
        ]
      },
      {
        title: 'Цена',
        items: [
          { title: 'Недорогие', href: '/catalog?price=budget', isPopular: true },
          { title: 'Элитные', href: '/catalog?price=elite', isPopular: true },
        ]
      }
    ]
  },
  {
    id: 'complexes',
    title: 'Комплексы',
    href: '/catalog?category=complexes',
    previewImage: '/img/5964ad83-e43f-4005-a721-8f16011459d7.jpg',
    categories: [
      {
        title: 'Типы комплексов',
        items: [
          { title: 'Мемориальные комплексы', href: '/catalog?type=memorial', isPopular: true },
          { title: 'Элитные комплексы', href: '/catalog?type=elite' },
          { title: 'Комбинированный гранит', href: '/catalog?type=combined-granite' },
          { title: 'С оградой', href: '/catalog?type=with-fence' },
          { title: 'Со стеклом', href: '/catalog?type=with-glass' },
          { title: 'С лавочкой', href: '/catalog?type=with-bench' },
          { title: 'Православные', href: '/catalog?type=orthodox' },
          { title: 'Европейские', href: '/catalog?type=european' },
        ]
      },
      {
        title: 'По размеру',
        items: [
          { title: 'На одного', href: '/catalog?size=single' },
          { title: 'На двоих', href: '/catalog?size=double', isPopular: true },
          { title: 'Семейные', href: '/catalog?size=family' },
          { title: 'Угловые', href: '/catalog?size=corner' },
        ]
      }
    ]
  },
  {
    id: 'improvement',
    title: 'Благоустройство',
    href: '/catalog?category=improvement',
    previewImage: '/img/57fe978f-1872-48be-a19d-a644801ee280.jpg',
    categories: [
      {
        title: 'Облицовка',
        items: [
          { title: 'Гранитная плитка', href: '/catalog?type=granite-tiles', isPopular: true },
          { title: 'Тротуарная плитка', href: '/catalog?type=paving-stones' },
          { title: 'Брусчатка', href: '/catalog?type=cobblestone' },
          { title: 'Надгробные плиты', href: '/catalog?type=grave-slabs' },
        ]
      },
      {
        title: 'Ограждения',
        items: [
          { title: 'Кованые ограды', href: '/catalog?type=wrought-fences', isPopular: true },
          { title: 'Цоколь из гранита', href: '/catalog?type=granite-fences' },
          { title: 'Цоколь из бетона', href: '/catalog?type=concrete-base' },
          { title: 'Бордюр', href: '/catalog?type=border' },
        ]
      },
      {
        title: 'Декор',
        items: [
          { title: 'Столики и лавочки', href: '/catalog?type=furniture' },
          { title: 'Цветники', href: '/catalog?type=planters' },
          { title: 'Вазы и лампады', href: '/catalog?type=vases' },
          { title: 'Шары и балясины', href: '/catalog?type=spheres' },
          { title: 'Щебень декоративный', href: '/catalog?type=decorative-gravel' },
          { title: 'Газон', href: '/catalog?type=lawn' },
          { title: 'Мемориальные доски', href: '/catalog?type=memorial-plaques' },
        ]
      }
    ]
  },
  {
    id: 'decoration',
    title: 'Оформление',
    href: '/catalog?category=decoration',
    previewImage: '/img/9eb6e1bb-9f90-48ad-ae6f-c2aa33ffae1e.jpg',
    categories: [
      {
        title: 'Портреты',
        expandable: true,
        items: [
          { title: 'Портреты на камне', href: '/catalog?type=stone-portraits', isPopular: true },
          { title: 'Фотокерамика', href: '/catalog?type=photo-ceramics', isPopular: true },
          { title: 'Цветные портреты', href: '/catalog?type=color-portraits' },
          { title: 'Портреты во весь рост', href: '/catalog?type=bw-portraits' },
          { title: 'Портрет на стекле', href: '/catalog?type=glass-portraits' },
        ]
      },
      {
        title: 'Гравировка',
        expandable: true,
        items: [
          { title: 'Гравировка текста', href: '/catalog?type=text-engraving' },
          { title: 'Художественная резьба', href: '/catalog?type=artistic-carving' },
          { title: 'Эпитафии', href: '/catalog?type=epitaphs' },
          { title: 'Даты жизни', href: '/catalog?type=life-dates' },
          { title: 'Кресты', href: '/catalog?type=crosses' },
          { title: 'Свечи', href: '/catalog?type=candles' },
          { title: 'Цветы', href: '/catalog?type=flowers' },
          { title: 'Иконы', href: '/catalog?type=icons' },
          { title: 'Ангелочки', href: '/catalog?type=angels' },
          { title: 'Виньетки', href: '/catalog?type=vignettes' },
          { title: 'Птицы и животные', href: '/catalog?type=birds-animals' },
          { title: 'Военная тематика', href: '/catalog?type=military' },
          { title: 'Профессии', href: '/catalog?type=professions' },
          { title: 'Веточки', href: '/catalog?type=branches' },
          { title: 'Природа', href: '/catalog?type=nature' },
          { title: 'Храмы, Церкви, Мечети', href: '/catalog?type=temples' },
          { title: 'Ислам', href: '/catalog?type=islam' },
          { title: 'Одежда', href: '/catalog?type=clothing' },
          { title: 'Рамки', href: '/catalog?type=frames' },
        ]
      },
      {
        title: 'Надписи',
        expandable: true,
        items: [
          { title: 'Бронзовые буквы', href: '/catalog?type=bronze-letters' },
          { title: 'Скарпель (Рубленные буквы)', href: '/scalpel-lettering' },
          { title: 'Сусальное золото', href: '/gold-leaf' },
          { title: 'Пескоструй', href: '/catalog?type=sandblasting' },
          { title: 'Эпитафии', href: '/catalog?type=epitaphs-text' },
          { title: 'Шрифты', href: '/catalog?type=fonts' },
        ]
      },
      {
        title: 'Декоративные элементы',
        expandable: true,
        items: [
          { title: 'Золочение букв', href: '/catalog?type=letter-gilding' },
          { title: 'Бронзовые элементы', href: '/catalog?type=bronze-elements' },
          { title: 'Цветы и растения', href: '/catalog?type=floral-elements' },
          { title: 'Религиозные символы', href: '/catalog?type=religious-symbols' },
        ]
      }
    ]
  },
  {
    id: 'information',
    title: 'Информация',
    href: '/info',
    categories: [
      {
        title: 'Услуги',
        items: [
          { title: 'Как заказать памятник', href: '/how-to-order' },
          { title: 'Вызов менеджера', href: '/manager-call' },
          { title: 'Дизайн памятников', href: '/monument-design' },
          { title: 'Доставка и установка', href: '/delivery' },
          { title: 'Оплата', href: '/payment' },
          { title: 'Фото наших работ', href: '/portfolio' },
        ]
      },
      {
        title: 'О нас',
        items: [
          { title: 'О компании', href: '/about' },
          { title: 'Наши мастера', href: '/masters' },
          { title: 'Гранитная мастерская', href: '/granite-workshop' },
          { title: 'Сертификаты', href: '/certificates' },
          { title: 'Гарантии', href: '/warranty' },
          { title: 'Отзывы клиентов', href: '/reviews' },
        ]
      },
      {
        title: 'Полезная информация',
        items: [
          { title: 'Троекуровское кладбище', href: '/troekurovskoye-cemetery' },
          { title: 'Памятники в Балашихе', href: '/balashiha-monuments' },
          { title: 'Часто задаваемые вопросы', href: '/faq' },
          { title: 'Уход за памятниками', href: '/care-guide' },
        ]
      }
    ]
  }
];