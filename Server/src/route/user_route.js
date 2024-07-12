const router = require("express").Router();

const { registerUser } = require("../controller/user_controller");

router.route("/register").post(registerUser);

module.exports = router;
