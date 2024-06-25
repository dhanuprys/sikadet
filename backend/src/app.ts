import express, { Express } from 'express';
import dateRoutes from './routes/dateRoutes';
import authRoutes from './routes/authRoutes';

const app: Express = express();

app.use(dateRoutes);
app.use(authRoutes);

export default app;
