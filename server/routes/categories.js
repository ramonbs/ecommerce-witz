import express from 'express';
import {
  createCategory, getAllCategories, getCategoryById, getCategoryByName,
  updateCategory, deleteCategory,
} from '../controllers/categories.js';

const router = express.Router();

router.post('/', createCategory);

router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.get('/name/:name', getCategoryByName);

router.patch('/:id', updateCategory);

router.delete('/:id', deleteCategory);

export default router;
