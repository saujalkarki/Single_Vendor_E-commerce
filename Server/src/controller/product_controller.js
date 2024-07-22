// const mongoose = require("mongoose");
// const product = require("../model/product_model");

// const errorMessage = {
//   status: "Error",
//   message: "Error message here",
//   data: null,
// };

// const successMessage = {
//   status: "Success",
//   message: "Success message here",
//   data: null,
// };

// exports.createProduct = async (req, res) => {
//   const {
//     productName,
//     // productDescription,
//     // productPrice,
//     // productDiscountPercentage,
//     // productStock,
//     // size,
//   } = req.body;

//   console.log(req.body);

//   const productImages = req.file;

//   console.log(
//     productName
//     // productDescription,
//     // productPrice,
//     // productDiscountPercentage,
//     // productStock,
//     // size
//   );
//   console.log(productImages);

//   // if (
//   //   !productName ||
//   //   !productDescription ||
//   //   !productPrice ||
//   //   !productImages ||
//   //   !productStock ||
//   //   !size
//   // ) {
//   //   return res
//   //     .status(400)
//   //     .json({ ...errorMessage, message: "Please enter all the data." });
//   // }

//   // const productExist = await product.find({ productName });

//   // if (productExist.length !== 0) {
//   //   return res.status(400).json({
//   //     ...errorMessage,
//   //     message: "Product with this name already exist.",
//   //   });
//   // }

//   // const newProduct = await product.create({
//   //   productName,
//   //   productDescription,
//   //   productPrice,
//   //   productImages: [`Img1`, `Img2`, `Img3`],
//   //   productDiscountPercentage,
//   //   productStock,
//   //   size,
//   // });

//   // res.status(200).json({
//   //   ...successMessage,
//   //   message: "Product created successfully.",
//   //   data: newProduct,
//   // });
// };

exports.createProduct = async (req, res) => {
  const { productName } = req.body;

  console.log(req.body);
  console.log(productName);
  // console.log(req.files);
  // console.log(productImage);

  res.json({ message: `Product created successfully ` });
};
