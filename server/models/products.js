import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  idProduct: { type: String, required: true, unique: true },
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  unit_price: { type: Number, required: true },
  stock: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  best_seller: { type: Boolean, required: false, default: false },
  discount: { type: Boolean, required: false, default: false },
  release: { type: Boolean, required: false, default: false },
});

export default mongoose.model('Product', productSchema);
