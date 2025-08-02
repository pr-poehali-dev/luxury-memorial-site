import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { useApp } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { state, updateCartQuantity, removeFromCart, clearCart, getCartTotal, getCartCount } = useApp();

  if (state.cart.length === 0) {
    return (
      <Layout>
        <div className="bg-background">
        
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center py-16">
              <div className="mb-8 mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Корзина пуста</h1>
              <p className="text-muted-foreground mb-8">
                Добавьте товары в корзину, чтобы оформить заказ
              </p>
              <Button asChild>
                <Link to="/catalog">Перейти к каталогу</Link>
              </Button>
            </div>
          </div>
        </section>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-background">
      
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Корзина</h1>
              <p className="text-muted-foreground mt-2">
                {getCartCount()} {getCartCount() === 1 ? 'товар' : getCartCount() < 5 ? 'товара' : 'товаров'} на сумму {getCartTotal().toLocaleString()} ₽
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={clearCart}
              className="text-destructive hover:text-destructive"
            >
              <Icon name="Trash2" size={16} className="mr-2" />
              Очистить корзину
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {state.cart.map((item) => (
                <Card key={`${item.id}-${item.selectedMaterial}-${item.selectedSize}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-medium text-lg truncate">{item.title}</h3>
                            {item.subtitle && (
                              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>

                        {/* Configuration */}
                        <div className="flex gap-4 mb-4">
                          {item.selectedMaterial && (
                            <Badge variant="secondary">
                              Материал: {item.selectedMaterial}
                            </Badge>
                          )}
                          {item.selectedSize && (
                            <Badge variant="secondary">
                              Размер: {item.selectedSize}
                            </Badge>
                          )}
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Icon name="Minus" size={12} />
                            </Button>
                            <span className="w-12 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                            >
                              <Icon name="Plus" size={12} />
                            </Button>
                          </div>
                          
                          <div className="text-right">
                            <div className="font-bold text-lg">
                              {(item.price * item.quantity).toLocaleString()} ₽
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-sm text-muted-foreground">
                                {item.price.toLocaleString()} ₽ за шт.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Товары ({getCartCount()})</span>
                      <span>{getCartTotal().toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span className="text-green-600">Бесплатно</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>К оплате</span>
                      <span>{getCartTotal().toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <Button className="w-full h-12" size="lg">
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>

                  <div className="text-center">
                    <Button variant="link" asChild>
                      <Link to="/catalog">Продолжить покупки</Link>
                    </Button>
                  </div>

                  {/* Payment Info */}
                  <div className="bg-muted rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Shield" size={16} className="text-green-600" />
                      <span>Безопасная оплата</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Truck" size={16} className="text-blue-600" />
                      <span>Бесплатная доставка</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Award" size={16} className="text-purple-600" />
                      <span>Гарантия качества</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}