import { Router } from 'express';
import dateController from '../controllers/dateController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.get('/v1/date', dateController.getDatePerMonth);
router.get('/v1/date/:date', dateController.getSpecificDate);
router.post('/v1/date', authMiddleware.shouldLogin, dateController.createDate);

export default router;