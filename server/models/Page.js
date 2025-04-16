const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
  pageContent: {
    type: String, 
    required: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Page', pageSchema);
