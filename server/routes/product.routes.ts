import { Router } from 'express';
import { productController } from '../controllers/product.controller';

const router = Router();

router.get('/', productController.getProducts.bind(productController));
router.get('/:id', productController.getProduct.bind(productController));

export default router;
