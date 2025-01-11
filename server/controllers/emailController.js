const User = require('../models/User');

const validateEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    
    if (user) {
      return res.status(200).json({ message: 'Email exists' });
    } else {
      return res.status(404).json({ message: 'No email found' });
    }
  } catch (error) {
    console.error('Error validating email:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  validateEmail,
};
