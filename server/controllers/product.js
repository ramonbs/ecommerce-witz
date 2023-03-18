import mongoose from 'mongoose';
import multer from 'multer';
import Product from '../models/products.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'images');
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Math.random().toString(36).substring(7)}-${file.originalname}`);
  },
});

const parser = multer({ storage });

export const uploadImage = async (req, res) => {
  parser.single('thumbnail')(req, res, (err) => {
    if (err) {
      return res.status(400).json({ message: err.message });
    }

    const image = {};
    image.id = req.file.filename;
    image.url = `/${image.id}`;
    res.status(200).json(image);
  });
};

export const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.idProduct || !product.title || !product.description
    || !product.unit_price || !product.stock
    || !product.thumbnail) return res.status(400).send('Missing data to create a product.');

  const newProduct = new Product(product);

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProductByName = async (req, res) => {
  const { title } = req.params;

  try {
    const product = await Product.findOne({ title });

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!product.idProduct || !product.title || !product.description) {
    return res
      .status(400).send('Missing data to update a product.');
  }

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { ...product }, { new: true });

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

  try {
    await Product.findByIdAndRemove(id);

    res.status(200).json({ message: 'Product deleted successfully.' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
