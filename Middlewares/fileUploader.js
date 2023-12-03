const multer = require("multer");
const path = require("path");

// Define file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Specify file format that can be saved
function fileFilter(req, file, cb)  {
  const allowedFileTypes = ['application/pdf'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Invalid file type. Only PDF files are allowed.'), false); // Reject the file
  }
};

const upload = multer({ storage, fileFilter });

// File Size Formatter
const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};

module.exports = { upload, fileSizeFormatter };