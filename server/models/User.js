const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: false, // Not required for Google Sign-In
  },
  name: {
    type: String,
    required: false,
  },
  googleId: {
    type: String, // Store Google's unique ID for the user
    unique: true,
    sparse: true, // Allows null values without uniqueness constraint issues
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
