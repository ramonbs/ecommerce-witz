import Newsletter from '../models/newsletter.js';

export const getAllEmails = async (req, res) => {
  try {
    const allEmails = await Newsletter.find();
    res.status(200).json(allEmails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const fetchEmails = async (req, res) => {
  const { email } = req.body;
  try {
    const newEmail = new Newsletter({ email });
    await newEmail.save();
    res.status(201).json(newEmail);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
