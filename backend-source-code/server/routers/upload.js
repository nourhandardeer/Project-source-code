const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, path.join(__dirname,"../images")); // Specify the folder where uploaded files will be stored
  },
  filename:function (req, file, cb) {
    cb(null,file.originalname); // Use a unique filename
  },
});

const upload = multer({ storage });

// Set up a route to handle image uploads
router.post('/upload', upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { originalname, filename, size } = req.file;

  res.json({
    message: 'File uploaded successfully',
    file: { originalname, filename, size },
  });
});

module.exports = router;