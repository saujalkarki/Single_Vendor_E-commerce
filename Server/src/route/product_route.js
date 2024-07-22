const router = require("express").Router();

// file handling using multer
const multer = require("multer");
const storage = require("../services/multer_config");
const upload = multer({ storage: storage });

const { createProduct } = require("../controller/product_controller");

router.route("/create").post(upload.array("productImages", 3), createProduct);
// router.route("/create").post(createProduct);

module.exports = router;
