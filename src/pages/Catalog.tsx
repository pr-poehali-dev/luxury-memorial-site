import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useApp } from '@/contexts/AppContext';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import CatalogGrid from '@/components/catalog/CatalogGrid';
import CustomOrderBanner from '@/components/catalog/CustomOrderBanner';
import { monuments } from '@/components/catalog/CatalogData';
import { useCatalogFilters } from '@/components/catalog/useCatalogFilters';

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  
  const { addToCart, addToFavorites, addToComparison, isInFavorites, isInComparison } = useApp();

  const filteredMonuments = useCatalogFilters(
    monuments,
    selectedCategory,
    selectedMaterial,
    selectedPrice
  );

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSelectedPrice('all');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header */}
      <section className="pt-4 pb-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Каталог памятников
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 45 готовых моделей памятников из премиальных материалов. 
              Возможность индивидуального изготовления по вашему проекту.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <CatalogFilters
        selectedCategory={selectedCategory}
        selectedMaterial={selectedMaterial}
        selectedPrice={selectedPrice}
        onCategoryChange={setSelectedCategory}
        onMaterialChange={setSelectedMaterial}
        onPriceChange={setSelectedPrice}
        onReset={handleReset}
      />

      {/* Content */}
      <CatalogGrid
        monuments={filteredMonuments}
        onAddToFavorites={addToFavorites}
        onAddToComparison={addToComparison}
        onReset={handleReset}
        isInFavorites={isInFavorites}
        isInComparison={isInComparison}
      />

      {/* Custom order banner */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <CustomOrderBanner />
        </div>
      </section>

      <Footer />
    </div>
  );
}