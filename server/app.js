import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import addressRoutes from './routes/address.js';
import categoryRoutes from './routes/categories.js';
import mercadopagoRoutes from './routes/mercadopago.js';
import productRoutes from './routes/products.js';
import userRoutes from './routes/user.js';
import newsLetterRoute from './routes/newsletter.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: false,
}));

app.use('/mercadopago', mercadopagoRoutes);
app.use('/user', userRoutes);
app.use('/address', addressRoutes);
app.use('/product', productRoutes);
app.use('/category', categoryRoutes);
app.use('/newsletter', newsLetterRoute);

const PORT = process.env.PORT || 3002;

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));
