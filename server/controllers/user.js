import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const registerUser = async (req, res) => {
  const { email, password, name, lastname } = req.body;

  const findEmail = await User.findOne({ email });

  if (findEmail) return res.status(400).json({ message: 'Email already exists' });

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
      lastname,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token, message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  switch (true) {
    case !email:
      return res.status(400).json({ message: 'Email is required' });
    case !password:
      return res.status(400).json({ message: 'Password is required' });
    default:
      break;
  }

  const findEmail = await User.findOne({ email });

  if (!findEmail) return res.status(400).json({ message: 'Email não existe!' });

  try {
    const isPasswordCorrect = await bcrypt.compare(password, findEmail.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: 'Senha inválida!' });

    const token = jwt.sign({ id: findEmail._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.status(200).json({ token, message: 'Usuário logado!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findUserByEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });

  const findEmail = await User.findOne({ email });

  if (!findEmail) return res.status(400).json({ message: 'Email does not exist' });

  findEmail.password = undefined;

  try {
    res.status(200).json(findEmail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    users.forEach((user) => {
      user.password = undefined;
    });

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateEmail = async (req, res) => {
  const { email, oldEmail } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });
  if (!oldEmail) return res.status(400).json({ message: 'Old email is required' });

  const findEmail = await User.findOne({ email });

  if (findEmail) return res.status(400).json({ message: 'Email already exists' });

  const verifyOldEmail = await User.findOne({ email: oldEmail });

  if (!verifyOldEmail) return res.status(400).json({ message: 'Old email does not exist' });

  try {
    const updated = await User.findOneAndUpdate({ email: oldEmail }, { email }, { new: true });

    updated.password = undefined;

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePassword = async (req, res) => {
  const { password, email, oldPassword } = req.body;

  if (!password) return res.status(400).json({ message: 'Password is required' });
  if (!oldPassword) return res.status(400).json({ message: 'Old password is required' });
  if (!email) return res.status(400).json({ message: 'Email is required' });

  const findUser = await User.findOne({ email });

  if (!findUser) return res.status(400).json({ message: 'Email does not exist' });

  const compareOldPass = await bcrypt.compare(oldPassword, findUser.password);

  if (!compareOldPass) return res.status(400).json({ message: 'Invalid credentials' });

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const updated = await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true },
    );

    updated.password = undefined;

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePhone = async (req, res) => {
  const { phone, area, email } = req.body;

  if (!phone) return res.status(400).json({ message: 'Phone is required' });
  if (!email) return res.status(400).json({ message: 'Email is required' });
  if (!area) return res.status(400).json({ message: 'Area is required' });

  const findUser = await User.findOne({ email });

  if (!findUser) return res.status(400).json({ message: 'Email does not exist' });

  try {
    const updated = await User.findOneAndUpdate({ email }, { phone }, { new: true });
    const updateArea = await User.findOneAndUpdate({ email }, { area }, { new: true });

    // Phones cant be the same
    if (updated.phone === findUser.phone)
      return res.status(400).json({ message: 'Phone already exists' });

    updated.password = undefined;
    updateArea.password = undefined;

    res.status(200).json({ message: 'Phone updated', updateArea });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: 'Email is required' });

  const findUser = await User.findOne({ email });

  if (!findUser) return res.status(400).json({ message: 'Email does not exist' });

  try {
    await User.findOneAndDelete({ email });

    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = (req, res) => {
  const bearer = req.headers.authorization;
  const token = bearer && bearer.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const findUser = User.findById(decoded.id);

    if (!findUser) return res.status(400).json({ message: 'User does not exist' });

    res.status(200).json({ message: 'Token verified' });
  } catch (error) {
    res.status(500);
  }
};
