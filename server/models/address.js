import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
  owner_id: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: false,
    default: '',
  },
  apartment: {
    type: String,
    required: false,
    default: '',
  },
  referencePoint: {
    type: String,
    required: false,
    default: '',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Address', addressSchema);
