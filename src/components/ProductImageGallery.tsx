import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface ProductImageGalleryProps {
  images: string[];
  selectedImage: number;
  title: string;
  selectedServices: string[];
  onServiceToggle: (serviceId: string) => void;
}

const services: Service[] = [
  { id: 'portrait-gravir', name: 'Портрет гравировка', price: 8000, category: 'Портрет' },
  { id: 'portrait-hand', name: 'Портрет ручной', price: 15000, category: 'Портрет' },
  { id: 'fio-gravir', name: 'ФИО гравировка', price: 2000, category: 'Текст' },
  { id: 'fio-skarpel', name: 'ФИО скарпель', price: 4000, category: 'Текст' },
  { id: 'fio-gold', name: 'ФИО сусальное золото', price: 6000, category: 'Текст' },
  { id: 'gravir-cross', name: 'Гравировка креста', price: 3000, category: 'Символы' },
  { id: 'gravir-cvety', name: 'Гравировка цветы', price: 0, category: 'Декор' },
  { id: 'gravir-epitafiya', name: 'Гравировка эпитафия', price: 0, category: 'Текст' },
  { id: 'gravir-vinetka', name: 'Гравировка виньетки', price: 2500, category: 'Декор' },
  { id: 'gravir-svechi', name: 'Гравировка свечи', price: 1500, category: 'Декор' },
  { id: 'gravir-ikona', name: 'Гравировка иконы', price: 5000, category: 'Символы' },
  { id: 'gravir-kartinka', name: 'Гравировка картинки', price: 3500, category: 'Декор' },
  { id: 'retush-photo', name: 'Ретушь фотографии', price: 1000, category: 'Обработка' },
  { id: 'protection', name: 'Защитное покрытие', price: 4000, category: 'Обработка' },
  { id: 'storage', name: 'Хранение на складе', price: 500, category: 'Услуги' }
];

export default function ProductImageGallery({ 
  images, 
  selectedImage, 
  title, 
  selectedServices, 
  onServiceToggle 
}: ProductImageGalleryProps) {
  const getServicesTotal = () => {
    return services
      .filter(service => selectedServices.includes(service.id))
      .reduce((total, service) => total + service.price, 0);
  };

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
        <img 
          src={images[selectedImage]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-medium text-sm mb-3 text-muted-foreground">Дополнительное оформление</h3>
        <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-2">
          {services.map((service) => {
            const isSelected = selectedServices.includes(service.id);
            const isFree = service.price === 0;
            
            return (
              <div 
                key={service.id}
                className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-colors hover:bg-muted/50 ${
                  isSelected ? 'border-primary bg-primary/5' : 'border-muted'
                }`}
                onClick={() => onServiceToggle(service.id)}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground'
                  }`}>
                    {isSelected && (
                      <Icon name="Check" size={10} className="text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{service.name}</div>
                    <div className="text-xs text-muted-foreground">{service.category}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  {isFree ? (
                    <span className="text-green-500">Бесплатно</span>
                  ) : (
                    <span className="text-primary">{service.price.toLocaleString()} ₽</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 p-2 bg-muted/30 rounded-lg">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Итого за оформление:</span>
            <span className="font-semibold text-primary">
              {getServicesTotal().toLocaleString()} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}