const product = require("../model/product_model");

exports.createProduct = async (req, res) => {
  //   const {
  //     productName,
  //     productDescription,
  //     productPrice,
  //     ProductImage,
  //     productDiscountPercentage,
  //     productStock,
  //     size,
  //   } = req.body;

  const { productName, productDescription, productPrice } = req.body;

  if (
    !productName ||
    !productDescription ||
    !productPrice
    // ||
    // !ProductImage ||
    // !productStock ||
    // !size
  ) {
    return res.status(400).json({
      status: "Error",
      message: "Please enter all the data",
      data: null,
    });
  }

  const productExist = await product.find({ productName });

  if (productExist.length !== 0) {
    return res.status().json({
      status: "Error",
      message: "Product with this name already exist.",
      data: null,
    });
  }
};
