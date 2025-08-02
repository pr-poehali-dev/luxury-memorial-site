import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет отправка формы
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="bg-background">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы работаем ежедневно и готовы помочь вам
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Как с нами связаться</h2>
                <p className="text-muted-foreground mb-8">
                  Наши специалисты готовы ответить на все ваши вопросы и помочь в выборе памятника. 
                  Консультации предоставляются бесплатно.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
                    <CardTitle>Телефон</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Основной номер</p>
                    <p className="text-lg font-semibold">+7 (926) 987-65-43</p>
                    <p className="text-sm text-muted-foreground">Мобильный</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="text-lg font-semibold">info@postament.ru</p>
                    <p className="text-sm text-muted-foreground">Общие вопросы</p>
                    <p className="text-lg font-semibold">order@postament.ru</p>
                    <p className="text-sm text-muted-foreground">Заказы</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                    <CardTitle>Адрес</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-lg font-semibold mb-2">г. Москва</p>
                    <p className="text-muted-foreground">ул. Каменотёсов, 15</p>
                    <p className="text-muted-foreground">БЦ "Гранит", офис 205</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                    <CardTitle>Режим работы</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-1">
                    <p className="font-semibold">Пн-Пт: 9:00-19:00</p>
                    <p className="font-semibold">Сб-Вс: 10:00-17:00</p>
                    <p className="text-sm text-muted-foreground mt-2">Без перерывов и выходных</p>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="font-heading text-xl font-semibold mb-4 flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-primary" />
                  Дополнительная информация
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Car" size={16} className="text-primary mt-0.5" />
                    <p>Бесплатная парковка для клиентов</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Accessibility" size={16} className="text-primary mt-0.5" />
                    <p>Доступная среда для людей с ограниченными возможностями</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Coffee" size={16} className="text-primary mt-0.5" />
                    <p>Комфортная зона ожидания с чаем и кофе</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Truck" size={16} className="text-primary mt-0.5" />
                    <p>Выезд специалиста на дом бесплатно</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Написать нам</CardTitle>
                  <CardDescription>
                    Оставьте сообщение, и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Введите ваше имя"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите, чем мы можем помочь..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить сообщение
                    </Button>

                    <p className="text-xs text-muted-foreground">
                      * Обязательные поля. Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-8">Как нас найти</h2>
            <Card>
              <CardContent className="p-0">
                <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
                  {/* Заглушка карты */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="text-center">
                      <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Интерактивная карта</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Каменотёсов, 15</p>
                      <p className="text-muted-foreground">БЦ "Гранит", офис 205</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How to Get There */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Icon name="Car" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle>На автомобиле</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Удобный заезд с Садового кольца. Бесплатная парковка на 20 мест.
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="Navigation" size={14} className="mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="Train" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle>На метро</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Станция "Красные ворота" - 5 минут пешком. Выход №2, поворот направо.
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="Clock" size={14} className="mr-2" />
                  Время в пути
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="Bus" size={32} className="text-primary mx-auto mb-3" />
                <CardTitle>На автобусе</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Автобусы №15, 40, 122. Остановка "Улица Каменотёсов".
                </p>
                <Button variant="outline" size="sm">
                  <Icon name="MapPin" size={14} className="mr-2" />
                  Остановки рядом
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      </div>
    </Layout>
  );
}