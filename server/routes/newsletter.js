import express from 'express';
import { getAllEmails, fetchEmails } from '../controllers/newsletter.js';

const router = express.Router();

router.get('/all', getAllEmails);
router.post('/', fetchEmails);

export default router;
