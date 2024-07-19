const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
    min: 10,
    max: 100000,
  },
  ProductImage: {
    type: [String],
    required: true,
  },
  productDiscountPercentage: {
    type: Number,
    min: 5,
    max: 75,
    default: 0,
  },
  productStock: {
    type: Number,
    required: true,
    min: 0,
    default: 10,
  },
  size: {
    type: String,
    enum: ["xs", "s", "m", "l", "xl"],
    default: "m",
  },
});

const Product = mongoose.model("Product", productModel);

module.exports = Product;
