const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();
const Image = require('../modules/imageModule');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, path.join(__dirname,"../images")); // Specify the folder where uploaded files will be stored
  },
  filename:function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
  },
});

const upload = multer({ storage });

// Set up a route to handle image uploads
router.post('/', upload.single("image"), async(req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { originalname, filename, size } = req.file;
  try {
    // Save image data to the "images" collection
    const image = new Image({
      filename,
      path: `/upload/${filename}`, // Assuming the images are stored in the "upload" folder
      size,
      // Add more fields as needed
    });

    const savedImage = await image.save();

  res.json({
    message: 'File uploaded successfully',
    file: { originalname, filename, size },
    imageData: savedImage, 
  });
} catch (error) {
  console.error('Error saving image data:', error);
  res.status(500).json({ message: 'Internal Server Error' });
}
});

module.exports = router;