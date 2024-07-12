const { Vonage } = require("@vonage/server-sdk");

const apiKey = process.env.vonageAPIkey;
const apiSecret = process.env.vonageAPIsecret;

const vonage = new Vonage({
  apiKey,
  apiSecret,
});

vonage.verify.start({
  number,
});
