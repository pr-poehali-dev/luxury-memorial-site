import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { forms, recipients, priceRanges } from './CatalogData';

interface CatalogFiltersProps {
  selectedForm: string;
  selectedRecipient: string;
  selectedPrice: string;
  onFormChange: (value: string) => void;
  onRecipientChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onReset: () => void;
}

export default function CatalogFilters({
  selectedForm,
  selectedRecipient,
  selectedPrice,
  onFormChange,
  onRecipientChange,
  onPriceChange,
  onReset
}: CatalogFiltersProps) {
  return (
    <section className="pb-4 md:pb-6 px-4">
      <div className="container mx-auto">
        <div className="bg-muted/30 rounded-lg p-2 md:p-3">
          <div className="flex gap-2 items-center justify-start">
            {/* Form dropdown */}
            <div className="w-auto">
              <Select value={selectedForm} onValueChange={onFormChange}>
                <SelectTrigger className="h-8 w-32 bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors text-sm">
                  <SelectValue placeholder="Форма" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-lg">
                  {forms.map(form => (
                    <SelectItem 
                      key={form.id} 
                      value={form.id}
                      className="hover:bg-primary/5 rounded cursor-pointer transition-colors text-sm"
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{form.name}</span>
                        <span className="text-xs text-muted-foreground ml-2">({form.count})</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Recipient dropdown */}
            <div className="w-auto">
              <Select value={selectedRecipient} onValueChange={onRecipientChange}>
                <SelectTrigger className="h-8 w-28 bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors text-sm">
                  <SelectValue placeholder="Кому" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-lg">
                  {recipients.map(recipient => (
                    <SelectItem 
                      key={recipient.id} 
                      value={recipient.id}
                      className="hover:bg-primary/5 rounded cursor-pointer transition-colors text-sm"
                    >
                      {recipient.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price dropdown */}
            <div className="w-auto">
              <Select value={selectedPrice} onValueChange={onPriceChange}>
                <SelectTrigger className="h-8 w-32 bg-white border border-gray-200 rounded-lg hover:border-primary transition-colors text-sm">
                  <SelectValue placeholder="Цена" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-100 rounded-lg shadow-lg">
                  {priceRanges.map(range => (
                    <SelectItem 
                      key={range.id} 
                      value={range.id}
                      className="hover:bg-primary/5 rounded cursor-pointer transition-colors text-sm"
                    >
                      {range.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}