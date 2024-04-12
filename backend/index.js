const express = require("express"); // creating the server
const app = express();
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: true })); // middleware

const mongoose = require("mongoose"); // connecting to database// const axios = require('axios')// calling the services
// <7-? callback
mongoose
  .connect("mongodb://127.0.0.1:27017/B2B_Ecommerce")
  .then((sucess) => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, (err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port=>" + 3000);
  }
}); //where my services will called()

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const customerRoutes = require("./routes/customerRoutes");
app.use("/customers", customerRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/transactions", transactionRoutes);