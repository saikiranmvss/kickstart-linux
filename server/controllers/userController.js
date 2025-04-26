const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
var session = require('express-session');

const createUser = async (req, res) => {
    try {
      const { email, name, googleId } = req.body;
  
      if (!email || !googleId) {
        return res.status(400).json({ message: "Email and Google ID are required" });
      }
  
      let userNew = await User.findOne({ email });
  
      if (userNew) {
        if (!userNew.googleId) {
          userNew.googleId = googleId;
          await userNew.save();
        }

        const user = await User.findOne({ email });
          if (!user) {
            return res.status(404).json({ message: 'No email found' });
          }            
          
          const accessToken = jwt.sign(
            { userId: user._id, email: user.email, role: user.role,  },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
          );
          
          const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
          );
      
          
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
          });
      
          req.session.user_id= user._id.toString();
          console.log(req.session.user_id);
          return res.status(200).json({
            accessToken,
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
            },
            message: 'User already exists',
          });

      }
  
      userNew = new User({
        email,
        name,
        googleId,
      });
  
      await userNew.save();

          const user = await User.findOne({ email });
          if (!user) {
            return res.status(404).json({ message: 'No email found' });
          }            
          
          const accessToken = jwt.sign(
            { userId: user._id, email: user.email, role: user.role,  },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
          );
          
          const refreshToken = jwt.sign(
            { userId: user._id },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
          );
      
          
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000, 
          });
      
          req.session.user_id= user._id.toString();
          console.log(req.session.user_id);
          return res.status(200).json({
            accessToken,
            user: {
              id: user._id,
              email: user.email,
              name: user.name,
            },
            message: 'User created successfully',
          });

      return res.status(201).json({ message: "User created successfully", user });
  
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };

  const RegisterUser = async (req, res) => {
    try {
      const {
        email,
        password,
        firstName,
        lastName,
        mobile,
        postal,
        city,
        state,
        country,
      } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      let user = await User.findOne({ email });
  
      if (user) {
        return res.status(200).json({ message: "User already exists", user });
      }
  
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Create new user
      user = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        mobile,
        postal,
        city,
        state,
        country,
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
  
  module.exports = { createUser, saveProfile, getUserDetails, RegisterUser };
  