import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight } from 'lucide-react';

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything yet.</p>
        <Link to="/catalog" className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-opacity">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.cartItemId} className="flex gap-6 p-6 border border-border rounded-2xl relative">
                <div className="w-24 h-32 flex-shrink-0 bg-muted rounded-xl overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                      <p className="text-muted-foreground mb-2">Size: {item.selectedSize} | Color: {item.selectedColor}</p>
                    </div>
                    <p className="text-xl font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <div className="mt-auto flex justify-between items-end">
                    <div className="flex items-center border border-border rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-4 py-2 text-foreground hover:bg-muted rounded-l-lg transition-colors"
                      >-</button>
                      <span className="px-4 font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-4 py-2 text-foreground hover:bg-muted rounded-r-lg transition-colors"
                      >+</button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-red-500 p-2 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-full transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="glass-card p-8 sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-foreground">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="text-lg font-bold">Total</span>
                <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center">
              Proceed to Checkout <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
