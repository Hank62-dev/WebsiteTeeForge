import { ArrowRight, Star, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white backdrop-blur-md mb-6 text-sm font-medium tracking-wider uppercase">
            New Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Elevate Your <br/> Everyday Style.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Discover our latest collection of premium heavyweight cotton tees. Designed for comfort, built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/catalog" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Trending Now</h2>
            <p className="mt-2 text-muted-foreground">Our most popular designs this week.</p>
          </div>
          <Link to="/catalog" className="text-primary font-medium hover:underline flex items-center">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">Failed to load products: {error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      
      {/* Testimonial */}
      <section className="bg-accent text-accent-foreground py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-current text-yellow-500" />)}
          </div>
          <blockquote className="text-2xl md:text-4xl font-medium leading-tight mb-8">
            "The quality of these tees is unmatched. They drape perfectly and feel incredibly premium. I've completely replaced my wardrobe with TeeForge."
          </blockquote>
          <cite className="not-italic text-muted-foreground text-lg">- Alex Jenkins, Verified Buyer</cite>
        </div>
      </section>
    </div>
  );
}
