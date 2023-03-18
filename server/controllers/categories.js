import mongoose from 'mongoose';
import Categories from '../models/categories.js';

export const createCategory = async (req, res) => {
  const category = req.body;

  if (!category.name || !category.description || !category.image) {
    return res.status(400).json({ message: 'Missing data' });
  }

  const newCategory = new Categories(category);

  try {
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No category with id: ${id}`);
  }

  try {
    const category = await Categories.findById(id);

    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCategoryByName = async (req, res) => {
  const { name } = req.params;

  try {
    const category = await Categories.findOne({ name });

    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No category with id: ${id}`);
  }

  const updatedCategory = {
    name, description, image, _id: id,
  };

  await Categories.findByIdAndUpdate(id, updatedCategory, { new: true });

  try {
    res.json(updatedCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No category with id: ${id}`);
  }

  await Categories.findByIdAndRemove(id);

  try {
    res.json({ message: 'Category deleted successfully.' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
