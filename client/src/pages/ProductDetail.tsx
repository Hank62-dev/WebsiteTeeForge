import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check, ShoppingBag, Loader2 } from 'lucide-react';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const { product, loading, error } = useProduct(id);
  
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="h-10 w-10 animate-spin text-primary" /></div>;
  }

  if (error || !product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color.");
      return;
    }
    addToCart(product, selectedSize, selectedColor, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <button onClick={() => navigate(-1)} className="flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Product Image */}
        <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{product.name}</h1>
          <p className="text-2xl font-medium text-muted-foreground mb-6">${product.price}</p>
          
          <p className="text-lg text-foreground mb-10 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-8">
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">Color: <span className="text-muted-foreground">{selectedColor || 'Select'}</span></h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded-full border ${selectedColor === color ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-foreground hover:border-primary'} transition-all`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">Size: <span className="text-muted-foreground">{selectedSize || 'Select'}</span></h3>
                <button className="text-sm underline text-muted-foreground hover:text-foreground">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl border flex items-center justify-center font-medium ${selectedSize === size ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-foreground hover:border-primary'} transition-all`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="pt-6 border-t border-border">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`w-full py-5 rounded-2xl flex items-center justify-center text-lg font-bold transition-all ${isAdded ? 'bg-green-600 text-white' : 'bg-primary text-primary-foreground hover:opacity-90'}`}
              >
                {isAdded ? (
                  <><Check className="mr-2 h-6 w-6" /> Added to Cart</>
                ) : (
                  <><ShoppingBag className="mr-2 h-6 w-6" /> Add to Cart</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
