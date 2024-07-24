const express = require("express");
const app = express();
const cors = require("cors");

// allowing cross origin resouce sharing CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

// configuring for .env variables
require("dotenv").config();

//parsing json data and url encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// requiring from env
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

// requiring database connecting func and connecting to db
const dbConfig = require("./src/database/db_config");
dbConfig(mongoURI);

// requiring user route
const userRoute = require("./src/route/user_route");
app.use("/user", userRoute);

// requiring product route
const productRoute = require("./src/route/product_route");
app.use("/product", productRoute);

app.listen(port, () => {
  console.log(`Server started successfully on port ${port}.`);
});
