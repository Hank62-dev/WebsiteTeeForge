import { Request, Response, NextFunction } from 'express';
import { productService } from '../services/product.service';

export class ProductController {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const product = await productService.getProductById(id);
      if (!product) {
        res.status(404).json({ success: false, message: 'Product not found' });
        return;
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
}

export const productController = new ProductController();
