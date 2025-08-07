import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

interface Cemetery {
  name: string;
  slug: string;
  type: 'moscow' | 'region';
  district?: string;
  description: string;
  established?: string;
  area?: string;
}

const moscowCemeteries: Cemetery[] = [
  {
    name: 'Алексеевское кладбище',
    slug: 'alekseevskoe',
    type: 'moscow',
    district: 'СВАО',
    description: 'Одно из крупнейших кладбищ Москвы, расположенное в Северо-Восточном округе. Здесь покоятся многие известные деятели культуры и науки.',
    established: '1963',
    area: '75 га'
  },
  {
    name: 'Алтуфьевское кладбище',
    slug: 'altufjevo',
    type: 'moscow',
    district: 'СВАО',
    description: 'Современное кладбище в районе Алтуфьево. Благоустроенная территория с удобными подъездными путями.',
    established: '1978',
    area: '45 га'
  },
  {
    name: 'Армянское кладбище',
    slug: 'armjanskoe',
    type: 'moscow',
    district: 'ЮАО',
    description: 'Историческое армянское кладбище с уникальными памятниками и традициями национального погребения.',
    established: '1896',
    area: '12 га'
  },
  {
    name: 'Бабушкинское кладбище',
    slug: 'babushkinskoe',
    type: 'moscow',
    district: 'СВАО',
    description: 'Кладбище в районе Бабушкинский, известное своими мемориальными комплексами и ухоженной территорией.',
    established: '1959',
    area: '38 га'
  },
  {
    name: 'Богородское кладбище',
    slug: 'bogorodskoe',
    type: 'moscow',
    district: 'ВАО',
    description: 'Одно из старейших кладбищ Восточного округа Москвы с богатой историей и архитектурными памятниками.',
    established: '1771',
    area: '51 га'
  },
  {
    name: 'Борисовское кладбище',
    slug: 'borisovskoe',
    type: 'moscow',
    district: 'ЮАО',
    description: 'Современное кладбище в Южном округе с развитой инфраструктурой и удобным расположением.',
    established: '1985',
    area: '42 га'
  }
];

export default function Cemeteries() {
  return (
    <Layout>
      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-4 pb-16 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Icon name="MapPin" className="w-12 h-12 text-primary mr-4" />
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  Кладбища Москвы и Московской области
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Полный справочник кладбищ Москвы и области с информацией о расположении, 
                истории и особенностях каждого места упокоения. Помощь в выборе места 
                для захоронения и установки памятника.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg px-6 py-3 border">
                  <div className="text-2xl font-bold text-primary">{moscowCemeteries.length}</div>
                  <div className="text-sm text-muted-foreground">кладбищ в каталоге</div>
                </div>
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg px-6 py-3 border">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">консультации</div>
                </div>
                <div className="bg-muted/50 backdrop-blur-sm rounded-lg px-6 py-3 border">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cemeteries Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Кладбища Москвы
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выберите кладбище для получения подробной информации об услугах, 
                расположении и особенностях захоронения
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moscowCemeteries.map((cemetery) => (
                <Link
                  key={cemetery.slug}
                  to={`/cemeteries/${cemetery.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 
                           hover:shadow-lg hover:border-primary/50 transition-all duration-300 
                           hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors font-heading mb-2">
                        {cemetery.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {cemetery.district}
                        </Badge>
                        {cemetery.established && (
                          <Badge variant="outline" className="text-xs">
                            с {cemetery.established}
                          </Badge>
                        )}
                        {cemetery.area && (
                          <Badge variant="outline" className="text-xs">
                            {cemetery.area}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Icon 
                      name="ArrowRight" 
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary transform 
                               group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" 
                    />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {cemetery.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Наши услуги на кладбищах
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Полный спектр услуг для увековечения памяти ваших близких
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Hammer" className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Изготовление памятников</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Гранитные и мраморные памятники любой сложности с доставкой и установкой на кладбище
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Truck" className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Доставка и установка</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Бережная доставка и профессиональная установка памятников на любом кладбище
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Wrench" className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Благоустройство захоронений</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Облицовка, ограды, цветники и другие элементы благоустройства могил
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Image" className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Портреты и гравировка</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Портреты на камне, художественная гравировка, эпитафии и надписи
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Users" className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Консультации специалистов</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Помощь в выборе места, оформлении документов и планировании захоронения
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-lg font-semibold">Круглосуточная поддержка</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Работаем 24/7, всегда готовы оказать помощь в трудную минуту
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Нужна консультация по кладбищам?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Наши специалисты помогут выбрать подходящее место и расскажут обо всех особенностях
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="px-8 py-3">
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                Написать в WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3">
                <Icon name="MapPin" className="w-5 h-5 mr-2" />
                Показать на карте
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}