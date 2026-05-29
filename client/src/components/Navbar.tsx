import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 glass w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-foreground hover:bg-muted md:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-2xl font-bold tracking-tighter text-primary ml-2 md:ml-0">
              TeeForge
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Shop All
              </Link>
              <Link to="/catalog?category=New" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                New Arrivals
              </Link>
              <Link to="/catalog?category=Essentials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Essentials
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors text-foreground">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="relative p-2 rounded-full hover:bg-muted transition-colors text-foreground">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
