import express from 'express';
import cors from 'cors';
import catRoutes from './src/routes/catRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/cats', catRoutes);

export default app;
