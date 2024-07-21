const router = require("express").Router();
const { createProduct } = require("../controller/product_controller");

router.route("/create").post(createProduct);

module.exports = router;
