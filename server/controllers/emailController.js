const User = require('../models/User');
const bcrypt = require('bcrypt');
const { sendEmail } = require('../utils/mailService');
const crypto = require('crypto'); 
var session = require('express-session');

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

const validateRecovery = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });

    if (user) {
      const otp = crypto.randomInt(100000, 999999).toString();

      req.session.otp = otp;
      req.session.email = email; 
    
      const otpMessage = `
        <p>Hello ${user.name},</p>
        <p>Your One-Time Password (OTP) for account recovery is:</p>
        <h2>${otp}</h2>
        <p>This OTP will expire in 10 minutes. Please use it to verify your identity.</p>
      `;

      try {
        await sendEmail('html', email, '24projectsideas@gmail.com', otpMessage);
        return res.status(200).json({ message: 'OTP sent successfully' });
      } catch (emailError) {
        console.error('Error sending OTP email:', emailError);
        return res.status(500).json({ message: 'Failed to send OTP email' });
      }

    } else {
      return res.status(404).json({ message: 'No account found with this email' });
    }

  } catch (error) {
    console.error('Error validating email:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const validatePin = async (req, res) => {
  try {
    if (!req.session.otp) {
      return res.status(400).json({ message: 'Session expired or no OTP found' });
    }

    const { pin } = req.body;
    if (pin !== req.session.otp) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }


    return res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('Error validating OTP:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

const ChangePassword = async (req, res) => {
  try {
    // Check if OTP is available in the session
    if (!req.session.otp) {
      return res.status(400).json({ message: 'Session expired or no OTP found' });
    }

    // Retrieve the pin (OTP) and the new password from the request body
    const { password } = req.body;



    // Check if a new password is provided
    if (!password) {
      return res.status(400).json({ message: 'New password is required' });
    }

    // Hash the new password before saving it to the database
    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    // Find the user by the email stored in the session
    const user = await User.findOne({ email: req.session.email });

    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ message: 'No account found with this email' });
    }

    // Update only the password, leaving other fields intact
    user.password = hashedPassword;

    // Save the user with the updated password
    await user.save();

    // Clear the OTP session after the password is changed
    req.session.otp = null;

    // Return a success response
    return res.status(200).json({ message: 'Password changed successfully' });

  } catch (error) {
    console.error('Error changing password:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};



const validateLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No email found' });
    }

    if (!user.password || typeof user.password !== 'string') {
      return res.status(500).json({ message: 'Stored password is invalid' });
    }

    const isPasswordValid = await bcrypt.compare(password.trim(), user.password.trim());

    if (isPasswordValid) {
      req.session.user_id = user._id.toString();
      return res.status(200).json({  userData:user , message: 'Login successful' });
    } else {
      return res.status(401).json({ userData:{}, message: 'Invalid password' });
    }

  } catch (error) {
    console.error('Error validating email and password:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  validateEmail, validateLogin , validateRecovery ,validatePin , ChangePassword
};
