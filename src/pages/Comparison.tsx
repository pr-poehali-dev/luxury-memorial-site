import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { useApp } from '@/contexts/AppContext';
import { Link } from 'react-router-dom';

export default function Comparison() {
  const { state, removeFromComparison, clearComparison, addToCart, addToFavorites, isInFavorites } = useApp();

  if (state.comparison.length === 0) {
    return (
      <Layout>
        <div className="bg-background">
        <Header />
        
        <section className="pt-8 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center py-16">
              <div className="mb-8 mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <Icon name="BarChart3" size={48} className="text-muted-foreground" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Список сравнения пуст</h1>
              <p className="text-muted-foreground mb-8">
                Добавьте товары для сравнения их характеристик
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

  const comparisonFields = [
    { key: 'price', label: 'Цена' },
    { key: 'dimensions', label: 'Размеры' },
    { key: 'material', label: 'Материал' },
    { key: 'category', label: 'Категория' },
  ];

  return (
    <Layout>
      <div className="bg-background">
      <Header />
      
      <section className="pt-8 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Сравнение товаров</h1>
              <p className="text-muted-foreground">
                {state.comparison.length} {state.comparison.length === 1 ? 'товар' : state.comparison.length < 5 ? 'товара' : 'товаров'} для сравнения
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={clearComparison}
              className="text-destructive hover:text-destructive"
            >
              <Icon name="Trash2" size={16} className="mr-2" />
              Очистить список
            </Button>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* Product Images and Basic Info */}
              <div className="grid grid-cols-1 gap-4 mb-8" style={{ gridTemplateColumns: `200px repeat(${state.comparison.length}, 1fr)` }}>
                {/* Header */}
                <div className="font-medium text-muted-foreground self-end pb-4">
                  Товары
                </div>
                
                {state.comparison.map((product) => (
                  <Card key={product.id} className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 z-10 h-6 w-6 text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromComparison(product.id)}
                    >
                      <Icon name="X" size={14} />
                    </Button>
                    
                    <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base line-clamp-2">
                        {product.title}
                      </CardTitle>
                      {product.subtitle && (
                        <CardDescription className="text-sm">
                          {product.subtitle}
                        </CardDescription>
                      )}
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="flex gap-1 flex-wrap">
                        {product.isNew && (
                          <Badge variant="secondary" className="text-xs">Новинка</Badge>
                        )}
                        {product.isPopular && (
                          <Badge variant="secondary" className="text-xs">Популярный</Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => addToCart({
                            ...product,
                            quantity: 1,
                            selectedMaterial: 'granite',
                            selectedSize: 'standard'
                          })}
                        >
                          <Icon name="ShoppingCart" size={14} className="mr-1" />
                          В корзину
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addToFavorites(product)}
                          disabled={isInFavorites(product.id)}
                        >
                          <Icon 
                            name="Heart" 
                            size={14}
                            className={isInFavorites(product.id) ? "text-red-500 fill-current" : ""} 
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="my-8" />

              {/* Comparison Fields */}
              <div className="space-y-4">
                {comparisonFields.map((field) => (
                  <div 
                    key={field.key} 
                    className="grid grid-cols-1 gap-4 py-4 border-b border-muted"
                    style={{ gridTemplateColumns: `200px repeat(${state.comparison.length}, 1fr)` }}
                  >
                    <div className="font-medium text-muted-foreground">
                      {field.label}
                    </div>
                    
                    {state.comparison.map((product) => (
                      <div key={product.id} className="font-medium">
                        {field.key === 'price' ? (
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold">{product.price.toLocaleString()} ₽</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {product.originalPrice.toLocaleString()} ₽
                              </span>
                            )}
                          </div>
                        ) : field.key === 'dimensions' ? (
                          product.dimensions || '—'
                        ) : field.key === 'material' ? (
                          product.material || 'Гранит'
                        ) : field.key === 'category' ? (
                          product.category || 'Памятники'
                        ) : (
                          '—'
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Additional Characteristics */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Дополнительные характеристики</h3>
                
                <div className="space-y-4">
                  {[
                    { label: 'Тип установки', key: 'installation' },
                    { label: 'Гарантия', key: 'warranty' },
                    { label: 'Срок изготовления', key: 'production_time' },
                    { label: 'Включено в стоимость', key: 'included' },
                  ].map((field) => (
                    <div 
                      key={field.key}
                      className="grid grid-cols-1 gap-4 py-3 border-b border-muted/50"
                      style={{ gridTemplateColumns: `200px repeat(${state.comparison.length}, 1fr)` }}
                    >
                      <div className="text-sm text-muted-foreground">
                        {field.label}
                      </div>
                      
                      {state.comparison.map((product) => (
                        <div key={product.id} className="text-sm">
                          {field.key === 'installation' ? 'Профессиональная установка' :
                           field.key === 'warranty' ? '10 лет' :
                           field.key === 'production_time' ? '14-21 день' :
                           field.key === 'included' ? 'Гравировка, доставка' :
                           '—'}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
            <div className="text-center py-8 bg-muted rounded-lg">
              <p className="text-muted-foreground mb-4">Посмотрите другие варианты в каталоге</p>
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