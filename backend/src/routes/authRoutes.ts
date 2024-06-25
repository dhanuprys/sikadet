import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

router.post('/v1/auth/login', authController.login);

export default router;