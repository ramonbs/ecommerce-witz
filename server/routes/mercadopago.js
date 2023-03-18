import express from 'express';
import {
  createPreference, getAllPreferences, getPreferenceByID, getAllPayments, getPaymentByOrderID,
} from '../controllers/mercadopago.js';

const router = express.Router();

router.post('/createpreference', createPreference);
router.get('/getallpreferences', getAllPreferences);
router.get('/getpreferencebyid/:id', getPreferenceByID);
router.get('/getallpayments', getAllPayments);
router.get('/getpaymentbyorderID/:id', getPaymentByOrderID);

export default router;
