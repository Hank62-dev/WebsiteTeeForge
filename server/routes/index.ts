import { Router } from 'express';
import productRoutes from './product.routes';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TeeForge Server (TS) is running!' });
});

// Products Routes
router.use('/products', productRoutes);

export default router;
