import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import { useApp } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

export default function RecentlyViewed() {
  const { state, addToCart, addToFavorites, addToComparison, isInFavorites, isInComparison } = useApp();

  if (state.recentlyViewed.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center py-16">
              <div className="mb-8 mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Icon name="Eye" size={48} className="text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Нет просмотренных товаров</h1>
              <p className="text-muted-foreground mb-8">
                Просматривайте товары, и они появятся здесь
              </p>
              <Button asChild>
                <Link to="/catalog">Перейти к каталогу</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Недавно просмотренное</h1>
            <p className="text-muted-foreground">
              {state.recentlyViewed.length} {state.recentlyViewed.length === 1 ? 'товар' : state.recentlyViewed.length < 5 ? 'товара' : 'товаров'} в истории просмотров
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {state.recentlyViewed.map((product, index) => (
              <Card key={`${product.id}-${index}`} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
                    )}
                    {product.isPopular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600">Популярный</Badge>
                    )}
                  </div>
                  
                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-white/90 hover:bg-white"
                      onClick={() => addToFavorites(product)}
                      disabled={isInFavorites(product.id)}
                    >
                      <Icon 
                        name="Heart" 
                        size={16} 
                        className={isInFavorites(product.id) ? "text-red-500 fill-current" : "text-gray-600"} 
                      />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8 bg-white/90 hover:bg-white"
                      onClick={() => addToComparison(product)}
                      disabled={isInComparison(product.id)}
                    >
                      <Icon 
                        name="BarChart3" 
                        size={16} 
                        className={isInComparison(product.id) ? "text-blue-600" : "text-gray-600"} 
                      />
                    </Button>
                  </div>
                  
                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="destructive">Скидка</Badge>
                    </div>
                  )}

                  {/* Recently viewed badge */}
                  <div className="absolute bottom-3 right-3">
                    <Badge variant="outline" className="bg-white/90 text-xs">
                      {index === 0 ? 'Последний просмотр' : `${index + 1} назад`}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading text-lg line-clamp-2">
                    {product.title}
                  </CardTitle>
                  {product.subtitle && (
                    <CardDescription className="text-sm">
                      {product.subtitle}
                    </CardDescription>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {product.dimensions && (
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Размеры:</span>
                      <span className="font-medium">{product.dimensions}</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{product.price.toLocaleString()} ₽</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {product.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => addToCart({
                        ...product,
                        quantity: 1,
                        selectedMaterial: 'granite',
                        selectedSize: 'standard'
                      })}
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link to={`/product/${product.id}`}>
                        <Icon name="Eye" size={18} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* History Management */}
          <div className="mt-12 text-center">
            <div className="bg-muted rounded-lg p-6">
              <Icon name="Info" size={24} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">История просмотров</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Мы сохраняем последние 10 просмотренных товаров, чтобы вы могли легко к ним вернуться
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" asChild>
                  <Link to="/catalog">Продолжить просмотр</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/favorites">Избранное</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}