import express from 'express';
import {
  createProduct, getProducts, getProductById, getProductByName, updateProduct, deleteProduct,
  uploadImage,
} from '../controllers/product.js';

const __dirname = process.cwd();

const router = express.Router();

router.post('/', createProduct);

router.get('/', getProducts);
router.get('/images/:name', (req, res) => {
  res.sendFile(`${__dirname}/images/${req.params.name}`);
});
router.get('/:id', getProductById);
router.get('/title/:title', getProductByName);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.post('/upload', uploadImage);

export default router;
