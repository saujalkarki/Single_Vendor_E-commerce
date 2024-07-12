const express = require("express");
const app = express();

require("dotenv").config();

// requiring from env
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

// requiring database connecting func and connecting to db
const dbConfig = require("./src/database/db_config");
dbConfig(mongoURI);

// requiring route
const userRoute = require("./src/route/user_route");
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}.`);
});
