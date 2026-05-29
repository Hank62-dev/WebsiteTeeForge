export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  colors: string[];
  sizes: string[];
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic Essential Tee",
    price: 29.99,
    description: "Our signature heavyweight cotton t-shirt. The perfect blend of comfort and durability.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    category: "Essentials",
    colors: ["Black", "White", "Navy", "Olive"],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "2",
    name: "Oversized Streetwear Tee",
    price: 34.99,
    description: "Dropped shoulders, relaxed fit, and premium heavyweight fabric for the perfect streetwear look.",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    category: "Streetwear",
    colors: ["Washed Black", "Heather Grey", "Vintage White"],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "3",
    name: "Minimalist Graphic Print",
    price: 39.99,
    description: "Subtle back print on our premium organic cotton blend. Art meets everyday wear.",
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&q=80&w=800",
    category: "Graphics",
    colors: ["Black", "Cream"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "4",
    name: "Vintage Wash Tee",
    price: 32.99,
    description: "Garment-dyed for a lived-in feel from day one. Incredibly soft and slightly faded.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800",
    category: "Vintage",
    colors: ["Faded Black", "Dusty Rose", "Sage Green"],
    sizes: ["S", "M", "L", "XL"]
  }
];
