import { useMemo } from 'react';
import { Monument } from './CatalogData';

export function useCatalogFilters(
  monuments: Monument[],
  selectedCategory: string,
  selectedMaterial: string,
  selectedPrice: string
) {
  const filteredMonuments = useMemo(() => {
    return monuments.filter(monument => {
      const categoryMatch = selectedCategory === 'all' || monument.category === selectedCategory;
      const materialMatch = selectedMaterial === 'all' || monument.material === selectedMaterial;
      
      let priceMatch = true;
      if (selectedPrice !== 'all') {
        const price = parseInt(monument.price.replace(/[^\d]/g, ''));
        switch (selectedPrice) {
          case 'budget':
            priceMatch = price <= 30000;
            break;
          case 'medium':
            priceMatch = price > 30000 && price <= 60000;
            break;
          case 'premium':
            priceMatch = price > 60000 && price <= 100000;
            break;
          case 'luxury':
            priceMatch = price > 100000;
            break;
        }
      }
      
      return categoryMatch && materialMatch && priceMatch;
    });
  }, [monuments, selectedCategory, selectedMaterial, selectedPrice]);

  return filteredMonuments;
}