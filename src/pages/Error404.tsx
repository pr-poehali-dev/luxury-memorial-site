import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <Layout>
      <div className="bg-background min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="mx-auto w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
                <Icon name="AlertTriangle" size={64} className="text-[rgb(46,184,45)]" />
              </div>
              
              {/* 404 Text */}
              <h1 className="text-8xl font-bold text-[rgb(46,184,45)] mb-4">404</h1>
              
              {/* Error Message */}
              <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
              
              <p className="text-muted-foreground mb-8 text-lg">
                К сожалению, запрашиваемая страница не существует или была перемещена.
                Возможно, вы перешли по устаревшей ссылке или допустили ошибку в адресе.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild className="w-full sm:w-auto">
                <Link to="/">
                  <Icon name="Home" size={16} className="mr-2" />
                  На главную
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link to="/catalog">
                  <Icon name="Package" size={16} className="mr-2" />
                  Каталог товаров
                </Link>
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto"
              >
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
            </div>

            {/* Help Section */}
            <div className="mt-12 pt-8 border-t border-muted">
              <h3 className="text-lg font-semibold mb-4">Нужна помощь?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-muted/30 rounded-lg p-4">
                  <Icon name="Search" size={20} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="font-medium mb-1">Поиск</p>
                  <p className="text-muted-foreground">Найдите нужный товар в каталоге</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <Icon name="Phone" size={20} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="font-medium mb-1">Звонок</p>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <Icon name="Mail" size={20} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-muted-foreground">info@memorial.ru</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}