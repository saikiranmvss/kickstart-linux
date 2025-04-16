require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('./config/db');
const User = require('./models/User');

const createAdminUser = async () => {
  await connectDB();

  const email = 'admin@example.com'; 
  const password = 'admin123';       
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    console.log('Admin user already exists:', existingUser.email);
    process.exit(0);
  }

  const newAdmin = new User({
    email: email,
    password: hashedPassword,
    name: 'Admin User',
    role: 'admin', 
  });

  try {
    await newAdmin.save();
    console.log('Admin user created successfully:', email);
  } catch (err) {
    console.error('Error creating admin user:', err);
  } finally {
    mongoose.connection.close();
  }
};

createAdminUser();
