export const categories = [
  { id: 'all', name: 'Все категории', count: 24 },
  { id: 'vertical', name: 'Вертикальные', count: 10 },
  { id: 'horizontal', name: 'Горизонтальные', count: 6 },
  { id: 'complex', name: 'Комплексы', count: 4 },
  { id: 'plaques', name: 'Мемориальные плиты', count: 4 }
];

export const materials = [
  { id: 'all', name: 'Все материалы' },
  { id: 'granite-black', name: 'Гранит чёрный' },
  { id: 'granite-red', name: 'Гранит красный' },
  { id: 'granite-gray', name: 'Гранит серый' },
  { id: 'marble', name: 'Мрамор' },
  { id: 'bronze', name: 'Бронза' }
];

export const priceRanges = [
  { id: 'all', name: 'Любая цена' },
  { id: 'budget', name: 'До 30 000 ₽' },
  { id: 'medium', name: '30 000 - 60 000 ₽' },
  { id: 'premium', name: '60 000 - 100 000 ₽' },
  { id: 'luxury', name: 'Свыше 100 000 ₽' }
];

export interface Monument {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string | null;
  image: string;
  material: string;
  category: string;
  dimensions: string;
  isPopular: boolean;
  isNew: boolean;
}

export const monuments: Monument[] = [
  {
    id: 1,
    title: 'Классический вертикальный №1',
    subtitle: 'Гранит габбро-диабаз',
    price: '45 000 ₽',
    originalPrice: '52 000 ₽',
    image: 'https://cdn.poehali.dev/files/9ea16e16-350f-4074-a7e0-e0d0a3132ecc.png',
    material: 'granite-black',
    category: 'vertical',
    dimensions: '100×50×8 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 2,
    title: 'Элегант горизонтальный',
    subtitle: 'Белый мрамор Каррара',
    price: '38 000 ₽',
    originalPrice: null,
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'marble',
    category: 'horizontal',
    dimensions: '80×40×6 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 3,
    title: 'Мемориальная бронзовая плита',
    subtitle: 'Художественная бронза',
    price: '25 000 ₽',
    originalPrice: null,
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'bronze',
    category: 'plaques',
    dimensions: '60×40×3 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 4,
    title: 'Классический вертикальный №2',
    subtitle: 'Красный гранит Лезники',
    price: '48 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'granite-red',
    category: 'vertical',
    dimensions: '110×55×10 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 5,
    title: 'Семейный комплекс "Единство"',
    subtitle: 'Серый гранит Возрождение',
    price: '85 000 ₽',
    originalPrice: '95 000 ₽',
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'granite-gray',
    category: 'complex',
    dimensions: '150×80×12 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 6,
    title: 'Стандартный горизонтальный',
    subtitle: 'Гранит габбро-диабаз',
    price: '32 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'granite-black',
    category: 'horizontal',
    dimensions: '70×35×5 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 7,
    title: 'Премиум вертикальный "Величие"',
    subtitle: 'Индийский чёрный гранит',
    price: '62 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'granite-black',
    category: 'vertical',
    dimensions: '120×60×10 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 8,
    title: 'Мраморная элегия',
    subtitle: 'Итальянский белый мрамор',
    price: '55 000 ₽',
    originalPrice: '62 000 ₽',
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'marble',
    category: 'vertical',
    dimensions: '95×45×8 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 9,
    title: 'Горизонталь "Покой"',
    subtitle: 'Серый гранит Дымовский',
    price: '35 000 ₽',
    originalPrice: null,
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'granite-gray',
    category: 'horizontal',
    dimensions: '85×45×6 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 10,
    title: 'Бронзовый барельеф "Память"',
    subtitle: 'Художественная бронза премиум',
    price: '42 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'bronze',
    category: 'plaques',
    dimensions: '70×50×4 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 11,
    title: 'Семейный комплекс "Вечность"',
    subtitle: 'Красный гранит Токовский',
    price: '95 000 ₽',
    originalPrice: '108 000 ₽',
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'granite-red',
    category: 'complex',
    dimensions: '180×90×15 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 12,
    title: 'Классик мини',
    subtitle: 'Чёрный гранит габбро',
    price: '28 000 ₽',
    originalPrice: null,
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'granite-black',
    category: 'vertical',
    dimensions: '80×40×6 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 13,
    title: 'Горизонтальный "Тишина"',
    subtitle: 'Белый мрамор Тасос',
    price: '44 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'marble',
    category: 'horizontal',
    dimensions: '90×50×7 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 14,
    title: 'Мемориальная плита "Воспоминание"',
    subtitle: 'Бронза с патиной',
    price: '33 000 ₽',
    originalPrice: null,
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'bronze',
    category: 'plaques',
    dimensions: '65×45×3 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 15,
    title: 'Вертикальный "Достоинство"',
    subtitle: 'Серый гранит Мансуровский',
    price: '39 000 ₽',
    originalPrice: '43 000 ₽',
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'granite-gray',
    category: 'vertical',
    dimensions: '105×52×8 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 16,
    title: 'Комплекс "Единение"',
    subtitle: 'Чёрный гранит + бронза',
    price: '78 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'granite-black',
    category: 'complex',
    dimensions: '160×75×12 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 17,
    title: 'Мраморный ангел',
    subtitle: 'Каррарский мрамор скульптурный',
    price: '125 000 ₽',
    originalPrice: null,
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'marble',
    category: 'vertical',
    dimensions: '140×70×20 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 18,
    title: 'Горизонталь "Простота"',
    subtitle: 'Красный гранит Лезники',
    price: '36 000 ₽',
    originalPrice: null,
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'granite-red',
    category: 'horizontal',
    dimensions: '75×38×5 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 19,
    title: 'Бронзовый портрет',
    subtitle: 'Литьё по индивидуальному эскизу',
    price: '68 000 ₽',
    originalPrice: '75 000 ₽',
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'bronze',
    category: 'plaques',
    dimensions: '80×60×5 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 20,
    title: 'Стандарт плюс',
    subtitle: 'Чёрный гранит Габбро-диабаз',
    price: '41 000 ₽',
    originalPrice: null,
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'granite-black',
    category: 'vertical',
    dimensions: '115×55×9 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 21,
    title: 'Семейный склеп "Родословная"',
    subtitle: 'Комбинированный: гранит + мрамор',
    price: '145 000 ₽',
    originalPrice: '165 000 ₽',
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'granite-gray',
    category: 'complex',
    dimensions: '200×100×18 см',
    isPopular: false,
    isNew: false
  },
  {
    id: 22,
    title: 'Мини горизонталь',
    subtitle: 'Белый мрамор Коелга',
    price: '29 000 ₽',
    originalPrice: null,
    image: '/img/2f39360b-4fa5-4b2a-8359-d7b41b051bb0.jpg',
    material: 'marble',
    category: 'horizontal',
    dimensions: '65×35×4 см',
    isPopular: true,
    isNew: false
  },
  {
    id: 23,
    title: 'Художественная плита "Розы"',
    subtitle: 'Бронза с гравировкой',
    price: '52 000 ₽',
    originalPrice: null,
    image: '/img/bd3b35cb-7942-470f-96ca-243f4defe519.jpg',
    material: 'bronze',
    category: 'plaques',
    dimensions: '90×65×4 см',
    isPopular: false,
    isNew: true
  },
  {
    id: 24,
    title: 'Элитный вертикальный "Престиж"',
    subtitle: 'Серый гранит Возрождение элит',
    price: '87 000 ₽',
    originalPrice: '98 000 ₽',
    image: '/img/2eee8912-7f02-4a25-ae89-caf7d0d5e3ee.jpg',
    material: 'granite-gray',
    category: 'vertical',
    dimensions: '130×65×12 см',
    isPopular: true,
    isNew: false
  }
];