const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  // Add more fields as needed
},
{
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;