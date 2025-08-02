import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { useApp } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const { state, removeFromFavorites, addToCart, addToComparison, isInComparison } = useApp();

  if (state.favorites.length === 0) {
    return (
      <Layout>
        <div className="bg-background">
        
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center py-16">
              <div className="mb-8 mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Icon name="Heart" size={48} className="text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Избранное пусто</h1>
              <p className="text-muted-foreground mb-8">
                Добавляйте товары в избранное, чтобы не потерять их
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Избранные товары</h1>
            <p className="text-muted-foreground">
              {state.favorites.length} {state.favorites.length === 1 ? 'товар' : state.favorites.length < 5 ? 'товара' : 'товаров'} в избранном
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {state.favorites.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
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
                      onClick={() => removeFromFavorites(product.id)}
                    >
                      <Icon name="X" size={16} className="text-red-500" />
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
                    <div className="absolute top-3 right-3">
                      <Badge variant="destructive">Скидка</Badge>
                    </div>
                  )}
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

          {/* Recommendations */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Возможно, вас заинтересует</h2>
            <div className="text-center py-8 bg-muted rounded-lg">
              <p className="text-muted-foreground mb-4">Посмотрите наши рекомендации</p>
              <Button asChild>
                <Link to="/catalog">Смотреть каталог</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
}