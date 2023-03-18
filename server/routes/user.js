import express from 'express';
import {
  registerUser, loginUser, findUserByEmail, getAllUsers,
  updateEmail, updatePassword, updatePhone, deleteUser, verifyToken,
} from '../controllers/user.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/email', findUserByEmail);

router.get('/all', getAllUsers);
router.get('/token', verifyToken);

router.patch('/email', updateEmail);
router.patch('/password', updatePassword);
router.patch('/phone', updatePhone);

router.delete('/delete', deleteUser);

export default router;
