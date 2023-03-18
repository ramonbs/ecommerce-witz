import Address from '../models/address.js';
import User from '../models/user.js';

export const registerAddress = async (req, res) => {
  const {
    owner_id, address, city, state, zip, country, number, floor, apartment, referencePoint,
  } = req.body;

  switch (true) {
    case !owner_id:
      return res.status(400).json({ message: 'Owner ID is required' });
    case !address:
      return res.status(400).json({ message: 'Address is required' });
    case !city:
      return res.status(400).json({ message: 'City is required' });
    case !state:
      return res.status(400).json({ message: 'State is required' });
    case !zip:
      return res.status(400).json({ message: 'Zip is required' });
    case !country:
      return res.status(400).json({ message: 'Country is required' });
    case !number:
      return res.status(400).json({ message: 'Number is required' });
    default:
      break;
  }

  // check if owner_id is valid
  const user = await User.findById(owner_id);
  if (!user) return res.status(400).json({ message: 'Invalid owner ID' });

  try {
    const newAddress = new Address({
      owner_id, address, city, state, zip, country, number, floor, apartment, referencePoint,
    });

    await newAddress.save();

    res.status(201).json(newAddress);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAddressesByID = async (req, res) => {
  const { id } = req.params;
  console.log('id', id);

  try {
    const addresses = await Address.find({ owner_id: id });

    res.status(200).json(addresses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();

    res.status(200).json(addresses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteAddress = async (req, res) => {
  const { id } = req.params;

  try {
    await Address.findByIdAndRemove(id);

    res.status(200).json({ message: 'Address deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAddress = async (req, res) => {
  const { id } = req.params;
  const {
    address, city, state, zip, country, number, floor, apartment, referencePoint,
  } = req.body;

  if (!address) return res.status(400).json({ message: 'Address is required' });
  if (!city) return res.status(400).json({ message: 'City is required' });
  if (!state) return res.status(400).json({ message: 'State is required' });
  if (!zip) return res.status(400).json({ message: 'Zip is required' });
  if (!country) return res.status(400).json({ message: 'Country is required' });
  if (!number) return res.status(400).json({ message: 'Number is required' });

  try {
    const updated = await Address.findByIdAndUpdate(id, {
      address, city, state, zip, country, number, floor, apartment, referencePoint,
    }, { new: true });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
