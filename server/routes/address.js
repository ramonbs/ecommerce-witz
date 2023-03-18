import express from 'express';
import {
  registerAddress, getAddressesByID, getAllAddresses, updateAddress, deleteAddress,
} from '../controllers/address.js';

const router = express.Router();

router.post('/', registerAddress);

router.get('/:id', getAddressesByID);
router.get('/', getAllAddresses);

router.patch('/:id', updateAddress);

router.delete('/:id', deleteAddress);

export default router;
