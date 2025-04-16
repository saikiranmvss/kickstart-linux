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
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'superadmin'],
    default: 'user',
  },
  mobile: String,
  languages: [
    {
      value: String, 
      label: String,
    },
  ],
  profileImage:String,
  professionalImage:String,
  dob: String,
  gender: String,
  firstName: String,
  lastName: String,
  whatsappNo: String,
  primaryEmail: String,
  secondaryEmail: String,
  address: String,
  country: String,
  notifications: {
    notificationEmail: Boolean,
    notificationSMS: Boolean,
    notificationPhone: Boolean,
    notificationPost: Boolean,
    notificationCompanyEmail: Boolean,
    notificationCompanySMS: Boolean,
    notificationCompanyPhone: Boolean,
    notificationCompanyPost: Boolean
  },
  portfolio: String,
  linkedin: String,
  instagram: String,
  stateCity: String,
  postal: String,
  website: String,
  youtube: String,
  businessName: String,
  businessEmail: String,
  companyAddress: String,
  businessCategory: String,
  subCategory: String,
  companyWebsite: String,
  companyLinkedin: String,
  companyInstagram: String,
  portfolioURL: String,
  companyYoutube: String,
  pastJobExperience: String,
  department: String,
  fromYear: String,
  pastWebsite: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
