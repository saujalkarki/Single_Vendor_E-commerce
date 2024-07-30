const router = require("express").Router();
const multer = require("multer");

const catchAsync = require("../middleware/catch_async");

const storage = require("../services/multer_config");
const upload = multer({ storage: storage });

const {
  userSignUpOtp,
  userSignUp,
  userLogin,
} = require("../controller/user_controller");

// auth
router.route("/signup/otp").post(catchAsync(userSignUpOtp));
router
  .route("/signup")
  .post(upload.single("userProfilePhoto"), catchAsync(userSignUp));
router.route("/login").post(catchAsync(userLogin));

module.exports = router;
