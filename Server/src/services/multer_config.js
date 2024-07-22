// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const allowedFileTypes = ["image/png,", "image/jpg", "image/jpeg"];
//     console.log(file);

//     if (!allowedFileTypes.includes(file.mimetype)) {
//       return cb(new Error("File with this filetype not allowed."));
//     }

//     cb(null, "../uploads");
//   },

//   filename: function (req, file, cb) {
//     cb(null, `-${file.fieldname}--${file.originalname}`);
//   },
// });

// module.exports = storage;

const multer = require("multer");
const path = require("path");

// Define allowed file types
const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];

// Multer disk storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Check if file type is allowed
    if (!allowedFileTypes.includes(file.mimetype)) {
      return cb(new Error("File with this filetype not allowed."));
    }

    // Use an absolute path for the uploads directory
    cb(null, path.join(__dirname, "../uploads"));
  },

  filename: function (req, file, cb) {
    // Generate a unique filename to avoid collisions
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
  },
});

module.exports = storage;
