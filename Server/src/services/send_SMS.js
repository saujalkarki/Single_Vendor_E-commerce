const { Vonage } = require("@vonage/server-sdk");

const apiKey = process.env.vonageAPIkey;
const apiSecret = process.env.vonageAPIsecret;

const vonage = new Vonage({
  apiKey,
  apiSecret,
});

async function sendSms(to, otp) {
  try {
    await vonage.sms.send({
      to: to,
      from: "Single Vendor Ecommerce.",
      text: `Otp for Single Vendor Ecommerce registration.
      Otp: ${otp}
      This will be expiring in 5 minutes from now.`,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendSms;
