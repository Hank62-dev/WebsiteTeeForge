import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
        </div>
        <p className="text-lg font-medium text-foreground">${product.price}</p>
      </div>
    </Link>
  );
}
