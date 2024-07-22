const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productModel = new Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
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
    // productImages: {
    //   type: [String],
    //   required: true,
    //   validate: {
    //     validator: function (arr) {
    //       return arr.length === 3;
    //     },
    //     message: "product Image must contains 3 images.",
    //   },
    // },
    productImages: {
      type: [String],
      required: true,
      validate: [limitArray(3), "Product Images must be three in numbers."],
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
  },
  {
    timestamps: true,
  }
);

function limitArray(limit) {
  return function (value) {
    return value.length === limit;
  };
}

const product = mongoose.model("Product", productModel);

module.exports = product;
