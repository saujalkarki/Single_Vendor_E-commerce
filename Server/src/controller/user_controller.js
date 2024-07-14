const mongoose = require("mongoose");
const otpGenerator = require("otp-generator");
const sendSms = require("../services/send_SMS");

// userLogin
exports.registerUser = async (req, res) => {
  const {
    userFirstName,
    userLastName,
    userEmail,
    userPassword,
    userContactNumber,
    userOtp,
  } = req.body;

  const { userProfilePhoto } = req.file;

  if (
    !userFirstName ||
    !userLastName ||
    !userEmail ||
    !userPassword ||
    !userContactNumber ||
    !userProfilePhoto ||
    !userOtp
  ) {
    return res.status(400).json({
      status: "Error",
      message: "Please Enter all the data.",
      data: null,
    });
  }

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

  const otp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  console.log(otp);

  sendSms(userContactNumber, otp);

  userExist[0].userOtp = otp;
  await userExist[0].save();

  if (otp !== userOtp) {
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
    userProfilePhoto,
  });

  res.status(200).json({
    status: "Success",
    message: `User named as ${userFirstName} Created Successfully.`,
    data: newUser,
  });
};
