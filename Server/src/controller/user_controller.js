const mongoose = require("mongoose");
const otpGenerator = require("otp-generator");

const from = VONAGE_BRAND_NAME;
const to = TO_NUMBER;
const text = "A text message sent using the Vonage SMS API";

async function sendSMS() {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

sendSMS();

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

  // sending OTP using to contact Number
  try {
    await twilio.messages.create({
      body: `Here is your registration otp.
        OTP : ${otp}
        Please don't share this with anyone.`,
      to: userContactNumber,
      from: "+15076901952",
    });
  } catch (err) {
    console.log(err);
  }

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
