import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { Monument } from './CatalogData';

interface MonumentCardProps {
  monument: Monument;
  onAddToFavorites: (monument: Monument) => void;
  onAddToComparison: (monument: Monument) => void;
  isInFavorites: (id: number) => boolean;
  isInComparison: (id: number) => boolean;
}

export default function MonumentCard({
  monument,
  onAddToFavorites,
  onAddToComparison,
  isInFavorites,
  isInComparison
}: MonumentCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={monument.image}
          alt={monument.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {monument.isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">Новинка</Badge>
          )}
          {monument.isPopular && (
            <Badge className="bg-orange-500 hover:bg-orange-600">Популярный</Badge>
          )}
        </div>
        {monument.originalPrice && (
          <div className="absolute top-3 right-3">
            <Badge variant="destructive">Скидка</Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-lg line-clamp-1">
          {monument.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{monument.price}</span>
            {monument.originalPrice && (
              <span className="text-sm line-through text-muted-foreground">
                {monument.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to={`/product/${monument.id}`}>
              Подробнее
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => onAddToFavorites(monument)}
            className={isInFavorites(monument.id) ? "text-red-500" : ""}
          >
            <Icon 
              name="Heart" 
              size={18} 
              className={isInFavorites(monument.id) ? "fill-current" : ""} 
            />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => onAddToComparison(monument)}
            className={isInComparison(monument.id) ? "text-blue-500" : ""}
          >
            <Icon name="BarChart3" size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}