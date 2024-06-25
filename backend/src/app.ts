import express, { Express } from 'express';
import dateRoutes from './routes/dateRoutes';
import authRoutes from './routes/authRoutes';
import { JwtPayload } from 'jsonwebtoken';

declare module "express-serve-static-core" {
    interface Request {
        user?: string | JwtPayload;
    }
}

const app: Express = express();

app.use(dateRoutes);
app.use(authRoutes);

export default app;
