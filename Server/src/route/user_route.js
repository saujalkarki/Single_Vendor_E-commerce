const router = require("express").Router();
const multer = require("multer");

const storage = require("../services/multer_config");
const upload = multer({ storage: storage });

const { userSignUpOtp, userSignUp } = require("../controller/user_controller");

router.route("/signup/otp").post(userSignUpOtp);
router.route("/signup").post(upload.single("userProfilePhoto"), userSignUp);

module.exports = router;
