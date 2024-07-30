const User = require("./src/model/user_model");
const bcrypt = require("bcryptjs");

const adminSeeder = async () => {
  try {
    const adminExist = await User.findOne({ userEmail: "admin@gmail.com" });

    if (!adminExist) {
      await User.create({
        userEmail: process.env.ADMIN_EMAIL,
        userPassword: bcrypt.hashSync(process.env.ADMIN_PASS, 10),
        role: "Admin",
        userFirstName: "Admin",
        userLastName: "Admin",
        userContactNumber: "9800000000",
        userProfilePhoto: "This is a hanxom pic of admin.",
      });

      console.log("Admin seeded successfully.");
    } else {
      console.log("Admin seeded already.");
    }
  } catch (err) {
    console.log("Error in admin seeder", err.message);
  }
};

module.exports = adminSeeder;
