import mongoose from 'mongoose';

const newsletterSchema = mongoose.Schema({
  email: String,
});

export default mongoose.model('Newsletter', newsletterSchema);
