const mongoose = require("mongoose");
const adminSeeder = require("../../admin_seeder");

try {
  dbConfig = async (URI) => {
    await mongoose.connect(URI);
    console.log("Database connected successfully.");
    adminSeeder();
  };
} catch (err) {
  console.log(err);
}

module.exports = dbConfig;
