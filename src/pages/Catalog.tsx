import { useState } from 'react';
import Layout from '@/components/Layout';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import ProductGrid from '@/components/catalog/ProductGrid';
import CatalogPagination from '@/components/catalog/CatalogPagination';
import CatalogAbout from '@/components/catalog/CatalogAbout';
import CustomOrderBanner from '@/components/catalog/CustomOrderBanner';
import { monuments, sizeOptions, type MonumentSize, type Monument } from '@/components/catalog/CatalogData';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  // Состояние для выбранных размеров и вариантов каждого товара
  const [selectedSizes, setSelectedSizes] = useState<Record<string, MonumentSize>>({});
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);

  // Функции для работы с размерами
  const handleSizeChange = (monumentId: string, size: MonumentSize) => {
    setSelectedSizes(prev => ({ ...prev, [monumentId]: size }));
    // Сбрасываем выбранный вариант при смене типа
    const sizeOption = sizeOptions.find(opt => opt.value === size);
    if (sizeOption) {
      setSelectedVariants(prev => ({ ...prev, [monumentId]: sizeOption.variants[0].id }));
    }
  };

  const handleVariantChange = (monumentId: string, variantId: string) => {
    setSelectedVariants(prev => ({ ...prev, [monumentId]: variantId }));
  };

  const getSelectedSize = (monumentId: string): MonumentSize => {
    return selectedSizes[monumentId] || 'стела';
  };

  const getSelectedVariant = (monumentId: string): string => {
    const selectedSize = getSelectedSize(monumentId);
    const sizeOption = sizeOptions.find(opt => opt.value === selectedSize);
    return selectedVariants[monumentId] || sizeOption?.variants[0].id || '';
  };

  const getCurrentPrice = (monument: Monument, monumentId: string): number => {
    const variantId = getSelectedVariant(monumentId);
    const basePrice = parseInt(monument.price.replace(/[^\d]/g, ''));
    
    for (const sizeOption of sizeOptions) {
      const variant = sizeOption.variants.find(v => v.id === variantId);
      if (variant) {
        return Math.round(basePrice * variant.priceModifier);
      }
    }
    return basePrice;
  };

  const filteredMonuments = monuments.filter(monument => {
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

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
  };

  const handleLoadMore = () => {
    console.log('Loading more items...');
    if (currentPage >= 8) {
      setShowLoadMore(false);
    }
  };

  return (
    <Layout>
      <div className="bg-background">
        <CatalogHeader />
        
        <CatalogFilters
          selectedCategory={selectedCategory}
          selectedPrice={selectedPrice}
          onCategoryChange={setSelectedCategory}
          onPriceChange={setSelectedPrice}
          onReset={handleResetFilters}
        />

        <ProductGrid
          monuments={filteredMonuments}
          sizeOptions={sizeOptions}
          selectedSizes={selectedSizes}
          selectedVariants={selectedVariants}
          onSizeChange={handleSizeChange}
          onVariantChange={handleVariantChange}
          getCurrentPrice={getCurrentPrice}
          getSelectedSize={getSelectedSize}
          getSelectedVariant={getSelectedVariant}
          onResetFilters={handleResetFilters}
        />

        <CatalogPagination
          currentPage={currentPage}
          showLoadMore={showLoadMore}
          onPageChange={setCurrentPage}
          onLoadMore={handleLoadMore}
        />

        <CatalogAbout />
        
        <CustomOrderBanner />
      </div>
    </Layout>
  );
}