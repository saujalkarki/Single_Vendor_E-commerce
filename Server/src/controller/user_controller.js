const mongoose = require("mongoose");
const User = require("../model/user_model");

const otpGenerator = require("otp-generator");
const sendSms = require("../services/send_SMS");

let signUpOtp;

const errorMessage = {
  status: "Error",
  message: "Error message here",
  data: null,
};

const successMessage = {
  status: "Success",
  message: "Success message here",
  data: null,
};

// sendOtp
exports.userSignUpOtp = async (req, res) => {
  const { userContactNumber } = req.body;

  if (!userContactNumber) {
    return res.status(400).json({
      ...errorMessage,
      message: "Please enter a valid contact number.",
    });
  }

  signUpOtp = otpGenerator.generate(6, {
    lowerCaseAlphabets: true,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  console.log(signUpOtp);

  await sendSms(userContactNumber, signUpOtp);

  res.status(200).json({
    ...successMessage,
    message: "Otp Sent Successfully.",
  });
};

// userLogin
exports.userSignUp = async (req, res) => {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userContactNumber,
    userOtp,
  } = req.body;

  const userProfilePhoto = req.file;

  console.log(userProfilePhoto);

  // if (
  //   !userFirstName ||
  //   !userLastName ||
  //   !userEmail ||
  //   !userPassword ||
  //   !userContactNumber ||
  //   !userOtp ||
  //   !userProfilePhoto
  // ) {
  //   return res.status(400).json({
  //     ...errorMessage,
  //     message: "Please Enter all the data.",
  //   });
  // }

  const userExist = await User.find({
    userEmail,
  });

  if (userExist.length > 0) {
    return res.status(400).json({
      status: "Error",
      message: "User with this Email or contact already exist.",
      data: null,
    });
  }

  if (signUpOtp !== userOtp) {
    return res.status(400).json({
      status: "Error",
      message: "Please check and enter the correct OTP.",
      data: null,
    });
  }

  const newUser = await User.create({
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userContactNumber,
    userProfilePhoto: `${Date.now()}--}`,
  });

  res.status(200).json({
    status: "Success",
    message: `User named as ${userFirstName} Created Successfully.`,
    data: newUser,
  });
};
