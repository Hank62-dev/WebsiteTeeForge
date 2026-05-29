import { mockProducts, Product } from '../data/products';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    // In the future, this will be: return await ProductModel.find();
    return mockProducts;
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return mockProducts.find(p => p.id === id);
  }
}

export const productService = new ProductService();
