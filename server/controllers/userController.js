const User = require('../models/User');
const createUser = async (req, res) => {
    try {
      const { email, name, googleId } = req.body;
  
      if (!email || !googleId) {
        return res.status(400).json({ message: "Email and Google ID are required" });
      }
  
      let user = await User.findOne({ email });
  
      if (user) {
        if (!user.googleId) {
          user.googleId = googleId;
          await user.save();
        }
        return res.status(200).json({ message: "User already exists", user });
      }
  
      user = new User({
        email,
        name,
        googleId,
      });
  
      await user.save();
      return res.status(201).json({ message: "User created successfully", user });
  
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  module.exports = { createUser };
  