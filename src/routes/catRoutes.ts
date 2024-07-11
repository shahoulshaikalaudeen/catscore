import { Router } from 'express';
import { getAllCats, voteCat } from '../controllers/catController';

const router = Router();

router.get('/', getAllCats);
router.post('/vote', voteCat);

export default router;
