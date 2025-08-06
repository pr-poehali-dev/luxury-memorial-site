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
      
      <section className="pt-4 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-1">Сравнение товаров</h1>
              <p className="text-sm text-muted-foreground">
                {state.comparison.length} {state.comparison.length === 1 ? 'товар' : state.comparison.length < 5 ? 'товара' : 'товаров'}
              </p>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearComparison}
              className="text-destructive hover:text-destructive h-8"
            >
              <Icon name="Trash2" size={14} className="mr-1" />
              <span className="hidden sm:inline">Очистить</span>
            </Button>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* Product Images and Basic Info */}
              <div className="grid grid-cols-1 gap-2 mb-4" style={{ gridTemplateColumns: `140px repeat(${state.comparison.length}, minmax(180px, 240px))` }}>
                {/* Header */}
                <div className="text-xs font-medium text-muted-foreground self-end pb-2">
                  Товары
                </div>
                
                {state.comparison.map((product) => (
                  <Card key={product.id} className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1 right-1 z-10 h-5 w-5 text-muted-foreground hover:text-destructive"
                      onClick={() => removeFromComparison(product.id)}
                    >
                      <Icon name="X" size={12} />
                    </Button>
                    
                    <div className="bg-muted rounded-t-lg overflow-hidden">
                      <div className="w-full aspect-square">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <CardHeader className="p-3 pb-2">
                      <CardTitle className="text-sm leading-tight line-clamp-2">
                        {product.title}
                      </CardTitle>
                      {product.subtitle && (
                        <CardDescription className="text-xs leading-tight">
                          {product.subtitle}
                        </CardDescription>
                      )}
                    </CardHeader>
                    
                    <CardContent className="p-3 pt-0 space-y-2">
                      <div className="flex gap-1 flex-wrap">
                        {product.isNew && (
                          <Badge variant="secondary" className="text-xs px-1 py-0 h-4">Новинка</Badge>
                        )}
                        {product.isPopular && (
                          <Badge variant="secondary" className="text-xs px-1 py-0 h-4">Хит</Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-1">
                        <Button 
                          size="sm" 
                          className="flex-1 h-7 text-xs"
                          onClick={() => addToCart({
                            ...product,
                            quantity: 1,
                            selectedMaterial: 'granite',
                            selectedSize: 'standard'
                          })}
                        >
                          <Icon name="ShoppingCart" size={12} className="mr-1" />
                          Купить
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="h-7 w-7 p-0"
                          onClick={() => addToFavorites(product)}
                          disabled={isInFavorites(product.id)}
                        >
                          <Icon 
                            name="Heart" 
                            size={12}
                            className={isInFavorites(product.id) ? "text-red-500 fill-current" : ""} 
                          />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="my-4" />

              {/* Comparison Fields */}
              <div className="space-y-2">
                {comparisonFields.map((field) => (
                  <div 
                    key={field.key} 
                    className="grid grid-cols-1 gap-2 py-2 border-b border-muted/50"
                    style={{ gridTemplateColumns: `140px repeat(${state.comparison.length}, minmax(180px, 240px))` }}
                  >
                    <div className="text-xs font-medium text-muted-foreground">
                      {field.label}
                    </div>
                    
                    {state.comparison.map((product) => (
                      <div key={product.id} className="text-sm font-medium">
                        {field.key === 'price' ? (
                          <div className="flex items-center gap-1 flex-wrap">
                            <span className="font-bold">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                {product.originalPrice}
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
              <div className="mt-4">
                <h3 className="text-lg font-bold mb-2">Дополнительные характеристики</h3>
                
                <div className="space-y-1">
                  {[
                    { label: 'Установка', key: 'installation' },
                    { label: 'Гарантия', key: 'warranty' },
                    { label: 'Изготовление', key: 'production_time' },
                    { label: 'Включено', key: 'included' },
                  ].map((field) => (
                    <div 
                      key={field.key}
                      className="grid grid-cols-1 gap-2 py-1 border-b border-muted/30"
                      style={{ gridTemplateColumns: `140px repeat(${state.comparison.length}, minmax(180px, 240px))` }}
                    >
                      <div className="text-xs text-muted-foreground">
                        {field.label}
                      </div>
                      
                      {state.comparison.map((product) => (
                        <div key={product.id} className="text-xs">
                          {field.key === 'installation' ? 'Профессиональная' :
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
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-3">Похожие товары</h2>
            <div className="text-center py-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">Посмотрите другие варианты в каталоге</p>
              <Button asChild size="sm">
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