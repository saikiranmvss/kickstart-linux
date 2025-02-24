const User = require('../models/User');
var session = require('express-session');

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

  const saveProfile = async (req, res) => {
    try {

      const { email, ...updatedData } = req.body;
  
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
  
      const user = await User.findOneAndUpdate(
        { email: email },
        { $set: updatedData },
        { new: true, upsert: false }
      );
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.status(200).json({ message: "Profile updated successfully", user });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const getUserDetails = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id).select("-password");
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      req.session.user_id = user._id.toString();
      req.session.email = user.email;
      res.status(200).json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  
  module.exports = { createUser , saveProfile , getUserDetails };
  