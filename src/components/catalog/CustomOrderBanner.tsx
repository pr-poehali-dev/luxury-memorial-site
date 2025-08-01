import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function CustomOrderBanner() {
  return (
    <Card className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-2xl">
          Не нашли подходящий памятник?
        </CardTitle>
        <CardDescription className="text-lg">
          Мы изготовим памятник по вашему индивидуальному проекту
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Icon name="PenTool" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Индивидуальный дизайн</h4>
            <p className="text-sm text-muted-foreground">Создадим уникальный проект специально для вас</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="Gem" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Премиальные материалы</h4>
            <p className="text-sm text-muted-foreground">Используем только лучшие сорта гранита и мрамора</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="Clock" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Быстрое изготовление</h4>
            <p className="text-sm text-muted-foreground">Выполним заказ в течение 14-21 дня</p>
          </div>
        </div>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
          Заказать индивидуальный памятник
        </Button>
      </CardContent>
    </Card>
  );
}