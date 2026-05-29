import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { Loader2 } from 'lucide-react';

export function Catalog() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  
  const { products, loading, error } = useProducts();

  const categories = ['All', 'New Arrivals', 'Essentials', 'Streetwear', 'Graphics', 'Vintage'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory || (activeCategory === 'New Arrivals' && p.category === 'Graphics')); // Simple mock logic

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">The Collection</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our complete range of premium quality t-shirts. Meticulously crafted for the modern wardrobe.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-muted text-foreground hover:bg-muted/80 border border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-32">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : error ? (
        <div className="text-center py-20 text-red-500">Failed to load products: {error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
